import { useState, useEffect, useRef } from 'react';
import { PERFORMANCE_THRESHOLDS } from '../constants/animations';

/**
 * Professional responsive 3D hook for enterprise device optimization
 * Automatically adjusts 3D quality based on device capabilities and performance
 */
export const useResponsive3D = (options = {}) => {
  const {
    // Professional quality configuration
    enableAutoQuality = true,
    respectReducedMotion = true,
    performanceCheckInterval = 1000, // Check FPS every second
    qualityLevels = {
      high: {
        shadows: true,
        reflections: true,
        particles: 'full',
        resolution: 1.0,
        antialias: true,
      },
      medium: {
        shadows: true,
        reflections: false,
        particles: 'reduced',
        resolution: 0.8,
        antialias: true,
      },
      low: {
        shadows: false,
        reflections: false,
        particles: 'minimal',
        resolution: 0.6,
        antialias: false,
      },
      accessible: {
        shadows: false,
        reflections: false,
        particles: 'none',
        resolution: 0.5,
        antialias: false,
      },
    },
  } = options;

  // Professional device and performance state
  const [deviceType, setDeviceType] = useState('desktop');
  const [qualityLevel, setQualityLevel] = useState('high');
  const [currentFPS, setCurrentFPS] = useState(60);
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [supportsWebGL, setSupportsWebGL] = useState(true);

  // Performance monitoring refs
  const frameCount = useRef(0);
  const lastTime = useRef(performance.now());
  const performanceHistory = useRef([]);
  const rafId = useRef(null);

  // Professional device detection
  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent;
      const screenWidth = window.innerWidth;
      
      // Professional device classification
      if (/Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
        if (screenWidth < 768) {
          setDeviceType('mobile');
        } else {
          setDeviceType('tablet');
        }
      } else {
        setDeviceType('desktop');
      }

      // Professional reduced motion detection
      const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(reducedMotionQuery.matches);
      
      // Listen for changes in motion preferences
      const handleMotionChange = (e) => setPrefersReducedMotion(e.matches);
      reducedMotionQuery.addEventListener('change', handleMotionChange);

      return () => {
        reducedMotionQuery.removeEventListener('change', handleMotionChange);
      };
    };

    const detectWebGLSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setSupportsWebGL(!!context);
      } catch (e) {
        setSupportsWebGL(false);
      }
    };

    detectDevice();
    detectWebGLSupport();
  }, []);

  // Professional performance monitoring
  useEffect(() => {
    if (!enableAutoQuality) return;

    const measurePerformance = () => {
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime.current;
      
      frameCount.current++;
      
      // Calculate FPS every second
      if (deltaTime >= 1000) {
        const fps = Math.round((frameCount.current * 1000) / deltaTime);
        setCurrentFPS(fps);
        
        // Professional performance history tracking
        performanceHistory.current.push(fps);
        if (performanceHistory.current.length > 10) {
          performanceHistory.current.shift();
        }
        
        // Professional quality level adjustment
        const averageFPS = performanceHistory.current.reduce((a, b) => a + b, 0) / performanceHistory.current.length;
        adjustQualityLevel(averageFPS);
        
        frameCount.current = 0;
        lastTime.current = currentTime;
      }
      
      rafId.current = requestAnimationFrame(measurePerformance);
    };

    rafId.current = requestAnimationFrame(measurePerformance);

    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [enableAutoQuality]);

  // Professional quality level adjustment
  const adjustQualityLevel = (averageFPS) => {
    let newQualityLevel = qualityLevel;
    
    // Professional accessibility-first approach
    if (prefersReducedMotion) {
      newQualityLevel = 'accessible';
    } else if (!supportsWebGL) {
      newQualityLevel = 'accessible';
    } else {
      // Professional device-based quality adjustment
      const targetFPS = getTargetFPS();
      
      if (averageFPS >= PERFORMANCE_THRESHOLDS.HIGH_QUALITY_MIN_FPS && targetFPS === 60) {
        newQualityLevel = 'high';
      } else if (averageFPS >= PERFORMANCE_THRESHOLDS.MEDIUM_QUALITY_MIN_FPS) {
        newQualityLevel = 'medium';
      } else if (averageFPS >= PERFORMANCE_THRESHOLDS.LOW_QUALITY_MIN_FPS) {
        newQualityLevel = 'low';
      } else {
        newQualityLevel = 'accessible';
      }
    }

    if (newQualityLevel !== qualityLevel) {
      setQualityLevel(newQualityLevel);
      setIsLowPerformance(newQualityLevel === 'low' || newQualityLevel === 'accessible');
    }
  };

  // Professional target FPS calculation
  const getTargetFPS = () => {
    switch (deviceType) {
      case 'desktop':
        return PERFORMANCE_THRESHOLDS.DESKTOP_TARGET_FPS;
      case 'tablet':
        return PERFORMANCE_THRESHOLDS.TABLET_TARGET_FPS;
      case 'mobile':
        return PERFORMANCE_THRESHOLDS.MOBILE_TARGET_FPS;
      default:
        return PERFORMANCE_THRESHOLDS.DESKTOP_TARGET_FPS;
    }
  };

  // Professional quality configuration getter
  const getQualityConfig = () => {
    return qualityLevels[qualityLevel] || qualityLevels.accessible;
  };

  // Professional manual quality override
  const setManualQualityLevel = (level) => {
    if (qualityLevels[level]) {
      setQualityLevel(level);
      setIsLowPerformance(level === 'low' || level === 'accessible');
    }
  };

  // Professional feature support detection
  const getFeatureSupport = () => {
    const config = getQualityConfig();
    
    return {
      // Core 3D support
      webGL: supportsWebGL,
      animations: !prefersReducedMotion,
      
      // Professional feature flags
      shadows: config.shadows && supportsWebGL,
      reflections: config.reflections && supportsWebGL,
      particles: config.particles !== 'none' && supportsWebGL,
      highResolution: config.resolution >= 0.8,
      antialiasing: config.antialias && supportsWebGL,
      
      // Professional performance optimizations
      reduceQuality: isLowPerformance,
      simplifyGeometry: qualityLevel === 'low' || qualityLevel === 'accessible',
      disableComplexEffects: qualityLevel === 'accessible',
    };
  };

  return {
    // Professional device information
    deviceType,
    supportsWebGL,
    prefersReducedMotion,
    
    // Professional performance data
    qualityLevel,
    currentFPS,
    targetFPS: getTargetFPS(),
    isLowPerformance,
    performanceHistory: performanceHistory.current,
    
    // Professional configuration
    qualityConfig: getQualityConfig(),
    featureSupport: getFeatureSupport(),
    
    // Professional controls
    setManualQualityLevel,
    
    // Professional utilities
    shouldRender3D: supportsWebGL && (!prefersReducedMotion || qualityLevel !== 'accessible'),
    shouldUseSimplifiedGeometry: qualityLevel === 'low' || qualityLevel === 'accessible',
    shouldDisableAnimations: prefersReducedMotion,
    
    // Professional responsive breakpoints
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
    isTouchDevice: deviceType === 'mobile' || deviceType === 'tablet',
  };
};

export default useResponsive3D;