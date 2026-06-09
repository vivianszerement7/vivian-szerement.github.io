import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
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
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors font-medium">About Me</a>
            <a href="#robotics" className="text-slate-300 hover:text-white transition-colors font-medium">Robotics & Code</a>
            <a href="#materials" className="text-slate-300 hover:text-white transition-colors font-medium">Materials & Conception</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
