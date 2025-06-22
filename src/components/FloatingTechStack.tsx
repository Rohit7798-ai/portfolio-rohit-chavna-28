
import React, { useMemo } from 'react';

const FloatingTechStack = React.memo(() => {
  const techStack = useMemo(() => [
    { name: 'Python', icon: '🐍', color: 'bg-blue-500' },
    { name: 'Pandas', icon: '🐼', color: 'bg-green-500' },
    { name: 'NumPy', icon: '🔢', color: 'bg-purple-500' },
    { name: 'Matplotlib', icon: '📊', color: 'bg-orange-500' },
    { name: 'Scikit-learn', icon: '🤖', color: 'bg-red-500' },
    { name: 'SQL', icon: '🗄️', color: 'bg-indigo-500' },
    { name: 'Jupyter', icon: '📓', color: 'bg-yellow-500' },
    { name: 'Git', icon: '🔧', color: 'bg-gray-600' }
  ], []);

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
      <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-emerald-200">
        {techStack.map((tech, index) => (
          <div
            key={tech.name}
            className="group relative cursor-pointer pointer-events-auto"
          >
            <div 
              className={`w-10 h-10 ${tech.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md transform transition-all duration-300 hover:scale-125 hover:shadow-lg hover:-translate-y-2 will-change-transform`}
              style={{ 
                animationName: 'bounce',
                animationDelay: `${index * 0.1}s`,
                animationDuration: '3s',
                animationIterationCount: 'infinite'
              }}
            >
              <span className="text-lg">{tech.icon}</span>
            </div>
            
            {/* Optimized Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              {tech.name}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>

            {/* Optimized Glow effect */}
            <div 
              className={`absolute inset-0 ${tech.color} rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
});

FloatingTechStack.displayName = 'FloatingTechStack';

export default FloatingTechStack;
