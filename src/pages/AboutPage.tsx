import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="container mx-auto px-4 py-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">{t('aboutTitle')}</h1>
      <div className="max-w-3xl mx-auto text-slate-700 dark:text-slate-300 space-y-4">
        <p>
          We are a passionate team dedicated to crafting beautiful and functional web experiences.
          Our mission is to explore new frontiers in technology and design, pushing the boundaries of what's possible.
        </p>
        <p>
          This application serves as a showcase of our skills in React, TypeScript, Tailwind CSS, Framer Motion, and i18next,
          all brought together to create a seamless and engaging user journey.
        </p>
        <p>
          Join us as we navigate the digital universe, building innovative solutions one line of code at a time.
        </p>
      </div>
    </motion.div>
  );
};

export default AboutPage;
