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
    title: 'How to Sign a Document Online & Use an Online PDF Editor Signature',
    slug: 'how-to-sign-a-document-online-free-pdf-editor',
    excerpt: 'Learn how to sign a document online for free and place an electronic signature using an online PDF editor signature tool.',
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
    title: 'Are Electronic Signatures Legally Binding?',
    slug: 'are-electronic-signatures-legally-binding',
    excerpt: 'A comprehensive guide to ESIGN and UETA acts, explaining when and how electronic signatures hold up in court.',
    date: 'June 20, 2026',
  },
  {
    title: 'The Ultimate Guide to Signing PDFs Securely',
    slug: 'ultimate-guide-signing-pdf-securely',
    excerpt: 'Discover best practices for embedding signatures into PDFs to ensure document integrity and prevent tampering.',
    date: 'June 15, 2026',
  }
];

export default function BlogIndex() {
  return (
    <>
      <Navbar />
      <main className={styles.blogContainer}>
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
