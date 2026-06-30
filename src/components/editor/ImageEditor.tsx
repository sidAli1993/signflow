'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui';
import { Download, Share2, RefreshCw, ZoomIn, ZoomOut, Check } from 'lucide-react';
import styles from './ImageEditor.module.css';

interface ImageEditorProps {
  file: File;
  signatureUrl: string;
  onStartOver: () => void;
  onShare: (signedFile: File) => void;
}

export function ImageEditor({ file, signatureUrl, onStartOver, onShare }: ImageEditorProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  
  // Position in percentage relative to the container (0-100)
  const [position, setPosition] = useState({ x: 30, y: 30 });
  const [size, setSize] = useState({ width: 150, height: 75 });
  
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSigned, setIsSigned] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const sigRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ x: 0, y: 0 });
  const positionStart = useRef({ x: 30, y: 30 });
  const resizeStart = useRef({ x: 0, y: 0 });
  const sizeStart = useRef({ width: 150, height: 75 });

  useEffect(() => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageSrc(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, [file]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isSigned) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    
    // Calculate current pixel positions to start
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
        
        // Convert pixel delta to percentage
        const pctDeltaX = (deltaX / containerRect.width) * 100;
        const pctDeltaY = (deltaY / containerRect.height) * 100;
        
        let newX = positionStart.current.x + pctDeltaX;
        let newY = positionStart.current.y + pctDeltaY;
        
        // Bound checks
        const sigWidthPct = (size.width / containerRect.width) * 100;
        const sigHeightPct = (size.height / containerRect.height) * 100;
        
        newX = Math.max(0, Math.min(100 - sigWidthPct, newX));
        newY = Math.max(0, Math.min(100 - sigHeightPct, newY));
        
        setPosition({ x: newX, y: newY });
      }

      if (isResizing) {
        const deltaX = e.clientX - resizeStart.current.x;
        const newWidth = Math.max(50, Math.min(400, sizeStart.current.width + deltaX));
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

  // Touch event handlers for mobile
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
        const newWidth = Math.max(50, Math.min(400, sizeStart.current.width + deltaX));
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

  const generateSignedFile = (): Promise<File> => {
    return new Promise((resolve, reject) => {
      if (!imageSrc) return reject('No image source');
      
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) return reject('No 2d context');
        
        // Draw background image
        ctx.drawImage(img, 0, 0);
        
        // Load and draw signature image
        const sigImg = new Image();
        sigImg.onload = () => {
          // Convert percentage positions back to absolute image pixels
          const xPercent = position.x / 100;
          const yPercent = position.y / 100;
          
          // Get signature aspect ratio
          const sigAspect = size.width / size.height;
          
          // We need to calculate size of signature relative to the displayed size
          const displayedWidth = containerRef.current?.offsetWidth || 1;
          const scale = img.naturalWidth / displayedWidth;
          
          const finalSigWidth = size.width * scale;
          const finalSigHeight = size.height * scale;
          
          const finalX = xPercent * img.naturalWidth;
          const finalY = yPercent * img.naturalHeight;
          
          ctx.drawImage(sigImg, finalX, finalY, finalSigWidth, finalSigHeight);
          
          // Convert to file
          canvas.toBlob((blob) => {
            if (blob) {
              const signedFile = new File([blob], `signed_${file.name}`, { type: file.type });
              resolve(signedFile);
            } else {
              reject('Blob generation failed');
            }
          }, file.type);
        };
        sigImg.src = signatureUrl;
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
    } catch (err) {
      console.error(err);
      alert('Failed to generate signed document.');
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
    } catch (err) {
      console.error(err);
      alert('Failed to generate signed document for sharing.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className={styles.editorContainer}>
      <div className={styles.workspace}>
        <div className={styles.canvasWrapper} ref={containerRef}>
          {imageSrc && (
            <img src={imageSrc} alt="Document preview" className={styles.docImage} draggable={false} />
          )}
          
          {!isSigned && (
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

      <div className={styles.controlsBar}>
        <div className={styles.leftControls}>
          <Button variant="ghost" leftIcon={<RefreshCw size={16} />} onClick={onStartOver}>
            Start Over
          </Button>
        </div>
        
        <div className={styles.rightControls}>
          <Button
            variant="outline"
            leftIcon={<Share2 size={16} />}
            onClick={handleShareClick}
            disabled={isProcessing}
          >
            Share
          </Button>
          <Button
            variant="primary"
            leftIcon={isSigned ? <Check size={16} /> : <Download size={16} />}
            onClick={handleDownload}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : isSigned ? 'Saved!' : 'Download Signed'}
          </Button>
        </div>
      </div>
    </div>
  );
}
