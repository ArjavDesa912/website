import React, { useState, useRef, useEffect, useCallback } from 'react';

import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn } from 'lucide-react';

// Main Screenshot Showcase Component
const ScreenshotShowcase = ({ screenshots, title, description }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredTab, setHoveredTab] = useState(null);
  const imageRef = useRef(null);

  // Preload images for smooth transitions
  useEffect(() => {
    const preloadImages = async () => {
      const promises = screenshots.map(screenshot => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = screenshot.src;
        });
      });
      
      try {
        await Promise.all(promises);
        setIsLoading(false);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };
    
    preloadImages();
  }, [screenshots]);

  const handlePrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  }, [screenshots.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  }, [screenshots.length]);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
  }, [handlePrevious, handleNext, isFullscreen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Auto-rotate functionality (optional)
  useEffect(() => {
    if (isFullscreen) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [isFullscreen, handleNext]);

  return (
    <>
      <section className="py-32 bg-slate-950 overflow-hidden">

        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/10 text-blue-200 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
              <ZoomIn className="h-4 w-4" />
              <span>Interactive Product Tour</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {title || "See Our Platform in Action"}
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {description || "Explore our comprehensive dashboard and powerful features through these detailed screenshots"}
            </p>
          </div>

          {/* Main Screenshot Display */}
          <div className="relative max-w-6xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setHoveredTab(index)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className={`
                    relative px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 backdrop-blur-sm
                    ${activeIndex === index 
                      ? 'bg-blue-600/90 text-white shadow-lg transform scale-105 border border-transparent' 
                      : 'bg-white/10 text-slate-300 hover:text-white hover:bg-white/15 border border-white/10'
                    }
                  `}
                >
                  {screenshot.title}
                  
                  {/* Hover preview */}
                  {hoveredTab === index && hoveredTab !== activeIndex && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-1 bg-slate-950/90 backdrop-blur-xl rounded-lg shadow-xl border border-white/10 z-50">
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.title}
                        className="w-48 h-auto rounded"
                      />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Screenshot Container */}
            <div className="relative group">
              {/* Loading Skeleton */}
              {isLoading && (
                <div className="absolute inset-0 bg-white/5 rounded-2xl animate-pulse" />
              )}

              {/* Main Image with 3D effect */}
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm transform transition-all duration-500 hover:scale-[1.02]"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <img
                  ref={imageRef}
                  src={screenshots[activeIndex].src}
                  alt={screenshots[activeIndex].alt}
                  className="w-full h-auto max-h-[600px] object-contain"
                  loading="lazy"
                />
                
                {/* Gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white/20 hover:scale-110"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white/20 hover:scale-110"
                aria-label="Next screenshot"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-white/20 hover:scale-110"
                aria-label="View fullscreen"
              >
                <Maximize2 className="h-5 w-5" />
              </button>

              {/* Feature Badges */}
              {screenshots[activeIndex].features && (
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {screenshots[activeIndex].features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm text-xs font-medium text-slate-200 rounded-full shadow-md border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Description and Progress */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                {screenshots[activeIndex].title}
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto mb-6">
                {screenshots[activeIndex].description}
              </p>

              {/* Progress Indicators */}
              <div className="flex justify-center items-center gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`
                      h-2 rounded-full transition-all duration-300
                      ${activeIndex === index 
                        ? 'w-8 bg-blue-500' 
                        : 'w-2 bg-white/20 hover:bg-white/30'
                      }
                    `}
                    aria-label={`Go to screenshot ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Thumbnail Grid (Optional) */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {screenshots.map((screenshot, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    relative rounded-lg overflow-hidden border-2 transition-all duration-300
                    ${activeIndex === index 
                      ? 'border-blue-500 shadow-lg scale-105' 
                      : 'border-white/10 hover:border-blue-400/50'
                    }
                  `}
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-24 object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-2`}>
                    <span className="text-white text-xs font-medium">
                      {screenshot.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <img
            src={screenshots[activeIndex].src}
            alt={screenshots[activeIndex].alt}
            className="max-w-full max-h-[90vh] object-contain"
          />

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
            <h3 className="text-white text-xl font-semibold mb-2">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-white/80 text-sm">
              {activeIndex + 1} of {screenshots.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default ScreenshotShowcase;