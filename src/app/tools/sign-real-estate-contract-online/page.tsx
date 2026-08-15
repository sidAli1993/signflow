import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Real Estate Contract Online Free — Electronic Signature | MyDigitSign',
  description:
    'Sign real estate contracts, purchase agreements, and disclosure forms online for free. Upload your contract PDF, add your electronic signature, and download instantly.',
  keywords: [
    'sign real estate contract online',
    'sign purchase agreement online',
    'electronic signature real estate',
    'esign property contract',
    'sign real estate forms free',
    'digital signature for realtors',
    'sign property disclosure form',
    'sign closing documents online',
    'real estate contract signature',
    'esign real estate documents',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  },
  openGraph: {
    title: 'Sign Real Estate Contract Online Free | MyDigitSign',
    description: 'Sign real estate contracts and purchase agreements online for free. 100% private.',
    url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Sign Real Estate Contract Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Real Estate Contract Online Free | MyDigitSign',
    description: 'Sign real estate contracts securely. 100% browser-based, files never leave your device.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Real Estate Contract Online', url: '/tools/sign-real-estate-contract-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Real Estate Contract Online for Free',
  description: 'Sign purchase agreements, offers, and property disclosures electronically in your browser.',
  url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full legal name, draw your signature, or upload a scan. Click Adopt to save.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Upload Your Contract PDF',
      text: 'Drag and drop your real estate contract. It is processed securely in your browser.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Place Your Signatures and Initials',
      text: 'Navigate to the signature blocks. Drag your signature to the lines, resize, and add dates or initials to the margins.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Download & Send',
      text: 'Click Download to save the signed contract. Email it to your real estate agent, broker, or the other party.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Real Estate Contract Signing Tool',
  description: 'Sign real estate contracts and documents online for free securely in your browser.',
  url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignRealEstateContractOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Real Estate Contract Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Contract Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Real Estate Contracts <span className={styles.seoHeroGradient}>Free & Fast</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>sign a real estate contract</strong>, purchase agreement, or offer letter? Upload the PDF, create your electronic signature and initials, and place them on the document. Our browser-based tool is secure, ESIGN compliant, and requires no account or cloud upload.
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
        titleOverride="Sign Your <span>Real Estate Contract</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload the contract PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>How to Sign a Real Estate Contract Online (Step-by-Step)</h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>Type your full name, draw freehand, or upload your signature. Click Adopt to save.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Contract</h3>
              <p>Drag and drop your PDF. It stays securely in your browser&apos;s local memory — never sent to a server.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Sign, Initial & Download</h3>
              <p>Place your signature and any necessary initials, add dates, and download the signed contract.</p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Are Electronic Signatures Valid for Real Estate?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Yes. The ESIGN Act specifically established the legal validity of electronic signatures for real estate transactions across the US. Almost all real estate agents, brokers, title companies, and lenders accept electronically signed purchase agreements, counter-offers, and disclosures. 
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              However, note that <strong>final closing documents</strong> (like deeds and certain loan documents) often require physical notarization or a specialized Remote Online Notary (RON), depending on state law. Standard contracts and offers can be signed instantly here.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Can I sign an offer or purchase agreement here?</h3>
                <p>Yes. If your agent emailed you a PDF of the offer or contract, you can upload it, sign it, and email it back directly.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>How do I add initials to each page?</h3>
                <p>You can create a separate "Initials" signature in our tool, place it on the pages that require initials, and then use your full signature on the final page.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my financial information secure?</h3>
                <p>Absolutely. Your contract is processed entirely on your local device. We never upload your PDF to our servers, ensuring your price and terms remain private.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
