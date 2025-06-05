
// src/pages/ComplianceTestingFrameworkPage.jsx - Updated with Calendly
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  Shield, 
  TestTube,
  Code, 
  Target,
  Clock,
  Calendar
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const ComplianceTestingFrameworkPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/arjav-desai-praesidiumsystems/30min', '_blank');
  };

  useEffect(() => {
    updateMetaTags({
      title: 'AI Compliance Testing & Framework - Automated AI Governance Platform',
      description: 'Comprehensive AI compliance testing and governance framework with automated policy controls, real-time monitoring, and regulatory alignment for enterprise AI systems.',
      keywords: 'AI compliance, compliance testing, AI governance, regulatory framework, automated monitoring, bias detection, security testing'
    });
  }, []);

  const coreFeatures = [
    {
      icon: Code,
      title: "Automated Policy Controls",
      description: "Transform regulatory requirements from GDPR, EU AI Act, NIST AI RMF into automated, enforceable policy controls that work 24/7 across all AI systems."
    },
    {
      icon: TestTube,
      title: "Comprehensive Test Suites",
      description: "Pre-built and customizable test suites covering functional testing, compliance validation, bias detection, and performance evaluation for all AI model types."
    },
    {
      icon: Shield,
      title: "Real-time Monitoring & Security",
      description: "Continuously track model outputs and identify security vulnerabilities including prompt injection, data leakage, and adversarial attack vectors in real-time."
    }
  ];

  const benefits = [
    "Reduce compliance risk by 90% with automated monitoring and testing",
    "Cut manual oversight time by 75% through intelligent automation", 
    "Prevent compliance issues before they reach production environments",
    "Accelerate AI deployment with pre-approved compliance frameworks"
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
                  <Shield className="h-4 w-4 mr-2" />
                  Complete AI Governance Solution
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  AI Compliance Testing
                  <span className="text-blue-600"> & Framework</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  Comprehensive testing and governance for responsible AI
                </p>
                
                <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                  Complete platform combining advanced compliance testing with automated governance framework. Ensure your AI systems meet regulatory requirements while maintaining the highest standards of fairness, security, and reliability.
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
                    className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    Start Free Trial
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex items-center gap-6 pt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Enterprise Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>Production Grade</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>24hr Setup</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/images/dashboard-demo.png" 
                    alt="AI Compliance Testing & Framework Dashboard" 
                    className="rounded-2xl shadow-2xl border border-gray-200 w-full"
                    style={{ maxHeight: '600px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete AI Governance Platform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need for comprehensive AI compliance testing and governance in one integrated platform
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
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Measurable Business Impact</h2>
                <p className="text-xl text-gray-600">
                  Organizations using our platform see immediate and lasting results across all AI initiatives
                </p>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
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
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your AI Governance?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Join the AI governance revolution with our comprehensive compliance testing and governance framework. 
              Get started with a personalized demo today.
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
                className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Enterprise security ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>SOC 2 compliance framework</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>24-hour implementation</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ComplianceTestingFrameworkPage;