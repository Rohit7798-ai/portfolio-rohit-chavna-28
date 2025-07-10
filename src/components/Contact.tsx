import React, { useState } from 'react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };
  const projectTypes = ['Web Design', 'Mobile App', 'Branding', 'E-commerce', 'UX/UI Audit', 'Other'];
  const budgetRanges = ['$5,000 - $10,000', '$10,000 - $25,000', '$25,000 - $50,000', '$50,000+'];
  const socialLinks = [{
    name: 'LinkedIn',
    icon: '💼',
    url: '#'
  }, {
    name: 'Twitter',
    icon: '🐦',
    url: '#'
  }, {
    name: 'Dribbble',
    icon: '🏀',
    url: '#'
  }, {
    name: 'GitHub',
    icon: '💻',
    url: '#'
  }];
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-300">Let's discuss your next project</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
            <p className="text-slate-300 mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you're a company looking to hire, or you're someone with an 
              interesting idea, I'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="text-2xl mr-4">📧</span>
                <span>chavanrohit2213@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-2xl mr-4">📍</span>
                <span>Shirpur, Maharashtra, India</span>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-slate-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-slate-400"
                required
              />
            </div>
            
            <textarea
              name="message"
              rows={6}
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-slate-400"
              required
            ></textarea>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;