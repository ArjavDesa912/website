import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useMotionValue } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { PROFESSIONAL_TRANSFORMS } from '../../constants/animations';

/**
 * Professional parallax section component
 * Provides subtle enterprise-grade parallax effects with accessibility compliance
 */
const ParallaxSection = ({ 
  children,
  speed = 0.5,
  direction = 'vertical',
  className = '',
  background = null,
  foreground = null,
  offset = 0
}) => {
  const sectionRef = useRef();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  
  const { scrollProgress, prefersReducedMotion } = useScrollProgress({
    respectReducedMotion: true
  });

  const scrollY = useMotionValue(0);

  // Professional parallax calculations
  const backgroundY = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [`-${speed * 100}%`, `${speed * 100}%`]
  );

  const foregroundY = useTransform(
    scrollY,
    [elementTop - clientHeight, elementTop + clientHeight],
    [`-${speed * 50}%`, `${speed * 50}%`]
  );

  // Professional element positioning calculation
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const onResize = () => {
      const rect = element.getBoundingClientRect();
      setElementTop(rect.top + window.scrollY);
      setClientHeight(window.innerHeight);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Professional scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      if (prefersReducedMotion) return;
      scrollY.set(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY, prefersReducedMotion]);

  // Professional transform calculations
  const getTransform = (multiplier = 1) => {
    if (prefersReducedMotion) return { y: 0 };
    
    const maxMovement = PROFESSIONAL_TRANSFORMS.PARALLAX_STRENGTH;
    const movement = scrollProgress * speed * multiplier * maxMovement;
    
    return direction === 'vertical' 
      ? { y: movement } 
      : { x: movement };
  };

  return (
    <div 
      ref={sectionRef}
      className={`parallax-section relative overflow-hidden ${className}`}
      style={{ willChange: prefersReducedMotion ? 'auto' : 'transform' }}
    >
      {/* Professional background layer */}
      {background && (
        <motion.div
          className="absolute inset-0 z-0"
          style={prefersReducedMotion ? {} : { y: backgroundY }}
        >
          {background}
        </motion.div>
      )}

      {/* Professional main content */}
      <motion.div
        className="relative z-10"
        style={getTransform(1)}
      >
        {children}
      </motion.div>

      {/* Professional foreground layer */}
      {foreground && (
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none"
          style={prefersReducedMotion ? {} : { y: foregroundY }}
        >
          {foreground}
        </motion.div>
      )}
    </div>
  );
};

/**
 * Professional floating element component
 */
export const FloatingElement = ({ 
  children,
  intensity = 1,
  duration = 3000,
  className = '',
  delay = 0
}) => {
  const floatingVariants = {
    animate: {
      y: [-5 * intensity, 5 * intensity, -5 * intensity],
      transition: {
        duration: duration / 1000,
        delay: delay / 1000,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const { prefersReducedMotion } = useScrollProgress({
    respectReducedMotion: true
  });

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`floating-element ${className}`}
      variants={floatingVariants}
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;