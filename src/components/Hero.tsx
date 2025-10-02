import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { ChevronDown, Download, Mail, Linkedin, Github, Code, Database, BarChart3, Users, TrendingUp, Award } from 'lucide-react';
import mediumIcon from '../assets/icons/medium-icon.png';
import SkillHeatmap from './SkillHeatmap';
import AnimateOnScroll from './MicroInteractions';
const Hero = React.memo(() => {
  const [mounted, setMounted] = useState(false);
  const [currentDesignation, setCurrentDesignation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const designations = useMemo(() => ["BSc Data Science Student", "Problem Solver", "ML Explorer", "Dashboard Developer"], []);
  
  useEffect(() => {
    setMounted(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    const interval = setInterval(() => {
      setCurrentDesignation(prev => (prev + 1) % designations.length);
    }, 3000);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [designations.length]);
  
  const floatingElements = useMemo(() => [{
    delay: '0s',
    duration: '6s',
    size: 'w-6 h-6 sm:w-12 sm:h-12 lg:w-16 lg:h-16',
    color: 'emerald-300',
    position: 'top-20 left-4 sm:left-10 lg:left-20'
  }, {
    delay: '2s',
    duration: '8s',
    size: 'w-4 h-4 sm:w-8 sm:h-8 lg:w-12 lg:h-12',
    color: 'teal-400',
    position: 'top-32 sm:top-40 right-8 sm:right-16 lg:right-32'
  }, {
    delay: '4s',
    duration: '7s',
    size: 'w-8 h-3 sm:w-16 sm:h-6 lg:w-20 lg:h-8',
    color: 'sage-300',
    position: 'bottom-32 left-1/4'
  }, {
    delay: '1s',
    duration: '9s',
    size: 'w-3 h-3 sm:w-6 sm:h-6 lg:w-8 lg:h-8',
    color: 'forest-400',
    position: 'top-1/3 right-4 sm:right-10 lg:right-20'
  }, {
    delay: '3s',
    duration: '5s',
    size: 'w-6 h-6 sm:w-10 sm:h-10 lg:w-14 lg:h-14',
    color: 'emerald-200',
    position: 'bottom-48 right-1/3'
  }], []);
  
  const achievements = useMemo(() => [{
    icon: TrendingUp,
    number: '3+',
    label: 'Active Projects',
    description: 'Dashboard Solutions'
  }, {
    icon: Users,
    number: '97%',
    label: 'Accuracy Rate',
    description: 'ML Models'
  }, {
    icon: Award,
    number: '2',
    label: 'Certifications',
    description: 'Python & IT'
  }], []);

  const particleCount = useMemo(() => isMobile ? 3 : 6, [isMobile]);
  
  const handleViewProjects = useCallback(() => {
    document.getElementById('portfolio')?.scrollIntoView({
      behavior: 'smooth'
    });
  }, []);
  
  const handleDownloadResume = useCallback(() => {
    window.open('https://drive.google.com/file/d/1FONQIYx1KXaGOO-buNLnr0Ylbj1df74R/view?usp=drive_link', '_blank');
  }, []);
  
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-sage-50 via-emerald-50 to-teal-50 pt-20 sm:pt-16 lg:pt-0">
      
      
      <div className="absolute inset-0 pointer-events-none will-change-transform">
        {floatingElements.map((element, index) => <div key={index} className={`absolute ${element.size} bg-${element.color} rounded-full opacity-20 ${element.position}`} style={{
        animationName: 'bounce',
        animationDelay: element.delay,
        animationDuration: element.duration,
        animationIterationCount: 'infinite'
      }}></div>)}
        
        {[...Array(particleCount)].map((_, i) => <div key={`particle-${i}`} className={`absolute w-1 h-1 sm:w-2 sm:h-2 bg-emerald-400 rounded-full opacity-30`} style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationName: 'bounce',
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${3 + Math.random() * 4}s`,
        animationIterationCount: 'infinite'
      }} />)}
        
        <div className="absolute top-1/4 left-1/4 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-emerald-400 rotate-45 opacity-30 animate-spin" style={{
        animationDuration: '12s'
      }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 border-2 border-teal-400 rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-6 h-1 sm:w-8 sm:h-1 lg:w-10 lg:h-2 bg-forest-300 rounded-full opacity-20 animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          <AnimateOnScroll animation="slide-up">
            <div className={`text-center lg:text-left transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-4 sm:mb-6">
                <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                  📍 Shirpur, Maharashtra, India
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-forest-900 mb-4 sm:mb-6 leading-tight">
                <span className="block">Rohit P. Chavan </span>
                
              </h1>
              
              
              <div className="text-lg sm:text-xl md:text-2xl text-forest-700 mb-3 sm:mb-4 h-6 sm:h-8">
                <span>{designations[currentDesignation]}</span>
              </div>
              
              
              <div className="text-base sm:text-lg md:text-xl text-emerald-600 font-semibold mb-3 sm:mb-4">
                <span>"Learning to solve problems through data and code"</span>
              </div>
              
              
              <p className="text-sm sm:text-base lg:text-lg text-forest-700 font-medium mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Data Science student with hands-on experience in Python, machine learning, and statistical modeling. I enjoy turning data into insights through analysis and visualization, and I'm focused on building solutions that solve real-world problems.
              </p>

              
              
              <AnimateOnScroll animation="scale-in" delay={300}>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8">
                  {achievements.map((achievement, index) => <div key={index} className="text-center p-2 sm:p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                      <achievement.icon className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-lg sm:text-2xl font-bold text-emerald-600">{achievement.number}</div>
                      <div className="text-xs sm:text-sm font-medium text-forest-700 leading-tight">{achievement.label}</div>
                      <div className="text-xs text-forest-500 hidden sm:block">{achievement.description}</div>
                    </div>)}
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="bounce-in" delay={500}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-4 sm:mb-6">
                  <button onClick={handleViewProjects} className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 shadow-lg hover:shadow-xl border-2 border-transparent hover:border-emerald-400">
                    <span>View My Projects</span>
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
                  </button>
                  <button onClick={handleDownloadResume} className="group border-2 border-forest-600 text-forest-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-forest-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 hover:border-forest-700">
                    <span>Download Resume</span>
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                  </button>
                </div>
              </AnimateOnScroll>
              
              <AnimateOnScroll animation="fade-in" delay={700}>
                <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <a href="mailto:chavanrohit2213@gmail.com" className="group p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-white hover:bg-emerald-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                    <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/chavanrohittt" target="_blank" rel="noopener noreferrer" className="group p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                    <Linkedin className="w-4 h-4 sm:w-6 sm:h-6" />
                  </a>
                  <a href="https://github.com/Rohit7798-ai" target="_blank" rel="noopener noreferrer" className="group p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-white hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                    <Github className="w-4 h-4 sm:w-6 sm:h-6" />
                  </a>
                  <a href="https://medium.com/@chavanrohit" target="_blank" rel="noopener noreferrer" className="group p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full border border-emerald-200 text-forest-600 hover:text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl">
                    <img src={mediumIcon} alt="Medium" className="w-4 h-4 sm:w-6 sm:h-6 opacity-80 group-hover:opacity-100 transition-all duration-300" />
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </AnimateOnScroll>

          
          <AnimateOnScroll animation="scale-in" delay={200}>
            <div className={`relative transition-all duration-1000 mt-8 lg:mt-0 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-3xl shadow-2xl border border-emerald-100">
                <SkillHeatmap />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      
      <AnimateOnScroll animation="bounce-in" delay={1000}>
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group">
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-forest-600 group-hover:text-emerald-600 transition-colors duration-300" />
        </div>
      </AnimateOnScroll>
    </section>;
});
Hero.displayName = 'Hero';
export default Hero;
