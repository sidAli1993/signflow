'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui';
import { Download, Share2, RefreshCw, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { signPdfWithCertificate } from '@/utils/pdfSigner';
import { CertificateUploader } from './CertificateUploader';
import { ReviewModal } from '@/components/ui/ReviewModal';
import styles from './DocumentEditor.module.css';

// Configure pdfjs worker CDN
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`;

interface DocumentEditorProps {
  file: File;
  signatureUrl: string;
  onStartOver: () => void;
  onShare: (signedFile: File) => void;
}

export function DocumentEditor({ file, signatureUrl, onStartOver, onShare }: DocumentEditorProps) {
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [isRendering, setIsRendering] = useState(false);
  
  const [position, setPosition] = useState({ x: 30, y: 50 });
  const [size, setSize] = useState({ width: 150, height: 75 });

  const [signingMode, setSigningMode] = useState<'visual' | 'digital'>('visual');
  const [p12Buffer, setP12Buffer] = useState<ArrayBuffer | null>(null);
  const [p12Passphrase, setP12Passphrase] = useState<string>('');

  const handleCertLoaded = (buffer: ArrayBuffer | null, passphrase?: string) => {
    setP12Buffer(buffer);
    setP12Passphrase(passphrase || '');
  };
  
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sigRef = useRef<HTMLDivElement>(null);
  const renderTaskRef = useRef<any>(null);
  
  const dragStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 30, y: 50 });
  const resizeStart = useRef({ x: 0, y: 0 });
  const sizeStart = useRef({ width: 150, height: 75 });

  // Load PDF document
  useEffect(() => {
    const loadPdf = async () => {
      try {
        setIsRendering(true);
        const arrayBuffer = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        const pdf = await loadingTask.promise;
        setPdfDoc(pdf);
        setNumPages(pdf.numPages);
        setPageNum(1);
      } catch (err) {
        console.error('Error loading PDF:', err);
        alert('Failed to parse PDF document.');
      }
    };
    loadPdf();
  }, [file]);

  // Render current PDF page on canvas
  useEffect(() => {
    if (!pdfDoc) return;

    const renderPage = async () => {
      try {
        setIsRendering(true);
        const page = await pdfDoc.getPage(pageNum);
        
        // Cancel previous render task if active
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        // Base the viewport on the visual width of workspace or typical desktop size
        const desiredWidth = Math.min(window.innerWidth - 64, 1100);
        const viewportTemp = page.getViewport({ scale: 1.0 });
        const scale = desiredWidth / viewportTemp.width;
        const viewport = page.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        const renderTask = page.render(renderContext);
        renderTaskRef.current = renderTask;
        
        await renderTask.promise;
        setIsRendering(false);
      } catch (err: any) {
        if (err.name !== 'RenderingCancelledException') {
          console.error('Render error:', err);
          setIsRendering(false);
        }
      }
    };

    renderPage();

    return () => {
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
      }
    };
  }, [pdfDoc, pageNum]);

  // Handle Dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (isSigned) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    
    const container = containerRef.current;
    const sig = sigRef.current;
    if (container && sig) {
      const rect = container.getBoundingClientRect();
      const sigRect = sig.getBoundingClientRect();
      const currentX = ((sigRect.left - rect.left) / rect.width) * 100;
      const currentY = ((sigRect.top - rect.top) / rect.height) * 100;
      positionStart.current = { x: currentX, y: currentY };
    }
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    if (isSigned) return;
    e.stopPropagation();
    e.preventDefault();
    setIsResizing(true);
    resizeStart.current = { x: e.clientX, y: e.clientY };
    sizeStart.current = { ...size };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const deltaX = e.clientX - dragStart.current.x;
        const deltaY = e.clientY - dragStart.current.y;
        
        const pctDeltaX = (deltaX / containerRect.width) * 100;
        const pctDeltaY = (deltaY / containerRect.height) * 100;
        
        let newX = positionStart.current.x + pctDeltaX;
        let newY = positionStart.current.y + pctDeltaY;
        
        const sigWidthPct = (size.width / containerRect.width) * 100;
        const sigHeightPct = (size.height / containerRect.height) * 100;
        
        newX = Math.max(0, Math.min(100 - sigWidthPct, newX));
        newY = Math.max(0, Math.min(100 - sigHeightPct, newY));
        
        setPosition({ x: newX, y: newY });
      }

      if (isResizing) {
        const deltaX = e.clientX - resizeStart.current.x;
        const newWidth = Math.max(50, Math.min(300, sizeStart.current.width + deltaX));
        const aspect = sizeStart.current.width / sizeStart.current.height;
        const newHeight = newWidth / aspect;
        
        setSize({ width: newWidth, height: newHeight });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, size, position]);

  // Touch event handlers for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isSigned) return;
    const touch = e.touches[0];
    setIsDragging(true);
    dragStart.current = { x: touch.clientX, y: touch.clientY };
    
    const container = containerRef.current;
    const sig = sigRef.current;
    if (container && sig) {
      const rect = container.getBoundingClientRect();
      const sigRect = sig.getBoundingClientRect();
      const currentX = ((sigRect.left - rect.left) / rect.width) * 100;
      const currentY = ((sigRect.top - rect.top) / rect.height) * 100;
      positionStart.current = { x: currentX, y: currentY };
    }
  };

  const handleResizeTouchStart = (e: React.TouchEvent) => {
    if (isSigned) return;
    e.stopPropagation();
    const touch = e.touches[0];
    setIsResizing(true);
    resizeStart.current = { x: touch.clientX, y: touch.clientY };
    sizeStart.current = { ...size };
  };

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];

      if (isDragging && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const deltaX = touch.clientX - dragStart.current.x;
        const deltaY = touch.clientY - dragStart.current.y;
        
        const pctDeltaX = (deltaX / containerRect.width) * 100;
        const pctDeltaY = (deltaY / containerRect.height) * 100;
        
        let newX = positionStart.current.x + pctDeltaX;
        let newY = positionStart.current.y + pctDeltaY;
        
        const sigWidthPct = (size.width / containerRect.width) * 100;
        const sigHeightPct = (size.height / containerRect.height) * 100;
        
        newX = Math.max(0, Math.min(100 - sigWidthPct, newX));
        newY = Math.max(0, Math.min(100 - sigHeightPct, newY));
        
        setPosition({ x: newX, y: newY });
      }

      if (isResizing) {
        const deltaX = touch.clientX - resizeStart.current.x;
        const newWidth = Math.max(50, Math.min(300, sizeStart.current.width + deltaX));
        const aspect = sizeStart.current.width / sizeStart.current.height;
        const newHeight = newWidth / aspect;
        
        setSize({ width: newWidth, height: newHeight });
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, isResizing, size, position]);

  const generateSignedPdf = async (): Promise<File> => {
    const fileBytes = await file.arrayBuffer();
    
    const containerWidth = containerRef.current?.offsetWidth || 1;
    const containerHeight = containerRef.current?.offsetHeight || 1;
    
    // We need to calculate page dimensions using pdf-lib first to set the rect coordinates
    const tempPdf = await PDFDocument.load(fileBytes);
    const tempPages = tempPdf.getPages();
    const tempPage = tempPages[pageNum - 1];
    const pdfWidth = tempPage.getWidth();
    const pdfHeight = tempPage.getHeight();
    
    const finalWidth = (size.width / containerWidth) * pdfWidth;
    const finalHeight = (size.height / containerHeight) * pdfHeight;
    const finalX = (position.x / 100) * pdfWidth;
    const finalY = pdfHeight - ((position.y / 100) * pdfHeight) - finalHeight;

    if (signingMode === 'digital') {
      if (!p12Buffer) {
        throw new Error('Please upload and validate a certificate before signing.');
      }
      
      const signedPdfBytes = await signPdfWithCertificate({
        pdfBytes: new Uint8Array(fileBytes),
        p12Buffer: p12Buffer,
        passphrase: p12Passphrase,
        visualOptions: {
          page: pageNum,
          x: finalX,
          y: finalY,
          width: finalWidth,
          height: finalHeight,
          signatureUrl: signatureUrl,
        }
      });
      
      const blob = new Blob([signedPdfBytes as any], { type: 'application/pdf' });
      return new File([blob], `signed_${file.name}`, { type: 'application/pdf' });
    }

    // Visual signature logic
    const pages = tempPdf.getPages();
    const currentPage = pages[pageNum - 1];
    
    // Embed signature image
    const response = await fetch(signatureUrl);
    const sigImageBytes = await response.arrayBuffer();
    const embeddedSigImage = await tempPdf.embedPng(sigImageBytes);

    currentPage.drawImage(embeddedSigImage, {
      x: finalX,
      y: finalY,
      width: finalWidth,
      height: finalHeight,
    });
    
    const signedPdfBytes = await tempPdf.save();
    const blob = new Blob([signedPdfBytes as any], { type: 'application/pdf' });
    return new File([blob], `signed_${file.name}`, { type: 'application/pdf' });
  };

  const handleDownload = async () => {
    try {
      setIsProcessing(true);
      const signedFile = await generateSignedPdf();
      const dataUrl = URL.createObjectURL(signedFile);
      
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = signedFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(dataUrl);
      
      setIsSigned(true);
      setShowReviewModal(true);
    } catch (err) {
      console.error('Signing error:', err);
      alert('Failed to apply signature to PDF.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleShareClick = async () => {
    try {
      setIsProcessing(true);
      const signedFile = await generateSignedPdf();
      onShare(signedFile);
      setIsSigned(true);
    } catch (err) {
      console.error('Sharing error:', err);
      alert('Failed to generate PDF for sharing.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.editorMain}>
        <div className={styles.workspace}>
          <div className={styles.canvasWrapper} ref={containerRef}>
            <canvas ref={canvasRef} className={styles.pdfCanvas} />
            
            {isRendering && (
              <div className={styles.renderLoader}>
                <div className={styles.spinner}></div>
                <span>Rendering PDF page...</span>
              </div>
            )}

            {!isSigned && !isRendering && (
              <div
                ref={sigRef}
                className={`${styles.sigOverlay} ${isDragging ? styles.dragging : ''}`}
                style={{
                  left: `${position.x}%`,
                  top: `${position.y}%`,
                  width: `${size.width}px`,
                  height: `${size.height}px`,
                }}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
              >
                <img src={signatureUrl} alt="Signature" className={styles.sigImage} draggable={false} />
                <div 
                  className={styles.resizeHandle}
                  onMouseDown={handleResizeMouseDown}
                  onTouchStart={handleResizeTouchStart}
                />
              </div>
            )}
          </div>
        </div>

        <div className={styles.sidebarPanel}>
          <div className={styles.panelSection}>
            <h4 className={styles.panelTitle}>Signature Type</h4>
            <div className={styles.modeTabs}>
              <button
                type="button"
                className={`${styles.modeTab} ${signingMode === 'visual' ? styles.activeTab : ''}`}
                onClick={() => setSigningMode('visual')}
                disabled={isSigned || isProcessing}
              >
                Visual Only
              </button>
              <button
                type="button"
                className={`${styles.modeTab} ${signingMode === 'digital' ? styles.activeTab : ''}`}
                onClick={() => setSigningMode('digital')}
                disabled={isSigned || isProcessing}
              >
                Cryptographic Cert
              </button>
            </div>
          </div>

          {signingMode === 'digital' && !isSigned && (
            <CertificateUploader onCertificateLoaded={handleCertLoaded} />
          )}

          {signingMode === 'digital' && isSigned && (
            <div className={styles.panelSection}>
              <p className={styles.pageLabel} style={{ color: 'var(--color-success, #22c55e)' }}>
                ✓ Document cryptographically signed.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className={styles.controlsBar}>
        <div className={styles.leftControls}>
          <Button variant="ghost" leftIcon={<RefreshCw size={16} />} onClick={onStartOver}>
             Start Over
          </Button>
          
          <div className={styles.navigation}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPageNum(prev => Math.max(1, prev - 1))}
              disabled={pageNum <= 1 || isRendering}
            >
              <ChevronLeft size={16} />
            </Button>
            <span className={styles.pageLabel}>
              Page {pageNum} of {numPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPageNum(prev => Math.min(numPages, prev + 1))}
              disabled={pageNum >= numPages || isRendering}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
        
        <div className={styles.rightControls}>
          <Button
            variant="outline"
            leftIcon={<Share2 size={16} />}
            onClick={handleShareClick}
            disabled={isProcessing || isRendering || (signingMode === 'digital' && !p12Buffer)}
          >
            Share
          </Button>
          <Button
            variant="primary"
            leftIcon={isSigned ? <Check size={16} /> : <Download size={16} />}
            onClick={handleDownload}
            disabled={isProcessing || isRendering || (signingMode === 'digital' && !p12Buffer)}
          >
            {isProcessing ? 'Processing...' : isSigned ? 'Saved!' : 'Download Signed'}
          </Button>
        </div>
      </div>

      <ReviewModal 
        isOpen={showReviewModal} 
        onClose={() => setShowReviewModal(false)} 
      />
    </div>
  );
};
