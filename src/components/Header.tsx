
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ui/theme-toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'py-2 sm:py-3' 
        : 'py-3 sm:py-4'
    }`}>
      {/* Glass morphism background */}
      <div className={`mx-2 sm:mx-4 lg:mx-8 rounded-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-xl border border-white/20 dark:border-slate-700/30' 
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border border-white/10 dark:border-slate-700/20'
      }`}>
        
        {/* Subtle circular background decorations */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-2 right-16 w-8 h-8 bg-emerald-300/30 dark:bg-emerald-400/20 rounded-full blur-lg"></div>
        </div>

        <div className="relative px-3 sm:px-6 lg:px-8 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            
            {/* Left: Profile Image + Name */}
            <div className="relative flex items-center min-w-0 flex-shrink-0">
              {/* Enhanced background glow */}
              <div className="absolute -inset-3 bg-gradient-to-r from-emerald-100/60 via-teal-100/40 to-emerald-100/60 dark:from-emerald-900/40 dark:via-teal-900/30 dark:to-emerald-900/40 rounded-full blur-lg"></div>
              
              <div className="relative flex items-center space-x-2 sm:space-x-3">
                {/* Enhanced Profile Image with new styling */}
                <div className="relative group">
                  {/* Outer glow shadow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Main image container with enhanced border */}
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border-2 border-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    {/* Inner container for image */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-800">
                      <img
                        src="/lovable-uploads/3affa505-bd3e-40d0-a765-c9c795abf9e5.png"
                        alt="Rohit P. Chavan"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Inner glow effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-slate-900/10"></div>
                  </div>
                  
                  {/* Floating effect shadow */}
                  <div className="absolute inset-0 rounded-full shadow-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 transform translate-y-1"></div>
                </div>
                
                {/* Name - Responsive text */}
                <div className="flex items-center space-x-1 min-w-0">
                  <span className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-800 dark:text-slate-100 truncate">
                    Rohit
                  </span>
                  <span className="text-lg sm:text-xl lg:text-2xl font-light text-emerald-600 dark:text-emerald-400 truncate">
                    Chavan
                  </span>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full ml-1 sm:ml-2 animate-pulse flex-shrink-0"></div>
                </div>
              </div>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative px-3 lg:px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 font-medium text-sm lg:text-base rounded-full hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 whitespace-nowrap"
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Active indicator dot */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </a>
              ))}
            </nav>

            {/* Right: Theme Toggle + Mobile Menu */}
            <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
              <ThemeToggle 
                isDark={isDarkMode} 
                onToggle={() => setIsDarkMode(!isDarkMode)} 
              />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 transition-all duration-300 flex-shrink-0"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mx-2 sm:mx-4 mt-2 transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-slate-700/30 shadow-xl p-4">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 rounded-xl transition-all duration-300 font-medium text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
