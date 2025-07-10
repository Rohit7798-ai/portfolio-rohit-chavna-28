import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [{
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    company: 'TechStart',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c9e5c5-4?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: "Working with this designer was absolutely incredible. They transformed our vision into a beautiful, functional product that exceeded all expectations. The attention to detail and user experience is outstanding."
  }, {
    id: 2,
    name: 'Michael Chen',
    position: 'Product Manager, InnovateCorp',
    company: 'InnovateCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: "The level of professionalism and creativity brought to our project was remarkable. Every milestone was met on time, and the final product significantly improved our user engagement by 150%."
  }, {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Marketing Director, GrowthCo',
    company: 'GrowthCo',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    text: "Not only did they deliver an amazing design, but they also provided valuable insights that helped shape our overall digital strategy. A true partner in every sense of the word."
  }];
  const companies = [{
    name: 'TechStart',
    logo: '🚀'
  }, {
    name: 'InnovateCorp',
    logo: '💡'
  }, {
    name: 'GrowthCo',
    logo: '📈'
  }, {
    name: 'DesignHub',
    logo: '🎨'
  }, {
    name: 'DataFlow',
    logo: '📊'
  }, {
    name: 'CloudTech',
    logo: '☁️'
  }];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">What Clients Say</h2>
          <p className="text-xl text-slate-600">Testimonials from satisfied clients</p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-lg text-slate-900">{testimonial.name}</h3>
                        <p className="text-slate-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <p className="text-slate-700 text-lg leading-relaxed mb-4">"{testimonial.text}"</p>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
          >
            <ChevronRight className="w-6 h-6 text-slate-600" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;