import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Offer Letter Online Free — No Account, No Upload | MyDigitSign',
  description:
    'Sign a job offer letter online for free in seconds. Upload your offer letter PDF, add your electronic signature, and download instantly. 100% browser-based — your offer letter never leaves your device.',
  keywords: [
    'sign offer letter online',
    'sign offer letter online free',
    'electronic signature offer letter',
    'esign job offer letter',
    'sign offer letter pdf',
    'sign job acceptance letter online',
    'accept job offer online signature',
    'sign employment offer free',
    'offer letter digital signature',
    'sign offer letter fast',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-offer-letter-online',
  },
  openGraph: {
    title: 'Sign Offer Letter Online Free — No Account, No Upload | MyDigitSign',
    description: 'Sign your job offer letter online for free. 100% private — your offer letter never leaves your browser.',
    url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Sign Offer Letter Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Offer Letter Online Free — No Account | MyDigitSign',
    description: 'Sign your job offer letter online for free. 100% browser-based, files never leave your device.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Offer Letter Online', url: '/tools/sign-offer-letter-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Job Offer Letter Online for Free',
  description: 'Sign any job offer letter electronically in your browser in under 60 seconds. No account needed, no files uploaded.',
  url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full legal name, draw your signature with your mouse or finger, or upload a scan of your handwritten signature. Click Adopt to confirm.',
      url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
    },
    {
      name: 'Upload Your Offer Letter PDF',
      text: 'Drag and drop your offer letter PDF into the uploader. The file is processed entirely in your browser — it is never uploaded to any server.',
      url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
    },
    {
      name: 'Place Your Signature on the Offer Letter',
      text: 'Navigate to the signature line on your offer letter. Drag your signature to the correct position, resize it to fit naturally, and add the date.',
      url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
    },
    {
      name: 'Download & Email Your Signed Offer Letter',
      text: 'Click Download to save the signed offer letter to your device. Email it back to your future employer to formally accept the position.',
      url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Offer Letter Signing Tool',
  description: 'Sign job offer letters online for free. Add electronic signatures to offer letter PDFs directly in your browser with zero server uploads.',
  url: 'https://mydigitsign.com/tools/sign-offer-letter-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignOfferLetterOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Offer Letter Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Offer Letter Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Offer Letter Online <span className={styles.seoHeroGradient}>Free & Instant</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Just received a job offer? <strong>Sign your offer letter</strong> in under 60 seconds — no subscriptions, no account, no printing. Upload the offer letter PDF, create your electronic signature, place it on the signature line, and download the signed document ready to email back to your future employer.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Offer Letter Stays in Your Browser</span></li>
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
        titleOverride="Sign Your <span>Offer Letter</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload the offer letter PDF you need to sign and return."
      />

      <section className={styles.seoExplainer} aria-label="How to sign an offer letter online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>How to Sign a Job Offer Letter Online (Step-by-Step)</h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>Type your full name, draw freehand, or upload a photo of your signature. Click Adopt to save.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Offer Letter</h3>
              <p>Drag and drop your offer letter PDF. It stays in your browser&apos;s local memory — never sent to any server.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Sign & Download</h3>
              <p>Place your signature on the signature line, add the date, and download. Then email it back to your employer.</p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Is an Electronically Signed Offer Letter Legally Valid?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Absolutely. Under the US <strong>ESIGN Act</strong> and <strong>UETA</strong>, an electronically signed offer letter is just as legally binding as one signed with pen and ink. Employers routinely accept e-signed offer letters via email — it is the industry standard in 2026. Your signed offer letter PDF is a legally enforceable acceptance of the terms outlined by your employer.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>How do I sign an offer letter sent by email?</h3>
                <p>Download the PDF from the email, upload it here, create and place your signature, then download the signed version and email it back to HR. The whole process takes under 2 minutes.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need to print the offer letter to sign it?</h3>
                <p>No. Using this tool, you can sign digitally and email the signed PDF back. Most employers expect this workflow — printing is no longer necessary.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my offer letter safe when I sign it here?</h3>
                <p>Yes. Your offer letter, including your salary and personal details, never leaves your device. We process everything locally in your browser — no server contact whatsoever.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What if my offer letter is a Word document, not a PDF?</h3>
                <p>Use our <a href="/tools/sign-word-document" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Word Document Online</a> tool. It converts the .docx to PDF, then lets you sign and download it.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign multiple pages of an offer letter?</h3>
                <p>Yes. After uploading your offer letter, navigate between pages using the page controls and place your signature or initials on each required page.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign on my phone?</h3>
                <p>Yes. Open this tool in Safari (iPhone) or Chrome (Android), upload your offer letter, draw your signature with your finger, and download the signed document.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools & guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/sign-employment-contract-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Employment Contract →</a></li>
              <li><a href="/tools/sign-word-document" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Word Document Online →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: 'var(--color-primary, #4f46e5)' }}>Are E-Signatures Legal? →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
