'use client';

import React, { useState, useRef, useEffect } from 'react';
import SignaturePad from 'signature_pad';
import { Download, Eraser, Image as ImageIcon, Type, PenTool, ChevronDown, Check, Minus, AlignLeft } from 'lucide-react';
import { Button, Input, Tabs, Modal, AdBanner } from '@/components/ui';
import styles from './SignatureCreator.module.css';

interface SignatureCreatorProps {
  onSave?: (dataUrl: string) => void;
  standalone?: boolean;
  initialTab?: string;
}

const THICKNESS_OPTIONS = [
  { id: 'thin',   label: 'Thin',   minWidth: 0.5,  maxWidth: 1.5 },
  { id: 'medium', label: 'Medium', minWidth: 1,    maxWidth: 3   },
  { id: 'thick',  label: 'Thick',  minWidth: 2,    maxWidth: 5   },
  { id: 'brush',  label: 'Brush',  minWidth: 3,    maxWidth: 8   },
];

const PRESET_COLORS = [
  { hex: '#000000', label: 'Black' },
  { hex: '#1D4ED8', label: 'Blue' },
  { hex: '#B91C1C', label: 'Red' },
];

const FONTS = [
  { name: 'Dancing Script', family: '"Dancing Script", cursive',  label: 'Classic' },
  { name: 'Great Vibes',    family: '"Great Vibes", cursive',     label: 'Elegant' },
  { name: 'Pacifico',       family: '"Pacifico", cursive',        label: 'Playful' },
  { name: 'Caveat',         family: '"Caveat", cursive',          label: 'Natural' },
];

