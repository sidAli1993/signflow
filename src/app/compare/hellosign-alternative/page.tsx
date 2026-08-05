import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'HelloSign Alternative Free — Sign PDFs Without Dropbox | MyDigitSign',
  description:
    'Looking for a free HelloSign (Dropbox Sign) alternative? MyDigitSign is 100% free, requires no Dropbox account, and never uploads your files to the cloud.',
  keywords: [
    'hellosign alternative',
    'hellosign alternative free',
    'dropbox sign alternative',
    'hellosign free replacement',
    'sign pdf without hellosign',
    'dropbox sign free alternative',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/compare/hellosign-alternative',
  },
  openGraph: {
    title: 'HelloSign Alternative Free — Sign PDFs Without Dropbox',
    description:
      'HelloSign (now Dropbox Sign) requires a Dropbox account and paid plan. MyDigitSign is 100% free with no accounts and no server uploads.',
    url: 'https://mydigitsign.com/compare/hellosign-alternative',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Compare', url: '/compare' },
  { name: 'HelloSign Alternative', url: '/compare/hellosign-alternative' },
]);

const faqItems = [
  {
    question: 'Is MyDigitSign a free alternative to HelloSign (Dropbox Sign)?',
    answer:
      'Yes. HelloSign rebranded to Dropbox Sign and now requires a Dropbox account with paid plans starting at $15/month. MyDigitSign is completely free with no account, no subscription, and no usage limits.',
  },
  {
    question: 'Do I need a Dropbox account to use MyDigitSign?',
    answer:
      'No. MyDigitSign works entirely in your browser without any account, Dropbox or otherwise. Just open the tool and sign your document instantly.',
  },
  {
    question: 'Are signatures from MyDigitSign as legally valid as HelloSign?',
    answer:
      'Yes. Both tools create electronic signatures compliant with the ESIGN Act (USA) and eIDAS (EU). Legal validity depends on the law, not the tool brand.',
  },
  {
    question: 'Does MyDigitSign store my signed documents?',
    answer:
      'No. Unlike Dropbox Sign, which stores your signed documents in Dropbox cloud storage, MyDigitSign processes everything locally. Nothing is stored on any server. Your signed PDF is returned directly to your browser for download.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function HelloSignAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(99, 102, 241, 0.1)', color: '#4f46e5', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            📦 No Dropbox Account Required
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            The Best Free HelloSign (Dropbox Sign) Alternative in 2026
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            HelloSign is now Dropbox Sign — requiring a Dropbox account and a paid plan. MyDigitSign gives you the same core e-signature capability, free forever, with complete privacy.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: 'var(--color-primary, #4f46e5)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
              Sign PDF Free — No Account →
            </a>
          </div>
        </section>

        <section style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', textAlign: 'center' }}>MyDigitSign vs HelloSign / Dropbox Sign</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', border: '1px solid #e2e8f0', fontWeight: 700 }}>Feature</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: '#4f46e5' }}>MyDigitSign</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: '#64748b' }}>HelloSign / Dropbox Sign</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price', '✅ Free forever', '❌ From $15/month'],
                  ['Account Required', '✅ No account', '❌ Dropbox account required'],
                  ['File Uploads to Server', '✅ Never — 100% local', '❌ Files stored in Dropbox cloud'],
                  ['Sign PDF', '✅ Unlimited', '⚠️ 3 free/month, then paid'],
                  ['Mobile Friendly', '✅ All browsers', '✅ App & browser'],
                  ['Legally Valid', '✅ ESIGN / eIDAS', '✅ ESIGN / eIDAS'],
                  ['Works Offline', '✅ After first load', '❌ Cloud-dependent'],
                ].map(([feature, mds, hs], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>{mds}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center', color: '#64748b' }}>{hs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>Why HelloSign Users Are Moving On</h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            HelloSign was once a beloved independent e-signature tool known for its clean interface and affordable pricing. After Dropbox acquired and rebranded it as &quot;Dropbox Sign,&quot; the free plan was gutted — dropping to just 3 signature requests per month — and a Dropbox account became mandatory.
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            For users who just want to occasionally sign a document, this is a regression. MyDigitSign provides what HelloSign used to offer: a clean, fast, no-friction signing experience with no account and no limits.
          </p>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>HelloSign / Dropbox Sign Pricing in 2026</h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1rem' }}>
            After the Dropbox acquisition, HelloSign&apos;s pricing shifted significantly:
          </p>
          <ul style={{ lineHeight: 2, color: '#334155', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Free Plan:</strong> Limited to 3 document signatures per month. A Dropbox account is required.</li>
            <li><strong>Essentials Plan:</strong> $15/month — unlimited signatures but still cloud-dependent with Dropbox storage.</li>
            <li><strong>Standard Plan:</strong> $25/user/month — adds team features and branding.</li>
            <li><strong>Premium Plan:</strong> Custom enterprise pricing — advanced integrations and API access.</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            <strong>MyDigitSign cost:</strong> $0. Always. No document limits, no account requirement, no Dropbox dependency.
          </p>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>Who Should Use MyDigitSign Instead of HelloSign?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { icon: '💼', title: 'Freelancers', desc: 'Sign client contracts, invoices, and service agreements without paying $15/month for a few signatures.' },
              { icon: '🏠', title: 'Landlords & Tenants', desc: 'Sign lease agreements and rental contracts directly in the browser. No Dropbox account required.' },
              { icon: '📋', title: 'HR Professionals', desc: 'Send offer letters for signature without uploading sensitive employee documents to Dropbox cloud.' },
              { icon: '🤝', title: 'Small Business Owners', desc: 'Handle vendor agreements, NDAs, and purchase orders quickly without a monthly subscription.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: '#0f172a' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>How to Switch from HelloSign to MyDigitSign</h2>
          <ol style={{ lineHeight: 2, color: '#334155', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Download any existing signed PDFs from your Dropbox Sign account to your local device.</li>
            <li>Open <a href="/tools/sign-pdf-online" style={{ color: '#4f46e5' }}>MyDigitSign&apos;s free PDF signer</a> in your browser.</li>
            <li>Draw, type, or upload your signature — takes under 30 seconds.</li>
            <li>Upload the PDF you need to sign. Processing happens entirely in your browser.</li>
            <li>Place your signature, download the clean signed PDF. Done.</li>
          </ol>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            For documents you need to send to others for their signature, export the unsigned PDF and share it with a link to MyDigitSign. Each party can sign their copy independently and send the signed version back to you.
          </p>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#f5f3ff', borderRadius: '12px', border: '1px solid #ddd6fe' }}>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>No Dropbox. No account. Just sign.</h4>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>Get the simple e-signing experience HelloSign used to offer — for free.</p>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: '#4f46e5', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
              Sign PDF Free →
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
              <li><a href="/compare/pandadoc-alternative" style={{ color: '#4f46e5' }}>PandaDoc Alternative →</a></li>
              <li><a href="/compare/signwell-alternative" style={{ color: '#4f46e5' }}>SignWell Alternative →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: '#4f46e5' }}>Are E-Signatures Legal? →</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
