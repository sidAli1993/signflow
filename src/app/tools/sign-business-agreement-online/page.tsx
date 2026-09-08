import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Business Agreement Online Free — Secure B2B Contracts | MyDigitSign',
  description: 'Sign vendor contracts, B2B agreements, and board resolutions securely online. Add an authorized electronic signature or corporate seal to your business documents.',
  keywords: ["sign business agreement online", "b2b contract signature", "sign vendor contract online", "corporate seal signature", "authorized signer online"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  },
  openGraph: {
    title: 'Sign Business Agreement Online Free — Secure B2B Contracts | MyDigitSign',
    description: 'Sign vendor contracts, B2B agreements, and board resolutions securely online. Add an authorized electronic signature or corporate seal to your business documents.',
    url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Business Agreement', url: '/tools/sign-business-agreement-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Business Agreement Online for Free',
  description: 'Authorize vendor contracts and B2B agreements securely using our client-side electronic signature tool.',
  url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  steps: [
    {
      name: 'Prepare Your Corporate Signature',
      text: 'Type your name with your official title, draw your signature, or upload a PNG of your corporate seal. Click Adopt to confirm your credentials.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Load the B2B Contract',
      text: 'Drag and drop your business agreement PDF. It is loaded strictly into your browser memory to protect trade secrets and corporate terms.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Authorize the Document',
      text: 'Scroll to the signature block. Drag your authorized signature onto the line, and use the text tool to add your title (e.g., CEO, Director).',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
    {
      name: 'Save the Executed Agreement',
      text: 'Click Download to generate the finalized contract. Send it to your vendor or partner for counter-signature.',
      url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Business Agreement Tool',
  description: 'Sign vendor contracts, B2B agreements, and board resolutions securely online. Add an authorized electronic signature or corporate seal.',
  url: 'https://mydigitsign.com/tools/sign-business-agreement-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Is this suitable for multi-million dollar vendor contracts?",
    answer: "Yes, MyDigitSign creates ESIGN and UETA compliant signatures. For high-stakes contracts, ensure you are the authorized signatory for your corporation and retain the final PDF."
  },
  {
    question: "How do I add my corporate title beneath my signature?",
    answer: "After placing your signature graphic on the PDF, use our Text Tool to type your name, title, and the date directly below or next to the signature line."
  },
  {
    question: "Can I upload my company stamp or corporate seal?",
    answer: "Absolutely. Choose the 'Upload' tab in the signature creator to import a transparent PNG or JPG of your company seal and place it anywhere on the agreement."
  },
  {
    question: "Will my contract be stored on your servers?",
    answer: "Never. Business agreements often contain confidential pricing and terms. Our tool operates 100% locally on your device, ensuring complete corporate data privacy."
  }
];

const faqSchema = getFAQSchema(faqItems);

export default function SignDocumentTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero}>
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Corporate Contracts · Zero Uploads · Free</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Business Agreements <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Finalizing a <strong>B2B contract, vendor agreement, or board resolution</strong>? Apply your authorized electronic signature or corporate seal instantly. Your confidential business documents never leave your local browser.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Trade Secrets Kept Private</span></li>
            <li><Lock size={14} /><span>Zero Server Storage</span></li>
            <li><FileCheck size={14} /><span>UETA / ESIGN Compliant</span></li>
            <li><Users size={14} /><span>No Registration Needed</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Authorize <span>Business Agreement</span>"
        descriptionOverride="Create your corporate signature. Once adopted, upload your contract PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Execute a Corporate Contract Online
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signer Profile</h3>
              <p>Type your name, draw your signature, or upload a PNG of your corporate seal.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Agreement</h3>
              <p>Drop your <strong>business agreement PDF</strong> securely into the browser viewer.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Apply Authorization</h3>
              <p>Position your signature on the designated line. Add your title and date using the text tool.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Export Executed Copy</h3>
              <p>Download the finalized document immediately to send to your vendors or partners.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>Securely Managing B2B Contracts and Vendor Agreements</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              In the corporate world, speed and security are paramount. Whether you are signing a master service agreement (MSA), a non-disclosure agreement, or a simple vendor purchase order, you need a way to <strong>sign business agreements online</strong> without exposing confidential terms to third-party cloud servers.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Under US law (ESIGN Act and UETA), electronic signatures are fully valid for corporate governance and commercial transactions. However, as an authorized signatory for your company, you must ensure that the tools you use do not compromise your company&apos;s data security policies. 
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Many enterprises strictly forbid employees from uploading unsigned contracts to random online PDF editors due to the risk of data breaches. MyDigitSign solves this by keeping the entire signing process restricted to your local machine&apos;s memory. No data is ever transmitted to our backend.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Handling Corporate Seals and Titles
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Some international business agreements still require a traditional company stamp or corporate seal alongside a signature. Our tool allows you to upload a transparent PNG image of your corporate seal and overlay it directly onto the PDF. Furthermore, you can use our built-in text editor to clearly print your title (e.g., Managing Director) beneath the signature line, fulfilling standard corporate authorization requirements.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              {faqItems.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Tools & Guides</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign PDF Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/type-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Type Signature Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-nda-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign NDA Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/blog/electronic-signature-for-small-business" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Small Business E-Signatures <ArrowRight size={14}/></Link></li>
            </ul>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Footer />
    </div>
  );
}
