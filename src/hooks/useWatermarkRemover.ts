import { useState, useCallback } from 'react';
import imageCompression from 'browser-image-compression';

export function useWatermarkRemover() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);

  const processImage = useCallback(async (
    originalImageData: ImageData, 
    maskImageData: ImageData
  ) => {
    setIsProcessing(true);
    setError(null);
    setResultImage(null);

    try {
      return new Promise<void>((resolve, reject) => {
        // Instantiate the worker
        const worker = new Worker('/workers/opencvWorker.js');

        worker.onmessage = (e) => {
          const { success, resultImageData, error } = e.data;
          
          if (success && resultImageData) {
            // Convert ImageData back to a data URL so we can display/download it
            const canvas = document.createElement('canvas');
            canvas.width = resultImageData.width;
            canvas.height = resultImageData.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              ctx.putImageData(resultImageData, 0, 0);
              const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
              setResultImage(dataUrl);
            } else {
              setError("Failed to create result canvas");
            }
          } else {
            setError(error || "Unknown error during processing");
          }
          
          setIsProcessing(false);
          worker.terminate();
          resolve();
        };

        worker.onerror = (err) => {
          console.error("Worker error:", err);
          setError("Failed to initialize processing engine.");
          setIsProcessing(false);
          worker.terminate();
          reject(err);
        };

        // Send data to worker
        worker.postMessage({
          originalImageData,
          maskImageData
        });
      });
    } catch (err: any) {
      setError(err.message || "An error occurred");
      setIsProcessing(false);
    }
  }, []);

  const compressImageIfNeeded = async (file: File): Promise<File> => {
    // If > 1MB, compress
    if (file.size > 1024 * 1024) {
      console.log(`Compressing image (original size: ${(file.size / 1024 / 1024).toFixed(2)} MB)...`);
      try {
        const compressedFile = await imageCompression(file, {
          maxSizeMB: 1,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
        });
        console.log(`Compressed to: ${(compressedFile.size / 1024 / 1024).toFixed(2)} MB`);
        return compressedFile;
      } catch (error) {
        console.error("Compression error:", error);
        return file; // Fallback to original if compression fails
      }
    }
    return file;
  };

  return {
    isProcessing,
    error,
    resultImage,
    processImage,
    compressImageIfNeeded,
    setResultImage, // To allow clearing the result
  };
}
