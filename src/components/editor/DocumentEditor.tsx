'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui';
import { Download, Share2, RefreshCw, ChevronLeft, ChevronRight, Check, Shield, PenLine, ZoomIn, ZoomOut, Type, Calendar, Undo2, Redo2, Trash2 } from 'lucide-react';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import { signPdfWithCertificate } from '@/utils/pdfSigner';
import { CertificateUploader } from './CertificateUploader';
import { ReviewModal } from '@/components/ui/ReviewModal';
import styles from './DocumentEditor.module.css';

const Toast = ({ message, type }: { message: string, type: 'success'|'error' }) => (
  <div style={{
    position: 'fixed', bottom: 20, right: 20, zIndex: 9999,
    background: type === 'success' ? '#10b981' : '#ef4444', color: 'white',
    padding: '12px 24px', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8, animation: 'fadeIn 0.3s ease'
  }}>
    {type === 'success' ? <Check size={18} /> : <Shield size={18} />}
    {message}
  </div>
);

type PlacementType = 'signature' | 'text' | 'date';

interface Placement {
  id: string;
  type: PlacementType;
  pageNum: number;
  x: number;
  y: number;
  width: number;
  height: number;
  value?: string;
}

interface HistoryState {
  past: Placement[][];
  present: Placement[];
  future: Placement[][];
}

interface DocumentEditorProps {
  file: File;
  signatureUrl: string;
  onStartOver: () => void;
  onShare: (signedFile: File) => void;
}

