import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { AdBanner } from '@/components/ui';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: "Terms of Service - Free E-Sign & PDF Utility Agreement",
  description: "Read the Terms of Service for MyDigitSign. Understand the usage license, zero server storage policy, and legal disclaimers for online signatures.",
  keywords: [
    "terms of service",
    "electronic signature terms",
    "free pdf signer user agreement",
    "legally binding e-sign disclaimers"
  ],
  alternates: {
    canonical: "/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Terms of Service</h1>
            <p className={styles.subtitle}>Last updated: June 24, 2026</p>
          </div>

          <div className={styles.articleCard}>
            <p>
              By accessing or using the MyDigitSign website, you agree to be bound by these Terms of Service. Please read them carefully.
            </p>

            <h2>1. License & Permitted Use</h2>
            <p>
              MyDigitSign provides you with a free, non-exclusive license to use the client-side tool for designing personal signatures, importing documents, placing overlays, and downloading signed files for personal or business purposes.
            </p>

            <h2>2. No Server-Side Operations & Local Security</h2>
            <p>
              Since all file processing happens directly on your device inside your web browser:
            </p>
            <ul>
              <li><strong>Your Responsibility:</strong> You are responsible for protecting the security of your device and keeping local files confidential.</li>
              <li><strong>No Backup:</strong> Because we do not store files or maintain any servers, we cannot retrieve, recover, or backup any of your signatures or documents. Once you close the tab, your data is gone forever.</li>
            </ul>

            <h2>3. Disclaimer of Legal Advice</h2>
            <p>
              MyDigitSign is a digital utility tool. While standard electronic signatures are legally binding for many everyday agreements:
            </p>
            <ul>
              <li>We do not offer legal advice or verify the identities of signees.</li>
              <li>For high-stakes documents (e.g., real estate deeds, wills, court submissions, or complex financial transactions), please consult a legal professional to ensure compliance with local regulations (such as ESIGN Act or eIDAS).</li>
            </ul>

            <h2>4. Limitation of Liability</h2>
            <p>
              MyDigitSign is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. In no event shall the developer (Mirza Munawer Baig) or associates be liable for any damages, data losses, file corruptions, or legal issues resulting from the use or inability to use this service.
            </p>

            <h2>5. Modifications</h2>
            <p>
              We reserve the right to revise or update these terms at any time. Your continued use of the website following any changes constitutes acceptance of the new Terms of Service.
            </p>
          </div>

          <AdBanner slot="terms-bottom" format="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
