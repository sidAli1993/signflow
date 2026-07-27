import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { AdBanner } from '@/components/ui';
import styles from '../static-page.module.css';
import { Shield, Zap, Lock, HardDrive, FileCheck, ServerOff } from 'lucide-react';

export const metadata: Metadata = {
  title: "Features & How It Works — 100% Client-Side PDF Signer | MyDigitSign",
  description: "Learn how MyDigitSign works entirely in your browser with zero server uploads. 100% private, free, and secure client-side electronic signature tool.",
  keywords: [
    "how to sign a pdf online free",
    "client-side pdf signer",
    "private pdf editor",
    "no upload pdf sign",
    "sign pdf step by step",
    "sign document online free privacy",
    "electronic signature no account",
    "pdf signature free"
  ],
  alternates: {
    canonical: "https://mydigitsign.com/how-it-works",
  },
  openGraph: {
    title: "Features & How It Works — 100% Client-Side PDF Signer | MyDigitSign",
    description: "Learn how MyDigitSign works entirely in your browser with zero server uploads. 100% private, free, and secure client-side electronic signature tool.",
    url: "https://mydigitsign.com/how-it-works",
  },
};

// JSON-LD HowTo Schema
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Create a Free Digital Signature and Sign a PDF",
  "description": "Step-by-step guide to drawing or typing your signature and placing it securely on a PDF or image document.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Design Your Signature",
      "text": "Choose to type your name in elegant script, draw it freehand with your mouse or touchscreen, or upload a pre-made image file.",
      "url": "https://mydigitsign.com/how-it-works"
    },
    {
      "@type": "HowToStep",
      "name": "Upload Your Document",
      "text": "Drag and drop your PDF or image document (PNG, JPG, JPEG) up to 10MB into the secure upload area.",
      "url": "https://mydigitsign.com/how-it-works"
    },
    {
      "@type": "HowToStep",
      "name": "Drag, Resize, and Download",
      "text": "Drag the signature outline onto your document, use the bottom-right handle to resize it, and download your finished signed PDF.",
      "url": "https://mydigitsign.com/how-it-works"
    }
  ]
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://mydigitsign.com' },
    { '@type': 'ListItem', 'position': 2, 'name': 'How It Works', 'item': 'https://mydigitsign.com/how-it-works' },
  ],
};

export default function HowItWorks() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
          <div className={styles.header}>
            <h1 className={styles.title}>100% Private, Client-Side PDF Signing</h1>
            <p className={styles.subtitle}>MyDigitSign is a completely browser-based, secure digit sign utility. We never upload your sensitive documents to any server.</p>
          </div>

          <div className={styles.articleCard}>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text)', fontWeight: 500, marginBottom: '1rem' }}>
              Traditional e-signing platforms require you to upload private files to their servers, create accounts, and pay monthly subscriptions. MyDigitSign fundamentally changes this by bringing the signing engine directly to your web browser.
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <ServerOff className={styles.featureIcon} size={24} />
                <h3 className={styles.featureTitle} style={{ marginTop: 0 }}>Zero Server Uploads</h3>
                <p className={styles.featureDesc}>Your PDF documents are never transmitted over the internet. All processing happens locally in your device's memory.</p>
              </div>
              <div className={styles.featureCard}>
                <Lock className={styles.featureIcon} size={24} />
                <h3 className={styles.featureTitle} style={{ marginTop: 0 }}>Absolute Privacy</h3>
                <p className={styles.featureDesc}>Because we never see your files, your sensitive contracts, NDAs, and medical documents remain completely confidential.</p>
              </div>
              <div className={styles.featureCard}>
                <Zap className={styles.featureIcon} size={24} />
                <h3 className={styles.featureTitle} style={{ marginTop: 0 }}>Instant Processing</h3>
                <p className={styles.featureDesc}>No waiting for files to upload or download. The client-side engine renders and signs documents instantly.</p>
              </div>
              <div className={styles.featureCard}>
                <Shield className={styles.featureIcon} size={24} />
                <h3 className={styles.featureTitle} style={{ marginTop: 0 }}>Legally Binding</h3>
                <p className={styles.featureDesc}>Signatures created here comply with the ESIGN Act (US) and eIDAS (EU) for legally enforceable agreements.</p>
              </div>
            </div>

            <h2 style={{ marginTop: '2.5rem' }}>How It Works Under the Hood</h2>
            <p>MyDigitSign leverages modern, open-source web technologies to process everything directly in your browser:</p>
            <ul>
              <li><strong>Local File Reading:</strong> HTML5 File API reads your document directly into your browser's RAM.</li>
              <li><strong>PDF Rendering:</strong> <code>pdfjs-dist</code> (Mozilla's PDF.js) renders the PDF binary onto HTML5 Canvas elements.</li>
              <li><strong>In-Browser Merging:</strong> <code>pdf-lib</code> embeds your signature image pixels into the PDF structure at the exact coordinates you choose.</li>
              <li><strong>Local Download:</strong> The finalized PDF is saved directly to your hard drive or mobile storage without ever touching a network socket.</li>
            </ul>

            <div style={{ background: 'var(--color-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--color-border)', marginTop: '2rem' }}>
              <h2 style={{ marginTop: 0, borderBottom: 'none', paddingBottom: 0 }}>Step-by-Step Guide: How to Sign</h2>
              <ol style={{ paddingLeft: '1.25rem' }}>
                <li><strong>Create Your Signature:</strong> Type your name in a cursive font, draw it freehand with your mouse/touchscreen, or upload a photo of your signature.</li>
                <li><strong>Select Your Document:</strong> Drag and drop your PDF. It is loaded instantly into your browser tab.</li>
                <li><strong>Place &amp; Download:</strong> Drag your signature to the correct line, resize it using the corner handle, and click Download to save the signed file to your device.</li>
              </ol>
            </div>

            <h2>Frequently Asked Questions</h2>

            <h3>Do I need to create an account to use MyDigitSign?</h3>
            <p>No. MyDigitSign has no accounts, no registration, and no login. Open the website and start signing immediately — completely anonymously.</p>

            <h3>Can I sign PDFs on my phone or tablet?</h3>
            <p>Yes. The tool is fully responsive and optimized for touch. Open it in any mobile browser (Safari on iPhone, Chrome on Android) and sign with your finger. Full guide: <a href="/blog/how-to-sign-pdf-on-iphone-android-free">How to Sign a PDF on iPhone & Android →</a></p>

            <h3>Is there a limit on how many documents I can sign?</h3>
            <p>No. Sign as many documents as you need, as many times as you want, completely free with no daily or monthly limits.</p>

            <h3>What if I need a cryptographic certificate for my signature?</h3>
            <p>MyDigitSign supports certificate-based signing too. You can upload a <code>.pfx</code> or <code>.p12</code> certificate file and sign PDFs with cryptographic proof of integrity — all client-side. Learn how to create one free: <a href="/blog/free-digital-signature-certificate">Free Digital Signature Certificate Guide →</a></p>

          </div>

          <AdBanner slot="how-it-works-bottom" format="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
