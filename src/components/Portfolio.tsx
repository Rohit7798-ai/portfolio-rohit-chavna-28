import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Sales Analytics Dashboard',
      description: 'Interactive dashboard built with Python and Plotly for visualizing sales data trends and insights.',
      image: '/lovable-uploads/188da912-8c4c-4048-bb19-0392fcaebb97.png',
      technologies: ['Python', 'Plotly', 'Pandas', 'Streamlit'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Machine Learning Classifier',
      description: 'Customer churn prediction model using ensemble methods with 94% accuracy on test data.',
      image: '/lovable-uploads/20137c00-9a0e-498f-954f-9f9160cf583d.png',
      technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Jupyter'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: 'Data Visualization Suite',
      description: 'Collection of interactive charts and graphs for exploring complex datasets.',
      image: '/lovable-uploads/676e3de8-ec80-499e-9d50-e7314b385906.png',
      technologies: ['D3.js', 'React', 'TypeScript', 'Tailwind'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      title: 'Statistical Analysis Tool',
      description: 'Web application for performing statistical tests and generating comprehensive reports.',
      image: '/lovable-uploads/73863ed7-f2ca-44a7-a160-8926273e66fc.png',
      technologies: ['R', 'Shiny', 'ggplot2', 'dplyr'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A showcase of my data science and web development projects
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={14} />
                    Featured
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;