import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { AnimatePresence } from 'framer-motion';

const MainLayout: React.FC = () => {
  const location = useLocation(); // Needed for AnimatePresence to detect route changes

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="flex-grow container mx-auto p-4">
        <AnimatePresence mode="wait">
          {/* Keying Outlet wrapper with location.pathname ensures AnimatePresence detects route changes */}
          <React.Fragment key={location.pathname}>
            <Outlet />
          </React.Fragment>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
