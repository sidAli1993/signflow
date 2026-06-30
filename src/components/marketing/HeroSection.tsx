import React from 'react';
import Link from 'next/link';
import { Button } from '../ui';
import styles from './HeroSection.module.css';

export const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.badges}>
          <span className={styles.badge}>✓ Legally Binding</span>
          <span className={styles.badge}>✓ Free Forever</span>
          <span className={styles.badge}>✓ No Credit Card</span>
        </div>
        
        <h1 className={styles.title}>
          Sign Documents Online, <br />
          <span className={styles.highlight}>For Free</span>
        </h1>
        
        <p className={styles.subtitle}>
          The easiest way to send, sign, and manage documents. <br className={styles.desktopBr} />
          No credit card required. Free forever.
        </p>
        
        <div className={styles.actions}>
          <Link href="/signup">
            <Button variant="primary" size="lg">Get Started Free</Button>
          </Link>
          <Link href="#how-it-works">
            <Button variant="outline" size="lg">See How It Works</Button>
          </Link>
        </div>
        
        <div className={styles.mockupContainer}>
          <div className={styles.mockup}>
            {/* CSS Mockup representing the editor */}
            <div className={styles.mockupHeader}>
              <div className={styles.dots}>
                <span></span><span></span><span></span>
              </div>
              <div className={styles.mockupTitle}>Contract_Agreement.pdf</div>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupSidebar}></div>
              <div className={styles.mockupContent}>
                <div className={styles.docLine}></div>
                <div className={styles.docLine}></div>
                <div className={styles.docLine}></div>
                <div className={styles.docLine} style={{ width: '60%' }}></div>
                <div className={styles.signatureBox}>
                  Sign Here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
