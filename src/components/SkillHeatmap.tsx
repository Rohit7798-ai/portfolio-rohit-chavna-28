
import React, { useState, useEffect } from 'react';
import { Code, Database, BarChart3, Brain, Zap, Target } from 'lucide-react';

const SkillHeatmap = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { name: 'Python', level: 95, icon: Code, category: 'Programming', heat: 5 },
    { name: 'Data Analysis', level: 90, icon: BarChart3, category: 'Analytics', heat: 5 },
    { name: 'Pandas', level: 90, icon: Database, category: 'Libraries', heat: 5 },
    { name: 'NumPy', level: 85, icon: Target, category: 'Libraries', heat: 4 },
    { name: 'Machine Learning', level: 80, icon: Brain, category: 'AI/ML', heat: 4 },
    { name: 'Matplotlib', level: 85, icon: BarChart3, category: 'Visualization', heat: 4 },
    { name: 'Statistical Modeling', level: 85, icon: Zap, category: 'Statistics', heat: 4 },
    { name: 'Scikit-learn', level: 75, icon: Brain, category: 'AI/ML', heat: 3 }
  ];

  const getHeatColor = (heat: number) => {
    const colors = {
      1: 'bg-emerald-100 text-emerald-700',
      2: 'bg-emerald-200 text-emerald-800',
      3: 'bg-emerald-400 text-white',
      4: 'bg-emerald-600 text-white',
      5: 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white'
    };
    return colors[heat as keyof typeof colors];
  };

  const getFireEmojis = (heat: number) => {
    return '🔥'.repeat(heat);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h4 className="text-2xl font-bold text-forest-900 mb-2">Skills Heatmap</h4>
        <p className="text-forest-600">Hover over skills to see expertise level</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={`group relative p-4 rounded-xl border-2 border-transparent hover:border-emerald-300 transition-all duration-300 cursor-pointer transform hover:scale-105 ${getHeatColor(skill.heat)} animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <skill.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <div className="font-semibold text-sm">{skill.name}</div>
              <div className="text-xs opacity-80">{skill.category}</div>
              <div className="text-lg">{getFireEmojis(skill.heat)}</div>
            </div>

            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              {skill.level}% Expertise
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>

            {/* Progress Ring */}
            <div className="absolute -top-2 -right-2 w-8 h-8">
              <svg className="w-8 h-8 transform -rotate-90" viewBox="0 0 32 32">
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  className="opacity-20"
                />
                <circle
                  cx="16"
                  cy="16"
                  r="14"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  strokeDasharray={`${(skill.level / 100) * 87.96} 87.96`}
                  className="opacity-80 transition-all duration-1000"
                  style={{ strokeDashoffset: mounted ? 0 : 87.96 }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
                {skill.level}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center gap-4 text-sm text-forest-600">
        <span>Expertise Level:</span>
        {[1, 2, 3, 4, 5].map((level) => (
          <div key={level} className="flex items-center gap-1">
            <div className={`w-4 h-4 rounded ${getHeatColor(level)}`}></div>
            <span>{level === 1 ? 'Beginner' : level === 5 ? 'Expert' : ''}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillHeatmap;
