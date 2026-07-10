import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sign Image Online Free — Sign PNG & JPG Files | MyDigitSign',
  description:
    'Edit and sign images online for free. Upload any PNG, JPG, or JPEG file locally in your browser, overlay your signature, and download.',
  keywords: [
    'sign png online',
    'sign image online',
    'sign jpg online',
    'signature on photo online',
    'sign jpeg free',
    'insert signature in png',
    'online image signer'
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-image-online',
  },
  openGraph: {
    title: 'Sign Image Online Free — Sign PNG & JPG Files | MyDigitSign',
    description:
      'Edit and sign images online for free. Upload any PNG, JPG, or JPEG file locally in your browser, overlay your signature, and download.',
    url: 'https://mydigitsign.com/tools/sign-image-online',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Sign Image Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Image Online Free — Sign PNG & JPG Files | MyDigitSign',
    description:
      'Edit and sign images online for free. Upload any PNG, JPG, or JPEG file locally in your browser, overlay your signature, and download.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://mydigitsign.com',
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Sign Image Online',
      'item': 'https://mydigitsign.com/tools/sign-image-online',
    },
  ],
};

export default function SignImageTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Image Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Image Signer · PNG &amp; JPG Support · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Image Online <span className={styles.seoHeroGradient}>Free PNG &amp; JPG Signer</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>sign png online</strong> or place an electronic signature overlay on a JPG photo? Our browser-based image editor allows you to place signature overlays, resize them, and drag them to the perfect spot. Your photos are processed completely locally — they are never uploaded to any server.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Local Image Processing</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Zero Server Uploads</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>Supports PNG, JPG, JPEG</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Transparent Signature Placement</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Watermarks</span></li>
          </ul>
        </div>
      </section>

      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <HomeClient 
        initialTab="type" 
        titleOverride="Sign Your <span>Image Document</span>" 
        descriptionOverride="Create or adopt your digital signature. Once adopted, you can upload the PNG or JPG image document you need to sign."
      />

      <section className={styles.seoExplainer} aria-label="How to sign png online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign a PNG or JPG Image Online
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>
                Type your name in script cursive, draw freehand with your mouse, or upload your physical signature image. Click adopt to save.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Image Document</h3>
              <p>
                Drag and drop your PNG, JPG, or JPEG file directly into the local browser uploader.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Overlay &amp; Download</h3>
              <p>
                Place the signature overlay on the target line, resize it as needed, and download the finished signed image.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
