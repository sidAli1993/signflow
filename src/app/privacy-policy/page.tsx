import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { AdBanner } from '@/components/ui';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: "Privacy Policy - Secure Signing",
  description: "Read the Privacy Policy of MyDigitSign. Learn how we ensure complete security by processing your PDFs and signatures 100% locally in your browser.",
  keywords: [
    "privacy policy",
    "secure document signing",
    "local e-signatures",
    "private pdf signing tool"
  ],
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy - Secure Signing",
    description: "Read the Privacy Policy of MyDigitSign. Learn how we ensure complete security by processing your PDFs and signatures 100% locally in your browser.",
    url: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.subtitle}>Last updated: June 24, 2026</p>
          </div>

          <div className={styles.articleCard}>
            <p>
              At MyDigitSign, we are committed to protecting your privacy. This Privacy Policy describes how we handle documents, files, and information when you use our signature utility.
            </p>

            <h2>1. Zero Server Storage & Complete Privacy</h2>
            <p>
              Unlike traditional electronic signature providers, MyDigitSign does not store or process your documents on any server:
            </p>
            <ul>
              <li><strong>Local Execution:</strong> All document imports, signature generations, drag-and-drop actions, and final merges are processed locally in your browser using client-side JavaScript.</li>
              <li><strong>No Data Uploads:</strong> No document, PDF, image, or signature data URL is ever uploaded to our servers.</li>
              <li><strong>Zero Databases:</strong> We do not maintain any user accounts, databases, or cloud storage. When you close your browser tab, all session data is permanently cleared.</li>
            </ul>

            <h2>2. Information We Collect</h2>
            <p>
              Because our tool is completely database-free and requires no registration:
            </p>
            <ul>
              <li><strong>Personal Data:</strong> We do not collect your name, email address, password, or any contact info to use the app.</li>
              <li><strong>Document Data:</strong> We do not collect or inspect the content of the files you sign.</li>
              <li><strong>Analytical Info:</strong> We may use minimal anonymized web analytics to measure page views and click-through rates. This data contains no personally identifiable details.</li>
            </ul>

            <h2>3. Advertising</h2>
            <p>
              We run developer-focused, privacy-friendly ads from Ethical Ads to support the operational costs of this free utility. Ethical Ads does not track you or drop cross-site tracking cookies.
            </p>

            <h2>4. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please feel free to reach out directly:
            </p>
            <ul>
              <li>Email: <a href="mailto:alimirza00@gmail.com">alimirza00@gmail.com</a></li>
              <li>Developer Profile: <a href="https://github.com/sidAli1993" target="_blank" rel="noopener noreferrer">github.com/sidAli1993</a></li>
            </ul>
          </div>

          <AdBanner slot="privacy-bottom" format="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
