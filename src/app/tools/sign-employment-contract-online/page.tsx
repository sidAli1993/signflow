import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Employment Contract Online Free — No Account, No Upload | MyDigitSign',
  description:
    'Sign any employment contract or job offer letter online for free. Upload your contract PDF, add your electronic signature, and download instantly. 100% browser-based — your documents never leave your device.',
  keywords: [
    'sign employment contract online',
    'sign employment contract online free',
    'electronic signature employment contract',
    'esign job contract',
    'sign work contract online',
    'sign employment agreement online',
    'sign job offer letter online',
    'employee contract signature',
    'sign hr document online',
    'esign employment agreement free',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-employment-contract-online',
  },
  openGraph: {
    title: 'Sign Employment Contract Online Free — No Account, No Upload | MyDigitSign',
    description: 'Sign any employment contract online for free. 100% private — your document never leaves your browser.',
    url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Sign Employment Contract Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Employment Contract Online Free — No Account | MyDigitSign',
    description: 'Sign any employment contract online for free. 100% browser-based, files never leave your device.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Employment Contract Online', url: '/tools/sign-employment-contract-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign an Employment Contract Online for Free',
  description: 'Sign any employment contract or work agreement electronically in your browser. No account needed, no files uploaded.',
  url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full legal name, draw your signature with your mouse or finger, or upload a photo of your handwritten signature. Click Adopt to confirm.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
    {
      name: 'Upload Your Employment Contract PDF',
      text: 'Drag and drop your employment contract PDF into the uploader. The file is processed entirely in your browser — it is never sent to any server.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
    {
      name: 'Place Your Signature on the Contract',
      text: 'Navigate to the employee signature block. Drag your signature to the correct line, resize it to fit, and add the date.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
    {
      name: 'Download & Return Your Signed Contract',
      text: 'Click Download to save the signed employment contract to your device. Email it back to your HR department or employer to complete onboarding.',
      url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Employment Contract Signing Tool',
  description: 'Sign employment contracts and job offer letters online for free. Add electronic signatures to HR documents directly in your browser with zero server uploads.',
  url: 'https://mydigitsign.com/tools/sign-employment-contract-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignEmploymentContractOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Employment Contract Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Contract Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Employment Contract Online <span className={styles.seoHeroGradient}>Free & Instant</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Got a new job offer? Need to <strong>sign an employment contract</strong> quickly? Upload your contract PDF, create your electronic signature, place it on the employee signature line, and download the signed document — all in under 60 seconds. Your contract never leaves your browser. No account, no uploads, no watermarks.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Contract Stays in Your Browser</span></li>
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
        titleOverride="Sign Your <span>Employment Contract</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload the employment contract PDF you need to sign."
      />

      <section className={styles.seoExplainer} aria-label="How to sign an employment contract online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>How to Sign an Employment Contract Online (Step-by-Step)</h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>Type your full legal name, draw freehand, or upload a photo of your signature. Click Adopt to save.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Contract PDF</h3>
              <p>Drag and drop your employment contract. It stays in your browser&apos;s local memory — never sent to any server.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Sign & Download</h3>
              <p>Find the employee signature block, place your signature, add the date, and click Download to save.</p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Are Electronically Signed Employment Contracts Legal?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Yes. The US <strong>ESIGN Act (2000)</strong> and state <strong>UETA</strong> laws make electronically signed employment contracts fully legally enforceable — the same as paper contracts with ink signatures. The EU&apos;s <strong>eIDAS</strong> regulation provides the same protection across Europe. Almost every major employer, HR platform, and employment law firm now accepts e-signed employment contracts as standard practice.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I sign an employment contract online for free?</h3>
                <p>Yes. MyDigitSign lets you sign any employment contract PDF for free — no account, no uploads, no watermarks. Upload your contract, create your signature, place it, and download instantly.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my employment contract safe when I sign it online?</h3>
                <p>With MyDigitSign, your contract never leaves your device. We process everything entirely in your browser&apos;s local memory. Zero server contact means zero risk of your salary, terms, or personal information being exposed.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Do I need to print and mail my signed contract back?</h3>
                <p>Usually no. Download the signed PDF and email it directly to your HR contact or employer. Most companies now accept emailed, e-signed employment contracts without requiring a physical copy.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What types of employment documents can I sign here?</h3>
                <p>Any HR or employment document in PDF format — full-time contracts, part-time agreements, contractor agreements, consulting agreements, offer letters, NDAs, and onboarding forms.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign on mobile before my start date?</h3>
                <p>Yes. Open this tool in Safari (iPhone) or Chrome (Android), upload your employment contract PDF, draw your signature with your finger, and download. Works on all mobile devices.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>My employer uses DocuSign — can I use this instead?</h3>
                <p>If they sent you a DocuSign link, you&apos;ll need to use their platform. But if they emailed you a PDF to sign and return, yes — sign it here for free and email it back.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools & guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/sign-nda-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign NDA Online →</a></li>
              <li><a href="/tools/sign-offer-letter-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Offer Letter Online →</a></li>
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
