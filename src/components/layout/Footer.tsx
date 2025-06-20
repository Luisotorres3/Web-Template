import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-slate-800 text-slate-300 text-center p-6 mt-12 shadow-inner">
      <p>{t('footerText')}</p>
      <p className="text-xs mt-1">Exploring the cosmos, one component at a time.</p>
    </footer>
  );
};

export default Footer;
