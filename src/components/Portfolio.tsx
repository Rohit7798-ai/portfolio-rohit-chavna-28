
import React, { useState } from 'react';
import AnimatedProjectCard from './AnimatedProjectCard';
import AnimateOnScroll from './MicroInteractions';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Netflix Data Analysis Project',
      category: 'data-science',
      image: '/lovable-uploads/1b1a06e0-9aff-45c7-a7e7-e9a02971cb69.png',
      description: 'Netflix Data Analysis Project | Jun 2025 – Jul 2025. Analysis of Netflix content growth over time, popular genres and countries, clear dominance of Movies over TV Shows, and key content contributors (e.g., US, India)',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
      year: '2025'
    },
    {
      id: 2,
      title: 'Data Visualization Dashboard - Course Project',
      category: 'data-science',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'College project developing a web dashboard using Python libraries to visualize datasets and practice data analysis concepts',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Streamlit'],
      year: '2024',
      github: 'github.com/RohitTips/ai-lumina-data-flow-git'
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
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sage-50 to-emerald-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest-900 mb-3 sm:mb-4">Academic Projects</h2>
            <p className="text-base sm:text-lg lg:text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed">
              Student projects and coursework showcasing my learning journey in data science, Python programming, and statistical analysis
            </p>
          </div>
        </AnimateOnScroll>

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
