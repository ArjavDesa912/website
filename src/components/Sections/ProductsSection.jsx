// src/components/Sections/EnhancedProductsSection.jsx
import React, { useState, useRef } from 'react'; // Add useRef to imports
import { Link } from 'react-router-dom';
import { FileText, TestTube, Shield, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import * as analytics from '../../utils/analyticsUtils';

// 3D Card Component with Aceternity-style effects
const Product3DCard = ({ product, index, onProductClick }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = (e.clientY - centerY) / 10;
    const rotateYValue = (centerX - e.clientX) / 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = () => {
    if (onProductClick) {
      onProductClick(product.title);
    }
    analytics.trackProductView(product.title, 'homepage_products_section');
  };

  const colorClasses = {
    blue: "from-blue-500/20 to-blue-600/20 border-blue-200/50 hover:border-blue-400/50",
    green: "from-green-500/20 to-green-600/20 border-green-200/50 hover:border-green-400/50",
    purple: "from-purple-500/20 to-purple-600/20 border-purple-200/50 hover:border-purple-400/50",
    indigo: "from-indigo-500/20 to-indigo-600/20 border-indigo-200/50 hover:border-indigo-400/50"
  };

  const iconColorClasses = {
    blue: "text-blue-600 bg-blue-100 group-hover:bg-blue-600 group-hover:text-white",
    green: "text-green-600 bg-green-100 group-hover:bg-green-600 group-hover:text-white",
    purple: "text-purple-600 bg-purple-100 group-hover:bg-purple-600 group-hover:text-white",
    indigo: "text-indigo-600 bg-indigo-100 group-hover:bg-indigo-600 group-hover:text-white"
  };

  return (
    <div 
      className="perspective-1000 w-full h-full"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link
        to={product.link}
        onClick={handleClick}
        className="block w-full h-full"
      >
        <div
          ref={cardRef}
          className={`group relative w-full h-full min-h-[400px] bg-white/80 backdrop-blur-sm rounded-3xl border-2 ${colorClasses[product.color]} transition-all duration-500 transform-gpu cursor-pointer overflow-hidden`}
          style={{
            transform: isHovered 
              ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)` 
              : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
            transformOrigin: 'center center',
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[product.color]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          
          {/* Floating sparkles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {[...Array(6)].map((_, i) => (
              <Sparkles
                key={i}
                className="absolute w-4 h-4 text-white/60 animate-pulse"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${10 + (i * 12)}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 h-full flex flex-col">
            {/* Icon */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className={`relative inline-flex p-4 rounded-2xl transition-all duration-500 ${iconColorClasses[product.color]}`}>
                <product.icon className="h-8 w-8" />
              </div>
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors duration-500 relative z-10">
              {product.title}
            </h3>
            
            {/* Description */}
            <p className="text-slate-600 mb-6 leading-relaxed flex-grow group-hover:text-white/90 transition-colors duration-500 relative z-10">
              {product.description}
            </p>
            
            {/* CTA */}
            <div className="flex items-center text-blue-600 font-medium group-hover:text-white transition-all duration-500 transform group-hover:translate-x-2 relative z-10">
              <span>Learn More</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
          
          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </div>
        </div>
      </Link>
    </div>
  );
};

// Floating elements background
const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-1/4 w-20 h-20 bg-green-400/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Small particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
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

// Section header with animated elements
const SectionHeader = () => {
  return (
    <div className="text-center mb-20">
      <div className="relative inline-block mb-6">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 relative z-10">
          Our AI Governance
          <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Suite
          </span>
        </h2>
        {/* Decorative underline */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
      </div>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Four powerful products that work together to provide comprehensive oversight and accountability for your AI systems
      </p>
    </div>
  );
};

const ProductsSection = ({ onProductClick }) => {
  const products = [
    {
      icon: Shield,
      title: "AI Compliance Testing & Framework",
      description: "Complete platform combining advanced compliance testing with automated governance framework. Ensure your AI systems meet regulatory requirements while maintaining the highest standards of fairness, security, and reliability.",
      link: "/products/compliance-testing-framework",
      color: "blue"
    },
    {
      icon: FileText,
      title: "LLM Documentation Generator",
      description: "Transform hours of manual documentation work into minutes of automated generation. Our LLM-powered system creates comprehensive AI documentation that meets regulatory standards while keeping pace with your development cycle.",
      link: "/products/llm-documentation-generator",
      color: "green"
    },
    {
      icon: TestTube,
      title: "AI Testing Prompt Generator",
      description: "Revolutionary AI compliance testing platform powered by cutting-edge J1 'Thinking-LLM-as-a-Judge' model with Group Relative Policy Optimization (GRPO). Generate intelligent test prompts and validate compliance automatically.",
      link: "/products/ai-testing-prompt-generator",
      color: "purple"
    },
    {
      icon: MessageCircle,
      title: "Enterprise AI Chatbot",
      description: "Advanced AI chatbots for enterprise clients in Legal, Healthcare, and Fintech. Powered by latest open-source models with enterprise security and compliance.",
      link: "/products/enterprise-ai-chatbot",
      color: "indigo"
    }
  ];

  return (
    <section 
      id="products" 
      className="relative py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 overflow-hidden"
    >
      <FloatingElements />
      
      <div className="relative z-10 container mx-auto px-4">
        <SectionHeader />
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {products.map((product, index) => (
            <Product3DCard
              key={index}
              product={product}
              index={index}
              onProductClick={onProductClick}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 max-w-2xl">
            <h3 className="text-2xl font-bold text-slate-900">Ready to Get Started?</h3>
            <p className="text-slate-600 leading-relaxed">
              Explore our individual products or contact us to learn how the complete AI Governance Suite can transform your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2"
              >
                Request Demo
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/blog"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;