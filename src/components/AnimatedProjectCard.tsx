import React from 'react';
import { Github } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  year: string;
  github?: string;
}
interface AnimatedProjectCardProps {
  project: Project;
  index: number;
}
const AnimatedProjectCard = ({
  project,
  index
}: AnimatedProjectCardProps) => {
  return <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-100">
      <div className="relative overflow-hidden aspect-square">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-[2px] my-[3px]"></div>
        
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map(tech => <span key={tech} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded border border-white/30">
                {tech}
              </span>)}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-forest-900 group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
            {project.title}
          </h3>
          <span className="text-sm text-forest-500 bg-emerald-100 px-2 py-1 rounded flex-shrink-0 ml-2">
            {project.year}
          </span>
        </div>
        
        <p className="text-forest-700 mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-1">
            {project.technologies.map(tech => <span key={tech} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">
                {tech}
              </span>)}
          </div>
          {project.github && <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200 flex items-center gap-2 font-semibold">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>}
        </div>
      </div>
    </div>;
};
export default AnimatedProjectCard;