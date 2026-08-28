import type { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import HomeClient from '../../HomeClient';
import styles from '../../page.module.css';
import { Shield, Zap, Lock, FileCheck, Users, Star } from 'lucide-react';
import { getSoftwareAppSchema, getBreadcrumbSchema, getHowToSchema } from '@/lib/seo-schemas';

export const metadata: Metadata = {
  title: 'Sign Image Online Free — Sign PNG & JPG Files | MyDigitSign',
  description:
    'Edit and sign images online for free. Upload any PNG, JPG, or JPEG file locally in your browser, overlay your signature, and download.',
  keywords: [
    'sign png online',
    'sign image online',
    'sign jpg online',
    'signature on photo online',
    'sign jpeg free',
    'insert signature in png',
    'online image signer'
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/tools/sign-image-online',
  },
  openGraph: {
    title: 'Sign Image Online Free — Sign PNG & JPG Files | MyDigitSign',
    description:
      'Edit and sign images online for free. Upload any PNG, JPG, or JPEG file locally in your browser, overlay your signature, and download.',
    url: 'https://mydigitsign.com/tools/sign-image-online',
    siteName: 'MyDigitSign',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MyDigitSign — Sign Image Online Free',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Image Online Free — Sign PNG & JPG Files | MyDigitSign',
    description:
      'Edit and sign images online for free. Upload any PNG, JPG, or JPEG file locally in your browser, overlay your signature, and download.',
    creator: '@mydigitsign',
    images: ['/og-image.png'],
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Sign Image Online', url: '/tools/sign-image-online' },
]);

const howToSchema = getHowToSchema({
  name: 'How to Sign an Image Online Free (PNG & JPG)',
  description: 'Upload a PNG or JPG image, overlay your digital signature, and download the signed image — 100% in your browser with no server uploads.',
  url: 'https://mydigitsign.com/tools/sign-image-online',
  steps: [
    {
      name: 'Create Your Signature',
      text: 'Type your name in cursive, draw freehand with your mouse, or upload an existing signature image. Click Adopt to confirm.',
      url: 'https://mydigitsign.com/tools/sign-image-online',
    },
    {
      name: 'Upload Your Image Document',
      text: 'Drag and drop your PNG, JPG, or JPEG file into the browser uploader. The file is processed locally — nothing is uploaded to any server.',
      url: 'https://mydigitsign.com/tools/sign-image-online',
    },
    {
      name: 'Position Signature Overlay',
      text: 'Drag the signature overlay to the correct position on your image. Use the resize handle to scale it to fit naturally.',
      url: 'https://mydigitsign.com/tools/sign-image-online',
    },
    {
      name: 'Download Signed Image',
      text: 'Click Download to save your signed image directly to your device. The result is a standard PNG with your signature embedded.',
      url: 'https://mydigitsign.com/tools/sign-image-online',
    },
  ],
});

const softwareSchema = getSoftwareAppSchema({
  name: 'MyDigitSign Sign Image Tool',
  description: 'Sign PNG and JPG images online for free. Place digital signatures on photos and scanned documents directly in your browser — no server uploads.',
  url: 'https://mydigitsign.com/tools/sign-image-online',
  applicationCategory: 'BusinessApplication',
});

export default function SignImageTool() {
  return (
    <div className={styles.appWrapper}>
      <Navbar />

      <section className={styles.seoHero} aria-label="About Sign Image Online Tool">
        <div className={styles.seoHeroInner}>
          <div className={styles.seoHeroBadge}>
            <Star size={14} aria-hidden="true" />
            <span>Free Image Signer · PNG &amp; JPG Support · 100% Private</span>
          </div>
          <h1 className={styles.seoHeroTitle}>
            Sign Image Online <span className={styles.seoHeroGradient}>Free PNG &amp; JPG Signer</span>
          </h1>
          <p className={styles.seoHeroDesc}>
            Need to <strong>sign png online</strong> or place an electronic signature overlay on a JPG photo? Our browser-based image editor allows you to place signature overlays, resize them, and drag them to the perfect spot. Your photos are processed completely locally — they are never uploaded to any server.
          </p>

          <ul className={styles.seoTrustPills} role="list" aria-label="Key features">
            <li><Shield size={14} aria-hidden="true" /><span>Local Image Processing</span></li>
            <li><Lock size={14} aria-hidden="true" /><span>Zero Server Uploads</span></li>
            <li><FileCheck size={14} aria-hidden="true" /><span>Supports PNG, JPG, JPEG</span></li>
            <li><Zap size={14} aria-hidden="true" /><span>Transparent Signature Placement</span></li>
            <li><Users size={14} aria-hidden="true" /><span>No Watermarks</span></li>
          </ul>
        </div>
      </section>

      <script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        id="software-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      <HomeClient
        initialTab="type"
        titleOverride="Sign Your <span>Image Document</span>"
        descriptionOverride="Create or adopt your digital signature. Once adopted, you can upload the PNG or JPG image document you need to sign."
      />

      <section className={styles.seoExplainer} aria-label="How to sign png online">
        <div className={styles.seoExplainerInner}>
          <h2 className={styles.seoExplainerTitle}>
            How to Sign a PNG or JPG Image Online
          </h2>
          <div className={styles.seoStepsGrid}>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">1</div>
              <h3>Create Your Signature</h3>
              <p>
                Type your name in cursive, draw freehand with your mouse, or upload a photo of your handwritten signature. Click Adopt to save.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">2</div>
              <h3>Upload Image Document</h3>
              <p>
                Drag and drop your PNG, JPG, or JPEG file directly into the local browser uploader.
              </p>
            </article>
            <article className={styles.seoStep}>
              <div className={styles.seoStepNum} aria-hidden="true">3</div>
              <h3>Overlay &amp; Download</h3>
              <p>
                Place the signature overlay on the target line, resize it as needed, and download the finished signed image file instantly.
              </p>
            </article>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem' }}>
              Why Sign Images Locally? (Client-Side Privacy)
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              Many scanned contracts, receipts, identification documents, and commercial invoices are saved as PNG or JPG images. Uploading these sensitive documents to external cloud databases poses a major privacy risk for individuals and businesses alike.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, marginBottom: '2rem' }}>
              MyDigitSign processes all image manipulations, canvas rendering, and signature overlays **entirely inside your web browser**. Your photos are never sent to external servers or cloud storage. This serverless approach guarantees that your private contact details, VINs, addresses, and document contents remain completely confidential.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>🖼️ Supported Image Formats</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, marginBottom: 0 }}>
                Our tool supports all major image formats, including <strong>PNG</strong> (best for screenshots and vector overlays), <strong>JPG / JPEG</strong> (ideal for mobile photos of documents), and standard WebP formats.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#0f172a', marginBottom: '0.75rem' }}>📄 Convert Image to PDF for Security</h3>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, marginBottom: 0 }}>
                If you are signing formal contracts, NDAs, or leases, we recommend converting your JPG to PDF first. PDFs lock text formatting and support cryptographic seals. Try our <a href="/tools/jpg-to-pdf" style={{ color: 'var(--color-primary, #4f46e5)', fontWeight: 500 }}>JPG to PDF converter</a> before signing.
              </p>
            </div>
          </div>

          <div className={styles.seoCompare} style={{ marginTop: '2.5rem' }}>
            <h2 className={styles.seoCompareTitle}>Is Signing a Photo or Scanned Image Legally Binding?</h2>
            <p className={styles.seoCompareDesc}>
              Yes. Under the US federal <strong>ESIGN Act (2000)</strong>, state-level <strong>UETA</strong> laws, and the European Union's <strong>eIDAS</strong> regulations, electronic signatures placed on images are legally binding for the vast majority of personal and business transactions.
            </p>
            <p className={styles.seoCompareDesc} style={{ marginTop: '1rem' }}>
              A signature does not need to be printed and scanned to carry legal weight. As long as you have the clear intent to sign and the signature is logically associated with the file, the document is valid in court. Review our guide on <a href="/blog/are-electronic-signatures-legally-binding">are electronic signatures legally binding</a> for a complete legal breakdown.
            </p>
          </div>

          <div className={styles.seoFaq} style={{ marginTop: '3rem' }}>
            <h2 className={styles.seoFaqTitle}>Frequently Asked Questions</h2>
            <div className={styles.seoFaqGrid}>
              <div className={styles.faqItem}>
                <h3>How do I sign a PNG image online?</h3>
                <p>Simply choose your signature method (draw with your mouse, type your name, or upload a scan), click Adopt, drag and drop your PNG image file into the uploader, place your signature, and click Download. The entire process takes under a minute.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Is my signed photo secure?</h3>
                <p>Yes. MyDigitSign is a client-side serverless application. Your images, signatures, and personal details are processed locally in your browser's temporary memory and are never uploaded to our servers, keeping them completely safe from data breaches.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign JPG files for free without a watermark?</h3>
                <p>Yes, all signature tools on MyDigitSign are 100% free. We do not insert watermarks, limit document downloads, or require you to create an account or provide an email address.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Does MyDigitSign support transparent signature overlays?</h3>
                <p>Yes. When you draw or type a signature, our tool generates it as a transparent vector graphic. When placed on your PNG or JPG document, it will lay naturally over lines and grid boxes without any white background boxes.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>Can I sign images on iPhone or Android?</h3>
                <p>Yes. Open Safari or Chrome on your mobile device, go to our Sign Image tool, upload your photo, draw your signature with your finger, and download. Read our <a href="/blog/how-to-sign-pdf-on-iphone-android-free">how to sign PDFs on iPhone & Android guide</a> for touch tips.</p>
              </div>
              <div className={styles.faqItem}>
                <h3>What is the difference between signing an image and a PDF?</h3>
                <p>Images (PNG/JPG) are easily editable, which makes them less secure for formal commercial transactions. PDFs can support advanced cryptographic certificates and lock document integrity. For formal contracts, use our <a href="/tools/sign-pdf-online">Free Sign PDF online tool</a>.</p>
              </div>
            </div>
          </div>

          {/* Internal links — Phase 2 internal linking strategy */}
          <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(128,128,128,0.15)' }}>
            <p style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.5rem' }}>Related tools &amp; guides:</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.875rem' }}>
              <li><a href="/tools/draw-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Draw Signature Online →</a></li>
              <li><a href="/tools/type-signature-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Type Signature Online →</a></li>
              <li><a href="/tools/sign-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF Online Free →</a></li>
              <li><a href="/tools/sign-word-document" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign Word Document →</a></li>
              <li><a href="/tools/jpg-to-pdf" style={{ color: 'var(--color-primary, #4f46e5)' }}>Convert JPG to PDF →</a></li>
              <li><a href="/tools/pdf-to-jpg" style={{ color: 'var(--color-primary, #4f46e5)' }}>Convert PDF to JPG →</a></li>
              <li><a href="/tools/edit-pdf-online" style={{ color: 'var(--color-primary, #4f46e5)' }}>Edit PDF Fields Online →</a></li>
              <li><a href="/blog/how-to-sign-nda-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>How to Sign an NDA Online →</a></li>
              <li><a href="/blog/create-digital-signature-online-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>Create Digital Signature Free →</a></li>
              <li><a href="/blog/how-to-sign-pdf-on-iphone-android-free" style={{ color: 'var(--color-primary, #4f46e5)' }}>Sign PDF on iPhone &amp; Android →</a></li>
              <li><a href="/blog/free-digital-signature-certificate" style={{ color: 'var(--color-primary, #4f46e5)' }}>Free Digital Signature Certificate →</a></li>
              <li><a href="/blog/ultimate-guide-signing-pdf-securely" style={{ color: 'var(--color-primary, #4f46e5)' }}>Guide: Signing PDFs Securely →</a></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
