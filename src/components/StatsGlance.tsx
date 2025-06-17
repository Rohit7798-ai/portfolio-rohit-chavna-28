
import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Code, Award, Brain, Target, Zap, BookOpen } from 'lucide-react';
import AnimateOnScroll from './MicroInteractions';

const StatsGlance = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    models: 0,
    tools: 0,
    feedback: 0
  });

  const finalStats = {
    projects: 15,
    models: 7,
    tools: 18,
    feedback: 95
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        projects: Math.min(prev.projects + Math.ceil(finalStats.projects / steps), finalStats.projects),
        models: Math.min(prev.models + Math.ceil(finalStats.models / steps), finalStats.models),
        tools: Math.min(prev.tools + Math.ceil(finalStats.tools / steps), finalStats.tools),
        feedback: Math.min(prev.feedback + Math.ceil(finalStats.feedback / steps), finalStats.feedback)
      }));
    }, interval);

    // Clear timer when all counters reach final values
    const checkTimer = setInterval(() => {
      if (counters.projects >= finalStats.projects && 
          counters.models >= finalStats.models && 
          counters.tools >= finalStats.tools && 
          counters.feedback >= finalStats.feedback) {
        clearInterval(timer);
        clearInterval(checkTimer);
      }
    }, 100);

    return () => {
      clearInterval(timer);
      clearInterval(checkTimer);
    };
  }, []);

  const stats = [
    {
      icon: Code,
      number: `${counters.projects}+`,
      label: 'Projects Completed',
      description: 'Data Science & ML Projects',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Brain,
      number: counters.models.toString(),
      label: 'ML Models Built',
      description: 'Predictive & Classification Models',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Target,
      number: counters.tools.toString(),
      label: 'Tools Mastered',
      description: 'Programming & Analytics Tools',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Award,
      number: `${counters.feedback}%`,
      label: 'Positive Feedback',
      description: 'From Peers & Mentors',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600'
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: 'Data Dashboard Impact',
      value: '40% Efficiency Boost',
      description: 'Improved decision-making speed for teams'
    },
    {
      icon: Users,
      title: 'User Reach',
      value: '200+ Users',
      description: 'People using my data solutions'
    },
    {
      icon: Zap,
      title: 'Model Accuracy',
      value: '97% Average',
      description: 'Machine learning model performance'
    },
    {
      icon: BookOpen,
      title: 'Continuous Learning',
      value: '5+ Courses',
      description: 'Completed in last 12 months'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-48 h-48 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-in">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Stats at a Glance</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Numbers that showcase my journey and impact in data science
            </p>
          </div>
        </AnimateOnScroll>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <AnimateOnScroll key={stat.label} animation="scale-in" delay={index * 100}>
              <div className={`${stat.bgColor} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer border border-white/50`}>
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                
                <div className="text-4xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
                  {stat.number}
                </div>
                
                <div className="text-lg font-semibold text-slate-800 mb-1">
                  {stat.label}
                </div>
                
                <div className="text-sm text-slate-600">
                  {stat.description}
                </div>

                {/* Animated border */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${stat.color} p-0.5`}>
                  <div className={`w-full h-full ${stat.bgColor} rounded-2xl`}></div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Secondary Achievements */}
        <AnimateOnScroll animation="slide-up" delay={400}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Key Achievements</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="text-center p-6 rounded-xl hover:bg-gray-50 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <achievement.icon className="w-10 h-10 text-slate-600 mx-auto mb-4 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                  
                  <div className="text-xl font-bold text-blue-600 mb-2">
                    {achievement.value}
                  </div>
                  
                  <div className="font-semibold text-slate-800 mb-1">
                    {achievement.title}
                  </div>
                  
                  <div className="text-sm text-slate-600">
                    {achievement.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Call to Action */}
        <AnimateOnScroll animation="bounce-in" delay={600}>
          <div className="text-center mt-12">
            <p className="text-slate-600 mb-6">Want to see these numbers grow? Let's work together!</p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start a Project Together
            </button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default StatsGlance;
