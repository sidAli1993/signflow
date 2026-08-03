'use client';

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Upload, FileText, CheckCircle, RefreshCw, Scissors, Download } from 'lucide-react';
import { ReviewModal } from '@/components/ui/ReviewModal';

export default function SplitPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [splitUrl, setSplitUrl] = useState<string | null>(null);
  const [selectedPages, setSelectedPages] = useState<number[]>([]);
  const [rangeInput, setRangeInput] = useState('');
  const [showReviewModal, setShowReviewModal] = useState(false);

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

    setIsProcessing(true);
    try {
      const buffer = await selectedFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(buffer);
      const pages = pdfDoc.getPageCount();
      
      setFile(selectedFile);
      setPageCount(pages);
      // Pre-select all pages by default
      setSelectedPages(Array.from({ length: pages }, (_, i) => i + 1));
      setSplitUrl(null);
    } catch (err) {
      alert('Failed to load PDF. The file may be password protected or corrupted.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePageToggle = (pageNumber: number) => {
    setSelectedPages(prev => {
      const next = prev.includes(pageNumber)
        ? prev.filter(p => p !== pageNumber)
        : [...prev, pageNumber].sort((a, b) => a - b);
      return next;
    });
    setSplitUrl(null);
  };

  const handleRangeApply = () => {
    if (!rangeInput.trim()) return;
    
    const pagesToSelect: number[] = [];
    const parts = rangeInput.split(',');

    for (const part of parts) {
      const trimmed = part.trim();
      if (trimmed.includes('-')) {
        const [startStr, endStr] = trimmed.split('-');
        const start = parseInt(startStr, 10);
        const end = parseInt(endStr, 10);
        if (!isNaN(start) && !isNaN(end) && start > 0 && end >= start) {
          for (let i = start; i <= end; i++) {
            if (i <= pageCount) pagesToSelect.push(i);
          }
        }
      } else {
        const val = parseInt(trimmed, 10);
        if (!isNaN(val) && val > 0 && val <= pageCount) {
          pagesToSelect.push(val);
        }
      }
    }

    if (pagesToSelect.length > 0) {
      setSelectedPages([...new Set(pagesToSelect)].sort((a, b) => a - b));
      setSplitUrl(null);
    } else {
      alert('Invalid range format. Use numbers like "1,3,5" or ranges like "2-4".');
    }
  };

  const splitPdf = async () => {
    if (!file || selectedPages.length === 0) return;
    setIsProcessing(true);

    try {
      const buffer = await file.arrayBuffer();
      const srcDoc = await PDFDocument.load(buffer);
      const newDoc = await PDFDocument.create();

      // Zero-indexed pages array for copying
      const indicesToCopy = selectedPages.map(p => p - 1);
      const copiedPages = await newDoc.copyPages(srcDoc, indicesToCopy);
      
      copiedPages.forEach(page => {
        newDoc.addPage(page);
      });

      const pdfBytes = await newDoc.save();
      const blob = new Blob([pdfBytes.buffer as ArrayBuffer], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setSplitUrl(url);
    } catch (err) {
      alert('An error occurred while splitting the PDF. Please try again.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!splitUrl) return;
    const link = document.createElement('a');
    link.href = splitUrl;
    link.download = `split-${file?.name || 'document.pdf'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setShowReviewModal(true);
    }, 1000);
  };

  const resetAll = () => {
    setFile(null);
    setPageCount(0);
    setSplitUrl(null);
    setSelectedPages([]);
    setRangeInput('');
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
            <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '50%', color: '#d97706' }}>
              <Scissors size={32} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
            Drop PDF here to split pages
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Extract specific pages or page ranges locally. 100% private in browser memory.
          </p>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ background: '#fef3c7', color: '#d97706', padding: '0.75rem', borderRadius: '10px' }}>
                <FileText size={24} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                  {file.name}
                </h4>
                <span style={{ fontSize: '0.875rem', color: '#64748b' }}>
                  Total Pages: {pageCount} · Size: {formatSize(file.size)}
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

          {/* Range input shortcuts */}
          <div style={{ background: '#f8fafc', padding: '1rem 1.25rem', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#334155' }}>Range Shortcut:</span>
            <input
              type="text"
              placeholder="e.g. 1-3, 5"
              value={rangeInput}
              onChange={(e) => setRangeInput(e.target.value)}
              style={{ padding: '0.45rem 0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.9rem', flexGrow: 1, maxWidth: '220px' }}
            />
            <button
              type="button"
              onClick={handleRangeApply}
              style={{ padding: '0.45rem 1rem', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}
            >
              Apply Range
            </button>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button
                type="button"
                onClick={() => { setSelectedPages(Array.from({ length: pageCount }, (_, i) => i + 1)); setSplitUrl(null); }}
                style={{ padding: '0.45rem 0.75rem', background: 'none', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#475569', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                Select All
              </button>
              <button
                type="button"
                onClick={() => { setSelectedPages([]); setSplitUrl(null); }}
                style={{ padding: '0.45rem 0.75rem', background: 'none', border: '1px solid #cbd5e1', borderRadius: '6px', color: '#475569', fontSize: '0.85rem', cursor: 'pointer' }}
              >
                Deselect All
              </button>
            </div>
          </div>

          {/* Grid list of checkboxes for page selections */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontWeight: 700, fontSize: '0.95rem', color: '#0f172a', marginBottom: '0.75rem' }}>
              Select Pages to Extract ({selectedPages.length} selected):
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '0.75rem' }}>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map(pageNo => {
                const isSelected = selectedPages.includes(pageNo);
                return (
                  <button
                    key={pageNo}
                    type="button"
                    onClick={() => handlePageToggle(pageNo)}
                    style={{
                      padding: '0.75rem 0.5rem',
                      borderRadius: '8px',
                      border: isSelected ? '2px solid #4f46e5' : '1px solid #cbd5e1',
                      background: isSelected ? '#eff6ff' : '#ffffff',
                      color: isSelected ? '#1e40af' : '#475569',
                      fontWeight: isSelected ? 700 : 500,
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      textAlign: 'center',
                      transition: 'all 0.15s ease',
                    }}
                  >
                    Page {pageNo}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button */}
          <div style={{ textAlign: 'center' }}>
            {!splitUrl ? (
              <button
                type="button"
                onClick={splitPdf}
                disabled={isProcessing || selectedPages.length === 0}
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
                  cursor: isProcessing || selectedPages.length === 0 ? 'not-allowed' : 'pointer',
                  opacity: isProcessing || selectedPages.length === 0 ? 0.7 : 1,
                  fontSize: '1rem',
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
                }}
              >
                {isProcessing ? (
                  <>
                    <RefreshCw size={18} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    Splitting PDF...
                  </>
                ) : (
                  <>
                    <Scissors size={18} />
                    Extract Selected Pages
                  </>
                )}
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#16a34a', fontWeight: 600, fontSize: '1.05rem' }}>
                  <CheckCircle size={22} />
                  PDF Split Successfully!
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
                    Download Split PDF
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
                    Select Another File
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
