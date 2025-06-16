
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c9e5c5-4?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Working with this designer was absolutely incredible. They transformed our vision into a beautiful, functional product that exceeded all expectations. The attention to detail and user experience is outstanding."
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Product Manager, InnovateCorp',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "The level of professionalism and creativity brought to our project was remarkable. Every milestone was met on time, and the final product significantly improved our user engagement by 150%."
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCo',
      company: 'GrowthCo',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Not only did they deliver an amazing design, but they also provided valuable insights that helped shape our overall digital strategy. A true partner in every sense of the word."
    }
  ];

  const companies = [
    { name: 'TechStart', logo: '🚀' },
    { name: 'InnovateCorp', logo: '💡' },
    { name: 'GrowthCo', logo: '📈' },
    { name: 'DesignHub', logo: '🎨' },
    { name: 'DataFlow', logo: '📊' },
    { name: 'CloudTech', logo: '☁️' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Don't just take my word for it - hear from the amazing clients I've had the privilege to work with
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-coral-500/5 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-400/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <span key={i} className="text-gold-400 text-2xl">⭐</span>
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-slate-700 text-center leading-relaxed mb-8 italic">
                "{testimonials[currentSlide].text}"
              </blockquote>
              
              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <div className="font-semibold text-slate-900 text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-slate-600">
                    {testimonials[currentSlide].position}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </button>
          
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide ? 'bg-coral-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Company Logos */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Trusted by Amazing Companies</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {companies.map((company, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {company.logo}
                </div>
                <div className="text-sm text-slate-600 font-medium">{company.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
