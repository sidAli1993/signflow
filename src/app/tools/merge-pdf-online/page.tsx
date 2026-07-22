import type { Metadata } from 'next';
import Script from 'next/script';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import MergePdfClient from '@/components/tools/MergePdfClient';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Merge PDF Online Free — Combine PDF Files Client-Side | MyDigitSign',
  description:
    'Merge multiple PDF files into one clean document online for free. Visual page drag-and-drop reordering. 100% private client-side browser processing.',
  keywords: [
    'merge pdf online free',
    'combine pdf files',
    'join pdf online',
    'pdf merger free no upload',
    'combine pdfs client side',
    'merge multiple pdfs into one',
    'mydigitsign merge pdf',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/merge-pdf-online',
  },
  openGraph: {
    title: 'Merge PDF Online Free — Combine PDF Files Client-Side | MyDigitSign',
    description:
      'Merge multiple PDF files into one clean document online for free. Visual page drag-and-drop reordering.',
    url: 'https://mydigitsign.com/tools/merge-pdf-online',
    siteName: 'MyDigitSign',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Merge PDF Online', url: '/tools/merge-pdf-online' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Free Online PDF Merger',
  description: 'Combine multiple PDF files into a single document instantly inside your browser.',
  url: 'https://mydigitsign.com/tools/merge-pdf-online',
  applicationCategory: 'BusinessApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Merge PDF Files Online for Free',
  description: 'Combine multiple PDF documents into a single organized file in seconds.',
  totalTime: 'PT1M',
  steps: [
    {
      name: 'Select PDF Files',
      text: 'Choose two or more PDF files from your computer or phone to merge.',
      url: 'https://mydigitsign.com/tools/merge-pdf-online',
    },
    {
      name: 'Reorder Pages Visually',
      text: 'Drag and drop page thumbnails to arrange document order exactly how you want.',
      url: 'https://mydigitsign.com/tools/merge-pdf-online',
    },
    {
      name: 'Download Merged PDF',
      text: 'Click Merge & Download to save your single combined PDF document instantly.',
      url: 'https://mydigitsign.com/tools/merge-pdf-online',
    },
  ],
});

const faqItems = [
  {
    question: 'How many PDF files can I combine at once?',
    answer: 'You can merge as many PDF files as you need. Because the merger operates in your browser memory, there are no artificial file limits.',
  },
  {
    question: 'Is it safe to merge confidential documents using this tool?',
    answer: 'Yes. MyDigitSign processes files 100% locally in your web browser. Your files are never uploaded to any remote server.',
  },
  {
    question: 'Does merging PDFs reduce visual quality or fonts?',
    answer: 'No. Our merger retains vector text fonts, high-res images, and embedded layouts with 100% fidelity.',
  },
];

const faqSchema = getFAQSchema(faqItems);

