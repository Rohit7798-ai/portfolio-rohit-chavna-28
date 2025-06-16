
import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, Linkedin, Github } from 'lucide-react';

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
            
            <p className="text-lg text-forest-600 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: '0.9s' }}>
              Passionate about transforming data into actionable insights using Python, machine learning, and statistical modeling. 
              Building innovative solutions with AI and data visualization.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl font-bold text-emerald-600">Python</div>
                <div className="text-sm text-forest-600">Programming</div>
              </div>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl font-bold text-teal-600">AI/ML</div>
                <div className="text-sm text-forest-600">Research</div>
              </div>
              <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl font-bold text-forest-600">Data</div>
                <div className="text-sm text-forest-600">Visualization</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in" style={{ animationDelay: '1.5s' }}>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg">
                View My Projects
                <ChevronDown className="w-5 h-5" />
              </button>
              <button className="border-2 border-forest-600 text-forest-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-forest-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                Download Resume
                <Download className="w-5 h-5" />
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '1.8s' }}>
              <a href="mailto:chavanrohit2213@gmail.com" className="p-3 bg-white/70 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/rohit-chavan" className="p-3 bg-white/70 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/RohitTips" className="p-3 bg-white/70 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Image/Illustration */}
          <div className={`relative transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="relative group">
              {/* Floating backdrop */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-400 to-sage-400 rounded-full blur-3xl opacity-30 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-emerald-100">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                  alt="Rohit P. Chavan - Data Science Student"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                
                {/* Floating skill badges */}
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce" style={{ animationDelay: '2s' }}>
                  🐍 Python Expert
                </div>
                <div className="absolute -bottom-4 -left-4 bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce" style={{ animationDelay: '3s' }}>
                  📊 Data Analyst
                </div>
                <div className="absolute top-1/2 -right-8 bg-forest-600 text-white px-3 py-2 rounded-lg shadow-lg animate-pulse">
                  🤖 AI/ML
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-forest-600" />
      </div>
    </section>
  );
};

export default Hero;
