import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { AdBanner } from '@/components/ui';
import { Edit3, FileCode, Sliders, Moon, Share2, ShieldCheck } from 'lucide-react';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: "Tool Features — Free PDF Signer & Digital Signature Maker",
  description: "Explore all features of MyDigitSign: draw or type signatures, sign PDFs and images, drag-to-place, resize, download instantly. 100% free, no account needed.",
  keywords: [
    "pdf signer features",
    "draw signature online",
    "type signature in cursive",
    "upload signature image",
    "sign pdf no upload",
    "client-side pdf signing",
    "free e-signature tool features",
    "drag signature on pdf"
  ],
  alternates: {
    canonical: "https://mydigitsign.com/features",
  },
  openGraph: {
    title: "Tool Features — Free PDF Signer & Digital Signature Maker",
    description: "Explore all features of MyDigitSign: draw or type signatures, sign PDFs and images, drag-to-place, resize, download instantly. 100% free, no account needed.",
    url: "https://mydigitsign.com/features",
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
            <h1 className={styles.title}>Application Features</h1>
            <p className={styles.subtitle}>MyDigitSign is a comprehensive, client-side electronic signature utility.</p>
          </div>

          <div className={styles.articleCard}>
            <p>
              We designed MyDigitSign to make document signing as fast and painless as possible. Explore our core features below:
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <Edit3 className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>3 Signature Modes</span>
                <span className={styles.featureDesc}>
                  Type your name to generate beautiful script font signatures, draw custom strokes with your mouse/touch pad, or upload existing signature images.
                </span>
              </div>

              <div className={styles.featureCard}>
                <FileCode className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>PDF & Image Signing</span>
                <span className={styles.featureDesc}>
                  Supports standard PDF documents and image files (PNG, JPG, JPEG). Upload, preview, and sign any document format in seconds.
                </span>
              </div>

              <div className={styles.featureCard}>
                <Sliders className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>Interactive Layout Overlay</span>
                <span className={styles.featureDesc}>
                  Drag signature overlays across pages, resize drawing outlines with drag handles, and customize pen colors (Black, Blue, Red).
                </span>
              </div>

              <div className={styles.featureCard}>
                <Moon className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>Light & Dark Theme</span>
                <span className={styles.featureDesc}>
                  Seamlessly toggle between a premium dark-mode display and a clean, high-contrast white/blue light theme. Automatically matches system presets.
                </span>
              </div>

              <div className={styles.featureCard}>
                <Share2 className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>Instant Native Sharing</span>
                <span className={styles.featureDesc}>
                  Integrates with standard OS Web Share sheets. Share signed documents directly to WhatsApp, Slack, Mail, or messages on mobile and desktop.
                </span>
              </div>

              <div className={styles.featureCard}>
                <ShieldCheck className={styles.featureIcon} size={24} />
                <span className={styles.featureTitle}>Client-Side Execution</span>
                <span className={styles.featureDesc}>
                  We run strictly inside browser memory. Your confidential files never touch our servers, protecting your document data and privacy.
                </span>
              </div>
            </div>
          </div>

          <AdBanner slot="features-bottom" format="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
