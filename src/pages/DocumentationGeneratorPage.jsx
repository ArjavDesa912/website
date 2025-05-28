// src/pages/DocumentationGeneratorPage.jsx
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
  Star,
  Users,
  Clock,
  Zap
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const DocumentationGeneratorPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  useEffect(() => {
    updateMetaTags({
      title: 'ML/LLM Documentation Generator - Automated AI Documentation',
      description: 'Automatically generate comprehensive AI model documentation, model cards, and audit reports using LLMs. Streamline compliance and governance.',
      keywords: 'AI documentation, model cards, automated documentation, ML documentation, LLM documentation, AI governance'
    });
  }, []);

  const features = [
    {
      icon: FileText,
      title: "Smart Template Engine",
      description: "Generate standardized documentation using customizable templates designed for different regulatory frameworks, internal requirements, and industry standards."
    },
    {
      icon: Bot,
      title: "LLM-Powered Generation",
      description: "Leverage advanced language models to automatically transform technical metadata, code, and artifacts into human-readable, comprehensive documentation."
    },
    {
      icon: FilePlus,
      title: "Model Cards Generator",
      description: "Create detailed model cards that capture performance characteristics, limitations, ethical considerations, and deployment guidelines automatically."
    },
    {
      icon: GitBranch,
      title: "Version Control Integration",
      description: "Seamlessly integrate with Git and other version control systems to track documentation changes alongside model updates and maintain perfect synchronization."
    },
    {
      icon: Download,
      title: "Multi-Format Export",
      description: "Export documentation in multiple formats including PDF, HTML, Markdown, and JSON for integration with various systems and stakeholder needs."
    },
    {
      icon: Layers,
      title: "Intelligent Metadata Management",
      description: "Automatically extract and organize metadata from models, datasets, and training pipelines to ensure documentation completeness and accuracy."
    }
  ];

  const benefits = [
    "Reduce documentation time by 80% with intelligent automation",
    "Ensure consistent documentation quality across all teams and projects",
    "Meet regulatory requirements effortlessly without technical overhead",
    "Improve model governance with always up-to-date documentation",
    "Preserve institutional knowledge automatically as projects evolve"
  ];

  const useCases = [
    {
      title: "Regulatory Compliance",
      description: "Automatically generate documentation that meets EU AI Act, NIST, and other regulatory requirements",
      icon: FileText
    },
    {
      title: "Model Governance",
      description: "Maintain comprehensive records of all AI models for enterprise governance and risk management",
      icon: Layers
    },
    {
      title: "Audit Preparation",
      description: "Create detailed audit trails and documentation packages for internal and external audits",
      icon: CheckCircle
    },
    {
      title: "Knowledge Management",
      description: "Preserve critical insights and decisions as team members change and projects evolve",
      icon: Bot
    }
  ];

  const testimonials = [
    {
      company: "Leading AI Research Lab",
      role: "Principal ML Engineer",
      quote: "The Documentation Generator has saved our team hundreds of hours. What used to take weeks now happens automatically, and the quality is consistently excellent.",
      rating: 5
    },
    {
      company: "Fortune 500 Technology Company",
      role: "Head of AI Governance",
      quote: "Finally, documentation that keeps up with our rapid AI development cycle. Our audit preparedness has never been better.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main>
        {/* Hero Section with Demo */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  <Bot className="h-4 w-4 mr-2" />
                  AI-Powered Documentation
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  ML/LLM Documentation
                  <span className="text-green-600"> Generator</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  Automated documentation for AI model governance
                </p>
                
                <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                  Transform hours of manual documentation work into minutes of automated generation. Our LLM-powered system creates comprehensive AI documentation that meets regulatory standards while keeping pace with your development cycle.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    See It In Action
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors flex items-center justify-center font-semibold"
                  >
                    Explore Features
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    <span>80% Time Savings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>1000+ Models Documented</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>5.0/5 Quality Rating</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/images/products/documentation-generator-demo.png" 
                    alt="ML/LLM Documentation Generator Dashboard Demo" 
                    className="rounded-2xl shadow-2xl border border-gray-200 w-full"
                    style={{ maxHeight: '600px', objectFit: 'cover' }}
                  />
                  {/* Interactive demo overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Intelligent Documentation Automation</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced AI technology that understands your models and creates documentation that humans want to read
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 group"
                >
                  <div className="inline-block p-4 bg-green-100 rounded-xl text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
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

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect for Every AI Team</h2>
              <p className="text-xl text-gray-600">
                From research labs to enterprise deployments, documentation that scales with your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-block p-3 bg-green-100 rounded-lg text-green-600 flex-shrink-0">
                      <useCase.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-green-50">
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

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Loved by AI Teams Worldwide</h2>
              <p className="text-xl text-gray-600">
                See how the Documentation Generator is transforming AI development workflows
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
        <section id="contact" className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your AI Documentation?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Stop spending weeks on documentation. Start generating professional, comprehensive AI documentation in minutes. 
              See the Documentation Generator in action with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Get Demo & Free Trial
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
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DocumentationGeneratorPage;