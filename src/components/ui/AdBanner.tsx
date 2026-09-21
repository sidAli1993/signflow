'use client';

import React, { useEffect, useRef } from 'react';
import styles from './AdBanner.module.css';

export interface AdBannerProps {
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  className?: string;
}

// Map logical slot names to AdSense ad slot IDs
// Replace these with your actual AdSense ad unit slot IDs once approved
const ADSENSE_SLOT_MAP: Record<string, string> = {
  'home-top': 'auto',
  'home-bottom': 'auto',
  'footer-top': 'auto',
  'signature-download': 'auto',
  'features-bottom': 'auto',
  'how-it-works-bottom': 'auto',
  'privacy-bottom': 'auto',
  'cookie-bottom': 'auto',
  'terms-bottom': 'auto',
};

const FORMAT_MAP: Record<string, string> = {
  horizontal: 'horizontal',
  vertical: 'vertical',
  rectangle: 'rectangle',
  auto: 'auto',
};

export const AdBanner: React.FC<AdBannerProps> = ({ slot, format = 'auto', className = '' }) => {
  const adRef = useRef<HTMLModElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    // Only push ads once per component mount
    if (isInitialized.current) return;
    isInitialized.current = true;

    try {
      // Push ad to AdSense
      const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || [];
      adsbygoogle.push({});
    } catch {
      // AdSense not loaded (ad blocker or script failure) — fail silently
    }
  }, []);

  const adSlotId = ADSENSE_SLOT_MAP[slot] || 'auto';

  return (
    <div className={`${styles.adWrapper} ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2946390705770489"
        data-ad-slot={adSlotId}
        data-ad-format={FORMAT_MAP[format] || 'auto'}
        data-full-width-responsive="true"
      />
    </div>
  );
};
