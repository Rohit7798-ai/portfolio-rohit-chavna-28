import React from 'react';
const About = () => {
  const skills = [{
    name: 'Python Programming',
    level: 95
  }, {
    name: 'Data Analysis',
    level: 90
  }, {
    name: 'NumPy & Pandas',
    level: 90
  }, {
    name: 'Matplotlib',
    level: 85
  }, {
    name: 'Statistical Modeling',
    level: 85
  }, {
    name: 'Machine Learning',
    level: 80
  }];
  const timeline = [{
    year: '2025',
    title: 'BSc Data Science Student',
    company: 'R.C. Patel Arts, Commerce and Science College, Shirpur',
    description: 'Hands-on experience in Python programming, data analysis, and statistical modeling.'
  }, {
    year: '2023',
    title: 'Intern - College Tips',
    company: 'Remote Internship',
    description: 'Engaged in online internship activities aimed at boosting creativity and social media strategies.'
  }, {
    year: '2021',
    title: '12th Science',
    company: 'R.C. Patel Junior College, Shirpur',
    description: 'Completed higher secondary education with focus on science subjects.'
  }];
  const values = [{
    icon: '🌱',
    title: 'Data-Driven Solutions',
    description: 'Using Python and statistical modeling to solve real-world problems with precision and insight.'
  }, {
    icon: '🔬',
    title: 'Research & Analysis',
    description: 'Passionate about exploring data patterns and creating meaningful visualizations.'
  }, {
    icon: '📊',
    title: 'Visualization Excellence',
    description: 'Transforming complex data into clear, interactive dashboards and compelling visual stories.'
  }, {
    icon: '🤝',
    title: 'Collaborative Learning',
    description: 'Building strong work ethics through teamwork and continuous skill development.'
  }];
  return <section id="about" className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-emerald-300 rounded-full opacity-20 animate-bounce" style={{
        animationDelay: '0s',
        animationDuration: '3s'
      }}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-teal-400 rounded-lg opacity-30 animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-8 bg-sage-300 rounded-full opacity-25 animate-bounce" style={{
        animationDelay: '2s',
        animationDuration: '4s'
      }}></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-forest-400 rotate-45 opacity-20 animate-spin" style={{
        animationDuration: '8s'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-3 animate-fade-in">About Rohit</h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto font-medium">
            BSc Data Science student with hands-on experience in Python programming, data analysis, and statistical modeling
          </p>
        </div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-xl blur-lg opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            
            
          </div>
          
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-forest-900">My Journey in Data Science</h3>
            <p className="text-base text-forest-700 leading-relaxed font-medium">
              Currently pursuing BSc in Data Science at R.C. Patel Arts, Commerce and Science College in Shirpur, Maharashtra. 
              I have developed strong expertise in Python programming, data analysis, and statistical modeling.
            </p>
            <p className="text-base text-forest-700 leading-relaxed font-medium">
              My passion lies in solving real-world problems using AI and IT solutions. I'm a quick learner with 
              a strong work ethic, certified in both Python and Information Technology, building a robust project portfolio.
            </p>
            
            {/* Contact Info */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 space-y-2 border border-emerald-100">
              <div className="flex items-center gap-2 text-forest-700 font-medium">
                <span>📧</span>
                <span>chavanrohit2213@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-forest-700 font-medium">
                <span>📱</span>
                <span>7798319504</span>
              </div>
              <div className="flex items-center gap-2 text-forest-700 font-medium">
                <span>📍</span>
                <span>Shirpur, Maharashtra, India</span>
              </div>
            </div>
            
            {/* Skills */}
            
            
            <button className="bg-gradient-to-r from-forest-700 to-emerald-700 text-white px-6 py-3 rounded-xl hover:from-forest-800 hover:to-emerald-800 transition-all duration-300 flex items-center gap-2 transform hover:scale-105 font-semibold">
              Download Resume
              <span>📄</span>
            </button>
          </div>
        </div>

        {/* Education & Experience Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-forest-900 text-center mb-12">Education & Experience Timeline</h3>
          <div className="relative bg-gradient-to-br from-mint-50 to-teal-50 rounded-3xl p-8 overflow-hidden">
            {/* Curved roadmap path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="none">
              <path
                d="M 100 350 Q 200 200 400 250 Q 600 300 700 150"
                stroke="url(#roadmapGradient)"
                strokeWidth="4"
                fill="none"
                strokeDasharray="0"
                className="drop-shadow-sm"
              />
              <defs>
                <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#14b8a6" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Timeline cards */}
            <div className="relative z-10 grid lg:grid-cols-3 gap-8 lg:gap-12">
              {timeline.map((item, index) => {
                const icons = ['🎓', '💼', '💻'];
                const iconComponents = [
                  <div key="grad" className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">🎓</div>,
                  <div key="brief" className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">💼</div>,
                  <div key="laptop" className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg">💻</div>
                ];
                
                return (
                  <div 
                    key={index} 
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-white/20 group"
                    style={{
                      marginTop: index === 1 ? '3rem' : index === 2 ? '1rem' : '0'
                    }}
                  >
                    {/* Icon */}
                    <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {iconComponents[index]}
                    </div>
                    
                    {/* Year badge */}
                    <div className="text-center mb-3">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                        {item.year}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h4 className="text-xl font-bold text-forest-900 mb-2">{item.title}</h4>
                      <div className="text-emerald-600 font-semibold text-sm mb-3">{item.company}</div>
                      <p className="text-forest-700 text-sm leading-relaxed font-medium">{item.description}</p>
                    </div>
                    
                    {/* Connecting dot */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-2 border-white shadow-lg opacity-80"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-forest-900 text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-100">
              <div className="text-3xl mb-3">🐍</div>
              <h4 className="text-lg font-semibold text-forest-900 mb-2">MKCL Certified in Python</h4>
              <p className="text-forest-700 text-sm font-medium">Advanced Python programming certification covering data structures, algorithms, and application development.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-100">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="text-lg font-semibold text-forest-900 mb-2">MKCL Certified in Information Technology</h4>
              <p className="text-forest-700 text-sm font-medium">Comprehensive IT certification covering modern technologies and digital communication skills.</p>
            </div>

            {/* Uploaded Certificates */}
            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-100">
              <img
                src="/lovable-uploads/1a2a8169-37d1-4ec7-adaf-7d303df90df3.png"
                alt="Kaggle Pandas certificate for Rohit Chavan"
                loading="lazy"
                className="w-full h-auto rounded-lg border border-emerald-100"
              />
              <div className="mt-3">
                <h4 className="text-lg font-semibold text-forest-900 mb-1">Kaggle: Pandas</h4>
                <p className="text-forest-700 text-sm font-medium">Certificate of Completion</p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-100">
              <img
                src="/lovable-uploads/91d1f640-f99c-412b-a484-8a376ab9ad24.png"
                alt="Deloitte Data Analytics Job Simulation certificate for Rohit Chavan"
                loading="lazy"
                className="w-full h-auto rounded-lg border border-emerald-100"
              />
              <div className="mt-3">
                <h4 className="text-lg font-semibold text-forest-900 mb-1">Deloitte: Data Analytics Job Simulation</h4>
                <p className="text-forest-700 text-sm font-medium">Certificate of Completion</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>;
};
export default About;