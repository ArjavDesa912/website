import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ProfessionalCanvas from '../enhanced3d/ProfessionalCanvas';
import DataFlowDiagram from '../enhanced3d/scenes/DataFlowDiagram';
import ScrollReveal, { StaggeredReveal } from '../motion/ScrollReveal';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { PROFESSIONAL_TIMINGS, PROFESSIONAL_COLORS } from '../../constants/animations';

/**
 * Enhanced 3D Problem Statement Section
 * Visualizes compliance challenges with professional 3D data representations
 */
const Enhanced3DProblemSection = () => {
  const sectionRef = useRef();
  const { scrollProgress, isVisible } = useScrollProgress({
    threshold: 0.1,
    respectReducedMotion: true
  });

  // Professional problem statistics with 3D visualization data
  const problemStats = [
    {
      icon: '💰',
      value: '€746M',
      label: 'GDPR Fines in 2023',
      color: PROFESSIONAL_COLORS.WARNING,
      description: 'European companies faced massive penalties for non-compliance',
      chartData: { type: 'bar', value: 85, trend: 'up' }
    },
    {
      icon: '⏱️',
      value: '73%',
      label: 'Struggle with Compliance',
      color: PROFESSIONAL_COLORS.WARNING,
      description: 'Organizations report difficulty managing AI governance',
      chartData: { type: 'pie', value: 73, trend: 'stable' }
    },
    {
      icon: '📈',
      value: '6-12',
      label: 'Months to Compliance',
      color: PROFESSIONAL_COLORS.WARNING,
      description: 'Average time to achieve regulatory compliance',
      chartData: { type: 'timeline', value: 9, trend: 'down' }
    }
  ];

  // Professional challenges with visual representations
  const complianceChallenges = [
    {
      title: 'Complex Regulatory Landscape',
      description: 'Multiple overlapping regulations create confusion and compliance gaps',
      impact: 'High',
      visualization: 'maze',
      details: [
        'GDPR, AI Act, CCPA requirements',
        'Industry-specific regulations',
        'Changing compliance standards'
      ]
    },
    {
      title: 'Manual Documentation Burden',
      description: 'Time-consuming manual processes drain resources and create errors',
      impact: 'Medium',
      visualization: 'workflow',
      details: [
        'Hours spent on documentation',
        'Error-prone manual processes',
        'Inconsistent compliance records'
      ]
    },
    {
      title: 'Lack of Real-time Monitoring',
      description: 'Reactive compliance approaches miss critical issues until too late',
      impact: 'High',
      visualization: 'monitoring',
      details: [
        'No continuous oversight',
        'Late detection of issues',
        'Reactive instead of proactive'
      ]
    }
  ];

  // Professional animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: PROFESSIONAL_TIMINGS.SMOOTH / 1000,
        staggerChildren: PROFESSIONAL_TIMINGS.STAGGER_COMFORTABLE / 1000
      }
    }
  };

  const statCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: PROFESSIONAL_TIMINGS.SMOOTH / 1000,
        ease: "easeOut"
      }
    }
  };

  // Professional canvas configuration
  const canvasConfig = {
    camera: { position: [0, 0, 8], fov: 45 },
    shadows: true,
    performance: 'auto'
  };

  // Professional fallback content for accessibility
  const professionalFallback = (
    <div className="professional-problem-fallback bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-200/50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {problemStats.map((stat, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold text-red-600 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-gray-800 mb-2">Compliance Challenges Visualization</div>
        <div className="text-sm text-gray-600">Interactive data representation of AI governance obstacles</div>
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      id="problem"
      className="relative py-20 bg-gradient-to-b from-white to-red-50 overflow-hidden"
    >
      {/* Professional background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-orange-50/30 pointer-events-none" />
      
      {/* Professional grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(${PROFESSIONAL_COLORS.WARNING}40 1px, transparent 1px), linear-gradient(90deg, ${PROFESSIONAL_COLORS.WARNING}40 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* Professional content column */}
          <div className="space-y-8">
            
            {/* Professional section header */}
            <ScrollReveal direction="up" delay={0}>
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                  Critical Challenges
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  The Cost of 
                  <span className="text-red-600 block">AI Non-Compliance</span>
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Organizations face mounting pressure from complex regulations, 
                  manual processes, and reactive compliance approaches that leave 
                  them vulnerable to penalties and reputational damage.
                </p>
              </div>
            </ScrollReveal>

            {/* Professional statistics grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={sectionVariants}
            >
              {problemStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statCardVariants}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-red-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-3">{stat.icon}</div>
                    <div 
                      className="text-3xl font-bold mb-2"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-700 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500 leading-tight">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Professional challenges list */}
            <ScrollReveal direction="up" delay={400}>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Key Compliance Obstacles
                </h3>
                
                <StaggeredReveal staggerDelay={150}>
                  {complianceChallenges.map((challenge, index) => (
                    <div 
                      key={index}
                      className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-red-200/30 hover:border-red-300/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            challenge.impact === 'High' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                          }`}>
                            <span className="text-lg font-bold">!</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">
                            {challenge.title}
                          </h4>
                          <p className="text-gray-600 mb-3">
                            {challenge.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {challenge.details.map((detail, idx) => (
                              <span 
                                key={idx}
                                className="text-xs px-2 py-1 bg-red-50 text-red-700 rounded-full"
                              >
                                {detail}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            challenge.impact === 'High' 
                              ? 'bg-red-100 text-red-800' 
                              : 'bg-orange-100 text-orange-800'
                          }`}>
                            {challenge.impact} Impact
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </StaggeredReveal>
              </div>
            </ScrollReveal>

            {/* Professional call-to-action */}
            <ScrollReveal direction="up" delay={600}>
              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 text-white">
                <h4 className="text-xl font-bold mb-2">
                  Don't Let Compliance Challenges Hold You Back
                </h4>
                <p className="mb-4 opacity-90">
                  Transform your approach from reactive to proactive with our comprehensive AI governance platform.
                </p>
                <motion.button
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  See Our Solution
                </motion.button>
              </div>
            </ScrollReveal>
          </div>

          {/* Professional 3D visualization column */}
          <ScrollReveal direction="left" delay={200}>
            <div className="relative">
              <div 
                className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/80 to-red-50/80 backdrop-blur-sm border border-red-200/20"
              >
                <ProfessionalCanvas
                  {...canvasConfig}
                  className="w-full h-full"
                  aria-label="Interactive compliance challenges data visualization"
                  fallback={professionalFallback}
                >
                  <DataFlowDiagram 
                    scrollData={{ progress: scrollProgress, isVisible }}
                    stage="problem"
                  />
                </ProfessionalCanvas>
              </div>

              {/* Professional enhancement indicators */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Risk Analysis</span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-medium text-gray-700">Data Insights</span>
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Professional transition element */}
        <ScrollReveal direction="up" delay={800}>
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-gray-200/50">
              <span className="text-sm font-medium text-gray-600">Ready for a better approach?</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-red-400 to-blue-400"></div>
              <span className="text-sm font-medium text-blue-600">Discover Our Solution</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Professional CSS for additional styling */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          .enhanced-problem-section * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Enhanced3DProblemSection;