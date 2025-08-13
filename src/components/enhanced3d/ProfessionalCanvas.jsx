import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { useResponsive3D } from '../../hooks/useResponsive3D';
import { PROFESSIONAL_COLORS } from '../../constants/animations';

/**
 * Professional 3D Canvas with Enterprise Accessibility Standards
 * WCAG 2.1 AA compliant with progressive enhancement approach
 */
const ProfessionalCanvas = ({ 
  children, 
  className = '',
  fallbackContent = null,
  sceneConfig = {},
  onPerformanceChange = null,
  ariaLabel = "Interactive 3D visualization",
  ariaDescription = "Professional 3D scene showcasing compliance solutions",
  ...props 
}) => {
  const canvasRef = useRef();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Professional responsive 3D configuration
  const {
    shouldRender3D,
    qualityConfig,
    featureSupport,
    prefersReducedMotion,
    deviceType,
    currentFPS,
    qualityLevel,
  } = useResponsive3D();

  // Professional performance monitoring
  useEffect(() => {
    if (onPerformanceChange) {
      onPerformanceChange({
        fps: currentFPS,
        qualityLevel,
        deviceType,
        featureSupport,
      });
    }
  }, [currentFPS, qualityLevel, deviceType, featureSupport, onPerformanceChange]);

  // Professional error boundary
  const handleCanvasError = (error) => {
    console.warn('Professional 3D Canvas Error:', error);
    setHasError(true);
  };

  // Professional loading completion
  const handleCanvasCreated = ({ gl, scene, camera }) => {
    setIsLoading(false);
    
    // Professional WebGL optimizations
    if (gl) {
      gl.toneMapping = THREE.ACESFilmicToneMapping;
      gl.toneMappingExposure = 1;
      gl.outputColorSpace = THREE.SRGBColorSpace;
      
      // Professional shadow configuration
      if (featureSupport.shadows) {
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = qualityConfig.shadows === 'high' 
          ? THREE.PCFSoftShadowMap 
          : THREE.PCFShadowMap;
      }
      
      // Professional performance optimizations
      gl.setPixelRatio(Math.min(window.devicePixelRatio, qualityConfig.resolution));
    }
  };

  // Professional canvas configuration
  const canvasConfig = {
    // Professional performance settings
    dpr: Math.min(window.devicePixelRatio, qualityConfig.resolution),
    antialias: qualityConfig.antialias,
    alpha: true,
    preserveDrawingBuffer: false,
    powerPreference: deviceType === 'mobile' ? 'low-power' : 'high-performance',
    
    // Professional accessibility settings
    tabIndex: shouldRender3D ? 0 : -1,
    role: "img",
    'aria-label': ariaLabel,
    'aria-description': ariaDescription,
    'aria-hidden': !shouldRender3D,
    
    // Professional camera defaults
    camera: {
      fov: 45,
      near: 0.1,
      far: 1000,
      position: [0, 0, 10],
      ...sceneConfig.camera,
    },
    
    // Professional event handling
    onCreated: handleCanvasCreated,
    onError: handleCanvasError,
    
    // Professional rendering settings
    gl: {
      preserveDrawingBuffer: false,
      antialias: qualityConfig.antialias,
      alpha: true,
      stencil: false,
      depth: true,
      logarithmicDepthBuffer: false,
    },
    
    ...props,
  };

  // Professional fallback component
  const ProfessionalFallback = () => (
    <div 
      className={`professional-3d-fallback ${className}`}
      role="img"
      aria-label={ariaLabel}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${PROFESSIONAL_COLORS.PRIMARY}20, ${PROFESSIONAL_COLORS.SECONDARY}20)`,
        borderRadius: '8px',
        border: `1px solid ${PROFESSIONAL_COLORS.NEUTRAL}20`,
        minHeight: '400px',
      }}
    >
      {fallbackContent || (
        <div className="text-center p-8">
          <div className="mb-4 text-6xl opacity-50">📊</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Professional Visualization
          </h3>
          <p className="text-gray-600 max-w-md">
            Your browser supports a professional static view of our compliance solutions. 
            For the full interactive experience, please enable JavaScript and WebGL.
          </p>
        </div>
      )}
    </div>
  );

  // Professional loading component
  const ProfessionalLoader = () => (
    <div 
      className={`professional-3d-loader ${className}`}
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${PROFESSIONAL_COLORS.PRIMARY}10, ${PROFESSIONAL_COLORS.SECONDARY}10)`,
        borderRadius: '8px',
        minHeight: '400px',
      }}
    >
      <div className="text-center">
        <div 
          className="inline-block w-8 h-8 border-2 border-current border-t-transparent rounded-full animate-spin mb-4"
          style={{ color: PROFESSIONAL_COLORS.PRIMARY }}
        />
        <p className="text-sm text-gray-600">Loading professional visualization...</p>
      </div>
    </div>
  );

  // Professional accessibility announcement
  const AccessibilityAnnouncement = () => (
    <div 
      className="sr-only" 
      aria-live="polite" 
      aria-atomic="true"
    >
      {isLoading && "Loading 3D visualization"}
      {!isLoading && shouldRender3D && "3D visualization loaded and ready for interaction"}
      {!shouldRender3D && "Displaying accessible static version of visualization"}
    </div>
  );

  // Professional reduced motion handling
  if (prefersReducedMotion && !shouldRender3D) {
    return (
      <>
        <AccessibilityAnnouncement />
        <ProfessionalFallback />
      </>
    );
  }

  // Professional error handling
  if (hasError || !shouldRender3D) {
    return (
      <>
        <AccessibilityAnnouncement />
        <ProfessionalFallback />
      </>
    );
  }

  return (
    <>
      <AccessibilityAnnouncement />
      <div 
        className={`professional-3d-container ${className}`}
        style={{ width: '100%', height: '100%', position: 'relative' }}
      >
        <Canvas
          ref={canvasRef}
          {...canvasConfig}
          style={{ 
            width: '100%', 
            height: '100%',
            outline: 'none', // Remove focus outline, handled by container
          }}
        >
          <Suspense fallback={null}>
            {/* Professional lighting setup */}
            <ambientLight intensity={0.6} />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={0.8}
              castShadow={featureSupport.shadows}
              shadow-mapSize-width={qualityConfig.shadows === 'high' ? 2048 : 1024}
              shadow-mapSize-height={qualityConfig.shadows === 'high' ? 2048 : 1024}
            />
            
            {/* Professional scene content */}
            {children}
          </Suspense>
        </Canvas>
        
        {/* Professional loading overlay */}
        {isLoading && (
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              zIndex: 10,
            }}
          >
            <ProfessionalLoader />
          </div>
        )}
      </div>
    </>
  );
};

