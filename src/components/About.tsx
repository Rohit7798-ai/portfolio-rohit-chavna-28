
import React from 'react';

const About = () => {
  const skills = [
    { name: 'Python Programming', level: 95 },
    { name: 'Data Analysis', level: 90 },
    { name: 'NumPy & Pandas', level: 90 },
    { name: 'Matplotlib', level: 85 },
    { name: 'Statistical Modeling', level: 85 },
    { name: 'Machine Learning', level: 80 },
  ];

  const timeline = [
    {
      year: '2025',
      title: 'BSc Data Science Student',
      company: 'R.C. Patel Arts, Commerce and Science College, Shirpur',
      description: 'Hands-on experience in Python programming, data analysis, and statistical modeling.'
    },
    {
      year: '2023',
      title: 'Intern - College Tips',
      company: 'Remote Internship',
      description: 'Engaged in online internship activities aimed at boosting creativity and social media strategies.'
    },
    {
      year: '2021',
      title: '12th Science',
      company: 'R.C. Patel Junior College, Shirpur',
      description: 'Completed higher secondary education with focus on science subjects.'
    }
  ];

  const values = [
    {
      icon: '🌱',
      title: 'Data-Driven Solutions',
      description: 'Using Python and statistical modeling to solve real-world problems with precision and insight.'
    },
    {
      icon: '🔬',
      title: 'Research & Analysis',
      description: 'Passionate about exploring data patterns and creating meaningful visualizations.'
    },
    {
      icon: '📊',
      title: 'Visualization Excellence',
      description: 'Transforming complex data into clear, interactive dashboards and compelling visual stories.'
    },
    {
      icon: '🤝',
      title: 'Collaborative Learning',
      description: 'Building strong work ethics through teamwork and continuous skill development.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-emerald-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-teal-400 rounded-lg opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-8 bg-sage-300 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-forest-400 rotate-45 opacity-20 animate-spin" style={{ animationDuration: '8s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-4 animate-fade-in">About Rohit</h2>
          <p className="text-xl text-forest-700 max-w-3xl mx-auto">
            BSc Data Science student with hands-on experience in Python programming, data analysis, and statistical modeling
          </p>
        </div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-2xl blur-lg opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop"
              alt="Rohit P. Chavan - Data Science Student"
              className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">BSc</div>
              <div className="text-sm">Data Science</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-forest-900">My Journey in Data Science</h3>
            <p className="text-lg text-forest-700 leading-relaxed">
              Currently pursuing BSc in Data Science at R.C. Patel Arts, Commerce and Science College in Shirpur, Maharashtra. 
              I have developed strong expertise in Python programming, data analysis, and statistical modeling.
            </p>
            <p className="text-lg text-forest-700 leading-relaxed">
              My passion lies in solving real-world problems using AI and IT solutions. I'm a quick learner with 
              a strong work ethic, certified in both Python and Information Technology, building a robust project portfolio.
            </p>
            
            {/* Contact Info */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-2 text-forest-700">
                <span>📧</span>
                <span>chavanrohit2213@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-forest-700">
                <span>📱</span>
                <span>7798319504</span>
              </div>
              <div className="flex items-center gap-2 text-forest-700">
                <span>📍</span>
                <span>Shirpur, Maharashtra, India</span>
              </div>
            </div>
            
            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-forest-900">Technical Skills</h4>
              {skills.map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-forest-800">{skill.name}</span>
                    <span className="text-sm text-forest-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-emerald-100 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-1000 ease-out transform group-hover:scale-105"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-gradient-to-r from-forest-700 to-emerald-700 text-white px-6 py-3 rounded-lg hover:from-forest-800 hover:to-emerald-800 transition-all duration-300 flex items-center gap-2 transform hover:scale-105">
              Download Resume
              <span>📄</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-forest-900 text-center mb-12">Education & Experience Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-400"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-100">
                    <div className="text-emerald-600 font-bold text-lg">{item.year}</div>
                    <h4 className="text-xl font-semibold text-forest-900 mb-1">{item.title}</h4>
                    <div className="text-forest-600 mb-2 font-medium">{item.company}</div>
                    <p className="text-forest-700">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-forest-900 text-center mb-12">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-100">
              <div className="text-4xl mb-4">🐍</div>
              <h4 className="text-xl font-semibold text-forest-900 mb-2">MKCL Certified in Python</h4>
              <p className="text-forest-700">Advanced Python programming certification covering data structures, algorithms, and application development.</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-emerald-100">
              <div className="text-4xl mb-4">💻</div>
              <h4 className="text-xl font-semibold text-forest-900 mb-2">MKCL Certified in Information Technology</h4>
              <p className="text-forest-700">Comprehensive IT certification covering modern technologies and digital communication skills.</p>
            </div>
          </div>
        </div>

        {/* Values & Approach */}
        <div>
          <h3 className="text-3xl font-bold text-forest-900 text-center mb-12">My Approach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 border border-emerald-100 group">
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h4 className="text-xl font-semibold text-forest-900 mb-3">{value.title}</h4>
                <p className="text-forest-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
