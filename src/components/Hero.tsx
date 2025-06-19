import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail, Linkedin, Github, Code, Database, BarChart3, Users, TrendingUp, Award } from 'lucide-react';
import SkillHeatmap from './SkillHeatmap';
import AnimateOnScroll from './MicroInteractions';

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentDesignation, setCurrentDesignation] = useState(0);
  
  const designations = [
    "BSc Data Science Student",
    "Problem Solver",
    "ML Explorer",
    "Dashboard Developer"
  ];

  useEffect(() => {
    setMounted(true);
    
    const interval = setInterval(() => {
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const floatingElements = [
    { delay: '0s', duration: '6s', size: 'w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16', color: 'emerald-300', position: 'top-20 left-4 sm:left-10 lg:left-20' },
    { delay: '2s', duration: '8s', size: 'w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12', color: 'teal-400', position: 'top-32 sm:top-40 right-8 sm:right-16 lg:right-32' },
    { delay: '4s', duration: '7s', size: 'w-10 h-4 sm:w-16 sm:h-6 lg:w-20 lg:h-8', color: 'sage-300', position: 'bottom-32 left-1/4' },
    { delay: '1s', duration: '9s', size: 'w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8', color: 'forest-400', position: 'top-1/3 right-4 sm:right-10 lg:right-20' },
    { delay: '3s', duration: '5s', size: 'w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14', color: 'emerald-200', position: 'bottom-48 right-1/3' },
  ];

  const achievements = [
    { icon: TrendingUp, number: '3+', label: 'Active Projects', description: 'Dashboard Solutions' },
    { icon: Users, number: '97%', label: 'Accuracy Rate', description: 'ML Models' },
    { icon: Award, number: '2', label: 'Certifications', description: 'Python & IT' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-sage-50 via-emerald-50 to-teal-50 pt-20 sm:pt-16 lg:pt-0">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Existing floating elements */}
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
        
        {/* Enhanced particle system - fewer on mobile */}
        {[...Array(window.innerWidth < 768 ? 6 : 12)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-emerald-400 rounded-full opacity-30 animate-bounce`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Rotating geometric shapes - responsive sizes */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-emerald-400 rotate-45 opacity-30 animate-spin" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-2 border-teal-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-6 h-1 sm:w-8 sm:h-1 lg:w-10 lg:h-2 bg-forest-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <AnimateOnScroll animation="slide-up">
            <div className={`text-center lg:text-left transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-4 sm:mb-6">
                <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 animate-pulse">
                  📍 Shirpur, Maharashtra, India
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-forest-900 mb-4 sm:mb-6 leading-tight">
                <span className="block animate-fade-in">Rohit P.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                  Chavan
                </span>
              </h1>
              
              {/* Enhanced typewriter designation */}
              <div className="text-lg sm:text-xl md:text-2xl text-forest-700 mb-3 sm:mb-4 h-6 sm:h-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <span className="typewriter-dynamic">{designations[currentDesignation]}</span>
              </div>
              
              {/* Enhanced Tagline with typewriter effect */}
              <div className="text-base sm:text-lg md:text-xl text-emerald-600 font-semibold mb-3 sm:mb-4 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                <span className="typewriter block sm:inline">"Solving real-world problems with code and creativity"</span>
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-forest-600 mb-6 sm:mb-8 max-w-2xl animate-fade-in leading-relaxed" style={{ animationDelay: '0.9s' }}>
                Passionate about transforming data into actionable insights using Python, machine learning, and statistical modeling. 
                Building innovative solutions with AI and data visualization.
              </p>

              {/* Achievement Stats with enhanced animations */}
              <AnimateOnScroll animation="scale-in" delay={300}>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center p-2 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group cursor-pointer">
                      <achievement.icon className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600 mx-auto mb-1 sm:mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                      <div className="text-lg sm:text-2xl font-bold text-emerald-600 group-hover:text-emerald-700">{achievement.number}</div>
                      <div className="text-xs sm:text-sm font-medium text-forest-700 leading-tight">{achievement.label}</div>
                      <div className="text-xs text-forest-500 hidden sm:block">{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </AnimateOnScroll>
              
              {/* Enhanced CTA Buttons with micro-interactions */}
              <AnimateOnScroll animation="bounce-in" delay={500}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-4 sm:mb-6">
                  <button className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <span>View My Projects</span>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                  </button>
                  <button className="group border-2 border-forest-600 text-forest-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-forest-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:-translate-y-1">
                    <span>Download Resume</span>
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                  </button>
                </div>
              </AnimateOnScroll>
              
              {/* Enhanced Social Links */}
              <AnimateOnScroll animation="fade-in" delay={700}>
                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <a href="mailto:chavanrohit2213@gmail.com" className="group p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <Mail className="w-4 h-4 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                  </a>
                  <a href="https://linkedin.com/in/rohit-chavan" className="group p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <Linkedin className="w-4 h-4 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                  </a>
                  <a href="https://github.com/RohitTips" className="group p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                    <Github className="w-4 h-4 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                  </a>
                </div>
              </AnimateOnScroll>
              
              {/* Social Labels */}
              <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 text-xs text-forest-500 animate-fade-in" style={{ animationDelay: '1.6s' }}>
                <span>Email</span>
                <span>LinkedIn</span>
                <span>GitHub</span>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Hero Image/Illustration with Skill Heatmap */}
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className={`relative transition-all duration-1000 mt-8 lg:mt-0 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative group">
                {/* Enhanced backdrop with blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-400 to-sage-400 rounded-full blur-3xl opacity-40 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute inset-2 sm:inset-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-3xl blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                
                {/* Main image container */}
                <div className="relative bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl border border-emerald-100 group-hover:shadow-3xl transition-all duration-500">
                  {/* Circular headshot image */}
                  <div className="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center mb-4 sm:mb-6">
                    <div className="relative">
                      <div className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-emerald-500 to-teal-500 shadow-2xl">
                        <img
                          src="/lovable-uploads/73863ed7-f2ca-44a7-a160-8926273e66fc.png"
                          alt="Rohit P. Chavan - Data Science Student"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Decorative ring around the image */}
                      <div className="absolute inset-0 rounded-full border-4 border-emerald-500 animate-pulse opacity-50"></div>
                    </div>
                  </div>
                  
                  {/* Replace skills progress bars with dynamic heatmap */}
                  <div className="mt-4 sm:mt-6">
                    <SkillHeatmap />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <AnimateOnScroll animation="bounce-in" delay={1000}>
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-forest-600 group-hover:text-emerald-600 transition-colors duration-300" />
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Hero;
