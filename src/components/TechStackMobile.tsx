import React from 'react';
import { motion } from 'framer-motion';

const TechStackMobile = () => {
  const techStacks = [
    {
      category: 'Languages',
      color: 'from-blue-500 to-purple-600',
      items: [
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript', icon: '⚡' },
        { name: 'SQL', icon: '🗄️' },
        { name: 'R', icon: '📊' }
      ]
    },
    {
      category: 'ML & AI',
      color: 'from-emerald-500 to-teal-600',
      items: [
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'Scikit-learn', icon: '🔬' },
        { name: 'Pandas', icon: '🐼' },
        { name: 'NumPy', icon: '🔢' }
      ]
    },
    {
      category: 'Visualization',
      color: 'from-orange-500 to-red-600',
      items: [
        { name: 'Matplotlib', icon: '📈' },
        { name: 'Seaborn', icon: '🎨' },
        { name: 'Plotly', icon: '📉' },
        { name: 'D3.js', icon: '📊' }
      ]
    },
    {
      category: 'Tools',
      color: 'from-gray-600 to-gray-800',
      items: [
        { name: 'Jupyter', icon: '📓' },
        { name: 'Git', icon: '🔧' },
        { name: 'Docker', icon: '🐳' },
        { name: 'VS Code', icon: '💾' }
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-sm mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Tech Stack
        </motion.h2>

        <div className="space-y-6">
          {techStacks.map((stack, stackIndex) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stackIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${stack.color}`} />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {stack.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {stack.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: stackIndex * 0.1 + itemIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-4"
        >
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">
              15+
            </div>
            <div className="text-sm text-emerald-700 dark:text-emerald-300">
              Technologies
            </div>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">
              8+
            </div>
            <div className="text-sm text-teal-700 dark:text-teal-300">
              Projects Built
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackMobile;