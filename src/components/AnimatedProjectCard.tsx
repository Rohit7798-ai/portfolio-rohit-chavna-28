
import React, { useState } from 'react';
import { ChevronRight, ExternalLink, Github, Zap, Users, TrendingUp } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  client: string;
  year: string;
  github?: string;
  features: string[];
  metrics?: {
    icon: React.ElementType;
    value: string;
    label: string;
  }[];
}

interface AnimatedProjectCardProps {
  project: Project;
  index: number;
}

const AnimatedProjectCard = ({ project, index }: AnimatedProjectCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative h-80 sm:h-96 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front of card */}
        <div className="absolute inset-0 w-full h-full backface-hidden group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-emerald-100 animate-fade-in">
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Floating metrics - Mobile optimized */}
            {project.metrics && (
              <div className="absolute top-2 sm:top-4 right-2 sm:right-4 space-y-1 sm:space-y-2">
                {project.metrics.slice(0, 2).map((metric, idx) => (
                  <div key={idx} className="bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-forest-700 flex items-center gap-1 animate-bounce" style={{ animationDelay: `${idx * 0.2}s` }}>
                    <metric.icon className="w-2 h-2 sm:w-3 sm:h-3" />
                    <span className="hidden sm:inline">{metric.value}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs bg-white/20 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-white/30 animate-pulse">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-3 sm:p-4 lg:p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-forest-900 group-hover:text-emerald-600 transition-colors duration-300 leading-tight pr-2">
                {project.title}
              </h3>
              <span className="text-xs sm:text-sm text-forest-500 bg-emerald-100 px-2 py-1 rounded animate-pulse flex-shrink-0">
                {project.year}
              </span>
            </div>
            
            <p className="text-sm sm:text-base text-forest-700 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
            
            <div className="flex justify-between items-center">
              <span className="text-xs sm:text-sm text-forest-600 font-medium truncate pr-2">{project.client}</span>
              <div className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200 flex items-center gap-1 text-xs sm:text-sm font-semibold flex-shrink-0">
                <span className="hidden sm:inline">Click to flip</span>
                <span className="sm:hidden">Flip</span>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Back of card - Mobile optimized */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-xl p-4 sm:p-6 text-white">
          <div className="h-full flex flex-col justify-between">
            <div className="overflow-y-auto">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 leading-tight">{project.title}</h3>
              <p className="text-emerald-100 mb-3 sm:mb-4 text-sm leading-relaxed">{project.description}</p>
              
              {/* Features */}
              <div className="mb-3 sm:mb-4">
                <h5 className="font-semibold mb-1 sm:mb-2 text-emerald-100 text-sm">Key Features:</h5>
                <div className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <div key={feature} className="text-xs sm:text-sm flex items-center gap-2 animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <Zap className="w-2 h-2 sm:w-3 sm:h-3 text-emerald-200 flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-3 sm:mb-4">
                <h5 className="font-semibold mb-1 sm:mb-2 text-emerald-100 text-sm">Tech Stack:</h5>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-white/20 px-2 py-1 rounded border border-white/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
              {project.github && (
                <a 
                  href={`https://${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/20 hover:bg-white/30 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  GitHub
                </a>
              )}
              <button 
                className="flex-1 bg-white text-emerald-600 hover:bg-emerald-50 px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-semibold"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedProjectCard;
