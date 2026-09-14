import React from 'react';
import Link from 'next/link';
import { NavbarClient } from './NavbarClient';
import styles from './Navbar.module.css';

export const Navbar: React.FC = () => {
  const navLinks = (
    <nav aria-label="Main navigation" className={styles.nav}>
      <Link href="/tools" className={styles.navLink}>
        Tools
      </Link>
      <Link href="/templates" className={styles.navLink}>
        Templates
      </Link>
      <Link href="/compare" className={styles.navLink}>
        Compare
      </Link>
      <Link href="/blog" className={styles.navLink}>
        Blog
      </Link>
    </nav>
  );

  return <NavbarClient navLinks={navLinks} />;
};
