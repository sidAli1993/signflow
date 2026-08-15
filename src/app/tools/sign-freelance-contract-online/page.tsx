import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Freelance Contract Online Free — Electronic Signature | MyDigitSign',
  description:
    'Sign freelance contracts, independent contractor agreements, and NDAs online for free. Upload your contract PDF, add your electronic signature, and download.',
  keywords: [
    'sign freelance contract online',
    'sign independent contractor agreement',
    'freelance contract electronic signature',
    'esign freelance agreement',
    'sign client contract online',
    'digital signature for freelancers',
    'freelance signature maker',
    'sign consulting agreement online',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
  },
  openGraph: {
    title: 'Sign Freelance Contract Online Free | MyDigitSign',
    description: 'Sign your freelance or consulting contracts online for free. 100% private.',
    url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Sign Freelance Contract' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Freelance Contract Online Free | MyDigitSign',
    description: 'Sign freelance contracts securely. 100% browser-based, files never leave your device.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Freelance Contract Online', url: '/tools/sign-freelance-contract-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Freelance Contract Online for Free',
  description: 'Sign freelance agreements or independent contractor contracts electronically in your browser.',
  url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full name, draw your signature, or upload a scan. Click Adopt to save.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
    {
      name: 'Upload Your Contract PDF',
      text: 'Drag and drop your freelance contract. Processed securely in your browser.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
    {
      name: 'Place Your Signature',
      text: 'Navigate to the signature block, drag your signature to the line, and resize.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
    {
      name: 'Download & Send',
      text: 'Click Download to save the signed contract. Email it back to your client to finalize the project terms.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Freelance Contract Signing Tool',
  description: 'Sign freelance and independent contractor agreements online for free.',
  url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignFreelanceContractOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Freelance Contract Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Contract Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Freelance Contracts <span className={styles.seoHeroGradient}>Free & Fast</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Locking in a new client project? Upload your <strong>freelance contract or independent contractor agreement</strong>, apply your electronic signature, and send it back to your client in seconds. Professional, legally binding, and completely free.
          </p>
        </div>
      </section>

      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script id="software-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Freelance Contract</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload the contract PDF."
      />
      
      <div style={{ marginTop: '3rem', padding: '1rem', maxWidth: '900px', margin: '3rem auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
            Why Freelancers Need to Sign Contracts
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            A signed freelance contract protects your scope of work, intellectual property, and payment terms. Under the ESIGN Act, an electronically signed contract is legally binding and enforceable in court, ensuring you get paid for your work.
          </p>
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools & guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-invoice-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Invoice Online →</a></li>
              <li><a href="/tools/sign-nda-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign NDA Online →</a></li>
              <li><a href="/blog/digital-signature-for-freelancers" style={{ color: 'var(--color-primary, #4f46e5)' }}>Freelancer Signature Guide →</a></li>
            </ul>
          </div>
      </div>
      <Footer />
    </div>
  );
}
