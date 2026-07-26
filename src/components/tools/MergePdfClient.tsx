'use client';

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Upload, FileText, ArrowUp, ArrowDown, Trash2, Download, Plus, CheckCircle, RefreshCw } from 'lucide-react';
import { ReviewModal } from '@/components/ui/ReviewModal';

interface PdfFileItem {
  id: string;
  file: File;
  name: string;
  size: string;
  pageCount: number;
}

export default function MergePdfClient() {
  const [files, setFiles] = useState<PdfFileItem[]>([]);
  const [isMerging, setIsMerging] = useState(false);
  const [mergedUrl, setMergedUrl] = useState<string | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const selectedFiles = Array.from(e.target.files);

    const newItems: PdfFileItem[] = [];
    for (const f of selectedFiles) {
      if (f.type !== 'application/pdf' && !f.name.endsWith('.pdf')) continue;
      try {
        const buffer = await f.arrayBuffer();
        const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true });
        newItems.push({
          id: Math.random().toString(36).substring(2, 9),
          file: f,
          name: f.name,
          size: formatSize(f.size),
          pageCount: pdfDoc.getPageCount(),
        });
      } catch (err) {
        console.error('Error reading PDF:', err);
      }
    }

    setFiles((prev) => [...prev, ...newItems]);
    setMergedUrl(null);
  };

  const moveUp = (index: number) => {
    if (index === 0) return;
    setFiles((prev) => {
      const updated = [...prev];
      const temp = updated[index - 1];
      updated[index - 1] = updated[index];
      updated[index] = temp;
      return updated;
    });
  };

  const moveDown = (index: number) => {
    if (index === files.length - 1) return;
    setFiles((prev) => {
      const updated = [...prev];
      const temp = updated[index + 1];
      updated[index + 1] = updated[index];
      updated[index] = temp;
      return updated;
    });
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    setMergedUrl(null);
  };

  const mergePdfs = async () => {
    if (files.length < 2) return;
    setIsMerging(true);
    try {
      const mergedPdf = await PDFDocument.create();

      for (const item of files) {
        const buffer = await item.file.arrayBuffer();
        const pdf = await PDFDocument.load(buffer, { ignoreEncryption: true });
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach((page) => mergedPdf.addPage(page));
      }

      const pdfBytes = await mergedPdf.save();
      const blob = new Blob([pdfBytes as unknown as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setMergedUrl(url);
    } catch (err) {
      alert('Failed to merge PDFs. Please make sure the files are not password-protected.');
      console.error(err);
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
      {/* Upload Zone */}
      <div style={{ border: '2px dashed #cbd5e1', borderRadius: '12px', padding: '2.5rem 1.5rem', textAlign: 'center', background: '#f8fafc', position: 'relative', cursor: 'pointer' }}>
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={handleFileSelect}
          style={{ position: 'absolute', inset: 0, opacity: 0, width: '100%', height: '100%', cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '50%', color: '#2563eb' }}>
            <Upload size={32} />
          </div>
        </div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
          Drop PDF files here or click to browse
        </h3>
        <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
          Select 2 or more PDF files to combine. Files stay 100% private in your browser.
        </p>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: '#0f172a' }}>
              Selected Files ({files.length}) — {files.reduce((acc, curr) => acc + curr.pageCount, 0)} Total Pages
            </h4>
            <label style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#2563eb', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>
              <Plus size={16} /> Add More Files
              <input type="file" accept="application/pdf" multiple onChange={handleFileSelect} style={{ display: 'none' }} />
            </label>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {files.map((f, idx) => (
              <div
                key={f.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '1rem 1.25rem',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, minWidth: 0 }}>
                  <div style={{ background: '#fee2e2', color: '#dc2626', padding: '0.6rem', borderRadius: '8px', flexShrink: 0 }}>
                    <FileText size={20} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <p style={{ fontWeight: 600, margin: 0, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '0.95rem' }}>
                      {idx + 1}. {f.name}
                    </p>
                    <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                      {f.pageCount} {f.pageCount === 1 ? 'page' : 'pages'} • {f.size}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginLeft: '1rem' }}>
                  <button
                    onClick={() => moveUp(idx)}
                    disabled={idx === 0}
                    style={{ background: '#f1f5f9', border: 'none', padding: '0.4rem', borderRadius: '6px', cursor: idx === 0 ? 'not-allowed' : 'pointer', opacity: idx === 0 ? 0.4 : 1 }}
                    title="Move Up"
                  >
                    <ArrowUp size={16} color="#334155" />
                  </button>
                  <button
                    onClick={() => moveDown(idx)}
                    disabled={idx === files.length - 1}
                    style={{ background: '#f1f5f9', border: 'none', padding: '0.4rem', borderRadius: '6px', cursor: idx === files.length - 1 ? 'not-allowed' : 'pointer', opacity: idx === files.length - 1 ? 0.4 : 1 }}
                    title="Move Down"
                  >
                    <ArrowDown size={16} color="#334155" />
                  </button>
                  <button
                    onClick={() => removeFile(f.id)}
                    style={{ background: '#fef2f2', border: 'none', padding: '0.4rem', borderRadius: '6px', cursor: 'pointer', color: '#ef4444' }}
                    title="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Action Bar */}
          <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={mergePdfs}
              disabled={files.length < 2 || isMerging}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '0.9rem 1.5rem',
                background: files.length >= 2 ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' : '#cbd5e1',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1.05rem',
                cursor: files.length >= 2 && !isMerging ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: files.length >= 2 ? '0 4px 14px rgba(37,99,235,0.3)' : 'none',
              }}
            >
              {isMerging ? (
                <>
                  <RefreshCw size={20} className="spin" style={{ animation: 'spin 1s linear infinite' }} />
                  Merging PDFs...
                </>
              ) : (
                <>
                  <CheckCircle size={20} />
                  Merge {files.length} PDF Files Now
                </>
              )}
            </button>

            {files.length < 2 && (
              <p style={{ color: '#ef4444', fontSize: '0.85rem', margin: 0, fontWeight: 500 }}>
                Please select at least 2 PDF files to merge.
              </p>
            )}

            {mergedUrl && (
              <div style={{ width: '100%', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.25rem', borderRadius: '12px', textAlign: 'center', marginTop: '1rem' }}>
                <h4 style={{ color: '#166534', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700 }}>
                  🎉 Your PDFs Have Been Merged Successfully!
                </h4>
                <a
                  href={mergedUrl}
                  download="merged-document.pdf"
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
                    marginTop: '0.5rem',
                  }}
                >
                  <Download size={18} /> Download Merged PDF
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
