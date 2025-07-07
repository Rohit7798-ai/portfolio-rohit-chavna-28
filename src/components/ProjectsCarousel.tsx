import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'AI Data Visualization Dashboard',
      description: 'Interactive dashboard for data analysis',
      longDescription: 'A comprehensive web-based dashboard that uses Python and AI to transform raw data into interactive visualizations. Features real-time data processing, multiple chart types, and export capabilities.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      tech: ['Python', 'React', 'D3.js', 'FastAPI'],
      liveUrl: '#',
      githubUrl: 'https://github.com/RohitTips/ai-lumina-data-flow-git'
    },
    {
      id: 2,
      title: 'Statistical Analysis Platform',
      description: 'Advanced analytics for complex datasets',
      longDescription: 'Advanced statistical modeling platform using NumPy and Pandas for complex data analysis. Includes predictive modeling, statistical tests, and automated reporting features.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      tech: ['Python', 'NumPy', 'Pandas', 'Streamlit'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Machine Learning Research',
      description: 'Pattern recognition algorithms',
      longDescription: 'Research project exploring machine learning algorithms for data pattern recognition. Implemented various ML models including neural networks, decision trees, and ensemble methods.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Jupyter'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-sm mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Featured Projects
        </motion.h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            <ChevronLeft size={20} className="text-gray-600 dark:text-gray-400" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg"
            style={{ minWidth: '44px', minHeight: '44px' }}
          >
            <ChevronRight size={20} className="text-gray-600 dark:text-gray-400" />
          </button>

          {/* Project Cards */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: -currentIndex * 100 + '%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="w-full flex-shrink-0 px-2"
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openProject(project)}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors text-sm"
                          style={{ minHeight: '44px' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
                          style={{ minHeight: '44px' }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-emerald-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeProject}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeProject}
                  className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                  style={{ minWidth: '44px', minHeight: '44px' }}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a
                    href={selectedProject.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                    style={{ minHeight: '44px' }}
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    style={{ minHeight: '44px' }}
                  >
                    <Github size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsCarousel;