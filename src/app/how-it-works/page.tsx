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
    "how to add signature to pdf free"
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
            <h1 className={styles.title}>How It Works</h1>
            <p className={styles.subtitle}>MyDigitSign is a completely browser-based signing utility.</p>
          </div>

          <div className={styles.articleCard}>
            <p>
              Traditional e-signing websites require you to upload private files to their servers, make accounts, and pay monthly subscriptions. MyDigitSign works differently:
            </p>

            <h2>Step 1: Design Your Signature</h2>
            <p>
              Choose how you want to create your signature:
            </p>
            <ul>
              <li><strong>Type:</strong> Enter your name and choose from elegant cursives.</li>
              <li><strong>Draw:</strong> Draw your signature directly on screen using your mouse or touch screen.</li>
              <li><strong>Upload:</strong> Upload an image of your signature (e.g. PNG with transparent background).</li>
            </ul>

            <h2>Step 2: Upload Your Document</h2>
            <p>
              Select your document:
            </p>
            <ul>
              <li>Drag and drop a PDF file or Image (PNG, JPG) onto the upload box.</li>
              <li>Wait a moment as our app reads the file data locally.</li>
            </ul>

            <h2>Step 3: Drag, Resize & Merge</h2>
            <p>
              Assemble your signed document:
            </p>
            <ul>
              <li>Drag the signature outline to place it precisely where you need it on the page.</li>
              <li>Use the bottom-right drag handle to resize the signature to match the document lines.</li>
              <li>Navigate pages using the page controls.</li>
              <li>Click <strong>Download Signed</strong> or <strong>Share</strong> to trigger file compilations.</li>
            </ul>

            <h2>Under the Hood: How We Do It</h2>
            <p>
              We leverage modern browser APIs and Javascript compiling:
            </p>
            <ul>
              <li><strong>PDF Rendering:</strong> We read the PDF binary and draw the page layouts onto canvas contexts dynamically using <code>pdfjs-dist</code>.</li>
              <li><strong>PDF Merging:</strong> When downloading, <code>pdf-lib</code> compiles the signature pixels into the actual PDF pages at matching coordinates locally in browser memory.</li>
              <li><strong>Image Merging:</strong> Images are merged instantly using HTML5 Canvas contexts and exported to PNG data sheets.</li>
            </ul>
          </div>

          <AdBanner slot="how-it-works-bottom" format="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
