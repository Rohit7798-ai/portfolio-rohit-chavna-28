
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';

import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingTechStack from '../components/FloatingTechStack';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingTechStack />
    </div>
  );
};

export default Index;
