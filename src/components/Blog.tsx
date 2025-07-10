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
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Latest Blog Posts</h2>
          <p className="text-xl text-slate-600">Insights and thoughts on design and development</p>
        </div>
        
        <div className="mb-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title}
              className="w-full h-64 object-cover rounded-xl mb-6"
            />
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {featuredPost.category}
              </span>
              <span className="text-slate-500 text-sm">{featuredPost.readTime}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{featuredPost.title}</h3>
            <p className="text-slate-600 mb-4">{featuredPost.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 text-sm">{featuredPost.date}</span>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Read More <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs">{post.date}</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;