'use client';

import React, { useState } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Upload, Lock, Download, CheckCircle, RefreshCw, FileText, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { ReviewModal } from '@/components/ui/ReviewModal';

export default function ProtectPdfClient() {
  const [file, setFile] = useState<File | null>(null);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [protectedUrl, setProtectedUrl] = useState<string | null>(null);
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
    setProtectedUrl(null);
  };

  const protectPdf = async () => {
    if (!file) return;
    if (!password) {
      alert('Please enter a password to protect your PDF.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please verify your password.');
      return;
    }

    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('password', password);

      const response = await fetch('/api/encrypt', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Server encryption failed');
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setProtectedUrl(url);
    } catch (err) {
      alert('Failed to protect PDF. Make sure the file is valid and try again.');
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
            <div style={{ background: '#ffe4e6', padding: '1rem', borderRadius: '50%', color: '#e11d48' }}>
              <Lock size={32} />
            </div>
          </div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: '#0f172a' }}>
            Drop PDF here to password protect
          </h3>
          <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>
            Encrypt PDF documents with passwords. 100% private in browser.
          </p>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '1.25rem', borderBottom: '1px solid #e2e8f0', marginBottom: '1.5rem' }}>
            <div style={{ background: '#ffe4e6', color: '#e11d48', padding: '0.75rem', borderRadius: '10px' }}>
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

          {/* Password Form */}
          <div style={{ maxWidth: '500px', margin: '0 auto 2rem' }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#0f172a', marginBottom: '0.4rem' }}>
                Set Password
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: '100%', padding: '0.75rem 2.5rem 0.75rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#64748b' }}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontWeight: 600, fontSize: '0.9rem', color: '#0f172a', marginBottom: '0.4rem' }}>
                Confirm Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Re-enter password to confirm"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                style={{ width: '100%', padding: '0.75rem 0.9rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
              />
            </div>

            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              <ShieldCheck size={24} color="#059669" />
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#475569' }}>
                Your PDF is encrypted in-memory using AES-256 via our secure serverless endpoint. The file is never saved to disk and is immediately discarded.
              </p>
            </div>
          </div>

          {/* Action Bar */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={protectPdf}
              disabled={isProcessing || !password}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '0.9rem 1.5rem',
                background: password ? 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)' : '#cbd5e1',
                color: '#ffffff',
                border: 'none',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1.05rem',
                cursor: password && !isProcessing ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                boxShadow: password ? '0 4px 14px rgba(225,29,72,0.3)' : 'none',
              }}
            >
              {isProcessing ? (
                <>
                  <RefreshCw size={20} style={{ animation: 'spin 1s linear infinite' }} />
                  Encrypting PDF...
                </>
              ) : (
                <>
                  <Lock size={20} />
                  Protect & Encrypt PDF Now
                </>
              )}
            </button>

            {protectedUrl && (
              <div style={{ width: '100%', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '1.25rem', borderRadius: '12px', textAlign: 'center', marginTop: '1rem' }}>
                <h4 style={{ color: '#166534', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: 700 }}>
                  🎉 Your PDF Has Been Password Protected!
                </h4>
                <a
                  href={protectedUrl}
                  download={`protected-${file.name}`}
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
                  <Download size={18} /> Download Protected PDF
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
