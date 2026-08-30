import { useState, useCallback } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocument } from 'pdf-lib';

export function usePdfWatermarkRemover() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [error, setError] = useState<string | null>(null);
  const [resultPdfUrl, setResultPdfUrl] = useState<string | null>(null);

  const processPdf = useCallback(async (
    originalFile: File,
    maskImageData: ImageData,
    maskWidth: number,
    maskHeight: number
  ) => {
    setIsProcessing(true);
    setProgress(0);
    setError(null);
    setResultPdfUrl(null);

    try {
      // Ensure worker is configured on the client
      if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
      }

      // 1. Load the original PDF with pdf.js
      const arrayBuffer = await originalFile.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdf = await loadingTask.promise;
      const numPages = pdf.numPages;

      // 2. Create a new empty PDF with pdf-lib
      const newPdfDoc = await PDFDocument.create();

      // 3. Process pages in chunks to avoid memory crashes
      const CHUNK_SIZE = 5; 
      
      const worker = new Worker('/workers/opencvWorker.js');

      // Helper function to process a single page through OpenCV
      const processPageImage = (originalImageData: ImageData): Promise<ImageData> => {
        return new Promise((resolve, reject) => {
          const handler = (e: MessageEvent) => {
            const { success, resultImageData, error } = e.data;
            worker.removeEventListener('message', handler);
            if (success) {
              resolve(resultImageData);
            } else {
              reject(new Error(error));
            }
          };
          worker.addEventListener('message', handler);
          
          worker.postMessage({
            originalImageData,
            maskImageData // We assume the mask is the same for all pages
          });
        });
      };

      for (let i = 1; i <= numPages; i++) {
        // Render page to canvas
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 }); // Good balance of quality/memory
        
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) throw new Error("Could not create canvas context");
        
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: ctx,
          viewport: viewport
        }).promise;

        const pageImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        // Run through OpenCV worker
        const cleanImageData = await processPageImage(pageImageData);

        // Put back to canvas and convert to base64 JPEG
        ctx.putImageData(cleanImageData, 0, 0);
        const base64Jpg = canvas.toDataURL('image/jpeg', 0.9);

        // Embed in new PDF
        const image = await newPdfDoc.embedJpg(base64Jpg);
        const newPage = newPdfDoc.addPage([viewport.width, viewport.height]);
        newPage.drawImage(image, {
          x: 0,
          y: 0,
          width: viewport.width,
          height: viewport.height,
        });

        // Cleanup
        page.cleanup();
        
        // Update Progress
        setProgress(Math.round((i / numPages) * 100));
      }

      worker.terminate();

      // 4. Save and return the final PDF
      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      setResultPdfUrl(url);

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to process PDF.");
    } finally {
      setIsProcessing(false);
      setProgress(100);
    }
  }, []);


  // Helper to extract the first page as an image URL for the masking UI
  const getFirstPageAsImage = async (file: File): Promise<string> => {
    // Ensure worker is configured on the client
    if (!pdfjsLib.GlobalWorkerOptions.workerSrc) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
    }

    const arrayBuffer = await file.arrayBuffer();
    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1.5 });
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({ canvasContext: ctx!, viewport: viewport }).promise;
    
    const url = canvas.toDataURL('image/jpeg');
    page.cleanup();
    return url;
  };

  return {
    isProcessing,
    progress,
    error,
    resultPdfUrl,
    processPdf,
    getFirstPageAsImage,
    setResultPdfUrl
  };
}
