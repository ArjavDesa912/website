import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { useResponsive3D } from '../../hooks/useResponsive3D';

/**
 * Professional Smooth Scroll Provider
 * Enterprise-grade smooth scrolling with accessibility compliance
 */
const SmoothScrollProvider = ({ children }) => {
  const lenisRef = useRef();
  const { prefersReducedMotion } = useResponsive3D();

  useEffect(() => {
    // Professional scroll configuration
    const scrollConfig = {
      duration: prefersReducedMotion ? 0 : 1.2, // Instant for reduced motion
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Professional easing
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: !prefersReducedMotion, // Disable smooth scroll for reduced motion
      mouseMultiplier: 1,
      smoothTouch: false, // Disable on touch devices for better performance
      touchMultiplier: 2,
      infinite: false,
    };

    // Initialize Lenis only if smooth scrolling is enabled
    if (!prefersReducedMotion) {
      lenisRef.current = new Lenis(scrollConfig);

      // Professional RAF loop
      function raf(time) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      // Professional scroll-to functionality
      const handleScrollTo = (event) => {
        const target = event.detail?.target;
        const options = event.detail?.options || {};
        
        if (target && lenisRef.current) {
          lenisRef.current.scrollTo(target, {
            offset: options.offset || -80, // Account for header
            duration: options.duration || 1.2,
            easing: options.easing || scrollConfig.easing,
            ...options,
          });
        }
      };

      // Professional custom event listener
      window.addEventListener('smoothScrollTo', handleScrollTo);

      return () => {
        window.removeEventListener('smoothScrollTo', handleScrollTo);
        lenisRef.current?.destroy();
      };
    }

    // Professional fallback for reduced motion - use native smooth scroll
    const handleScrollTo = (event) => {
      const target = event.detail?.target;
      const element = typeof target === 'string' 
        ? document.querySelector(target)
        : target;
        
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }
    };

    window.addEventListener('smoothScrollTo', handleScrollTo);
    return () => {
      window.removeEventListener('smoothScrollTo', handleScrollTo);
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
};

// Professional smooth scroll utility function
export const smoothScrollTo = (target, options = {}) => {
  const event = new CustomEvent('smoothScrollTo', {
    detail: { target, options }
  });
  window.dispatchEvent(event);
};

export default SmoothScrollProvider;