import React, { useState, useEffect, useRef } from 'react';
import { FileCode, Key, Eye, EyeOff, ShieldCheck, AlertCircle } from 'lucide-react';
import { parseCertificate, CertInfo } from '@/utils/pdfSigner';
import styles from './CertificateUploader.module.css';

interface CertificateUploaderProps {
  onCertificateLoaded: (p12Buffer: ArrayBuffer | null, passphrase?: string) => void;
}

export function CertificateUploader({ onCertificateLoaded }: CertificateUploaderProps) {
  const [file, setFile] = useState<File | null>(null);
  const [passphrase, setPassphrase] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const [certInfo, setCertInfo] = useState<CertInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Trigger certificate parsing whenever file or passphrase changes
  useEffect(() => {
    if (!file) {
      setCertInfo(null);
      setError(null);
      onCertificateLoaded(null);
      return;
    }

    const parseCertFile = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        
        const arrayBuffer = await file.arrayBuffer();
        // Parse the certificate details (this acts as verification)
        const { info } = parseCertificate(arrayBuffer, passphrase);
        
        setCertInfo(info);
        onCertificateLoaded(arrayBuffer, passphrase);
      } catch (err: any) {
        setCertInfo(null);
        onCertificateLoaded(null);
        // Display a clean message
        setError(err.message || 'Verification failed. Double check the passphrase.');
      } finally {
        setIsProcessing(false);
      }
    };

    // Debounce to allow user to finish typing password
    const timer = setTimeout(() => {
      parseCertFile();
    }, 500);

    return () => clearTimeout(timer);
  }, [file, passphrase, onCertificateLoaded]);

  const handleDropzoneClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      setFile(selectedFiles[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];
      const ext = droppedFile.name.split('.').pop()?.toLowerCase();
      if (ext === 'p12' || ext === 'pfx') {
        setFile(droppedFile);
      } else {
        setError('Only .pfx and .p12 certificate files are supported.');
      }
    }
  };

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.uploaderContainer}>
      <h3 className={styles.title}>Digital Certificate (.pfx / .p12)</h3>
      <p className={styles.description}>
        Add a cryptographic PKCS#12 certificate file to secure and sign the PDF structure.
      </p>

      {/* File Dropzone */}
      <div
        className={`${styles.dropzone} ${file ? styles.fileActive : ''}`}
        onClick={handleDropzoneClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".p12,.pfx"
          style={{ display: 'none' }}
        />
        <FileCode className={styles.icon} size={36} />
        {file ? (
          <div>
            <div className={styles.fileName}>{file.name}</div>
            <div className={styles.fileSize}>{formatSize(file.size)}</div>
          </div>
        ) : (
          <div>
            <div className={styles.fileName}>Drag & drop certificate, or browse</div>
            <div className={styles.fileSize}>Supports .pfx or .p12 formats</div>
          </div>
        )}
      </div>

      {/* Password input */}
      <div className={styles.inputGroup}>
        <label htmlFor="p12-passphrase" className={styles.label}>
          Certificate Passphrase
        </label>
        <div className={styles.passwordWrapper}>
          <input
            id="p12-passphrase"
            type={showPassword ? 'text' : 'password'}
            value={passphrase}
            onChange={(e) => setPassphrase(e.target.value)}
            placeholder="Enter passphrase to unlock certificate"
            className={styles.input}
            disabled={!file}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={styles.toggleBtn}
            title={showPassword ? 'Hide password' : 'Show password'}
            disabled={!file}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      {/* Parsing details or Errors */}
      {error && !isProcessing && (
        <div className={styles.errorBox}>
          <AlertCircle size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
          {error}
        </div>
      )}

      {certInfo && !error && !isProcessing && (
        <div className={styles.certCard}>
          <div className={styles.certTitle}>
            <ShieldCheck size={16} />
            Certificate Validated
          </div>
          <div className={styles.certGrid}>
            <span className={styles.certLabel}>Issued To:</span>
            <span className={styles.certValue}>{certInfo.subject}</span>

            <span className={styles.certLabel}>Issuer:</span>
            <span className={styles.certValue}>{certInfo.issuer}</span>

            <span className={styles.certLabel}>Expires:</span>
            <span className={styles.certValue}>{formatDate(certInfo.validTo)}</span>
          </div>
        </div>
      )}

      {isProcessing && (
        <div className={styles.certCard} style={{ borderColor: 'var(--color-primary)' }}>
          <div className={styles.certTitle} style={{ color: 'var(--color-primary)' }}>
            Verifying certificate credentials...
          </div>
        </div>
      )}
    </div>
  );
}
