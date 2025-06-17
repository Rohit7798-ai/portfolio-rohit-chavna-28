import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import ThemeToggle from './ui/theme-toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-100' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with enhanced animation */}
          <div className="text-2xl font-bold text-forest-800 group cursor-pointer">
            <span className="group-hover:text-emerald-600 transition-all duration-300 transform group-hover:scale-105">Rohit</span>
            <span className="text-emerald-600 group-hover:text-forest-800 transition-all duration-300 transform group-hover:scale-105"> Chavan</span>
          </div>

          {/* Desktop Navigation with enhanced hover effects */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group text-forest-700 hover:text-emerald-600 transition-all duration-300 relative story-link font-medium transform hover:scale-105"
              >
                <span className="group-hover:animate-pulse">{item.label}</span>
              </a>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle isDark={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="space-y-1">
                <div className={`w-6 h-0.5 bg-forest-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-forest-800 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}></div>
                <div className={`w-6 h-0.5 bg-forest-800 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}></div>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 pb-4' : 'max-h-0'
        }`}>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg border border-emerald-100 p-4 space-y-2 shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 px-4 text-forest-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-300 font-medium transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
