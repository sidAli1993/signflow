'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { RefreshCw, Eraser } from 'lucide-react';

interface WatermarkBrushCanvasProps {
  imageSrc: string;
  onProcess: (originalImageData: ImageData, maskImageData: ImageData) => void;
  isProcessing: boolean;
}

export default function WatermarkBrushCanvas({ imageSrc, onProcess, isProcessing }: WatermarkBrushCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const maskCanvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [brushSize, setBrushSize] = useState(20);
  const [imageLoaded, setImageLoaded] = useState(false);

  const loadImage = useCallback(() => {
    const canvas = canvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    const container = containerRef.current;
    if (!canvas || !maskCanvas || !container) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx || !maskCtx) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Calculate aspect ratio to fit within container
      const maxWidth = container.clientWidth;
      const maxHeight = window.innerHeight * 0.6; // Max 60% of viewport height
      let width = img.width;
      let height = img.height;

      const ratio = Math.min(maxWidth / width, maxHeight / height);
      
      // Only scale down, don't scale up
      if (ratio < 1) {
        width = width * ratio;
        height = height * ratio;
      }

      canvas.width = width;
      canvas.height = height;
      maskCanvas.width = width;
      maskCanvas.height = height;

      // Draw original image
      ctx.drawImage(img, 0, 0, width, height);
      
      // Init mask with black (0) - in OpenCV, mask > 0 means area to inpaint
      maskCtx.fillStyle = '#000000';
      maskCtx.fillRect(0, 0, width, height);

      setImageLoaded(true);
    };
    img.src = imageSrc;
  }, [imageSrc]);

  useEffect(() => {
    loadImage();
  }, [loadImage]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    draw(e);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    if (!canvas || !maskCanvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx || !maskCtx) return;

    const rect = canvas.getBoundingClientRect();
    let clientX, clientY;

    if ('touches' in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const x = clientX - rect.left;
    const y = clientY - rect.top;

    // Draw visual feedback (semi-transparent red) on main canvas
    ctx.beginPath();
    ctx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
    ctx.fill();
    ctx.closePath();

    // Draw pure white (255) on the mask canvas
    maskCtx.beginPath();
    maskCtx.arc(x, y, brushSize / 2, 0, Math.PI * 2);
    maskCtx.fillStyle = '#ffffff';
    maskCtx.fill();
    maskCtx.closePath();
  };

  const handleClear = () => {
    loadImage(); // Reset to original state
  };

  const handleProcess = () => {
    const canvas = canvasRef.current;
    const maskCanvas = maskCanvasRef.current;
    if (!canvas || !maskCanvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx || !maskCtx) return;

    // Re-draw original image on a temp canvas to get clean pixels (no red marks)
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const tempCtx = tempCanvas.getContext('2d');
    
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        if(tempCtx) tempCtx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const originalImageData = tempCtx!.getImageData(0, 0, canvas.width, canvas.height);
        const maskImageData = maskCtx.getImageData(0, 0, maskCanvas.width, maskCanvas.height);
        onProcess(originalImageData, maskImageData);
    };
    img.src = imageSrc;
  };

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <div className="flex flex-wrap items-center justify-center gap-4 bg-gray-50/50 p-4 rounded-xl border border-gray-100 w-full">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-700">Brush Size:</span>
          <input 
            type="range" 
            min="5" 
            max="100" 
            value={brushSize} 
            onChange={(e) => setBrushSize(parseInt(e.target.value))}
            className="w-32 accent-indigo-600"
            disabled={isProcessing}
          />
        </div>
        
        <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>

        <button
          onClick={handleClear}
          disabled={isProcessing}
          className="flex items-center space-x-2 text-sm font-medium text-gray-600 hover:text-gray-900 bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-200 transition-colors disabled:opacity-50"
        >
          <RefreshCw size={16} />
          <span>Clear Selection</span>
        </button>

        <button
          onClick={handleProcess}
          disabled={isProcessing || !imageLoaded}
          className="flex items-center space-x-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-1.5 rounded-md shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Eraser size={16} />
          <span>{isProcessing ? 'Removing Watermark...' : 'Remove Watermark'}</span>
        </button>
      </div>

      <div 
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl shadow-lg border border-gray-200 bg-gray-100 flex items-center justify-center min-h-[300px] cursor-crosshair"
      >
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
          </div>
        )}
        
        {/* Main display canvas with visual brush strokes */}
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseOut={stopDrawing}
          onMouseMove={draw}
          onTouchStart={startDrawing}
          onTouchEnd={stopDrawing}
          onTouchCancel={stopDrawing}
          onTouchMove={draw}
          className="max-w-full touch-none"
        />

        {/* Hidden mask canvas */}
        <canvas
          ref={maskCanvasRef}
          className="hidden"
        />
        
        {isProcessing && (
           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-sm z-20 text-white rounded-2xl">
             <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white mb-4"></div>
             <p className="font-semibold text-lg animate-pulse">Processing image client-side...</p>
           </div>
        )}
      </div>
      
      <p className="text-sm text-gray-500 text-center">
        Tip: Paint over the watermark you want to remove. For best results, use an appropriate brush size.
      </p>
    </div>
  );
}
