'use client';

import React, { useState, useEffect } from 'react';
import { PDFDocument, degrees } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { Upload, RotateCw, RotateCcw, Download, CheckCircle, RefreshCw, FileText, Loader2 } from 'lucide-react';

interface PageRotateState {
  pageIndex: number;
  rotation: number; // 0, 90, 180, 270
  thumbnailUrl: string | null;
}

export default function RotatePdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [pageRotations, setPageRotations] = useState<PageRotateState[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [rotatedUrl, setRotatedUrl] = useState<string | null>(null);

  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`;
  }, []);

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;
    const selectedFile = e.target.files[0];
    if (selectedFile.type !== 'application/pdf' && !selectedFile.name.endsWith('.pdf')) return;

    try {
      const buffer = await selectedFile.arrayBuffer();
      
      // Load with pdf-lib to get rotations
      const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
      const count = pdfDoc.getPageCount();
      setFile(selectedFile);
      setPageCount(count);
      setRotatedUrl(null);

      // Load with pdfjs to generate thumbnails
      const pdfjsDoc = await pdfjsLib.getDocument({ data: buffer }).promise;

      const initialRotations: PageRotateState[] = [];
      for (let i = 0; i < count; i++) {
        const existingRot = pdfDoc.getPage(i).getRotation().angle || 0;
        
        // Generate thumbnail
        const page = await pdfjsDoc.getPage(i + 1);
        const viewport = page.getViewport({ scale: 0.3 });
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        if (context) {
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          await page.render({ canvasContext: context, viewport }).promise;
          const thumbnailUrl = canvas.toDataURL('image/jpeg', 0.6);
          initialRotations.push({ pageIndex: i, rotation: existingRot, thumbnailUrl });
        } else {
          initialRotations.push({ pageIndex: i, rotation: existingRot, thumbnailUrl: null });
        }
      }
      setPageRotations(initialRotations);
    } catch (err) {
      alert('Failed to load PDF file.');
      console.error(err);
    }
  };

  const rotateAllClockwise = () => {
    setPageRotations((prev) =>
      prev.map((p) => ({ ...p, rotation: (p.rotation + 90) % 360 }))
    );
    setRotatedUrl(null);
  };

  const rotateAllCounterClockwise = () => {
    setPageRotations((prev) =>
      prev.map((p) => ({ ...p, rotation: (p.rotation - 90 + 360) % 360 }))
    );
    setRotatedUrl(null);
  };

  const rotateSinglePage = (index: number, angle: number) => {
    setPageRotations((prev) => {
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        rotation: (updated[index].rotation + angle + 360) % 360,
      };
      return updated;
    });
    setRotatedUrl(null);
  };

  const saveRotatedPdf = async () => {
    if (!file) return;
    setIsProcessing(true);
    try {
      const buffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
      const pages = pdfDoc.getPages();

      pageRotations.forEach((p, idx) => {
        if (pages[idx]) {
          pages[idx].setRotation(degrees(p.rotation));
        }
      });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setRotatedUrl(url);
    } catch (err) {
      alert('Failed to save rotated PDF.');
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
            <div style={{ background: '#f3e8ff', padding: '1rem', borderRadius: '50%', color: '#9333ea' }}>
              <RotateCw size={32} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
            Drop PDF here or click to rotate pages
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Rotate single pages or the entire document 90°, 180°, or 270°. 100% private in browser.
          </p>
        </div>
      ) : (
        <div>
          {/* Global Rotation Controls */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                {file.name}
              </h4>
              <span style={{ fontSize: '0.85rem', color: '#64748b' }}>
                {pageCount} {pageCount === 1 ? 'Page' : 'Pages'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button
                onClick={rotateAllClockwise}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 1rem', background: '#f3e8ff', color: '#7e22ce', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}
              >
                <RotateCw size={16} /> Rotate All 90° Clockwise
              </button>
              <button
                onClick={rotateAllCounterClockwise}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.55rem 1rem', background: '#f1f5f9', color: '#475569', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}
              >
                <RotateCcw size={16} /> Rotate All 90° CCW
              </button>
            </div>
          </div>

          {/* Individual Page Rotation Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {pageRotations.map((p, idx) => (
              <div key={idx} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                <div style={{ height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', borderRadius: '6px', border: '1px solid #cbd5e1', marginBottom: '0.75rem', transform: `rotate(${p.rotation}deg)`, transition: 'transform 0.3s ease' }}>
                  {p.thumbnailUrl ? (
                    <img src={p.thumbnailUrl} alt={`Page ${idx + 1}`} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} />
                  ) : (
                    <FileText size={40} color="#94a3b8" />
                  )}
                </div>
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 600, fontSize: '0.85rem', color: '#0f172a' }}>
                  Page {idx + 1} ({p.rotation}°)
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => rotateSinglePage(idx, 90)}
                    style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '0.35rem 0.6rem', borderRadius: '6px', cursor: 'pointer' }}
                    title="Rotate 90° Right"
                  >
                    <RotateCw size={14} />
                  </button>
                  <button
                    onClick={() => rotateSinglePage(idx, -90)}
                    style={{ background: '#ffffff', border: '1px solid #cbd5e1', padding: '0.35rem 0.6rem', borderRadius: '6px', cursor: 'pointer' }}
                    title="Rotate 90° Left"
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Action Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={saveRotatedPdf}
              disabled={isProcessing}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '0.9rem 1.5rem',
                background: 'linear-gradient(135deg, #9333ea 0%, #7e22ce 100%)',
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
                boxShadow: '0 4px 14px rgba(147,51,234,0.3)',
              }}
            >
              {isProcessing ? (
                <>
                  <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite' }} />
                  Applying Rotations...
                </>
              ) : (
                <>
                  <CheckCircle size={20} />
                  Save & Apply Page Rotations
                </>
              )}
            </button>

            {rotatedUrl && (
              <div style={{ width: '100%', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.25rem', borderRadius: '12px', textAlign: 'center', marginTop: '1rem' }}>
                <h4 style={{ color: '#166534', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700 }}>
                  🎉 Your PDF Pages Have Been Rotated!
                </h4>
                <a
                  href={rotatedUrl}
                  download={`rotated-${file.name}`}
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
                    marginTop: '0.5rem',
                  }}
                >
                  <Download size={18} /> Download Rotated PDF
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
