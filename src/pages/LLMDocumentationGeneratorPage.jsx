// src/pages/LLMDocumentationGeneratorPage.jsx - Updated with Enterprise Document Management System
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  FileText, 
  FilePlus, 
  Bot, 
  Zap,
  Clock,
  Shield,
  Calendar,
  Building,
  Users,
  Lock,
  BarChart2,
  Settings,
  Code,
  MessageSquare
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';
import ScreenshotSlideshow from '../components/ScreenshotSlideshow';

const LLMDocumentationGeneratorPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/arjav-desai-praesidiumsystems/30min', '_blank');
  };

  useEffect(() => {
    updateMetaTags({
      title: 'Enterprise Document Management System - ML/LLM Documentation Platform',
      description: 'Automate regulatory compliance documentation for ML/LLM systems with enterprise-grade security, multi-tenant architecture, and AI-powered generation.',
      keywords: 'enterprise document management, ML documentation, LLM documentation, automated documentation, model cards, AI documentation generator, ML governance, model documentation'
    });
  }, []);

  const coreFeatures = [
    {
      icon: Bot,
      title: "AI-Powered Document Generation",
      description: "Streamline creation of regulatory documentation for machine learning and large language model systems with intelligent automation and multi-step wizard process.",
      highlights: ["ML/LLM Documentation", "Template-Based Generation", "Multi-Step Wizard", "Multiple LLM Providers"]
    },
    {
      icon: Building,
      title: "Enterprise-Grade Architecture",
      description: "Secure multi-tenant support with role-based access control, advanced authentication, and security classifications for enterprise organizations.",
      highlights: ["Multi-Tenant Support", "Role-Based Access", "Advanced Authentication", "Security Classifications"]
    },
    {
      icon: Shield,
      title: "Compliance Management",
      description: "Comprehensive compliance monitoring for healthcare and financial sectors with real-time checks, alert generation, and audit trails.",
      highlights: ["Healthcare Compliance", "Financial Compliance", "Real-Time Monitoring", "Audit Trail"]
    },
    {
      icon: FileText,
      title: "Advanced Document Management",
      description: "Complete version control, approval workflows, document classification, and content security for enterprise-grade documentation.",
      highlights: ["Version Control", "Approval Workflows", "Document Classification", "Content Security"]
    },
    {
      icon: Code,
      title: "Integration Ecosystem",
      description: "Seamless integration with CRM systems, communication platforms, and comprehensive API support for enterprise workflows.",
      highlights: ["CRM Integration", "Communication Platforms", "API-First Design", "Webhook Support"]
    },
    {
      icon: BarChart2,
      title: "Analytics & Monitoring",
      description: "Comprehensive analytics for document usage, compliance scoring, performance metrics, and security monitoring.",
      highlights: ["Document Analytics", "Compliance Dashboards", "Performance Metrics", "Security Monitoring"]
    }
  ];

  const benefits = [
    "Automate regulatory compliance documentation with enterprise-grade security",
    "Reduce documentation time by 80% with intelligent AI-powered generation",
    "Ensure consistent documentation quality across all teams and projects",
    "Meet regulatory requirements effortlessly without technical overhead",
    "Improve model governance with always up-to-date documentation",
    "Scale securely with multi-tenant architecture and role-based access"
  ];

  const documentGeneratorScreenshots = [
    {
      src: "/images/document-generator/wizard-step1.png",
      alt: "Project Information Step",
      title: "Project Information",
      description: "Enter project details and select industry-specific requirements"
    },
    {
      src: "/images/document-generator/wizard-step2.png",
      alt: "Data & Model Details Step",
      title: "Data & Model Details",
      description: "Configure data sources and model architecture specifications"
    },
    {
      src: "/images/document-generator/wizard-step3.png",
      alt: "Compliance Information Step",
      title: "Compliance Information",
      description: "Select regulatory frameworks and compliance requirements"
    },
    {
      src: "/images/document-generator/wizard-step4.png",
      alt: "Document Generation Step",
      title: "Document Generation",
      description: "Generate and review comprehensive documentation"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  <Bot className="h-4 w-4 mr-2" />
                  Enterprise Document Management
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  ML/LLM Documentation
                  <span className="text-blue-600"> Platform</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  Enterprise-grade document management for ML/LLM systems
                </p>
                
                <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                  Automate regulatory compliance documentation for ML/LLM systems with enterprise-grade security, multi-tenant architecture, and AI-powered generation. Transform hours of manual documentation work into minutes of automated generation.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={handleScheduleMeeting}
                    className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule Demo
                  </button>
                  <button 
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    Start Free Trial
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center font-semibold"
                  >
                    Explore Features
                  </button>
                </div>

                <div className="flex items-center gap-6 pt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    <span>80% Time Savings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Enterprise Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Quick Setup</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/images/documentation-demo.png" 
                    alt="Enterprise Document Management Dashboard" 
                    className="rounded-2xl shadow-2xl border border-gray-200 w-full"
                    style={{ maxHeight: '600px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Enterprise-Grade Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive document management with advanced security, compliance, and automation capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {coreFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="inline-block p-4 bg-blue-100 rounded-xl text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.highlights.map((highlight, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots Section */}
        <ScreenshotSlideshow 
          screenshots={documentGeneratorScreenshots}
          title="Document Generation Process"
          description="Experience our powerful document generation platform through these key features"
        />

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Documentation Process</h2>
                <p className="text-xl text-gray-600">
                  Experience the difference enterprise-grade automation makes for your AI development workflow
                </p>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl shadow-md"
                  >
                    <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Documentation?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Stop spending weeks on documentation. Start generating professional, comprehensive AI documentation in minutes. 
              Transform your AI development workflow with our enterprise-grade document management platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScheduleMeeting}
                className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Schedule Demo
              </button>
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              {/* <Link
                to="/blog"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Read Case Studies
                <ArrowRight className="h-5 w-5" />
              </Link> */}
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Enterprise security</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Multi-tenant ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Quick implementation</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LLMDocumentationGeneratorPage;