export function DocumentEditor({ file, signatureUrl, onStartOver, onShare }: DocumentEditorProps) {
  const [pdfjsLib, setPdfjsLib] = useState<any>(null);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [pageNum, setPageNum] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [isRendering, setIsRendering] = useState(false);

  useEffect(() => {
    const loadPdfJs = async () => {
      const pdfjs = await import('pdfjs-dist');
      pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`;
      setPdfjsLib(pdfjs);
    };
    loadPdfJs();
  }, []);

  const [history, setHistory] = useState<HistoryState>({
    past: [],
    present: [{ id: 'init', type: 'signature', pageNum: 1, x: 30, y: 50, width: 150, height: 75 }],
    future: []
  });
  
  const pushState = (newState: Placement[]) => {
    setHistory(h => ({
      past: [...h.past, h.present],
      present: newState,
      future: []
    }));
  };

  const undo = () => {
    setHistory(h => {
      if (h.past.length === 0) return h;
      const previous = h.past[h.past.length - 1];
      const newPast = h.past.slice(0, h.past.length - 1);
      return { past: newPast, present: previous, future: [h.present, ...h.future] };
    });
  };

  const redo = () => {
    setHistory(h => {
      if (h.future.length === 0) return h;
      const next = h.future[0];
      const newFuture = h.future.slice(1);
      return { past: [...h.past, h.present], present: next, future: newFuture };
    });
  };

  const updatePlacement = (id: string, updates: Partial<Placement>) => {
    const newState = history.present.map(p => p.id === id ? { ...p, ...updates } : p);
    pushState(newState);
  };
  
  const [draggedPlacementId, setDraggedPlacementId] = useState<string | null>(null);
  const [resizedPlacementId, setResizedPlacementId] = useState<string | null>(null);
  const [livePlacements, setLivePlacements] = useState<Placement[]>(history.present);

  useEffect(() => {
    if (!draggedPlacementId && !resizedPlacementId) {
      setLivePlacements(history.present);
    }
  }, [history.present, draggedPlacementId, resizedPlacementId]);

  const addPlacement = (type: PlacementType) => {
    const newValue = type === 'date' ? new Date().toLocaleDateString() : (type === 'text' ? 'Type text...' : undefined);
    const newPlacement: Placement = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      pageNum,
      x: 10,
      y: 10,
      width: type === 'signature' ? 150 : 120,
      height: type === 'signature' ? 75 : 30,
      value: newValue
    };
    pushState([...history.present, newPlacement]);
  };

  const removePlacement = (id: string) => {
    pushState(history.present.filter(p => p.id !== id));
  };

  const [zoom, setZoom] = useState(100);
  const ZOOM_STEPS = [50, 75, 100, 125, 150, 200];
  const zoomIn = () => setZoom(z => { const i = ZOOM_STEPS.indexOf(z); return i < ZOOM_STEPS.length - 1 ? ZOOM_STEPS[i + 1] : z; });
  const zoomOut = () => setZoom(z => { const i = ZOOM_STEPS.indexOf(z); return i > 0 ? ZOOM_STEPS[i - 1] : z; });

  const [signingMode, setSigningMode] = useState<'visual' | 'digital'>('visual');
  const [p12Buffer, setP12Buffer]     = useState<ArrayBuffer | null>(null);
  const [p12Passphrase, setP12Passphrase] = useState<string>('');
  
  const [includeBranding, setIncludeBranding] = useState(true);
  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);

  const showToast = (message: string, type: 'success'|'error' = 'success') => {
    setToast({message, type});
    setTimeout(() => setToast(null), 4000);
  };

  const handleCertLoaded = (buffer: ArrayBuffer | null, passphrase?: string) => {
    setP12Buffer(buffer);
    setP12Passphrase(passphrase || '');
  };

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSigned, setIsSigned]         = useState(false);
  const [showReviewModal, setShowReviewModal] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const renderTaskRef = useRef<any>(null);
  
  const dragStart = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ x: 0, y: 0 });
  const originalRect = useRef<{x: number, y: number, w: number, h: number}>({x: 0, y: 0, w: 0, h: 0});

  useEffect(() => {
    if (!pdfjsLib || !file) return;
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
        showToast('Failed to parse PDF document.', 'error');
      }
    };
    loadPdf();
  }, [file, pdfjsLib]);

  useEffect(() => {
    if (!pdfDoc) return;

    const renderPage = async () => {
      try {
        setIsRendering(true);
        const page = await pdfDoc.getPage(pageNum);
        
        if (renderTaskRef.current) {
          renderTaskRef.current.cancel();
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const desiredWidth = Math.min(window.innerWidth - 64, 1100);
        const viewportTemp = page.getViewport({ scale: 1.0 });
        const baseScale = desiredWidth / viewportTemp.width;
        
        const scale = baseScale * (zoom / 100);
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
  }, [pdfDoc, pageNum, zoom]);

  const handleMouseDown = (e: React.MouseEvent, id: string, p: Placement) => {
    if (isSigned) return;
    e.preventDefault();
    setDraggedPlacementId(id);
    dragStart.current = { x: e.clientX, y: e.clientY };
    originalRect.current = { x: p.x, y: p.y, w: p.width, h: p.height };
  };

  const handleResizeMouseDown = (e: React.MouseEvent, id: string, p: Placement) => {
    if (isSigned) return;
    e.stopPropagation();
    e.preventDefault();
    setResizedPlacementId(id);
    resizeStart.current = { x: e.clientX, y: e.clientY };
    originalRect.current = { x: p.x, y: p.y, w: p.width, h: p.height };
  };

  const handleTouchStart = (e: React.TouchEvent, id: string, p: Placement) => {
    if (isSigned) return;
    const touch = e.touches[0];
    setDraggedPlacementId(id);
    dragStart.current = { x: touch.clientX, y: touch.clientY };
    originalRect.current = { x: p.x, y: p.y, w: p.width, h: p.height };
  };

  const handleResizeTouchStart = (e: React.TouchEvent, id: string, p: Placement) => {
    if (isSigned) return;
    e.stopPropagation();
    const touch = e.touches[0];
    setResizedPlacementId(id);
    resizeStart.current = { x: touch.clientX, y: touch.clientY };
    originalRect.current = { x: p.x, y: p.y, w: p.width, h: p.height };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;
      
      if (window.TouchEvent && e instanceof TouchEvent) {
        if (e.touches.length === 0) return;
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      if (draggedPlacementId && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const deltaX = clientX - dragStart.current.x;
        const deltaY = clientY - dragStart.current.y;
        
        const pctDeltaX = (deltaX / containerRect.width) * 100;
        const pctDeltaY = (deltaY / containerRect.height) * 100;
        
        let newX = originalRect.current.x + pctDeltaX;
        let newY = originalRect.current.y + pctDeltaY;
        
        const sigWidthPct = (originalRect.current.w / containerRect.width) * 100;
        const sigHeightPct = (originalRect.current.h / containerRect.height) * 100;
        
        newX = Math.max(0, Math.min(100 - sigWidthPct, newX));
        newY = Math.max(0, Math.min(100 - sigHeightPct, newY));
        
        setLivePlacements(prev => prev.map(p => p.id === draggedPlacementId ? { ...p, x: newX, y: newY } : p));
      }

      if (resizedPlacementId) {
        const deltaX = clientX - resizeStart.current.x;
        const newWidth = Math.max(50, Math.min(400, originalRect.current.w + deltaX));
        const aspect = originalRect.current.w / originalRect.current.h;
        const newHeight = newWidth / aspect;
        
        setLivePlacements(prev => prev.map(p => p.id === resizedPlacementId ? { ...p, width: newWidth, height: newHeight } : p));
      }
    };

    const handleMouseUp = () => {
      if (draggedPlacementId) {
        const p = livePlacements.find(p => p.id === draggedPlacementId);
        if (p) updatePlacement(draggedPlacementId, { x: p.x, y: p.y });
        setDraggedPlacementId(null);
      }
      if (resizedPlacementId) {
        const p = livePlacements.find(p => p.id === resizedPlacementId);
        if (p) updatePlacement(resizedPlacementId, { width: p.width, height: p.height });
        setResizedPlacementId(null);
      }
    };

    if (draggedPlacementId || resizedPlacementId) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMouseMove, { passive: false });
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [draggedPlacementId, resizedPlacementId, livePlacements]);

  const generateSignedPdf = async (): Promise<File> => {
    const fileBytes = await file.arrayBuffer();
    
    const containerWidth = containerRef.current?.offsetWidth || 1;
    const containerHeight = containerRef.current?.offsetHeight || 1;
    
    const tempPdf = await PDFDocument.load(fileBytes);
    
    const response = await fetch(signatureUrl);
    const sigImageBytes = await response.arrayBuffer();
    const embeddedSigImage = await tempPdf.embedPng(sigImageBytes);
    
    const font = await tempPdf.embedFont(StandardFonts.Helvetica);

    const pages = tempPdf.getPages();
    
    for (const p of history.present) {
      const page = pages[p.pageNum - 1];
      const pdfWidth = page.getWidth();
      const pdfHeight = page.getHeight();
      
      const finalWidth = (p.width / containerWidth) * pdfWidth;
      const finalHeight = (p.height / containerHeight) * pdfHeight;
      const finalX = (p.x / 100) * pdfWidth;
      const finalY = pdfHeight - ((p.y / 100) * pdfHeight) - finalHeight;

      if (p.type === 'signature') {
        if (signingMode === 'digital' && p.id === history.present.find(x => x.type === 'signature')?.id) {
          continue; 
        }
        page.drawImage(embeddedSigImage, { x: finalX, y: finalY, width: finalWidth, height: finalHeight });
      } else if (p.type === 'text' || p.type === 'date') {
        page.drawText(p.value || '', {
          x: finalX,
          y: finalY + (finalHeight / 4),
          size: finalHeight * 0.7,
          font: font,
          color: rgb(0, 0, 0),
        });
      }
    }

    if (includeBranding) {
      const lastPage = pages[pages.length - 1];
      lastPage.drawText('Signed with MyDigitSign - Free Electronic Signatures', {
        x: 30,
        y: 15,
        size: 10,
        font: font,
        color: rgb(0.5, 0.5, 0.5),
      });
    }
    
    const intermediateBytes = await tempPdf.save();

    if (signingMode === 'digital') {
      if (!p12Buffer) {
        throw new Error('Please upload and validate a certificate before signing.');
      }
      
      const primarySig = history.present.find(x => x.type === 'signature');
      
      if (primarySig) {
        const page = pages[primarySig.pageNum - 1];
        const pdfWidth = page.getWidth();
        const pdfHeight = page.getHeight();
        
        const finalWidth = (primarySig.width / containerWidth) * pdfWidth;
        const finalHeight = (primarySig.height / containerHeight) * pdfHeight;
        const finalX = (primarySig.x / 100) * pdfWidth;
        const finalY = pdfHeight - ((primarySig.y / 100) * pdfHeight) - finalHeight;

        const signedPdfBytes = await signPdfWithCertificate({
          pdfBytes: intermediateBytes,
          p12Buffer: p12Buffer,
          passphrase: p12Passphrase,
          visualOptions: {
            page: primarySig.pageNum,
            x: finalX,
            y: finalY,
            width: finalWidth,
            height: finalHeight,
            signatureUrl: signatureUrl,
          }
        });
        
        const blob = new Blob([signedPdfBytes as any], { type: 'application/pdf' });
        return new File([blob], `signed_${file.name}`, { type: 'application/pdf' });
      } else {
         const signedPdfBytes = await signPdfWithCertificate({
          pdfBytes: intermediateBytes,
          p12Buffer: p12Buffer,
          passphrase: p12Passphrase,
        });
        const blob = new Blob([signedPdfBytes as any], { type: 'application/pdf' });
        return new File([blob], `signed_${file.name}`, { type: 'application/pdf' });
      }
    }

    const blob = new Blob([intermediateBytes as any], { type: 'application/pdf' });
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
      showToast('Document signed successfully!', 'success');
      setShowReviewModal(true);
    } catch (err: any) {
      console.error('Signing error:', err);
      showToast(err.message || 'Failed to apply signature to PDF.', 'error');
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
    } catch (err: any) {
      console.error('Sharing error:', err);
      showToast(err.message || 'Failed to generate PDF for sharing.', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={styles.editorContainer}>
      {toast && <Toast message={toast.message} type={toast.type} />}

      <div className={styles.controlsBar}>
        <div className={styles.leftControls}>
          <Button variant="ghost" size="sm" leftIcon={<RefreshCw size={15} />} onClick={onStartOver}>
            Start Over
          </Button>

          {numPages > 1 && (
            <div className={styles.navigation}>
              <Button
                variant="outline" size="sm"
                onClick={() => setPageNum(p => Math.max(1, p - 1))}
                disabled={pageNum <= 1 || isRendering}
              >
                <ChevronLeft size={15} />
              </Button>
              <span className={styles.pageLabel}>{pageNum} / {numPages}</span>
              <Button
                variant="outline" size="sm"
                onClick={() => setPageNum(p => Math.min(numPages, p + 1))}
                disabled={pageNum >= numPages || isRendering}
              >
                <ChevronRight size={15} />
              </Button>
            </div>
          )}
        </div>

        <div className={styles.rightControls}>
          <Button variant="ghost" size="sm" onClick={undo} disabled={history.past.length === 0} title="Undo">
            <Undo2 size={16} />
          </Button>
          <Button variant="ghost" size="sm" onClick={redo} disabled={history.future.length === 0} title="Redo">
            <Redo2 size={16} />
          </Button>
          
          <div className={styles.zoomControl}>
            <button className={styles.zoomBtn} onClick={zoomOut} disabled={zoom <= 50} aria-label="Zoom out">−</button>
            <span className={styles.zoomDisplay}>{zoom}%</span>
            <button className={styles.zoomBtn} onClick={zoomIn}  disabled={zoom >= 200} aria-label="Zoom in">+</button>
          </div>

          <Button
            variant="outline" size="sm"
            leftIcon={<Share2 size={15} />}
            onClick={handleShareClick}
            disabled={isProcessing || isRendering || (signingMode === 'digital' && !p12Buffer)}
          >
            Share
          </Button>
          <Button
            variant="primary" size="sm"
            leftIcon={isSigned ? <Check size={15} /> : <Download size={15} />}
            onClick={handleDownload}
            disabled={isProcessing || isRendering || (signingMode === 'digital' && !p12Buffer)}
          >
            {isProcessing ? 'Saving…' : isSigned ? 'Saved!' : 'Download Signed'}
          </Button>
        </div>
      </div>

      <div className={styles.editorMain}>
        <div className={styles.workspace}>
          {/* We removed the CSS scale transform and instead rely on actual render resolution from zoom state */}
          <div className={styles.canvasWrapper} ref={containerRef}>
            <canvas ref={canvasRef} className={styles.pdfCanvas} />

            {isRendering && (
              <div className={styles.renderLoader}>
                <div className={styles.spinner} />
                <span>Rendering page {pageNum}…</span>
              </div>
            )}

            {!isSigned && !isRendering && livePlacements.filter(p => p.pageNum === pageNum).map(p => (
              <div
                key={p.id}
                className={`${styles.sigOverlay} ${draggedPlacementId === p.id ? styles.dragging : ''}`}
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.width}px`,
                  height: `${p.height}px`,
                }}
                onMouseDown={(e) => handleMouseDown(e, p.id, p)}
                onTouchStart={(e) => handleTouchStart(e, p.id, p)}
              >
                <div style={{position: 'absolute', top: -14, right: -14, cursor: 'pointer', background: '#ef4444', color: 'white', borderRadius: '50%', padding: 4, display: 'flex', opacity: 0.9, zIndex: 10}} onClick={(e) => { e.stopPropagation(); removePlacement(p.id); }}>
                    <Trash2 size={12} />
                </div>
                
                {p.type === 'signature' && <img src={signatureUrl} alt="Signature" className={styles.sigImage} draggable={false} />}
                {(p.type === 'text' || p.type === 'date') && (
                  <input 
                    type="text" 
                    value={p.value} 
                    onChange={e => {
                        const newV = e.target.value;
                        setLivePlacements(prev => prev.map(x => x.id === p.id ? { ...x, value: newV } : x));
                    }}
                    onBlur={(e) => updatePlacement(p.id, { value: e.target.value })}
                    style={{width: '100%', height: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: p.height * 0.7, fontFamily: 'Helvetica, Arial, sans-serif', color: '#1a1a2e'}}
                  />
                )}
                
                <div
                  className={styles.resizeHandle}
                  onMouseDown={(e) => handleResizeMouseDown(e, p.id, p)}
                  onTouchStart={(e) => handleResizeTouchStart(e, p.id, p)}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.sidebarPanel}>
          <div className={styles.panelSection}>
             <h4 className={styles.panelTitle}>Add Field</h4>
             <div style={{display: 'flex', gap: 8, marginTop: 8}}>
                 <Button variant="outline" size="sm" onClick={() => addPlacement('signature')} leftIcon={<PenLine size={14}/>}>Signature</Button>
                 <Button variant="outline" size="sm" onClick={() => addPlacement('text')} leftIcon={<Type size={14}/>}>Text</Button>
                 <Button variant="outline" size="sm" onClick={() => addPlacement('date')} leftIcon={<Calendar size={14}/>}>Date</Button>
             </div>
          </div>

          <div className={styles.panelSection}>
            <h4 className={styles.panelTitle}>
              <PenLine size={13} />
              Signature Mode
            </h4>
            <div className={styles.modeTabs}>
              <button
                type="button"
                className={`${styles.modeTab} ${signingMode === 'visual' ? styles.activeTab : ''}`}
                onClick={() => setSigningMode('visual')}
                disabled={isSigned || isProcessing}
              >
                Visual
              </button>
              <button
                type="button"
                className={`${styles.modeTab} ${signingMode === 'digital' ? styles.activeTab : ''}`}
                onClick={() => setSigningMode('digital')}
                disabled={isSigned || isProcessing}
              >
                <Shield size={11} style={{ marginRight: 4 }} />
                Cryptographic
              </button>
            </div>
          </div>

          {signingMode === 'digital' && !isSigned && (
            <CertificateUploader onCertificateLoaded={handleCertLoaded} />
          )}
          
          <div className={styles.panelSection}>
             <h4 className={styles.panelTitle}>Document Options</h4>
             <label style={{display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, cursor: 'pointer', marginTop: 8}}>
                 <input type="checkbox" checked={includeBranding} onChange={e => setIncludeBranding(e.target.checked)} />
                 Include "Signed with MyDigitSign" footer
             </label>
             <p style={{fontSize: 11, color: '#64748b', marginTop: 4, marginLeft: 21}}>Adds a small credit line to the bottom of the final page.</p>
          </div>

          {signingMode === 'digital' && isSigned && (
            <div className={styles.panelSection}>
              <p style={{ fontSize: 13, color: 'var(--color-success)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Check size={14} /> Document cryptographically signed.
              </p>
            </div>
          )}
        </div>
      </div>

      <ReviewModal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
      />
    </div>
  );
}
