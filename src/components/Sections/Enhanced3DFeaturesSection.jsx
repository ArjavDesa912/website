import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfessionalCanvas from '../enhanced3d/ProfessionalCanvas';
import ScrollProgressIndicator from '../enhanced3d/interactive/ScrollProgressIndicator';
import ScrollReveal, { StaggeredReveal } from '../motion/ScrollReveal';
import ParallaxSection, { FloatingElement } from '../motion/ParallaxSection';
import { useScrollProgress } from '../../hooks/useScrollProgress';
import { PROFESSIONAL_TIMINGS, PROFESSIONAL_COLORS } from '../../constants/animations';

/**
 * Enhanced 3D Features Section
 * Interactive feature showcase with professional 3D elements
 */
const Enhanced3DFeaturesSection = () => {
  const sectionRef = useRef();
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollProgress, isVisible } = useScrollProgress({
    threshold: 0.1,
    respectReducedMotion: true
  });

  // Professional feature categories with 3D representations
  const featureCategories = [
    {
      id: 'monitoring',
      title: 'Real-time Monitoring',
      icon: '📊',
      color: PROFESSIONAL_COLORS.PRIMARY,
      description: 'Continuous oversight of AI systems with instant alerts and comprehensive dashboards',
      features: [
        {
          name: 'Live Performance Tracking',
          description: 'Monitor model accuracy, latency, and resource usage in real-time',
          benefit: '99.9% uptime visibility'
        },
        {
          name: 'Automated Alerts',
          description: 'Instant notifications for anomalies, drift, or compliance violations',
          benefit: '< 5min response time'
        },
        {
          name: 'Compliance Dashboard',
          description: 'Unified view of regulatory status across all AI systems',
          benefit: '360° compliance view'
        }
      ]
    },
    {
      id: 'documentation',
      title: 'AI Documentation',
      icon: '📋',
      color: PROFESSIONAL_COLORS.SECONDARY,
      description: 'Automated generation of comprehensive compliance documentation',
      features: [
        {
          name: 'Model Cards',
          description: 'Automatically generated model documentation with bias analysis',
          benefit: '80% time savings'
        },
        {
          name: 'Data Lineage',
          description: 'Complete tracking of data sources and transformations',
          benefit: 'Full audit trail'
        },
        {
          name: 'Risk Assessments',
          description: 'AI-powered risk evaluation with mitigation recommendations',
          benefit: 'Proactive risk management'
        }
      ]
    },
    {
      id: 'testing',
      title: 'Compliance Testing',
      icon: '🔬',
      color: PROFESSIONAL_COLORS.SUCCESS,
      description: 'Comprehensive testing framework for AI ethics and compliance',
      features: [
        {
          name: 'Bias Detection',
          description: 'Advanced algorithms to identify and measure bias across demographics',
          benefit: 'Fair AI systems'
        },
        {
          name: 'Performance Validation',
          description: 'Rigorous testing against regulatory requirements and standards',
          benefit: '98% compliance rate'
        },
        {
          name: 'Security Scanning',
          description: 'Automated detection of vulnerabilities and attack vectors',
          benefit: 'Enterprise-grade security'
        }
      ]
    },
    {
      id: 'governance',
      title: 'AI Governance',
      icon: '🛡️',
      color: PROFESSIONAL_COLORS.PREMIUM,
      description: 'Enterprise-grade governance framework for responsible AI deployment',
      features: [
        {
          name: 'Policy Management',
          description: 'Centralized control over AI usage policies and approval workflows',
          benefit: 'Consistent governance'
        },
        {
          name: 'Audit Trails',
          description: 'Immutable records of all AI system decisions and modifications',
          benefit: 'Regulatory compliance'
        },
        {
          name: 'Access Controls',
          description: 'Role-based permissions and fine-grained access management',
          benefit: 'Zero-trust security'
        }
      ]
    }
  ];

  // Professional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: PROFESSIONAL_TIMINGS.SMOOTH / 1000,
        staggerChildren: PROFESSIONAL_TIMINGS.STAGGER_COMFORTABLE / 1000
      }
    }
  };

  const featureCardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95 
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
    camera: { position: [8, 2, 8], fov: 45 },
    shadows: true,
    performance: 'auto'
  };

  // Professional fallback content for accessibility
  const professionalFallback = (
    <div className="professional-features-fallback bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200/50">
      <div className="grid grid-cols-2 gap-6 mb-8">
        {featureCategories.map((category, index) => (
          <div 
            key={category.id} 
            className="bg-white/70 backdrop-blur-sm rounded-lg p-6 text-center"
            style={{ borderColor: category.color + '40' }}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <div className="text-lg font-bold text-gray-800 mb-1">{category.title}</div>
            <div className="text-sm text-gray-600">{category.features.length} features</div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <div className="text-xl font-bold text-gray-800 mb-2">Feature Ecosystem</div>
        <div className="text-sm text-gray-600">Comprehensive AI governance capabilities</div>
      </div>
    </div>
  );

  return (
    <ParallaxSection 
      className="py-20 bg-gradient-to-b from-blue-50 to-white"
      speed={0.3}
    >
      <section 
        ref={sectionRef}
        id="features"
        className="relative overflow-hidden"
      >
        {/* Professional background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 pointer-events-none" />
        
        {/* Professional grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(${PROFESSIONAL_COLORS.PRIMARY}40 1px, transparent 1px), linear-gradient(90deg, ${PROFESSIONAL_COLORS.PRIMARY}40 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          
          {/* Professional section header */}
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Comprehensive Platform
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Enterprise AI Governance
                <span className="text-blue-600 block">Made Simple</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Our comprehensive platform provides everything you need to monitor, 
                document, test, and govern AI systems with enterprise-grade reliability 
                and regulatory compliance.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Professional feature navigation */}
            <div className="space-y-6">
              <ScrollReveal direction="right" delay={200}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  Platform Capabilities
                </h3>
              </ScrollReveal>

              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                {featureCategories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    variants={featureCardVariants}
                    className={`
                      p-6 rounded-xl border-2 cursor-pointer transition-all duration-300
                      ${activeFeature === index 
                        ? 'bg-white shadow-xl border-blue-300' 
                        : 'bg-white/60 backdrop-blur-sm border-gray-200 hover:border-blue-200'
                      }
                    `}
                    onClick={() => setActiveFeature(index)}
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ 
                          backgroundColor: category.color + '20',
                          color: category.color 
                        }}
                      >
                        <span className="text-xl">{category.icon}</span>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2">
                          {category.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {category.description}
                        </p>
                        
                        {activeFeature === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-4 space-y-3"
                          >
                            {category.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div 
                                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                  style={{ backgroundColor: category.color }}
                                />
                                <div>
                                  <div className="font-medium text-gray-800 text-sm">
                                    {feature.name}
                                  </div>
                                  <div className="text-gray-600 text-xs leading-relaxed">
                                    {feature.description}
                                  </div>
                                  <div 
                                    className="text-xs font-medium mt-1"
                                    style={{ color: category.color }}
                                  >
                                    {feature.benefit}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </div>
                      
                      <div className="flex-shrink-0">
                        <motion.div
                          animate={{ rotate: activeFeature === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-6 h-6 text-gray-400"
                        >
                          ↓
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Professional metrics summary */}
              <ScrollReveal direction="up" delay={600}>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200/50">
                    <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                    <div className="text-xs text-gray-600">Features</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200/50">
                    <div className="text-2xl font-bold text-green-600 mb-1">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-gray-200/50">
                    <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                    <div className="text-xs text-gray-600">Support</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Professional 3D visualization column */}
            <ScrollReveal direction="left" delay={400}>
              <FloatingElement intensity={0.5} duration={4000}>
                <div className="relative">
                  <div 
                    className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm border border-blue-200/20"
                  >
                    <ProfessionalCanvas
                      {...canvasConfig}
                      className="w-full h-full"
                      aria-label="Interactive features ecosystem visualization"
                      fallback={professionalFallback}
                    >
                      <ScrollProgressIndicator 
                        position={[0, 0, 0]}
                        scale={0.8}
                        showLabels={true}
                      />
                    </ProfessionalCanvas>
                  </div>

                  {/* Professional enhancement indicators */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Interactive Features</span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                    <span className="text-sm font-medium text-gray-700">3D Navigation</span>
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  </div>

                  {/* Professional active feature indicator */}
                  <AnimatePresence>
                    <motion.div
                      key={activeFeature}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border"
                      style={{ borderColor: featureCategories[activeFeature].color + '40' }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{featureCategories[activeFeature].icon}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-700">
                            {featureCategories[activeFeature].title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {featureCategories[activeFeature].features.length} capabilities
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </FloatingElement>
            </ScrollReveal>
          </div>

          {/* Professional call-to-action */}
          <ScrollReveal direction="up" delay={800}>
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your AI Governance?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  Experience the power of comprehensive AI oversight with our enterprise platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.button
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start Free Trial
                  </motion.button>
                  <motion.button
                    className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Demo
                  </motion.button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Professional CSS for additional styling */}
        <style jsx>{`
          @media (prefers-reduced-motion: reduce) {
            .enhanced-features-section * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      </section>
    </ParallaxSection>
  );
};

export default Enhanced3DFeaturesSection;