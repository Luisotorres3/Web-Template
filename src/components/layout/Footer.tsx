/**
 * @file Footer.tsx
 * @description Defines the footer component displayed at the bottom of every page.
 * It typically contains copyright information and other relevant links or text.
 * Used within the MainLayout.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Displays the footer section of the application.
 * Contains copyright information and a small tagline.
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-surface text-text-muted text-center p-space-lg mt-12 shadow-inner">
      <p>{t('footerText')}</p>
      <p className="text-xs mt-space-xs">Exploring the cosmos, one component at a time.</p>
    </footer>
  );
};

export default Footer;
