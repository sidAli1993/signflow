import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Fill and Sign PDF Online — Free PDF Editor | MyDigitSign',
  description:
    'Fill and sign PDF documents online for free. Add text, signatures, dates, checkmarks, highlights, and annotations directly in your browser.',
  keywords: [
    'edit pdf online',
    'free pdf editor signature',
    'pdf editor free signature',
    'edit and sign pdf',
    'pdf editor online no signup',
    'annotate pdf free',
    'fill and sign pdf',
    'mydigitsign pdf editor',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/edit-pdf-online',
  },
  openGraph: {
    title: 'Fill and Sign PDF Online — Free PDF Editor | MyDigitSign',
    description:
      'Fill and sign PDF documents online for free. Add text, signatures, dates, and annotations directly in your browser. 100% serverless and private.',
    url: 'https://mydigitsign.com/tools/edit-pdf-online',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Edit PDF Online', url: '/tools/edit-pdf-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Free Online PDF Editor',
  description: 'Edit, fill, annotate, and sign PDF documents online with 100% client-side privacy.',
  url: 'https://mydigitsign.com/tools/edit-pdf-online',
  applicationCategory: 'BusinessApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Edit a PDF Online for Free',
  description: 'Add text, fill out forms, add checkmarks, and sign PDFs directly in your web browser.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Open Your PDF File',
      text: 'Select your PDF document. The file is opened locally using client-side WebAssembly.',
      url: 'https://mydigitsign.com/tools/edit-pdf-online',
    },
    {
      name: 'Add Text, Annotations & Signatures',
      text: 'Use the floating graphical toolbar to type text, draw lines, add checkmarks, or place signatures.',
      url: 'https://mydigitsign.com/tools/edit-pdf-online',
    },
    {
      name: 'Export Edited PDF',
      text: 'Click Save & Download to export your clean, updated PDF instantly to your computer or phone.',
      url: 'https://mydigitsign.com/tools/edit-pdf-online',
    },
  ],
});

const faqItems = [
  {
    question: 'Is this PDF editor really 100% free with no limits?',
    answer: 'Yes. MyDigitSign PDF Editor is free forever. There are no document limits, watermarks, or subscription paywalls.',
  },
  {
    question: 'Are my PDF files uploaded to any external server?',
    answer: 'No. All PDF parsing, text editing, and signature rendering happen locally in your web browser memory via client-side JavaScript.',
  },
  {
    question: 'Can I fill out form fields and sign contract PDFs?',
    answer: 'Yes. You can click anywhere on the page to insert text, fill out blank fields, add dates, and place electronic signatures.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function EditPdfOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        {/* Top Header */}
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(37, 99, 235, 0.1)', color: '#2563eb', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            📝 Free PDF Editor & Annotator • 100% Private Client-Side
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Fill and Sign PDF Online — Free PDF Editor
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Add text, dates, checkmarks, redactions, and signatures to any PDF form. No account, no watermarks, no server uploads.
          </p>
        </section>

        {/* Client Application Engine Component */}
        <HomeClient />

        {/* 1,300 Words Rich Content SEO Section */}
        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            Complete Guide to Fill and Sign PDF Online
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            PDF (Portable Document Format) is the global standard for contracts, invoices, application forms, and official documentation. However, editing a PDF file has traditionally required expensive software subscriptions or complex desktop software. MyDigitSign provides a powerful, <strong>100% free web-based PDF editor</strong> that runs inside your browser.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Key Features of Our Free Online PDF Editor
          </h3>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Text Annotation & Type-In:</strong> Click anywhere on a PDF page to type custom text, fill out form fields, or insert dates.</li>
            <li><strong>Electronic Signatures:</strong> Draw your signature with a mouse or touch pen, type a cursive signature, or upload a stamp seal.</li>
            <li><strong>Checkmarks & Symbols:</strong> Easily add checkmarks, crosses, and bullet points to fillable checkboxes.</li>
            <li><strong>Multi-Page Navigation:</strong> Smoothly scroll through multi-page PDFs, jump to specific pages, and view visual page thumbnails.</li>
            <li><strong>Zero File Size Reduction:</strong> Export high-resolution vector PDF files without blurring text or degrading image quality.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            How to Edit and Sign a PDF in 3 Simple Steps
          </h3>
          <ol style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Step 1: Upload Your PDF Document</strong> — Drag and drop your file into the editor box above. The document opens instantly in your browser memory.</li>
            <li><strong>Step 2: Add Text or Signatures</strong> — Select the text tool to type on blank lines or click the Signature tool to place an e-signature overlay.</li>
            <li><strong>Step 3: Download Your Updated PDF</strong> — Click the Download button to save your edited, sign-ready PDF document directly to your device.</li>
          </ol>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Why Client-Side Security Matters for PDF Editing
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1.5rem' }}>
            Unlike traditional PDF tools (such as Smallpdf, iLovePDF, or Adobe Acrobat Web) that require sending your file over the internet to a third-party server, MyDigitSign runs on WebAssembly and client-side JavaScript. Your file stays inside your computer or smartphone at all times. This provides total privacy compliance for GDPR, HIPAA, and corporate security guidelines.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Who Uses the Free PDF Editor?
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Our free PDF editor is used by people across dozens of professions and use cases every day:
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Freelancers &amp; Contractors:</strong> Fill in client name, date, and project details on invoice templates and sign contracts in under 2 minutes — no Adobe Acrobat subscription needed.</li>
            <li><strong>Job Seekers:</strong> Add your signature to digital offer letters, employment agreements, and tax forms (W-4, W-9) without printing anything.</li>
            <li><strong>Renters &amp; Landlords:</strong> Fill out lease agreements, move-in inspection forms, and rental applications digitally. <a href="/tools/sign-pdf-online" style={{color: 'var(--color-primary)'}}>Sign and download in minutes →</a></li>
            <li><strong>Small Business Owners:</strong> Annotate purchase orders, approve vendor contracts, and countersign client agreements. After editing, <a href="/tools/protect-pdf-online" style={{color: 'var(--color-primary)'}}>password-protect the final PDF</a> before emailing.</li>
            <li><strong>Students &amp; Academics:</strong> Complete university application forms, student loan documents, and internship contracts without a printer.</li>
            <li><strong>Healthcare Workers:</strong> Fill and sign consent forms, patient intake documents, and release forms in a HIPAA-friendly, zero-upload environment.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Edit and Sign PDF: What Can You Add?
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            The MyDigitSign PDF editor lets you add the following elements to any PDF page:
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>✏️ Text Boxes:</strong> Click anywhere to type custom text — perfect for filling in blank lines on forms, adding names, dates, addresses, or reference numbers.</li>
            <li><strong>✍️ E-Signatures:</strong> Draw, type in cursive, or upload a signature image. Place on the signature line and resize precisely.</li>
            <li><strong>✅ Checkmarks &amp; Crosses:</strong> Tap checkboxes to mark them. Toggle between ✓ check, ✗ cross, and ○ circle symbols.</li>
            <li><strong>📅 Date Stamps:</strong> Insert today's date automatically or type a custom date in any format.</li>
            <li><strong>🔲 Highlight &amp; Redact:</strong> Highlight text in yellow or apply a black redaction bar to sensitive information before sharing.</li>
            <li><strong>📐 Drawing Tools:</strong> Add freehand annotations, arrows, and underlines for review and markup workflows.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Free PDF Editor vs. Paid Alternatives
          </h3>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: 'rgba(0,0,0,0.04)' }}>
                  <th style={{ padding: '10px', textAlign: 'left', border: '1px solid #e2e8f0' }}>Feature</th>
                  <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>MyDigitSign</th>
                  <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>Adobe Acrobat</th>
                  <th style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>SmallPDF</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>Free to use</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>✅ Always</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>❌ $19.99/mo</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>⚠️ Limited</td></tr>
                <tr><td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>No file upload to server</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>✅ 100% local</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>❌ Cloud upload</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>❌ Cloud upload</td></tr>
                <tr><td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>No account required</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>✅ Yes</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>❌ Required</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>⚠️ Optional</td></tr>
                <tr><td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>No watermarks</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>✅ Always</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>✅ Paid only</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>❌ Free adds watermark</td></tr>
                <tr><td style={{ padding: '10px', border: '1px solid #e2e8f0' }}>E-signature included</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>✅ Yes</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>✅ Paid only</td><td style={{ padding: '10px', textAlign: 'center', border: '1px solid #e2e8f0' }}>⚠️ Limited</td></tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            What to Do After Editing Your PDF
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '0.75rem' }}>
            Once you've filled and signed your PDF, here are the next steps depending on your use case:
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Sending via email:</strong> Large PDFs can bounce. Use our <a href="/tools/compress-pdf-online" style={{color: 'var(--color-primary)'}}>free PDF compressor</a> to reduce the file size before attaching.</li>
            <li><strong>Sharing sensitive documents:</strong> <a href="/tools/protect-pdf-online" style={{color: 'var(--color-primary)'}}>Password-protect your edited PDF</a> so only the intended recipient can open it.</li>
            <li><strong>Combining multiple forms:</strong> Use our <a href="/tools/merge-pdf-online" style={{color: 'var(--color-primary)'}}>PDF merger</a> to combine several completed forms into one submission-ready package.</li>
            <li><strong>Signing after editing:</strong> If you edited the form and need a clean signature now, use our dedicated <a href="/tools/sign-pdf-online" style={{color: 'var(--color-primary)'}}>PDF signing tool</a> for the best experience.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h3>
          {[
            { question: 'Is this PDF editor really 100% free with no limits?', answer: 'Yes. MyDigitSign PDF Editor is free forever. There are no document limits, watermarks, or subscription paywalls. You can edit and sign as many PDFs as you need.' },
            { question: 'Are my PDF files uploaded to any external server?', answer: 'No. All PDF parsing, text editing, and signature rendering happen locally in your web browser memory via client-side JavaScript. Your document never leaves your device.' },
            { question: 'Can I fill out form fields and sign contract PDFs?', answer: 'Yes. You can click anywhere on the page to insert text, fill out blank fields, add dates, and place electronic signatures. Works on both standard PDFs and fillable PDF forms.' },
            { question: 'Can I edit a PDF on my phone?', answer: 'Yes. The MyDigitSign PDF editor is fully responsive. Open mydigitsign.com/tools/edit-pdf-online in your mobile browser (Safari on iPhone, Chrome on Android), upload your PDF, and edit it with touch controls.' },
            { question: 'What is the file size limit?', answer: 'You can edit PDFs up to 50MB. Since processing is done entirely in your browser, there are no server-side upload restrictions. Very large files may take a moment to render depending on your device speed.' },
            { question: 'Can I use this instead of Adobe Acrobat to fill PDF forms?', answer: 'Yes, for the vast majority of everyday tasks — filling out forms, adding signatures, inserting dates, and annotating documents — MyDigitSign is a fully capable free alternative. Unlike Adobe Acrobat, it requires no installation, no subscription, and no account.' },
          ].map((faq, i) => (
            <div key={i} style={{ background: '#f8fafc', padding: '1.25rem', borderRadius: '10px', marginBottom: '1rem', border: '1px solid #e2e8f0' }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.4rem', color: '#0f172a' }}>{faq.question}</h4>
              <p style={{ color: '#475569', margin: 0, fontSize: '0.95rem' }}>{faq.answer}</p>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}

