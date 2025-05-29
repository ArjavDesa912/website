// src/pages/ComplianceFrameworkPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  Code, 
  Shield, 
  AlertTriangle, 
  FileCheck, 
  Gauge, 
  Workflow,
  Star,
  Users,
  Clock
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const ComplianceFrameworkPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  useEffect(() => {
    updateMetaTags({
      title: 'AI Compliance Framework - Automated AI Governance',
      description: 'Comprehensive AI compliance framework with automated policy controls, real-time monitoring, and regulatory alignment for enterprise AI systems.',
      keywords: 'AI compliance, regulatory framework, AI governance, GDPR compliance, EU AI Act, automated monitoring'
    });
  }, []);

  const features = [
    {
      icon: Code,
      title: "Automated Policy Controls",
      description: "Transform regulatory requirements from GDPR, EU AI Act, NIST AI RMF, and other frameworks into automated, enforceable policy controls that work 24/7."
    },
    {
      icon: Shield,
      title: "Real-time Monitoring",
      description: "Continuously track model outputs in real-time to ensure compliance with regulatory requirements and corporate ethical guidelines across all AI systems."
    },
    {
      icon: AlertTriangle,
      title: "Intelligent Risk Detection",
      description: "Advanced risk scoring system identifies potential compliance issues before they become problems, with automated alerts sent to relevant stakeholders."
    },
    {
      icon: FileCheck,
      title: "Comprehensive Audit Trails",
      description: "Immutable logging of all AI interactions creates detailed audit trails for regulatory inspections, internal reviews, and compliance reporting."
    },
    {
      icon: Gauge,
      title: "Executive Dashboards",
      description: "Intuitive dashboards provide at-a-glance visibility into compliance status across all AI systems with drill-down capabilities for detailed analysis."
    },
    {
      icon: Workflow,
      title: "Adaptive Workflows",
      description: "Configure custom approval workflows and escalation paths tailored to your organization's unique governance structure and compliance requirements."
    }
  ];

  const benefits = [
    "Reduce compliance risk by 90% with automated monitoring",
    "Cut manual oversight time by 75% through intelligent automation",
    "Accelerate AI deployment with pre-approved compliance frameworks",
    "Demonstrate responsible AI practices to stakeholders and regulators",
    "Avoid costly fines and remediation through proactive issue detection"
  ];

  const testimonials = [
    {
      company: "Global Financial Services",
      role: "Chief Risk Officer",
      quote: "The AI Compliance Framework has transformed how we manage regulatory risk across our AI portfolio. We've reduced compliance review times by 80% while improving our audit readiness.",
      rating: 5
    },
    {
      company: "Healthcare Technology Leader",
      role: "VP of Compliance",
      quote: "With HIPAA and FDA requirements, we needed bulletproof compliance. This framework gives us the confidence to innovate while meeting every regulatory standard.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main>
        {/* Hero Section with Demo */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  <Shield className="h-4 w-4 mr-2" />
                  Enterprise AI Governance
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  AI Compliance
                  <span className="text-blue-600"> Framework</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  Automated governance for AI regulatory requirements
                </p>
                
                <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                  Transform complex regulatory requirements into automated policy controls. Our AI Compliance Framework provides continuous monitoring and verification of AI systems against global standards and your organization's ethical guidelines.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    Request Live Demo
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center font-semibold"
                  >
                    Explore Features
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>500+ Enterprise Customers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Deploy in 2 Weeks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>4.9/5 Customer Rating</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/images/dashboard-demo.png" 
                    alt="AI Compliance Framework Dashboard Demo" 
                    className="rounded-2xl shadow-2xl border border-gray-200 w-full"
                    style={{ maxHeight: '600px', objectFit: 'cover' }}
                  />
                  {/* Overlay with play button for demo */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive AI Governance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to ensure your AI systems meet regulatory requirements and ethical standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="inline-block p-4 bg-blue-100 rounded-xl text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Measurable Business Impact</h2>
                <p className="text-xl text-gray-600">
                  Organizations using our AI Compliance Framework see immediate and lasting results
                </p>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-600">
                See what our customers say about the AI Compliance Framework
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.company}</div>
                    <div className="text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your AI Governance?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Join hundreds of organizations that trust the AI Compliance Framework to manage their regulatory requirements. 
              Get started with a personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Schedule Demo
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/blog"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComplianceFrameworkPage;