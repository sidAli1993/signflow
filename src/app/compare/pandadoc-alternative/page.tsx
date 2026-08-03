import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'PandaDoc Alternative Free — Sign Documents Without a Subscription | MyDigitSign',
  description:
    'Need a free PandaDoc alternative? MyDigitSign lets you sign PDFs online for free with no subscription, no account, and no file uploads to any server.',
  keywords: [
    'pandadoc alternative',
    'pandadoc alternative free',
    'pandadoc competitor',
    'free document signing pandadoc',
    'sign pdf without pandadoc',
    'pandadoc free plan alternative',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/compare/pandadoc-alternative',
  },
  openGraph: {
    title: 'PandaDoc Alternative Free — Sign Documents Without a Subscription',
    description:
      'Skip PandaDoc\'s paid plans. MyDigitSign is 100% free, processes files locally, and needs no account.',
    url: 'https://mydigitsign.com/compare/pandadoc-alternative',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Compare', url: '/compare' },
  { name: 'PandaDoc Alternative', url: '/compare/pandadoc-alternative' },
]);

const faqItems = [
  {
    question: 'Is MyDigitSign free compared to PandaDoc?',
    answer:
      'Yes. PandaDoc\'s paid plans start at $19/month per user. MyDigitSign is completely free with no plans, no per-seat pricing, and no usage limits.',
  },
  {
    question: 'Can I sign a contract online with MyDigitSign instead of PandaDoc?',
    answer:
      'Absolutely. Upload your PDF contract, draw or type your signature, position it on the document, and download the signed PDF instantly. No account or registration required.',
  },
  {
    question: 'Does MyDigitSign support multi-page PDF contracts?',
    answer:
      'Yes. MyDigitSign supports multi-page PDFs. You can navigate between pages and place your signature on any specific page that requires it.',
  },
  {
    question: 'Is the e-signature created with MyDigitSign legally binding?',
    answer:
      'Yes. Electronic signatures comply with the ESIGN Act (USA), UETA, and eIDAS (EU). The same laws that validate PandaDoc signatures also validate MyDigitSign signatures.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function PandaDocAlternativePage() {
  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(245, 158, 11, 0.1)', color: '#d97706', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            📄 PandaDoc Starts at $19/user/month — MyDigitSign is Always Free
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            The Best Free PandaDoc Alternative in 2026
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            PandaDoc is powerful but expensive. For individuals and small teams who just need to sign and send PDFs, MyDigitSign delivers the essentials for free — with zero file uploads and no account.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: 'var(--color-primary, #4f46e5)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
              Sign PDF Free →
            </a>
          </div>
        </section>

        <section style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', textAlign: 'center' }}>MyDigitSign vs PandaDoc</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', border: '1px solid #e2e8f0', fontWeight: 700 }}>Feature</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: '#4f46e5' }}>MyDigitSign</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: '#64748b' }}>PandaDoc</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price', '✅ Free forever', '❌ From $19/user/month'],
                  ['Account Required', '✅ No account', '❌ Account required'],
                  ['File Uploads to Server', '✅ Never — 100% local', '❌ Files sent to cloud'],
                  ['Sign PDF', '✅ Unlimited', '✅ Yes (paid)'],
                  ['Compress / Merge PDF', '✅ Free, unlimited', '❌ Not included'],
                  ['Mobile Friendly', '✅ All browsers', '✅ App & browser'],
                  ['Legally Valid (ESIGN/eIDAS)', '✅ Yes', '✅ Yes'],
                ].map(([feature, mds, pd], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>{mds}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center', color: '#64748b' }}>{pd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>When MyDigitSign Makes More Sense Than PandaDoc</h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            PandaDoc is a document workflow platform built for sales teams — with CRM integrations, proposal builders, and e-signature tracking. That&apos;s great if you&apos;re a sales department closing 50 deals a month. But if you&apos;re a freelancer signing client contracts, a landlord collecting tenant signatures, or an individual signing a one-off agreement, PandaDoc is massive overkill.
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            MyDigitSign is designed for exactly these simpler, everyday signing needs. You get a fast, private, free experience without a subscription, without onboarding, and without uploading your sensitive documents to a third-party server.
          </p>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#fffbeb', borderRadius: '12px', border: '1px solid #fde68a' }}>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>No subscription needed</h4>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Sign your first PDF free — right now, no account required.</p>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: '#d97706', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
              Try MyDigitSign Free →
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
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>See also:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/compare/docusign-alternative" style={{ color: '#4f46e5' }}>DocuSign Alternative →</a></li>
              <li><a href="/compare/adobe-sign-alternative" style={{ color: '#4f46e5' }}>Adobe Sign Alternative →</a></li>
              <li><a href="/compare/smallpdf-alternative" style={{ color: '#4f46e5' }}>SmallPDF Alternative →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: '#4f46e5' }}>Sign PDF Free →</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
