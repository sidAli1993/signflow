import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: "Privacy Policy — Your Data Never Leaves Your Device",
  description: "MyDigitSign never stores your documents or signatures. All processing happens locally in your browser. Read our full privacy policy.",
  keywords: [
    "privacy policy",
    "no data upload pdf signer",
    "client-side document signing",
    "private pdf tool",
    "secure local e-signature"
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://mydigitsign.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy — Your Data Never Leaves Your Device",
    description: "MyDigitSign never stores your documents or signatures. All processing happens locally in your browser. Read our full privacy policy.",
    url: "https://mydigitsign.com/privacy-policy",
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
            <p className={styles.subtitle}>Last updated: September 21, 2026</p>
          </div>

          <div className={styles.articleCard}>
            <p>
              At MyDigitSign, we are deeply committed to protecting your privacy. This Privacy Policy describes how we handle documents, files, and information when you use our digital signature tool at <strong>mydigitsign.com</strong>.
            </p>

            <h2>1. Zero Server Storage &amp; Complete Privacy</h2>
            <p>
              Unlike traditional electronic signature providers, MyDigitSign does <strong>not</strong> store or process your documents on any server:
            </p>
            <ul>
              <li><strong>Local Execution:</strong> All document imports, signature generations, drag-and-drop actions, and final merges are processed locally in your browser using client-side JavaScript.</li>
              <li><strong>No Data Uploads:</strong> No document, PDF, image, or signature data is ever uploaded to our servers.</li>
              <li><strong>Zero Databases:</strong> We do not maintain any user accounts, databases, or cloud storage. When you close your browser tab, all session data is permanently cleared.</li>
            </ul>

            <h2>2. Information We Collect</h2>
            <p>
              Because our tool is completely database-free and requires no registration:
            </p>
            <ul>
              <li><strong>Personal Data:</strong> We do not collect your name, email address, password, or any contact info to use the app.</li>
              <li><strong>Document Data:</strong> We do not collect or inspect the content of the files you sign.</li>
              <li><strong>Analytical Info:</strong> We use Google Analytics (GA4) to measure anonymized page views, session duration, and general user interaction patterns. This data contains no personally identifiable details and is used solely to improve our service.</li>
            </ul>

            <h2>3. Cookies and Tracking Technologies</h2>
            <p>
              We use the following technologies on our website:
            </p>
            <ul>
              <li><strong>Google Analytics:</strong> Google Analytics uses cookies to collect anonymized data about how users interact with our site (pages visited, time on site, traffic sources). You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.</li>
              <li><strong>Google AdSense:</strong> We use Google AdSense to display advertisements on our site. Google AdSense uses cookies to serve ads based on your prior visits to our website and other websites on the internet. Google&apos;s use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google&apos;s Ad Settings</a>.</li>
              <li><strong>LocalStorage:</strong> We use HTML5 localStorage to store your theme preference (light or dark mode). This is not a cookie and contains no tracking data.</li>
            </ul>

            <h2>4. Third-Party Services</h2>
            <p>
              We integrate the following third-party services:
            </p>
            <ul>
              <li><strong>Google AdSense</strong> — for displaying contextual advertisements. Google may use cookies to personalize ads. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
              <li><strong>Google Analytics (GA4)</strong> — for anonymized website usage analytics. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
              <li><strong>Ahrefs Analytics</strong> — for SEO monitoring. Ahrefs does not collect personal user data from your browser.</li>
            </ul>

            <h2>5. Your Rights (GDPR / CCPA)</h2>
            <p>
              Since we do not collect personal data, store documents, or maintain user accounts, there is no personal data to request, modify, or delete. However, if you have concerns about cookies placed by Google Analytics or Google AdSense:
            </p>
            <ul>
              <li><strong>GDPR (EU Users):</strong> You may opt out of personalized ads via <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> or by adjusting your browser cookie settings.</li>
              <li><strong>CCPA (California Users):</strong> We do not sell personal information. Google&apos;s ad personalization can be disabled at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</li>
            </ul>

            <h2>6. Children&apos;s Privacy</h2>
            <p>
              MyDigitSign is not intended for children under 13 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated &quot;Last updated&quot; date.
            </p>

            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please feel free to reach out:
            </p>
            <ul>
              <li>Email: <a href="mailto:alimirza00@gmail.com">alimirza00@gmail.com</a></li>
              <li>Website: <a href="https://mydigitsign.com/contact">mydigitsign.com/contact</a></li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
