// src/pages/LLMDocumentationGeneratorPage.jsx - Updated with Calendly
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
  GitBranch, 
  Download, 
  Bot, 
  Layers,
  Zap,
  Code,
  Settings,
  Target,
  BookOpen,
  FileCode,
  Database,
  Upload,
  Clock,
  Shield,
  Globe,
  Calendar
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const LLMDocumentationGeneratorPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/arjav-desai-praesidiumsystems/30min', '_blank');
  };

  useEffect(() => {
    updateMetaTags({
      title: 'LLM Documentation Generator - Automated AI Documentation Platform',
      description: 'Automatically generate comprehensive ML/LLM documentation, model cards, and audit reports using advanced AI. Streamline compliance and governance effortlessly.',
      keywords: 'LLM documentation, ML documentation, automated documentation, model cards, AI documentation generator, ML governance, model documentation'
    });
  }, []);

  const coreFeatures = [
    {
      icon: FileText,
      title: "Smart Template Engine",
      description: "Generate standardized documentation using customizable templates designed for different regulatory frameworks, internal requirements, and industry standards with intelligent automation.",
      highlights: ["Regulatory Templates", "Custom Frameworks", "Smart Formatting", "Version Control"]
    },
    {
      icon: Bot,
      title: "LLM-Powered Generation",
      description: "Leverage advanced language models to automatically transform technical metadata, code, and artifacts into human-readable, comprehensive documentation that meets professional standards.",
      highlights: ["AI-Powered Writing", "Technical Translation", "Quality Assurance", "Context Awareness"]
    },
    {
      icon: FilePlus,
      title: "Model Cards Generator",
      description: "Create detailed model cards that capture performance characteristics, limitations, ethical considerations, and deployment guidelines automatically from your model artifacts.",
      highlights: ["Performance Metrics", "Ethical Assessment", "Limitation Analysis", "Deployment Guides"]
    }
  ];

  const benefits = [
    "Reduce documentation time by 80% with intelligent LLM-powered automation",
    "Ensure consistent documentation quality across all teams and projects",
    "Meet regulatory requirements effortlessly without technical overhead",
    "Improve model governance with always up-to-date documentation"
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  <Bot className="h-4 w-4 mr-2" />
                  LLM-Powered Documentation
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  LLM Documentation
                  <span className="text-green-600"> Generator</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  Automated ML/AI documentation with intelligent generation
                </p>
                
                <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                  Transform hours of manual documentation work into minutes of automated generation. Our LLM-powered system creates comprehensive AI documentation that meets regulatory standards while keeping pace with your development cycle.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={handleScheduleMeeting}
                    className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule Demo
                  </button>
                  <button 
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    Start Free Trial
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors flex items-center justify-center font-semibold"
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
                    alt="LLM Documentation Generator Dashboard Demo" 
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Intelligent Documentation Automation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced LLM technology that understands your models and creates documentation that humans want to read
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {coreFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 group"
                >
                  <div className="inline-block p-4 bg-green-100 rounded-xl text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
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
                          className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-medium"
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
        <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Transform Your Documentation Process</h2>
                <p className="text-xl text-gray-600">
                  Experience the difference intelligent automation makes for your AI development workflow
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

        {/* CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your AI Documentation?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Stop spending weeks on documentation. Start generating professional, comprehensive AI documentation in minutes. 
              Transform your AI development workflow with our LLM-powered documentation generator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScheduleMeeting}
                className="px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Schedule Demo
              </button>
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/blog"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-green-600 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Read Case Studies
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>LLM-powered automation</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Enterprise security</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
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