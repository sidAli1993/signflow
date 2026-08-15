import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Consent Form Online Free — Electronic Signature | MyDigitSign',
  description:
    'Sign any consent form online for free. Upload your consent PDF, add your electronic signature, and download instantly. 100% browser-based — your files never leave your device.',
  keywords: [
    'sign consent form online',
    'sign consent form online free',
    'electronic signature consent form',
    'esign parental consent',
    'sign photo consent online',
    'sign travel consent form',
    'digital signature for consent',
    'sign consent agreement',
    'consent form electronic signature',
    'sign school consent form',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-consent-form-online',
  },
  openGraph: {
    title: 'Sign Consent Form Online Free — Electronic Signature | MyDigitSign',
    description: 'Sign any consent form online for free. 100% private — your consent form never leaves your browser.',
    url: 'https://mydigitsign.com/tools/sign-consent-form-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Sign Consent Form Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Consent Form Online Free | MyDigitSign',
    description: 'Sign any consent form online for free. 100% browser-based, files never leave your device.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Consent Form Online', url: '/tools/sign-consent-form-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Consent Form Online for Free',
  description: 'Sign any parental, medical, photo, or travel consent form electronically in your browser. No account needed.',
  url: 'https://mydigitsign.com/tools/sign-consent-form-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full name, draw your signature with your mouse or finger, or upload a scan. Click Adopt to confirm.',
      url: 'https://mydigitsign.com/tools/sign-consent-form-online',
    },
    {
      name: 'Upload Your Consent Form PDF',
      text: 'Drag and drop your consent form PDF into the uploader. Processed securely in your browser.',
      url: 'https://mydigitsign.com/tools/sign-consent-form-online',
    },
    {
      name: 'Place Your Signature',
      text: 'Navigate to the signature line. Drag your signature to the correct position, resize it, and add the date.',
      url: 'https://mydigitsign.com/tools/sign-consent-form-online',
    },
    {
      name: 'Download & Send Your Signed Form',
      text: 'Click Download to save the signed consent form to your device. Email it to the requesting party.',
      url: 'https://mydigitsign.com/tools/sign-consent-form-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Consent Form Signing Tool',
  description: 'Sign consent forms online for free. Add electronic signatures to consent PDFs directly in your browser with zero server uploads.',
  url: 'https://mydigitsign.com/tools/sign-consent-form-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignConsentFormOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Consent Form Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Consent Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Consent Forms Online <span className={styles.seoHeroGradient}>Free & Instant</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>sign a consent form</strong> for a school trip, medical procedure, or photo release? Upload your consent PDF, create your electronic signature, and download the signed document — all in under 60 seconds. Your form never leaves your browser.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Form Stays in Your Browser</span></li>
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
        titleOverride="Sign Your <span>Consent Form</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload the consent form PDF you need to sign."
      />

      <section className={styles.seoExplainer} aria-label="How to sign a consent form online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>How to Sign a Consent Form Online (Step-by-Step)</h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>Type your full name, draw freehand, or upload your signature. Click Adopt to save.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Consent Form</h3>
              <p>Drag and drop your PDF. It stays securely in your browser&apos;s local memory — never sent to a server.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Sign & Download</h3>
              <p>Place your signature on the designated signature line, add the date, and download the signed form.</p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Are Electronic Signatures on Consent Forms Legal?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Yes. Whether it's a parental consent for a school field trip, a photo release for marketing, or a minor travel consent form, electronic signatures are legally binding under the ESIGN Act and UETA. Placing your digital signature on the document confirms your authorized consent to the terms.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I sign a school consent form online?</h3>
                <p>Yes. Many schools email PDF consent forms. Upload it here, sign as the parent/guardian, and email it right back to the teacher or administration.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my child's information secure?</h3>
                <p>Yes. Consent forms often contain sensitive details about minors. With our tool, the document never leaves your device and is never uploaded to external servers.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What about travel consent forms for minors?</h3>
                <p>You can sign travel consent forms electronically. However, if the destination country or airline requires notarization, you will need a specialized e-notary service or physical notary.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign on my phone?</h3>
                <p>Yes, simply open the tool in your mobile browser, upload the PDF, and draw your signature with your finger.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools & guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/sign-medical-form-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Medical Form Online →</a></li>
              <li><a href="/tools/sign-waiver-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Waiver Online →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