export const SignatureCreator: React.FC<SignatureCreatorProps> = ({ onSave, standalone = false, initialTab }) => {
  const [activeTab, setActiveTab]         = useState(initialTab || 'type');
  const [typedName, setTypedName]         = useState('John Doe');
  const [selectedFont, setSelectedFont]   = useState('Dancing Script');
  const [penColor, setPenColor]           = useState('#000000');
  const [hexInput, setHexInput]           = useState('#000000');
  const [thickness, setThickness]         = useState('medium');
  const [uploadedSig, setUploadedSig]     = useState<string | null>(null);
  const [isDragOver, setIsDragOver]       = useState(false);
  const [settingsOpen, setSettingsOpen]   = useState(false);

  // Manual Sizing state
  const [customWidth, setCustomWidth]   = useState(300);
  const [customHeight, setCustomHeight] = useState(100);
  const [keepAspect, setKeepAspect]     = useState(true);
  const [aspectRatio, setAspectRatio]   = useState(3.0);

  // Ad Download Modal state
  const [showAdModal, setShowAdModal]             = useState(false);
  const [countdown, setCountdown]                 = useState(3);
  const [pendingDownloadUrl, setPendingDownloadUrl] = useState<string | null>(null);
  const [downloadFileName, setDownloadFileName]   = useState('');

  // Ad Blocker state
  const [isAdBlockerActive, setIsAdBlockerActive]   = useState(false);
  const [showBlockerModal, setShowBlockerModal]     = useState(false);

  const padRef       = useRef<SignaturePad | null>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const typeCanvasRef = useRef<HTMLCanvasElement>(null);

  const selectedThickness = THICKNESS_OPTIONS.find(t => t.id === thickness) || THICKNESS_OPTIONS[1];

  // ── Ad-blocker detection ──────────────────────────────
  useEffect(() => {
    fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
      method: 'HEAD', mode: 'no-cors', cache: 'no-store',
    }).catch(() => setIsAdBlockerActive(true));

    const bait = document.createElement('div');
    bait.className = 'pub_300x250 pub_300x250m pub_728x90 text-ad adLayout ad_text adRect adsbox ad-placement';
    bait.setAttribute('style', 'width:1px!important;height:1px!important;position:absolute!important;left:-9999px!important;top:-9999px!important;');
    document.body.appendChild(bait);
    const timer = setTimeout(() => {
      if (bait.offsetHeight === 0 || bait.offsetWidth === 0 ||
          window.getComputedStyle(bait).display === 'none' ||
          window.getComputedStyle(bait).visibility === 'hidden') {
        setIsAdBlockerActive(true);
      }
      document.body.removeChild(bait);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // ── Initialize / resize signature pad ───────────────
  useEffect(() => {
    if (activeTab !== 'draw' || !canvasRef.current) return;

    padRef.current = new SignaturePad(canvasRef.current, {
      penColor,
      minWidth: selectedThickness.minWidth,
      maxWidth: selectedThickness.maxWidth,
      backgroundColor: 'rgba(255,255,255,0)',
    });

    const resizeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ratio = Math.max(window.devicePixelRatio || 1, 1);
      canvas.width  = canvas.offsetWidth  * ratio;
      canvas.height = canvas.offsetHeight * ratio;
      canvas.getContext('2d')?.scale(ratio, ratio);
      padRef.current?.clear();
      const aspect = canvas.offsetWidth / canvas.offsetHeight;
      setAspectRatio(aspect);
      setCustomHeight(Math.round(customWidth / aspect));
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [activeTab]);

  // ── Sync pen color ───────────────────────────────────
  useEffect(() => {
    if (padRef.current) padRef.current.penColor = penColor;
  }, [penColor]);

  // ── Sync thickness ───────────────────────────────────
  useEffect(() => {
    if (!padRef.current) return;
    padRef.current.minWidth = selectedThickness.minWidth;
    padRef.current.maxWidth = selectedThickness.maxWidth;
  }, [thickness]);

  // ── Default sizing by tab ────────────────────────────
  useEffect(() => {
    if (activeTab === 'type') { setAspectRatio(3.0); setCustomWidth(300); setCustomHeight(100); }
    else if (activeTab === 'draw' && canvasRef.current) {
      const ratio = canvasRef.current.offsetWidth / canvasRef.current.offsetHeight || 2.0;
      setAspectRatio(ratio); setCustomWidth(300); setCustomHeight(Math.round(300 / ratio));
    } else if (activeTab === 'upload' && uploadedSig) {
      const img = new Image();
      img.onload = () => { const r = img.width / img.height; setAspectRatio(r); setCustomWidth(300); setCustomHeight(Math.round(300 / r)); };
      img.src = uploadedSig;
    }
  }, [activeTab, uploadedSig]);

  // ── Sizing helpers ───────────────────────────────────
  const handleWidthChange  = (val: number) => { setCustomWidth(val);  if (keepAspect) setCustomHeight(Math.round(val / aspectRatio)); };
  const handleHeightChange = (val: number) => { setCustomHeight(val); if (keepAspect) setCustomWidth(Math.round(val * aspectRatio)); };

  // ── Color helpers ────────────────────────────────────
  const handleColorSelect = (hex: string) => { setPenColor(hex); setHexInput(hex); };
  const handleHexChange   = (val: string) => {
    setHexInput(val);
    if (/^#[0-9A-Fa-f]{6}$/.test(val)) setPenColor(val);
  };

  // ── Canvas helpers ───────────────────────────────────
  const clearSignature = () => padRef.current?.clear();

  const generateTypedSignatureDataUrl = (w = 600, h = 200) => {
    const canvas = typeCanvasRef.current;
    if (!canvas) return null;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;
    canvas.width = w; canvas.height = h;
    ctx.clearRect(0, 0, w, h);
    const font = FONTS.find(f => f.name === selectedFont);
    const fontSize = Math.floor(h * 0.45);
    ctx.font = `${fontSize}px ${font?.family || 'cursive'}`;
    ctx.fillStyle = penColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(typedName || 'Sign Here', w / 2, h / 2);
    return canvas.toDataURL('image/png');
  };

  const resizeImage = (originalDataUrl: string, w: number, h: number): Promise<string> =>
    new Promise(resolve => {
      const img = new Image();
      img.onload = () => {
        const c = document.createElement('canvas');
        c.width = w; c.height = h;
        c.getContext('2d')?.drawImage(img, 0, 0, w, h);
        resolve(c.toDataURL('image/png'));
      };
      img.src = originalDataUrl;
    });

  // ── Download flow ────────────────────────────────────
  const triggerDownload = async () => {
    if (isAdBlockerActive) { setShowBlockerModal(true); return; }
    let dataUrl = '';
    if (activeTab === 'draw') {
      if (!padRef.current || padRef.current.isEmpty()) { alert('Please draw a signature first.'); return; }
      dataUrl = await resizeImage(padRef.current.toDataURL('image/png'), customWidth, customHeight);
    } else if (activeTab === 'type') {
      dataUrl = generateTypedSignatureDataUrl(customWidth, customHeight) || '';
      if (!dataUrl) return;
    } else if (activeTab === 'upload') {
      if (!uploadedSig) { alert('Please upload a signature first.'); return; }
      dataUrl = await resizeImage(uploadedSig, customWidth, customHeight);
    }
    if (dataUrl) {
      setPendingDownloadUrl(dataUrl);
      setDownloadFileName(`signature_${customWidth}x${customHeight}.png`);
      setCountdown(3);
      setShowAdModal(true);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showAdModal && countdown > 0) { timer = setTimeout(() => setCountdown(p => p - 1), 1000); }
    else if (showAdModal && countdown === 0) { startDownload(); }
    return () => clearTimeout(timer);
  }, [showAdModal, countdown]);

  const startDownload = () => {
    if (!pendingDownloadUrl) return;
    const a = document.createElement('a');
    a.href = pendingDownloadUrl; a.download = downloadFileName;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setShowAdModal(false); setPendingDownloadUrl(null);
  };

  const handleSave = () => {
    if (isAdBlockerActive) { setShowBlockerModal(true); return; }
    let dataUrl = '';
    if (activeTab === 'draw') {
      if (!padRef.current || padRef.current.isEmpty()) return;
      dataUrl = padRef.current.toDataURL('image/png');
    } else if (activeTab === 'type') {
      dataUrl = generateTypedSignatureDataUrl(600, 200) || '';
    } else if (activeTab === 'upload') {
      dataUrl = uploadedSig || '';
    }
    if (dataUrl && onSave) onSave(dataUrl);
  };

  // ── File upload + drag-and-drop ──────────────────────
  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = e => { if (e.target?.result) setUploadedSig(e.target.result as string); };
    reader.readAsDataURL(file);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); setIsDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) processFile(file);
  };

  const selectedFontObj = FONTS.find(f => f.name === selectedFont);

  return (
    <div className={`${styles.creator} ${standalone ? styles.standalone : ''}`}>
      {/* Google Fonts */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Dancing+Script:wght@400;700&family=Great+Vibes&family=Pacifico&display=swap');
      `}} />

      <Tabs
        tabs={[
          { id: 'type',   label: 'Type',   icon: <Type size={15} /> },
          { id: 'draw',   label: 'Draw',   icon: <PenTool size={15} /> },
          { id: 'upload', label: 'Upload', icon: <ImageIcon size={15} /> },
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
        fullWidth
      />

      <div className={styles.workspace}>

        {/* ── TYPE TAB ──────────────────────────────────── */}
        {activeTab === 'type' && (
          <div className={styles.typeWorkspace}>
            <Input
              value={typedName}
              onChange={e => setTypedName(e.target.value)}
              placeholder="Type your name…"
              className={styles.nameInput}
            />

            {/* Live preview */}
            <div className={styles.livePreview}>
              <span className={styles.livePreviewLabel}>Preview</span>
              <span
                className={styles.livePreviewText}
                style={{ fontFamily: selectedFontObj?.family, color: penColor }}
              >
                {typedName || 'Sign Here'}
              </span>
            </div>

            {/* Font grid */}
            <div className={styles.fontGrid}>
              {FONTS.map(font => (
                <div
                  key={font.name}
                  className={`${styles.fontCard} ${selectedFont === font.name ? styles.selectedFont : ''}`}
                  onClick={() => setSelectedFont(font.name)}
                  style={{ fontFamily: font.family, color: penColor }}
                  role="button"
                  aria-pressed={selectedFont === font.name}
                  aria-label={`Select ${font.name} font`}
                >
                  {typedName || 'Sign Here'}
                  <span className={styles.fontCardLabel}>{font.label}</span>
                </div>
              ))}
            </div>

            <canvas ref={typeCanvasRef} style={{ display: 'none' }} />
          </div>
        )}

        {/* ── DRAW TAB ──────────────────────────────────── */}
        {activeTab === 'draw' && (
          <div className={styles.drawWorkspace}>
            {/* Pen thickness toolbar */}
            <div className={styles.drawToolbar}>
              <div className={styles.thicknessGroup}>
                <span className={styles.thicknessLabel}>Pen</span>
                {THICKNESS_OPTIONS.map(t => (
                  <button
                    key={t.id}
                    className={`${styles.thicknessBtn} ${thickness === t.id ? styles.thicknessBtnActive : ''}`}
                    onClick={() => setThickness(t.id)}
                    aria-label={`${t.label} pen`}
                    title={t.label}
                  >
                    <span style={{
                      display: 'block',
                      width: `${Math.min(t.maxWidth * 3 + 6, 18)}px`,
                      height: `${Math.min(t.maxWidth * 3 + 6, 18)}px`,
                      borderRadius: '50%',
                      background: 'currentColor',
                    }} />
                  </button>
                ))}
              </div>

              <Button variant="ghost" size="sm" leftIcon={<Eraser size={15} />} onClick={clearSignature}>
                Clear
              </Button>
            </div>

            <div className={styles.canvasContainer}>
              <canvas ref={canvasRef} className={styles.canvas} />
              <div className={styles.canvasPlaceholder}>
                <PenTool size={20} strokeWidth={1.5} />
                Draw your signature
              </div>
              <div className={styles.canvasLine} />
            </div>
          </div>
        )}

        {/* ── UPLOAD TAB ────────────────────────────────── */}
        {activeTab === 'upload' && (
          <div className={styles.uploadWorkspace}>
            {uploadedSig ? (
              <div className={styles.uploadPreview}>
                <img src={uploadedSig} alt="Uploaded Signature" className={styles.sigPreviewImage} />
                <Button variant="ghost" size="sm" onClick={() => setUploadedSig(null)}>
                  Remove &amp; Upload Another
                </Button>
              </div>
            ) : (
              <div
                className={`${styles.uploadBox} ${isDragOver ? styles.uploadBoxDragOver : ''}`}
                onDragOver={e => { e.preventDefault(); setIsDragOver(true); }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={handleDrop}
                onClick={() => document.getElementById('sig-upload')?.click()}
                role="button"
                aria-label="Upload signature image"
              >
                <ImageIcon size={44} className={styles.uploadIcon} strokeWidth={1.5} />
                <p className={styles.uploadText}>
                  {isDragOver ? 'Drop it here!' : 'Drag & drop or click to upload'}
                </p>
                <p className={styles.uploadHint}>PNG, JPG, JPEG — Max 5 MB</p>
                <Button variant="outline" size="sm" onClick={e => { e.stopPropagation(); document.getElementById('sig-upload')?.click(); }}>
                  Browse Files
                </Button>
                <input
                  id="sig-upload"
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  style={{ display: 'none' }}
                  onChange={handleFileUpload}
                />
              </div>
            )}
          </div>
        )}

        {/* ── COLOR PICKER (Type + Draw tabs) ─────────── */}
        {activeTab !== 'upload' && (
          <div className={styles.colorSection}>
            <span className={styles.colorSectionLabel}>Color</span>
            <div className={styles.colorSwatches}>
              {PRESET_COLORS.map(c => (
                <button
                  key={c.hex}
                  className={`${styles.colorSwatch} ${penColor === c.hex ? styles.selectedSwatch : ''}`}
                  style={{ backgroundColor: c.hex }}
                  onClick={() => handleColorSelect(c.hex)}
                  aria-label={c.label}
                  title={c.label}
                />
              ))}

              {/* Native color picker */}
              <input
                type="color"
                className={styles.colorInput}
                value={penColor}
                onChange={e => handleColorSelect(e.target.value)}
                title="Custom color"
                aria-label="Custom color picker"
              />

              {/* Hex input */}
              <input
                type="text"
                className={styles.colorHexInput}
                value={hexInput}
                onChange={e => handleHexChange(e.target.value)}
                placeholder="#000000"
                maxLength={7}
                aria-label="Hex color code"
              />
            </div>
          </div>
        )}

        {/* ── DOWNLOAD SETTINGS (collapsible) ──────────── */}
        <div className={styles.downloadSettings}>
          <div className={styles.settingsHeader} onClick={() => setSettingsOpen(o => !o)} role="button" aria-expanded={settingsOpen}>
            <h4 className={styles.settingsTitle}>
              <Download size={14} />
              Download Options
            </h4>
            <ChevronDown
              size={16}
              className={`${styles.settingsChevron} ${settingsOpen ? styles.settingsChevronOpen : ''}`}
            />
          </div>

          {settingsOpen && (
            <div className={styles.settingsBody}>
              <div className={styles.settingsGrid}>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Width (px)</label>
                  <Input
                    type="number"
                    value={customWidth}
                    onChange={e => handleWidthChange(parseInt(e.target.value) || 0)}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel}>Height (px)</label>
                  <Input
                    type="number"
                    value={customHeight}
                    onChange={e => handleHeightChange(parseInt(e.target.value) || 0)}
                  />
                </div>
                <div className={styles.checkboxGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={keepAspect}
                      onChange={e => setKeepAspect(e.target.checked)}
                    />
                    Keep Aspect Ratio
                  </label>
                </div>
              </div>
              <div className={styles.downloadBtnContainer}>
                <Button
                  variant="outline"
                  leftIcon={<Download size={15} />}
                  onClick={triggerDownload}
                  fullWidth
                >
                  Download PNG (Transparent)
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <div className={styles.footer}>
        {standalone ? (
          <div className={styles.downloadActions}>
            <Button variant="primary" leftIcon={<Download size={16} />} onClick={triggerDownload}>
              Download PNG
            </Button>
          </div>
        ) : (
          <button className={styles.adoptBtn} onClick={handleSave}>
            <Check size={18} />
            Adopt Signature
          </button>
        )}
      </div>

      {/* ── AD DOWNLOAD MODAL ───────────────────────────── */}
      <Modal
        isOpen={showAdModal}
        onClose={() => { setShowAdModal(false); setPendingDownloadUrl(null); }}
        title="Preparing Your Download"
      >
        <div className={styles.adModalContent}>
          <p className={styles.adModalStatus}>
            {countdown > 0 ? (
              <span>Your download starts in <strong>{countdown}</strong>…</span>
            ) : (
              <span>Starting your download now…</span>
            )}
          </p>
          <div className={styles.adModalBanner}>
            <AdBanner slot="signature-download" format="rectangle" />
          </div>
          <div className={styles.adModalActions}>
            <Button variant="primary" onClick={startDownload} disabled={countdown > 0} fullWidth>
              {countdown > 0 ? `Loading… (${countdown}s)` : 'Download Now'}
            </Button>
          </div>
        </div>
      </Modal>

      {/* ── AD BLOCKER MODAL ────────────────────────────── */}
      {showBlockerModal && (
        <div className={styles.blockerModalOverlay}>
          <div className={styles.blockerModalCard}>
            <div className={styles.blockerAlertIcon}>⚠️</div>
            <h2>Ad Blocker Detected</h2>
            <p>
              Please disable your ad blocker (uBlock, AdBlock, AdGuard, Brave Shields, etc.)
              to generate, adopt, or download your signature.
            </p>
            <p className={styles.blockerSupportText}>
              This digital signature maker is 100% free with no limits — ads help us keep the lights on.
            </p>
            <button onClick={() => window.location.reload()} className={styles.blockerReloadBtn}>
              I&apos;ve disabled it — Reload Page
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
