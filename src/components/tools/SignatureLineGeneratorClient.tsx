'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Download, Copy, CheckCircle, PenTool, Type, FileText } from 'lucide-react';

export default function SignatureLineGeneratorClient() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [prefix, setPrefix] = useState('X');
  const [includeDate, setIncludeDate] = useState(false);
  const [copied, setCopied] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Redraw canvas whenever inputs change
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high-res canvas for crisp text
    const scale = 2; // scale factor for retina displays
    const width = 500;
    const height = 200;
    
    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    
    ctx.scale(scale, scale);
    
    // Clear canvas (transparent background)
    ctx.clearRect(0, 0, width, height);
    
    // Set styles
    ctx.fillStyle = '#0f172a'; // dark text color
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 1.5;

    // Draw main signature line
    const startX = 40;
    const endX = includeDate ? 300 : 460;
    const lineY = 120;
    
    ctx.beginPath();
    ctx.moveTo(startX, lineY);
    ctx.lineTo(endX, lineY);
    ctx.stroke();

    // Draw Prefix
    if (prefix) {
      ctx.font = 'italic 18px "Times New Roman", serif';
      ctx.fillText(prefix, 15, lineY - 5);
    }

    // Draw "Sign Here" indicator if selected
    if (prefix === 'Sign Here') {
      ctx.font = 'bold 12px Arial, sans-serif';
      ctx.fillStyle = '#64748b';
      // replace the prefix rendering
      ctx.clearRect(0, lineY - 25, 100, 30);
      ctx.fillText('Sign Here', startX, lineY - 10);
      ctx.fillStyle = '#0f172a';
    }

    // Draw Name and Title below line
    ctx.font = '16px Arial, sans-serif';
    const textY = lineY + 25;
    
    let label = '';
    if (name) label += name;
    if (name && title) label += ', ';
    if (title) label += title;
    
    if (label) {
      ctx.fillText(label, startX, textY);
    } else {
      ctx.fillStyle = '#94a3b8';
      ctx.fillText('Name, Title', startX, textY);
      ctx.fillStyle = '#0f172a';
    }

    // Draw Date Line if requested
    if (includeDate) {
      const dateStartX = 340;
      const dateEndX = 460;
      ctx.beginPath();
      ctx.moveTo(dateStartX, lineY);
      ctx.lineTo(dateEndX, lineY);
      ctx.stroke();

      ctx.font = '14px Arial, sans-serif';
      ctx.fillText('Date', dateStartX, textY);
    }

  }, [name, title, prefix, includeDate]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const link = document.createElement('a');
    link.download = `signature-line-${name.replace(/\s+/g, '-').toLowerCase() || 'template'}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const handleCopy = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        const item = new ClipboardItem({ 'image/png': blob });
        await navigator.clipboard.write([item]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } catch (err) {
      console.error('Failed to copy image: ', err);
      alert('Failed to copy. Your browser might not support this feature. Please use the Download button instead.');
    }
  };

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '1.5rem', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        
        {/* Left Side: Controls */}
        <div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <PenTool size={20} color="var(--color-primary, #4f46e5)" />
            Customize Signature Line
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>Printed Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Doe"
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }}
              />
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>Title or Role</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. CEO, Manager"
                style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#475569', marginBottom: '0.5rem' }}>Line Prefix</label>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {['X', 'By:', 'Sign Here', 'None'].map(p => (
                  <button
                    key={p}
                    onClick={() => setPrefix(p === 'None' ? '' : p)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      border: `1px solid ${prefix === (p === 'None' ? '' : p) ? 'var(--color-primary, #4f46e5)' : '#cbd5e1'}`,
                      background: prefix === (p === 'None' ? '' : p) ? '#eef2ff' : '#ffffff',
                      color: prefix === (p === 'None' ? '' : p) ? 'var(--color-primary, #4f46e5)' : '#475569',
                      fontWeight: 600,
                      cursor: 'pointer',
                      flex: 1
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95rem', color: '#0f172a', fontWeight: 500, marginTop: '0.5rem' }}>
              <input 
                type="checkbox" 
                checked={includeDate}
                onChange={(e) => setIncludeDate(e.target.checked)}
                style={{ width: '1.2rem', height: '1.2rem', accentColor: 'var(--color-primary, #4f46e5)' }}
              />
              Include Date Line
            </label>
          </div>
        </div>

        {/* Right Side: Preview & Export */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FileText size={20} color="var(--color-primary, #4f46e5)" />
            Live Preview
          </h2>
          
          <div style={{ 
            flex: 1, 
            background: '#f8fafc', 
            borderRadius: '12px', 
            border: '2px dashed #cbd5e1', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            minHeight: '220px'
          }}>
            {/* Checkerboard background pattern for transparency indication */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.4, backgroundImage: 'linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }} />
            
            <canvas 
              ref={canvasRef} 
              style={{ position: 'relative', zIndex: 1, maxWidth: '100%', height: 'auto' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <button
              onClick={handleDownload}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'var(--color-primary, #4f46e5)',
                color: '#ffffff',
                padding: '0.85rem',
                borderRadius: '8px',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)',
              }}
            >
              <Download size={18} />
              Download PNG
            </button>
            <button
              onClick={handleCopy}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: copied ? '#16a34a' : '#f1f5f9',
                color: copied ? '#ffffff' : '#1e293b',
                padding: '0.85rem',
                borderRadius: '8px',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.2s',
              }}
            >
              {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.85rem', color: '#64748b', marginTop: '1rem', margin: 0 }}>
            Tip: Copy to Clipboard to paste directly into Word or Google Docs.
          </p>
        </div>
      </div>
    </div>
  );
}
