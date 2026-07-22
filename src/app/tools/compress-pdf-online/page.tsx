import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import CompressPdfClient from '@/components/tools/CompressPdfClient';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Compress PDF Online Free — Reduce PDF File Size | MyDigitSign',
  description:
    'Compress PDF files online for free. Shrink PDF file size for email attachments without losing document sharpness. 100% private client-side processing.',
  keywords: [
    'compress pdf online free',
    'reduce pdf file size',
    'shrink pdf online',
    'pdf compressor free no upload',
    'compress pdf for email',
    'small pdf size reducer',
    'mydigitsign compress pdf',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/compress-pdf-online',
  },
  openGraph: {
    title: 'Compress PDF Online Free — Reduce PDF File Size | MyDigitSign',
    description:
      'Compress PDF files online for free. Shrink PDF file size for email attachments without losing document sharpness.',
    url: 'https://mydigitsign.com/tools/compress-pdf-online',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Compress PDF Online', url: '/tools/compress-pdf-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Free Online PDF Compressor',
  description: 'Reduce PDF file sizes instantly inside your web browser without uploading files.',
  url: 'https://mydigitsign.com/tools/compress-pdf-online',
  applicationCategory: 'BusinessApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Compress PDF Files Online for Free',
  description: 'Shrink large PDF documents to send via email attachments or web forms.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Select Your PDF File',
      text: 'Choose the large PDF document you want to shrink.',
      url: 'https://mydigitsign.com/tools/compress-pdf-online',
    },
    {
      name: 'Optimize Compression',
      text: 'Our browser engine optimizes vector fonts and image streams locally.',
      url: 'https://mydigitsign.com/tools/compress-pdf-online',
    },
    {
      name: 'Download Compressed PDF',
      text: 'Save your compressed, lightweight PDF file instantly to your device.',
      url: 'https://mydigitsign.com/tools/compress-pdf-online',
    },
  ],
});

