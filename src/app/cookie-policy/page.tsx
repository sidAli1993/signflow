import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/marketing/Navbar';
import { Footer } from '@/components/marketing/Footer';
import styles from '../static-page.module.css';

export const metadata: Metadata = {
  title: "Cookie Policy — How We Use Cookies",
  description: "Learn how MyDigitSign uses cookies, localStorage, and third-party services like Google Analytics and Google AdSense.",
  keywords: [
    "cookie policy",
    "mydigitsign cookies",
    "google adsense cookies",
    "privacy friendly pdf tool"
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://mydigitsign.com/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy — How We Use Cookies",
    description: "Learn how MyDigitSign uses cookies, localStorage, and third-party services like Google Analytics and Google AdSense.",
    url: "https://mydigitsign.com/cookie-policy",
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
            <p className={styles.subtitle}>Last updated: September 21, 2026</p>
          </div>

          <div className={styles.articleCard}>
            <p>
              MyDigitSign believes in transparency. This Cookie Policy explains how and why we utilize cookies, browser storage, and third-party technologies when you visit <strong>mydigitsign.com</strong>.
            </p>

            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that websites place on your device to remember information about your visit. They are widely used across the internet to make websites function properly, improve user experience, and provide analytics data.
            </p>

            <h2>2. Cookies We Use</h2>
            <p>
              MyDigitSign uses the following types of cookies and storage technologies:
            </p>

            <h3>Essential Storage (No Cookies)</h3>
            <ul>
              <li><strong>Theme Preference (localStorage):</strong> We store a key called <code>theme</code> with the value <code>&quot;light&quot;</code> or <code>&quot;dark&quot;</code> using HTML5 localStorage. This allows us to remember your visual theme choice on future visits. This is <strong>not</strong> a cookie and contains no tracking data.</li>
            </ul>

            <h3>Analytics Cookies</h3>
            <ul>
              <li><strong>Google Analytics (GA4):</strong> We use Google Analytics to understand how visitors interact with our website. Google Analytics sets cookies (such as <code>_ga</code> and <code>_ga_*</code>) to distinguish unique users, track session information, and measure page views. This data is anonymized and used solely to improve our service. Learn more at <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy Policy</a>.</li>
            </ul>

            <h3>Advertising Cookies</h3>
            <ul>
              <li><strong>Google AdSense:</strong> We display advertisements through Google AdSense to support the operational costs of this free tool. Google AdSense may set cookies to serve ads based on your prior visits to mydigitsign.com and other websites. These cookies enable Google and its advertising partners to serve relevant ads to you. You can learn more about and opt out of Google&apos;s use of cookies at <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings</a>.</li>
            </ul>

            <h2>3. Third-Party Cookie Providers</h2>
            <p>
              The following third-party services may place cookies on your device when you visit our website:
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border, #e2e8f0)' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>Provider</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>Purpose</th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 0.5rem' }}>More Info</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border, #e2e8f0)' }}>
                  <td style={{ padding: '0.75rem 0.5rem' }}>Google Analytics</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>Website usage analytics</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border, #e2e8f0)' }}>
                  <td style={{ padding: '0.75rem 0.5rem' }}>Google AdSense</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>Contextual advertising</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}><a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer">Ad Policy</a></td>
                </tr>
              </tbody>
            </table>

            <h2>4. How to Manage Cookies</h2>
            <p>
              You can control and manage cookies in several ways:
            </p>
            <ul>
              <li><strong>Browser Settings:</strong> Most browsers allow you to view, manage, and delete cookies through the Settings or Preferences menu. Look for &quot;Privacy&quot; or &quot;Cookies&quot; sections.</li>
              <li><strong>Google Ad Opt-Out:</strong> Visit <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> to opt out of personalized advertising.</li>
              <li><strong>Google Analytics Opt-Out:</strong> Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a>.</li>
              <li><strong>Clear localStorage:</strong> To reset your theme preference, clear your browser&apos;s site data for mydigitsign.com.</li>
            </ul>
            <p>
              <strong>Note:</strong> Blocking cookies may affect the functionality of some features, and you may see non-personalized ads instead.
            </p>

            <h2>5. Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy periodically. Any changes will be reflected on this page with an updated &quot;Last updated&quot; date.
            </p>

            <h2>6. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us:
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
