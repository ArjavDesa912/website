// src/pages/EnterpriseAIChatbotPage.jsx
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
  Zap, 
  Lock,
  Star,
  Users,
  Target,
  Clock,
  Scale,
  Code,
  Bot,
  Building,
  Phone,
  Globe,
  Award
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const EnterpriseAIChatbotPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
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
    },
    {
      icon: Zap,
      title: "Multi-Modal AI Capabilities",
      description: "Process voice commands, analyze images and documents, and handle complex multi-format inputs with advanced AI models designed for enterprise workloads.",
      highlights: ["Voice Processing", "Document Analysis", "Image Recognition", "Real-Time Processing"]
    },
    {
      icon: Globe,
      title: "Seamless Integration",
      description: "Robust API platform with pre-built connectors for popular enterprise systems, CRM platforms, and business applications for effortless deployment.",
      highlights: ["REST API", "CRM Integration", "SSO Support", "Custom Webhooks"]
    },
    {
      icon: Target,
      title: "Advanced Analytics & Insights",
      description: "Comprehensive analytics dashboard with real-time monitoring, conversation insights, performance metrics, and business intelligence reporting.",
      highlights: ["Real-Time Analytics", "Conversation Insights", "Performance Metrics", "Custom Reports"]
    }
  ];

  const industryApplications = [
    {
      title: "Legal Services",
      description: "Specialized AI chatbots for law firms and legal departments with advanced legal reasoning capabilities",
      icon: Scale,
      applications: ["Document Drafting", "Case Prediction", "Legal Research", "Compliance Checking", "Client Communication", "Contract Analysis"]
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant AI solutions for healthcare providers with medical domain expertise",
      icon: Phone,
      applications: ["Patient Triage", "Medical Documentation", "Appointment Scheduling", "Symptom Analysis", "Treatment Guidance", "Administrative Support"]
    },
    {
      title: "Fintech",
      description: "Financial services AI with fraud detection, compliance monitoring, and investment insights",
      icon: Award,
      applications: ["Fraud Detection", "Risk Assessment", "Portfolio Analysis", "Customer Support", "Regulatory Compliance", "Investment Insights"]
    }
  ];

  const technicalSpecs = [
    {
      category: "AI Models",
      icon: Brain,
      specs: ["Llama 3.3 70B parameters", "Qwen 2.5 72B parameters", "Mixtral 8x22B mixture-of-experts", "Custom fine-tuning available"]
    },
    {
      category: "Security & Compliance",
      icon: Lock,
      specs: ["SOC 2 Type II certified", "HIPAA compliant infrastructure", "GDPR data protection", "Private cloud deployment"]
    },
    {
      category: "Performance",
      icon: Zap,
      specs: ["Sub-second response times", "99.9% uptime SLA", "Auto-scaling infrastructure", "Global CDN deployment"]
    },
    {
      category: "Integration",
      icon: Code,
      specs: ["RESTful API", "WebSocket support", "SSO integration", "Custom webhook endpoints"]
    }
  ];

  const pricingFeatures = [
    "Unlimited conversations and users",
    "Access to all AI models (Llama 3.3, Qwen 2.5, Mixtral)",
    "Private server deployment with dedicated resources",
    "Industry-specific customization and training",
    "Multi-modal AI capabilities (voice, image, document)",
    "Enterprise security and compliance (SOC 2, HIPAA)",
    "24/7 priority support and monitoring",
    "Custom API integration and development",
    "Real-time analytics and reporting dashboard",
    "Dedicated account manager and technical support"
  ];

  const benefits = [
    "Reduce customer service costs by up to 70% with intelligent automation",
    "Improve response times from hours to seconds with 24/7 availability",
    "Enhance compliance with built-in regulatory frameworks and monitoring",
    "Scale effortlessly with cloud-native architecture and auto-scaling",
    "Integrate seamlessly with existing systems and workflows",
    "Gain actionable insights with advanced analytics and reporting",
    "Ensure data security with enterprise-grade encryption and privacy controls"
  ];

  const testimonials = [
    {
      company: "Global Law Firm",
      role: "Managing Partner",
      quote: "The Enterprise AI Chatbot has revolutionized our client intake process. We've reduced response times by 90% while maintaining the high-quality legal guidance our clients expect.",
      rating: 5
    },
    {
      company: "Regional Healthcare Network",
      role: "Chief Information Officer",
      quote: "HIPAA compliance was our biggest concern, but this solution exceeded our expectations. The patient triage capabilities have improved our emergency department efficiency significantly.",
      rating: 5
    },
    {
      company: "Investment Management Firm",
      role: "Head of Technology",
      quote: "The fraud detection and portfolio analysis features are game-changing. We've prevented millions in potential losses while providing better service to our high-net-worth clients.",
      rating: 5
    }
  ];

  const competitiveAdvantages = [
    {
      title: "Latest Open-Source Models",
      description: "First to market with Llama 3.3, Qwen 2.5, and Mixtral integration, providing superior AI capabilities without vendor lock-in",
      icon: Brain
    },
    {
      title: "True Enterprise Security",
      description: "Private server deployment with dedicated resources ensures your data never leaves your control while meeting all compliance requirements",
      icon: Shield
    },
    {
      title: "Industry-Specific Intelligence",
      description: "Pre-trained on legal, healthcare, and financial datasets with domain-specific knowledge that generic chatbots simply cannot match",
      icon: Target
    },
    {
      title: "Multi-Modal Excellence",
      description: "Process voice, documents, images, and text in a single conversation flow with advanced AI models designed for complex enterprise scenarios",
      icon: Bot
    }
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
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    Start Free Trial
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors flex items-center justify-center font-semibold"
                  >
                    Explore Features
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>1000+ Enterprise Clients</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>SOC 2 + HIPAA Compliant</span>
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
                  {/* Interactive demo overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
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

        {/* Industry Applications */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industry-Specific Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored AI chatbots designed for the unique challenges of your industry
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {industryApplications.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-block p-3 bg-purple-100 rounded-xl text-purple-600">
                      <industry.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.title}</h3>
                      <p className="text-gray-600">{industry.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Applications</p>
                    <div className="grid grid-cols-2 gap-2">
                      {industry.applications.map((app, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <p className="text-xl text-gray-600">
                Built on cutting-edge technology with enterprise-grade reliability
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {technicalSpecs.map((spec, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="inline-block p-3 bg-purple-100 rounded-lg text-purple-600 mb-4">
                    <spec.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{spec.category}</h3>
                  <ul className="space-y-2">
                    {spec.specs.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Enterprise AI Chatbot?</h2>
              <p className="text-xl text-gray-600">
                Unmatched capabilities that set us apart from traditional chatbot solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {competitiveAdvantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-block p-3 bg-purple-100 rounded-lg text-purple-600 flex-shrink-0">
                      <advantage.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Transparent Enterprise Pricing</h2>
              <p className="text-xl text-gray-600">
                Professional AI solutions designed for enterprise budgets
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-t-2xl"></div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise AI Chatbot Solution</h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-5xl font-bold text-purple-600">$1,500</span>
                    <span className="text-xl text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2">30-day free trial • No setup fees • Cancel anytime</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <button 
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-semibold text-lg inline-flex items-center gap-2"
                  >
                    Start Free Trial
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
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
                    className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md"
                  >
                    <CheckCircle className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1" />
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
                See how our Enterprise AI Chatbot is transforming businesses across industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-md"
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
        <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise Communications?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Join hundreds of organizations that trust our Enterprise AI Chatbot for their mission-critical communications. 
              Start your free trial today and experience the difference industry-specific AI makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/blog"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-colors font-semibold inline-flex items-center gap-2"
              >
                View Case Studies
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>24-hour response guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Enterprise security certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Industry compliance ready</span>
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