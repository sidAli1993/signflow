import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import ConvertPdfToBlackAndWhiteClient from '@/components/tools/ConvertPdfToBlackAndWhiteClient';
import { getSoftwareAppSchema, getHowToSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo-schemas';
import styles from '../../static-page.module.css';

export const metadata: Metadata = {
  title: 'Convert Color PDF to Black and White Online Free | MyDigitSign',
  description:
    'Convert PDF to grayscale instantly. Change your color PDF to black and white online for free. No file uploads to external servers. 100% secure client-side conversion.',
  keywords: [
    'convert color pdf to black and white',
    'grayscale file',
    'create black and white pdf',
    'convert pdf to grayscale',
    'pdf to black and white',
    'change pdf to black and white',
    'change pdf to grayscale',
    'convert pdf to black and white',
    'black pdf',
    'how to make a pdf black and white',
    'pdf colour to black and white',
    'how to turn a pdf black and white',
    'save pdf as black and white',
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/convert-pdf-to-black-and-white',
  },
  openGraph: {
    title: 'Convert Color PDF to Black and White Online Free',
    description:
      'Convert your color PDFs to grayscale directly in your browser. Fast, free, and completely secure.',
    url: 'https://mydigitsign.com/tools/convert-pdf-to-black-and-white',
    siteName: 'MyDigitSign',
    locale: 'en_US',
    type: 'website',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Tools', url: '/tools' },
  { name: 'Convert PDF to Black and White', url: '/tools/convert-pdf-to-black-and-white' },
]);

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign PDF to Black and White Converter',
  description: 'Convert color PDFs to grayscale securely in your web browser. No server uploads.',
  url: 'https://mydigitsign.com/tools/convert-pdf-to-black-and-white',
  applicationCategory: 'UtilitiesApplication',
});

const howToSchema = getHowToSchema({
  name: 'How to Make a PDF Black and White Online Free',
  description: 'Easily change a color PDF to a black and white (grayscale) document directly in your browser.',
  totalTime: 'PT1M',
  steps: [
    { name: 'Upload Your Color PDF', text: 'Select your PDF document. The file is processed locally on your device for total privacy.', url: 'https://mydigitsign.com/tools/convert-pdf-to-black-and-white' },
    { name: 'Convert to Grayscale', text: 'Click the convert button. The tool automatically extracts each page and applies a grayscale filter.', url: 'https://mydigitsign.com/tools/convert-pdf-to-black-and-white' },
    { name: 'Download the Black and White PDF', text: 'Download your new, flattened grayscale PDF file instantly.', url: 'https://mydigitsign.com/tools/convert-pdf-to-black-and-white' },
  ],
});

const faqItems = [
  { question: 'Is it free to convert a PDF to black and white?', answer: 'Yes! MyDigitSign provides this tool completely free of charge. There are no watermarks or hidden fees.' },
  { question: 'How do you turn a PDF into black and white securely?', answer: 'Our tool runs completely within your web browser (client-side processing). Your sensitive PDF files are never uploaded to our servers or any third-party cloud. The grayscale conversion happens using your own devices processing power.' },
  { question: 'Does converting to grayscale reduce the PDF file size?', answer: 'It can! Converting complex color images into grayscale often reduces the amount of data required, potentially compressing the final PDF file size. This makes it easier to attach to emails.' },
  { question: 'What does "save PDF as black and white" do to text?', answer: 'The tool converts the entire page—both images and text—into a flattened grayscale image format. This means your text will appear crisp and black/gray, but it will no longer be selectable or editable.' },
];

const faqSchema = getFAQSchema(faqItems);

export default function ConvertPdfToBlackAndWhitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Navbar />

      <main className={styles.pageContainer}>
        {/* Hero */}
        <section style={{ textAlign: 'center', padding: '2.5rem 1rem 1.5rem', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'inline-block', padding: '0.35rem 1rem', background: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5', borderRadius: '9999px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            ⬛ Free · Client-Side · Grayscale Converter
          </div>
          <h1 className={styles.title} style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Convert Color PDF to Black and White
          </h1>
          <p className={styles.subtitle} style={{ fontSize: '1.1rem', color: '#64748b' }}>
            Instantly turn your color PDF into a grayscale document. 100% private in your browser.
          </p>
        </section>

        {/* Tool Area */}
        <section style={{ maxWidth: '900px', margin: '2rem auto 3rem', padding: '0 1rem' }}>
          <ConvertPdfToBlackAndWhiteClient />
        </section>

        {/* SEO Content */}
        <section className={styles.contentSection} style={{ maxWidth: '900px', margin: '3rem auto 4rem', padding: '0 1rem' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1rem' }}>How to Make a PDF Black and White</h2>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            Whether you need to print a document on a monochrome printer to save expensive color ink, or you want to standardize a report's appearance, converting a <strong>color PDF to black and white</strong> (also known as a grayscale file) is a quick and effective solution. Our tool simplifies this process by allowing you to easily change a PDF to grayscale directly within your web browser.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Total Privacy with Client-Side Conversion</h3>
          <p style={{ lineHeight: 1.7, color: '#334155', marginBottom: '1.5rem' }}>
            When dealing with legal contracts, financial records, or medical forms, privacy is paramount. Unlike other online tools that require you to upload your files to remote servers, MyDigitSign uses modern WebAssembly technology. Your PDF is processed locally on your device. When you click to <strong>create a black and white PDF</strong>, the conversion happens in your browser's memory, guaranteeing that your data is never intercepted or stored externally.
          </p>

          <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginTop: '2rem', marginBottom: '1rem' }}>Frequently Asked Questions</h3>
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
