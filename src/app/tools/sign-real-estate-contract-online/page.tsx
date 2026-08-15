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
  description: 'Sign real estate contracts, purchase agreements, and property disclosures online for free. Secure, legally binding e-signatures for real estate transactions.',
  keywords: ["sign real estate contract online", "electronic signature purchase agreement", "sign property disclosure online", "esign real estate documents"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  },
  openGraph: {
    title: 'Sign Real Estate Contract Online Free — Property Agreements | MyDigitSign',
    description: 'Sign real estate contracts, purchase agreements, and property disclosures online for free. Secure, legally binding e-signatures for real estate transactions.',
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
  { name: 'Sign Real Estate Contract Online', url: '/tools/sign-real-estate-contract-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Real Estate Contract Online for Free',
  description: 'Apply a legally binding electronic signature to your real estate contract securely in your browser.',
  url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your full name, draw your signature, or upload your company seal. Click Adopt to save your mark.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Upload Your Document',
      text: 'Drag and drop your real estate contract PDF. It is processed entirely locally for maximum privacy.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Place Your Signature',
      text: 'Navigate to the signature block, drag your signature to the line, and add optional text or dates.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
    {
      name: 'Download & Send',
      text: 'Click Download to save the signed contract. Email it back to the requesting party instantly.',
      url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Real Estate Contract Signer',
  description: 'Sign real estate contracts, purchase agreements, and property disclosures online for free. Secure, legally binding e-signatures for real estate transactions.',
  url: 'https://mydigitsign.com/tools/sign-real-estate-contract-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Are e-signatures valid for buying a house?",
    answer: "Yes, electronic signatures are legally binding for purchase agreements, disclosures, and most real estate contracts, though final mortgage notes or deeds may require notarization."
  },
  {
    question: "Does this tool work with large real estate PDFs?",
    answer: "Yes, because the PDF is processed locally in your browser memory, there are no server upload limits, allowing you to sign massive 100+ page property packets easily."
  },
  {
    question: "Do I need to create an account to sign this document?",
    answer: "No. MyDigitSign is completely free and requires no account registration or credit card to sign your documents."
  },
  {
    question: "Is a drawn signature better than a typed one?",
    answer: "Both are legally valid electronic signatures. Drawing your signature mimics your natural handwriting, while typing uses cursive typography. Choose whichever you prefer."
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
            <span>Free Contract Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Real Estate Contracts <span className={styles.seoHeroGradient}>Securely</span>
          </h1>
          <p className={styles.seoHeroDesc} dangerouslySetInnerHTML={{ __html: 'Closing on a property or signing a disclosure? Upload your <strong>real estate contract</strong> and apply a legally binding electronic signature. Keep your real estate transaction private.' }} />
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>In-Browser Processing</span></li>
            <li><Lock size={14} /><span>Complete Privacy</span></li>
            <li><FileCheck size={14} /><span>ESIGN Compliant</span></li>
            <li><Users size={14} /><span>No Signup Required</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Real Estate Contract</span>"
        descriptionOverride="Create your legally binding electronic signature. Once adopted, upload your PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign Your Real Estate Contract in 4 Steps
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signature</h3>
              <p>Type or draw your signature in the creator panel and adopt it.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Upload PDF</h3>
              <p>Drop your <strong>real estate contract</strong> into the secure browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Place on Line</h3>
              <p>Drag the signature, add dates, and position them on the document.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Download</h3>
              <p>Save the signed file to your device instantly.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>Executing Real Estate Contracts with Electronic Signatures</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'The real estate industry has fully embraced digital transformation. Buyers, sellers, and agents frequently need to <strong>sign real estate contract online</strong> to speed up negotiations, escrow, and closing processes.' }} />
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'Under the ESIGN Act, electronic signatures are legally binding for almost all real estate documents, including purchase agreements, property disclosures, and agency representations (though some final closing documents may still require a physical notary). Learn more in our <a href="/blog/electronic-signature-for-small-business" style="color:var(--color-primary);text-decoration:underline;">small business guide</a>.' }} />
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }} dangerouslySetInnerHTML={{ __html: 'Real estate documents are often massive PDF files containing sensitive financial details. MyDigitSign handles large PDFs with ease and processes everything locally, so you can <a href="/tools/draw-signature-online" style="color:var(--color-primary);text-decoration:underline;">draw your signature</a> without worrying about file size limits.' }} />
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Use Client-Side Signing?
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Unlike other free tools that upload your sensitive documents to remote servers to apply the signature, MyDigitSign uses WebAssembly and advanced canvas rendering to process your <strong>real estate contract</strong> locally on your machine. This guarantees that your confidential data cannot be intercepted or stored by third parties.
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
              <li><Link href="/tools/draw-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Draw Signature Online <ArrowRight size={14}/></Link></li>
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
