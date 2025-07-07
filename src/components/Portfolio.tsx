
import React, { useState } from 'react';
import AnimatedProjectCard from './AnimatedProjectCard';
import AnimateOnScroll from './MicroInteractions';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Data Visualization Dashboard',
      category: 'data-science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'A web-based dashboard that uses Python and AI to transform raw data into interactive visualizations',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
      year: '2024',
      github: 'github.com/RohitTips/ai-lumina-data-flow-git'
    },
    {
      id: 2,
      title: 'Statistical Analysis Platform',
      category: 'data-science',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Advanced statistical modeling platform using NumPy and Pandas for complex data analysis',
      technologies: ['Python', 'NumPy', 'Pandas', 'Seaborn'],
      year: '2024'
    },
    {
      id: 3,
      title: 'Machine Learning Research',
      category: 'machine-learning',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      description: 'Research project exploring machine learning algorithms for data pattern recognition',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Jupyter'],
      year: '2023'
    }
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'machine-learning', label: 'ML' },
    { id: 'analytics', label: 'Analytics' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Selected GitHub repositories showcasing data science and machine learning projects
          </p>
        </div>

        {/* Enhanced Filter Buttons - Mobile Optimized */}
        <AnimateOnScroll animation="slide-up" delay={200}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`group px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-sm sm:text-base whitespace-nowrap ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-forest-700 hover:bg-emerald-100 border border-emerald-200 hover:shadow-md'
                }`}
              >
                <span className="group-hover:animate-pulse">{category.label}</span>
              </button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Enhanced Projects Grid with Animated Cards - Mobile Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {filteredProjects.map((project, index) => (
            <AnimateOnScroll key={project.id} animation="scale-in" delay={index * 100}>
              <AnimatedProjectCard project={project} index={index} />
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
