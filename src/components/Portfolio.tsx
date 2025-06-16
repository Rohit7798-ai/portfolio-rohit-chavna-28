
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      description: 'Modern e-commerce platform with seamless user experience',
      technologies: ['React', 'Node.js', 'MongoDB'],
      client: 'Retail Corp',
      year: '2024'
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile-app',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      description: 'Secure and intuitive mobile banking application',
      technologies: ['React Native', 'TypeScript', 'Express'],
      client: 'FinTech Startup',
      year: '2024'
    },
    {
      id: 3,
      title: 'Brand Identity System',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      description: 'Complete brand identity and design system',
      technologies: ['Figma', 'Illustrator', 'Photoshop'],
      client: 'Creative Agency',
      year: '2023'
    },
    {
      id: 4,
      title: 'SaaS Dashboard',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      description: 'Analytics dashboard for SaaS platform',
      technologies: ['Vue.js', 'D3.js', 'Python'],
      client: 'Tech Company',
      year: '2023'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      category: 'web-design',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      description: 'Personal portfolio with custom animations',
      technologies: ['Next.js', 'Framer Motion', 'Tailwind'],
      client: 'Personal Project',
      year: '2024'
    },
    {
      id: 6,
      title: 'Healthcare App UI',
      category: 'mobile-app',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      description: 'Patient management system interface',
      technologies: ['Flutter', 'Firebase', 'Dart'],
      client: 'Healthcare Provider',
      year: '2023'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'mobile-app', label: 'Mobile Apps' },
    { id: 'branding', label: 'Branding' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Work</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of projects that demonstrate my passion for creating exceptional digital experiences
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-coral-500 text-white shadow-lg'
                  : 'bg-gray-100 text-slate-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-coral-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm text-slate-500">{project.year}</span>
                </div>
                
                <p className="text-slate-600 mb-4">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">{project.client}</span>
                  <button className="text-coral-500 hover:text-coral-600 transition-colors duration-200 flex items-center gap-1">
                    View Case Study
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="bg-navy-900 text-white px-8 py-4 rounded-lg hover:bg-navy-800 transition-colors duration-300 text-lg font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
