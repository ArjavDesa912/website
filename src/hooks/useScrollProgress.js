import { useState, useEffect, useRef } from 'react';

/**
 * Professional scroll progress hook for enterprise 3D animations
 * Provides smooth, accessible scroll tracking with performance optimization
 */
export const useScrollProgress = (options = {}) => {
  const {
    // Professional configuration options
    throttleMs = 16, // ~60fps update rate
    offset = 0, // scroll offset for triggering
    rootMargin = '0px', // intersection observer margin
    threshold = 0.1, // intersection threshold
    respectReducedMotion = true, // accessibility compliance
  } = options;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const elementRef = useRef(null);
  const lastScrollY = useRef(0);
  const throttleTimeout = useRef(null);

  // Check for reduced motion preference
  const prefersReducedMotion = respectReducedMotion && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!elementRef.current) return;

    // Professional intersection observer for performance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(elementRef.current);

    // Professional scroll handler with throttling
    const handleScroll = () => {
      if (throttleTimeout.current) return;

      throttleTimeout.current = setTimeout(() => {
        if (!elementRef.current) return;

        const element = elementRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate professional scroll progress
        const elementTop = rect.top;
        const elementHeight = rect.height;
        const startPoint = windowHeight - offset;
        const endPoint = -elementHeight + offset;
        
        // Professional progress calculation (0 to 1)
        let progress = 0;
        if (elementTop <= startPoint && elementTop >= endPoint) {
          progress = (startPoint - elementTop) / (startPoint - endPoint);
          progress = Math.max(0, Math.min(1, progress));
        } else if (elementTop < endPoint) {
          progress = 1;
        }

        // Determine scroll direction for professional animations
        const currentScrollY = window.scrollY;
        const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
        setScrollDirection(direction);
        lastScrollY.current = currentScrollY;

        // Apply reduced motion consideration
        if (prefersReducedMotion) {
          // Snap to discrete states for accessibility
          setScrollProgress(progress > 0.5 ? 1 : 0);
        } else {
          setScrollProgress(progress);
        }

        throttleTimeout.current = null;
      }, throttleMs);
    };

    // Professional event listener setup
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial calculation
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, [throttleMs, offset, rootMargin, threshold, prefersReducedMotion]);

  // Professional helper functions
  const getProgressInRange = (start, end) => {
    if (scrollProgress < start) return 0;
    if (scrollProgress > end) return 1;
    return (scrollProgress - start) / (end - start);
  };

  const getStaggeredProgress = (index, totalItems, staggerFactor = 0.1) => {
    const staggerDelay = (index / totalItems) * staggerFactor;
    const adjustedStart = staggerDelay;
    const adjustedEnd = 1 - staggerFactor + staggerDelay;
    return getProgressInRange(adjustedStart, adjustedEnd);
  };

  return {
    // Core values
    scrollProgress,
    isVisible,
    scrollDirection,
    elementRef,
    
    // Professional helper functions
    getProgressInRange,
    getStaggeredProgress,
    
    // Accessibility information
    prefersReducedMotion,
    
    // Professional animation utilities
    isScrollingDown: scrollDirection === 'down',
    isScrollingUp: scrollDirection === 'up',
    isFullyVisible: scrollProgress >= 1,
    isPartiallyVisible: scrollProgress > 0 && scrollProgress < 1,
  };
};

/**
 * Professional global scroll position hook
 * For components that need overall page scroll information
 */
export const useGlobalScrollProgress = (throttleMs = 16) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const throttleTimeout = useRef(null);

  useEffect(() => {
    const updateScrollProgress = () => {
      if (throttleTimeout.current) return;

      throttleTimeout.current = setTimeout(() => {
        const currentScrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        const currentMaxScroll = documentHeight - windowHeight;
        
        setScrollY(currentScrollY);
        setMaxScroll(currentMaxScroll);
        setScrollProgress(currentMaxScroll > 0 ? currentScrollY / currentMaxScroll : 0);
        
        throttleTimeout.current = null;
      }, throttleMs);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current);
      }
    };
  }, [throttleMs]);

  return {
    scrollY,
    scrollProgress,
    maxScroll,
  };
};

export default useScrollProgress;