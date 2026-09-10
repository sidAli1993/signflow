'use client';

import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { PDFDocument } from 'pdf-lib';
import { FileText, CheckCircle, RefreshCw, Download, FileArchive } from 'lucide-react';
import { ReviewModal } from '@/components/ui/ReviewModal';

export default function ConvertPdfToBlackAndWhiteClient() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [outputPdfUrl, setOutputPdfUrl] = useState<string | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`;
  }, []);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const selectedFile = e.target.files[0];
    if (selectedFile.type !== 'application/pdf' && !selectedFile.name.endsWith('.pdf')) {
      alert('Please select a valid PDF file.');
      return;
    }

    setFile(selectedFile);
    setOutputPdfUrl(null);
    setProgress(0);
  };

  const convertPdfToGrayscale = async () => {
    if (!file) return;
    setIsProcessing(true);
    setProgress(5);

    try {
      const buffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: buffer });
      const pdf = await loadingTask.promise;
      const totalPages = pdf.numPages;
      
      const newPdfDoc = await PDFDocument.create();

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 });
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d', { willReadFrequently: true });
        if (!context) continue;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;
        
        // Convert to grayscale
        const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        for (let j = 0; j < data.length; j += 4) {
          // luminosity method
          const avg = 0.299 * data[j] + 0.587 * data[j + 1] + 0.114 * data[j + 2];
          data[j] = avg;
          data[j + 1] = avg;
          data[j + 2] = avg;
        }
        context.putImageData(imageData, 0, 0);

        const imgDataUrl = canvas.toDataURL('image/jpeg', 0.85);
        const jpgImage = await newPdfDoc.embedJpg(imgDataUrl);
        
        const newPage = newPdfDoc.addPage([viewport.width, viewport.height]);
        newPage.drawImage(jpgImage, {
          x: 0,
          y: 0,
          width: viewport.width,
          height: viewport.height,
        });

        setProgress(Math.round((i / totalPages) * 90) + 5);
      }

      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes as any], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      setOutputPdfUrl(url);
      setProgress(100);
      
      setTimeout(() => {
        setShowReviewModal(true);
      }, 1000);
      
    } catch (err) {
      alert('An error occurred while converting the PDF to black and white. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadPdf = () => {
    if (!outputPdfUrl) return;
    const link = document.createElement('a');
    link.href = outputPdfUrl;
    link.download = `${file?.name?.replace('.pdf', '') || 'document'}-bw.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const resetAll = () => {
    setFile(null);
    setOutputPdfUrl(null);
    setProgress(0);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
      {!file ? (
        <div style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '3.5rem 1.5rem', textAlign: 'center', background: '#f8fafc', position: 'relative', cursor: 'pointer' }}>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileSelect}
            style={{ position: 'absolute', inset: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <div style={{ background: '#e0f2fe', padding: '1rem', borderRadius: '50%', color: '#0284c7' }}>
              <FileArchive size={32} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
            Drop PDF here to convert to Black and White
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Convert any color PDF to grayscale instantly. 100% private in your browser.
          </p>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: '#e0f2fe', color: '#0284c7', padding: '0.75rem', borderRadius: '10px' }}>
                <FileText size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                  {file.name}
                </h4>
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Size: {formatSize(file.size)}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={resetAll}
              style={{ padding: '0.5rem 1rem', background: '#f1f5f9', border: 'none', borderRadius: '8px', color: '#1e293b', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}
            >
              Select Different File
            </button>
          </div>

          {!outputPdfUrl ? (
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              {isProcessing ? (
                <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <RefreshCw size={36} className="animate-spin" style={{ animation: 'spin 1s linear infinite', color: '#0284c7' }} />
                  </div>
                  <h5 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>Converting Document to Grayscale...</h5>
                  <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: '#0284c7', transition: 'width 0.2s ease' }}></div>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', display: 'block' }}>{progress}% complete</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={convertPdfToGrayscale}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--color-primary, #4f46e5)',
                    color: '#ffffff',
                    padding: '0.85rem 2.25rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
                  }}
                >
                  <FileArchive size={18} />
                  Convert PDF to Black and White
                </button>
              )}
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', padding: '1.5rem', background: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle size={28} color="#16a34a" />
                  <div>
                    <h5 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#166534' }}>Conversion Complete!</h5>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#15803d' }}>Your grayscale PDF is ready for download.</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={downloadPdf}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#16a34a',
                    color: '#ffffff',
                    padding: '0.75rem 1.75rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)',
                  }}
                >
                  <Download size={18} />
                  Download PDF
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {showReviewModal && <ReviewModal isOpen={showReviewModal} onClose={() => setShowReviewModal(false)} />}
    </div>
  );
}
