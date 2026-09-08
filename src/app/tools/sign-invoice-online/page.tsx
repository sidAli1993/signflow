import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Invoice Online Free — Electronic Signature for Billing | MyDigitSign',
  description: 'Sign invoices, billing statements, and purchase orders online for free. Add an authorized electronic signature or company seal to your billing documents.',
  keywords: ["sign invoice online free", "electronic signature for invoice", "digital signature billing", "sign purchase order online", "add signature to invoice"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-invoice-online',
  },
  openGraph: {
    title: 'Sign Invoice Online Free — Electronic Signature for Billing | MyDigitSign',
    description: 'Sign invoices, billing statements, and purchase orders online for free. Add an authorized electronic signature or company seal to your billing documents.',
    url: 'https://mydigitsign.com/tools/sign-invoice-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign' }],
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Invoice Online', url: '/tools/sign-invoice-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Authorize and Sign an Invoice Online',
  description: 'Apply a legally binding electronic signature or corporate stamp to your invoice to authorize payment.',
  url: 'https://mydigitsign.com/tools/sign-invoice-online',
  steps: [
    {
      name: 'Create Your Payment Authorization',
      text: 'Type your name, draw your signature, or upload your company seal or "Approved" stamp. Click Adopt.',
      url: 'https://mydigitsign.com/tools/sign-invoice-online',
    },
    {
      name: 'Upload the Invoice PDF',
      text: 'Drag and drop your invoice or purchase order. Financial data is processed locally to maintain accounting privacy.',
      url: 'https://mydigitsign.com/tools/sign-invoice-online',
    },
    {
      name: 'Place the Stamp or Signature',
      text: 'Drag your signature to the authorization block. Use the text tool to add your department code or the current date.',
      url: 'https://mydigitsign.com/tools/sign-invoice-online',
    },
    {
      name: 'Download for Accounts Payable',
      text: 'Export the signed invoice instantly. It is now ready to be processed by your finance department.',
      url: 'https://mydigitsign.com/tools/sign-invoice-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Invoice Signer',
  description: 'Sign invoices, billing statements, and purchase orders online for free. Add an authorized electronic signature or company seal.',
  url: 'https://mydigitsign.com/tools/sign-invoice-online',
  applicationCategory: 'BusinessApplication',
});

const faqItems = [
  {
    question: "Why do some clients require a signed invoice?",
    answer: "Many international tax regulations and corporate accounting departments require invoices to be formally signed or stamped to prevent fraud and legally authorize the payout."
  },
  {
    question: "Can I add a company seal or 'PAID' stamp to my invoice?",
    answer: "Yes, you can upload a transparent PNG image of your company seal or a PAID stamp as your signature, and place it anywhere on your invoice PDF."
  },
  {
    question: "Are my financial details safe?",
    answer: "Absolutely. Our tool processes the PDF strictly inside your browser. We never upload your invoices to our servers, keeping your financial figures completely private."
  },
  {
    question: "Can I sign multiple invoices at once?",
    answer: "You must process them one file at a time, but since it's entirely client-side, the process is instantaneous and you can rapidly sign back-to-back invoices."
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
            <span>Secure Billing · Client-Side Privacy</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Invoices & Billing <span className={styles.seoHeroGradient}>Online</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to authorize an <strong>invoice, purchase order, or billing statement</strong>? Add your electronic signature, "PAID" stamp, or company seal to your financial documents instantly.
          </p>
          <ul className={styles.seoTrustPills} role="list">
            <li><Shield size={14} /><span>Financials Kept Private</span></li>
            <li><Lock size={14} /><span>No Server Uploads</span></li>
            <li><FileCheck size={14} /><span>ESIGN Compliant</span></li>
            <li><Users size={14} /><span>No Account Required</span></li>
          </ul>
        </div>
      </section>

      <HomeClient
        initialTab="type"
        titleOverride="Authorize <span>Invoice</span>"
        descriptionOverride="Create your signature or upload a company stamp. Once adopted, upload your billing PDF."
      />

      <section className={styles.seoExplainer}>
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign Your Invoice for Payment
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>1</div>
              <h3>Create Signature</h3>
              <p>Type your name, draw a signature, or upload a company seal PNG.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>2</div>
              <h3>Load Invoice</h3>
              <p>Drop your <strong>invoice PDF</strong> securely into the browser workspace.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>3</div>
              <h3>Apply Authorization</h3>
              <p>Position your signature or stamp on the document. Add payment dates if necessary.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum}>4</div>
              <h3>Export Document</h3>
              <p>Download the finalized file and send it to Accounts Payable.</p>
            </article>
          </div>

          <div className={styles.seoArticle} style={{ marginTop: '4rem' }}>
            <h2 className={styles.seoArticleTitle}>Streamline Your Accounts Payable: Signing Invoices Online</h2>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              For freelancers, contractors, and corporate billing departments, authorizing payments quickly is essential for cash flow. When you <strong>sign invoice online free</strong>, you ensure that your billing documents look professional, legally sound, and ready for immediate processing.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Many international clients and corporate accounts payable (AP) departments require a formal signature or company stamp on an invoice before they can process a wire transfer or check. This serves as an anti-fraud measure, confirming that the services were rendered and the request is legitimate.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Because invoices contain sensitive banking details, client names, and financial figures, uploading them to standard free PDF editors is a massive privacy risk. MyDigitSign utilizes client-side architecture (WebAssembly and Canvas) to apply your signatures locally. Your financial data is never sent to our servers.
            </p>
            
            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Using Company Seals and PAID Stamps
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Beyond traditional signatures, our tool allows you to upload an image of your company seal or a red &quot;PAID&quot; stamp. By selecting the &quot;Upload&quot; option in the signature creator, you can drop your transparent PNG stamp directly onto the invoice, marking it clearly for internal accounting records.
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
              <li><Link href="/tools/sign-freelance-contract-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Freelance Contract <ArrowRight size={14}/></Link></li>
              <li><Link href="/tools/sign-business-agreement-online" style={{ color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '4px' }}>Sign Business Agreement <ArrowRight size={14}/></Link></li>
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
