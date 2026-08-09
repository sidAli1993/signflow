import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'SmallPDF Alternative Free — No File Upload, No Limits | MyDigitSign',
  description:
    'Looking for a free SmallPDF alternative? MyDigitSign is a 100% private, browser-based PDF tool. No file uploads, no account, no daily limits — ever.',
  keywords: [
    'smallpdf alternative',
    'smallpdf alternative free',
    'smallpdf no upload alternative',
    'ilovepdf alternative free',
    'free pdf tool no upload',
    'pdf editor free signature',
    'compress pdf free no upload',
    'sign pdf free no account',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/compare/smallpdf-alternative',
  },
  openGraph: {
    title: 'SmallPDF Alternative Free — No File Upload, No Limits | MyDigitSign',
    description:
      'Skip SmallPDF\'s daily limits and server uploads. MyDigitSign processes everything in your browser — 100% private, unlimited, and always free.',
    url: 'https://mydigitsign.com/compare/smallpdf-alternative',
    siteName: 'MyDigitSign',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmallPDF Alternative Free — No File Upload, No Limits',
    description:
      'Skip SmallPDF\'s daily limits and server uploads. MyDigitSign is 100% free, private, and browser-based.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Compare', url: '/compare' },
  { name: 'SmallPDF Alternative', url: '/compare/smallpdf-alternative' },
]);

