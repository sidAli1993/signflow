'use client';

import React, { useEffect, useState } from 'react';
import styles from './AdBanner.module.css';

export interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

const SLOT_MAP: Record<string, number> = {
  'home-top': 101,
  'home-bottom': 102,
  'footer-top': 103,
  'signature-download': 104,
  'features-bottom': 105,
  'how-it-works-bottom': 106,
  'privacy-bottom': 107,
  'cookie-bottom': 108,
  'terms-bottom': 109,
};

export const AdBanner: React.FC<AdBannerProps> = ({ slot, format = 'auto', className = '' }) => {
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    // Attempt to fetch standard Ezoic script to detect AdBlocker
    fetch('https://www.ezojs.com/ezoic/sa.min.js', { method: 'HEAD', mode: 'no-cors' })
      .catch(() => {
        setIsBlocked(true);
      });
  }, []);

  const placeholderId = SLOT_MAP[slot] || 101;
  const placeholderDivId = `ezoic-pub-ad-placeholder-${placeholderId}`;

  if (isBlocked) {
    return (
      <div className={`${styles.adWrapper} ${className}`}>
        <div className={styles.blockedCard}>
          <h3>Ad Blocker Detected</h3>
          <p>Please disable your Ad Blocker and refresh the page to use this tool.</p>
          <button onClick={() => window.location.reload()} className={styles.reloadBtn}>
            I've Disabled It (Reload)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.adWrapper} ${className}`}>
      {/* Ezoic Ad Placeholder container */}
      <div id={placeholderDivId} />
    </div>
  );
};
