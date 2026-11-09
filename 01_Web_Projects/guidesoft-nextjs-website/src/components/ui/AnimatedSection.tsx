'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInScale' | 'slideInLeft' | 'slideInRight' | 'zoomIn';
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function AnimatedSection({ 
  children, 
  className,
  animation = 'fadeInUp',
  delay = 0,
  duration = 600,
  threshold = 0.1
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, threshold]);

  const animationClasses = {
    fadeInUp: 'translate-y-8 opacity-0',
    fadeInScale: 'scale-95 opacity-0',
    slideInLeft: '-translate-x-8 opacity-0',
    slideInRight: 'translate-x-8 opacity-0',
    zoomIn: 'scale-90 opacity-0'
  };

  const visibleClasses = {
    fadeInUp: 'translate-y-0 opacity-100',
    fadeInScale: 'scale-100 opacity-100',
    slideInLeft: 'translate-x-0 opacity-100',
    slideInRight: 'translate-x-0 opacity-100',
    zoomIn: 'scale-100 opacity-100'
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}