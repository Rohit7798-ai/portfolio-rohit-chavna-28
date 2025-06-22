
import React, { useEffect, useRef, useCallback } from 'react';

interface IntersectionObserverProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'bounce-in';
  delay?: number;
}

const AnimateOnScroll = React.memo(({ 
  children, 
  className = '', 
  animation = 'fade-in', 
  delay = 0 
}: IntersectionObserverProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const timeoutId = setTimeout(() => {
          entry.target.classList.add('animate-in');
        }, delay);
        
        // Cleanup timeout if component unmounts
        return () => clearTimeout(timeoutId);
      }
    });
  }, [delay]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { 
      threshold: 0.1,
      rootMargin: '50px'
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [handleIntersection]);

  const animationClasses = {
    'fade-in': 'opacity-0 translate-y-4 transition-all duration-700 ease-out',
    'slide-up': 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
    'scale-in':  'opacity-0 scale-95 transition-all duration-700 ease-out',
    'bounce-in': 'opacity-0 scale-90 transition-all duration-700 ease-out'
  };

  return (
    <div 
      ref={ref} 
      className={`${animationClasses[animation]} ${className} will-change-transform`}
      style={{
        '--tw-animate-in-opacity': '1',
        '--tw-animate-in-translate-y': '0',
        '--tw-animate-in-scale': '1'
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
});

AnimateOnScroll.displayName = 'AnimateOnScroll';

export default AnimateOnScroll;
