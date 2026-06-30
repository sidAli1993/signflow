'use client';

import React from 'react';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { AdBanner } from '@/components/ui';
import styles from '../static-page.module.css';

export default function HowItWorks() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <main className={styles.mainContent}>
        <div className={styles.container}>
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
