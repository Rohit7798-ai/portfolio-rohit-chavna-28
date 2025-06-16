
import React from 'react';

const About = () => {
  const skills = [
    { name: 'UI/UX Design', level: 95 },
    { name: 'React Development', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Figma', level: 95 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Node.js', level: 80 },
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Senior UX Designer',
      company: 'Tech Innovators Inc.',
      description: 'Leading design systems and user experience initiatives.'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Co.',
      description: 'Built scalable web applications using modern technologies.'
    },
    {
      year: '2020',
      title: 'UI Designer',
      company: 'Creative Studio',
      description: 'Designed beautiful interfaces for various client projects.'
    },
    {
      year: '2019',
      title: 'Started Freelancing',
      company: 'Independent',
      description: 'Began my journey in web design and development.'
    },
  ];

  const values = [
    {
      icon: '🎨',
      title: 'User-Centered Design',
      description: 'Every decision is made with the end user in mind, ensuring intuitive and delightful experiences.'
    },
    {
      icon: '⚡',
      title: 'Performance First',
      description: 'Building fast, efficient solutions that scale beautifully across all devices and platforms.'
    },
    {
      icon: '🔄',
      title: 'Iterative Process',
      description: 'Continuous improvement through testing, feedback, and refinement for optimal results.'
    },
    {
      icon: '🤝',
      title: 'Collaborative Spirit',
      description: 'Working closely with teams and clients to bring shared visions to life successfully.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Passionate about creating meaningful digital experiences that solve real problems
          </p>
        </div>

        {/* Personal Story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=800&fit=crop"
              alt="Professional portrait"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-coral-500 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-2xl font-bold">5+</div>
              <div className="text-sm">Years Creating</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900">My Journey</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              I started my career with a simple belief: technology should make life better, not more complicated. 
              This philosophy has guided me through years of creating digital solutions that truly matter.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              From designing my first website to leading complex projects for Fortune 500 companies, 
              I've learned that the best designs are invisible—they solve problems so elegantly that users 
              never have to think about them.
            </p>
            
            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-slate-900">Technical Skills</h4>
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-coral-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="bg-navy-900 text-white px-6 py-3 rounded-lg hover:bg-navy-800 transition-colors duration-300 flex items-center gap-2">
              Download Resume
              <span>📄</span>
            </button>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Career Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-coral-500"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="text-coral-500 font-bold text-lg">{item.year}</div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-1">{item.title}</h4>
                    <div className="text-slate-600 mb-2">{item.company}</div>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-coral-500 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Values & Approach */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">My Approach</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
