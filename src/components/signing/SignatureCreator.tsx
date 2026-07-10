'use client';

import React, { useState, useRef, useEffect } from 'react';
import SignaturePad from 'signature_pad';
import { Download, Eraser, Image as ImageIcon, Type, PenTool } from 'lucide-react';
import { Button, Input, Tabs, Modal, AdBanner } from '@/components/ui';
import styles from './SignatureCreator.module.css';

interface SignatureCreatorProps {
  onSave?: (dataUrl: string) => void;
  standalone?: boolean;
  initialTab?: string;
}

export const SignatureCreator: React.FC<SignatureCreatorProps> = ({ onSave, standalone = false, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab || 'type');
  const [typedName, setTypedName] = useState('John Doe');
  const [selectedFont, setSelectedFont] = useState('Dancing Script');
  const [penColor, setPenColor] = useState('#000000');
  const [uploadedSig, setUploadedSig] = useState<string | null>(null);

  // Manual Sizing state
  const [customWidth, setCustomWidth] = useState(300);
  const [customHeight, setCustomHeight] = useState(100);
  const [keepAspect, setKeepAspect] = useState(true);
  const [aspectRatio, setAspectRatio] = useState(3.0);

  // Ad Download Modal state
  const [showAdModal, setShowAdModal] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [pendingDownloadUrl, setPendingDownloadUrl] = useState<string | null>(null);
  const [downloadFileName, setDownloadFileName] = useState('');
  
  // Ad Blocker state
  const [isAdBlockerActive, setIsAdBlockerActive] = useState(false);
  const [showBlockerModal, setShowBlockerModal] = useState(false);
  
  const padRef = useRef<SignaturePad | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const typeCanvasRef = useRef<HTMLCanvasElement>(null);
  
  const fonts = [
    { name: 'Dancing Script', family: '"Dancing Script", cursive' },
    { name: 'Great Vibes', family: '"Great Vibes", cursive' },
    { name: 'Pacifico', family: '"Pacifico", cursive' },
    { name: 'Caveat', family: '"Caveat", cursive' },
  ];

  const colors = ['#000000', '#1D4ED8', '#B91C1C'];

  // Advanced Ad Blocker detection check (network bait + DOM bait elements)
  useEffect(() => {
    // Check 1: Network test (fetching a Google Ads JS script)
    fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
      method: 'HEAD',
      mode: 'no-cors',
      cache: 'no-store',
    }).catch(() => {
      setIsAdBlockerActive(true);
    });

    // Check 2: DOM element test (injecting bait div with ad classes)
    const bait = document.createElement('div');
    bait.className = 'pub_300x250 pub_300x250m pub_728x90 text-ad adLayout ad_text adRect adsbox ad-placement';
    bait.setAttribute('style', 'width: 1px !important; height: 1px !important; position: absolute !important; left: -9999px !important; top: -9999px !important;');
    document.body.appendChild(bait);

    const checkBait = () => {
      if (
        bait.offsetHeight === 0 ||
        bait.offsetWidth === 0 ||
        window.getComputedStyle(bait).getPropertyValue('display') === 'none' ||
        window.getComputedStyle(bait).getPropertyValue('visibility') === 'hidden'
      ) {
        setIsAdBlockerActive(true);
      }
      document.body.removeChild(bait);
    };

    const timer = setTimeout(checkBait, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Initialize signature pad for drawing
  useEffect(() => {
    if (activeTab === 'draw' && canvasRef.current) {
      padRef.current = new SignaturePad(canvasRef.current, {
        penColor: penColor,
        backgroundColor: 'rgba(255, 255, 255, 0)',
      });

      // Handle resize
      const resizeCanvas = () => {
        const canvas = canvasRef.current;
        if (canvas) {
          const ratio = Math.max(window.devicePixelRatio || 1, 1);
          canvas.width = canvas.offsetWidth * ratio;
          canvas.height = canvas.offsetHeight * ratio;
          canvas.getContext('2d')?.scale(ratio, ratio);
          padRef.current?.clear();
          
          // Re-update aspect ratio based on actual visual dimensions
          const aspect = canvas.offsetWidth / canvas.offsetHeight;
          setAspectRatio(aspect);
          setCustomHeight(Math.round(customWidth / aspect));
        }
      };

      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      return () => window.removeEventListener('resize', resizeCanvas);
    }
  }, [activeTab]);

  // Adjust custom sizing options on tab changes
  useEffect(() => {
    if (activeTab === 'type') {
      setAspectRatio(3.0);
      setCustomWidth(300);
      setCustomHeight(100);
    } else if (activeTab === 'draw' && canvasRef.current) {
      const ratio = canvasRef.current.offsetWidth / canvasRef.current.offsetHeight || 2.0;
      setAspectRatio(ratio);
      setCustomWidth(300);
      setCustomHeight(Math.round(300 / ratio));
    } else if (activeTab === 'upload' && uploadedSig) {
      const img = new Image();
      img.onload = () => {
        const ratio = img.width / img.height;
        setAspectRatio(ratio);
        setCustomWidth(300);
        setCustomHeight(Math.round(300 / ratio));
      };
      img.src = uploadedSig;
    }
  }, [activeTab, uploadedSig]);

  // Update pen color
  useEffect(() => {
    if (padRef.current) {
      padRef.current.penColor = penColor;
    }
  }, [penColor]);

  // Sizing change handlers
  const handleWidthChange = (val: number) => {
    setCustomWidth(val);
    if (keepAspect) {
      setCustomHeight(Math.round(val / aspectRatio));
    }
  };

  const handleHeightChange = (val: number) => {
    setCustomHeight(val);
    if (keepAspect) {
      setCustomWidth(Math.round(val * aspectRatio));
    }
  };

  const clearSignature = () => {
    if (padRef.current) {
      padRef.current.clear();
    }
  };

  const generateTypedSignatureDataUrl = (targetWidth: number = 600, targetHeight: number = 200) => {
    const canvas = typeCanvasRef.current;
    if (!canvas) return null;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    canvas.width = targetWidth;
    canvas.height = targetHeight;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const font = fonts.find(f => f.name === selectedFont);
    const fontSize = Math.floor(targetHeight * 0.45);
    ctx.font = `${fontSize}px ${font?.family || 'cursive'}`;
    ctx.fillStyle = penColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    ctx.fillText(typedName || 'Sign Here', canvas.width / 2, canvas.height / 2);
    
    return canvas.toDataURL('image/png');
  };

  const resizeImage = (originalDataUrl: string, targetWidth: number, targetHeight: number): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        }
        resolve(canvas.toDataURL('image/png'));
      };
      img.src = originalDataUrl;
    });
  };

  // Download Trigger Flow
  const triggerDownload = async () => {
    if (isAdBlockerActive) {
      setShowBlockerModal(true);
      return;
    }

    let dataUrl = '';
    
    if (activeTab === 'draw') {
      if (!padRef.current || padRef.current.isEmpty()) {
        alert('Please draw a signature first.');
        return;
      }
      const rawUrl = padRef.current.toDataURL('image/png');
      dataUrl = await resizeImage(rawUrl, customWidth, customHeight);
    } else if (activeTab === 'type') {
      dataUrl = generateTypedSignatureDataUrl(customWidth, customHeight) || '';
      if (!dataUrl) return;
    } else if (activeTab === 'upload') {
      if (!uploadedSig) {
        alert('Please upload a signature first.');
        return;
      }
      dataUrl = await resizeImage(uploadedSig, customWidth, customHeight);
    }

    if (dataUrl) {
      setPendingDownloadUrl(dataUrl);
      setDownloadFileName(`signature_${customWidth}x${customHeight}.png`);
      setCountdown(3);
      setShowAdModal(true);
    }
  };

  // Ad modal countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showAdModal && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
    } else if (showAdModal && countdown === 0) {
      startDownload();
    }
    return () => clearTimeout(timer);
  }, [showAdModal, countdown]);

  const startDownload = () => {
    if (pendingDownloadUrl) {
      const a = document.createElement('a');
      a.href = pendingDownloadUrl;
      a.download = downloadFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setShowAdModal(false);
      setPendingDownloadUrl(null);
    }
  };

  const handleSave = () => {
    if (isAdBlockerActive) {
      setShowBlockerModal(true);
      return;
    }

    let dataUrl = '';
    
    if (activeTab === 'draw') {
      if (!padRef.current || padRef.current.isEmpty()) return;
      dataUrl = padRef.current.toDataURL('image/png');
    } else if (activeTab === 'type') {
      dataUrl = generateTypedSignatureDataUrl(600, 200) || '';
    } else if (activeTab === 'upload') {
      dataUrl = uploadedSig || '';
    }

    if (dataUrl && onSave) {
      onSave(dataUrl);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedSig(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`${styles.creator} ${standalone ? styles.standalone : ''}`}>
      {/* Inject Google Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Pacifico&display=swap');
      `}} />

      <Tabs
        tabs={[
          { id: 'type', label: 'Type', icon: <Type size={16} /> },
          { id: 'draw', label: 'Draw', icon: <PenTool size={16} /> },
          { id: 'upload', label: 'Upload', icon: <ImageIcon size={16} /> }
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
        fullWidth
      />

      <div className={styles.workspace}>
        {activeTab === 'type' && (
          <div className={styles.typeWorkspace}>
            <Input 
              value={typedName}
              onChange={(e) => setTypedName(e.target.value)}
              placeholder="Type your name"
              className={styles.nameInput}
            />
            
            <div className={styles.fontGrid}>
              {fonts.map(font => (
                <div 
                  key={font.name}
                  className={`${styles.fontCard} ${selectedFont === font.name ? styles.selectedFont : ''}`}
                  onClick={() => setSelectedFont(font.name)}
                  style={{ fontFamily: font.family, color: penColor }}
                >
                  {typedName || 'Sign Here'}
                </div>
              ))}
            </div>
            
            {/* Hidden canvas for generating the typed signature image */}
            <canvas ref={typeCanvasRef} style={{ display: 'none' }} />
          </div>
        )}

        {activeTab === 'draw' && (
          <div className={styles.drawWorkspace}>
            <div className={styles.canvasContainer}>
              <canvas ref={canvasRef} className={styles.canvas} />
              <div className={styles.canvasPlaceholder}>Draw your signature above the line</div>
              <div className={styles.canvasLine}></div>
            </div>
            <div className={styles.drawControls}>
              <Button variant="ghost" size="sm" leftIcon={<Eraser size={16} />} onClick={clearSignature}>
                Clear
              </Button>
            </div>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className={styles.uploadWorkspace}>
            {uploadedSig ? (
              <div className={styles.uploadPreview}>
                <img src={uploadedSig} alt="Uploaded Signature" className={styles.sigPreviewImage} />
                <Button variant="ghost" size="sm" onClick={() => setUploadedSig(null)}>
                  Remove and Upload Another
                </Button>
              </div>
            ) : (
              <div className={styles.uploadBox}>
                <ImageIcon size={48} className={styles.uploadIcon} />
                <p>Drag and drop your signature image here</p>
                <p className={styles.uploadHint}>Supports PNG, JPG, JPEG (Max 5MB)</p>
                <Button variant="outline" size="sm" onClick={() => document.getElementById('sig-upload')?.click()}>
                  Browse Files
                </Button>
                <input 
                  id="sig-upload" 
                  type="file" 
                  accept="image/png, image/jpeg, image/jpg" 
                  style={{ display: 'none' }} 
                  onChange={handleFileUpload}
                />
              </div>
            )}
          </div>
        )}

        {activeTab !== 'upload' && (
          <div className={styles.colorPicker}>
            <span className={styles.colorLabel}>Color:</span>
            {colors.map(color => (
              <button
                key={color}
                className={`${styles.colorBtn} ${penColor === color ? styles.selectedColor : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setPenColor(color)}
                aria-label={`Select color ${color}`}
              />
            ))}
          </div>
        )}

        {/* Download settings - manual sizing */}
        <div className={styles.downloadSettings}>
          <h4 className={styles.settingsTitle}>Manual Download Options</h4>
          <p className={styles.settingsDesc}>Scale and download your signature as a transparent background PNG.</p>
          <div className={styles.settingsGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Width (px)</label>
              <Input
                type="number"
                value={customWidth}
                onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
              />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.inputLabel}>Height (px)</label>
              <Input
                type="number"
                value={customHeight}
                onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
              />
            </div>
            <div className={styles.checkboxGroup}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={keepAspect}
                  onChange={(e) => setKeepAspect(e.target.checked)}
                />
                Keep Aspect Ratio
              </label>
            </div>
          </div>
          <div className={styles.downloadBtnContainer}>
            <Button
              variant="outline"
              leftIcon={<Download size={16} />}
              onClick={triggerDownload}
              fullWidth
            >
              Download PNG (Transparent)
            </Button>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        {standalone ? (
          <div className={styles.downloadActions}>
            <Button variant="primary" leftIcon={<Download size={16} />} onClick={triggerDownload}>
              Download PNG
            </Button>
          </div>
        ) : (
          <Button variant="primary" onClick={handleSave} fullWidth>
            Adopt Signature
          </Button>
        )}
      </div>

      {/* Ad Download Countdown Modal */}
      <Modal
        isOpen={showAdModal}
        onClose={() => {
          setShowAdModal(false);
          setPendingDownloadUrl(null);
        }}
        title="Preparing Your Download"
      >
        <div className={styles.adModalContent}>
          <p className={styles.adModalStatus}>
            {countdown > 0 ? (
              <span>Your download will start in <strong>{countdown}</strong> seconds...</span>
            ) : (
              <span>Starting your download now...</span>
            )}
          </p>
          
          <div className={styles.adModalBanner}>
            <AdBanner slot="signature-download" format="rectangle" />
          </div>

          <div className={styles.adModalActions}>
            <Button
              variant="primary"
              onClick={startDownload}
              disabled={countdown > 0}
              fullWidth
            >
              {countdown > 0 ? 'Loading Ad Content...' : 'Download Now'}
            </Button>
          </div>
        </div>
      </Modal>

      {/* Ad Blocker Alert Modal */}
      {showBlockerModal && (
        <div className={styles.blockerModalOverlay}>
          <div className={styles.blockerModalCard}>
            <div className={styles.blockerAlertIcon}>⚠️</div>
            <h2>Ad Blocker Detected</h2>
            <p>
              Please disable your Ad Blocker (uBlock, AdBlock, AdGuard, Brave Shields, etc.) to generate, adopt, or download your signature.
            </p>
            <p className={styles.blockerSupportText}>
              Since this digital signature maker is 100% free with no limits, ads help us pay the hosting bills.
            </p>
            <button onClick={() => window.location.reload()} className={styles.blockerReloadBtn}>
              I have disabled it (Reload Page)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
