'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui';
import { Download, Share2, RefreshCw, ZoomIn, ZoomOut, Check, Shield, PenLine, Type, Calendar, Undo2, Redo2, Trash2 } from 'lucide-react';
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

interface ImageEditorProps {
  file: File;
  signatureUrl: string;
  onStartOver: () => void;
  onShare: (signedFile: File) => void;
}

export function ImageEditor({ file, signatureUrl, onStartOver, onShare }: ImageEditorProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [naturalSize, setNaturalSize] = useState({ width: 0, height: 0 });

  const [history, setHistory] = useState<HistoryState>({
    past: [],
    present: [],
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

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSigned, setIsSigned] = useState(false);
  const [toast, setToast] = useState<{message: string, type: 'success'|'error'} | null>(null);

  const showToast = (message: string, type: 'success'|'error' = 'success') => {
    setToast({message, type});
    setTimeout(() => setToast(null), 4000);
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageElementRef = useRef<HTMLImageElement | null>(null);
  
  const dragStart = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ x: 0, y: 0 });
  const originalRect = useRef<{x: number, y: number, w: number, h: number}>({x: 0, y: 0, w: 0, h: 0});

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target?.result as string;
      setImageSrc(src);
      
      const img = new Image();
      img.onload = () => {
        setNaturalSize({ width: img.naturalWidth, height: img.naturalHeight });
        imageElementRef.current = img;
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  }, [file]);

  useEffect(() => {
    if (!imageElementRef.current || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imageElementRef.current;
    const desiredWidth = Math.min(window.innerWidth - 64, 1100);
    const baseScale = desiredWidth / img.naturalWidth;
    
    const finalScale = baseScale * (zoom / 100);
    
    canvas.width = img.naturalWidth * finalScale;
    canvas.height = img.naturalHeight * finalScale;
    
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }, [naturalSize, zoom]);

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
        
        const p = livePlacements.find(x => x.id === draggedPlacementId);
        if (p) {
            const sigWidthPct = (p.width / containerRect.width) * 100;
            const sigHeightPct = (p.height / containerRect.height) * 100;
            newX = Math.max(0, Math.min(100 - sigWidthPct, newX));
            newY = Math.max(0, Math.min(100 - sigHeightPct, newY));
        }
        
        setLivePlacements(prev => prev.map(x => x.id === draggedPlacementId ? { ...x, x: newX, y: newY } : x));
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

  const generateSignedFile = (): Promise<File> => {
    return new Promise((resolve, reject) => {
      if (!imageSrc) return reject(new Error('No image source'));
      
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject(new Error('No 2d context'));
        
        ctx.drawImage(img, 0, 0);
        
        const displayedWidth = containerRef.current?.offsetWidth || 1;
        const displayedHeight = containerRef.current?.offsetHeight || 1;
        
        let pendingImages = 0;
        
        const finalize = () => {
            canvas.toBlob((blob) => {
                if (blob) {
                  const signedFile = new File([blob], `signed_${file.name}`, { type: file.type });
                  resolve(signedFile);
                } else {
                  reject(new Error('Blob generation failed'));
                }
            }, file.type);
        };
        
        if (history.present.length === 0) {
            finalize();
            return;
        }

        history.present.forEach(p => {
          const finalWidth = (p.width / displayedWidth) * canvas.width;
          const finalHeight = (p.height / displayedHeight) * canvas.height;
          const finalX = (p.x / 100) * canvas.width;
          const finalY = (p.y / 100) * canvas.height;
            
          if (p.type === 'signature') {
              pendingImages++;
              const sigImg = new Image();
              sigImg.onload = () => {
                  ctx.drawImage(sigImg, finalX, finalY, finalWidth, finalHeight);
                  pendingImages--;
                  if (pendingImages === 0) finalize();
              };
              sigImg.src = signatureUrl;
          } else if (p.type === 'text' || p.type === 'date') {
              ctx.font = `${finalHeight * 0.7}px Helvetica, Arial, sans-serif`;
              ctx.fillStyle = '#000000';
              ctx.textBaseline = 'bottom';
              ctx.fillText(p.value || '', finalX, finalY + finalHeight - (finalHeight * 0.15));
          }
        });
        
        if (pendingImages === 0) {
            finalize();
        }
      };
      img.src = imageSrc;
    });
  };

  const handleDownload = async () => {
    try {
      setIsProcessing(true);
      const signedFile = await generateSignedFile();
      const dataUrl = URL.createObjectURL(signedFile);
      
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = signedFile.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(dataUrl);
      
      setIsSigned(true);
      showToast('Image signed successfully!', 'success');
    } catch (err: any) {
      console.error(err);
      showToast(err.message || 'Failed to generate signed document.', 'error');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleShareClick = async () => {
    try {
      setIsProcessing(true);
      const signedFile = await generateSignedFile();
      onShare(signedFile);
      setIsSigned(true);
    } catch (err: any) {
      console.error(err);
      showToast(err.message || 'Failed to generate signed document for sharing.', 'error');
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
            disabled={isProcessing}
          >
            Share
          </Button>
          <Button
            variant="primary" size="sm"
            leftIcon={isSigned ? <Check size={15} /> : <Download size={15} />}
            onClick={handleDownload}
            disabled={isProcessing}
          >
            {isProcessing ? 'Saving…' : isSigned ? 'Saved!' : 'Download Signed'}
          </Button>
        </div>
      </div>

      <div className={styles.editorMain}>
        <div className={styles.workspace}>
          <div className={styles.canvasWrapper} ref={containerRef}>
            <canvas ref={canvasRef} className={styles.pdfCanvas} />

            {!isSigned && livePlacements.map(p => (
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
        </div>
      </div>
    </div>
  );
}
