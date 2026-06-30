import React from 'react';
import { Loader2 } from 'lucide-react';
import styles from './LoadingSpinner.module.css';

export interface LoadingSpinnerProps {
  size?: number;
  className?: string;
  fullScreen?: boolean;
  centered?: boolean;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 24, 
  className = '',
  fullScreen = false,
  centered = false
}) => {
  const spinner = <Loader2 size={size} className={`${styles.spinner} ${className}`} />;

  if (fullScreen) {
    return <div className={styles.fullScreen}>{spinner}</div>;
  }

  if (centered) {
    return <div className={styles.centered}>{spinner}</div>;
  }

  return spinner;
};
