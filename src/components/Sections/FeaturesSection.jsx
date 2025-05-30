// src/components/Sections/FeaturesSection.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Search, Shield, AlertTriangle, BarChart2, Settings, Code } from 'lucide-react';

// Aceternity-inspired animated card component
const FeatureCard = ({ icon: Icon, title, description, index, onFeatureClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      return () => card.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const handleClick = () => {
    onFeatureClick?.(title);
  };

  return (
    <div
      ref={cardRef}
      className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/20 transition-all duration-500 hover:bg-white/80 cursor-pointer overflow-hidden"
      style={{
        animationDelay: `${index * 0.1}s`,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.1), transparent 80%)`,
        }}
      />
      
      {/* Animated border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-sm" />
        <div className="absolute inset-[1px] rounded-3xl bg-white/60 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon with animated background */}
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative inline-flex p-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-2xl text-blue-600 group-hover:from-blue-500 group-hover:to-indigo-500 group-hover:text-white transition-all duration-500">
            <Icon className="h-8 w-8" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {description}
        </p>
        
        {/* Animated arrow */}
        <div className="mt-6 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
          <span className="text-sm font-medium mr-2">Learn more</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
      
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </div>
  );
};

// Floating particles background
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

// Section title with animated underline
const AnimatedTitle = ({ children, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 relative">
        {children}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
};

const FeaturesSection = ({ onFeatureClick }) => {
  const features = [
    {
      icon: Search,
      title: "Hallucination Detection",
      description: "Automatically identify and flag when your models generate inaccurate or fabricated information through advanced verification techniques and real-time monitoring systems."
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Continuously track model outputs for alignment with industry regulations like GDPR, HIPAA, and your custom policies with automated alerting and reporting."
    },
    {
      icon: AlertTriangle,
      title: "Agency Analysis",
      description: "Detect and prevent situations where AI models overstate their capabilities or make unauthorized commitments through behavioral pattern analysis."
    },
    {
      icon: BarChart2,
      title: "Performance Tracking",
      description: "Comprehensive dashboards to track model performance, version history, and dataset lineage over time with detailed analytics and insights."
    },
    {
      icon: Settings,
      title: "Customizable Frameworks",
      description: "Define and enforce your own policies, regulatory frameworks, and documentation requirements tailored to your organization's specific needs."
    },
    {
      icon: Code,
      title: "Seamless Integration",
      description: "Connects with your existing ML ecosystem and major LLM providers for frictionless adoption with minimal configuration required."
    }
  ];

  return (
    <section 
      id="features" 
      className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden"
    >
      {/* Background elements */}
      <FloatingParticles />
      
      {/* Decorative gradient blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container mx-auto px-4">
        <AnimatedTitle subtitle="From hallucination detection to regulatory compliance, our platform offers end-to-end governance solutions that scale with your AI initiatives.">
          Comprehensive AI Governance Platform
        </AnimatedTitle>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              onFeatureClick={onFeatureClick}
            />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex flex-col items-center gap-6 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
            <h3 className="text-2xl font-bold text-slate-900">Ready to Experience the Platform?</h3>
            <p className="text-slate-600 max-w-lg">
              See how our comprehensive AI governance platform can transform your organization's approach to AI compliance and monitoring.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Schedule Demo
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;