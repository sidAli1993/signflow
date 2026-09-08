import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Freelance Contract Online Free — Independent Contractor | MyDigitSign',
  description: 'Sign freelance contracts, statements of work, and independent contractor agreements online. Lock in your clients with legally binding electronic signatures.',
  keywords: ["sign freelance contract online", "independent contractor signature", "sign SOW online", "freelance agreement signature", "freelance contract online free"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
  },
  openGraph: {
    title: 'Sign Freelance Contract Online Free — Independent Contractor | MyDigitSign',
    description: 'Sign freelance contracts, statements of work, and independent contractor agreements online. Lock in your clients with legally binding electronic signatures.',
    url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Freelance Contract', url: '/tools/sign-freelance-contract-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign a Freelance Contract Online',
  description: 'Apply a legally binding electronic signature to your independent contractor agreement and lock in your new client project.',
  url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
  steps: [
    {
      name: 'Create Your Freelance Signature',
      text: 'Draw your signature on the screen, or choose a professional cursive font to type your name as an independent contractor.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
    {
      name: 'Upload the Statement of Work',
      text: 'Drag and drop the freelance contract or SOW PDF provided by your client into the browser window.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
    {
      name: 'Execute the Contract',
      text: 'Drag your signature onto the contractor line. Fill in the effective date using the text tool to finalize the agreement.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
    {
      name: 'Send to Client',
      text: 'Download the signed contract and email it back to your client to begin the project work securely.',
      url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Freelance Signer',
  description: 'Sign freelance contracts, statements of work, and independent contractor agreements online for free.',
  url: 'https://mydigitsign.com/tools/sign-freelance-contract-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Do freelance clients accept electronic signatures?",
    answer: "Yes, 100%. Under the ESIGN Act, electronic signatures on freelance agreements and statements of work are completely legally binding."
  },
  {
    question: "Can I use this for my IP assignment agreements?",
    answer: "Absolutely. You can sign intellectual property assignments, NDAs, and W-9 tax forms all using this same free tool."
  },
  {
    question: "Is this free for freelancers?",
    answer: "Yes, MyDigitSign is entirely free. We do not charge subscriptions, meaning independent contractors don't have to waste their budget on expensive signature software."
  },
  {
    question: "How do I send the signed contract back?",
    answer: "Once you place your signature, simply click Download. Attach that downloaded PDF directly to your email thread with the client."
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
            <span>Built for Independent Contractors</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Freelance Contracts <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Lock in your next big project. Instantly <strong>sign your freelance contract, Statement of Work (SOW), or Independent Contractor agreement</strong> securely in your browser.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Client-Side Security</span></li>
            <li><Lock size={14} /><span>No Server Uploads</span></li>
            <li><FileCheck size={14} /><span>ESIGN Compliant</span></li>
            <li><Users size={14} /><span>100% Free Forever</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Freelance Contract</span>"
        descriptionOverride="Create your independent contractor signature. Then upload your agreement PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign Your Freelance Agreement
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signature</h3>
              <p>Type your name in a professional cursive style or draw it on-screen.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Contract</h3>
              <p>Drop your <strong>freelance agreement PDF</strong> securely into the browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Accept Terms</h3>
              <p>Place your signature on the Contractor line and fill in the current date.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Export & Email</h3>
              <p>Download the finalized document and send it back to your client to kick off the project.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>Closing the Deal: Secure Signatures for Freelancers</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              As an independent contractor, securing a new gig is just the first step. Before you begin working or invoicing for a deposit, you need a signed contract. You can <strong>sign freelance contract online</strong> instantly with MyDigitSign, skipping the hassle of printing, signing, and scanning documents.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Freelance agreements—often called Statements of Work (SOWs) or Master Service Agreements (MSAs)—outline the scope of your work, your payment milestones, and crucial intellectual property (IP) assignments. Executing these documents with an ESIGN-compliant digital signature protects you legally if a client ever disputes a deliverable or delays a payment.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Most freelancers do not want to pay $15/month for enterprise e-signature software just to sign a few client contracts a year. MyDigitSign offers a 100% free alternative. Furthermore, because our tool runs locally on your device, you are never uploading sensitive client agreements or project scopes to third-party servers, keeping you compliant with your client&apos;s strict confidentiality clauses.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Signing Tax Forms (W-9)
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Alongside your freelance contract, US-based clients will almost always request a signed W-9 tax form. You can use this exact same tool to drag-and-drop a blank IRS W-9 PDF, use the text tool to type in your Social Security Number or EIN, and stamp your digital signature at the bottom.
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
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Explore Related Freelance Tools</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.95rem' }}>
              <li><Link href="/tools/sign-invoice-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Invoices <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-nda-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign NDA Online <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/type-signature-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Generate Professional Signature <ArrowRight size={14}/></Link></li>
              <li><Link href="/blog/digital-signature-for-freelancers" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Guide for Freelancers <ArrowRight size={14}/></Link></li>
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
