/**
 * @file LanguageSelector.tsx
 * @description Defines a component for selecting the application language.
 * It provides buttons to switch between supported languages (English and Spanish).
 * This component is typically used in the Navbar.
 */
import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n/config'; // Adjusted path for i18n config

/**
 * LanguageSelector component allows users to switch the application's language.
 * It displays buttons for each supported language and highlights the currently active language.
 * @returns {JSX.Element} The rendered LanguageSelector component.
 */
const LanguageSelector: React.FC = () => {
  const { t } = useTranslation(); // t function can be used if any text within this component needs translation

  /**
   * Changes the application's language.
   * @param {string} lng The language code (e.g., 'en', 'es').
   */
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-space-sm">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 text-xs rounded-radius-md transition-colors ${
          i18n.language === 'en'
            ? 'bg-primary text-white'
            : 'bg-surface text-text-muted hover:bg-primary-light dark:hover:bg-primary-dark hover:text-text-default'
        }`}
        aria-pressed={i18n.language === 'en'}
        aria-label={t('changeLanguageToEnglish') || 'Switch to English'} // Added aria-label for accessibility
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 text-xs rounded-radius-md transition-colors ${
          i18n.language === 'es'
            ? 'bg-primary text-white'
            : 'bg-surface text-text-muted hover:bg-primary-light dark:hover:bg-primary-dark hover:text-text-default'
        }`}
        aria-pressed={i18n.language === 'es'}
        aria-label={t('changeLanguageToSpanish') || 'Switch to Spanish'} // Added aria-label for accessibility
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSelector;
