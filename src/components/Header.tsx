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
  }, [isDarkMode]);

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
        ? 'py-3' 
        : 'py-4'
    }`}>
      {/* Glass morphism background */}
      <div className={`mx-4 lg:mx-8 rounded-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-xl border border-white/20 dark:border-slate-700/30' 
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border border-white/10 dark:border-slate-700/20'
      }`}>
        
        {/* Subtle circular background decorations */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-200/20 dark:bg-emerald-500/10 rounded-full blur-xl"></div>
          <div className="absolute top-2 right-16 w-8 h-8 bg-emerald-300/30 dark:bg-emerald-400/20 rounded-full blur-lg"></div>
        </div>

        <div className="relative px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            
            {/* Left: Profile Image + Name with subtle circular background */}
            <div className="relative flex items-center">
              <div className="absolute -inset-2 bg-emerald-100/40 dark:bg-emerald-900/30 rounded-full blur-sm"></div>
              <div className="relative flex items-center space-x-3">
                {/* Profile Image - Made smaller */}
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-emerald-500 shadow-lg">
                  <img
                    src="/lovable-uploads/7929d93d-c5a9-40fc-a2c1-0df9fd8b905a.png"
                    alt="Rohit P. Chavan"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Name */}
                <div className="flex items-center space-x-1">
                  <span className="text-xl lg:text-2xl font-semibold text-slate-800 dark:text-slate-100">
                    Rohit
                  </span>
                  <span className="text-xl lg:text-2xl font-light text-emerald-600 dark:text-emerald-400">
                    Chavan
                  </span>
                  <div className="w-2 h-2 bg-emerald-500 rounded-full ml-2 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group relative px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 font-medium text-sm lg:text-base rounded-full hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30"
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Active indicator dot */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </a>
              ))}
            </nav>

            {/* Right: Theme Toggle + Mobile Menu */}
            <div className="flex items-center space-x-3">
              <ThemeToggle 
                isDark={isDarkMode} 
                onToggle={() => setIsDarkMode(!isDarkMode)} 
              />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Menu className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden mx-4 mt-2 transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-white/20 dark:border-slate-700/30 shadow-xl p-4">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 px-4 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50/80 dark:hover:bg-emerald-900/30 rounded-xl transition-all duration-300 font-medium"
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
