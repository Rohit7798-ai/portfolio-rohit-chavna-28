
import React, { useEffect, useRef } from 'react';

interface IntersectionObserverProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'bounce-in';
  delay?: number;
}

const AnimateOnScroll = ({ 
  children, 
  className = '', 
  animation = 'fade-in', 
  delay = 0 
}: IntersectionObserverProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const animationClasses = {
    'fade-in': 'opacity-0 translate-y-4 transition-all duration-700 ease-out',
    'slide-up': 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
    'scale-in': 'opacity-0 scale-95 transition-all duration-700 ease-out',
    'bounce-in': 'opacity-0 scale-90 transition-all duration-700 ease-out'
  };

  return (
    <div 
      ref={ref} 
      className={`${animationClasses[animation]} ${className}`}
      style={{
        '--tw-animate-in-opacity': '1',
        '--tw-animate-in-translate-y': '0',
        '--tw-animate-in-scale': '1'
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
