'use client';

import React from 'react';
import styles from './Tabs.module.css';

export interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
  fullWidth?: boolean;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, onChange, fullWidth = false }) => {
  return (
    <div className={`${styles.tabsContainer} ${fullWidth ? styles.fullWidth : ''}`}>
      <div className={styles.tabsList} role="tablist">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              className={`${styles.tab} ${isActive ? styles.active : ''}`}
              onClick={() => onChange(tab.id)}
            >
              {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
              <span>{tab.label}</span>
              {isActive && <span className={styles.indicator} />}
            </button>
          );
        })}
      </div>
    </div>
  );
};
