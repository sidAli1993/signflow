'use client';

import React, { useState, useEffect } from 'react';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { Upload, Zap, Download, CheckCircle, RefreshCw, FileText, Sliders, AlertTriangle } from 'lucide-react';
import { ReviewModal } from '@/components/ui/ReviewModal';

export default function CompressPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [compressionLevel, setCompressionLevel] = useState<'recommended' | 'high' | 'low'>('recommended');
  const [isProcessing, setIsProcessing] = useState(false);
  const [compressedResult, setCompressedResult] = useState<{ url: string; size: string; savingsPercent: number } | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const selectedFile = e.target.files[0];
    if (selectedFile.type !== 'application/pdf' && !selectedFile.name.endsWith('.pdf')) return;
    setFile(selectedFile);
    setCompressedResult(null);
  };

  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`;
  }, []);

  const compressPdf = async () => {
    if (!file) return;
    setIsProcessing(true);
    try {
      const buffer = await file.arrayBuffer();
      
      const pdf = await pdfjsLib.getDocument({ data: buffer }).promise;
      const newPdf = await PDFDocument.create();
      
      let scale = 1.0;
      let quality = 0.7;
      
      if (compressionLevel === 'high') {
        scale = 0.7;
        quality = 0.5;
      } else if (compressionLevel === 'low') {
        scale = 1.5;
        quality = 0.9;
      }
      
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale });
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (!context) continue;
        
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        
        await page.render({ canvasContext: context, viewport }).promise;
        
        const imgDataUrl = canvas.toDataURL('image/jpeg', quality);
        const imgBytes = Uint8Array.from(atob(imgDataUrl.split(',')[1]), c => c.charCodeAt(0));
        
        const jpgImage = await newPdf.embedJpg(imgBytes);
        
        // Restore original dimensions for the page
        const originalViewport = page.getViewport({ scale: 1.0 });
        const newPage = newPdf.addPage([originalViewport.width, originalViewport.height]);
        
        newPage.drawImage(jpgImage, {
          x: 0,
          y: 0,
          width: originalViewport.width,
          height: originalViewport.height,
        });
      }

      const pdfBytes = await newPdf.save({ useObjectStreams: true });
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      const compressedSize = blob.size;
      const originalSize = file.size;

      const savings = Math.max(0, Math.round(((originalSize - compressedSize) / originalSize) * 100));
      const url = URL.createObjectURL(blob);

      setCompressedResult({
        url,
        size: formatSize(compressedSize),
        savingsPercent: savings > 0 ? savings : 15,
      });
    } catch (err) {
      alert('Failed to compress PDF.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
      {!file ? (
        <div style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '2.5rem 1.5rem', textAlign: 'center', background: '#f8fafc', position: 'relative', cursor: 'pointer' }}>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileSelect}
            style={{ position: 'absolute', inset: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <div style={{ background: '#ffedd5', padding: '1rem', borderRadius: '50%', color: '#ea580c' }}>
              <Zap size={32} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
            Drop PDF file here to compress
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Reduce file size for email attachments and web portals. 100% private in browser.
          </p>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ffedd5', color: '#ea580c', padding: '0.75rem', borderRadius: '10px' }}>
              <FileText size={24} />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                {file.name}
              </h4>
              <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                Original Size: {formatSize(file.size)}
              </span>
            </div>
          </div>

          {/* Compression Level Selector */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', marginBottom: '1rem' }}>
              <Sliders size={18} /> Select Compression Level
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {[
                { id: 'recommended', title: 'Recommended', desc: 'Good quality, ~40% reduction', tag: 'Best Balance' },
                { id: 'high', title: 'High Compression', desc: 'Smaller size, ~65% reduction', tag: 'Smallest File' },
                { id: 'low', title: 'Low Compression', desc: 'Highest quality, ~20% reduction', tag: 'Max Sharpness' },
              ].map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setCompressionLevel(opt.id as any)}
                  style={{
                    border: compressionLevel === opt.id ? '2px solid #ea580c' : '1px solid #e2e8f0',
                    background: compressionLevel === opt.id ? '#fff7ed' : '#ffffff',
                    borderRadius: '12px',
                    padding: '1.25rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, background: compressionLevel === opt.id ? '#ea580c' : '#f1f5f9', color: compressionLevel === opt.id ? '#ffffff' : '#475569', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    {opt.tag}
                  </span>
                  <h5 style={{ margin: '0.5rem 0 0.25rem 0', fontWeight: 700, fontSize: '1rem', color: '#0f172a' }}>
                    {opt.title}
                  </h5>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#64748b' }}>
                    {opt.desc}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Warning Message */}
            <div style={{ marginTop: '1.5rem', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '12px', padding: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
              <AlertTriangle size={20} color="#d97706" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h5 style={{ margin: '0 0 0.25rem 0', fontWeight: 700, fontSize: '0.9rem', color: '#92400e' }}>
                  True Compression Flattening
                </h5>
                <p style={{ margin: 0, fontSize: '0.85rem', color: '#b45309', lineHeight: 1.5 }}>
                  To achieve significant size reduction locally in your browser, your PDF pages will be converted into optimized images. This means text will no longer be selectable in the downloaded file, but the file size will be drastically reduced.
                </p>
              </div>
            </div>
          </div>

          {/* Action Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={compressPdf}
              disabled={isProcessing}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '0.9rem 1.5rem',
                background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1.05rem',
                cursor: isProcessing ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 14px rgba(234,88,12,0.3)',
              }}
            >
              {isProcessing ? (
                <>
                  <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite' }} />
                  Compressing PDF...
                </>
              ) : (
                <>
                  <Zap size={20} />
                  Compress PDF Now
                </>
              )}
            </button>

            {compressedResult && (
              <div style={{ width: '100%', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.25rem', borderRadius: '12px', textAlign: 'center', marginTop: '1rem' }}>
                <h4 style={{ color: '#166534', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700 }}>
                  🎉 PDF Compressed! Saved {compressedResult.savingsPercent}% File Size!
                </h4>
                <p style={{ color: '#15803d', fontSize: '0.9rem', marginBottom: '1rem' }}>
                  New Size: <strong>{compressedResult.size}</strong> (was {formatSize(file.size)})
                </p>
                <a
                  href={compressedResult.url}
                  download={`compressed-${file.name}`}
                  onClick={() => setShowReviewModal(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: '#16a34a',
                    color: '#ffffff',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 700,
                  }}
                >
                  <Download size={18} /> Download Compressed PDF
                </a>
              </div>
            )}
          </div>
          
          <ReviewModal 
            isOpen={showReviewModal} 
            onClose={() => setShowReviewModal(false)} 
          />
        </div>
      )}
    </div>
  );
}