// Professional Canvas wrapper with additional enterprise features
export const ProfessionalCanvasProvider = ({ 
  children, 
  globalConfig = {},
  onGlobalPerformanceChange = null 
}) => {
  const [globalPerformanceData, setGlobalPerformanceData] = useState({});

  const handlePerformanceUpdate = (data) => {
    setGlobalPerformanceData(data);
    if (onGlobalPerformanceChange) {
      onGlobalPerformanceChange(data);
    }
  };

  return (
    <div className="professional-canvas-provider">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === ProfessionalCanvas) {
          return React.cloneElement(child, {
            onPerformanceChange: handlePerformanceUpdate,
            ...globalConfig,
          });
        }
        return child;
      })}
    </div>
  );
};

// Professional Canvas with scroll integration
export const ScrollIntegratedCanvas = ({ 
  children, 
  scrollTrigger = {},
  ...canvasProps 
}) => {
  const containerRef = useRef();
  const [scrollData, setScrollData] = useState({ progress: 0, isVisible: false });

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setScrollData(prev => ({
            ...prev,
            isVisible: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight + rect.height)
      ));

      setScrollData(prev => ({
        ...prev,
        progress,
      }));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <ProfessionalCanvas {...canvasProps}>
        {React.Children.map(children, (child) => 
          React.isValidElement(child) 
            ? React.cloneElement(child, { scrollData })
            : child
        )}
      </ProfessionalCanvas>
    </div>
  );
};

export default ProfessionalCanvas;