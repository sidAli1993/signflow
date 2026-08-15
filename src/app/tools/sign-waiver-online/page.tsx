import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Waiver Online Free — Electronic Signature for Waivers | MyDigitSign',
  description:
    'Sign any waiver or liability release form online for free. Upload your waiver PDF, add your electronic signature, and download instantly. 100% browser-based — your waiver never leaves your device.',
  keywords: [
    'sign waiver online',
    'sign waiver online free',
    'electronic signature waiver',
    'esign liability waiver',
    'sign release form online',
    'digital signature waiver',
    'sign liability release online',
    'sign waiver pdf free',
    'waiver electronic signature',
    'sign liability waiver free',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-waiver-online',
  },
  openGraph: {
    title: 'Sign Waiver Online Free — Electronic Signature for Waivers | MyDigitSign',
    description: 'Sign any liability waiver or release form online for free. 100% private — your waiver never leaves your browser.',
    url: 'https://mydigitsign.com/tools/sign-waiver-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Sign Waiver Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Waiver Online Free — No Account | MyDigitSign',
    description: 'Sign any liability waiver online for free. 100% browser-based, files never leave your device.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Waiver Online', url: '/tools/sign-waiver-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Waiver Online for Free',
  description: 'Sign any liability waiver or release form electronically in your browser. No account needed, no files uploaded.',
  url: 'https://mydigitsign.com/tools/sign-waiver-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full legal name, draw your signature with your mouse or finger, or upload a scan of your handwritten signature. Click Adopt to confirm.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Upload Your Waiver PDF',
      text: 'Drag and drop your liability waiver or release form PDF into the uploader. The file is processed entirely in your browser — never uploaded to any server.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Place Your Signature on the Waiver',
      text: 'Navigate to the participant or signatory signature line. Drag your signature to the correct position and resize to fit naturally.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
    {
      name: 'Download Your Signed Waiver',
      text: 'Click Download to save the signed waiver to your device. Email it to the event organizer, gym, tour operator, or organization requesting the form.',
      url: 'https://mydigitsign.com/tools/sign-waiver-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Waiver Signing Tool',
  description: 'Sign liability waivers and release forms online for free. Add electronic signatures to waiver PDFs directly in your browser with zero server uploads.',
  url: 'https://mydigitsign.com/tools/sign-waiver-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignWaiverOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Waiver Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Waiver Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Waiver Online <span className={styles.seoHeroGradient}>Free & Instant</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>sign a waiver</strong> before an activity, event, or service? Upload your liability waiver PDF, create your electronic signature, place it on the participant signature line, and download the signed form — all in under 60 seconds. No account, no uploads, no watermarks.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Waiver Stays in Your Browser</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Zero Server Uploads</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>ESIGN Act Compliant</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Done in Under 60 Seconds</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Account Required</span></li>
          </ul>
        </div>
      </section>

      <script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script id="software-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Waiver</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload the liability waiver or release form PDF you need to sign."
      />

      <section className={styles.seoExplainer} aria-label="How to sign a waiver online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>How to Sign a Waiver Online (Step-by-Step)</h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>Type your full name, draw freehand, or upload a photo of your signature. Click Adopt to save.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Waiver PDF</h3>
              <p>Drag and drop your waiver or release form. It stays in your browser&apos;s local memory — never sent to any server.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Sign & Download</h3>
              <p>Place your signature on the participant signature line, add the date, and click Download to save.</p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Are Electronic Signatures on Waivers Legally Binding?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Yes. Under the US <strong>ESIGN Act (2000)</strong> and <strong>UETA</strong>, electronically signed waivers and liability release forms are legally enforceable. Courts have repeatedly upheld e-signed waivers as valid. The key requirement is that the signer had clear intent to agree to the terms — placing your signature on the waiver&apos;s designated line satisfies this.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Common uses include: gym membership waivers, sports and adventure activity releases, event participation forms, medical procedure releases, photo/video release forms, and contractor liability waivers.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I sign a liability waiver online for free?</h3>
                <p>Yes. Upload your waiver PDF, create your electronic signature, place it on the signature line, and download — completely free, no account required.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is a digitally signed waiver legally valid?</h3>
                <p>Yes. Under ESIGN and UETA, electronic signatures on waivers are legally valid. Courts consistently uphold e-signed waivers as binding contracts when the signer clearly agreed to the terms.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>My gym emailed me a waiver PDF — can I sign it here?</h3>
                <p>Yes. Download the PDF from the email, upload it here, sign it, and email the signed version back to your gym or service provider.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my personal information safe?</h3>
                <p>Your waiver, including your personal details and health information, never leaves your device. All processing happens locally in your browser.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign on my mobile phone?</h3>
                <p>Yes. Open this tool in Safari (iPhone) or Chrome (Android), upload your waiver, draw your signature with your finger, and download the signed form.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What types of waivers can I sign here?</h3>
                <p>Any waiver or release form in PDF format — gym waivers, sports activity releases, event waivers, photography releases, medical releases, contractor liability waivers, and more.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools & guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/sign-consent-form-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Consent Form Online →</a></li>
              <li><a href="/tools/sign-medical-form-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Medical Form Online →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: 'var(--color-primary, #4f46e5)' }}>Are E-Signatures Legal? →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
