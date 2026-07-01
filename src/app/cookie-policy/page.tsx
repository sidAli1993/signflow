import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import { AdBanner } from '@/components/ui';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: "Cookie Policy - Transparency & User Preferences",
  description: "Read the Cookie Policy of MyDigitSign. Learn how we utilize HTML5 browser LocalStorage instead of traditional tracking cookies to preserve your theme preference.",
  keywords: [
    "cookie policy",
    "cookies and localstorage",
    "privacy-friendly web apps",
    "no tracking cookies e-sign"
  ],
  alternates: {
    canonical: "/cookie-policy",
  },
};

export default function CookiePolicy() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Cookie Policy</h1>
            <p className={styles.subtitle}>Last updated: June 24, 2026</p>
          </div>

          <div className={styles.articleCard}>
            <p>
              MyDigitSign believes in transparency. This Cookie Policy explains how and why we utilize browser storage technologies when you visit our website.
            </p>

            <h2>1. Do We Use Cookies?</h2>
            <p>
              <strong>No, we do not drop traditional tracking cookies.</strong>
            </p>
            <p>
              We do not use cookie identifiers to track your behavior across other websites, compile advertisements profiles, or monitor your navigation patterns.
            </p>

            <h2>2. Browser LocalStorage</h2>
            <p>
              Instead of cookies, we use HTML5 `localStorage` (a built-in browser capability) to store your preferences:
            </p>
            <ul>
              <li><strong>Theme Preference:</strong> We store a key called <code>theme</code> with the value <code>"light"</code> or <code>"dark"</code>. This allows us to remember your theme choice (Light vs Dark mode) on future visits and prevent a page-load flash.</li>
            </ul>

            <h2>3. Third-Party Integrations</h2>
            <p>
              We integrate third-party services that have strict privacy regulations:
            </p>
            <ul>
              <li><strong>Ethical Ads:</strong> The ads served on our website are privacy-focused and do not use cookies or tracking systems to follow you. They target ads based strictly on website context (developers and programming).</li>
              <li><strong>PDF and Canvas Libraries:</strong> The libraries we use to compile your signed files (`pdf-lib`, `pdfjs-dist`) run entirely within memory and do not access or place cookies.</li>
            </ul>

            <h2>4. Managing Browser Preferences</h2>
            <p>
              If you wish to clear or disable browser local storage, you can do so at any time inside your browser settings (usually under &quot;Clear Browsing Data&quot; &rarr; &quot;Cookies and other site data&quot;). Note that clearing storage will reset your theme preference to default.
            </p>
          </div>

          <AdBanner slot="cookie-bottom" format="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
