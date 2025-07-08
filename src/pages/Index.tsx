
import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'next-themes';
import ScrollProgress from '../components/ScrollProgress';
import MobileHeader from '../components/MobileHeader';
import MobileHero from '../components/MobileHero';
import AccordionAbout from '../components/AccordionAbout';
import TechStackMobile from '../components/TechStackMobile';
import ProjectsCarousel from '../components/ProjectsCarousel';
import FloatingContact from '../components/FloatingContact';
import MobileFooter from '../components/MobileFooter';

// Lazy load components for better performance
const LazyLoadedComponents = lazy(() => Promise.resolve({ default: () => null }));

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollProgress />
        <MobileHeader />
        
        <main>
          <MobileHero />
          <AccordionAbout />
          <TechStackMobile />
          <ProjectsCarousel />
        </main>
        
        <MobileFooter />
        <FloatingContact />
        
        <Suspense fallback={<div />}>
          <LazyLoadedComponents />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default Index;
