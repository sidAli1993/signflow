import React from 'react';
import Link from 'next/link';
import { PenTool } from 'lucide-react';
import { ThemeToggle } from '@/components/ui';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <PenTool size={20} />
          </div>
          <span className={styles.logoText}>MyDigitSign</span>
        </Link>
        
        <div className={styles.actions}>
          <Link href="/tools" className={styles.navLink}>
            Tools
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
