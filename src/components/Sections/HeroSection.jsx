// src/components/Sections/HeroSection.jsx - Added Calendly integration
import React from 'react';
import { ChevronRight, Users, Shield, Zap, CheckCircle, Calendar } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';

// Aceternity-inspired components
const SparklesCore = ({ particleColor = "#2563eb", particleSize = 0.6 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="sparkles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <style jsx>{`
        .sparkle {
          position: absolute;
          width: ${particleSize}rem;
          height: ${particleSize}rem;
          background: ${particleColor};
          border-radius: 50%;
          animation: sparkle infinite ease-in-out;
          opacity: 0;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

const BackgroundBeams = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="beam beam-1"></div>
      <div className="beam beam-2"></div>
      <div className="beam beam-3"></div>
      <style jsx>{`
        .beam {
          position: absolute;
          background: linear-gradient(45deg, transparent, rgba(37, 99, 235, 0.1), transparent);
          border-radius: 1000px;
        }
        
        .beam-1 {
          width: 300px;
          height: 3px;
          top: 20%;
          left: -100px;
          transform: rotate(45deg);
          animation: beamMove 8s linear infinite;
        }
        
        .beam-2 {
          width: 200px;
          height: 2px;
          top: 60%;
          right: -80px;
          transform: rotate(-45deg);
          animation: beamMove 6s linear infinite reverse;
        }
        
        .beam-3 {
          width: 250px;
          height: 2.5px;
          top: 80%;
          left: 30%;
          transform: rotate(30deg);
          animation: beamMove 10s linear infinite;
        }
        
        @keyframes beamMove {
          0% { transform: translateX(-200px) rotate(45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 200px)) rotate(45deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const FloatingCard = ({ children, delay = 0 }) => {
  return (
    <div 
      className="floating-card"
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
      <style jsx>{`
        .floating-card {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

const GlowingButton = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseClasses = "px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg";
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/25 hover:shadow-blue-500/40",
    secondary: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white backdrop-blur-sm"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className} glowing-button force-visible-button`}
      onClick={onClick}
    >
      <span className="relative z-10 text-white">{children}</span>
      <style jsx>{`
        .glowing-button {
          position: relative;
          overflow: hidden;
        }
        
        .glowing-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.8s;
        }
        
        .glowing-button:hover::before {
          left: 100%;
        }
      `}</style>
    </button>
  );
};

const HeroSection = ({ onShowTeam, onContactClick }) => {
  // Handle Calendly demo scheduling
  const handleScheduleDemo = () => {
    // Track the demo request
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        lead_type: 'schedule_demo',
        source: 'hero_section',
        value: 1
      });
    }
    
    // Open Calendly in new tab
    window.open('https://calendly.com/arjav-desai-praesidiumsystems/30min', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
      {/* Animated Background Elements */}
      <SparklesCore />
      <BackgroundBeams />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none">
        <style jsx>{`
          .bg-grid-slate-100 {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='m0 .5h32m-32 32v-32'/%3e%3c/svg%3e");
          }
        `}</style>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Content Side */}
          <div className="lg:w-1/2 space-y-8">
            {/* Badge */}
            <FloatingCard delay={0}>
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-800 rounded-full text-sm font-medium shadow-lg">
                <Shield className="h-4 w-4 mr-2" />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold">
                  Enterprise AI Governance Platform
                </span>
              </div>
            </FloatingCard>
            
            {/* Main Heading */}
            <FloatingCard delay={0.2}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="force-visible text-gray-900">
                  AI Governance
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Simplified
                </span>
              </h1>
            </FloatingCard>
            
            {/* Subtitle */}
            <FloatingCard delay={0.4}>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-lg">
                Comprehensive governance for ML and LLM models with automated compliance monitoring, testing, and documentation.
              </p>
            </FloatingCard>
            
            {/* Description */}
            <FloatingCard delay={0.6}>
              <p className="text-lg text-slate-700 max-w-2xl leading-relaxed">
                Praesidium Systems simplifies enterprise AI oversight by providing end-to-end monitoring, 
                auditing, and compliance assurance for machine learning and large language models.
              </p>
            </FloatingCard>
            
            {/* CTA Buttons */}
            <FloatingCard delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <GlowingButton 
                  onClick={handleScheduleDemo}
                  variant="primary"
                  className="flex items-center justify-center gap-2"
                >
                  <Calendar className="h-5 w-5" />
                  Schedule Demo
                  <ChevronRight className="h-5 w-5" />
                </GlowingButton>
                
                <button 
                  onClick={() => scrollToSection('products')}
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 flex items-center justify-center"
                >
                  <span className="force-visible-secondary">Explore Platform</span>
                </button>
              </div>
            </FloatingCard>

            {/* Trust Indicators */}
            <FloatingCard delay={1}>
              <div className="flex flex-wrap items-center gap-8 pt-8">
                <div className="flex items-center gap-3 text-slate-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">SOC 2 Ready</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Enterprise Security</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Zap className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">Production Ready</span>
                </div>
              </div>
            </FloatingCard>
          </div>
          
          {/* Visual Side */}
          <div className="lg:w-1/2">
            <FloatingCard delay={0.3}>
              <div className="relative">
                {/* Main Dashboard Image */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img 
                    src="/images/dashboard-demo.png" 
                    alt="AI Governance Dashboard" 
                    className="relative rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Stats Cards */}
                  <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-600">System Status</p>
                        <p className="text-2xl font-bold text-slate-900">Active</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <div>
                        <p className="text-sm font-medium text-slate-600">AI Models</p>
                        <p className="text-2xl font-bold text-slate-900">Ready</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FloatingCard>
          </div>
        </div>
        
        {/* Team Section */}
        <FloatingCard delay={1.2}>
          <div className="mt-24 text-center">
            <div className="inline-flex flex-col items-center gap-6 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-bold text-slate-900">Backed by Industry Experts</h2>
              <p className="text-lg text-slate-600 max-w-2xl">
                Our team brings extensive experience in AI, compliance, and regulatory frameworks
              </p>
              <GlowingButton 
                onClick={onShowTeam}
                variant="secondary"
                className="flex items-center gap-2"
              >
                <Users className="h-5 w-5" />
                Meet Our Leadership Team
              </GlowingButton>
            </div>
          </div>
        </FloatingCard>
      </div>
    </section>
  );
};

export default HeroSection;