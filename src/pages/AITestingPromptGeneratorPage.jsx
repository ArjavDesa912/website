// src/pages/AITestingPromptGeneratorPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  Brain, 
  Zap, 
  FileText, 
  TestTube, 
  Target,
  Star,
  Clock,
  Code,
  Download,
  GitMerge,
  BarChart3,
  Repeat,
  Settings
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const AITestingPromptGeneratorPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  useEffect(() => {
    updateMetaTags({
      title: 'AI Testing Prompt Generator - J1 Reinforcement Learning System',
      description: 'Advanced AI compliance testing platform powered by J1 reinforcement learning with intelligent test generation, thinking traces, and self-improving capabilities.',
      keywords: 'AI testing prompt generator, J1 reinforcement learning, GRPO, AI compliance testing, automated test generation, thinking LLM, AI safety'
    });
  }, []);

  const j1Features = [
    {
      icon: Brain,
      title: "J1 Model Integration",
      description: "Advanced Reinforcement Learning using J1 'Thinking-LLM-as-a-Judge' model with Group Relative Policy Optimization (GRPO) for intelligent test generation and compliance evaluation.",
      highlights: ["Thinking Traces", "Self-Improving System", "Verdict Correctness", "Consistency Rewards"]
    },
    {
      icon: FileText,
      title: "Smart Document Processing",
      description: "Multi-format support processes PDF, DOCX, TXT files with automated requirements extraction using NLP and machine learning to identify compliance requirements.",
      highlights: ["Multi-Format Support", "NLP Extraction", "Intelligent Categorization", "Structured Analysis"]
    },
    {
      icon: TestTube,
      title: "Comprehensive Test Generation",
      description: "Multi-strategy testing generates direct, adversarial, and edge-case test prompts with category-specific tests for security, privacy, ethics, and regulatory compliance.",
      highlights: ["Multi-Strategy Testing", "Adversarial Testing", "Scalable Generation", "Confidence Scoring"]
    },
    {
      icon: GitMerge,
      title: "Multi-Model Support",
      description: "OpenAI integration (GPT-4, GPT-3.5), Anthropic Claude models, Hugging Face models for on-premises testing, and built-in simulation modes for development.",
      highlights: ["OpenAI Integration", "Anthropic Support", "Local Models", "Simulation Modes"]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Weighted compliance scores based on test results and severity, performance metrics tracking, comprehensive reports with findings and export capabilities.",
      highlights: ["Compliance Scoring", "Performance Metrics", "Detailed Reports", "Multi-Format Export"]
    },
    {
      icon: Repeat,
      title: "Continuous Learning",
      description: "Human feedback integration for continuous improvement, experience replay systems, performance tracking, and dynamic policy network evolution.",
      highlights: ["Feedback Loop", "Experience Replay", "Performance Tracking", "Network Evolution"]
    }
  ];

  const technicalArchitecture = [
    {
      category: "Backend Architecture",
      icon: Code,
      specs: ["FastAPI with Python 3.12", "J1 reinforcement learning model", "NLTK & spaCy for NLP", "RESTful API design"]
    },
    {
      category: "Supported Formats",
      icon: FileText,
      specs: ["PDF documents", "Microsoft Word (DOCX)", "Plain text files", "Markdown files"]
    },
    {
      category: "Storage & Deployment",
      icon: Settings,
      specs: ["Pickle-based persistence", "SQLite support", "Docker containerization", "Cloud-ready deployment"]
    },
    {
      category: "API Endpoints",
      icon: Target,
      specs: ["Document upload/processing", "Requirements extraction", "Test prompt generation", "Multi-model execution"]
    }
  ];

  const targetAudiences = [
    {
      title: "AI Safety Teams",
      description: "Organizations developing and deploying AI systems need comprehensive testing before production release",
      useCases: ["Pre-deployment Testing", "Safety Validation", "Risk Assessment", "Model Verification"]
    },
    {
      title: "Compliance Officers",
      description: "Professionals ensuring regulatory adherence across AI systems and maintaining governance standards",
      useCases: ["Regulatory Compliance", "Audit Preparation", "Policy Enforcement", "Risk Management"]
    },
    {
      title: "ML Engineers",
      description: "Teams building responsible AI applications requiring comprehensive testing and validation workflows",
      useCases: ["Model Testing", "Performance Validation", "Integration Testing", "Quality Assurance"]
    },
    {
      title: "Security Researchers",
      description: "Red team specialists testing AI robustness and identifying potential security vulnerabilities",
      useCases: ["Security Auditing", "Vulnerability Testing", "Penetration Testing", "Attack Simulation"]
    }
  ];

  const competitiveAdvantages = [
    {
      title: "First-to-Market J1 Integration",
      description: "Advanced reinforcement learning for compliance testing with unique thinking traces and self-improving capabilities",
      icon: Brain
    },
    {
      title: "Multi-Modal Testing Approach",
      description: "Comprehensive approach beyond simple prompt testing with adversarial, edge-case, and category-specific validation",
      icon: TestTube
    },
    {
      title: "Self-Improving System",
      description: "Gets better over time through continuous learning, feedback integration, and experience replay mechanisms",
      icon: Zap
    },
    {
      title: "Scalable Intelligence",
      description: "Generate hundreds of test cases in minutes with intelligent prioritization and real-time feedback capabilities",
      icon: Target
    }
  ];

  const pricingTiers = [
    {
      name: "Starter Plan",
      description: "Perfect for small teams getting started with AI testing",
      features: [
        "Up to 10 documents per month",
        "Basic test generation",
        "Standard reporting",
        "Email support",
        "Core J1 model features"
      ]
    },
    {
      name: "Professional Plan",
      description: "Advanced features for growing AI teams",
      features: [
        "Unlimited documents",
        "Advanced J1 model features",
        "Custom test categories",
        "Priority support",
        "Full API access",
        "Multi-model integration"
      ],
      popular: true
    },
    {
      name: "Enterprise Plan",
      description: "Complete solution for large organizations",
      features: [
        "On-premises deployment",
        "Custom model integration",
        "Advanced analytics dashboard",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom compliance frameworks"
      ]
    }
  ];

  const benefits = [
    "Reduce compliance testing effort by 80% with intelligent J1-powered automation",
    "Generate 10x more test cases than manual methods with superior coverage",
    "First-to-market J1 reinforcement learning provides unique competitive advantage",
    "Self-improving system gets better over time through continuous learning",
    "Zero setup required with Docker containerization for easy deployment",
    "API-first design integrates seamlessly with existing MLOps workflows",
    "Preserve institutional knowledge automatically as projects evolve"
  ];

  const testimonials = [
    {
      company: "Leading AI Research Lab",
      role: "Principal ML Engineer",
      quote: "The J1 reinforcement learning approach has revolutionized our testing process. The thinking traces provide unprecedented insight into model behavior that we've never had before.",
      rating: 5
    },
    {
      company: "Fortune 500 Financial Services",
      role: "AI Safety Director",
      quote: "This is the first testing system that actually learns and improves. The J1 model catches edge cases and compliance issues that traditional testing completely misses.",
      rating: 5
    },
    {
      company: "Global Technology Corporation",
      role: "Head of AI Governance",
      quote: "The automated test generation saves us weeks of manual work while providing better coverage. The self-improving capabilities mean it gets smarter with every use.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
                  <Brain className="h-4 w-4 mr-2" />
                  J1 Reinforcement Learning Powered
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  AI Testing Prompt
                  <span className="text-indigo-600"> Generator</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  Advanced compliance testing with J1 reinforcement learning
                </p>
                
                <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                  Revolutionary AI compliance testing platform powered by cutting-edge J1 "Thinking-LLM-as-a-Judge" model with Group Relative Policy Optimization (GRPO). Generate intelligent test prompts, validate compliance, and continuously improve through self-learning capabilities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    Start Free Trial
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('j1-features')}
                    className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full hover:bg-indigo-50 transition-colors flex items-center justify-center font-semibold"
                  >
                    Explore J1 Technology
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>First J1 Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    <span>10x More Test Cases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>80% Time Reduction</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/images/prompt-generator.png" 
                    alt="AI Testing Prompt Generator - J1 Powered Dashboard" 
                    className="rounded-2xl shadow-2xl border border-gray-200 w-full"
                    style={{ maxHeight: '600px', objectFit: 'cover' }}
                  />
                  {/* Interactive demo overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* J1 Features Section */}
        <section id="j1-features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Revolutionary J1 Technology</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The world's first AI compliance testing system powered by J1 reinforcement learning with thinking traces and self-improving capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {j1Features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 group"
                >
                  <div className="inline-block p-4 bg-indigo-100 rounded-xl text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
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
                          className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
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

        {/* Technical Architecture */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Enterprise-Ready Architecture</h2>
              <p className="text-xl text-gray-600">
                Built for scale, security, and seamless integration with your existing AI infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {technicalArchitecture.map((arch, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="inline-block p-3 bg-indigo-100 rounded-lg text-indigo-600 mb-4">
                    <arch.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{arch.category}</h3>
                  <ul className="space-y-2">
                    {arch.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audiences */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Built for AI Professionals</h2>
              <p className="text-xl text-gray-600">
                Tailored solutions for every role in the AI development and governance lifecycle
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {targetAudiences.map((audience, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{audience.title}</h3>
                  <p className="text-gray-600 mb-4">{audience.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Use Cases</p>
                    <div className="grid grid-cols-2 gap-2">
                      {audience.useCases.map((useCase, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-20 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Unmatched Competitive Advantages</h2>
              <p className="text-xl text-gray-600">
                Revolutionary capabilities that set us apart from traditional AI testing tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {competitiveAdvantages.map((advantage, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-block p-3 bg-indigo-100 rounded-lg text-indigo-600 flex-shrink-0">
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

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Measurable Business Impact</h2>
                <p className="text-xl text-gray-600">
                  Organizations using our J1-powered system see immediate and lasting results
                </p>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 bg-indigo-50 p-6 rounded-xl border border-indigo-100"
                  >
                    <CheckCircle className="h-6 w-6 text-indigo-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Flexible Pricing for Every Organization</h2>
              <p className="text-xl text-gray-600">
                From startups to enterprise, find the right plan for your AI testing needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-xl border-2 transition-all duration-300 ${
                    tier.popular 
                      ? 'border-indigo-500 shadow-lg scale-105' 
                      : 'border-gray-200 hover:border-indigo-300 hover:shadow-lg'
                  }`}
                >
                  {tier.popular && (
                    <div className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-2xl font-bold text-indigo-600 mb-6">Contact for Pricing</div>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={handleContactClick}
                    className={`w-full py-3 rounded-full font-semibold transition-colors ${
                      tier.popular
                        ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                        : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by AI Innovation Leaders</h2>
              <p className="text-xl text-gray-600">
                See how J1-powered testing is revolutionizing AI compliance and safety
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
        <section id="contact" className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience J1-Powered AI Testing?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Join the organizations already leveraging our revolutionary J1 reinforcement learning technology for superior AI compliance testing. 
              Start your free trial today and see the difference thinking AI makes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/blog"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Download Technical Whitepaper
                <Download className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AITestingPromptGeneratorPage;