const faqItems = [
  {
    question: 'Is MyDigitSign a completely free SmallPDF alternative?',
    answer:
      'Yes. MyDigitSign is 100% free with no daily task limits, no paid plans, and no account required. SmallPDF restricts free users to 1-2 tasks per hour and requires a subscription for unlimited access.',
  },
  {
    question: 'Does MyDigitSign upload my files to a server like SmallPDF does?',
    answer:
      'No. Unlike SmallPDF, MyDigitSign processes all PDF and image operations entirely inside your web browser using WebAssembly. Your files never leave your device. This makes it the safest option for sensitive documents like contracts, tax forms, and medical records.',
  },
  {
    question: 'What PDF tools does MyDigitSign offer as a SmallPDF replacement?',
    answer:
      'MyDigitSign covers the most common use cases: sign PDF, compress PDF, merge PDF, rotate PDF, protect PDF with password, edit and fill PDF forms, draw signature online, type signature in cursive, and sign image files. All tools are free and unlimited.',
  },
  {
    question: 'Are electronic signatures from MyDigitSign legally valid?',
    answer:
      'Yes. Electronic signatures created with MyDigitSign are legally recognized under the ESIGN Act (USA), UETA, eIDAS (EU), and similar laws in over 180 countries for most business agreements.',
  },
  {
    question: 'Can I use MyDigitSign on my phone as a SmallPDF alternative?',
    answer:
      'Yes. MyDigitSign is fully responsive and works on all modern mobile browsers including Safari on iPhone and Chrome on Android. No app download is needed.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function SmallPdfAlternativePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#059669', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            🔒 100% Private · Zero File Uploads · Unlimited Use
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            The Best Free SmallPDF Alternative in 2026
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Tired of SmallPDF&apos;s daily task limits and server uploads? Switch to MyDigitSign — a 100% browser-based PDF suite that never touches your files.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/tools/sign-pdf-online"
              style={{ display: 'inline-block', background: 'var(--color-primary, #4f46e5)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}
            >
              Sign PDF Free →
            </a>
            <a
              href="/tools"
              style={{ display: 'inline-block', background: '#f1f5f9', color: '#1e293b', padding: '0.75rem 1.5rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none' }}
            >
              Browse All Tools →
            </a>
          </div>
        </section>

        {/* Comparison Table */}
        <section style={{ maxWidth: '900px', margin: '2rem auto', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1.25rem', textAlign: 'center' }}>
            MyDigitSign vs SmallPDF — Side by Side
          </h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f8fafc' }}>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'left', border: '1px solid #e2e8f0', fontWeight: 700 }}>Feature</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: '#4f46e5' }}>MyDigitSign</th>
                  <th style={{ padding: '0.85rem 1rem', textAlign: 'center', border: '1px solid #e2e8f0', fontWeight: 700, color: '#64748b' }}>SmallPDF (Free Plan)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Price', '✅ Free forever', '⚠️ Freemium — limited free tasks'],
                  ['Daily Limits', '✅ Unlimited tasks', '❌ 1–2 tasks/hour on free plan'],
                  ['Account Required', '✅ No account needed', '⚠️ Required for most features'],
                  ['File Uploads to Server', '✅ Never — 100% local', '❌ Yes — files sent to cloud servers'],
                  ['Sign PDF', '✅ Yes', '✅ Yes (limited free)'],
                  ['Compress PDF', '✅ Yes, unlimited', '⚠️ Limited on free plan'],
                  ['Merge PDF', '✅ Yes, unlimited', '⚠️ Limited on free plan'],
                  ['Rotate PDF', '✅ Yes, unlimited', '⚠️ Limited on free plan'],
                  ['Password Protect PDF', '✅ Yes, unlimited', '⚠️ Paid plan required'],
                  ['Works Offline', '✅ After first load', '❌ Cloud-dependent'],
                  ['Mobile Friendly', '✅ All browsers', '✅ App & browser'],
                  ['Watermarks on Output', '✅ Never', '⚠️ Added on free plan'],
                ].map(([feature, mds, sp], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center' }}>{mds}</td>
                    <td style={{ padding: '0.75rem 1rem', border: '1px solid #e2e8f0', textAlign: 'center', color: '#64748b' }}>{sp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Rich Content Section */}
        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>

          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Why People Are Switching from SmallPDF
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            SmallPDF is a well-known PDF tool, but it comes with real frustrations. Their free plan caps users at just one or two tasks per hour. Need to sign a few contracts in a single sitting? You&apos;ll hit the wall fast. Worse, every file you process gets uploaded to SmallPDF&apos;s cloud servers — a real concern when handling sensitive legal and financial documents.
          </p>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            MyDigitSign was built as a direct answer to this problem. It does everything SmallPDF does, but without the limits, without the account requirements, and without uploading your files anywhere.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            The Privacy Problem with Cloud-Based PDF Tools
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            When you upload a PDF to SmallPDF (or similar tools like iLovePDF, PDF2Go, or Sejda), that file travels over the internet to their servers. It sits in their infrastructure, gets processed, and only then is returned to you. For most general documents, this is inconvenient. For sensitive files — NDAs, employment contracts, financial statements, patient records — it&apos;s a real risk.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            MyDigitSign uses <strong>100% client-side processing</strong>. PDF operations run directly inside your browser using WebAssembly and JavaScript. Your file is never transmitted. There is no server receiving your document. This architecture makes it <strong>mathematically impossible</strong> for MyDigitSign to expose your files in a data breach — because we never have them.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            No Daily Limits. No Waiting. No Subscriptions.
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            SmallPDF&apos;s free plan lets you complete one task every hour. If you need to sign three contracts, compress two reports, and merge a PDF in the same afternoon, you&apos;re either waiting around or paying for a pro plan.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            With MyDigitSign, there are no limits of any kind. Sign a hundred PDFs in a row. Compress every file in your folder. Merge as many documents as you need. Because everything runs locally in your browser, we have no server costs to recover — and no reason to limit you.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Tools Included — Everything SmallPDF Charges For, Free
          </h3>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong><a href="/tools/sign-pdf-online" style={{ color: '#4f46e5' }}>Sign PDF Online</a>:</strong> Draw, type, or upload your signature. Place it anywhere on any PDF page.</li>
            <li><strong><a href="/tools/compress-pdf-online" style={{ color: '#4f46e5' }}>Compress PDF</a>:</strong> Reduce file size by 30–75% without losing text sharpness.</li>
            <li><strong><a href="/tools/merge-pdf-online" style={{ color: '#4f46e5' }}>Merge PDF</a>:</strong> Combine multiple PDFs into a single document with drag-and-drop page ordering.</li>
            <li><strong><a href="/tools/rotate-pdf-online" style={{ color: '#4f46e5' }}>Rotate PDF</a>:</strong> Fix sideways or upside-down pages in seconds.</li>
            <li><strong><a href="/tools/protect-pdf-online" style={{ color: '#4f46e5' }}>Password Protect PDF</a>:</strong> Add AES-256 encryption to sensitive documents.</li>
            <li><strong><a href="/tools/edit-pdf-online" style={{ color: '#4f46e5' }}>Edit & Fill PDF</a>:</strong> Add text, signatures, dates, and annotations to any PDF form.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Is MyDigitSign Legally Compliant?
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Electronic signatures created with MyDigitSign are fully valid under the <strong>ESIGN Act</strong> (United States), <strong>UETA</strong> (Uniform Electronic Transactions Act), and <strong>eIDAS</strong> (European Union) for the vast majority of business and personal agreements — contracts, NDAs, lease agreements, invoices, freelance agreements, and more.
          </p>

          <div style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', background: '#f0fdf4', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
            <h4 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>
              Ready to ditch SmallPDF's limits?
            </h4>
            <p style={{ color: '#475569', marginBottom: '1.5rem' }}>
              No account. No daily limits. No file uploads. Start for free right now.
            </p>
            <a
              href="/tools/sign-pdf-online"
              style={{ display: 'inline-block', background: '#059669', color: 'white', padding: '0.75rem 1.75rem', borderRadius: '8px', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}
            >
              Try MyDigitSign Free →
            </a>
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '3rem', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h3>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '10px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem', color: '#0f172a' }}>{faq.question}</h4>
              <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>{faq.answer}</p>
            </div>
          ))}

          {/* Internal Links */}
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
              <li><a href="/compare/hellosign-alternative" style={{ color: '#4f46e5' }}>HelloSign Alternative →</a></li>
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
