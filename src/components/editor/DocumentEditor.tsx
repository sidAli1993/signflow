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

type PlacementType = 'signature' | 'text' | 'date' | 'check';

interface Placement {
  id: string;
  type: PlacementType;
  pageNum: number;
  x: number;
  y: number;
  width: number;
  height: number;
  value?: string;
  fontSize?: number;
  color?: string;
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
  const [selectedPlacementId, setSelectedPlacementId] = useState<string | null>(null);
  const [livePlacements, setLivePlacements] = useState<Placement[]>(history.present);

  useEffect(() => {
    if (!draggedPlacementId && !resizedPlacementId) {
      setLivePlacements(history.present);
    }
  }, [history.present, draggedPlacementId, resizedPlacementId]);

  const addPlacement = (type: PlacementType) => {
    const newValue = type === 'date' ? new Date().toLocaleDateString() : (type === 'text' ? '' : (type === 'check' ? '✓' : undefined));
    const newPlacement: Placement = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      pageNum,
      x: 10,
      y: 10,
      width: type === 'signature' ? 150 : (type === 'check' ? 30 : 160),
      height: type === 'signature' ? 75 : (type === 'check' ? 30 : 40),
      value: newValue,
      fontSize: 14,
      color: '#0f172a'
    };
    pushState([...history.present, newPlacement]);
    setSelectedPlacementId(newPlacement.id);
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
    e.stopPropagation();
    setDraggedPlacementId(id);
    setSelectedPlacementId(id);
    dragStart.current = { x: e.clientX, y: e.clientY };
    originalRect.current = { x: p.x, y: p.y, w: p.width, h: p.height };
  };

  const handleResizeMouseDown = (e: React.MouseEvent, id: string, p: Placement) => {
    if (isSigned) return;
    e.stopPropagation();
    e.preventDefault();
    setResizedPlacementId(id);
    setSelectedPlacementId(id);
    resizeStart.current = { x: e.clientX, y: e.clientY };
    originalRect.current = { x: p.x, y: p.y, w: p.width, h: p.height };
  };

  const handleTouchStart = (e: React.TouchEvent, id: string, p: Placement) => {
    if (isSigned) return;
    e.stopPropagation();
    const touch = e.touches[0];
    setDraggedPlacementId(id);
    setSelectedPlacementId(id);
    dragStart.current = { x: touch.clientX, y: touch.clientY };
    originalRect.current = { x: p.x, y: p.y, w: p.width, h: p.height };
  };

  const handleResizeTouchStart = (e: React.TouchEvent, id: string, p: Placement) => {
    if (isSigned) return;
    e.stopPropagation();
    const touch = e.touches[0];
    setResizedPlacementId(id);
    setSelectedPlacementId(id);
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
        const textLines = (p.value || '').split('\n');
        const fSize = (p.fontSize || 14) * (pdfHeight / containerHeight); // Approximate scaling for font size
        
        // Parse hex color
        const hex = p.color || '#000000';
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;

        for (let i = 0; i < textLines.length; i++) {
          page.drawText(textLines[i], {
            x: finalX,
            y: finalY + finalHeight - fSize - (i * fSize * 1.2), // Adjust y for each line
            size: fSize,
            font: font,
            color: rgb(r, g, b),
          });
        }
      } else if (p.type === 'check') {
        // Parse hex color
        const hex = p.color || '#000000';
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        
        const fSize = Math.min(finalWidth, finalHeight) * 0.8;
        page.drawText('X', { // We use X as checkmark substitute in standard font if checkmark isn't supported, or rely on a checkmark character
          x: finalX + (finalWidth - fSize) / 2,
          y: finalY + (finalHeight - fSize) / 2 + (fSize * 0.1),
          size: fSize,
          font: font,
          color: rgb(r, g, b),
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
          <div className={styles.canvasWrapper} ref={containerRef} onMouseDown={() => setSelectedPlacementId(null)}>
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
                className={`${styles.sigOverlay} ${draggedPlacementId === p.id ? styles.dragging : ''} ${selectedPlacementId === p.id ? styles.selected : ''} ${p.type === 'text' || p.type === 'date' ? styles.textOverlay : ''}`}
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  width: `${p.width}px`,
                  height: `${p.height}px`,
                }}
                onMouseDown={(e) => handleMouseDown(e, p.id, p)}
                onTouchStart={(e) => handleTouchStart(e, p.id, p)}
              >
                {selectedPlacementId === p.id && (
                  <div className={styles.floatingControls} onMouseDown={e => e.stopPropagation()}>
                    <button className={styles.iconBtn} onClick={() => removePlacement(p.id)} title="Delete"><Trash2 size={14} /></button>
                  </div>
                )}
                
                {p.type === 'signature' && <img src={signatureUrl} alt="Signature" className={styles.sigImage} draggable={false} />}
                {(p.type === 'text' || p.type === 'date') && (
                  <textarea 
                    value={p.value}
                    placeholder={p.type === 'text' ? 'Type text...' : 'Date'}
                    onChange={e => {
                        const newV = e.target.value;
                        setLivePlacements(prev => prev.map(x => x.id === p.id ? { ...x, value: newV } : x));
                    }}
                    onBlur={(e) => updatePlacement(p.id, { value: e.target.value })}
                    className={styles.textareaInput}
                    style={{
                      fontSize: `${p.fontSize || 14}px`, 
                      color: p.color || '#0f172a'
                    }}
                  />
                )}
                {p.type === 'check' && (
                  <div className={styles.checkIcon} style={{ color: p.color || '#0f172a' }}>
                    <Check size={Math.min(p.width, p.height) * 0.8} strokeWidth={3} />
                  </div>
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
             <div style={{display: 'flex', gap: 8, marginTop: 8, flexWrap: 'wrap'}}>
                 <Button variant="outline" size="sm" onClick={() => addPlacement('signature')} leftIcon={<PenLine size={14}/>}>Signature</Button>
                 <Button variant="outline" size="sm" onClick={() => addPlacement('text')} leftIcon={<Type size={14}/>}>Text</Button>
                 <Button variant="outline" size="sm" onClick={() => addPlacement('date')} leftIcon={<Calendar size={14}/>}>Date</Button>
                 <Button variant="outline" size="sm" onClick={() => addPlacement('check')} leftIcon={<Check size={14}/>}>Check</Button>
             </div>
          </div>
          
          {selectedPlacementId && (
            <div className={styles.panelSection}>
              <h4 className={styles.panelTitle}>Field Properties</h4>
              {(() => {
                const selectedP = livePlacements.find(p => p.id === selectedPlacementId);
                if (!selectedP) return null;
                return (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 8 }}>
                    {(selectedP.type === 'text' || selectedP.type === 'date') && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <label style={{ fontSize: 12, fontWeight: 600, color: '#475569' }}>Font Size ({selectedP.fontSize || 14}px)</label>
                        <input 
                          type="range" 
                          min="8" max="48" 
                          value={selectedP.fontSize || 14} 
                          onChange={(e) => {
                            const newSize = parseInt(e.target.value);
                            updatePlacement(selectedP.id, { fontSize: newSize });
                          }}
                          style={{ accentColor: 'var(--color-primary)' }}
                        />
                      </div>
                    )}
                    {(selectedP.type === 'text' || selectedP.type === 'date' || selectedP.type === 'check') && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        <label style={{ fontSize: 12, fontWeight: 600, color: '#475569' }}>Color</label>
                        <div style={{ display: 'flex', gap: 8 }}>
                          {['#0f172a', '#2563eb', '#dc2626'].map(color => (
                            <button
                              key={color}
                              onClick={() => updatePlacement(selectedP.id, { color })}
                              style={{
                                width: 24, height: 24, borderRadius: '50%', backgroundColor: color,
                                border: (selectedP.color || '#0f172a') === color ? '2px solid #fff' : '2px solid transparent',
                                outline: (selectedP.color || '#0f172a') === color ? `2px solid ${color}` : 'none',
                                cursor: 'pointer'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}

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
