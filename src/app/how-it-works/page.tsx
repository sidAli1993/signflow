import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { AdBanner } from '@/components/ui';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: "How to Sign a PDF Online Free — Step by Step Guide",
  description: "Learn how to sign a PDF online for free with MyDigitSign in 3 steps: draw or type your signature, upload your document, place and download. No account needed.",
  keywords: [
    "how to sign a pdf online free",
    "how to draw signature online",
    "sign pdf step by step",
    "how to use pdf signer",
    "sign document online tutorial",
    "pdf signing guide",
    "how to add signature to pdf free",
    "pdf signature free",
    "digit sign",
    "sign a document online",
    "online pdf editor signature",
    "pdf signer online",
    "sign digitally online"
  ],
  alternates: {
    canonical: "https://mydigitsign.com/how-it-works",
  },
  openGraph: {
    title: "How to Sign a PDF Online Free — Step by Step Guide",
    description: "Learn how to sign a PDF online for free with MyDigitSign in 3 steps: draw or type your signature, upload your document, place and download. No account needed.",
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
            <h1 className={styles.title}>How to Sign a PDF Online Free: Step-by-Step Guide</h1>
            <p className={styles.subtitle}>MyDigitSign is a completely browser-based, secure digit sign and online PDF editor signature utility.</p>
          </div>

          <div className={styles.articleCard}>
            <p>
              Traditional e-signing platforms require you to upload private files to their servers, create accounts, and pay monthly subscriptions. MyDigitSign works differently — giving you a way to get a <strong>pdf signature free</strong> and <strong>sign a document online</strong> without sacrificing privacy. Everything runs 100% inside your browser.
            </p>

            <h2>Step 1: Create Your Signature (3 Methods)</h2>
            <p>Choose the method that works best for you:</p>
            <ul>
              <li><strong>Type:</strong> Enter your name and choose from beautiful cursive script fonts — Dancing Script, Pacifico, Great Vibes, or Caveat. Fast, clean, and consistent every time. <a href="/tools/type-signature-online">Try the Type Signature Tool →</a></li>
              <li><strong>Draw:</strong> Draw your signature freehand directly on screen using your mouse, trackpad, or finger on a touchscreen. Adjust pen color (Black, Blue, Red) and clear the canvas to redo. <a href="/tools/draw-signature-online">Try the Draw Signature Tool →</a></li>
              <li><strong>Upload:</strong> Have a scan or photo of your handwritten signature? Upload a PNG or JPG image and use it directly as your signature overlay. <a href="/tools/sign-image-online">Try the Sign Image Tool →</a></li>
            </ul>
            <p>All three methods output a high-resolution transparent PNG of your signature, ready to be placed on any document.</p>

            <h2>Step 2: Upload Your PDF or Image Document</h2>
            <p>Select your document using one of these methods:</p>
            <ul>
              <li>Drag and drop a PDF file or image (PNG, JPG, JPEG — up to 10MB) directly onto the upload area.</li>
              <li>Click the upload area to open your file browser and select a document manually.</li>
              <li>On mobile, tap the upload area to access your camera roll, Downloads folder, or cloud storage (iCloud, Google Drive).</li>
            </ul>
            <p><strong>Privacy note:</strong> Your file is read by your browser locally. It is never sent to any server. The moment you close the tab, the data clears entirely.</p>

            <h2>Step 3: Place, Resize & Download</h2>
            <p>Assemble your signed document precisely:</p>
            <ul>
              <li>Drag the signature overlay to position it exactly on the signing line of your document.</li>
              <li>Use the bottom-right drag handle to resize the signature proportionally — make it smaller for tight signature fields or larger for prominent placement.</li>
              <li>Navigate between pages using the page controls if your document has multiple pages requiring signatures.</li>
              <li>Click <strong>Download Signed</strong> to save the final PDF to your device, or use the <strong>Share</strong> button to send it directly via your OS's native sharing sheet (Mail, WhatsApp, Slack, etc.).</li>
            </ul>

            <h2>How It Works Under the Hood</h2>
            <p>MyDigitSign uses modern, trusted open-source browser libraries:</p>
            <ul>
              <li><strong>PDF Rendering:</strong> <code>pdfjs-dist</code> (Mozilla's PDF.js) reads the PDF binary and renders each page onto HTML5 Canvas elements in your browser — the same engine Firefox uses to display PDFs.</li>
              <li><strong>PDF Merging:</strong> <code>pdf-lib</code> embeds your signature image pixels into the actual PDF page structure at the correct coordinates — entirely in browser memory. The resulting file is a standard PDF that any PDF viewer can open.</li>
              <li><strong>Image Signing:</strong> For PNG/JPG documents, HTML5 Canvas contexts composite your signature onto the image and export the merged result as a downloadable PNG.</li>
              <li><strong>Certificate Signing:</strong> For <code>.pfx</code>/<code>.p12</code> certificates, cryptographic signing is performed client-side using the Web Crypto API — sealing the PDF with a tamper-evident digital signature.</li>
            </ul>

            <h2>Use Cases: When to Use MyDigitSign</h2>
            <ul>
              <li>✅ Signing freelance contracts and service agreements</li>
              <li>✅ Signing lease agreements and rental documents</li>
              <li>✅ Employment NDAs and onboarding forms</li>
              <li>✅ Sales agreements and vendor contracts</li>
              <li>✅ Medical consent forms and health documents</li>
              <li>✅ School enrollment and scholarship forms</li>
              <li>✅ Any document where you need to <a href="/">sign a document online free</a></li>
            </ul>

            <h2>Is the Signature Legally Binding?</h2>
            <p>
              Yes. Electronic signatures created with MyDigitSign are legally valid under the <strong>ESIGN Act</strong> (USA), <strong>UETA</strong>, and <strong>eIDAS</strong> (EU) for most commercial, personal, and financial agreements. Read the complete legal guide: <a href="/blog/are-electronic-signatures-legally-binding">Are Electronic Signatures Legally Binding & Acceptable? →</a>
            </p>

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