const faqItems = [
  {
    question: 'Will compressing my PDF blur the text or images?',
    answer: 'No. Our compressor intelligent algorithm preserves crisp vector text fonts while optimizing uncompressed stream objects.',
  },
  {
    question: 'How much file size reduction can I expect?',
    answer: 'Depending on the original PDF structure and image content, file sizes are typically reduced by 30% to 75%.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function CompressPdfOnlinePage() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className={styles.pageContainer}>
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(234, 88, 12, 0.1)', color: '#ea580c', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            ⚡ Free PDF Compressor • 100% Client-Side Privacy
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Compress PDF Online — Reduce File Size Free
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Shrink heavy PDF documents for email attachments and portal uploads. 100% browser-based with zero file uploads.
          </p>
        </section>

        {/* Client Application Engine Component */}
        <CompressPdfClient />

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            The Complete Guide to Compressing PDF Files Online
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            Large PDF files frequently bounce when emailed or fail during government portal and job application uploads. Compressing your document ensures fast delivery while keeping formatting intact. Traditional compression tools require you to upload your files to external servers, putting your privacy at risk. MyDigitSign compresses PDFs <strong>entirely inside your browser</strong>. This guide will walk you through the process, the underlying technology, and best practices for reducing PDF file sizes.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Understanding PDF File Bloat
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Why do PDF files get so large in the first place? When you scan a document, convert a PowerPoint presentation, or save high-resolution graphics as a PDF, the file retains a massive amount of hidden metadata, uncompressed image streams, and embedded fonts. A single high-quality scanned page can easily exceed 5MB. When compiling multi-page reports or portfolios, file sizes rapidly inflate beyond the strict 10MB or 25MB limits enforced by email providers like Gmail and Outlook.
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Furthermore, government portals, university submission systems, and HR recruiting software notoriously impose strict upload caps (often as low as 2MB). Attempting to submit a bloated PDF often results in frustrating "File Too Large" errors, potentially causing missed deadlines.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            How Client-Side Compression Works
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            The MyDigitSign PDF Compressor utilizes a unique technique called "True Compression Flattening." Unlike basic tools that only remove invisible metadata (which barely impacts the overall file size), our tool actually restructures your document directly in your browser's memory using advanced JavaScript canvas algorithms. 
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Intelligent Rasterization:</strong> The engine renders your heavy vector graphics, unoptimized fonts, and layered components onto an invisible high-fidelity canvas.</li>
            <li><strong>JPEG Optimization:</strong> The canvas is then re-encoded into highly optimized JPEG image streams at the specific quality level you selected (Recommended, High, or Low).</li>
            <li><strong>Reassembly:</strong> A brand new, ultra-lightweight PDF container is generated around these optimized image streams, instantly saving you megabytes of data.</li>
          </ul>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            <strong>Important Trade-off:</strong> Because this process converts complex vectors into optimized flat images, the text within the resulting compressed PDF will no longer be highlightable or searchable. This is the standard trade-off for achieving massive file size reductions locally without relying on expensive server-side processing farms. For most use cases—like sending signed contracts, scanned invoices, or ID copies—this flattening is actually preferred as it prevents further editing of the document.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Step-by-Step: How to Reduce PDF Size
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Shrinking your document is a fast, 3-step process. Here is how you can use our free tool to optimize your files:
          </p>
          <ol style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Upload Your File:</strong> Drag and drop your bloated PDF file into the designated upload zone above. Because the file is processed locally, the "upload" is instantaneous, regardless of your internet connection speed.</li>
            <li><strong>Select a Compression Tier:</strong> Choose the level of optimization you need:
              <ul style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                <li><em>Recommended (Best Balance):</em> Reduces size by roughly 40-50% while maintaining excellent readability. Perfect for standard documents and email attachments.</li>
                <li><em>High Compression (Smallest File):</em> Maximizes size reduction (up to 75%). Best for strict upload limits where visual perfection is less critical.</li>
                <li><em>Low Compression (Max Sharpness):</em> Yields a modest size reduction (~20%) but preserves the highest visual fidelity.</li>
              </ul>
            </li>
            <li><strong>Compress and Download:</strong> Click the "Compress PDF" button. Our browser engine will instantly process the pages and provide a direct download link, along with statistics showing exactly how many megabytes you saved.</li>
          </ol>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Why Privacy Matters During Compression
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            The documents you need to compress most frequently are often the most sensitive: medical records, tax returns, bank statements, and legal contracts. When you use traditional online PDF compressors, you are actively transmitting these highly confidential documents across the internet to an unknown server. 
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Even if a service promises to "delete files after one hour," your data is still vulnerable to interception during transit (man-in-the-middle attacks) or server-side data breaches. MyDigitSign completely eliminates this vector of attack. By bringing the compression algorithm directly to your device via WebAssembly and HTML5 Canvas, your files never leave your hard drive. We don't have access to your data, meaning we can't lose it, sell it, or expose it.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Pro Tips for Managing Compressed PDFs
          </h3>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Always Keep Originals:</strong> Treat the compressed PDF as a "delivery copy." Because the compression flattens the file, you should always retain your original, high-resolution source document in your personal archives.</li>
            <li><strong>Combine Before Compressing:</strong> If you are sending multiple files, use our <a href="/tools/merge-pdf-online" style={{color: 'var(--color-primary)'}}>Free PDF Merger</a> first. Combining five documents and compressing the final output is much faster and more efficient than compressing five files individually.</li>
            <li><strong>Check Readability:</strong> If you use the "High Compression" setting on a document with very small text (like fine print on a contract), always open the compressed result to verify that the text remains legible before sending it to a client or agency.</li>
            <li><strong>Add Security Post-Compression:</strong> If you are emailing a compressed document containing financial data, consider running it through our <a href="/tools/protect-pdf-online" style={{color: 'var(--color-primary)'}}>PDF Password Protector</a> before attaching it to your email.</li>
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
