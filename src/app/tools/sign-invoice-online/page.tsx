import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Invoice Online Free — Add Digital Signature to Invoice | MyDigitSign',
  description:
    'Sign any invoice online for free in seconds. Upload your invoice PDF, add a professional electronic signature, and download instantly. 100% browser-based — your invoice never leaves your device.',
  keywords: [
    'sign invoice online',
    'sign invoice online free',
    'electronic signature invoice',
    'esign invoice pdf',
    'add signature to invoice',
    'digitally sign invoice',
    'invoice signature free',
    'sign invoice pdf free',
    'digital signature for invoice',
    'sign freelance invoice online',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-invoice-online',
  },
  openGraph: {
    title: 'Sign Invoice Online Free — Add Digital Signature to Invoice | MyDigitSign',
    description: 'Sign any invoice online for free. Add a professional electronic signature to your invoice PDF in seconds.',
    url: 'https://mydigitsign.com/tools/sign-invoice-online',
    siteName: 'MyDigitSign',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MyDigitSign — Sign Invoice Online Free' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Invoice Online Free — No Account | MyDigitSign',
    description: 'Add a professional digital signature to your invoice PDF. Free, no account, browser-based.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Sign Invoice Online', url: '/tools/sign-invoice-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign an Invoice Online for Free',
  description: 'Add a professional electronic signature to any invoice PDF directly in your browser. No account needed, no files uploaded.',
  url: 'https://mydigitsign.com/tools/sign-invoice-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your name in professional cursive, draw your signature with your mouse or finger, or upload a scan of your handwritten signature. Click Adopt to confirm.',
      url: 'https://mydigitsign.com/tools/sign-invoice-online',
    },
    {
      name: 'Upload Your Invoice PDF',
      text: 'Drag and drop your invoice PDF into the uploader. The file is processed entirely in your browser — it is never uploaded to any server.',
      url: 'https://mydigitsign.com/tools/sign-invoice-online',
    },
    {
      name: 'Place Your Signature on the Invoice',
      text: 'Drag your signature to the authorized signature line or signatory field on your invoice. Resize it to fit neatly.',
      url: 'https://mydigitsign.com/tools/sign-invoice-online',
    },
    {
      name: 'Download & Send Your Signed Invoice',
      text: 'Click Download to save the signed invoice to your device. Email it to your client to request payment.',
      url: 'https://mydigitsign.com/tools/sign-invoice-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Invoice Signing Tool',
  description: 'Sign invoices online for free. Add professional electronic signatures to invoice PDFs directly in your browser with zero server uploads.',
  url: 'https://mydigitsign.com/tools/sign-invoice-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignInvoiceOnlineTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Invoice Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Invoice Signer · No Account · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Invoice Online <span className={styles.seoHeroGradient}>Free & Professional</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>sign an invoice</strong> before sending it to a client? Upload your invoice PDF, create a professional electronic signature, place it on the authorized signature line, and download — all in under 60 seconds. A signed invoice looks more professional, reduces payment disputes, and gets paid faster.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Invoice Stays in Your Browser</span></li>
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
        titleOverride="Sign Your <span>Invoice</span>"
        descriptionOverride="Create your professional electronic signature. Once adopted, upload the invoice PDF you need to sign before sending."
      />

      <section className={styles.seoExplainer} aria-label="How to sign an invoice online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>How to Sign an Invoice Online (Step-by-Step)</h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>Type your name, draw freehand, or upload your signature. Click Adopt to save it for the invoice.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Your Invoice PDF</h3>
              <p>Drag and drop your invoice. It stays in your browser&apos;s local memory — never sent to any server.</p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Sign & Download</h3>
              <p>Place your signature on the authorized signatory line, download the signed invoice, and send it to your client.</p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Why Sign Your Invoices?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              A signed invoice carries more legal weight than an unsigned one. If a client disputes payment, a signed invoice proves the authorized signatory reviewed and issued the billing. For freelancers, agencies, and small businesses, signed invoices also signal professionalism — clients treat them more seriously and pay faster.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Under the <strong>ESIGN Act</strong> and <strong>UETA</strong>, an electronically signed invoice is legally valid. Your digital signature on the invoice PDF constitutes a legally binding authorization of the billing amount and terms.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>Do invoices need to be signed?</h3>
                <p>Not legally in most cases — but signing an invoice adds professionalism and legal weight. Some clients and procurement systems require a signature before processing payment.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign a freelance invoice for free?</h3>
                <p>Yes. Upload your invoice PDF, create your signature, place it, and download — completely free, no account required.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my invoice data safe?</h3>
                <p>Your invoice, including client details and billing amounts, never leaves your device. Everything is processed locally in your browser. Zero server uploads.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign an invoice on my phone?</h3>
                <p>Yes. Open this tool in Safari or Chrome on your phone, upload your invoice PDF, draw your signature with your finger, and download the signed invoice.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What invoice formats can I sign?</h3>
                <p>Any invoice in PDF format. If your invoice is in Word or Excel, export it to PDF first, then upload it here to sign.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I add a stamp or company seal to my invoice?</h3>
                <p>Yes. When creating your signature, choose the &quot;Upload&quot; option and upload a PNG image of your company stamp or seal. Place it on the invoice alongside your signature.</p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools & guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/sign-freelance-contract-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Freelance Contract →</a></li>
              <li><a href="/tools/protect-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Protect PDF with Password →</a></li>
              <li><a href="/blog/digital-signature-for-freelancers" style={{ color: 'var(--color-primary, #4f46e5)' }}>Digital Signatures for Freelancers →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
