// src/pages/EnterpriseAIChatbotPage.jsx - Updated with Calendly
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  MessageCircle, 
  Shield, 
  Brain, 
  Clock,
  Building,
  Calendar
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const EnterpriseAIChatbotPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/arjav-desai-praesidiumsystems/30min', '_blank');
  };

  useEffect(() => {
    updateMetaTags({
      title: 'Enterprise AI Chatbot Solutions - Law, Healthcare & Fintech',
      description: 'Advanced AI chatbots for enterprise clients in Legal, Healthcare, and Fintech. Powered by latest open-source models with enterprise security and compliance.',
      keywords: 'enterprise AI chatbot, legal AI, healthcare AI, fintech AI, Llama 3.3, Qwen 2.5, enterprise security, HIPAA compliance'
    });
  }, []);

  const coreFeatures = [
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-level encryption, SOC 2 compliance, HIPAA ready, and private server deployment ensure your data stays protected and meets all regulatory requirements.",
      highlights: ["SOC 2 Type II", "HIPAA Compliance", "Private Deployment", "End-to-End Encryption"]
    },
    {
      icon: Brain,
      title: "Latest AI Models",
      description: "Powered by cutting-edge open-source models including Llama 3.3 70B, Qwen 2.5 72B, and Mixtral 8x22B for superior performance and accuracy.",
      highlights: ["Llama 3.3 70B", "Qwen 2.5 72B", "Mixtral 8x22B", "Regular Updates"]
    },
    {
      icon: Building,
      title: "Industry Specialization",
      description: "Purpose-built solutions for Legal, Healthcare, and Fintech with deep domain knowledge, specialized training, and regulatory compliance built-in.",
      highlights: ["Legal Expertise", "Healthcare Ready", "Fintech Optimized", "Regulatory Aligned"]
    }
  ];

  const benefits = [
    "Reduce customer service costs by up to 70% with intelligent automation",
    "Improve response times from hours to seconds with 24/7 availability",
    "Enhance compliance with built-in regulatory frameworks and monitoring",
    "Scale effortlessly with cloud-native architecture and auto-scaling"
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Enterprise AI Chatbot Solution
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Enterprise AI Chatbots
                  <span className="text-purple-600"> for Law, Healthcare & Fintech</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  Advanced AI chatbots powered by latest open-source models
                </p>
                
                <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                  Transform your business with cutting-edge AI chatbots powered by Llama 3.3 70B, Qwen 2.5 72B, and Mixtral 8x22B. Built for enterprise security, compliance, and performance in Legal, Healthcare, and Fintech industries.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={handleScheduleMeeting}
                    className="px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 font-semibold"
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
                    <span>SOC 2 + HIPAA Ready</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    <span>Latest AI Models</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/images/enterprise-chatbot-demo.png" 
                    alt="Enterprise AI Chatbot Dashboard Demo" 
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Enterprise-Grade AI Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced features designed for the most demanding enterprise environments
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {coreFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
                >
                  <div className="inline-block p-4 bg-purple-100 rounded-xl text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
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
                          className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium"
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

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Measurable Business Impact</h2>
                <p className="text-xl text-gray-600">
                  Organizations using our Enterprise AI Chatbot see immediate and lasting results
                </p>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 bg-purple-50 p-6 rounded-xl border border-purple-100"
                  >
                    <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise Communications?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Transform your business communications with our Enterprise AI Chatbot powered by the latest AI models. 
              Start your free trial today and experience the difference industry-specific AI makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScheduleMeeting}
                className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
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
                <span>Enterprise security certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Industry compliance ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Latest AI models included</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EnterpriseAIChatbotPage;