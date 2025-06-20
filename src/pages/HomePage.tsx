import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center py-12 px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 dark:from-purple-300 dark:via-pink-400 dark:to-red-400"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 100 }}
      >
        {t('homeTitle')}
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Embark on a journey through our digital cosmos. Discover innovative projects and cutting-edge technology, all wrapped in a sleek, minimal design.
      </motion.p>
      <motion.button
        className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg shadow-lg transition-transform transform hover:scale-105 dark:bg-purple-500 dark:hover:bg-purple-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Explore Our Work
      </motion.button>
    </motion.div>
  );
};

export default HomePage;
