// Aceternity UI Utility Functions and Components
import React, { useState, useEffect, useRef } from 'react';

// Utility function for combining class names (similar to clsx)
export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Throttle utility for performance optimization
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// Debounce utility
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Intersection Observer Hook for animations
export const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
};

// Mouse position tracker
export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 16);

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return mousePosition;
};

// Scroll progress hook
export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = throttle(() => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(100, Math.max(0, progress)));
    }, 16);

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
};

// Enhanced Button Component with Aceternity UI styling
export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  borderRadius = '1.75rem',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500',
    secondary: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 focus:ring-blue-500'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      style={{ borderRadius }}
      {...props}
    >
      {children}
    </button>
  );
};

// Moving Border Button Component
export const MovingBorderButton = ({ 
  children, 
  className = '', 
  borderRadius = '1.75rem',
  duration = '2s',
  ...props 
}) => {
  return (
    <div className={cn("relative overflow-hidden", className)} style={{ borderRadius }}>
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
        style={{
          borderRadius,
          padding: '2px',
          animation: `gradient-xy ${duration} ease infinite`
        }}
      >
        <div 
          className="bg-white dark:bg-slate-900 h-full w-full flex items-center justify-center text-black dark:text-white"
          style={{ borderRadius: `calc(${borderRadius} - 2px)` }}
        >
          <button className="w-full h-full px-6 py-3 font-medium" {...props}>
            {children}
          </button>
        </div>
      </div>
    </div>
  );
};

// Spotlight Component
export const Spotlight = ({ 
  className = '', 
  fill = 'white',
  size = { width: '138%', height: '169%' }
}) => (
  <div className={cn("pointer-events-none absolute z-[1] opacity-30", className)} style={size}>
    <div className="relative h-full w-full">
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 600px 300px at 50% 0%, ${fill}20, transparent)`
        }}
      />
    </div>
  </div>
);

// Background Beams Component
export const BackgroundBeams = ({ className = '' }) => (
  <div className={cn("absolute inset-0 overflow-hidden", className)}>
    <svg
      className="absolute inset-0 h-full w-full"
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.05)" />
        </linearGradient>
        <linearGradient id="beam2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.05)" />
        </linearGradient>
      </defs>
      <path
        d="M0,0 L100,100 L90,100 L0,10 Z"
        fill="url(#beam1)"
        className="animate-pulse"
        style={{ animationDuration: '3s' }}
      />
      <path
        d="M100,0 L0,100 L10,100 L100,10 Z"
        fill="url(#beam2)"
        className="animate-pulse"
        style={{ animationDuration: '4s', animationDelay: '1s' }}
      />
    </svg>
  </div>
);

// Meteors Component for loading states
export const Meteors = ({ number = 20 }) => {
  const meteors = new Array(number || 20).fill(true);
  
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        />
      ))}
    </>
  );
};

// Infinite Moving Cards Component
export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className = ''
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background: "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              />
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Text Generate Effect
export const TextGenerateEffect = ({ words, className = '' }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentChar(prev => prev - 1);
      } else {
        setCurrentChar(prev => prev + 1);
      }

      if (!isDeleting && currentChar === words[currentWord].length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentChar === 0) {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % words.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentChar, currentWord, isDeleting, words]);

  return (
    <span className={cn("inline-block", className)}>
      {words[currentWord].substring(0, currentChar)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

// Floating Dock Component
export const FloatingDock = ({ items, className = '' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("flex items-center gap-2 p-2 bg-black/20 backdrop-blur-lg rounded-2xl border border-white/20", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 cursor-pointer",
            hoveredIndex === index ? "scale-125 bg-white/20" : "hover:bg-white/10"
          )}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {item.icon}
          {hoveredIndex === index && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-sm whitespace-nowrap">
              {item.title}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Animated Tooltip
export const AnimatedTooltip = ({ items, className = '' }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("flex items-center", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className={cn(
            "w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold transition-all duration-300",
            hoveredIndex === index ? "scale-110 z-10" : "",
            index > 0 ? "-ml-3" : ""
          )}>
            {item.name.split(' ').map(n => n[0]).join('')}
          </div>
          
          {hoveredIndex === index && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap z-20 animate-fade-in">
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-gray-300">{item.designation}</div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Export all utilities
export default {
  cn,
  throttle,
  debounce,
  useInView,
  useMousePosition,
  useScrollProgress,
  Button,
  MovingBorderButton,
  Spotlight,
  BackgroundBeams,
  Meteors,
  InfiniteMovingCards,
  TextGenerateEffect,
  FloatingDock,
  AnimatedTooltip
};