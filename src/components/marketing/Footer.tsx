import React from 'react';
import Link from 'next/link';
import { PenTool } from 'lucide-react';
import styles from './Footer.module.css';
import { AdBanner } from '@/components/ui';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.adWrapper}>
        <AdBanner slot="footer-top" format="horizontal" />
      </div>
      
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <PenTool size={16} />
              </div>
              <span className={styles.logoText}>MyDigitSign</span>
            </Link>
            <p className={styles.description}>
              The easiest way to design signatures, sign documents, and share them instantly. Completely client-side and free — powered by MyDigitSign.
            </p>
            <div className={styles.socials}>
              <a href="https://x.com/alimirza00" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
                  <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
                </svg>
              </a>
              <a href="https://github.com/sidAli1993" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mirza-munawer-baig-3a0b15105/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Free Tools</h4>
            <Link href="/tools/draw-signature-online" className={styles.link}>Draw Signature Online</Link>
            <Link href="/tools/type-signature-online" className={styles.link}>Type Signature Online</Link>
            <Link href="/tools/sign-image-online" className={styles.link}>Sign Image Online</Link>
            <Link href="/tools/sign-pdf-online" className={styles.link}>Sign PDF Online Free</Link>
          </div>
          
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Product & Guides</h4>
            <Link href="/about" className={styles.link}>About Us</Link>
            <Link href="/features" className={styles.link}>Features</Link>
            <Link href="/how-it-works" className={styles.link}>How it Works</Link>
            <Link href="/blog/how-to-sign-nda-online-free" className={styles.link}>Sign NDA Online Free</Link>
            <Link href="/blog/free-digital-signature-certificate" className={styles.link}>Free Digital Signature Certificate</Link>
            <Link href="/blog/are-electronic-signatures-legally-binding" className={styles.link}>Legally Binding E Signature</Link>
            <Link href="/blog/how-to-sign-pdf-on-iphone-android-free" className={styles.link}>Sign a PDF on iPhone</Link>
            <Link href="/blog/how-to-sign-a-document-online-free-pdf-editor" className={styles.link}>Sign Document Online Free</Link>
            <Link href="/blog/ultimate-guide-signing-pdf-securely" className={styles.link}>Secure PDF Signing Guide</Link>
            <Link href="/blog/create-digital-signature-online-free" className={styles.link}>Create Digital Signature Free</Link>
          </div>
          
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <a href="mailto:alimirza00@gmail.com" className={styles.link}>Email: alimirza00@gmail.com</a>
            <a href="tel:+923224379402" className={styles.link}>Phone: +92 322 4379402</a>
            <a href="https://github.com/sidAli1993" target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub: sidAli1993</a>
          </div>
          
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Legal</h4>
            <Link href="/about" className={styles.link}>About MyDigitSign</Link>
            <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms-of-service" className={styles.link}>Terms of Service</Link>
            <Link href="/cookie-policy" className={styles.link}>Cookie Policy</Link>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} MyDigitSign. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
