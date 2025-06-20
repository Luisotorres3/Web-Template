import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import ThemeToggle from '../ui/ThemeToggle';
import i18n from '../../i18n/config'; // Import i18n instance

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors
    ${isActive
      ? 'bg-slate-700 text-white'
      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
    }`;

  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-purple-400">CosmoNav</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/" className={navLinkClasses}>{t('navHome')}</NavLink>
            <NavLink to="/about" className={navLinkClasses}>{t('navAbout')}</NavLink>
            <NavLink to="/projects" className={navLinkClasses}>{t('navProjects')}</NavLink>
            <ThemeToggle />
            <div className="flex space-x-2">
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 text-xs rounded-md ${i18n.language === 'en' ? 'bg-purple-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-purple-500'}`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage('es')}
                className={`px-2 py-1 text-xs rounded-md ${i18n.language === 'es' ? 'bg-purple-600 text-white' : 'bg-slate-700 text-slate-300 hover:bg-purple-500'}`}
              >
                ES
              </button>
            </div>
          </div>
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
