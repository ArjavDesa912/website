// src/components/Sections/CTASection.jsx - Fixed and cleaned up
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Shield, Zap, Award, CheckCircle, Rocket, Clock, Globe, Settings, Calendar } from 'lucide-react';

// Animated background component with enhanced effects
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-indigo-600/15 to-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Moving particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`,
          }}
        />
      ))}
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-white/10 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-white/10 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute top-3/4 left-1/3 w-8 h-8 border-2 border-white/20 rotate-12 animate-bounce" style={{ animationDelay: '2s' }} />
      
      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }} />
            <stop offset="50%" style={{ stopColor: 'rgba(255,255,255,0.3)', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: 'rgba(255,255,255,0)', stopOpacity: 0 }} />
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q200,100 400,50 T800,50"
          stroke="url(#line-gradient)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path
          d="M0,150 Q300,200 600,150 T1200,150"
          stroke="url(#line-gradient)"
          strokeWidth="1.5"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <path
          d="M0,250 Q250,300 500,250 T1000,250"
          stroke="url(#line-gradient)"
          strokeWidth="1"
          fill="none"
          className="animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </svg>
    </div>
  );
};

// Enhanced interactive button component with advanced effects
const InteractiveButton = ({ children, onClick, variant = "primary", className = "" }) => {
  const [ripples, setRipples] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef(null);

  const createRipple = (event) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = {
      x,
      y,
      size,
      id: Date.now()
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    onClick?.(event);
  };

  const baseClasses = "relative overflow-hidden px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg group";
  const variants = {
    primary: "bg-white text-blue-600 hover:text-blue-700 shadow-white/25 hover:shadow-white/40 hover:shadow-2xl",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-blue-600 backdrop-blur-sm hover:shadow-2xl"
  };

  return (
    <button 
      ref={buttonRef}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={createRipple}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ping pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      
      {/* Shine effect */}
      <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} />
      
      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
};

// Advanced stats counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let startValue = 0;
    
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (end - startValue) * easeOutCubic;
      
      if (end < 100) {
        setCount(Math.round(currentValue * 10) / 10); // One decimal place
      } else {
        setCount(Math.floor(currentValue));
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef} className="tabular-nums font-bold">
      {prefix}{count}{suffix}
    </span>
  );
};

// Enhanced trust indicator component
const TrustIndicator = ({ icon: Icon, label, value, delay = 0, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="flex flex-col items-center text-center group cursor-pointer"
      style={{ animationDelay: `${delay}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mb-4">
        {/* Glowing background */}
        <div className={`absolute inset-0 bg-white/20 rounded-full blur-lg transition-all duration-500 ${isHovered ? 'bg-white/40 scale-110' : ''}`} />
        
        {/* Icon container */}
        <div className={`relative w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 transition-all duration-500 ${isHovered ? 'border-white/40 bg-white/20 scale-110' : ''}`}>
          <Icon className={`h-10 w-10 text-white transition-all duration-300 ${isHovered ? 'scale-110' : ''}`} />
        </div>
        
        {/* Pulse ring */}
        <div className={`absolute inset-0 rounded-full border-2 border-white/30 animate-ping ${isHovered ? 'border-white/50' : ''}`} />
      </div>
      
      {/* Value */}
      <div className="text-4xl font-bold text-white mb-2 transition-all duration-300 group-hover:scale-110">
        {typeof value === 'object' ? (
          <AnimatedCounter 
            end={value.number} 
            suffix={value.suffix} 
            prefix={value.prefix || ""}
          />
        ) : (
          <span>{value}</span>
        )}
      </div>
      
      {/* Label */}
      <div className="text-white/80 text-sm font-medium mb-1">{label}</div>
      
      {/* Description */}
      {description && (
        <div className={`text-white/60 text-xs max-w-24 leading-tight transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {description}
        </div>
      )}
    </div>
  );
};

// Feature highlight component
const FeatureHighlight = ({ icon: Icon, title, description, index }) => {
  return (
    <div 
      className="flex items-start gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-white mb-1 group-hover:text-blue-200 transition-colors">{title}</h4>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Main CTA Section - Updated with Calendly
const CTASection = ({ onContactClick }) => {
  const trustData = [
    { 
      icon: Shield, 
      label: "Security Ready", 
      value: "SOC 2",
      description: "Enterprise security compliance"
    },
    { 
      icon: Zap, 
      label: "Deployment Time", 
      value: { number: 24, suffix: "hrs" },
      description: "Quick implementation"
    },
    { 
      icon: Clock, 
      label: "Support Coverage", 
      value: "24/7",
      description: "Round-the-clock assistance"
    },
    { 
      icon: Award, 
      label: "Industry Ready", 
      value: "GDPR",
      description: "Regulatory compliance built-in"
    }
  ];

  const features = [
    {
      icon: Rocket,
      title: "Quick Implementation",
      description: "Get up and running in less than 24 hours with our guided setup process"
    },
    {
      icon: Clock,
      title: "24/7 Expert Support", 
      description: "Round-the-clock technical support from our AI governance specialists"
    },
    {
      icon: Award,
      title: "Industry Compliance",
      description: "Pre-built frameworks for GDPR, HIPAA, SOX, and emerging AI regulations"
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Multi-region deployment with data residency compliance worldwide"
    }
  ];

  const benefits = [
    "SOC 2 Type II Ready Security Infrastructure",
    "Enterprise-grade Data Protection Built-in", 
    "Dedicated Implementation Support",
    "24/7 Technical Support Coverage",
    "Advanced Role-based Access Control",
    "Comprehensive Audit Trail Logging"
  ];

  // Handle Calendly demo scheduling
  const handleScheduleDemo = () => {
    // Track the demo request
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        lead_type: 'schedule_demo',
        source: 'cta_section',
        value: 1
      });
    }
    
    // Open Calendly in new tab
    window.open('https://calendly.com/arjav-desai-praesidiumsystems/30min', '_blank');
  };

  return (
    <section 
      id="contact" 
      className="relative py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 overflow-hidden"
    >
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm font-medium mb-8 shadow-lg">
            <Rocket className="h-4 w-4" />
            <span>Transform Your AI Governance Today</span>
          </div>
          
          {/* Main content */}
          <div className="mb-16">
            <h2 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Ready to Ensure
              <span className="block bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent animate-gradient">
                AI Compliance?
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-4xl mx-auto">
              Join the AI governance revolution with our comprehensive platform. 
              Get started with a personalized demo and discover how we can help maintain regulatory integrity while accelerating innovation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <InteractiveButton 
              onClick={handleScheduleDemo}
              variant="primary"
              className="text-lg px-12 py-5 flex items-center justify-center gap-3"
            >
              <Calendar className="h-6 w-6" />
              Schedule Demo
              <ArrowRight className="h-6 w-6" />
            </InteractiveButton>
            
            <InteractiveButton 
              onClick={onContactClick}
              variant="secondary"
              className="text-lg px-12 py-5 flex items-center justify-center gap-3"
            >
              <Settings className="h-6 w-6" />
              Contact Sales
              <ArrowRight className="h-6 w-6" />
            </InteractiveButton>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {trustData.map((item, index) => (
              <TrustIndicator 
                key={index}
                icon={item.icon}
                label={item.label}
                value={item.value}
                description={item.description}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <FeatureHighlight
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>

          {/* Benefits section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
              <Shield className="h-6 w-6" />
              Why Choose Praesidium Systems?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 text-left p-3 rounded-xl hover:bg-white/5 transition-colors"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-white/90 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom guarantee */}
          <div className="text-blue-100 text-sm space-y-2">
            <p className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-300" />
              No credit card required • 14-day free trial • Setup in under 24 hours
            </p>
            <p className="flex items-center justify-center gap-2">
              <Shield className="h-4 w-4 text-blue-300" />
              SOC 2 compliant • GDPR ready • Enterprise security
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;