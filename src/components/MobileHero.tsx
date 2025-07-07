import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';

const MobileHero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 px-4 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-emerald-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-teal-300 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-sm mx-auto">
        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-lg opacity-75"></div>
            <img
              src="/lovable-uploads/7929d93d-c5a9-40fc-a2c1-0df9fd8b905a.png"
              alt="Rohit Chavan"
              className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight"
        >
          Hi, I'm <span className="text-emerald-600">Rohit</span>
          <br />
          Data Science Student & Web Creator
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 mb-8"
        >
          Turning data into stories, one chart at a time
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToProjects}
          className="relative bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-12"
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          <motion.span
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-lg opacity-50"
          />
          <span className="relative flex items-center gap-2">
            View My Projects
            <ChevronDown size={20} />
          </span>
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-8 bg-gradient-to-b from-emerald-500 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MobileHero;