import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
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
    <section id="tech" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {techStacks.map((stack, stackIndex) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: stackIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${stack.color}`} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stack.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stack.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: stackIndex * 0.1 + itemIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-3xl mb-3">{item.icon}</div>
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
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
              15+
            </div>
            <div className="text-sm text-emerald-700 dark:text-emerald-300">
              Technologies
            </div>
          </div>
          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-teal-600 dark:text-teal-400 mb-2">
              8+
            </div>
            <div className="text-sm text-teal-700 dark:text-teal-300">
              Projects Built
            </div>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              3+
            </div>
            <div className="text-sm text-blue-700 dark:text-blue-300">
              Years Experience
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              5+
            </div>
            <div className="text-sm text-purple-700 dark:text-purple-300">
              Certifications
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;