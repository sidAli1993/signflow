import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { AdBanner } from '@/components/ui';
import { Edit3, FileCode, Sliders, Moon, Share2, ShieldCheck, Zap, Globe, Lock, CheckCircle } from 'lucide-react';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: "MyDigitSign Features — Free PDF Signer & Digital Signature Tool",
  description: "Explore all features of MyDigitSign: draw or type signatures, sign PDFs and images client-side, drag-to-place, resize, certificate signing, dark mode, and more. 100% free, no account needed.",
  keywords: [
    "pdf signer features",
    "draw signature online",
    "type signature in cursive",
    "upload signature image",
    "sign pdf no upload",
    "client-side pdf signing",
    "free e-signature tool features",
    "drag signature on pdf",
    "pdf editor signature",
    "sign document for free",
    "edit and sign pdf",
    "e signature pdf online",
    "digital signature tool",
    "sign a document online",
  ],
  alternates: {
    canonical: "https://mydigitsign.com/features",
  },
  openGraph: {
    title: "MyDigitSign Features — Free PDF Signer & Digital Signature Tool",
    description: "Explore all features of MyDigitSign: draw or type signatures, sign PDFs and images client-side, drag-to-place, resize, certificate signing, dark mode, and more. 100% free, no account needed.",
    url: "https://mydigitsign.com/features",
    siteName: "MyDigitSign",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "MyDigitSign Features — Free PDF Signer" }],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://mydigitsign.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'Features', 'item': 'https://mydigitsign.com/features' },
  ],
};

