import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, GraduationCap, Code, Heart } from 'lucide-react';

const AccordionAbout = () => {
  const [activeSection, setActiveSection] = useState('education');

  const sections = [
    {
      id: 'education',
      title: 'Education',
      icon: GraduationCap,
      content: {
        degree: 'BSc Data Science',
        institution: 'University Studies',
        details: 'Currently pursuing a Bachelor of Science in Data Science, focusing on statistical modeling, machine learning, and data visualization techniques.',
        achievements: [
          'Dean\'s List for Academic Excellence',
          'Data Science Project Competition Winner',
          'Python Programming Certification'
        ]
      }
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: Code,
      content: {
        technical: [
          { name: 'Python', level: 95 },
          { name: 'Data Analysis', level: 90 },
          { name: 'Machine Learning', level: 85 },
          { name: 'React', level: 80 },
          { name: 'SQL', level: 75 }
        ],
        soft: [
          'Problem Solving',
          'Critical Thinking',
          'Team Collaboration',
          'Communication',
          'Project Management'
        ]
      }
    },
    {
      id: 'interests',
      title: 'Interests',
      icon: Heart,
      content: {
        professional: [
          'Artificial Intelligence',
          'Data Visualization',
          'Web Development',
          'Open Source Projects'
        ],
        personal: [
          'Photography',
          'Reading Tech Blogs',
          'Contributing to Open Source',
          'Learning New Technologies'
        ]
      }
    }
  ];

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-sm mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 text-center mb-8 leading-relaxed"
        >
          I'm a passionate data science student who loves turning complex data into meaningful insights. 
          With a strong foundation in programming and statistics, I create solutions that make data accessible and actionable.
        </motion.p>

        <div className="space-y-4">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                style={{ minHeight: '44px' }}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg">
                    <section.icon size={20} className="text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: activeSection === section.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} className="text-gray-500 dark:text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeSection === section.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700">
                      {section.id === 'education' && (
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            {section.content.degree}
                          </h4>
                          <p className="text-emerald-600 dark:text-emerald-400 mb-3">
                            {section.content.institution}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {section.content.details}
                          </p>
                          <div>
                            <h5 className="font-medium text-gray-900 dark:text-white mb-2">
                              Achievements:
                            </h5>
                            <ul className="space-y-1">
                              {section.content.achievements.map((achievement, i) => (
                                <li key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                                  • {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {section.id === 'skills' && (
                        <div>
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                              Technical Skills
                            </h4>
                            <div className="space-y-3">
                              {section.content.technical.map((skill, i) => (
                                <div key={i}>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-sm text-gray-700 dark:text-gray-300">
                                      {skill.name}
                                    </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                      {skill.level}%
                                    </span>
                                  </div>
                                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${skill.level}%` }}
                                      transition={{ duration: 1, delay: i * 0.1 }}
                                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                              Soft Skills
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {section.content.soft.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === 'interests' && (
                        <div>
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                              Professional Interests
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {section.content.professional.map((interest, i) => (
                                <div
                                  key={i}
                                  className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-center"
                                >
                                  <span className="text-sm text-emerald-700 dark:text-emerald-300">
                                    {interest}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                              Personal Interests
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                              {section.content.personal.map((interest, i) => (
                                <div
                                  key={i}
                                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-center"
                                >
                                  <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {interest}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccordionAbout;