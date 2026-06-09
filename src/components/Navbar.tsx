import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-white tracking-tight"
          >
            VS <span className="text-blue-500">Portfolio</span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">{t.about}</a>
            <a href="#robotics" className="text-slate-300 hover:text-white transition-colors font-medium">{t.robotics}</a>
            <a href="#materials" className="text-slate-300 hover:text-white transition-colors font-medium">{t.materials}</a>
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-md text-sm font-bold text-blue-400 hover:bg-slate-700 transition-colors"
            >
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
