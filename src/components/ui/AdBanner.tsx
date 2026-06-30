'use client';

import React, { useEffect, useState } from 'react';
import styles from './AdBanner.module.css';

export interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

export const AdBanner: React.FC<AdBannerProps> = ({ slot, format = 'auto', className = '' }) => {
  const [isBlocked, setIsBlocked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Inject the Ethical Ads script on client mount
    let script = document.getElementById('ethicalads-script') as HTMLScriptElement | null;
    
    if (!script) {
      script = document.createElement('script');
      script.id = 'ethicalads-script';
      script.src = 'https://media.ethicalads.io/media/client/ethicalads.min.js';
      script.async = true;
      
      script.onload = () => {
        setIsLoaded(true);
        try {
          // @ts-ignore
          if (window.ethicalads) {
            // @ts-ignore
            window.ethicalads.load();
          }
        } catch (err) {}
      };

      script.onerror = () => {
        setIsBlocked(true);
      };
      
      document.body.appendChild(script);
    } else {
      setIsLoaded(true);
      // Script already exists, trigger load scan for new elements
      try {
        // @ts-ignore
        if (window.ethicalads) {
          // @ts-ignore
          window.ethicalads.load();
        }
      } catch (err) {
        // If script element exists but library failed (blocked)
        setIsBlocked(true);
      }
    }
  }, []);

  const publisher = process.env.NEXT_PUBLIC_ETHICALADS_PUBLISHER || 'ethicalads';
  const adType = format === 'vertical' || format === 'rectangle' ? 'vertical' : 'horizontal';

  if (isBlocked) {
    return (
      <div className={`${styles.adWrapper} ${className}`}>
        <div className={styles.blockedPlaceholder}>
          <span className={styles.blockedTitle}>[Ad Blocker Active]</span>
          <span className={styles.blockedDesc}>
            Privacy-friendly <strong>Ethical Ads</strong> test banner is placed here. Please disable your Ad Blocker extension to view the live test ads format.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.adWrapper} ${className}`}>
      {/* Ethical Ads Container */}
      <div
        className={adType}
        data-ea-publisher={publisher}
        data-ea-type="image"
        data-ea-style="stickybox"
        id={`ea-ad-${slot}`}
      />
    </div>
  );
};
