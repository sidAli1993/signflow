import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Real Estate Contract Online Free — Property Agreements | MyDigitSign',
  description: 'Sign real estate purchase agreements, closing disclosures, and realtor contracts online securely. Apply legally binding electronic signatures to property documents.',
  keywords: ["sign real estate contract online", "sign purchase agreement online", "real estate electronic signature", "realtor contract signature", "sign closing disclosure"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  },
  openGraph: {
    title: 'Sign Real Estate Contract Online Free — Property Agreements | MyDigitSign',
    description: 'Sign real estate purchase agreements, closing disclosures, and realtor contracts online securely. Apply legally binding electronic signatures to property documents.',
    url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Real Estate Contract', url: '/tools/sign-real-estate-contract-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Real Estate Contract Online',
  description: 'Apply an ESIGN-compliant electronic signature to your real estate purchase agreement or property disclosure securely in your browser.',
  url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  steps: [
    {
      name: 'Create Your Buyer or Seller Signature',
      text: 'Type your legal name to create a cursive signature, or draw your handwritten signature on your touchscreen. Adopt it for use on the contract.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Load the Property Agreement',
      text: 'Drag your real estate PDF (e.g., purchase agreement, disclosure) into the app. Your financial and property details are processed locally, never uploaded to our servers.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Sign and Initial the Pages',
      text: 'Place your full signature on the final acceptance line. If the contract requires it, you can create a secondary "Initial" profile and stamp it on the bottom of every page.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Save the Executed Contract',
      text: 'Download the finalized document and send it immediately to your real estate agent or title company to lock in the deal.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Real Estate Signer',
  description: 'Sign real estate purchase agreements, closing disclosures, and realtor contracts online securely.',
  url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Are electronic signatures legally binding for real estate purchases?",
    answer: "Yes. Under the ESIGN Act and UETA, electronic signatures on real estate contracts, including purchase agreements and disclosures, carry the same legal weight as a wet-ink signature."
  },
  {
    question: "Do I need to sign every page of the contract?",
    answer: "Standard practice often requires buyers and sellers to initial every page and sign the final page. You can easily do both using our tool by creating a signature and an initial stamp."
  },
  {
    question: "Will my real estate agent accept this?",
    answer: "Yes, virtually all realtors and brokers accept ESIGN-compliant digital PDFs. You can download the signed document and email it directly to them."
  },
  {
    question: "Is this secure enough for closing disclosures containing my financial info?",
    answer: "Absolutely. We designed this tool to run entirely client-side. Your closing disclosures are never uploaded to our cloud, guaranteeing your banking and property data stays on your machine."
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
            <span>Secure Property Transactions · UETA Compliant</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Real Estate Contracts <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Closing a deal? Securely <strong>sign real estate purchase agreements, property disclosures, and agent contracts</strong> online. Your financial documents are processed safely in your local browser.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Financial Data Kept Private</span></li>
            <li><Lock size={14} /><span>Zero Server Storage</span></li>
            <li><FileCheck size={14} /><span>UETA / ESIGN Compliant</span></li>
            <li><Users size={14} /><span>Free for Buyers & Sellers</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Real Estate Contract</span>"
        descriptionOverride="Create your legal signature. Once adopted, upload your property agreement PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Execute a Property Agreement Online
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signature</h3>
              <p>Type your full legal name or draw it on-screen to create your signature.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Agreement</h3>
              <p>Drop your <strong>real estate PDF</strong> securely into the browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Sign & Initial</h3>
              <p>Place your signature on the final line, and stamp your initials on prior pages if needed.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Export & Send</h3>
              <p>Download the finalized document and send it to your realtor or title agent.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>Secure and Legal Signatures for Real Estate Transactions</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              In real estate, timing is everything. Whether you are submitting an offer on a home or finalizing a commercial lease, you cannot afford to wait to print, sign, and scan documents. You need to <strong>sign real estate contract online</strong> instantly to lock in your deal before another buyer swoops in.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Under both the ESIGN Act and the Uniform Electronic Transactions Act (UETA), electronic signatures are fully legally binding for real estate purchases, property disclosures, and agent representation agreements. The real estate industry relies heavily on these digital executions to maintain the speed of the market.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              However, these contracts contain highly sensitive information, including your home address, purchase price, earnest money deposit, and sometimes banking details. Uploading a closing disclosure to a third-party server poses a severe privacy risk. MyDigitSign processes the entire document locally in your browser. The cryptographic signature is applied using your machine&apos;s memory, meaning your transaction data is never intercepted by our servers.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Handling Initial Lines and Dates
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Real estate purchase agreements are notoriously long, often requiring the buyer and seller to initial the bottom of every single page to acknowledge they have read the terms. With MyDigitSign, you can easily create a secondary &quot;Initial&quot; signature and quickly stamp it across all pages. You can also use our Text Tool to fill in required execution dates.
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
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Property Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-lease-agreement-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Lease Agreement <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-business-agreement-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Commercial Contract <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Password Protect Documents <ArrowRight size={14}/></Link></li>
              <li><Link href="/blog/esignature-for-realtors" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Guide for Realtors <ArrowRight size={14}/></Link></li>
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
