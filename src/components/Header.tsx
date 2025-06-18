
import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import ThemeToggle from './ui/theme-toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
    "Data Enthusiast",
    "Python Developer", 
    "ML Explorer",
    "Problem Solver"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-emerald-100 dark:border-emerald-800' 
        : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm'
    }`}>
      {/* Gradient background divider */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-teal-50/30 to-sage-50/50 dark:from-slate-800/30 dark:via-slate-700/20 dark:to-slate-800/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Level: Logo + Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Left: Minimal Logo Section */}
          <div className="flex items-center">
            <div className="bg-emerald-50/80 dark:bg-emerald-900/20 px-4 py-2 rounded-full border border-emerald-200/50 dark:border-emerald-700/30 shadow-sm backdrop-blur-sm">
              <span className="text-xl lg:text-2xl font-bold text-forest-800 dark:text-emerald-300">
                Rohit
              </span>
              <span className="text-xl lg:text-2xl font-light text-emerald-600 dark:text-emerald-400 ml-1">
                Chavan
              </span>
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full ml-2 animate-pulse"></span>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="group relative text-forest-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 font-semibold text-lg py-2"
              >
                <span className="group-hover:animate-pulse">{item.label}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                {index < navItems.length - 1 && (
                  <span className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-emerald-300 dark:text-emerald-700">|</span>
                )}
              </a>
            ))}
          </nav>

          {/* Right: Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-emerald-50 dark:hover:bg-slate-800 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-forest-800 dark:text-slate-300" />
              ) : (
                <Menu className="w-6 h-6 text-forest-800 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom Level: Profile Image + Dynamic Tagline */}
        <div className="hidden lg:flex items-center justify-between pb-4 border-t border-emerald-100/50 dark:border-emerald-800/30 pt-4">
          {/* Left: Location Tag */}
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center bg-emerald-100/60 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-emerald-200/40 dark:border-emerald-700/40 shadow-sm">
              📍 Shirpur, Maharashtra, India
            </span>
            <div className="text-lg font-medium text-emerald-600 dark:text-emerald-400 typewriter-dynamic">
              {taglines[currentTagline]}
            </div>
          </div>

          {/* Right: Circular Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-white dark:border-slate-700 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <img
                src="/lovable-uploads/7ddb1f05-1d29-492f-b854-9a20aabe55e5.png"
                alt="Rohit P. Chavan"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-80 pb-4' : 'max-h-0'
        }`}>
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl border border-emerald-100 dark:border-emerald-800 p-4 space-y-1 shadow-lg mt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-forest-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-slate-800 rounded-lg transition-all duration-300 font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Profile Section */}
            <div className="flex items-center space-x-3 pt-3 mt-3 border-t border-emerald-100 dark:border-emerald-800">
              <div className="relative">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-200 dark:border-emerald-700 shadow-md">
                  <img
                    src="/lovable-uploads/7ddb1f05-1d29-492f-b854-9a20aabe55e5.png"
                    alt="Rohit P. Chavan"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <div className="text-sm font-medium text-emerald-600 dark:text-emerald-400 typewriter-dynamic">
                {taglines[currentTagline]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
