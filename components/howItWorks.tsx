import React from 'react';
import styles from '@/styles/HowItWorks.module.css';

const steps = [
  {
    title: 'Sign Up',
    description:
      'Create your Dot. account and customize your preferences to tailor the assistant to your needs.',
  },
  {
    title: 'Sync Calendars and Apps',
    description:
      'Connect Dot. to your preferred calendars, task management apps, and email accounts for seamless integration.',
  },
  {
    title: 'Start Commanding',
    description:
      'Use voice commands or text inputs to interact with Dot. and start delegating tasks and managing your schedule.',
  },
  {
    title: 'Sit Back and Be Productive',
    description:
      'Let Dot. handle the nitty-gritty of organizing your life, while you focus on what truly matters.',
  },
];

export default function HowItWorks() {
  return (
    <div className={styles.sectionWrapper}>
        <div>
            <h2
                className={styles.sectionTitle}
            >
                Welcome to Dot. - Your Productivity Companion!
            </h2>
            <p
                className={styles.sectionDescription}
            >
                Step into a world of seamless organization and efficiency with Dot. 
                Our advanced personal assistant is designed to simplify your life 
                and elevate your productivity to new heights. Here's how it works:
            </p>
        </div>
        <div className={styles.stepsWrapper}>
        {steps.map((item, index) => (
            <div key={index} className={styles.step}>
            <span className={styles.stepNumber}>{index + 1}</span>
            <div className={styles.stepContent}>
                <h2>
                    {item.title}
                </h2>
                <p
                    className={styles.stepDescription}
                >
                    {item.description}
                </p>
            </div>
            </div>
        ))}
        </div>
    </div>
  );
}