// src/pages/LLMDocumentationGeneratorPage.jsx
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
  Zap,
  Clock,
  Code,
  Settings,
  Target,
  BookOpen,
  FileCode,
  Database,
  Upload
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const LLMDocumentationGeneratorPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
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
    },
    {
      icon: GitBranch,
      title: "Version Control Integration",
      description: "Seamlessly integrate with Git and other version control systems to track documentation changes alongside model updates and maintain perfect synchronization automatically.",
      highlights: ["Git Integration", "Change Tracking", "Automated Sync", "Branch Management"]
    },
    {
      icon: Download,
      title: "Multi-Format Export",
      description: "Export documentation in multiple formats including PDF, HTML, Markdown, and JSON for integration with various systems and stakeholder needs across your organization.",
      highlights: ["PDF Export", "HTML Generation", "Markdown Support", "JSON API"]
    },
    {
      icon: Layers,
      title: "Intelligent Metadata Management",
      description: "Automatically extract and organize metadata from models, datasets, and training pipelines to ensure documentation completeness and accuracy without manual intervention.",
      highlights: ["Auto-Extraction", "Data Organization", "Completeness Checks", "Accuracy Validation"]
    }
  ];

  const documentationTypes = [
    {
      title: "Model Cards",
      description: "Comprehensive model documentation including performance, limitations, and ethical considerations",
      icon: FileCode,
      features: ["Performance Metrics", "Bias Analysis", "Use Case Guidelines", "Limitation Documentation"]
    },
    {
      title: "Technical Documentation",
      description: "Detailed technical specifications, architecture descriptions, and implementation guides",
      icon: Code,
      features: ["Architecture Diagrams", "API Documentation", "Implementation Guides", "Configuration Details"]
    },
    {
      title: "Compliance Reports",
      description: "Regulatory compliance documentation for various frameworks and industry standards",
      icon: CheckCircle,
      features: ["Regulatory Mapping", "Compliance Checklists", "Audit Trails", "Risk Assessments"]
    },
    {
      title: "Operational Guides",
      description: "User manuals, deployment guides, and operational procedures for model management",
      icon: Settings,
      features: ["Deployment Procedures", "Monitoring Guidelines", "Troubleshooting Guides", "Maintenance Schedules"]
    }
  ];

  const benefits = [
    "Reduce documentation time by 80% with intelligent LLM-powered automation",
    "Ensure consistent documentation quality across all teams and projects",
    "Meet regulatory requirements effortlessly without technical overhead",
    "Improve model governance with always up-to-date documentation",
    "Preserve institutional knowledge automatically as projects evolve",
    "Accelerate audit processes with comprehensive documentation packages",
    "Scale documentation efforts without proportional resource increases"
  ];

  const useCases = [
    {
      title: "Regulatory Compliance",
      description: "Automatically generate documentation that meets EU AI Act, NIST, FDA, and other regulatory requirements",
      icon: FileText,
      industries: ["Financial Services", "Healthcare", "Government", "Automotive"]
    },
    {
      title: "Model Governance",
      description: "Maintain comprehensive records of all AI models for enterprise governance and risk management",
      icon: Database,
      industries: ["Enterprise Tech", "Consulting", "Research Labs", "Startups"]
    },
    {
      title: "Audit Preparation",
      description: "Create detailed audit trails and documentation packages for internal and external audits",
      icon: CheckCircle,
      industries: ["Public Companies", "Regulated Industries", "Government Contractors", "Enterprises"]
    },
    {
      title: "Knowledge Management",
      description: "Preserve critical insights and decisions as team members change and projects evolve",
      icon: BookOpen,
      industries: ["Research Organizations", "Consulting Firms", "Product Teams", "AI Labs"]
    }
  ];

  const integrations = [
    {
      category: "Version Control",
      tools: ["GitHub", "GitLab", "Bitbucket", "Azure DevOps"],
      icon: GitBranch
    },
    {
      category: "ML Platforms",
      tools: ["MLflow", "Weights & Biases", "Neptune", "Kubeflow"],
      icon: Target
    },
    {
      category: "Documentation",
      tools: ["Confluence", "Notion", "GitBook", "Sphinx"],
      icon: FileText
    },
    {
      category: "CI/CD",
      tools: ["Jenkins", "GitHub Actions", "CircleCI", "GitLab CI"],
      icon: Settings
    }
  ];

  const testimonials = [
    {
      company: "Leading AI Research Lab",
      role: "Principal ML Engineer",
      quote: "The LLM Documentation Generator has saved our team hundreds of hours. What used to take weeks now happens automatically, and the quality is consistently excellent across all our models.",
      rating: 5
    },
    {
      company: "Fortune 500 Technology Company",
      role: "Head of AI Governance",
      quote: "Finally, documentation that keeps up with our rapid AI development cycle. Our audit preparedness has never been better, and compliance teams love the automated reports.",
      rating: 5
    },
    {
      company: "Global Financial Services",
      role: "Chief Data Officer",
      quote: "The automated model cards and compliance documentation have transformed our governance process. We can now deploy AI systems faster while maintaining the highest documentation standards.",
      rating: 5
    }
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
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2 font-semibold"
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
                    src="/images/documentation-generator-demo.png" 
                    alt="LLM Documentation Generator Dashboard Demo" 
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

        {/* Documentation Types */}
        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Documentation Coverage</h2>
              <p className="text-xl text-gray-600">
                Generate every type of AI documentation your organization needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {documentationTypes.map((type, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-block p-3 bg-green-100 rounded-xl text-green-600">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Includes</p>
                    <div className="grid grid-cols-2 gap-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Perfect for Every AI Team</h2>
              <p className="text-xl text-gray-600">
                From research labs to enterprise deployments, documentation that scales with your needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-block p-3 bg-green-100 rounded-lg text-green-600 flex-shrink-0">
                      <useCase.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{useCase.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Popular Industries</p>
                    <div className="flex flex-wrap gap-2">
                      {useCase.industries.map((industry, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                        >
                          {industry}
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

        {/* Integrations Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Seamless Integrations</h2>
              <p className="text-xl text-gray-600">
                Connect with your existing tools and workflows effortlessly
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {integrations.map((integration, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <div className="inline-block p-3 bg-green-100 rounded-lg text-green-600 mb-4">
                    <integration.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{integration.category}</h3>
                  <ul className="space-y-2">
                    {integration.tools.map((tool, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{tool}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple 3-Step Process</h2>
              <p className="text-xl text-gray-600">
                From model artifacts to professional documentation in minutes
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-block p-4 bg-green-100 rounded-xl text-green-600 mb-4">
                    <Upload className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Upload & Connect</h3>
                  <p className="text-gray-600">Connect your models, datasets, and training artifacts through our intuitive interface or API</p>
                </div>
                <div className="text-center">
                  <div className="inline-block p-4 bg-green-100 rounded-xl text-green-600 mb-4">
                    <Bot className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. AI Generation</h3>
                  <p className="text-gray-600">Our LLM analyzes your artifacts and generates comprehensive, professional documentation automatically</p>
                </div>
                <div className="text-center">
                  <div className="inline-block p-4 bg-green-100 rounded-xl text-green-600 mb-4">
                    <Download className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Review & Export</h3>
                  <p className="text-gray-600">Review generated documentation, make any needed adjustments, and export in your preferred format</p>
                </div>
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

        {/* Pricing Section */}
        <section className="py-20 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-600">
                Choose the plan that fits your documentation needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-600 mb-4">Perfect for individual researchers and small teams</p>
                <div className="text-3xl font-bold text-green-600 mb-6">$49/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Up to 10 models/month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Basic templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">PDF & Markdown export</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                </ul>
                <button 
                  onClick={handleContactClick}
                  className="w-full py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors font-semibold"
                >
                  Start Free Trial
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-green-500 shadow-lg scale-105 relative">
                <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium text-center mb-4 absolute -top-4 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-600 mb-4">Ideal for growing AI teams and organizations</p>
                <div className="text-3xl font-bold text-green-600 mb-6">$149/month</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unlimited models</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Custom templates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">All export formats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Git integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                </ul>
                <button 
                  onClick={handleContactClick}
                  className="w-full py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-semibold"
                >
                  Start Free Trial
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">Complete solution for large organizations</p>
                <div className="text-3xl font-bold text-green-600 mb-6">Custom</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Unlimited everything</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">On-premises deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Dedicated support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">SLA guarantees</span>
                  </li>
                </ul>
                <button 
                  onClick={handleContactClick}
                  className="w-full py-3 border-2 border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors font-semibold"
                >
                  Contact Sales
                </button>
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
              Join thousands of AI teams who trust our LLM-powered documentation generator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-white text-green-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
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
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LLMDocumentationGeneratorPage;