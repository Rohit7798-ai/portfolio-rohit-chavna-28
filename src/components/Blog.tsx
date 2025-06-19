
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

  const posts = [
    {
      id: 2,
      title: 'Building Accessible Interfaces: A Complete Guide',
      excerpt: 'Learn how to create inclusive designs that work for everyone, regardless of their abilities.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop',
      category: 'Accessibility',
      readTime: '6 min read',
      date: 'Dec 10, 2024'
    },
    {
      id: 3,
      title: 'React Performance Optimization Techniques',
      excerpt: 'Advanced strategies to make your React applications lightning-fast and user-friendly.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      category: 'Development',
      readTime: '10 min read',
      date: 'Dec 5, 2024'
    },
    {
      id: 4,
      title: 'Color Psychology in Digital Design',
      excerpt: 'Understanding how colors influence user behavior and decision-making in digital products.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop',
      category: 'Design Theory',
      readTime: '5 min read',
      date: 'Nov 28, 2024'
    },
    {
      id: 5,
      title: 'Mobile-First Design Strategies',
      excerpt: 'Best practices for designing mobile experiences that scale beautifully to desktop.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      category: 'Mobile Design',
      readTime: '7 min read',
      date: 'Nov 20, 2024'
    }
  ];

  const categories = ['All', 'Design Trends', 'Development', 'Accessibility', 'Design Theory', 'Mobile Design'];

  return (
    <section id="blog" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">Latest Insights</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sharing thoughts on design, development, and the ever-evolving world of digital experiences
          </p>
        </div>

        {/* Featured Article - Mobile Responsive */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="bg-gradient-to-r from-navy-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-6 sm:p-8 lg:p-12 text-white order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <span className="bg-coral-500 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-300 text-xs sm:text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="text-xs sm:text-sm text-gray-300">
                    By {featuredPost.author} • {featuredPost.date}
                  </div>
                  <button className="bg-coral-500 hover:bg-coral-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base font-semibold">
                    Read Article
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-48 sm:h-64 lg:h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter - Mobile Scrollable */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              className="px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-gray-100 text-slate-700 hover:bg-coral-500 hover:text-white transition-colors duration-300 whitespace-nowrap flex-shrink-0"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Articles Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {posts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3 leading-tight group-hover:text-coral-500 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-3 sm:mb-4 text-sm leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <button className="bg-navy-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-navy-800 transition-colors duration-300 text-base sm:text-lg font-semibold">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
