import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { ChevronDown, Download, Mail, Linkedin, Github, Code, Database, BarChart3, Users, TrendingUp, Award } from 'lucide-react';
import SkillHeatmap from './SkillHeatmap';
import AnimateOnScroll from './MicroInteractions';

const Hero = React.memo(() => {
  const [mounted, setMounted] = useState(false);
  const [currentDesignation, setCurrentDesignation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const designations = useMemo(() => [
    "BSc Data Science Student",
    "Problem Solver",
    "ML Explorer",
    "Dashboard Developer"
  ], []);

  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      setCurrentDesignation((prev) => (prev + 1) % designations.length);
    }, 3000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [designations.length]);

  const floatingElements = useMemo(() => [
    { delay: '0s', duration: '6s', size: 'w-6 h-6 sm:w-12 sm:h-12 lg:w-16 lg:h-16', color: 'emerald-300', position: 'top-20 left-4 sm:left-10 lg:left-20' },
    { delay: '2s', duration: '8s', size: 'w-4 h-4 sm:w-8 sm:h-8 lg:w-12 lg:h-12', color: 'teal-400', position: 'top-32 sm:top-40 right-8 sm:right-16 lg:right-32' },
    { delay: '4s', duration: '7s', size: 'w-8 h-3 sm:w-16 sm:h-6 lg:w-20 lg:h-8', color: 'sage-300', position: 'bottom-32 left-1/4' },
    { delay: '1s', duration: '9s', size: 'w-3 h-3 sm:w-6 sm:h-6 lg:w-8 lg:h-8', color: 'forest-400', position: 'top-1/3 right-4 sm:right-10 lg:right-20' },
    { delay: '3s', duration: '5s', size: 'w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14', color: 'emerald-200', position: 'bottom-48 right-1/3' },
  ], []);

  const achievements = useMemo(() => [
    { icon: TrendingUp, number: '3+', label: 'Active Projects', description: 'Dashboard Solutions' },
    { icon: Users, number: '97%', label: 'Accuracy Rate', description: 'ML Models' },
    { icon: Award, number: '2', label: 'Certifications', description: 'Python & IT' }
  ], []);

  // Reduced particle count for better performance
  const particleCount = useMemo(() => isMobile ? 3 : 6, [isMobile]);

  const handleViewProjects = useCallback(() => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleDownloadResume = useCallback(() => {
    // Add resume download logic here
    console.log('Download resume clicked');
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white pt-20">
      {/* Optimized Floating Particles Background */}
      <div className="absolute inset-0 pointer-events-none will-change-transform">
        {/* Main floating elements */}
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.size} bg-${element.color} rounded-full opacity-20 ${element.position}`}
            style={{ 
              animationName: 'bounce',
              animationDelay: element.delay, 
              animationDuration: element.duration,
              animationIterationCount: 'infinite'
            }}
          ></div>
        ))}
        
        {/* Reduced particle system for better performance */}
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-emerald-400 rounded-full opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationName: 'bounce',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              animationIterationCount: 'infinite'
            }}
          />
        ))}
        
        {/* Optimized geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-emerald-400 rotate-45 opacity-30 animate-spin" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-2 border-teal-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-6 h-1 sm:w-8 sm:h-1 lg:w-10 lg:h-2 bg-forest-300 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <AnimateOnScroll animation="slide-up">
            <div className={`transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-8">
                <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-8">
                  📍 Shirpur, Maharashtra, India
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-forest-900 mb-6 leading-tight">
                <span className="block">Rohit P. Chavan</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-emerald-600 font-semibold mb-4 h-8">
                <span>{designations[currentDesignation]}</span>
              </div>
              
              <p className="text-lg text-forest-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Passionate about transforming data into actionable insights using Python, machine learning, and statistical modeling.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button 
                  onClick={handleViewProjects}
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  View My Projects
                </button>
                <button 
                  onClick={handleDownloadResume}
                  className="border-2 border-forest-600 text-forest-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-forest-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 inline mr-2" />
                  Download Resume
                </button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-6 mb-4">
                <a href="mailto:chavanrohit2213@gmail.com" className="p-4 bg-white rounded-full border text-forest-600 hover:bg-emerald-600 hover:text-white transition-all duration-300 shadow-lg">
                  <Mail className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/chavanrohittt" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full border text-forest-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://github.com/RohitTips" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full border text-forest-600 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg">
                  <Github className="w-6 h-6" />
                </a>
              </div>
              
              <div className="flex justify-center gap-6 text-sm text-forest-500">
                <span>Email</span>
                <span>LinkedIn</span>
                <span>GitHub</span>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Optimized Scroll Indicator */}
      <AnimateOnScroll animation="bounce-in" delay={1000}>
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-forest-600 group-hover:text-emerald-600 transition-colors duration-300" />
        </div>
      </AnimateOnScroll>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