export default function MergePdfOnlinePage() {
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
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#059669', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            🧩 Free Visual PDF Merger • 100% Client-Side Privacy
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Merge PDF Files Online — Fast, Free & Private
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Combine multiple PDF files into one organized document. Drag and drop to reorder pages. No server uploads.
          </p>
        </section>

        {/* Client Application Engine Component */}
        <MergePdfClient />

        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>
            The Ultimate Guide to Merging PDF Files Online
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: '1.05rem', color: '#334155', marginBottom: '1.5rem' }}>
            Combining multiple invoices, contract annexes, project reports, or scanned receipts into a single cohesive PDF file is a standard daily task for professionals, students, and business owners. Traditional PDF mergers upload your sensitive documents to distant cloud servers, creating potential privacy risks. MyDigitSign solves this by merging files <strong>100% in your browser</strong>. This comprehensive guide covers everything you need to know about merging PDFs online for free, securely, and efficiently.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Why Use MyDigitSign Online PDF Merger?
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            The Portable Document Format (PDF) was designed to ensure that documents look identical on every screen. However, this robust formatting makes PDFs notoriously difficult to edit, combine, or split without specialized, often expensive desktop software like Adobe Acrobat. Many web-based tools offer free PDF merging, but they require you to upload your files to their servers. This means your private legal agreements, financial statements, and medical records are temporarily stored on third-party hardware. 
          </p>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            MyDigitSign takes a revolutionary approach. By leveraging the latest WebAssembly and JavaScript technologies, our tool processes all your files locally in your computer's RAM. The moment you close the browser tab, the files are gone. It provides the performance and privacy of desktop software with the convenience of a website.
          </p>

          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Visual Drag-and-Drop Reordering:</strong> Drag page thumbnails to order pages exactly how you want before merging. You have full control over the sequence of the final document.</li>
            <li><strong>Lightning-Fast Browser Engine:</strong> Because there are no file uploads or downloads to a remote server, merging files happens in milliseconds, regardless of your internet connection speed.</li>
            <li><strong>100% Confidentiality Guarantee:</strong> Your documents never leave your computer or smartphone, making this the only truly safe option for confidential documents.</li>
            <li><strong>No Watermarks & Unlimited Use:</strong> Merge as many documents as you need, as often as you need, without any hidden fees, subscription locks, or annoying watermarks stamped onto your pages.</li>
            <li><strong>Cross-Platform Compatibility:</strong> Combine PDF files seamlessly on Windows, macOS, Linux, iOS, and Android using your preferred web browser.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Step-by-Step: How to Combine PDF Files Like a Pro
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            Whether you're compiling a comprehensive portfolio, assembling a complex legal packet, or simply organizing your digital filing cabinet, our tool makes the process incredibly straightforward. Follow these simple steps to merge multiple PDFs into one:
          </p>
          <ol style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Gather Your Files:</strong> Ensure all the PDF files you want to merge are saved in an accessible folder on your device. Having them in one place speeds up the selection process.</li>
            <li><strong>Select or Drag-and-Drop:</strong> Use the interactive upload zone above. You can click to open a file browser and select multiple files simultaneously, or simply drag and drop the files directly from your desktop into the dotted area.</li>
            <li><strong>Review the Order:</strong> Once loaded, you will see visual representations of your files. Use the intuitive drag-and-drop interface to rearrange the files. The file at the top or left will appear first in the merged document.</li>
            <li><strong>Merge and Download:</strong> When you are satisfied with the sequence, click the "Merge PDF" button. Within moments, your browser will generate the combined file and automatically trigger a download to your device.</li>
          </ol>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Common Use Cases for Merging PDFs
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            There are countless scenarios where combining PDF files becomes necessary. Here are a few examples of how professionals across various industries utilize our free tool:
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Legal & Real Estate:</strong> Consolidating contracts, addendums, signature pages, and supporting evidence into a single, cohesive legal packet for easy distribution and court filing.</li>
            <li><strong>Finance & Accounting:</strong> Merging monthly bank statements, scanned receipts, invoices, and expense reports into a single chronological document for tax preparation or auditing.</li>
            <li><strong>Education & Academia:</strong> Combining individual chapter files, lecture slides, research papers, and assignments into a single study guide or comprehensive thesis document.</li>
            <li><strong>Human Resources:</strong> Assembling employee onboarding packets that include offer letters, benefits information, and signed company policies.</li>
            <li><strong>Creative Professionals:</strong> Creating seamless digital portfolios by merging individual design proofs, resumes, and cover letters for prospective clients or employers.</li>
          </ul>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '1.75rem', marginBottom: '0.5rem' }}>
            Pro Tips for Managing Merged PDFs
          </h3>
          <p style={{ lineHeight: 1.7, color: '#475569', marginBottom: '1rem' }}>
            To get the most out of your digital documents, consider these expert tips when merging files:
          </p>
          <ul style={{ lineHeight: 1.8, color: '#475569', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
            <li><strong>Standardize Page Sizes:</strong> While our tool handles varying page sizes gracefully, for the most professional appearance, try to ensure all source documents use the same standard format (like A4 or US Letter) before merging.</li>
            <li><strong>Optimize File Size:</strong> If you merge dozens of high-resolution scanned documents, the resulting file might be quite large. Consider using our <a href="/tools/compress-pdf-online" style={{color: 'var(--color-primary)'}}>Free PDF Compressor</a> after merging to reduce the file size for easier emailing.</li>
            <li><strong>Consistent Naming Conventions:</strong> Before uploading, name your files logically (e.g., `01-Cover.pdf`, `02-Content.pdf`). This makes it easier to verify the order before hitting the merge button.</li>
            <li><strong>Secure Sensitive Data:</strong> If the merged document contains confidential information, use our <a href="/tools/protect-pdf-online" style={{color: 'var(--color-primary)'}}>PDF Password Protector</a> to encrypt the final file before sharing it.</li>
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
