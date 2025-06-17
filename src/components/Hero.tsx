import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, Linkedin, Github, Code, Database, BarChart3, Users, TrendingUp, Award } from 'lucide-react';
import SkillHeatmap from './SkillHeatmap';
import AnimateOnScroll from './MicroInteractions';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const floatingElements = [
    { delay: '0s', duration: '6s', size: 'w-16 h-16', color: 'emerald-300', position: 'top-20 left-20' },
    { delay: '2s', duration: '8s', size: 'w-12 h-12', color: 'teal-400', position: 'top-40 right-32' },
    { delay: '4s', duration: '7s', size: 'w-20 h-8', color: 'sage-300', position: 'bottom-32 left-1/4' },
    { delay: '1s', duration: '9s', size: 'w-8 h-8', color: 'forest-400', position: 'top-1/3 right-20' },
    { delay: '3s', duration: '5s', size: 'w-14 h-14', color: 'emerald-200', position: 'bottom-48 right-1/3' },
  ];

  const skills = [
    { icon: Code, name: 'Python', level: 95, logo: '🐍' },
    { icon: Database, name: 'Data Analysis', level: 90, logo: '📊' },
    { icon: BarChart3, name: 'Machine Learning', level: 80, logo: '🤖' }
  ];

  const achievements = [
    { icon: TrendingUp, number: '3+', label: 'Active Projects', description: 'Dashboard Solutions' },
    { icon: Users, number: '97%', label: 'Accuracy Rate', description: 'ML Models' },
    { icon: Award, number: '2', label: 'Certifications', description: 'Python & IT' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-sage-50 via-emerald-50 to-teal-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.size} bg-${element.color} rounded-full opacity-20 animate-bounce ${element.position}`}
            style={{ 
              animationDelay: element.delay, 
              animationDuration: element.duration 
            }}
          ></div>
        ))}
        
        {/* Rotating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-emerald-400 rotate-45 opacity-30 animate-spin" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 border-2 border-teal-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-10 h-2 bg-forest-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <AnimateOnScroll animation="slide-up">
            <div className={`text-center lg:text-left transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-6">
                <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-pulse">
                  📍 Shirpur, Maharashtra, India
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-forest-900 mb-6 leading-tight">
                <span className="block animate-fade-in">Rohit P.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  Chavan
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-forest-700 mb-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                BSc Data Science Student
              </p>
              
              {/* Enhanced Tagline with typewriter effect */}
              <div className="text-lg md:text-xl text-emerald-600 font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <span className="typewriter">"Solving real-world problems with code and creativity"</span>
              </div>
              
              <p className="text-lg text-forest-600 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.9s' }}>
                Passionate about transforming data into actionable insights using Python, machine learning, and statistical modeling. 
                Building innovative solutions with AI and data visualization.
              </p>

              {/* Achievement Stats with enhanced animations */}
              <AnimateOnScroll animation="scale-in" delay={300}>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                      <achievement.icon className="w-6 h-6 text-emerald-600 mx-auto mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                      <div className="text-2xl font-bold text-emerald-600 group-hover:text-emerald-700">{achievement.number}</div>
                      <div className="text-sm font-medium text-forest-700">{achievement.label}</div>
                      <div className="text-xs text-forest-500">{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              
              {/* Enhanced CTA Buttons with micro-interactions */}
              <AnimateOnScroll animation="bounce-in" delay={500}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6">
                  <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <span>View My Projects</span>
                    <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
                  </button>
                  <button className="group border-2 border-forest-600 text-forest-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:-translate-y-1">
                    <span>Download Resume</span>
                    <Download className="w-5 h-5 group-hover:animate-pulse" />
                  </button>
                </div>
              </AnimateOnScroll>
              
              {/* Enhanced Social Links */}
              <AnimateOnScroll animation="fade-in" delay={700}>
                <div className="flex justify-center lg:justify-start gap-4 mb-4">
                  <a href="mailto:chavanrohit2213@gmail.com" className="group p-4 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <Mail className="w-6 h-6 group-hover:animate-pulse" />
                  </a>
                  <a href="https://linkedin.com/in/rohit-chavan" className="group p-4 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <Linkedin className="w-6 h-6 group-hover:animate-pulse" />
                  </a>
                  <a href="https://github.com/RohitTips" className="group p-4 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <Github className="w-6 h-6 group-hover:animate-pulse" />
                  </a>
                </div>
              </AnimateOnScroll>
              
              {/* Social Labels */}
              <div className="flex justify-center lg:justify-start gap-4 text-xs text-forest-500 animate-fade-in" style={{ animationDelay: '1.6s' }}>
                <span>Email</span>
                <span>LinkedIn</span>
                <span>GitHub</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Hero Image/Illustration with Skill Heatmap */}
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className={`relative transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative group">
                {/* Enhanced backdrop with blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-400 to-sage-400 rounded-full blur-3xl opacity-40 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Main image container */}
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-emerald-100 group-hover:shadow-3xl transition-all duration-500">
                  <img
                    src="/lovable-uploads/7ddb1f05-1d29-492f-b854-9a20aabe55e5.png"
                    alt="Rohit P. Chavan - Data Science Student"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Replace skills progress bars with dynamic heatmap */}
                  <div className="mt-6">
                    <SkillHeatmap />
                  </div>
                  
                  {/* Enhanced Floating skill badges */}
                  <div className="absolute -top-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-xl shadow-xl animate-bounce transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: '2s' }}>
                    <div className="flex items-center gap-2">
                      <span>🐍</span>
                      <span className="font-semibold">Python Expert</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-xl shadow-xl animate-bounce transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: '3s' }}>
                    <div className="flex items-center gap-2">
                      <span>📊</span>
                      <span className="font-semibold">Data Analyst</span>
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-10 bg-gradient-to-r from-forest-600 to-emerald-600 text-white px-3 py-2 rounded-xl shadow-xl animate-pulse transform hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center gap-1">
                      <span>🤖</span>
                      <span className="font-semibold text-sm">AI/ML</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <AnimateOnScroll animation="bounce-in" delay={1000}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
          <ChevronDown className="w-6 h-6 text-forest-600 group-hover:text-emerald-600 transition-colors duration-300" />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Hero;
