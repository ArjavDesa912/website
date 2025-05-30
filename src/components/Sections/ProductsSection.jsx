// src/components/Sections/ProductsSection.jsx - Updated with new product routes
import React from 'react';
import { Link } from 'react-router-dom';
import {FileText, TestTube, Shield, RefreshCw, Settings, Bot, Plug, ArrowRight,MessageCircle } from 'lucide-react';
import * as analytics from '../../utils/analyticsUtils';

const ProductsSection = ({ onProductClick }) => {
  // UPDATED PRODUCTS ARRAY WITH NEW ROUTES AND DESCRIPTIONS
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
      color: "purple"
    }
  ];

  const handleProductClick = (product) => {
    // Track product view analytics
    if (onProductClick) {
      onProductClick(product.title);
    }
    
    // Track with analytics
    analytics.trackProductView(product.title, 'homepage_products_section');
  };

  return (
    <section 
      id="products" 
      className="py-20 bg-gray-50 section-hidden transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Governance Suite</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three powerful products that work together to provide comprehensive oversight and accountability for your AI systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              onClick={() => handleProductClick(product)}
              className="group bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className={`inline-block p-4 bg-${product.color}-100 rounded-xl text-${product.color}-600 mb-6 group-hover:bg-${product.color}-600 group-hover:text-white transition-colors`}>
                <product.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {product.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Key Differentiators Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Key Differentiators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Holistic AI Oversight</h4>
              <p className="text-gray-600 text-sm">Comprehensive governance across the entire AI lifecycle (design, training, deployment) to ensure safety, fairness, and ethical alignment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <Settings className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Regulatory Expertise</h4>
              <p className="text-gray-600 text-sm">Built-in frameworks for major standards (EU AI Act, NIST AI RMF, ISO 42001, etc.) allow rapid adaptation to policy changes and new regulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <Bot className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Automated Documentation</h4>
              <p className="text-gray-600 text-sm">AI-driven generation of model documentation and audit reports reduces manual overhead while maintaining accuracy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <RefreshCw className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Continuous Monitoring</h4>
              <p className="text-gray-600 text-sm">Real-time compliance checks and alerts ensure AI behavior remains within approved bounds as models evolve.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <TestTube className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Advanced Testing & Validation</h4>
              <p className="text-gray-600 text-sm">Integrated testing tools for bias, security, and performance catch issues early, enhancing reliability and minimizing errors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <Plug className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Seamless Integration</h4>
              <p className="text-gray-600 text-sm">Designed to plug into existing data and ML pipelines, the suite accelerates deployment and cross-team collaboration.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore our individual products or contact us to learn how the complete AI Governance Suite can transform your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Request Demo
            </button>
            <Link
              to="/blog"
              className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;