import React, { useState, useEffect, useRef } from 'react';
import { Users, Shield, Zap, CheckCircle, Calendar } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';
import ProfessionalCanvas from '../enhanced3d/ProfessionalCanvas';
import ComplianceVisualization from '../enhanced3d/scenes/ComplianceVisualization';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { useResponsive3D } from '../../hooks/useResponsive3D';
import { motion } from 'framer-motion';

/**
 * Professional 3D Enhanced Hero Section
 * Enterprise-grade hero with subtle 3D compliance dashboard visualization
 * Maintains accessibility and professional aesthetics
 */

// Professional mouse tracking hook
const useMouseTracking = (enabled = true) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      
      // Professional constraints for subtle movement
      setMousePosition({
        x: Math.max(-1, Math.min(1, x)) * 0.5,
        y: Math.max(-1, Math.min(1, y)) * 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);

  return mousePosition;
};

// Professional floating card with enhanced animations
const ProfessionalFloatingCard = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.4, 0, 0.2, 1], // Professional easing
      }}
      className={`professional-floating-card ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Professional glowing button with enhanced interactions
const ProfessionalGlowingButton = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseClasses = "px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg relative overflow-hidden";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25 hover:shadow-blue-500/40",
    secondary: "border border-white/20 text-slate-200 hover:bg-white/10 backdrop-blur-sm bg-transparent"
  };

  return (
    <motion.button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <span className="relative z-10">{children}</span>
      
      {/* Professional shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </motion.button>
  );
};

const Enhanced3DHeroSection = ({ onShowTeam, onContactClick }) => {
  const heroRef = useRef();
  const [is3DLoaded, setIs3DLoaded] = useState(false);
  
  // Professional responsive 3D configuration
  const { shouldRender3D, prefersReducedMotion, deviceType } = useResponsive3D();
  
  // Professional mouse tracking (disabled for reduced motion)
  const mousePosition = useMouseTracking(!prefersReducedMotion && shouldRender3D);
  
  // Professional scroll progress
  const { scrollProgress, isVisible } = useScrollProgress({
    offset: 100,
    respectReducedMotion: true,
  });

  // Handle Calendly demo scheduling
  const handleScheduleDemo = () => {
    // Track the demo request
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        lead_type: 'schedule_demo',
        source: 'enhanced_3d_hero_section',
        value: 1
      });
    }
    
    // Open Calendly in new tab
    window.open('https://calendly.com/arjav-desai-praesidiumsystems/30min', '_blank');
  };

  // Professional 3D canvas configuration
  const canvasConfig = {
    camera: {
      position: [0, 0, 8],
      fov: 45,
    },
    sceneConfig: {
      enableShadows: deviceType === 'desktop',
    },
  };

  // Professional fallback content for accessibility
  const professionalFallback = (
    <div className="professional-dashboard-fallback bg-gradient-to-br from-slate-900/50 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Compliance Score', value: '98%', color: 'text-green-400' },
          { label: 'AI Models', value: '127', color: 'text-blue-400' },
          { label: 'Risk Level', value: 'Low', color: 'text-green-400' },
          { label: 'Active Audits', value: '12', color: 'text-cyan-400' },
          { label: 'Regulations', value: '8', color: 'text-blue-400' },
          { label: 'Uptime', value: '99.9%', color: 'text-green-400' },
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white/5 rounded-lg p-4 backdrop-blur-sm border border-white/10"
          >
            <div className="text-sm text-slate-300 mb-1">{metric.label}</div>
            <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-white mb-2">AI Compliance Dashboard</div>
        <div className="text-sm text-slate-300">Real-time monitoring and governance for enterprise AI systems</div>
      </div>
    </div>
  );

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Professional grid pattern */}
      <div className="absolute inset-0 bg-grid-slate-900 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none">
        <style>{`
          .bg-grid-slate-900 {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
          }
        `}</style>
      </div>

      {/* Professional ambient particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {!prefersReducedMotion && [...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Professional content side */}
          <div className="lg:w-1/2 space-y-8">
            {/* Professional badge */}
            <ProfessionalFloatingCard delay={0}>
              <div className="inline-flex items-center px-4 py-2 bg-slate-900/70 backdrop-blur-md border border-white/20 text-slate-100 rounded-full text-sm font-semibold shadow-lg">
                <Shield className="h-4 w-4 mr-2" />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent font-bold">
                  Enterprise AI Governance Platform
                </span>
              </div>
            </ProfessionalFloatingCard>
            
            {/* Professional main heading */}
            <ProfessionalFloatingCard delay={0.2}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">
                  AI Governance
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  Simplified
                </span>
              </h1>
            </ProfessionalFloatingCard>
            
            {/* Professional subtitle */}
            <ProfessionalFloatingCard delay={0.4}>
              <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-lg">
                Comprehensive governance for ML and LLM models with automated compliance monitoring, testing, and documentation.
              </p>
            </ProfessionalFloatingCard>
            
            {/* Professional description */}
            <ProfessionalFloatingCard delay={0.6}>
              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Praesidium Systems simplifies enterprise AI oversight by providing end-to-end monitoring, 
                auditing, and compliance assurance for machine learning and large language models.
              </p>
            </ProfessionalFloatingCard>
            
            {/* Professional CTA buttons */}
            <ProfessionalFloatingCard delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <ProfessionalGlowingButton
                  onClick={handleScheduleDemo}
                  variant="primary"
                  className="group"
                >
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 mr-3 flex-shrink-0" />
                    <div className="text-left">
                      <div>Schedule Demo</div>
                    </div>
                  </div>
                </ProfessionalGlowingButton>
                
                <ProfessionalGlowingButton 
                  onClick={() => scrollToSection('products')}
                  variant="secondary"
                >
                  Explore Platform
                </ProfessionalGlowingButton>
              </div>
            </ProfessionalFloatingCard>

            {/* Professional trust indicators */}
            <ProfessionalFloatingCard delay={1}>
              <div className="flex flex-wrap items-center gap-8 pt-8">
                <motion.div 
                  className="flex items-center gap-3 text-slate-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">SOC 2 Ready</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-slate-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Enterprise Security</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-3 text-slate-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">Production Ready</span>
                </motion.div>
              </div>
            </ProfessionalFloatingCard>
          </div>
          
          {/* Professional 3D visualization side */}
          <div className="lg:w-1/2">
            <ProfessionalFloatingCard delay={0.3}>
              <div className="relative h-[600px] w-full">
                {shouldRender3D ? (
                  <ProfessionalCanvas
                    {...canvasConfig}
                    className="rounded-3xl shadow-2xl border border-white/10"
                    fallbackContent={professionalFallback}
                    ariaLabel="Interactive AI Compliance Dashboard Visualization"
                    ariaDescription="3D representation of real-time AI governance metrics including compliance scores, model monitoring, and regulatory tracking"
                    onPerformanceChange={(data) => {
                      setIs3DLoaded(data.fps > 0);
                    }}
                  >
                    <ComplianceVisualization 
                      mousePosition={mousePosition}
                      scrollData={{ progress: scrollProgress, isVisible }}
                    />
                  </ProfessionalCanvas>
                ) : (
                  <div className="h-full rounded-3xl shadow-2xl border border-white/10">
                    {professionalFallback}
                  </div>
                )}
                
                {/* Professional 3D status indicator */}
                {shouldRender3D && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-4 right-4 bg-slate-900/70 backdrop-blur-md rounded-lg px-3 py-2 border border-white/10"
                  >
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <div className={`w-2 h-2 rounded-full ${is3DLoaded ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
                      <span>{is3DLoaded ? 'Interactive 3D' : 'Loading 3D'}</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </ProfessionalFloatingCard>
          </div>
        </div>
        
        {/* Professional team section */}
        <ProfessionalFloatingCard delay={1.2}>
          <div className="mt-24 text-center">
            <div className="inline-flex flex-col items-center gap-6 bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10">
              <h2 className="text-2xl font-bold text-white">Backed by Industry Experts</h2>
              <p className="text-lg text-slate-300 max-w-2xl">
                Our team brings extensive experience in AI, compliance, and regulatory frameworks
              </p>
              <ProfessionalGlowingButton 
                onClick={onShowTeam}
                variant="primary"
                className="flex items-center gap-2"
              >
                <Users className="h-5 w-5" />
                Meet Our Leadership Team
              </ProfessionalGlowingButton>
            </div>
          </div>
        </ProfessionalFloatingCard>
      </div>

      {/* Professional accessibility announcements */}
      <div className="sr-only" aria-live="polite">
        {shouldRender3D && is3DLoaded && "3D compliance visualization loaded and ready for interaction"}
        {!shouldRender3D && "Accessible dashboard visualization displayed"}
      </div>
    </section>
  );
};

export default Enhanced3DHeroSection;