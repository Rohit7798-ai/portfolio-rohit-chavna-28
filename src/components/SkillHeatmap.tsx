import React, { useState, useEffect } from 'react';
import pythonIcon from '../assets/icons/python-icon.png';
import pandasIcon from '../assets/icons/pandas-icon.png';
import numpyIcon from '../assets/icons/numpy-icon.png';
import matplotlibIcon from '../assets/icons/matplotlib-icon.png';
import sklearnIcon from '../assets/icons/sklearn-icon.png';
import dataAnalysisIcon from '../assets/icons/data-analysis-icon.png';
import machineLearningIcon from '../assets/icons/machine-learning-icon.png';
import statisticsIcon from '../assets/icons/statistics-icon.png';

const SkillHeatmap = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { 
      name: 'Python', 
      level: 95, 
      icon: pythonIcon, 
      category: 'python',
      description: '5+ years writing Python scripts',
      color: 'from-orange-500 to-teal-500'
    },
    { 
      name: 'Data Analysis', 
      level: 90, 
      icon: dataAnalysisIcon, 
      category: 'analysis',
      description: 'Statistical analysis & data insights',
      color: 'from-emerald-500 to-cyan-500'
    },
    { 
      name: 'Pandas', 
      level: 90, 
      icon: pandasIcon, 
      category: 'python',
      description: 'Expert data manipulation & cleaning',
      color: 'from-orange-500 to-teal-500'
    },
    { 
      name: 'NumPy', 
      level: 85, 
      icon: numpyIcon, 
      category: 'libraries',
      description: 'Numerical computing & array operations',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Machine Learning', 
      level: 80, 
      icon: machineLearningIcon, 
      category: 'ml',
      description: 'Supervised & unsupervised learning',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      name: 'Matplotlib', 
      level: 85, 
      icon: matplotlibIcon, 
      category: 'libraries',
      description: 'Data visualization & plotting',
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Statistical Modeling', 
      level: 85, 
      icon: statisticsIcon, 
      category: 'analysis',
      description: 'Hypothesis testing & predictive models',
      color: 'from-emerald-500 to-cyan-500'
    },
    { 
      name: 'Scikit-learn', 
      level: 75, 
      icon: sklearnIcon, 
      category: 'libraries',
      description: 'ML algorithms & model evaluation',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const getStrokeColor = (category: string) => {
    switch (category) {
      case 'python':
        return '#f97316'; // orange-500
      case 'analysis':
        return '#10b981'; // emerald-500
      case 'libraries':
        return '#6366f1'; // indigo-500
      case 'ml':
        return '#3b82f6'; // blue-500
      default:
        return '#6366f1';
    }
  };

  const getPercentageColor = (category: string) => {
    switch (category) {
      case 'python':
        return 'text-orange-500';
      case 'analysis':
        return 'text-emerald-500';
      case 'libraries':
        return 'text-indigo-500';
      case 'ml':
        return 'text-blue-500';
      default:
        return 'text-indigo-500';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills Heatmap</h2>
          <p className="text-lg text-gray-600">Hover over skills to see expertise details</p>
        </div>

        <div className="grid grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => {
            const circumference = 2 * Math.PI * 45; // radius of 45
            const strokeDasharray = `${(skill.level / 100) * circumference} ${circumference}`;
            
            return (
              <div
                key={skill.name}
                className="group relative flex flex-col items-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Circular Skill Tile */}
                <div className="relative w-24 h-24 mb-4">
                  {/* Background Circle */}
                  <div className="absolute inset-0 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute inset-3 rounded-full bg-gray-50 flex items-center justify-center">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" 
                      />
                    </div>
                  </div>

                  {/* Progress Ring */}
                  <svg className="absolute inset-0 w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    {/* Background ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                      fill="transparent"
                    />
                    {/* Progress ring */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke={getStrokeColor(skill.category)}
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray={mounted ? strokeDasharray : `0 ${circumference}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-out"
                      style={{ 
                        filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.1))'
                      }}
                    />
                  </svg>
                </div>

                {/* Skill Name */}
                <h3 className="font-bold text-gray-900 text-sm text-center mb-2 leading-tight">
                  {skill.name}
                </h3>

                {/* Percentage */}
                <div className={`font-semibold text-lg ${getPercentageColor(skill.category)}`}>
                  {skill.level}%
                </div>

                {/* Hover Tooltip */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20 shadow-lg border min-w-max">
                  {skill.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillHeatmap;