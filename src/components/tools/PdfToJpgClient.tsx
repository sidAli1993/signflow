'use client';

import React, { useState, useEffect } from 'react';
import * as pdfjsLib from 'pdfjs-dist';
import { Upload, FileText, CheckCircle, RefreshCw, Download, Image as ImageIcon } from 'lucide-react';
import { ReviewModal } from '@/components/ui/ReviewModal';

interface PageImage {
  id: string;
  dataUrl: string;
  pageNum: number;
}

export default function PdfToJpgClient() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState<PageImage[]>([]);
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
    setImages([]);
    setProgress(0);
  };

  const convertPdfToJpg = async () => {
    if (!file) return;
    setIsProcessing(true);
    setProgress(5);

    try {
      const buffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: buffer });
      const pdf = await loadingTask.promise;
      const totalPages = pdf.numPages;
      const extractedImages: PageImage[] = [];

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 }); // 1.5x scale for high quality
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) continue;

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;
        const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
        
        extractedImages.push({
          id: Math.random().toString(36).substring(2, 9),
          dataUrl,
          pageNum: i,
        });

        setProgress(Math.round((i / totalPages) * 90) + 5);
      }

      setImages(extractedImages);
      setProgress(100);
    } catch (err) {
      alert('An error occurred while converting the PDF. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = (img: PageImage) => {
    const link = document.createElement('a');
    link.href = img.dataUrl;
    link.download = `${file?.name?.replace('.pdf', '') || 'page'}-page-${img.pageNum}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadAll = () => {
    if (images.length === 0) return;
    // Download each image sequentially
    images.forEach((img, index) => {
      setTimeout(() => {
        downloadImage(img);
      }, index * 250); // Small timeout delay to avoid browser blocking multiple downloads
    });

    setTimeout(() => {
      setShowReviewModal(true);
    }, images.length * 250 + 500);
  };

  const resetAll = () => {
    setFile(null);
    setImages([]);
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
              <ImageIcon size={32} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
            Drop PDF here to convert to JPEG images
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Extract each page as a separate high-quality JPG image. 100% private in your browser.
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

          {images.length === 0 ? (
            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              {isProcessing ? (
                <div style={{ maxWidth: '300px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <RefreshCw size={36} className="animate-spin" style={{ animation: 'spin 1s linear infinite', color: '#0284c7' }} />
                  </div>
                  <h5 style={{ fontSize: '1.05rem', fontWeight: 600, color: '#1e293b', marginBottom: '0.5rem' }}>Converting Document...</h5>
                  <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${progress}%`, height: '100%', background: '#0284c7', transition: 'width 0.2s ease' }}></div>
                  </div>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.5rem', display: 'block' }}>{progress}% complete</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={convertPdfToJpg}
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
                  <ImageIcon size={18} />
                  Convert PDF to JPG
                </button>
              )}
            </div>
          ) : (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '1rem', fontWeight: 700, color: '#16a34a', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle size={20} />
                  Converted {images.length} pages to JPG!
                </span>
                <button
                  type="button"
                  onClick={downloadAll}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#16a34a',
                    color: '#ffffff',
                    padding: '0.65rem 1.5rem',
                    borderRadius: '8px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    boxShadow: '0 4px 12px rgba(22, 163, 74, 0.25)',
                  }}
                >
                  <Download size={16} />
                  Download All Pages
                </button>
              </div>

              {/* Preview extracted pages */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
                {images.map(img => (
                  <div
                    key={img.id}
                    style={{
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      background: '#ffffff',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <div style={{ position: 'relative', paddingTop: '120%', background: '#f8fafc' }}>
                      <img
                        src={img.dataUrl}
                        alt={`Page ${img.pageNum}`}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: '0.5rem' }}
                      />
                      <span style={{ position: 'absolute', left: '0.5rem', top: '0.5rem', background: 'rgba(15, 23, 42, 0.75)', color: '#ffffff', fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '6px' }}>
                        Page {img.pageNum}
                      </span>
                    </div>
                    <div style={{ padding: '0.65rem', background: '#f8fafc', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
                      <button
                        type="button"
                        onClick={() => downloadImage(img)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          background: 'none',
                          border: 'none',
                          color: '#4f46e5',
                          fontWeight: 600,
                          fontSize: '0.85rem',
                          cursor: 'pointer',
                        }}
                      >
                        <Download size={14} />
                        Download JPG
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {showReviewModal && <ReviewModal isOpen={showReviewModal} onClose={() => setShowReviewModal(false)} />}
    </div>
  );
}
