import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star, ArrowRight } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema, getFAQSchema } from '@/lib/seo-schemas';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sign Invoice Online Free — Legally Valid Business Invoices | MyDigitSign',
  description: 'Sign invoices online for free. Learn the 9 mandatory elements of a legally valid invoice, the difference between invoices and receipts, how to handle disputed invoices, and net payment terms.',
  keywords: ["sign invoice online", "sign business invoice free", "legally valid invoice elements", "invoice vs receipt", "disputed invoice", "net payment terms", "invoice signature online", "sign purchase order online", "add signature to invoice"],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-invoice-online',
  },
  openGraph: {
    title: 'Sign Invoice Online Free — Legally Valid Business Invoices | MyDigitSign',
    description: 'Sign invoices online for free. Learn the 9 mandatory elements of a legally valid invoice, the difference between invoices and receipts, how to handle disputed invoices, and net payment terms.',
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
    question: "What is the difference between an invoice and a receipt?",
    answer: "An invoice is a request for payment sent before payment is received — it details what was delivered, the amount owed, and payment terms (due date, net terms). A receipt is proof that payment was made and is issued after the fact. Signed invoices are important for businesses because they document the payment obligation and create a paper trail for accounting and tax purposes."
  },
  {
    question: "What elements are legally required on a business invoice?",
    answer: "A legally valid business invoice should include: (1) the invoice number, (2) invoice date, (3) due date, (4) your business name and address, (5) client's name and address, (6) an itemized list of goods or services, (7) unit prices and quantities, (8) total amount due, and (9) payment method instructions. For EU/UK businesses, VAT registration numbers are also required."
  },
  {
    question: "How do I handle a client who disputes my invoice?",
    answer: "Document every dispute in writing immediately. Send a formal written response acknowledging their objection, referencing your signed contract and the specific deliverables listed in your scope of work. If partial payment is disputed, consider issuing a revised invoice for the undisputed portion to receive some payment while resolving the remainder. Consult your contract's dispute resolution clause for next steps."
  },
  {
    question: "What does Net 30 mean on an invoice?",
    answer: "Net 30 means the client has 30 calendar days from the invoice date to make full payment. Net 15, Net 45, and Net 60 follow the same convention. For maximum cash flow protection, freelancers and small businesses should negotiate Net 15 or immediate payment (Due on Receipt) whenever possible."
  },
  {
    question: "Does an invoice need to be signed to be legally valid?",
    answer: "In most jurisdictions, an unsigned invoice is still a valid payment request. However, adding your signature to an invoice makes it more professional, signals your personal accountability, and makes disputes less likely since both parties have acknowledged the terms. For larger B2B transactions, signed invoices are the standard."
  },
  {
    question: "Can I use this to sign invoices created in Excel or Word?",
    answer: "Yes — export your invoice from Excel, Word, or any accounting software as a PDF, then upload it to MyDigitSign to add your signature. The signed PDF can be emailed directly to your client."
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
            <h2 className={styles.seoArticleTitle}>Invoice Essentials: The 9 Mandatory Elements and How to Handle Disputes</h2>

            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              An invoice is not just a bill — it is a legal document that establishes a payment obligation. Before you <strong>sign invoice online</strong> and send it to your client, understanding what makes an invoice legally sound — and how to protect yourself when one is disputed — can make the difference between getting paid on time and chasing late payments for months.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Invoice vs. Receipt vs. Purchase Order: What&apos;s the Difference?
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
              {[
                { title: 'Purchase Order (PO)', icon: '📤', timing: 'Sent by the buyer before delivery', detail: 'A PO is generated by the client’s procurement department and sent to the vendor to authorize a purchase. It defines what they want, in what quantity, and at what price. It is not a payment request.' },
                { title: 'Invoice', icon: '📜', timing: 'Sent by the vendor after delivery', detail: 'An invoice is your formal request for payment after delivering goods or completing a service. It should reference the PO number (if applicable) and list everything delivered.' },
                { title: 'Receipt', icon: '✅', timing: 'Issued after payment is received', detail: 'A receipt confirms that payment was received. It is issued by the seller and serves as proof of transaction for the buyer’s accounting records.' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.25rem', background: 'rgba(79,70,229,0.04)', borderRadius: '10px', border: '1px solid rgba(79,70,229,0.1)' }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <strong style={{ color: 'var(--color-text)', display: 'block', marginBottom: '0.2rem' }}>{item.title}</strong>
                  <p style={{ margin: '0 0 0.5rem', color: 'var(--color-primary)', fontSize: '0.8rem', fontStyle: 'italic' }}>{item.timing}</p>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{item.detail}</p>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              9 Mandatory Elements of a Legally Valid Invoice
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              A missing field can delay payment, trigger compliance issues, or invalidate the document for tax purposes. Make sure every invoice you send includes:
            </p>
            <div style={{ display: 'grid', gap: '0.6rem', marginBottom: '1.5rem' }}>
              {[
                'Invoice Number (unique, sequential)',
                'Invoice Date (date of issue)',
                'Payment Due Date (or Net Terms)',
                'Your business name, address, and contact info',
                'Client name and billing address',
                'Itemized list of goods or services rendered',
                'Unit prices, quantities, and line totals',
                'Total amount due (with applicable tax)',
                'Payment instructions (bank wire, ACH, check, etc.)',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '0.6rem 0.85rem', background: 'rgba(79,70,229,0.03)', borderRadius: '6px', border: '1px solid rgba(79,70,229,0.08)' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', opacity: 0.6, minWidth: '20px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ color: 'var(--color-text)', fontSize: '0.92rem' }}>{item}</span>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Net Payment Terms: What to Use for Your Industry
            </h3>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              The net payment terms you use should reflect both your cash flow needs and your industry norms:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '1.5rem' }}>
              {[
                { term: 'Due on Receipt', best: 'Freelancers, solo consultants, small one-off projects' },
                { term: 'Net 15', best: 'Agencies, small businesses, regular recurring clients' },
                { term: 'Net 30', best: 'Standard B2B commercial terms, most industries' },
                { term: 'Net 45', best: 'Government contractors, healthcare, construction' },
                { term: 'Net 60', best: 'Enterprise clients, large corporations, international' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '0.85rem 1rem', background: 'rgba(79,70,229,0.04)', borderRadius: '8px', border: '1px solid rgba(79,70,229,0.1)' }}>
                  <strong style={{ color: 'var(--color-text)', display: 'block', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{item.term}</strong>
                  <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.best}</p>
                </div>
              ))}
            </div>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              How to Handle a Disputed Invoice
            </h3>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              When a client disputes an invoice, respond in writing within 24 hours. Acknowledge their objection, reference your signed contract and the specific deliverables listed in the scope of work, and attach any delivery confirmation emails or client approval messages. If only part of the invoice is disputed, consider issuing a revised invoice for the undisputed portion immediately to receive partial payment while resolving the remainder.
            </p>
            <p style={{ marginBottom: '1.25rem', lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              For persistent non-payers, your options escalate as follows: (1) formal demand letter referencing your contract and late fee clause; (2) small claims court for amounts under your state&apos;s limit (typically $5,000–$15,000); (3) engaging a collections agency (typically 25–33% commission); (4) hiring a business attorney for amounts warranting litigation.
            </p>

            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--color-text)', marginTop: '2.5rem', marginBottom: '1rem' }}>
              Why Invoice Privacy Matters
            </h3>
            <p style={{ lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>
              Your invoices reveal your business rates, your client relationships, your revenue, and your payment terms — information you would not want competitors or unauthorized parties to access. Uploading invoices to a cloud PDF signing service means this sensitive business intelligence resides on a third-party server. MyDigitSign signs your invoices entirely within your browser&apos;s local memory. Your rates, client names, and revenue figures never leave your device — giving you professional invoice signing with complete financial privacy.
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
