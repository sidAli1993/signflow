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
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why HelloSign (Dropbox Sign) Users Are Migrating to Local-First Platforms
          </h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            HelloSign was once one of the most popular independent e-signature tools on the market. It was celebrated for its clean, non-bloated user interface, simple setup, and highly affordable price point. 
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            However, after Dropbox acquired HelloSign and rebranded it as **Dropbox Sign**, the direction of the product shifted. The free tier was heavily restricted—capping users at just 3 document signature requests per month. A Dropbox account became mandatory, forcing users into the Dropbox ecosystem and setting up background syncing that automatically copies documents onto the cloud.
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            For freelancers, landlords, and individual users who just need to sign occasional client contracts, lease agreements, or invoices, these changes introduced unnecessary hurdles. **MyDigitSign** restores the original promise of early HelloSign: a lightweight, friction-free, 100% free document signing experience with no accounts, no software dependencies, and no daily limits.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>
            1. Pricing Breakdown: Dropbox Sign vs. MyDigitSign
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Following the corporate rebranding, Dropbox Sign structure became heavily commercialized:
          </p>
          <ul style={{ lineHeight: 2, color: '#334155', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Free Tier:</strong> Max 3 signatures per month. Gated behind a mandatory account creation.</li>
            <li><strong>Essentials Plan:</strong> $15/month (billed annually). Allows unlimited signing for 1 user, with basic PDF templates.</li>
            <li><strong>Standard Plan:</strong> $25/user/month (billed annually). Includes team management, custom branding, and usage reports.</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1.5rem' }}>
            If you run a small business with 3 team members, Dropbox Sign will cost you **$900 per year** just to sign documents. MyDigitSign delivers the same core e-signature capabilities—plus PDF merge, editing, and compression—for **$0/month** for your entire team.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>
            2. The Security & Data Sovereignty Argument: Dropbox Cloud Sync vs. Local Sandbox
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1.5rem' }}>
            Dropbox's business model revolves around cloud storage. When you sign a document on Dropbox Sign, your PDF is stored on their remote servers and synced with your Dropbox drive. While convenient for storage, this introduces several security vulnerabilities:
          </p>
          <ul style={{ lineHeight: 2, color: '#334155', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Hack Target:</strong> Cloud databases holding billions of customer records are constant targets for ransomware and data exfiltration.</li>
            <li><strong>Regulatory Compliance:</strong> GDPR, HIPAA, and CCPA require strict knowledge of where client data is located. Sending contract data to third-party cloud servers requires complex business agreements.</li>
            <li><strong>Client Trust:</strong> Clients are increasingly hesitant to have their financial details or NDAs stored on a third-party server.</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1.5rem' }}>
            <strong>MyDigitSign bypasses the cloud entirely.</strong> Our system uses client-side JavaScript to render and compile PDFs. When you select a document to sign, the process occurs locally inside your browser's sandboxed memory. **We do not have databases storing your signed files, and our servers never see your documents.** This is the ultimate compliance and security model: what is never uploaded can never be leaked.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>
            3. Who Benefits Most from Switching to MyDigitSign?
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { icon: '💼', title: 'Freelancers & Consultants', desc: 'Sign client contracts, NDAs, and project proposals without subscription fees or monthly signature caps.' },
              { icon: '🏠', title: 'Landlords & Property Managers', desc: 'Sign rental leases and lease renewal forms instantly. No Dropbox account or cloud syncing required.' },
              { icon: '📋', title: 'HR & Operations teams', desc: 'Send employment offer letters and vendor agreements free of charge, keeping sensitive data locally protected.' },
              { icon: '🤝', title: 'Startups & Founders', desc: 'Get initial funding agreements and partnership documents signed quickly without administrative bloat.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#f3e8ff', border: '1px solid #e9d5ff', borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', color: '#0f172a' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#475569', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>
            Pros and Cons Comparison
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '2rem 0' }}>
            <div style={{ background: '#f0fdf4', padding: '1.5rem', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#166534', fontWeight: 700 }}>MyDigitSign Pros</h4>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8, color: '#14532d' }}>
                <li>100% Free with no daily signature caps</li>
                <li>No account or registration required</li>
                <li>Zero server uploads (processed in browser)</li>
                <li>Includes PDF merger, compressor, and editor</li>
                <li>Works offline after initial page load</li>
              </ul>
            </div>
            <div style={{ background: '#faf5ff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e9d5ff' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#6b21a8', fontWeight: 700 }}>Dropbox Sign Pros</h4>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8, color: '#581c87' }}>
                <li>Direct integration with Dropbox files</li>
                <li>Native cloud document storage</li>
                <li>Signature templates for standard forms</li>
                <li>API support for custom apps</li>
                <li>Audit trails for complex compliance</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem 2rem', background: '#faf5ff', borderRadius: '16px', border: '1px solid #e9d5ff' }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#581c87' }}>Switch to a lightweight HelloSign alternative</h4>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Experience the freedom of 100% private, client-side, unlimited document signing in your browser.</p>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: '#7c3aed', color: 'white', padding: '0.85rem 2rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 6px rgba(124,58,237,0.2)' }}>
              ✍️ Sign PDF Free Now
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
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '0.5rem' }}>Related tools &amp; comparisons:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/sign-pdf-online" style={{ color: '#4f46e5' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/edit-pdf-online" style={{ color: '#4f46e5' }}>Edit PDF Fields →</a></li>
              <li><a href="/tools/draw-signature-online" style={{ color: '#4f46e5' }}>Draw Signature →</a></li>
              <li><a href="/tools/type-signature-online" style={{ color: '#4f46e5' }}>Type Signature →</a></li>
              <li><a href="/tools/sign-image-online" style={{ color: '#4f46e5' }}>Sign Image →</a></li>
              <li><a href="/tools/jpg-to-pdf" style={{ color: '#4f46e5' }}>JPG to PDF →</a></li>
              <li><a href="/tools/compress-pdf-online" style={{ color: '#4f46e5' }}>Compress PDF Free →</a></li>
              <li><a href="/compare/docusign-alternative" style={{ color: '#4f46e5' }}>DocuSign Alternative →</a></li>
              <li><a href="/compare/adobe-sign-alternative" style={{ color: '#4f46e5' }}>Adobe Sign Alternative →</a></li>
              <li><a href="/compare/smallpdf-alternative" style={{ color: '#4f46e5' }}>SmallPDF Alternative →</a></li>
              <li><a href="/compare/pandadoc-alternative" style={{ color: '#4f46e5' }}>PandaDoc Alternative →</a></li>
              <li><a href="/compare/signwell-alternative" style={{ color: '#4f46e5' }}>SignWell Alternative →</a></li>
              <li><a href="/blog/are-electronic-signatures-legally-binding" style={{ color: '#4f46e5' }}>Are E-Signatures Legally Binding? →</a></li>
              <li><a href="/blog/free-digital-signature-certificate" style={{ color: '#4f46e5' }}>Free Digital Signature Certificate →</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
