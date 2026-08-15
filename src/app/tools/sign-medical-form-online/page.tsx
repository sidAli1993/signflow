import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Medical Form Online Free — HIPAA Compliant Electronic Signature | MyDigitSign',
  description:
    'Sign medical forms, intake forms, and HIPAA releases online for free. Upload your medical PDF, add your electronic signature securely, and download. 100% browser-based privacy.',
  keywords: [
    'sign medical form online',
    'sign medical release online',
    'hipaa compliant electronic signature free',
    'sign hipaa form online',
    'sign patient intake form',
    'medical signature online free',
    'sign consent form medical',
    'sign health record release',
    'esign medical document',
    'digital signature medical forms',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-medical-form-online',
  },
  openGraph: {
    title: 'Sign Medical Form Online Free — HIPAA Compliant | MyDigitSign',
    description: 'Sign any medical form online for free. 100% private and secure — your medical records never leave your browser.',
    url: 'https://mydigitsign.com/tools/sign-medical-form-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Sign Medical Form Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Medical Form Online Free | MyDigitSign',
    description: 'Sign medical forms securely. 100% browser-based privacy, files never leave your device.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Medical Form Online', url: '/tools/sign-medical-form-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Medical Form Online for Free',
  description: 'Sign any patient intake, HIPAA release, or medical form electronically and securely in your browser. No account needed, no files uploaded to cloud servers.',
  url: 'https://mydigitsign.com/tools/sign-medical-form-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full legal name, draw your signature with your mouse or finger, or upload a scan of your handwritten signature. Click Adopt to confirm.',
      url: 'https://mydigitsign.com/tools/sign-medical-form-online',
    },
    {
      name: 'Upload Your Medical Form PDF',
      text: 'Drag and drop your medical form PDF into the uploader. The file is processed entirely in your browser memory — never uploaded to any remote server, ensuring strict privacy.',
      url: 'https://mydigitsign.com/tools/sign-medical-form-online',
    },
    {
      name: 'Place Your Signature',
      text: 'Navigate to the patient signature line. Drag your signature to the correct position, resize it, and add the date.',
      url: 'https://mydigitsign.com/tools/sign-medical-form-online',
    },
    {
      name: 'Download & Send Your Signed Form',
      text: 'Click Download to save the securely signed medical form to your device. Email it to your doctor, clinic, or hospital.',
      url: 'https://mydigitsign.com/tools/sign-medical-form-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Medical Form Signing Tool',
  description: 'Sign medical forms online for free securely. Add electronic signatures to patient forms directly in your browser with zero server uploads.',
  url: 'https://mydigitsign.com/tools/sign-medical-form-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignMedicalFormOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Medical Form Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Secure Medical Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Medical Forms Online <span className={styles.seoHeroGradient}>Secure & Free</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>sign a medical form</strong> or patient intake document? Upload your medical PDF, create your electronic signature, and download — securely in your browser. Because we process your document entirely on your device with no server uploads, your sensitive health information remains 100% private and protected.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Forms Stay in Your Browser</span></li>
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
        titleOverride="Sign Your <span>Medical Form</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload the medical form PDF you need to sign."
      />

      <section className={styles.seoExplainer} aria-label="How to sign a medical form online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>How to Sign a Medical Form Online (Step-by-Step)</h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>Type your full name, draw freehand, or upload your signature. Click Adopt to save.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Medical Form</h3>
              <p>Drag and drop your PDF. It stays securely in your browser&apos;s local memory — never sent to a server.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Sign & Download</h3>
              <p>Place your signature on the patient signature line, add the date, and download the signed form securely.</p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Why Local Browser Signing Matters for Medical Forms
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Medical forms, HIPAA releases, and patient intake documents contain highly sensitive Personally Identifiable Information (PII) and Protected Health Information (PHI). Uploading these documents to standard cloud-based PDF tools exposes your private data to third-party servers. 
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              MyDigitSign solves this by processing your documents <strong>locally in your web browser</strong>. Your medical forms never leave your device. Our servers never see, store, or transmit your files, ensuring maximum privacy for your health records while allowing you to sign documents instantly.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Are electronic signatures on medical forms valid?</h3>
                <p>Yes. Under the ESIGN Act and UETA, electronic signatures are legally binding for medical consent forms, HIPAA releases, and patient intake documents.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is this tool HIPAA compliant?</h3>
                <p>Because our tool operates entirely client-side (in your browser) and never uploads, stores, or transmits your documents to our servers, we never handle your PHI. This eliminates the risk of a server-side HIPAA breach from our end.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign a HIPAA release form online?</h3>
                <p>Yes. Upload the HIPAA authorization PDF, sign it, and download it instantly to send to your healthcare provider.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign forms for my dependents?</h3>
                <p>Yes. If you are the legal guardian or parent, you can sign pediatric forms or releases on behalf of your dependents using your electronic signature.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need an account to sign medical documents?</h3>
                <p>No. We don&apos;t require accounts, which means we don&apos;t store your email or track your signing activity, preserving your privacy.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How can I protect the signed document before emailing it?</h3>
                <p>Use our <a href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Protect PDF tool</a> to add a password to the signed file before emailing it to your doctor&apos;s office.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools & guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/sign-consent-form-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Consent Form Online →</a></li>
              <li><a href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Protect PDF with Password →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: 'var(--color-primary, #4f46e5)' }}>Are E-Signatures Legal? →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
