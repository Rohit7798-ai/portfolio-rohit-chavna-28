
import React from 'react';
import AnimateOnScroll from './MicroInteractions';

const TechStack = () => {
  const techCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      color: 'from-blue-500 to-purple-600',
      skills: [
        { name: 'Python', icon: '🐍', proficiency: 95 },
        { name: 'SQL', icon: '🗄️', proficiency: 80 }
      ]
    },
    {
      title: 'ML & AI Libraries',
      icon: '🤖',
      color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'Scikit-learn', icon: '🔬', proficiency: 85 },
        { name: 'Pandas', icon: '🐼', proficiency: 90 },
        { name: 'NumPy', icon: '🔢', proficiency: 85 },
        { name: 'TensorFlow', icon: '🧠', proficiency: 75 }
      ]
    },
    {
      title: 'Data Visualization',
      icon: '📊',
      color: 'from-orange-500 to-red-600',
      skills: [
        { name: 'Matplotlib', icon: '📈', proficiency: 85 },
        { name: 'Seaborn', icon: '🎨', proficiency: 80 },
        { name: 'Plotly', icon: '📉', proficiency: 75 },
        { name: 'Power BI', icon: '⚡', proficiency: 70 }
      ]
    },
    {
      title: 'Development Tools',
      icon: '🛠️',
      color: 'from-gray-600 to-gray-800',
      skills: [
        { name: 'Jupyter', icon: '📓', proficiency: 90 },
        { name: 'Git', icon: '🔧', proficiency: 80 },
        { name: 'VS Code', icon: '💾', proficiency: 85 },
        { name: 'Streamlit', icon: '🚀', proficiency: 75 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Tech Stack & Expertise</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive overview of the technologies and tools I use to build data-driven solutions
            </p>
          </div>
        </AnimateOnScroll>

        {/* Tech Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <AnimateOnScroll key={category.title} animation="scale-in" delay={categoryIndex * 100}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{category.title}</h3>
                    <p className="text-slate-600">Core technologies & tools</p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="group/skill relative p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s` }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl group-hover/skill:scale-110 transition-transform duration-300">
                          {skill.icon}
                        </span>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{skill.name}</div>
                        </div>
                      </div>

                      {/* Proficiency Bar */}
                      <div className="relative">
                        <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-slate-500 text-right">{skill.proficiency}%</div>
                      </div>

                      {/* Hover tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap">
                        {skill.proficiency}% proficiency
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
