import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import ProtectPdfClient from '@/components/tools/ProtectPdfClient';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Protect PDF Online Free — Encrypt & Password Protect PDFs | MyDigitSign',
  description:
    'Protect PDF files with password encryption online for free. Prevent unauthorized reading, copying, or printing. 100% private client-side processing.',
  keywords: [
    'protect pdf online free',
    'password protect pdf',
    'encrypt pdf online',
    'pdf protection free no upload',
    'secure pdf file',
    'mydigitsign protect pdf',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/protect-pdf-online',
  },
  openGraph: {
    title: 'Protect PDF Online Free — Encrypt & Password Protect PDFs | MyDigitSign',
    description:
      'Protect PDF files with password encryption online for free. 100% private client-side processing.',
    url: 'https://mydigitsign.com/tools/protect-pdf-online',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Protect PDF Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Protect PDF Online Free — Encrypt & Password Protect PDFs | MyDigitSign',
    description:
      'Protect PDF files with password encryption online for free. 100% private client-side processing.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Protect PDF Online', url: '/tools/protect-pdf-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Free Online PDF Protector',
  description: 'Add password encryption to PDF files directly in your web browser.',
  url: 'https://mydigitsign.com/tools/protect-pdf-online',
  applicationCategory: 'SecurityApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Password Protect a PDF Online',
  description: 'Encrypt your PDF documents with passwords in seconds.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Upload PDF Document',
      text: 'Select the PDF file you want to encrypt.',
      url: 'https://mydigitsign.com/tools/protect-pdf-online',
    },
    {
      name: 'Enter Secure Password',
      text: 'Type a strong password to lock the document.',
      url: 'https://mydigitsign.com/tools/protect-pdf-online',
    },
    {
      name: 'Download Encrypted PDF',
      text: 'Save your password-protected PDF directly to your device.',
      url: 'https://mydigitsign.com/tools/protect-pdf-online',
    },
  ],
});

const faqItems = [
  {
    question: 'Is my password sent to any remote server?',
    answer: 'No. Password encryption is executed locally inside your web browser using WebAssembly. Your password and PDF file never leave your device.',
  },
  {
    question: 'What encryption algorithm is used?',
    answer: 'Standard AES-128 and AES-256 bit encryption compliant with Adobe PDF security standards.',
  },
  {
    question: 'Can I password-protect a PDF on my phone?',
    answer: 'Yes. MyDigitSign works on all modern mobile browsers. Open the page in Safari (iPhone) or Chrome (Android), upload your PDF, set your password, and download the encrypted file directly to your phone.',
  },
  {
    question: 'Can someone bypass the PDF password?',
    answer: 'AES-256 encryption is industry-standard and computationally infeasible to crack with a strong password. Use a mix of letters, numbers, and symbols to maximize security.',
  },
  {
    question: 'Can I remove the password from a protected PDF later?',
    answer: 'Yes. Open the protected PDF in any PDF reader (such as Adobe Acrobat or Chrome), provide the correct password, and save a copy without protection. Then re-upload to MyDigitSign if you want to apply a new password.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function ProtectPdfOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(225, 29, 72, 0.1)', color: '#e11d48', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            🔒 Free PDF Encryption • 100% Client-Side Privacy
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Protect PDF Online — Password Protect PDF Free
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Encrypt sensitive PDF documents with secure passwords. 100% browser-based with zero file uploads.
          </p>
          <p style={{ fontSize: '0.8rem', color: '#94a3b8', marginTop: '0.5rem' }}>Updated: July 25, 2026</p>
        </section>

        {/* Client Application Engine Component */}
        <ProtectPdfClient />

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            The Ultimate Guide to Password Protecting PDF Files
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            Securing confidential business documents, tax filings, legal agreements, and personal IDs with passwords is a non-negotiable step when sharing files via email or cloud storage. While many online services offer to encrypt your PDFs for free, they secretly require you to upload your unencrypted, highly sensitive documents to their centralized servers. MyDigitSign changes the paradigm by utilizing a secure, ephemeral serverless architecture to encrypt your files <strong>in-memory</strong>. This guide explains how to secure your PDFs effectively and why privacy-first encryption matters.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Why Password Protect Your PDFs?
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            In an era of rampant data breaches and sophisticated phishing attacks, sending unencrypted documents containing Personally Identifiable Information (PII) is a massive liability. Whether you are an accountant sending W-2 forms, an attorney sharing a deposition transcript, or simply an individual sending a copy of your passport to a landlord, password protection adds a critical layer of defense.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            When you encrypt a PDF with a strong password, the underlying data streams (text, images, and fonts) are scrambled using advanced cryptographic algorithms. Without the correct decryption key (your password), intercepting the file yields nothing but useless, unreadable binary data.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            How Our Ephemeral Serverless Encryption Works
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            To provide military-grade AES-256 bit encryption without burdening your web browser, MyDigitSign utilizes a strict "zero-disk" serverless architecture. Here is exactly what happens when you click "Protect PDF":
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Secure Transit:</strong> Your unencrypted file and password are transmitted over a secure TLS 1.3 encrypted HTTPS connection to our serverless endpoint.</li>
            <li><strong>In-Memory Processing:</strong> The file is loaded exclusively into volatile RAM memory. It is never written to a hard drive, database, or temporary storage bucket.</li>
            <li><strong>AES-256 Encryption:</strong> A cryptographic engine rapidly encrypts the PDF object streams using the standard AES-256 bit algorithm recognized by Adobe Acrobat and international security agencies.</li>
            <li><strong>Instant Destruction:</strong> The moment the encrypted file is streamed back to your browser, the serverless instance is destroyed. The memory is wiped clean, leaving zero trace of your original document or your password.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Step-by-Step: How to Encrypt Your PDF Online
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Securing your document takes less than 15 seconds. Follow these simple instructions to lock your PDF files for free:
          </p>
          <ol style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Select Your Document:</strong> Use the drag-and-drop zone above or click to browse your computer. Ensure you select the final, flattened version of your PDF.</li>
            <li><strong>Create a Strong Password:</strong> Enter a robust password in the provided input field. A strong password should be at least 12 characters long and include a mix of uppercase letters, lowercase letters, numbers, and special symbols. (Tip: Do not use the same password you use for your email accounts).</li>
            <li><strong>Protect and Download:</strong> Click the "Protect PDF" button. Within seconds, your file is encrypted in-memory and a secure download link will appear. Save the locked file to your device.</li>
          </ol>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Best Practices for Sharing Encrypted PDFs
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Encrypting the file is only half the battle. If you improperly share the password, the encryption becomes useless. Always adhere to these professional security guidelines:
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Never Email the Password with the File:</strong> Sending the encrypted PDF and the password in the exact same email defeats the purpose of encryption. If a hacker intercepts your email, they have both the lock and the key.</li>
            <li><strong>Use Out-of-Band Communication:</strong> Share the password through a different communication channel than the file itself. For example, email the PDF, but send the password via SMS text message, a secure messaging app (like Signal or WhatsApp), or provide it over a phone call.</li>
            <li><strong>Use Password Managers:</strong> If you frequently exchange encrypted documents with a specific client, use a secure password manager to generate and share a unique "client PIN" that you reuse for all files sent to that specific individual.</li>
            <li><strong>Test the File:</strong> Before sending the encrypted document to your recipient, attempt to open it yourself. Ensure the password works and the document is fully locked.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>
            Frequently Asked Questions
          </h3>
          {faqItems.map((faq, i) => (
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
