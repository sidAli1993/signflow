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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why PandaDoc's Sales-Heavy System Might Be Overkill for Your Business
          </h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            PandaDoc is widely marketed as a document automation tool. It is packed with features like customizable proposal builders, direct CRM integrations, real-time activity feeds, and catalog/payment processors. 
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            While these features are helpful for large, outbound sales departments that need to track precisely when a lead opens a quote, they are a massive distraction and cost center for general business use. If you are an individual, small team, or freelancer who just wants to sign a PDF, create a clean e-signature, or fill out a form, PandaDoc's user onboarding is slow, complex, and expensive.
          </p>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            <strong>MyDigitSign</strong> offers a fast, local-first alternative. No subscription plans, no user seats, and no forced registration. Just a clean browser interface that lets you complete your document signing in under a minute.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>
            1. Pricing: The $19/User Seat Catch
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            PandaDoc's pricing tiers in 2026 are heavily gated. If you want more than basic visual signing, you are pushed into their subscription model:
          </p>
          <ul style={{ lineHeight: 2, color: '#334155', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Free eSign Plan:</strong> Unlimited signatures, but document templates and form field editing are completely locked. Requires register/log in.</li>
            <li><strong>Essentials Plan:</strong> $19/user/month (billed annually). Adds the drag-and-drop document builder and template libraries.</li>
            <li><strong>Business Plan:</strong> $49/user/month (billed annually). Adds CRM sync (Salesforce, HubSpot) and custom branding.</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1.5rem' }}>
            If you need 3 team members to have access, you will pay at least **$684 per year** on the Essentials plan, or **$1,764 per year** on the Business plan. MyDigitSign offers unlimited signing, form filling, merging, and compression for **$0/month** for your entire team.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>
            2. Cloud Data Storage vs. Browser-Based Local Processing
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1.5rem' }}>
            When you sign a PDF with PandaDoc, your file is uploaded and processed on their cloud servers. While PandaDoc implements enterprise security standards, having your sensitive contracts, financial agreements, and employee records stored on a remote server introduces risk:
          </p>
          <ul style={{ lineHeight: 2, color: '#334155', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>Security Risk:</strong> Any centralized cloud storage is a target for malicious hackers.</li>
            <li><strong>Regulatory Compliance:</strong> Certain industries (such as healthcare and legal) have strict rules regarding where data is stored. Processing contracts in the cloud can violate data residency laws.</li>
            <li><strong>Data Ownership:</strong> If you cancel your subscription, accessing your historical signed documents on PandaDoc can become difficult.</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1.5rem' }}>
            <strong>MyDigitSign is completely client-side.</strong> When you upload a PDF to MyDigitSign, the file is processed entirely in your browser's WebAssembly sandbox. It is never uploaded to our servers. Once you click download, the signed PDF is saved directly to your local computer, and the browser memory is cleared. **No data is stored, no files are cached, and zero server uploads are performed.**
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '2.5rem', marginBottom: '1rem' }}>
            3. Audience Match: Who Benefits More from MyDigitSign?
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { icon: '💼', title: 'Freelancers & Consultants', desc: 'Sign client contracts, SOWs, and invoices instantly without complex onboarding or contract tracking tools.' },
              { icon: '🏡', title: 'Landlords & Property Managers', desc: 'Get residential or commercial lease agreements signed free. Skip expensive monthly payments for simple leasing.' },
              { icon: '📝', title: 'Accountants & Law Firms', desc: 'Maintain complete data residency and client confidentiality by processing financial forms 100% locally.' },
              { icon: '🔒', title: 'Privacy-Conscious Individuals', desc: 'Sign personal agreements, letters, and forms securely. Never upload your ID or check scans to the cloud.' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '10px', padding: '1.25rem' }}>
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
                <li>100% Free with no daily signing limits</li>
                <li>Zero server uploads (processed in browser)</li>
                <li>No account or log in required</li>
                <li>Includes PDF editor, merger, and compressor</li>
                <li>HIPAA & GDPR compliant by design</li>
              </ul>
            </div>
            <div style={{ background: '#fffbeb', padding: '1.5rem', borderRadius: '12px', border: '1px solid #fde68a' }}>
              <h4 style={{ margin: '0 0 1rem 0', color: '#b45309', fontWeight: 700 }}>PandaDoc Pros</h4>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', lineHeight: 1.8, color: '#78350f' }}>
                <li>Interactive document/proposal editor</li>
                <li>Payment gateway integration (Stripe)</li>
                <li>CRM integrations (Salesforce, HubSpot)</li>
                <li>Document open and view tracking analytics</li>
                <li>Audit trails for complex compliance</li>
              </ul>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2.5rem 2rem', background: '#fff9db', borderRadius: '16px', border: '1px solid #ffe066' }}>
            <h4 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', color: '#0f172a' }}>Looking for a free, simple PandaDoc alternative?</h4>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.05rem' }}>Get your documents signed and compiled locally without monthly fees or server uploads.</p>
            <a href="/tools/sign-pdf-online" style={{ display: 'inline-block', background: '#f59f00', color: 'white', padding: '0.85rem 2rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', boxShadow: '0 4px 6px rgba(245,159,0,0.2)' }}>
              ✍️ Sign Document Free
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
              <li><a href="/compare/hellosign-alternative" style={{ color: '#4f46e5' }}>HelloSign Alternative →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: '#4f46e5' }}>Sign PDF Free →</a></li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
