'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { SignatureCreator } from '@/components/signing/SignatureCreator';
import { DocumentEditor } from '@/components/editor/DocumentEditor';
import { ImageEditor } from '@/components/editor/ImageEditor';
import { AdBanner, Button } from '@/components/ui';
import { FileText, ArrowLeft, UploadCloud, Shield, CheckCircle } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  const [step, setStep] = useState<1 | 2>(1);
  const [signature, setSignature] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleSignatureSave = (dataUrl: string) => {
    setSignature(dataUrl);
    setStep(2);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      const validTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
      if (validTypes.includes(droppedFile.type)) {
        setFile(droppedFile);
      } else {
        alert('Unsupported file type. Please upload a PDF or an Image (PNG, JPG).');
      }
    }
  };

  const handleStartOver = () => {
    setFile(null);
    setSignature(null);
    setStep(1);
  };

  const handleShare = async (signedFile: File) => {
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [signedFile] })) {
      try {
        await navigator.share({
          files: [signedFile],
          title: 'Signed Document | MyDigitSign',
          text: 'Here is your signed document, completed with MyDigitSign.',
        });
      } catch (err) {
        console.error('Web Share failed:', err);
      }
    } else {
      // Fallback: trigger download
      const dataUrl = URL.createObjectURL(signedFile);
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = signedFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(dataUrl);
      alert('Sharing is not directly supported on this device/browser. The document was downloaded instead.');
    }
  };

  const renderStepContent = () => {
    if (step === 1) {
      return (
        <div className={styles.creatorSection}>
          <div className={styles.introHeader}>
            <h1 className={styles.introTitle}>
              Create Your Free <span>Digital Signature</span>
            </h1>
            <p className={styles.introDesc}>
              Draw, type, or upload your signature. Once you are satisfied, click Adopt to proceed to signing your document.
            </p>
          </div>
          <div className={styles.creatorWrapper}>
            <SignatureCreator onSave={handleSignatureSave} />
          </div>
          
          <div className={styles.featuresRow}>
            <div className={styles.featCard}>
              <Shield className={styles.featIcon} size={24} />
              <h4>100% Secure</h4>
              <p>Everything runs in your browser. Your documents never touch a server.</p>
            </div>
            <div className={styles.featCard}>
              <CheckCircle className={styles.featIcon} size={24} />
              <h4>Legally Binding</h4>
              <p>Signatures meet standard digital signature requirements for common agreements.</p>
            </div>
          </div>
        </div>
      );
    }

    // Step 2: Document upload or edit
    if (!file) {
      return (
        <div className={styles.uploadSection}>
          <div className={styles.introHeader}>
            <div className={styles.backLinkWrapper}>
              <Button variant="ghost" size="sm" leftIcon={<ArrowLeft size={16} />} onClick={() => setStep(1)}>
                Back to Signature
              </Button>
            </div>
            <h2 className={styles.introTitle}>Upload Your Document</h2>
            <p className={styles.introDesc}>
              Select the PDF or Image document that you want to sign. Supports files up to 10MB.
            </p>
          </div>

          <div
            className={`${styles.uploadZone} ${isDragOver ? styles.dragOver : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById('doc-upload')?.click()}
          >
            <UploadCloud className={styles.uploadCloudIcon} size={48} />
            <h3 className={styles.uploadTitle}>Drag & Drop file here</h3>
            <p className={styles.uploadSub}>or click to browse your computer</p>
            <p className={styles.uploadFormats}>Supports PDF, PNG, JPG, JPEG (Max 10MB)</p>
            <input
              id="doc-upload"
              type="file"
              accept="application/pdf, image/png, image/jpeg, image/jpg"
              className={styles.hiddenInput}
              onChange={handleFileChange}
            />
          </div>

          <div className={styles.signatureBadge}>
            <span className={styles.badgeText}>Active Signature:</span>
            {signature && (
              <div className={styles.badgeImageWrapper}>
                <img src={signature} alt="Active Signature" className={styles.badgeImage} />
              </div>
            )}
            <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
              Change
            </Button>
          </div>
        </div>
      );
    }

    // File uploaded, render PDF or Image editor
    const isPdf = file.type === 'application/pdf' || file.name.endsWith('.pdf');
    return (
      <div className={styles.editorSection}>
        <div className={styles.editorHeader}>
          <h2 className={styles.editorTitle}>Place Your Signature</h2>
          <p className={styles.editorDesc}>
            Drag the signature outline to the desired spot on your document. Drag the bottom-right handle to resize it.
          </p>
        </div>
        
        <div className={styles.editorContainer}>
          {isPdf ? (
            <DocumentEditor
              file={file}
              signatureUrl={signature || ''}
              onStartOver={handleStartOver}
              onShare={handleShare}
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

  return (
    <div className={styles.appWrapper}>
      <Navbar />
      
      <main className={styles.mainContent}>
        <div className={styles.container}>
          {/* Ad slot top */}
          <div className={styles.adRow}>
            <AdBanner slot="home-top" format="horizontal" />
          </div>

          {/* Step indicator (only show when not actively editing a document) */}
          {!file && (
            <div className={styles.stepIndicator}>
              <div className={`${styles.stepItem} ${step === 1 ? styles.stepActive : ''}`}>
                <div className={styles.stepNum}>1</div>
                <div className={styles.stepLabel}>Create Signature</div>
              </div>
              <div className={styles.stepLine}></div>
              <div className={`${styles.stepItem} ${step === 2 ? styles.stepActive : ''}`}>
                <div className={styles.stepNum}>2</div>
                <div className={styles.stepLabel}>Sign Document</div>
              </div>
            </div>
          )}

          {/* Multi-step content */}
          <div className={styles.contentCard}>
            {renderStepContent()}
          </div>

          {/* Ad slot bottom */}
          <div className={styles.adRow}>
            <AdBanner slot="home-bottom" format="horizontal" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
