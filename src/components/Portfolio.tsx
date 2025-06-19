
import React, { useState } from 'react';
import { ChevronRight, ExternalLink, Github, TrendingUp, Users, Zap } from 'lucide-react';
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
      client: 'Personal Project',
      year: '2024',
      github: 'github.com/RohitTips/ai-lumina-data-flow-git',
      features: ['Interactive Data Processing', 'Real-time Visualizations', 'AI-powered Insights'],
      metrics: [
        { icon: TrendingUp, value: '40%', label: 'Efficiency Boost' },
        { icon: Users, value: '200+', label: 'Users' }
      ]
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
      features: ['Statistical Modeling', 'Data Cleaning', 'Predictive Analytics'],
      metrics: [
        { icon: Zap, value: '97%', label: 'Accuracy' },
        { icon: TrendingUp, value: '60%', label: 'Speed Improvement' }
      ]
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
      features: ['Pattern Recognition', 'Algorithm Optimization', 'Model Validation'],
      metrics: [
        { icon: TrendingUp, value: '95%', label: 'Model Accuracy' },
        { icon: Zap, value: '3x', label: 'Faster Processing' }
      ]
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
      features: ['Engagement Analysis', 'Content Strategy', 'Performance Metrics'],
      metrics: [
        { icon: Users, value: '150%', label: 'Engagement Boost' },
        { icon: TrendingUp, value: '80%', label: 'Reach Increase' }
      ]
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
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-sage-50 to-emerald-50 relative overflow-hidden">
      {/* Floating 3D Elements - Responsive */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 sm:top-32 left-4 sm:left-20 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 sm:top-64 right-8 sm:right-32 w-8 h-8 sm:w-16 sm:h-16 bg-sage-400 rounded-lg opacity-25 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-24 sm:bottom-48 left-1/3 w-10 h-6 sm:w-20 sm:h-12 bg-forest-300 rounded-full opacity-30 transform rotate-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-4 sm:right-16 w-4 h-4 sm:w-8 sm:h-8 bg-emerald-400 rotate-45 opacity-20 animate-spin" style={{ animationDuration: '10s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-forest-900 mb-3 sm:mb-4">Featured Projects</h2>
            <p className="text-base sm:text-lg lg:text-xl text-forest-700 max-w-3xl mx-auto leading-relaxed">
              A showcase of data science projects demonstrating expertise in Python, statistical modeling, and machine learning
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

        {/* Enhanced View All CTA */}
        <AnimateOnScroll animation="bounce-in" delay={400}>
          <div className="text-center">
            <button className="group bg-gradient-to-r from-forest-700 to-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-forest-800 hover:to-emerald-800 transition-all duration-300 text-base sm:text-lg font-semibold transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
              <span className="group-hover:animate-pulse">View All Projects on GitHub</span>
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Portfolio;
