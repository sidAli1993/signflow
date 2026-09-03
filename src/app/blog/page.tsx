import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { Metadata } from 'next';
import styles from './blog.module.css';

export const metadata: Metadata = {
  title: 'Digital Signature Blog — PDF Signing Guides & Tips',
  description: 'Guides on digital signatures, how to sign PDFs online, e-signature legality, and document security — from the MyDigitSign team.',
  keywords: [
    "digital signature guide",
    "how to sign pdf online",
    "e-signature legal tips",
    "pdf signing tutorial",
    "electronic signature compliance"
  ],
  alternates: {
    canonical: 'https://mydigitsign.com/blog',
  },
  openGraph: {
    title: 'Digital Signature Blog — PDF Signing Guides & Tips',
    description: 'Guides on digital signatures, how to sign PDFs online, e-signature legality, and document security — from the MyDigitSign team.',
    url: 'https://mydigitsign.com/blog',
  },
};

const posts = [
  {
    title: 'When is a W-9 NOT Required? (Exemptions & Independent Contractor Rules)',
    slug: 'when-is-a-w9-not-required',
    excerpt: 'Learn exactly when a W-9 is not required, exceptions for corporate payments, credit card payments, and when you can legally refuse to sign one.',
    date: 'August 30, 2026',
  },
  {
    title: 'How to Fill Out a W9 for an LLC (Single Member, Partnership, & Corporate)',
    slug: 'how-to-fill-out-w9-for-llc',
    excerpt: 'Learn exactly how to fill out a W-9 for an LLC. Discover what a disregarded entity on a W-9 is, how to sign as a sole proprietor, and get single-member LLC examples.',
    date: 'August 30, 2026',
  },
  {
    title: 'What is a Disregarded Entity for Tax Purposes? (2026 Complete Guide)',
    slug: 'what-is-a-disregarded-entity',
    excerpt: 'Everything you need to know about what a disregarded entity is, how it affects your taxes, the pros and cons of single-member LLCs, and how to sign legal documents.',
    date: 'August 30, 2026',
  },
  {
    title: 'W-9 Exempt Payee Codes & How to Write a Form W-9 Request Letter',
    slug: 'w9-exempt-payee-codes-request-letter',
    excerpt: 'Master IRS Form W-9 exempt payee codes, learn exactly when to use an exemption payee code, and get free templates for a formal W-9 request letter.',
    date: 'August 30, 2026',
  },
  {
    title: 'Are eSignatures Legal in Georgia? (Regulatory Mandates 2026)',
    slug: 'esignature-in-georgia',
    excerpt: 'A comprehensive 3000+ word guide on the legality of electronic signatures in the US State of Georgia and the Country of Georgia. Discover ESIGN, UETA, eIDAS, and 2026 regulatory mandates.',
    date: 'August 28, 2026',
  },
  {
    title: 'How to Add a Signature in Microsoft Word (3 Easy Methods — 2026)',
    slug: 'how-to-add-signature-in-word',
    excerpt: 'Learn 3 easy methods to add a signature in Microsoft Word, including built-in signature lines, drawing, and converting to PDF for secure online signing.',
    date: 'July 27, 2026',
  },
  {
    title: 'What Is a Signature Line? (And How to Add One in Word & PDF)',
    slug: 'what-is-a-signature-line',
    excerpt: 'Discover the legal meaning of a signature line and exactly how to add one to a Microsoft Word document or a PDF file.',
    date: 'July 27, 2026',
  },
  {
    title: 'How to Ask Someone to Sign an NDA (3 Email Templates + Tips)',
    slug: 'how-to-ask-someone-to-sign-nda',
    excerpt: 'Need someone to sign a Non-Disclosure Agreement? Use these 3 professional email templates and our free online signing tools.',
    date: 'July 27, 2026',
  },
  {
    title: 'Can You Notarize Your Own Signature? (The Honest Legal Answer)',
    slug: 'can-you-notarize-your-own-signature',
    excerpt: 'Find out the strict legal rules regarding self-notarization, the penalties for attempting it, and what your actual alternatives are.',
    date: 'July 27, 2026',
  },
  {
    title: 'How to Sign a PDF on iPhone, iPad & Android for Free',
    slug: 'how-to-sign-pdf-on-iphone-android-free',
    excerpt: 'Learn how to easily complete an e signature pdf online or offline on any mobile device using built-in Markup or private client-side browser tools.',
    date: 'July 10, 2026',
  },
  {
    title: 'How to Edit and Sign PDF Online & Sign a Document Online Free',
    slug: 'how-to-sign-a-document-online-free-pdf-editor',
    excerpt: 'Learn how to edit and sign PDF documents online, place a secure sign on document online, and sign a document online for free.',
    date: 'July 6, 2026',
  },
  {
    title: 'How to Get a Free Digital Signature Certificate in 2026',
    slug: 'free-digital-signature-certificate',
    excerpt: 'Step-by-step guide to generating a free digital signature certificate and securely signing your documents without paying any fees.',
    date: 'July 4, 2026',
  },
  {
    title: 'How to Create a Digital Signature Online for Free in 2026',
    slug: 'create-digital-signature-online-free',
    excerpt: 'Learn the fastest, most secure way to create a digital signature online without paying for expensive software subscriptions.',
    date: 'June 25, 2026',
  },
  {
    title: 'Are Electronic Signatures Legally Binding & Acceptable?',
    slug: 'are-electronic-signatures-legally-binding',
    excerpt: 'A comprehensive guide explaining if an electronic signature is legal, which frameworks validate them, and if electronic signatures are acceptable in court.',
    date: 'June 20, 2026',
  },
  {
    title: 'The Ultimate Guide to Signing PDFs Securely',
    slug: 'ultimate-guide-signing-pdf-securely',
    excerpt: 'Discover best practices for embedding signatures into PDFs to ensure document integrity and prevent tampering.',
    date: 'June 15, 2026',
  },
  {
    title: 'How to Sign an NDA Online for Free (Legally Binding)',
    slug: 'how-to-sign-nda-online-free',
    excerpt: 'Sign your Non-Disclosure Agreements securely without printing. Learn how to sign NDAs online for free with full legal compliance.',
    date: 'July 15, 2026',
  },
  {
    title: 'How to Fill Out & Sign the Uber Vehicle Inspection Form',
    slug: 'how-to-fill-out-uber-inspection-form',
    excerpt: 'A complete guide for rideshare drivers on how to get the Uber inspection form filled, digitally signed by a mechanic, and submitted fast.',
    date: 'August 8, 2026',
  },
  {
    title: 'Voided Check Example: What It Is & When You Need One',
    slug: 'voided-check-example',
    excerpt: 'Learn what a voided check looks like, why employers and banks ask for one, and how to securely send it online.',
    date: 'August 8, 2026',
  },
  {
    title: 'What Is a Wet Signature? (Wet vs Electronic vs Digital)',
    slug: 'what-is-a-wet-signature',
    excerpt: 'Understand the difference between wet ink signatures and digital signatures, and when you still legally need a physical pen.',
    date: 'August 8, 2026',
  },
  {
    title: 'DocuSign vs MyDigitSign: The Honest 2026 Comparison',
    slug: 'docusign-vs-mydigitsign-honest-review',
    excerpt: 'Comparing pricing, privacy, and envelope limits between DocuSign and the completely free, client-side MyDigitSign platform.',
    date: 'August 8, 2026',
  },
  {
    title: 'Electronic Signature for Small Business: Free Tools',
    slug: 'electronic-signature-for-small-business',
    excerpt: 'How small businesses can adopt electronic signatures to close deals faster without paying expensive monthly software subscriptions.',
    date: 'August 8, 2026',
  },
  {
    title: 'Digital Signature for Freelancers: Protecting Your Contracts',
    slug: 'digital-signature-for-freelancers',
    excerpt: 'A freelancer guide to sending professional contracts and getting paid faster using secure digital signatures.',
    date: 'August 8, 2026',
  },
  {
    title: 'eSignature for Realtors: Secure Real Estate Contracts',
    slug: 'esignature-for-realtors',
    excerpt: 'How real estate agents can securely and legally sign lease agreements and buyer contracts online for free.',
    date: 'August 8, 2026',
  },
  {
    title: 'How to Sign a Lease Agreement Online for Free',
    slug: 'sign-lease-agreement-online-free',
    excerpt: 'Step-by-step instructions for landlords and tenants to safely sign a residential or commercial lease agreement online.',
    date: 'August 8, 2026',
  },
  {
    title: '5 Best SmallPDF Alternatives That Are Completely Free',
    slug: 'best-smallpdf-alternatives-free',
    excerpt: 'Looking to compress, edit, or sign PDFs without SmallPDF\'s daily limits? Try these 5 free, private browser-based alternatives.',
    date: 'August 8, 2026',
  },
  {
    title: 'What Is a Digit Sign? The Complete 2026 Legal & Technical Guide',
    slug: 'what-is-a-digit-sign',
    excerpt: 'A complete breakdown of digital signatures (digit signs), how they work cryptographically, and how to create them free.',
    date: 'August 8, 2026',
  },
  {
    title: 'Where & How to Get a Digital Signature Certificate (DSC Guide)',
    slug: 'where-to-get-digital-signature-certificate',
    excerpt: 'Learn where to get a digital signature certificate (DSC) for free or paid, including OpenSSL and accredited CA options.',
    date: 'August 8, 2026',
  },
  {
    title: 'PDF Editor with Signature: Top 5 Free PDF Signature Tools in 2026',
    slug: 'pdf-editor-with-signature-free',
    excerpt: 'Reviewing the best 5 free PDF editors that support secure digital and electronic signatures without watermarks.',
    date: 'August 8, 2026',
  },
  {
    title: 'Digital Signature Laws by Country: The Ultimate 2026 Global Legal Guide',
    slug: 'digital-signature-laws-by-country',
    excerpt: 'Understand the legal frameworks (ESIGN, UETA, eIDAS) governing electronic and digital signatures globally.',
    date: 'August 8, 2026',
  }
];

export default function BlogIndex() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://mydigitsign.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Blog', 'item': 'https://mydigitsign.com/blog' },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Digital Signature Blog — PDF Signing Guides & Tips',
    'description': 'Guides on digital signatures, how to sign PDFs online, e-signature legality, and document security — from the MyDigitSign team.',
    'url': 'https://mydigitsign.com/blog',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': posts.map((post, i) => ({
        '@type': 'ListItem',
        'position': i + 1,
        'url': `https://mydigitsign.com/blog/${post.slug}`,
        'name': post.title,
      })),
    },
  };

  return (
    <>
      <Navbar />
      <main className={styles.blogContainer}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
        />
        <header className={styles.blogHeader}>
          <h1 className={styles.blogTitle}>The Signature Hub</h1>
          <p className={styles.blogSubtitle}>Insights, guides, and tips for document security.</p>
        </header>

        <div className={styles.postsGrid}>
          {posts.map((post) => (
            <article key={post.slug} className={styles.postCard}>
              <time className={styles.postDate}>{post.date}</time>
              <h2 className={styles.postTitle}>
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className={styles.postExcerpt}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                Read Article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
