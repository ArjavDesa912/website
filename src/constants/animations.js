// Professional Animation Constants
// Following enterprise standards for subtle, purposeful motion

export const PROFESSIONAL_TIMINGS = {
  // Professional durations in milliseconds
  INSTANT: 150,
  QUICK: 300,
  SMOOTH: 600,
  DELIBERATE: 800,
  CONSIDERED: 1200,
  
  // Stagger timings for enterprise UX
  STAGGER_MINIMAL: 50,
  STAGGER_COMFORTABLE: 150,
  STAGGER_NOTICEABLE: 300,
};

export const PROFESSIONAL_EASINGS = {
  // Subtle, enterprise-appropriate easing functions
  ENTER: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // easeOutQuad
  EXIT: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)', // easeInQuad
  SMOOTH: 'cubic-bezier(0.645, 0.045, 0.355, 1)', // easeInOutQuart
  ELASTIC: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)', // easeOutBack (minimal)
  PROFESSIONAL: 'cubic-bezier(0.4, 0, 0.2, 1)', // Material Design standard
};

export const PROFESSIONAL_TRANSFORMS = {
  // Maximum displacement values for enterprise professionalism
  MAX_TRANSLATION: 5, // pixels
  MAX_ROTATION: 3, // degrees
  HOVER_ELEVATION: 3, // pixels
  SCALE_HOVER: 1.02, // minimal scale increase
  PARALLAX_STRENGTH: 0.5, // subtle parallax effect
};

export const ACCESSIBILITY_CONFIG = {
  // Reduced motion alternatives
  REDUCED_MOTION: {
    SCALE: 1, // no scaling
    TRANSLATION: 0, // no movement
    ROTATION: 0, // no rotation
    OPACITY_CHANGE_ONLY: true,
  },
  
  // High contrast alternatives
  HIGH_CONTRAST: {
    DISABLE_TRANSPARENCY: true,
    INCREASE_SHADOWS: true,
    ENHANCE_BORDERS: true,
  },
};

export const PERFORMANCE_THRESHOLDS = {
  // Frame rate targets for different device classes
  DESKTOP_TARGET_FPS: 60,
  TABLET_TARGET_FPS: 45,
  MOBILE_TARGET_FPS: 30,
  
  // Quality level switching thresholds
  HIGH_QUALITY_MIN_FPS: 55,
  MEDIUM_QUALITY_MIN_FPS: 25,
  LOW_QUALITY_MIN_FPS: 15,
};

export const PROFESSIONAL_COLORS = {
  // Enterprise color palette for 3D elements
  PRIMARY: '#2563eb', // Enterprise blue
  SECONDARY: '#0891b2', // Professional cyan
  SUCCESS: '#059669', // Compliance green
  WARNING: '#d97706', // Caution amber
  PREMIUM: '#7c3aed', // Executive purple
  NEUTRAL: '#374151', // Professional gray
  
  // Professional transparency levels
  GLASS_SUBTLE: 'rgba(255, 255, 255, 0.8)',
  GLASS_MEDIUM: 'rgba(255, 255, 255, 0.6)',
  OVERLAY_LIGHT: 'rgba(0, 0, 0, 0.1)',
  OVERLAY_MEDIUM: 'rgba(0, 0, 0, 0.2)',
};

export const SECTION_ANIMATIONS = {
  // Professional scroll-triggered animations for each section
  HERO: {
    DASHBOARD_REVEAL: {
      duration: PROFESSIONAL_TIMINGS.SMOOTH,
      easing: PROFESSIONAL_EASINGS.ENTER,
      stagger: PROFESSIONAL_TIMINGS.STAGGER_COMFORTABLE,
    },
    PARALLAX: {
      strength: PROFESSIONAL_TRANSFORMS.PARALLAX_STRENGTH,
      maxDisplacement: PROFESSIONAL_TRANSFORMS.MAX_TRANSLATION,
    },
  },
  
  PROBLEM_STATEMENT: {
    STATISTICS_REVEAL: {
      duration: PROFESSIONAL_TIMINGS.DELIBERATE,
      easing: PROFESSIONAL_EASINGS.SMOOTH,
      counterSpeed: 1000, // duration for counter animations
    },
    CHART_BUILD: {
      duration: PROFESSIONAL_TIMINGS.DELIBERATE,
      easing: PROFESSIONAL_EASINGS.ELASTIC,
      stagger: PROFESSIONAL_TIMINGS.STAGGER_NOTICEABLE,
    },
  },
  
  SOLUTION_OVERVIEW: {
    PRODUCT_WORKFLOW: {
      duration: PROFESSIONAL_TIMINGS.SMOOTH,
      easing: PROFESSIONAL_EASINGS.PROFESSIONAL,
      connectionDelay: PROFESSIONAL_TIMINGS.STAGGER_COMFORTABLE,
    },
  },
  
  FEATURES: {
    GRID_REVEAL: {
      duration: PROFESSIONAL_TIMINGS.QUICK,
      easing: PROFESSIONAL_EASINGS.ENTER,
      stagger: PROFESSIONAL_TIMINGS.STAGGER_MINIMAL,
    },
    HOVER_RESPONSE: {
      duration: PROFESSIONAL_TIMINGS.INSTANT,
      elevation: PROFESSIONAL_TRANSFORMS.HOVER_ELEVATION,
    },
  },
  
  PROCESS: {
    STEP_REVELATION: {
      duration: PROFESSIONAL_TIMINGS.QUICK,
      stagger: PROFESSIONAL_TIMINGS.STAGGER_NOTICEABLE,
      easing: PROFESSIONAL_EASINGS.ENTER,
    },
    CONNECTION_LINES: {
      duration: PROFESSIONAL_TIMINGS.SMOOTH,
      easing: PROFESSIONAL_EASINGS.SMOOTH,
    },
  },
};

export default {
  PROFESSIONAL_TIMINGS,
  PROFESSIONAL_EASINGS,
  PROFESSIONAL_TRANSFORMS,
  ACCESSIBILITY_CONFIG,
  PERFORMANCE_THRESHOLDS,
  PROFESSIONAL_COLORS,
  SECTION_ANIMATIONS,
};