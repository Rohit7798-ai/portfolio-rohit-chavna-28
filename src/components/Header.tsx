
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
        ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm'
    }`}>
      {/* Decorative circular background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-100/30 dark:bg-emerald-900/20 rounded-full blur-xl"></div>
        <div className="absolute top-5 right-20 w-20 h-20 bg-teal-100/40 dark:bg-teal-900/20 rounded-full blur-lg"></div>
        <div className="absolute -bottom-5 right-10 w-24 h-24 bg-sage-100/20 dark:bg-sage-900/10 rounded-full blur-lg"></div>
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-emerald-50/30 to-teal-50/20 dark:from-slate-900/50 dark:via-slate-800/30 dark:to-slate-900/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header Level */}
        <div className="flex items-center justify-between py-4">
          {/* Left: Name in circular pill */}
          <div className="flex items-center space-x-4">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-full border border-emerald-200/50 dark:border-emerald-700/30 shadow-sm">
              <span className="text-lg lg:text-xl font-bold text-forest-800 dark:text-emerald-300">
                Rohit
              </span>
              <span className="text-lg lg:text-xl font-light text-emerald-600 dark:text-emerald-400 ml-1">
                Chavan
              </span>
              <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full ml-2 animate-pulse"></span>
            </div>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <a
                  href={item.href}
                  className="group relative text-forest-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 font-medium text-base py-2"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  <span className="group-hover:animate-pulse">{item.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
                {index < navItems.length - 1 && (
                  <span className="text-emerald-300 dark:text-emerald-700 text-sm">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Right: Theme Toggle + Mobile Menu */}
          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-emerald-50 dark:hover:bg-slate-800 transition-all duration-300"
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

        {/* Bottom Level: Location & Dynamic Tagline */}
        <div className="hidden lg:flex items-center justify-between pb-4 border-t border-emerald-100/50 dark:border-emerald-800/30 pt-4">
          {/* Left: Location Tag */}
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center bg-white/70 dark:bg-slate-800/70 text-emerald-800 dark:text-emerald-300 px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm border border-emerald-200/40 dark:border-emerald-700/40 shadow-sm">
              📍 Shirpur, Maharashtra, India
            </span>
            <div className="text-base font-medium text-emerald-600 dark:text-emerald-400 typewriter-dynamic">
              {taglines[currentTagline]}
            </div>
          </div>

          {/* Right: Decorative circular element */}
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse delay-75"></div>
            <div className="w-1.5 h-1.5 bg-sage-400 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
        }`}>
          <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-2xl border border-emerald-100 dark:border-emerald-800 p-4 space-y-1 shadow-lg mt-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-forest-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/50 dark:hover:bg-slate-800/50 rounded-xl transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            {/* Mobile Profile Section */}
            <div className="flex items-center space-x-3 pt-3 mt-3 border-t border-emerald-100 dark:border-emerald-800">
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
