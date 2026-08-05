import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'SignWell Alternative Free — Sign Documents Without Signing Up | MyDigitSign',
  description:
    'Need a free SignWell alternative? MyDigitSign lets you sign PDFs instantly with no account, no monthly limits, and 100% browser-based privacy.',
  keywords: [
    'signwell alternative',
    'signwell free alternative',
    'signwell competitor',
    'free document signing signwell',
    'sign pdf without signwell',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/compare/signwell-alternative',
  },
  openGraph: {
    title: 'SignWell Alternative Free — Sign Documents Without Signing Up',
    description:
      'SignWell restricts free users to 3 documents/month. MyDigitSign is unlimited, free, and never requires an account or file uploads.',
    url: 'https://mydigitsign.com/compare/signwell-alternative',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Compare', url: '/compare' },
  { name: 'SignWell Alternative', url: '/compare/signwell-alternative' },
]);

const faqItems = [
  {
    question: 'How does MyDigitSign compare to SignWell\'s free plan?',
    answer:
      'SignWell\'s free plan limits users to 3 completed documents per month and requires account registration. MyDigitSign has no document limits, no account requirements, and is completely free forever.',
  },
  {
    question: 'Do I need to create an account to sign a PDF with MyDigitSign?',
    answer:
      'No. Unlike SignWell, which requires you to register an account, MyDigitSign works directly in your browser with zero registration. Open the tool, sign your document, download.',
  },
  {
    question: 'Is MyDigitSign safe for sensitive documents?',
    answer:
      'Yes. MyDigitSign processes all documents locally in your browser — nothing is ever uploaded to a server. SignWell sends your documents to their cloud for processing. For confidential contracts and NDAs, MyDigitSign is the more private choice.',
  },
  {
    question: 'Are signatures from MyDigitSign legally accepted?',
    answer:
      'Yes. Electronic signatures are legally binding under the ESIGN Act (USA) and eIDAS (EU) regardless of which compliant tool is used. MyDigitSign creates fully valid electronic signatures.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function SignWellAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(20, 184, 166, 0.1)', color: '#0d9488', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            ✍️ Unlimited Signing · No Account · No Limits
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            The Best Free SignWell Alternative in 2026
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            SignWell caps free users at 3 documents per month. MyDigitSign has no caps, no account, and no file uploads — just fast, private, unlimited PDF signing.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: 'var(--color-primary, #4f46e5)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
              Sign PDF Free — Unlimited →
            </a>
          </div>
        </section>

        <section style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', textAlign: 'center' }}>MyDigitSign vs SignWell</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', border: '1px solid #e2e8f0', fontWeight: 700 }}>Feature</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: '#4f46e5' }}>MyDigitSign</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: '#64748b' }}>SignWell</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price', '✅ Free forever', '⚠️ Freemium — limited free'],
                  ['Monthly Document Limit', '✅ Unlimited', '❌ 3 documents/month (free)'],
                  ['Account Required', '✅ No account', '❌ Account required'],
                  ['File Uploads to Server', '✅ Never — 100% local', '❌ Files sent to cloud'],
                  ['Sign PDF', '✅ Unlimited', '✅ Yes (limited free)'],
                  ['Compress / Merge PDF', '✅ Included free', '❌ Not available'],
                  ['Mobile Friendly', '✅ All browsers', '✅ Browser & app'],
                  ['Legally Valid', '✅ ESIGN / eIDAS', '✅ ESIGN / eIDAS'],
                ].map(([feature, mds, sw], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>{mds}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center', color: '#64748b' }}>{sw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>The Case for a Simpler Signing Tool</h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            SignWell is a solid e-signature platform, but its free plan is genuinely restrictive. Three documents per month is not enough for most active users. And even for those three documents, you need to register an account before you can sign anything.
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            MyDigitSign takes a different philosophy: no friction. Open the page, create your signature, sign your document, and download. No account required, no limits imposed, and no file ever uploaded to our servers.
          </p>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>SignWell Pricing in 2026</h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1rem' }}>
            SignWell operates on a freemium model with meaningful limitations on its free tier:
          </p>
          <ul style={{ lineHeight: 2, color: '#334155', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Free Plan:</strong> Limited to 3 completed documents per month. Account registration required. No templates.</li>
            <li><strong>Personal Plan:</strong> $8/month — unlimited documents for 1 user, basic templates, SMS reminders.</li>
            <li><strong>Business Plan:</strong> $24/month — up to 3 users, custom branding, team management.</li>
            <li><strong>Business Pro Plan:</strong> $60/month — unlimited users, Zapier integrations, and audit trails.</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            <strong>MyDigitSign cost:</strong> $0/month. Unlimited documents, no account needed, no document limits — ever.
          </p>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>Who Should Switch from SignWell to MyDigitSign?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { icon: '📄', title: 'Occasional Signers', desc: 'If you sign more than 3 documents a month, SignWell\'s free plan cuts you off. MyDigitSign has zero limits.' },
              { icon: '🔐', title: 'Privacy-First Users', desc: 'SignWell uploads your documents to their servers. MyDigitSign processes everything locally — your files never leave your device.' },
              { icon: '⚡', title: 'No-Signup Users', desc: 'SignWell requires account registration even for free use. With MyDigitSign, open the page and sign — zero registration.' },
              { icon: '💰', title: 'Budget-Conscious Teams', desc: 'Why pay $24/month for a team plan when MyDigitSign handles all common signing scenarios for free?' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#f0fdfa', border: '1px solid #99f6e4', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: '#0f172a' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>MyDigitSign vs SignWell — Privacy Model</h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            SignWell, like most cloud-based e-signature tools, processes and stores your documents on their servers. That means your lease agreements, client contracts, and employment documents reside in their cloud — you&apos;re trusting a third party with your confidential information.
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            MyDigitSign&apos;s architecture eliminates this risk entirely. When you open a PDF in MyDigitSign, it loads directly into your browser using Mozilla PDF.js. Your signature is created in canvas memory, embedded into the document using pdf-lib, and the signed PDF is returned to your browser&apos;s download manager. Not a single byte of your document travels to any server we operate.
          </p>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#f0fdfa', borderRadius: '12px', border: '1px solid #99f6e4' }}>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>Unlimited signing. Zero friction.</h4>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>No account. No limits. Sign your first PDF in under 60 seconds.</p>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: '#0d9488', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}>
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
              <li><a href="/compare/hellosign-alternative" style={{ color: '#4f46e5' }}>HelloSign Alternative →</a></li>
              <li><a href="/compare/adobe-sign-alternative" style={{ color: '#4f46e5' }}>Adobe Sign Alternative →</a></li>
              <li><a href="/compare/pandadoc-alternative" style={{ color: '#4f46e5' }}>PandaDoc Alternative →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: '#4f46e5' }}>Are E-Signatures Legal? →</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
