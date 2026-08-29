'use client';

import React, { useState, useEffect } from 'react';
import { SignatureCreator } from '@/components/signing/SignatureCreator';
import { DocumentEditor } from '@/components/editor/DocumentEditor';
import { ImageEditor } from '@/components/editor/ImageEditor';
import { AdBanner, Button } from '@/components/ui';
import { ArrowLeft, UploadCloud, Shield, CheckCircle, Check, Pencil, FileText } from 'lucide-react';
import styles from './page.module.css';
import { trackEvent } from '@/lib/analytics';

interface HomeClientProps {
  initialTab?: 'type' | 'draw' | 'upload';
  titleOverride?: string;
  descriptionOverride?: string;
  templateUrl?: string;
}

export default function HomeClient({
  initialTab,
  titleOverride,
  descriptionOverride,
  templateUrl,
}: HomeClientProps = {}) {
  const [step, setStep]         = useState<1 | 2>(1);
  const [signature, setSignature] = useState<string | null>(null);
  const [file, setFile]         = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [showSignatureModal, setShowSignatureModal] = useState(false);

  useEffect(() => {
    if (templateUrl && !file) {
      fetch(templateUrl)
        .then(res => res.blob())
        .then(blob => {
          const filename = templateUrl.split('/').pop() || 'template.pdf';
          const newFile = new File([blob], filename, { type: blob.type || 'application/pdf' });
          setFile(newFile);
          setStep(2);
        })
        .catch(err => console.error('Failed to load template', err));
    }
  }, [templateUrl, file]);

  const handleSignatureSave = (dataUrl: string) => {
    trackEvent('signature_created');
    setSignature(dataUrl);
    setStep(2);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      trackEvent('document_uploaded');
      setFile(selectedFile);
    }
  };

  const handleDragOver  = (e: React.DragEvent) => { e.preventDefault(); setIsDragOver(true);  };
  const handleDragLeave = ()                    => { setIsDragOver(false); };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      const validTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
      if (validTypes.includes(droppedFile.type)) {
        trackEvent('document_uploaded');
        setFile(droppedFile);
      } else {
        alert('Unsupported file type. Please upload a PDF or an Image (PNG, JPG).');
      }
    }
  };

  const handleStartOver = () => { setFile(null); setSignature(null); setStep(1); };

  const handleShare = async (signedFile: File) => {
    trackEvent('document_downloaded');
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [signedFile] })) {
      try { await navigator.share({ files: [signedFile], title: 'Signed Document | MyDigitSign' }); }
      catch (err) { console.error('Web Share failed:', err); }
    } else {
      const url = URL.createObjectURL(signedFile);
      const a = document.createElement('a');
      a.href = url; a.download = signedFile.name;
      document.body.appendChild(a); a.click();
      document.body.removeChild(a); URL.revokeObjectURL(url);
    }
  };

  const renderStepContent = () => {
    // ── STEP 1: Create Signature ──────────────────────────
    if (step === 1) {
      return (
        <div className={styles.creatorSection}>
          <div className={styles.introHeader}>
            <h2
              className={styles.introTitle}
              dangerouslySetInnerHTML={{
                __html: titleOverride || 'Create Your Free <span>Digital Signature</span>'
              }}
            />
            <p className={styles.introDesc}>
              {descriptionOverride || 'Draw, type, or upload your signature. Once satisfied, click Adopt to proceed.'}
            </p>
          </div>

          <div className={styles.creatorWrapper}>
            <SignatureCreator onSave={handleSignatureSave} initialTab={initialTab} />
          </div>

          <div className={styles.featuresRow}>
            <div className={styles.featCard}>
              <div className={styles.featIcon}>
                <Shield size={20} />
              </div>
              <h4>100% Secure</h4>
              <p>Everything runs in your browser. Your documents never touch a server.</p>
            </div>
            <div className={styles.featCard}>
              <div className={styles.featIcon}>
                <CheckCircle size={20} />
              </div>
              <h4>Legally Binding</h4>
              <p>Signatures meet standard digital signature requirements for common agreements.</p>
            </div>
          </div>
        </div>
      );
    }

    // ── STEP 2a: Upload Document ──────────────────────────
    if (!file) {
      return (
        <div className={styles.uploadSection}>
          <div className={styles.introHeader}>
            <div className={styles.backLinkWrapper}>
              <Button variant="ghost" size="sm" leftIcon={<ArrowLeft size={16} />} onClick={() => setStep(1)}>
                Back to Signature
              </Button>
            </div>
            <h2 className={styles.introTitle}>
              Upload Your <span>Document</span>
            </h2>
            <p className={styles.introDesc}>
              Select the PDF or Image you want to sign. All processing happens in your browser.
            </p>
          </div>

          <div
            className={`${styles.uploadZone} ${isDragOver ? styles.dragOver : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('doc-upload')?.click()}
            role="button"
            aria-label="Upload document"
          >
            <UploadCloud className={styles.uploadCloudIcon} size={52} strokeWidth={1.5} />
            <h3 className={styles.uploadTitle}>
              {isDragOver ? 'Drop it here!' : 'Drag & Drop your file here'}
            </h3>
            <p className={styles.uploadSub}>or click to browse from your computer</p>
            <p className={styles.uploadFormats}>PDF · PNG · JPG · JPEG — Max 10 MB</p>
            <input
              id="doc-upload"
              type="file"
              accept="application/pdf,image/png,image/jpeg,image/jpg"
              className={styles.hiddenInput}
              onChange={handleFileChange}
            />
          </div>

          {/* Active signature badge */}
          <div className={styles.signatureBadge}>
            <span className={styles.badgeText}>Active Signature:</span>
            {signature && (
              <div className={styles.badgeImageWrapper}>
                <img src={signature} alt="Active Signature" className={styles.badgeImage} />
              </div>
            )}
            <Button variant="ghost" size="sm" leftIcon={<Pencil size={13} />} onClick={() => setStep(1)}>
              Change
            </Button>
          </div>
        </div>
      );
    }

    // ── STEP 2b: Sign Document ────────────────────────────
    const isPdf = file.type === 'application/pdf' || file.name.endsWith('.pdf');
    return (
      <div className={styles.editorSection}>
        <div className={styles.editorHeader}>
          <h2 className={styles.editorTitle}>Place Your Signature</h2>
          <p className={styles.editorDesc}>
            Drag the signature to your desired position. Use the corner handle to resize.
          </p>
        </div>

        <div className={styles.editorContainer}>
          {isPdf ? (
            <DocumentEditor
              file={file}
              signatureUrl={signature || ''}
              onStartOver={handleStartOver}
              onShare={handleShare}
              onRequestSignature={() => setShowSignatureModal(true)}
            />
          ) : (
            <ImageEditor
              file={file}
              signatureUrl={signature || ''}
              onStartOver={handleStartOver}
              onShare={handleShare}
            />
          )}
        </div>
      </div>
    );
  };

  // Step line fill percentage
  const lineFillPct = step === 2 ? 100 : 0;

  return (
    <main className={styles.mainContent}>
      {showSignatureModal && (
        <div style={{position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
          <div style={{background: 'white', padding: '32px', borderRadius: '24px', maxWidth: '600px', width: '100%', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
            <button 
              onClick={() => setShowSignatureModal(false)} 
              style={{position: 'absolute', top: 16, right: 20, background: 'none', border: 'none', cursor: 'pointer', fontSize: 28, color: '#64748b'}}>
              ×
            </button>
            <h3 style={{marginBottom: 20, fontSize: '1.5rem', color: '#0f172a', fontWeight: 700}}>Create your signature</h3>
            <div className={styles.creatorWrapper}>
              <SignatureCreator 
                onSave={(dataUrl) => { 
                  setSignature(dataUrl); 
                  setShowSignatureModal(false); 
                }} 
                initialTab="draw" 
              />
            </div>
          </div>
        </div>
      )}
      <div className={styles.container}>

        {/* Ad top */}
        <div className={styles.adRow}>
          <AdBanner slot="home-top" format="horizontal" />
        </div>

        {/* Step Indicator */}
        {!file && (
          <div className={styles.stepIndicator}>
            <div className={`${styles.stepItem} ${step === 1 ? styles.stepActive : styles.stepDone}`}>
              <div className={styles.stepNum}>
                {step > 1 ? <Check size={14} /> : '1'}
              </div>
              <div className={styles.stepLabel}>Create Signature</div>
            </div>

            <div className={styles.stepLine}>
              <div
                className={styles.stepLineFill}
                style={{ width: `${lineFillPct}%` }}
              />
            </div>

            <div className={`${styles.stepItem} ${step === 2 ? styles.stepActive : ''}`}>
              <div className={styles.stepNum}>2</div>
              <div className={styles.stepLabel}>Sign Document</div>
            </div>
          </div>
        )}

        {/* Main card */}
        <div className={styles.contentCard}>
          {renderStepContent()}
        </div>

        {/* Ad bottom */}
        <div className={styles.adRow}>
          <AdBanner slot="home-bottom" format="horizontal" />
        </div>
      </div>
    </main>
  );
}
