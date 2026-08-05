import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Adobe Sign Alternative Free — No Subscription, No Upload | MyDigitSign',
  description:
    'Looking for a free Adobe Sign alternative? MyDigitSign is 100% free, browser-based, and never uploads your files to any server. No Adobe account needed.',
  keywords: [
    'adobe sign alternative',
    'adobe sign free alternative',
    'adobe acrobat sign alternative',
    'free e-signature adobe alternative',
    'sign pdf without adobe',
    'adobe sign competitor',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/compare/adobe-sign-alternative',
  },
  openGraph: {
    title: 'Adobe Sign Alternative Free — No Subscription, No Upload',
    description:
      'Skip Adobe Sign\'s expensive subscription. MyDigitSign is completely free, processes files locally, and requires no account.',
    url: 'https://mydigitsign.com/compare/adobe-sign-alternative',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Compare', url: '/compare' },
  { name: 'Adobe Sign Alternative', url: '/compare/adobe-sign-alternative' },
]);

const faqItems = [
  {
    question: 'Is MyDigitSign a free replacement for Adobe Sign?',
    answer:
      'Yes. MyDigitSign provides the core e-signature functionality that Adobe Acrobat Sign charges $12.99–$23.99/month for. Our tool is completely free, with no subscription, no usage caps, and no account required.',
  },
  {
    question: 'Do I need an Adobe account to use MyDigitSign?',
    answer:
      'No. MyDigitSign requires zero account registration. Open the tool in your browser, create your signature, upload your document, and download the signed file — all without logging in anywhere.',
  },
  {
    question: 'Is MyDigitSign as legally valid as Adobe Sign?',
    answer:
      'Yes. The legal validity of an electronic signature does not depend on the software vendor. Under the ESIGN Act (USA) and eIDAS (EU), any electronic signature that captures intent to sign is legally binding. MyDigitSign signatures comply with these standards.',
  },
  {
    question: 'Does MyDigitSign upload my PDF to Adobe or any cloud?',
    answer:
      'No. Unlike Adobe Sign, which requires you to upload your documents to Adobe\'s cloud servers, MyDigitSign processes everything locally in your browser. Your files never leave your device.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function AdobeSignAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(239, 68, 68, 0.1)', color: '#dc2626', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            💸 Why Pay $12.99/month to Adobe?
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            The Best Free Adobe Sign Alternative in 2026
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Adobe Acrobat Sign costs up to $23.99/month. MyDigitSign delivers the same e-signature capability for free — with better privacy, since your files never leave your browser.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: 'var(--color-primary, #4f46e5)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
              Sign PDF Free — No Adobe Account →
            </a>
          </div>
        </section>

        <section style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', textAlign: 'center' }}>
            MyDigitSign vs Adobe Sign — Feature Comparison
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', border: '1px solid #e2e8f0', fontWeight: 700 }}>Feature</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: '#4f46e5' }}>MyDigitSign</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: '#64748b' }}>Adobe Sign</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price', '✅ Free forever', '❌ $12.99–$23.99/month'],
                  ['Account Required', '✅ No account needed', '❌ Adobe account required'],
                  ['File Uploads to Server', '✅ Never — 100% local', '❌ Files sent to Adobe cloud'],
                  ['Sign PDF', '✅ Unlimited', '✅ Yes (subscription)'],
                  ['Watermarks', '✅ Never', '⚠️ None on paid plan'],
                  ['Mobile Friendly', '✅ All browsers', '✅ App & browser'],
                  ['Legally Valid', '✅ ESIGN / eIDAS', '✅ ESIGN / eIDAS'],
                  ['Works Offline', '✅ After first load', '❌ Cloud-dependent'],
                ].map(([feature, mds, adobe], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>{mds}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center', color: '#64748b' }}>{adobe}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why Adobe Sign Is Overkill for Most People
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            Adobe Acrobat Sign is designed for enterprises managing hundreds of signed contracts per month with audit trails, multiple signers, and CRM integrations. If you&apos;re a freelancer, small business owner, or individual who needs to sign a few PDFs per month, you&apos;re paying enterprise prices for consumer needs.
          </p>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            MyDigitSign handles the most common signing scenarios — sign a contract, NDA, lease, or invoice — instantly, for free, without creating an Adobe account or giving a credit card number.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            The Privacy Advantage
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Adobe Sign requires you to upload your documents to Adobe&apos;s cloud infrastructure. That means your contracts, tax documents, and sensitive agreements reside on Adobe&apos;s servers — subject to their data retention policies and data breach risks. MyDigitSign never receives your file. Zero server contact means zero data breach risk on our end.
          </p>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#fef2f2', borderRadius: '12px', border: '1px solid #fecaca' }}>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Stop paying for Adobe Sign</h4>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Get the same e-signature results for free, with better privacy.</p>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: '#dc2626', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
              Sign PDF Free Now →
            </a>
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>Frequently Asked Questions</h3>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '10px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem', color: '#0f172a' }}>{faq.question}</h4>
              <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>{faq.answer}</p>
            </div>
          ))}

          <div style={{ marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Related comparisons:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/compare/docusign-alternative" style={{ color: '#4f46e5' }}>DocuSign Alternative →</a></li>
              <li><a href="/compare/smallpdf-alternative" style={{ color: '#4f46e5' }}>SmallPDF Alternative →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: '#4f46e5' }}>Sign PDF Online Free →</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
