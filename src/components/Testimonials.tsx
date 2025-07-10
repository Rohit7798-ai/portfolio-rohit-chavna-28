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
  return;
};
export default Testimonials;