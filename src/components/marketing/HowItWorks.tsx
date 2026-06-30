import React from 'react';
import { UploadCloud, Users, Send } from 'lucide-react';
import styles from './HowItWorks.module.css';
import { Card } from '../ui';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <UploadCloud size={32} />,
      title: 'Upload Your Document',
      description: 'Upload any PDF document securely to our encrypted servers.',
      number: '01'
    },
    {
      icon: <Users size={32} />,
      title: 'Add Signers & Fields',
      description: 'Specify who needs to sign and drag-and-drop signature fields onto the document.',
      number: '02'
    },
    {
      icon: <Send size={32} />,
      title: 'Send & Track',
      description: 'Send the document via email and track its progress until completion.',
      number: '03'
    }
  ];

  return (
    <section id="how-it-works" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>How It Works</h2>
          <p className={styles.subtitle}>Get your documents signed in three simple steps</p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepWrapper}>
              <Card className={styles.stepCard} hoverEffect>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.iconWrapper}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
