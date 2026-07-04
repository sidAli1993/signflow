import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import styles from './post.module.css';

// Pre-render all blog posts as static HTML at build time
// This moves them from ƒ (Dynamic) to ○ (Static) — Google gets full HTML
export async function generateStaticParams() {
  return [
    { slug: 'free-digital-signature-certificate' },
    { slug: 'create-digital-signature-online-free' },
    { slug: 'are-electronic-signatures-legally-binding' },
    { slug: 'ultimate-guide-signing-pdf-securely' },
  ];
}

// This would normally come from a CMS or markdown files
const getPostData = (slug: string) => {
  const posts = {
    'free-digital-signature-certificate': {
      title: 'How to Get a Free Digital Signature Certificate in 2026',
      date: 'July 4, 2026',
      author: 'MyDigitSign Team',
      content: `
        <p>If you've been asked to provide a secure signature online, you might be looking for a <strong>free digital signature certificate</strong>. Many enterprise tools charge hefty monthly fees just to generate one, but it doesn't have to be that way.</p>
        
        <h2>What is a Digital Signature Certificate?</h2>
        <p>A digital signature certificate acts as a digital "fingerprint" or identity for a person or organization. It cryptographically binds an identity to a signature, ensuring that a signed document hasn't been tampered with after signing.</p>
        
        <h2>How to Generate Your Free Digital Sign</h2>
        <p>With tools like MyDigitSign, you can instantly apply a secure <strong>digit sign</strong> to your PDFs without registering for an account. Here is how:</p>
        <ol>
          <li><strong>Upload Your Document:</strong> Your PDF is loaded securely into your local browser. It never leaves your device.</li>
          <li><strong>Create Your Signature:</strong> Draw your signature, type it, or upload a scanned image.</li>
          <li><strong>Apply and Download:</strong> Once placed, download your newly signed file.</li>
        </ol>
        <p>This streamlined process means you don't need a bulky enterprise software suite to handle simple, day-to-day document signing needs.</p>
      `
    },
    'create-digital-signature-online-free': {
      title: 'How to Create a Digital Signature Online for Free in 2026',
      date: 'June 25, 2026',
      author: 'MyDigitSign Team',
      content: `
        <p>In today's fast-paced digital world, printing, signing, and scanning documents is a thing of the past. If you're wondering <strong>how to create a digital signature online for free</strong>, you've come to the right place.</p>
        
        <h2>Why Use an Online Digital Signature?</h2>
        <p>Electronic signatures save time, money, and trees. Whether you are signing a freelance contract, a lease agreement, or an NDA, using a tool like MyDigitSign ensures your documents are processed instantly and securely.</p>
        
        <h2>3 Steps to Create Your Free Digital Signature</h2>
        <ol>
          <li><strong>Draw or Type:</strong> Use your mouse, trackpad, or touchscreen to draw your signature. Alternatively, type your name and choose a cursive font.</li>
          <li><strong>Upload Your PDF:</strong> Drag and drop the document you need to sign securely into your browser.</li>
          <li><strong>Place and Save:</strong> Drag your newly created signature onto the signature line, resize it, and download the finished PDF.</li>
        </ol>

        <h2>Is it safe?</h2>
        <p>Absolutely. Tools like MyDigitSign operate entirely in your local browser. Your sensitive documents never touch our servers, guaranteeing 100% privacy and security.</p>
      `
    },
    'are-electronic-signatures-legally-binding': {
      title: 'Are Electronic Signatures Legally Binding?',
      date: 'June 20, 2026',
      author: 'MyDigitSign Legal',
      content: `
        <p>One of the most common questions we receive is: <em>Are electronic signatures legally binding?</em> The short answer is yes.</p>
        
        <h2>The ESIGN Act and UETA</h2>
        <p>In the United States, the Electronic Signatures in Global and National Commerce (ESIGN) Act of 2000 and the Uniform Electronic Transactions Act (UETA) establish that electronic records and signatures carry the same weight and legal effect as traditional paper documents and handwritten signatures.</p>

        <h2>What makes an e-signature valid?</h2>
        <ul>
          <li><strong>Intent to sign:</strong> The signer must demonstrate clear intent to sign the agreement.</li>
          <li><strong>Consent to do business electronically:</strong> All parties must agree to conduct the transaction electronically.</li>
          <li><strong>Association of signature with the record:</strong> The system used to capture the transaction must keep an associated record that reflects the process by which the signature was created.</li>
        </ul>

        <h2>When to use paper instead</h2>
        <p>While 99% of business transactions can be done electronically, certain documents like wills, codicils, and certain court documents still require wet-ink signatures and notarization in some jurisdictions.</p>
      `
    },
    'ultimate-guide-signing-pdf-securely': {
      title: 'The Ultimate Guide to Signing PDFs Securely',
      date: 'June 15, 2026',
      author: 'MyDigitSign Security',
      content: `
        <p>PDFs are the standard for document sharing, but ensuring they are signed securely is critical for protecting your business and personal data.</p>
        
        <h2>Beware of Server-Side Processing</h2>
        <p>Many online PDF signers require you to upload your sensitive tax documents, NDAs, and contracts to their servers. This introduces a massive security risk. If their servers are breached, your data is exposed.</p>

        <h2>Client-Side Signing is the Future</h2>
        <p>Modern applications like <strong>MyDigitSign</strong> use client-side rendering. This means the PDF is loaded and signed entirely within the memory of your own web browser. No data is transmitted over the internet.</p>

        <h2>Best Practices</h2>
        <ul>
          <li>Always verify the identity of the person you are sending the document to.</li>
          <li>Never upload sensitive documents to free tools that process PDFs on their backend servers.</li>
          <li>Keep a secure backup of all signed agreements.</li>
        </ul>
      `
    }
  };
  
  return posts[slug as keyof typeof posts] || null;
};

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostData(resolvedParams.slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  const plainTextDescription = post.content
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .substring(0, 155) + '...';
  
  return {
    title: post.title,
    description: plainTextDescription,
    alternates: {
      canonical: `/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: post.title,
      description: plainTextDescription,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `https://mydigitsign.com/blog/${resolvedParams.slug}`,
    }
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = getPostData(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Schema.org JSON-LD for Articles
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "datePublished": new Date(post.date).toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": "MyDigitSign",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mydigitsign.com/icon.svg"
      }
    }
  };

  // BreadcrumbList for this blog post
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://mydigitsign.com',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': 'https://mydigitsign.com/blog',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': post.title,
        'item': `https://mydigitsign.com/blog/${resolvedParams.slug}`,
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className={styles.postContainer}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>{post.title}</h1>
            <div className={styles.articleMeta}>
              <span>By {post.author}</span>
              <span>•</span>
              <time>{post.date}</time>
            </div>
          </header>
          <div 
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </article>
      </main>
      <Footer />
    </>
  );
}
