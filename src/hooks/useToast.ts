import { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastMessage {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

// Global state for toasts (simple implementation without context for ease of use)
let listeners: ((toasts: ToastMessage[]) => void)[] = [];
let toasts: ToastMessage[] = [];

const notifyListeners = () => {
  listeners.forEach(listener => listener([...toasts]));
};

export const toast = {
  show: (options: Omit<ToastMessage, 'id'>) => {
    const id = uuidv4();
    const newToast = { ...options, id };
    toasts = [...toasts, newToast];
    notifyListeners();

    if (options.duration !== Infinity) {
      setTimeout(() => {
        toast.dismiss(id);
      }, options.duration || 4000);
    }
    return id;
  },
  success: (title: string, message?: string, duration?: number) => 
    toast.show({ type: 'success', title, message, duration }),
  error: (title: string, message?: string, duration?: number) => 
    toast.show({ type: 'error', title, message, duration }),
  info: (title: string, message?: string, duration?: number) => 
    toast.show({ type: 'info', title, message, duration }),
  warning: (title: string, message?: string, duration?: number) => 
    toast.show({ type: 'warning', title, message, duration }),
  dismiss: (id: string) => {
    toasts = toasts.filter(t => t.id !== id);
    notifyListeners();
  }
};

export const useToast = () => {
  const [activeToasts, setActiveToasts] = useState<ToastMessage[]>(toasts);

  useEffect(() => {
    const listener = (newToasts: ToastMessage[]) => setActiveToasts(newToasts);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  return { toasts: activeToasts, toast };
};
