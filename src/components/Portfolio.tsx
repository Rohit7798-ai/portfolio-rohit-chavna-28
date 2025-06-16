
import React, { useState } from 'react';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';

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
      client: 'Personal Project',
      year: '2024',
      github: 'github.com/RohitTips/ai-lumina-data-flow-git',
      features: ['Interactive Data Processing', 'Real-time Visualizations', 'AI-powered Insights']
    },
    {
      id: 2,
      title: 'Statistical Analysis Platform',
      category: 'data-science',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Advanced statistical modeling platform using NumPy and Pandas for complex data analysis',
      technologies: ['Python', 'NumPy', 'Pandas', 'Seaborn'],
      client: 'Academic Project',
      year: '2024',
      features: ['Statistical Modeling', 'Data Cleaning', 'Predictive Analytics']
    },
    {
      id: 3,
      title: 'Machine Learning Research',
      category: 'machine-learning',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      description: 'Research project exploring machine learning algorithms for data pattern recognition',
      technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Jupyter'],
      client: 'College Research',
      year: '2023',
      features: ['Pattern Recognition', 'Algorithm Optimization', 'Model Validation']
    },
    {
      id: 4,
      title: 'Social Media Strategy Analytics',
      category: 'analytics',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      description: 'Analytics project from College Tips internship focusing on social media engagement',
      technologies: ['Python', 'Data Analysis', 'Excel', 'Visualization'],
      client: 'College Tips',
      year: '2023',
      features: ['Engagement Analysis', 'Content Strategy', 'Performance Metrics']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'data-science', label: 'Data Science' },
    { id: 'machine-learning', label: 'Machine Learning' },
    { id: 'analytics', label: 'Analytics' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-sage-50 to-emerald-50 relative overflow-hidden">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-24 h-24 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-64 right-32 w-16 h-16 bg-sage-400 rounded-lg opacity-25 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-48 left-1/3 w-20 h-12 bg-forest-300 rounded-full opacity-30 transform rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-16 w-8 h-8 bg-emerald-400 rotate-45 opacity-20 animate-spin" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4 animate-fade-in">Featured Projects</h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            A showcase of data science projects demonstrating expertise in Python, statistical modeling, and machine learning
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                filter === category.id
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-forest-700 hover:bg-emerald-100 border border-emerald-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded border border-white/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-forest-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-forest-500 bg-emerald-100 px-2 py-1 rounded">{project.year}</span>
                </div>
                
                <p className="text-forest-700 mb-4">{project.description}</p>
                
                {/* Features */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-forest-800 mb-2">Key Features:</h5>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature) => (
                      <span key={feature} className="text-xs bg-sage-100 text-forest-700 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-forest-600 font-medium">{project.client}</span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={`https://${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-forest-600 hover:text-emerald-600 transition-colors duration-200 flex items-center gap-1"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    <button className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200 flex items-center gap-1">
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-forest-700 to-emerald-700 text-white px-8 py-4 rounded-lg hover:from-forest-800 hover:to-emerald-800 transition-all duration-300 text-lg font-semibold transform hover:scale-105 shadow-lg">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
