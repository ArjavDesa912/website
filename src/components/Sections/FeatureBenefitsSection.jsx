// src/components/Sections/FeatureBenefitsSection.jsx - Replacement for testimonials
import React, { useState, useRef } from 'react';
import { Shield, Zap, Award, Target, CheckCircle, ArrowRight, Clock, Globe, Code } from 'lucide-react';

// Enhanced floating background elements
const FloatingBenefitsElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large gradient orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-green-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-blue-200/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-purple-200/30 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 right-1/3 w-8 h-8 border-2 border-indigo-200/30 rotate-12 animate-bounce" style={{ animationDelay: '3s' }} />
    </div>
  );
};

// Benefit card component with enhanced animations
const BenefitCard = ({ benefit, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-xl transition-all duration-700 hover:shadow-2xl hover:scale-105 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        transformOrigin: 'center center'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
      
      {/* Icon */}
      <div className="relative z-10 mb-6">
        <div className={`inline-flex p-4 rounded-2xl transition-all duration-500 ${isHovered ? 'bg-blue-500/20 scale-110' : 'bg-blue-500/10'}`}>
          <benefit.icon className={`h-8 w-8 transition-all duration-500 ${isHovered ? 'text-blue-400' : 'text-blue-300'}`} />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {benefit.title}
        </h3>
        
        <p className="text-slate-300 leading-relaxed mb-6">
          {benefit.description}
        </p>
        
        {/* Key points */}
        <div className="space-y-3">
          {benefit.keyPoints.map((point, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-300 font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Shine effect */}
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-1000 ${isHovered ? 'opacity-100' : ''}`}>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </div>
  );
};

// Main benefits section component
const FeatureBenefitsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Built-in security frameworks and compliance templates ensure your AI systems meet the highest industry standards from day one.",
      keyPoints: [
        "SOC 2 Type II security framework",
        "GDPR compliance templates",
        "Industry-specific regulations",
        "Automated security monitoring"
      ]
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Get your AI governance platform up and running quickly with our streamlined deployment process and expert guidance.",
      keyPoints: [
        "24-hour setup process",
        "Pre-configured templates",
        "Guided implementation",
        "Expert onboarding support"
      ]
    },
    {
      icon: Target,
      title: "Comprehensive Coverage",
      description: "Monitor, test, and govern all aspects of your AI systems with our end-to-end platform designed for complete oversight.",
      keyPoints: [
        "Multi-model support",
        "Real-time monitoring",
        "Automated testing",
        "Complete audit trails"
      ]
    },
    {
      icon: Globe,
      title: "Scalable Architecture",
      description: "Our platform grows with your organization, supporting everything from single models to enterprise-wide AI deployments.",
      keyPoints: [
        "Auto-scaling infrastructure",
        "Multi-region deployment",
        "API-first design",
        "Enterprise integration"
      ]
    },
    {
      icon: Code,
      title: "Developer-Friendly",
      description: "Seamlessly integrate with your existing development workflow through our comprehensive APIs and SDKs.",
      keyPoints: [
        "RESTful API access",
        "CI/CD integration",
        "Multiple SDKs",
        "Extensive documentation"
      ]
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "Benefit from our deep understanding of AI governance challenges and regulatory requirements across industries.",
      keyPoints: [
        "Regulatory expertise",
        "Best practice guidance",
        "Industry templates",
        "Compliance roadmaps"
      ]
    }
  ];

  return (
    <section 
      id="benefits" 
      className="relative py-32 bg-slate-950 overflow-hidden"
    >
      <FloatingBenefitsElements />
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/10 text-blue-200 rounded-full text-sm font-medium mb-8 shadow-lg">
            <Award className="h-4 w-4" />
            <span>Platform Benefits</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Why Organizations Choose
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Praesidium Systems
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover the key advantages that make our AI governance platform the preferred choice for forward-thinking organizations
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              benefit={benefit} 
              index={index}
            />
          ))}
        </div>
        
        {/* Enhanced stats section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { icon: Clock, number: "24hr", label: "Setup Time", description: "Quick implementation" },
            { icon: Shield, number: "SOC 2", label: "Security Standard", description: "Enterprise-ready" },
            { icon: Zap, number: "99.9%", label: "Platform Uptime", description: "Reliable performance" },
            { icon: Globe, number: "24/7", label: "Support Coverage", description: "Always available" }
          ].map((stat, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="relative mb-4">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-lg group-hover:bg-blue-500/20 transition-all duration-300" />
                <div className="relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border border-white/10 group-hover:border-blue-400 transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-blue-400 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                {stat.number}
              </div>
              <div className="text-slate-400 font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-slate-500">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-white/5 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/10 max-w-2xl">
            <h3 className="text-2xl font-bold text-white">Ready to Get Started?</h3>
            <p className="text-slate-300 leading-relaxed">
              Experience the benefits of comprehensive AI governance with our platform designed for enterprise success.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
            >
              Get Your Demo
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBenefitsSection;