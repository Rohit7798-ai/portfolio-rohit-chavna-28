import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    'Quick Links': [{
      name: 'Home',
      href: '#home'
    }, {
      name: 'About',
      href: '#about'
    }, {
      name: 'Portfolio',
      href: '#portfolio'
    }, {
      name: 'Blog',
      href: '#blog'
    }, {
      name: 'Contact',
      href: '#contact'
    }],
    'Services': [{
      name: 'Web Design',
      href: '#'
    }, {
      name: 'Mobile Apps',
      href: '#'
    }, {
      name: 'Branding',
      href: '#'
    }, {
      name: 'UX/UI Design',
      href: '#'
    }, {
      name: 'Consulting',
      href: '#'
    }],
    'Resources': [{
      name: 'Blog',
      href: '#blog'
    }, {
      name: 'Case Studies',
      href: '#'
    }, {
      name: 'Free Resources',
      href: '#'
    }, {
      name: 'Newsletter',
      href: '#'
    }, {
      name: 'FAQ',
      href: '#'
    }]
  };
  const socialLinks = [{
    name: 'LinkedIn',
    icon: '💼',
    href: '#'
  }, {
    name: 'Twitter',
    icon: '🐦',
    href: '#'
  }, {
    name: 'Dribbble',
    icon: '🏀',
    href: '#'
  }, {
    name: 'GitHub',
    icon: '💻',
    href: '#'
  }];
  return <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        

        {/* Newsletter Section */}
        

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-coral-500 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;