import { useState, useEffect, useRef } from 'react';

/**
 * Professional intersection observer hook for enterprise 3D components
 * Provides performance-optimized visibility detection with accessibility features
 */
export const useIntersectionObserver = (options = {}) => {
  const {
    // Professional configuration
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = false,
    respectReducedMotion = true,
    // Professional callback for custom handling
    onIntersectionChange = null,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const [hasIntersectedOnce, setHasIntersectedOnce] = useState(false);
  const elementRef = useRef(null);
  const observerRef = useRef(null);

  // Check for reduced motion preference
  const prefersReducedMotion = respectReducedMotion && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!elementRef.current) return;

    // Professional intersection observer configuration
    const observerOptions = {
      threshold: Array.isArray(threshold) ? threshold : [threshold],
      rootMargin,
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const isCurrentlyIntersecting = entry.isIntersecting;
        const currentRatio = entry.intersectionRatio;

        // Professional state updates
        setIsIntersecting(isCurrentlyIntersecting);
        setIntersectionRatio(currentRatio);

        // Track first intersection for triggerOnce functionality
        if (isCurrentlyIntersecting && !hasIntersectedOnce) {
          setHasIntersectedOnce(true);
        }

        // Professional callback execution
        if (onIntersectionChange) {
          onIntersectionChange({
            isIntersecting: isCurrentlyIntersecting,
            intersectionRatio: currentRatio,
            entry,
            prefersReducedMotion,
          });
        }

        // Professional optimization: stop observing if triggerOnce is true
        if (triggerOnce && isCurrentlyIntersecting && observerRef.current) {
          observerRef.current.unobserve(elementRef.current);
        }
      });
    };

    // Create and configure professional observer
    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);
    observerRef.current.observe(elementRef.current);

    return () => {
      if (observerRef.current && elementRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    };
  }, [threshold, rootMargin, triggerOnce, onIntersectionChange, hasIntersectedOnce, respectReducedMotion]);

  // Professional helper functions
  const shouldAnimate = () => {
    if (triggerOnce) {
      return hasIntersectedOnce;
    }
    return isIntersecting;
  };

  const getVisibilityStage = () => {
    if (intersectionRatio === 0) return 'hidden';
    if (intersectionRatio < 0.5) return 'entering';
    if (intersectionRatio < 1) return 'partial';
    return 'fully-visible';
  };

  return {
    // Core intersection data
    isIntersecting,
    intersectionRatio,
    elementRef,
    
    // Professional state tracking
    hasIntersectedOnce,
    shouldAnimate: shouldAnimate(),
    visibilityStage: getVisibilityStage(),
    
    // Accessibility information
    prefersReducedMotion,
    
    // Professional utilities
    isHidden: intersectionRatio === 0,
    isEntering: intersectionRatio > 0 && intersectionRatio < 0.5,
    isPartiallyVisible: intersectionRatio >= 0.5 && intersectionRatio < 1,
    isFullyVisible: intersectionRatio === 1,
  };
};

/**
 * Professional multiple elements intersection observer
 * For managing visibility of multiple 3D components efficiently
 */
export const useMultipleIntersectionObserver = (elementsConfig = [], globalOptions = {}) => {
  const [intersections, setIntersections] = useState(new Map());
  const observerRef = useRef(null);
  const elementRefs = useRef(new Map());

  const {
    threshold = 0.1,
    rootMargin = '0px',
    respectReducedMotion = true,
  } = globalOptions;

  const prefersReducedMotion = respectReducedMotion && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (elementsConfig.length === 0) return;

    const observerOptions = {
      threshold: Array.isArray(threshold) ? threshold : [threshold],
      rootMargin,
    };

    const handleIntersections = (entries) => {
      const newIntersections = new Map(intersections);

      entries.forEach((entry) => {
        const elementId = entry.target.getAttribute('data-intersection-id');
        if (elementId) {
          newIntersections.set(elementId, {
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio,
            entry,
            prefersReducedMotion,
          });
        }
      });

      setIntersections(newIntersections);
    };

    observerRef.current = new IntersectionObserver(handleIntersections, observerOptions);

    // Observe all configured elements
    elementsConfig.forEach((config) => {
      const element = elementRefs.current.get(config.id);
      if (element) {
        element.setAttribute('data-intersection-id', config.id);
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [elementsConfig.length, threshold, rootMargin, intersections, respectReducedMotion]);

  // Professional helper to get ref for specific element
  const getElementRef = (elementId) => {
    if (!elementRefs.current.has(elementId)) {
      elementRefs.current.set(elementId, { current: null });
    }
    return elementRefs.current.get(elementId);
  };

  // Professional helper to get intersection data for specific element
  const getIntersectionData = (elementId) => {
    return intersections.get(elementId) || {
      isIntersecting: false,
      intersectionRatio: 0,
      entry: null,
      prefersReducedMotion,
    };
  };

  return {
    intersections,
    getElementRef,
    getIntersectionData,
    prefersReducedMotion,
  };
};

export default useIntersectionObserver;