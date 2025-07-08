
import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'next-themes';
import { useIsMobile } from '../hooks/use-mobile';
import ScrollProgress from '../components/ScrollProgress';
import MobileHeader from '../components/MobileHeader';
import MobileHero from '../components/MobileHero';
import AccordionAbout from '../components/AccordionAbout';
import TechStackMobile from '../components/TechStackMobile';
import ProjectsCarousel from '../components/ProjectsCarousel';
import FloatingContact from '../components/FloatingContact';
import MobileFooter from '../components/MobileFooter';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

// Lazy load components for better performance
const LazyLoadedComponents = lazy(() => Promise.resolve({ default: () => null }));

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <ScrollProgress />
        
        {isMobile ? (
          <>
            <MobileHeader />
            <main>
              <MobileHero />
              <AccordionAbout />
              <TechStackMobile />
              <ProjectsCarousel />
            </main>
            <MobileFooter />
            <FloatingContact />
          </>
        ) : (
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <TechStack />
              <Portfolio />
            </main>
            <Footer />
          </>
        )}
        
        <Suspense fallback={<div />}>
          <LazyLoadedComponents />
        </Suspense>
      </div>
    </ThemeProvider>
  );
};

export default Index;