export default function Features() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>MyDigitSign Features</h1>
            <p className={styles.subtitle}>
              Everything you need to <strong>sign PDFs and documents online</strong> — free, private, and directly in your browser. No uploads to any server. No account required. No hidden fees.
            </p>
          </div>

          <div className={styles.articleCard}>

            {/* ── Core Feature Grid ────────────────────────────────────────── */}
            <h2 style={{ marginBottom: '8px' }}>Core Features</h2>
            <p style={{ marginBottom: '24px' }}>
              MyDigitSign is a comprehensive, client-side electronic signature utility. Every feature below runs entirely in your browser — your documents never leave your device.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <Edit3 className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>3 Signature Creation Modes</span>
                <span className={styles.featureDesc}>
                  <strong>Draw</strong> your signature freehand with your mouse, trackpad, or touchscreen. <strong>Type</strong> your name and choose from beautiful cursive script fonts (Dancing Script, Pacifico, Great Vibes, Caveat). <strong>Upload</strong> an existing PNG or JPG image of your handwritten signature. All three modes output high-resolution transparent PNGs.
                </span>
              </div>

              <div className={styles.featureCard}>
                <FileCode className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>PDF & Image Document Signing</span>
                <span className={styles.featureDesc}>
                  Supports standard PDF documents and image files (PNG, JPG, JPEG) up to 10MB. Upload, preview every page in high resolution, and place your signature on any page of any document. The tool uses <code>pdfjs-dist</code> for rendering and <code>pdf-lib</code> for merging — all locally in browser memory.
                </span>
              </div>

              <div className={styles.featureCard}>
                <Sliders className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>Interactive Drag-and-Place Overlay</span>
                <span className={styles.featureDesc}>
                  Drag your signature overlay across any area of the document page. Use the bottom-right corner drag handle to resize it proportionally. Navigate between pages with intuitive page controls. Your signature stays precisely where you placed it on every page.
                </span>
              </div>

              <div className={styles.featureCard}>
                <ShieldCheck className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>Certificate-Based Digital Signing (.pfx / .p12)</span>
                <span className={styles.featureDesc}>
                  For documents requiring cryptographic proof of integrity, upload your own <code>.pfx</code> or <code>.p12</code> digital certificate. MyDigitSign embeds a cryptographic signature into the PDF structure entirely in-browser — providing tamper-evident, legally verifiable signed documents. Free guide: <a href="/blog/free-digital-signature-certificate">How to get a free certificate →</a>
                </span>
              </div>

              <div className={styles.featureCard}>
                <Moon className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>Light & Dark Theme</span>
                <span className={styles.featureDesc}>
                  Seamlessly toggle between a premium dark-mode interface and a clean, high-contrast light theme with a single click. The preference is saved locally via localStorage and automatically matches your system's prefers-color-scheme setting on first visit.
                </span>
              </div>

              <div className={styles.featureCard}>
                <Share2 className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>Instant Native Sharing</span>
                <span className={styles.featureDesc}>
                  After signing, share your document directly via your operating system's native Web Share API — send it to WhatsApp, Slack, Mail, Messages, or any other app on your phone or desktop without leaving the page. No manual file management required.
                </span>
              </div>

              <div className={styles.featureCard}>
                <Lock className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>100% Client-Side Execution</span>
                <span className={styles.featureDesc}>
                  This is the most important feature. Your PDF, your signature, and your personal data never touch our servers. Ever. All processing happens in your browser's memory using local JavaScript APIs. When you close the tab, everything clears. Zero data retention, zero server logs, zero privacy risk.
                </span>
              </div>

              <div className={styles.featureCard}>
                <Globe className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>Fully Mobile Responsive</span>
                <span className={styles.featureDesc}>
                  Sign documents on any device — iPhone, iPad, Android phone, or tablet. The drawing canvas responds to touch gestures, the signature overlay is draggable via touch, and the interface adapts to every screen size. No app download needed — it works right in your mobile browser. Full guide: <a href="/blog/how-to-sign-pdf-on-iphone-android-free">Sign PDF on iPhone & Android →</a>
                </span>
              </div>

              <div className={styles.featureCard}>
                <Zap className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>Instant Download — No Waiting</span>
                <span className={styles.featureDesc}>
                  Because everything runs locally, there's no upload time and no server processing queue. Click Download and your signed PDF saves to your device immediately — typically in under 1 second regardless of your internet speed.
                </span>
              </div>
            </div>

            {/* ── Dedicated Tool Pages ──────────────────────────────────── */}
            <h2 style={{ margin: '40px 0 16px' }}>Dedicated Signature Tools</h2>
            <p>Need a specific workflow? We have dedicated, optimized pages for each signature method:</p>
            <ul style={{ lineHeight: '2', marginTop: '12px' }}>
              <li>
                <a href="/tools/draw-signature-online"><strong>Draw Signature Online →</strong></a>
                — Freehand signature canvas optimized for mouse and touchscreen drawing.
              </li>
              <li>
                <a href="/tools/type-signature-online"><strong>Type Signature Online →</strong></a>
                — Generate a professional cursive signature from your typed name in seconds.
              </li>
              <li>
                <a href="/tools/sign-image-online"><strong>Sign Image Online →</strong></a>
                — Upload a photo or scan of your handwritten signature and use it on documents.
              </li>
            </ul>

            {/* ── Comparison Table ─────────────────────────────────────────── */}
            <h2 style={{ margin: '40px 0 16px' }}>Why Choose MyDigitSign?</h2>
            <p style={{ marginBottom: '16px' }}>
              Unlike DocuSign, Adobe Acrobat Sign, SmallPDF, or ILovePDF — MyDigitSign processes everything <strong>100% inside your browser</strong>. There are no servers, no cloud storage, no subscriptions, and no account creation required.
            </p>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '24px' }}>
                <thead>
                  <tr style={{ background: 'rgba(0,0,0,0.05)' }}>
                    <th style={{ padding: '12px', textAlign: 'left', border: '1px solid rgba(0,0,0,0.1)' }}>Feature</th>
                    <th style={{ padding: '12px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.1)' }}>MyDigitSign</th>
                    <th style={{ padding: '12px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.1)' }}>DocuSign</th>
                    <th style={{ padding: '12px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.1)' }}>SmallPDF</th>
                    <th style={{ padding: '12px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.1)' }}>Adobe Sign</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Completely Free', '✅ Always', '❌ From $15/mo', '⚠️ 2 tasks/day', '❌ From $13/mo'],
                    ['No file uploads to server', '✅ 100% local', '❌ Cloud stored', '❌ Server upload', '❌ Cloud stored'],
                    ['No account required', '✅ Yes', '❌ Required', '⚠️ Optional', '❌ Required'],
                    ['Watermark-free downloads', '✅ Always', '✅ Paid only', '❌ Free adds watermark', '✅ Paid only'],
                    ['Certificate signing (.pfx)', '✅ Yes', '✅ Paid', '❌ No', '✅ Paid'],
                    ['Works on mobile browser', '✅ Yes', '✅ App needed', '✅ Yes', '✅ App needed'],
                    ['Draw signature by hand', '✅ Yes', '✅ Yes', '✅ Yes', '✅ Yes'],
                    ['GDPR/privacy safe', '✅ 100%', '⚠️ Cloud data', '⚠️ Cloud data', '⚠️ Cloud data'],
                  ].map(([feature, ...cols], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.02)' }}>
                      <td style={{ padding: '10px', border: '1px solid rgba(0,0,0,0.1)', fontWeight: 500 }}>{feature}</td>
                      {cols.map((val, j) => (
                        <td key={j} style={{ padding: '10px', textAlign: 'center', border: '1px solid rgba(0,0,0,0.1)' }}>{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ── Use Cases ────────────────────────────────────────────────── */}
            <h2 style={{ margin: '40px 0 16px' }}>Who Uses MyDigitSign?</h2>
            <p style={{ marginBottom: '16px' }}>MyDigitSign is built for anyone who needs to sign documents quickly and privately:</p>
            <ul style={{ lineHeight: '2.2' }}>
              <li><CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: '#22c55e' }} /><strong>Freelancers:</strong> Sign client contracts, NDAs, and service agreements without a monthly subscription.</li>
              <li><CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: '#22c55e' }} /><strong>Remote workers:</strong> Sign employment agreements, onboarding forms, and HR documents from anywhere.</li>
              <li><CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: '#22c55e' }} /><strong>Tenants & landlords:</strong> Sign lease agreements and rental documents without printing.</li>
              <li><CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: '#22c55e' }} /><strong>Small business owners:</strong> Sign vendor contracts, invoices, and partnership agreements quickly.</li>
              <li><CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: '#22c55e' }} /><strong>Students:</strong> Sign consent forms, scholarship agreements, and school documents.</li>
              <li><CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: '#22c55e' }} /><strong>Healthcare patients:</strong> Sign consent forms privately without uploading medical documents to third-party servers.</li>
              <li><CheckCircle size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px', color: '#22c55e' }} /><strong>Developers & IT teams:</strong> Sign internal documents and test certificate-based signing workflows.</li>
            </ul>

            {/* ── FAQ ──────────────────────────────────────────────────────── */}
            <h2 style={{ margin: '40px 0 16px' }}>Frequently Asked Questions</h2>

            <h3>Is MyDigitSign really 100% free?</h3>
            <p>Yes. There are no subscription plans, no per-document fees, no watermarks, and no paywalls. MyDigitSign is, and will remain, completely free for all users. We support the service through non-intrusive display advertising.</p>

            <h3>Why doesn't MyDigitSign require an account?</h3>
            <p>Because you don't need one. Since all processing happens locally in your browser, there's no data to store on our servers and no reason to create a user profile. Open the site, sign your document, download it — done.</p>

            <h3>How is this different from DocuSign or Adobe Sign?</h3>
            <p>DocuSign and Adobe Sign are enterprise-grade platforms that upload your documents to their cloud servers, require accounts, and charge monthly subscriptions. MyDigitSign is a privacy-first, client-side alternative that processes everything locally in your browser at no cost. It's ideal for individuals and small businesses who need simple, secure, free signing without cloud dependencies.</p>

            <h3>Is MyDigitSign legally binding?</h3>
            <p>Yes. Electronic signatures created with MyDigitSign are legally binding under the ESIGN Act (USA), UETA, eIDAS (EU), and equivalent laws in 180+ countries for most commercial and personal agreements. Read the full breakdown: <a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding? →</a></p>

            <h3>What browsers does MyDigitSign support?</h3>
            <p>MyDigitSign works in all modern browsers — Chrome, Firefox, Safari, Edge, and Brave — on both desktop and mobile. It requires JavaScript and HTML5 Canvas support, which all modern browsers provide by default.</p>

            <h3>Can I sign multiple documents in one session?</h3>
            <p>Yes. You can sign as many documents as you need in a single browser session. Simply upload a new document after downloading your signed PDF and repeat the process. There are no daily limits.</p>

          </div>

          <AdBanner slot="features-bottom" format="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
