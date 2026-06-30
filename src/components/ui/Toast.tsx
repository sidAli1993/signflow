'use client';

import React from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';
import { useToast } from '../../hooks/useToast';
import styles from './Toast.module.css';

export const ToastContainer: React.FC = () => {
  const { toasts, toast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className={styles.container}>
      {toasts.map((t) => (
        <div key={t.id} className={`${styles.toast} ${styles[t.type]}`}>
          <div className={styles.icon}>
            {t.type === 'success' && <CheckCircle size={20} />}
            {t.type === 'error' && <AlertCircle size={20} />}
            {t.type === 'info' && <Info size={20} />}
            {t.type === 'warning' && <AlertTriangle size={20} />}
          </div>
          <div className={styles.content}>
            <p className={styles.title}>{t.title}</p>
            {t.message && <p className={styles.message}>{t.message}</p>}
          </div>
          <button
            className={styles.closeButton}
            onClick={() => toast.dismiss(t.id)}
            aria-label="Close toast"
          >
            <X size={16} />
          </button>
        </div>
      ))}
    </div>
  );
};
