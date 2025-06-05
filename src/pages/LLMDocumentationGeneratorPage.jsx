// src/pages/LLMDocumentationGeneratorPage.jsx - Removed customer claims and testimonials
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
  Globe
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

  const technicalSpecs = [
    {
      title: "AI Engine",
      description: "Advanced language models optimized for technical documentation generation",
      features: ["Multi-model support", "Context-aware generation", "Technical accuracy", "Quality validation"]
    },
    {
      title: "Integration Capabilities",
      description: "Seamless integration with your existing development and ML infrastructure",
      features: ["RESTful APIs", "SDK support", "Webhook integration", "CI/CD plugins"]
    },
    {
      title: "Enterprise Features",
      description: "Built for enterprise scale with security and compliance in mind",
      features: ["Role-based access", "Audit logging", "Data encryption", "Backup systems"]
    },
    {
      title: "Output Formats",
      description: "Generate documentation in multiple formats for different stakeholder needs",
      features: ["PDF reports", "HTML pages", "Markdown files", "JSON exports"]
    }
  ];

  const pricingTiers = [
    {
      name: "Starter",
      description: "Perfect for individual researchers and small teams",
      features: [
        "Up to 10 models/month",
        "Basic templates",
        "PDF & Markdown export",
        "Email support",
        "Standard AI models"
      ]
    },
    {
      name: "Professional",
      description: "Ideal for growing AI teams and organizations",
      features: [
        "Unlimited models",
        "Custom templates",
        "All export formats",
        "Git integration",
        "Priority support",
        "Advanced AI models"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited everything",
        "On-premises deployment",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees",
        "Custom AI training"
      ]
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

                {/* Trust Indicators - Updated without customer claims */}
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

        {/* Technical Specifications */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
              <p className="text-xl text-gray-600">
                Built on enterprise-grade technology with advanced AI capabilities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {technicalSpecs.map((spec, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{spec.title}</h3>
                  <p className="text-gray-600 mb-4">{spec.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {spec.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
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
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`bg-white p-8 rounded-xl border-2 transition-all duration-300 ${
                    tier.popular 
                      ? 'border-green-500 shadow-lg scale-105' 
                      : 'border-gray-200 hover:border-green-300 hover:shadow-lg'
                  }`}
                >
                  {tier.popular && (
                    <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <p className="text-gray-600 mb-4">{tier.description}</p>
                  <div className="text-2xl font-bold text-green-600 mb-6">Contact for Pricing</div>
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
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'border-2 border-green-600 text-green-600 hover:bg-green-50'
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Removed testimonials */}
        <section id="contact" className="py-20 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your AI Documentation?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Stop spending weeks on documentation. Start generating professional, comprehensive AI documentation in minutes. 
              Transform your AI development workflow with our LLM-powered documentation generator.
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

            {/* Trust indicators */}
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