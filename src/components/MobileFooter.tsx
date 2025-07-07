import React from 'react';
import { motion } from 'framer-motion';
import { Download, Heart } from 'lucide-react';

const MobileFooter = () => {
  const currentYear = new Date().getFullYear();

  const handleDownloadResume = () => {
    // Add resume download logic here
    console.log('Download resume clicked');
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-sm mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
          <p className="text-gray-300 mb-6">
            Ready to turn your data into actionable insights? 
            Let's discuss your next project.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadResume}
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            style={{ minHeight: '44px' }}
          >
            <Download size={18} />
            Download Resume
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} Rohit Chavan. Made with</span>
            <Heart size={14} className="text-red-500" />
            <span>and lots of ☕</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default MobileFooter;