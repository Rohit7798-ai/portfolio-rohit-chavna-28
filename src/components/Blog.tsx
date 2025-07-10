import React from 'react';
import { ChevronRight } from 'lucide-react';
const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Web Design: Trends to Watch in 2024',
    excerpt: 'Exploring the latest trends in web design and how they\'re shaping user experiences across the digital landscape.',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=400&fit=crop',
    category: 'Design Trends',
    readTime: '8 min read',
    date: 'Dec 15, 2024',
    author: 'Alex Johnson'
  };
  const posts = [{
    id: 2,
    title: 'Building Accessible Interfaces: A Complete Guide',
    excerpt: 'Learn how to create inclusive designs that work for everyone, regardless of their abilities.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
    category: 'Accessibility',
    readTime: '6 min read',
    date: 'Dec 10, 2024'
  }, {
    id: 3,
    title: 'React Performance Optimization Techniques',
    excerpt: 'Advanced strategies to make your React applications lightning-fast and user-friendly.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
    category: 'Development',
    readTime: '10 min read',
    date: 'Dec 5, 2024'
  }, {
    id: 4,
    title: 'Color Psychology in Digital Design',
    excerpt: 'Understanding how colors influence user behavior and decision-making in digital products.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
    category: 'Design Theory',
    readTime: '5 min read',
    date: 'Nov 28, 2024'
  }, {
    id: 5,
    title: 'Mobile-First Design Strategies',
    excerpt: 'Best practices for designing mobile experiences that scale beautifully to desktop.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    category: 'Mobile Design',
    readTime: '7 min read',
    date: 'Nov 20, 2024'
  }];
  const categories = ['All', 'Design Trends', 'Development', 'Accessibility', 'Design Theory', 'Mobile Design'];
  return;
};
export default Blog;