import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="mb-8 p-4 bg-cyan-400 hover:bg-cyan-500 text-slate-900 rounded-full shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
          >
            <ArrowUp size={24} />
          </motion.button>

          <div className="text-center mb-6">
            <p className="text-gray-400 flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-red-500 fill-red-500" /> by{' '}
              <span className="text-cyan-400 font-semibold">Durgesh Sharma</span>
            </p>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 Durgesh Sharma. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;