'use client';

import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Upload, FileText, CheckCircle, RefreshCw, Trash2, ArrowUp, ArrowDown, Download, Image as ImageIcon } from 'lucide-react';
import { ReviewModal } from '@/components/ui/ReviewModal';

interface ImageItem {
  id: string;
  file: File;
  previewUrl: string;
}

export default function JpgToPdfClient() {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);
    
    const validImages = files.filter(file => {
      const type = file.type.toLowerCase();
      return type === 'image/jpeg' || type === 'image/png' || type === 'image/jpg';
    });

    if (validImages.length === 0) {
      alert('Please select valid JPG or PNG images.');
      return;
    }

    const newItems: ImageItem[] = validImages.map(file => ({
      id: Math.random().toString(36).substring(2, 9),
      file,
      previewUrl: URL.createObjectURL(file),
    }));

    setImages(prev => [...prev, ...newItems]);
    setPdfUrl(null);
  };

  const removeImage = (id: string) => {
    setImages(prev => {
      const item = prev.find(img => img.id === id);
      if (item) URL.revokeObjectURL(item.previewUrl);
      return prev.filter(img => img.id !== id);
    });
    setPdfUrl(null);
  };

  const moveImage = (index: number, direction: 'up' | 'down') => {
    if (direction === 'up' && index === 0) return;
    if (direction === 'down' && index === images.length - 1) return;

    const newImages = [...images];
    const temp = newImages[index];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    newImages[index] = newImages[targetIndex];
    newImages[targetIndex] = temp;

    setImages(newImages);
    setPdfUrl(null);
  };

  const convertToPdf = async () => {
    if (images.length === 0) return;
    setIsProcessing(true);

    try {
      const pdfDoc = await PDFDocument.create();

      for (const item of images) {
        const arrayBuffer = await item.file.arrayBuffer();
        let embeddedImage;

        if (item.file.type === 'image/png') {
          embeddedImage = await pdfDoc.embedPng(arrayBuffer);
        } else {
          embeddedImage = await pdfDoc.embedJpg(arrayBuffer);
        }

        // Add page matching image dimensions
        const page = pdfDoc.addPage([embeddedImage.width, embeddedImage.height]);
        page.drawImage(embeddedImage, {
          x: 0,
          y: 0,
          width: embeddedImage.width,
          height: embeddedImage.height,
        });
      }

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (err) {
      alert('An error occurred while compiling your PDF. Please verify your images and try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!pdfUrl) return;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'images-converted.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show rating/feedback modal
    setTimeout(() => {
      setShowReviewModal(true);
    }, 1000);
  };

  const resetAll = () => {
    images.forEach(img => URL.revokeObjectURL(img.previewUrl));
    setImages([]);
    setPdfUrl(null);
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
      {images.length === 0 ? (
        <div style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '3.5rem 1.5rem', textAlign: 'center', background: '#f8fafc', position: 'relative', cursor: 'pointer' }}>
          <input
            type="file"
            accept="image/jpeg,image/png,image/jpg"
            multiple
            onChange={handleFileSelect}
            style={{ position: 'absolute', inset: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
            <div style={{ background: '#e0e7ff', padding: '1rem', borderRadius: '50%', color: '#4f46e5' }}>
              <Upload size={32} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
            Drop JPG or PNG images here or click to select
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Convert one or multiple images into a single PDF document. 100% private client-side processing.
          </p>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
            <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
              Selected Images ({images.length})
            </h4>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                style={{ padding: '0.5rem 1rem', background: '#f1f5f9', border: 'none', borderRadius: '8px', color: '#1e293b', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Add More Images
              </button>
              <button
                type="button"
                onClick={resetAll}
                style={{ padding: '0.5rem 1rem', background: '#fff1f2', border: 'none', borderRadius: '8px', color: '#e11d48', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}
              >
                Clear All
              </button>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/jpg"
              multiple
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
          </div>

          {/* Grid list of images with sorting/ordering */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
            {images.map((img, idx) => (
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
                  position: 'relative',
                }}
              >
                {/* Image Preview Container */}
                <div style={{ position: 'relative', paddingTop: '100%', background: '#f8fafc' }}>
                  <img
                    src={img.previewUrl}
                    alt={`Preview ${idx + 1}`}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', padding: '0.5rem' }}
                  />
                  <span style={{ position: 'absolute', left: '0.5rem', top: '0.5rem', background: 'rgba(15, 23, 42, 0.75)', color: '#ffffff', fontSize: '0.75rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '6px' }}>
                    Page {idx + 1}
                  </span>
                </div>

                {/* Actions bottom bar */}
                <div style={{ padding: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', gap: '0.25rem' }}>
                    <button
                      type="button"
                      onClick={() => moveImage(idx, 'up')}
                      disabled={idx === 0}
                      style={{ border: 'none', background: 'none', color: idx === 0 ? '#cbd5e1' : '#64748b', cursor: idx === 0 ? 'not-allowed' : 'pointer', padding: '0.25rem' }}
                      title="Move Page Up"
                    >
                      <ArrowUp size={16} />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveImage(idx, 'down')}
                      disabled={idx === images.length - 1}
                      style={{ border: 'none', background: 'none', color: idx === images.length - 1 ? '#cbd5e1' : '#64748b', cursor: idx === images.length - 1 ? 'not-allowed' : 'pointer', padding: '0.25rem' }}
                      title="Move Page Down"
                    >
                      <ArrowDown size={16} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeImage(img.id)}
                    style={{ border: 'none', background: 'none', color: '#ef4444', cursor: 'pointer', padding: '0.25rem' }}
                    title="Delete Image"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            {!pdfUrl ? (
              <button
                type="button"
                onClick={convertToPdf}
                disabled={isProcessing}
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
                  cursor: isProcessing ? 'not-allowed' : 'pointer',
                  opacity: isProcessing ? 0.7 : 1,
                  fontSize: '1rem',
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
                }}
              >
                {isProcessing ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    Generating PDF...
                  </>
                ) : (
                  <>
                    <ImageIcon size={18} />
                    Convert to PDF
                  </>
                )}
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#16a34a', fontWeight: 600, fontSize: '1.05rem' }}>
                  <CheckCircle size={22} />
                  PDF Compiled Successfully!
                </div>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <button
                    type="button"
                    onClick={handleDownload}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: '#16a34a',
                      color: '#ffffff',
                      padding: '0.85rem 2.25rem',
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
                  <button
                    type="button"
                    onClick={resetAll}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      background: '#f1f5f9',
                      color: '#1e293b',
                      padding: '0.85rem 1.75rem',
                      borderRadius: '8px',
                      fontWeight: 600,
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '1rem',
                    }}
                  >
                    Start Over
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {showReviewModal && <ReviewModal isOpen={showReviewModal} onClose={() => setShowReviewModal(false)} />}
    </div>
  );
}
