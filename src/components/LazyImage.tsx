import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  fetchPriority = 'auto'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={isInView || loading === 'eager' ? src : ''}
        alt={alt}
        className={`${className} transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={loading}
        fetchPriority={fetchPriority}
        onLoad={() => setIsLoaded(true)}
        decoding="async"
      />
    </div>
  );
};

export default LazyImage;
