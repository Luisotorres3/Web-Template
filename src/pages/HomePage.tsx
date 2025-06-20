/**
 * @file HomePage.tsx
 * @description Defines the main landing page (HomePage) of the application.
 * This page serves as the initial view for users, featuring a welcoming message and navigation cues.
 * It utilizes framer-motion for animations and react-i18next for internationalization.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion'; // Keep for inner animations
import AnimatedPage from '../../components/motion/AnimatedPage'; // Import the new component

/**
 * The main landing page of the application.
 * It features an animated title, a descriptive paragraph, and a call-to-action button.
 * Content is internationalized using `react-i18next`.
 * Animations are handled by `framer-motion`.
 * @returns {JSX.Element} The rendered HomePage component.
 */
const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <AnimatedPage className="flex flex-col items-center justify-center text-center py-12 px-space-md">
      {/* Inner elements can still use motion for staggered or different animations */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-space-lg bg-clip-text text-transparent bg-gradient-to-r from-primary-light via-accent-light to-semantic-error-light dark:from-primary-dark dark:via-accent-dark dark:to-semantic-error-dark"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        {t('homeTitle')}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-text-muted max-w-2xl mb-space-xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Embark on a journey through our digital cosmos. Discover innovative projects and cutting-edge technology, all wrapped in a sleek, minimal design.
      </motion.p>
      <motion.button
        className="px-space-xl py-space-sm bg-primary text-white font-bold rounded-radius-lg shadow-lg transition-transform transform hover:scale-105 hover:opacity-90"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Explore Our Work
      </motion.button>
    </AnimatedPage>
  );
};

export default HomePage;
