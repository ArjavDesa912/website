import React from 'react';
import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { PROFESSIONAL_TIMINGS, PROFESSIONAL_EASINGS } from '../../constants/animations';

/**
 * Professional scroll-triggered reveal animation component
 * Provides enterprise-grade entrance animations with accessibility support
 */
const ScrollReveal = ({ 
  children, 
  direction = 'up',
  distance = 30,
  delay = 0,
  duration = PROFESSIONAL_TIMINGS.SMOOTH,
  stagger = 0,
  threshold = 0.1,
  once = true,
  className = ''
}) => {
  const { scrollProgress, isVisible } = useScrollProgress({
    threshold,
    respectReducedMotion: true
  });

  // Professional animation variants based on direction
  const getVariants = () => {
    const baseDistance = distance;
    
    const directions = {
      up: { y: baseDistance, x: 0 },
      down: { y: -baseDistance, x: 0 },
      left: { x: baseDistance, y: 0 },
      right: { x: -baseDistance, y: 0 },
      scale: { scale: 0.8, y: 0, x: 0 },
      fade: { y: 0, x: 0 }
    };

    return {
      hidden: {
        opacity: 0,
        ...directions[direction],
        transition: {
          duration: duration / 1000,
          ease: PROFESSIONAL_EASINGS.PROFESSIONAL
        }
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration: duration / 1000,
          delay: (delay + stagger) / 1000,
          ease: PROFESSIONAL_EASINGS.ENTER
        }
      }
    };
  };

  return (
    <motion.div
      className={`scroll-reveal ${className}`}
      variants={getVariants()}
      initial="hidden"
      animate={isVisible ? "visible" : (once ? "hidden" : "hidden")}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
};

/**
 * Professional staggered children reveal component
 */
export const StaggeredReveal = ({ 
  children, 
  staggerDelay = PROFESSIONAL_TIMINGS.STAGGER_COMFORTABLE,
  ...props 
}) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay / 1000,
        delayChildren: props.delay / 1000 || 0
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: props.distance || 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: (props.duration || PROFESSIONAL_TIMINGS.SMOOTH) / 1000,
        ease: PROFESSIONAL_EASINGS.ENTER
      }
    }
  };

  const { isVisible } = useScrollProgress({
    threshold: props.threshold || 0.1,
    respectReducedMotion: true
  });

  return (
    <motion.div
      className={`staggered-reveal ${props.className || ''}`}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ScrollReveal;