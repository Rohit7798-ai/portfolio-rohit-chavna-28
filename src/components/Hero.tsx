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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      {/* Modern geometric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-blue-300/5 to-purple-300/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Profile */}
          <AnimateOnScroll animation="slide-up">
            <div className={`transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                {/* Profile image placeholder with modern design */}
                <div className="w-80 h-80 mx-auto lg:mx-0 mb-8 relative">
                  <div className="w-full h-full bg-gradient-to-br from-blue-100 to-emerald-100 rounded-3xl flex items-center justify-center shadow-2xl">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">RC</span>
                    </div>
                  </div>
                  {/* Floating elements around profile */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-1/2 -right-6 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-lg">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Right side - Content */}
          <AnimateOnScroll animation="slide-up" delay={200}>
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                  📍 Shirpur, Maharashtra, India
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                <span className="block">Rohit P.</span>
                <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Chavan</span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-gray-600 font-medium mb-6 h-12">
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  {designations[currentDesignation]}
                </span>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Passionate about transforming data into actionable insights using Python, machine learning, and statistical modeling.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
                    <div className="w-8 h-8 mx-auto mb-2 text-blue-600">
                      <achievement.icon className="w-full h-full" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{achievement.number}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <button 
                  onClick={handleViewProjects}
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  View My Projects
                </button>
                <button 
                  onClick={handleDownloadResume}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 inline mr-2" />
                  Download Resume
                </button>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="mailto:chavanrohit2213@gmail.com" className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 shadow-sm">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/chavanrohittt" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-300 shadow-sm">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/RohitTips" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-gray-700 hover:border-gray-300 transition-all duration-300 shadow-sm">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimateOnScroll animation="bounce-in" delay={1000}>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
