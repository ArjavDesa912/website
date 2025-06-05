
// Updated AITestingPromptGeneratorPage.jsx - Add Calendly link
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
  Clock,
  Download,
  GitMerge,
  BarChart3,
  Repeat,
  Award,
  Calendar
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const AITestingPromptGeneratorPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/arjav-desai-praesidiumsystems/30min', '_blank');
  };

  useEffect(() => {
    updateMetaTags({
      title: 'AI Testing Prompt Generator - J1 Reinforcement Learning System',
      description: 'Advanced AI compliance testing platform powered by J1 reinforcement learning with intelligent test generation, thinking traces, and self-improving capabilities.',
      keywords: 'AI testing prompt generator, J1 reinforcement learning, GRPO, AI compliance testing, automated test generation, thinking LLM, AI safety'
    });
  }, []);

  // ... (keeping all existing data arrays like j1Features, technicalArchitecture, etc.)
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

  const benefits = [
    "Reduce compliance testing effort by 80% with intelligent J1-powered automation",
    "Generate 10x more test cases than manual methods with superior coverage",
    "First-to-market J1 reinforcement learning provides unique competitive advantage",
    "Self-improving system gets better over time through continuous learning",
    "Zero setup required with Docker containerization for easy deployment",
    "API-first design integrates seamlessly with existing MLOps workflows",
    "Preserve institutional knowledge automatically as projects evolve"
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
                    onClick={handleScheduleMeeting}
                    className="px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 font-semibold"
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
                    <Award className="h-4 w-4 text-yellow-500" />
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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section (abbreviated for space) */}
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

        {/* CTA Section with Calendly */}
        <section id="contact" className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience J1-Powered AI Testing?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Transform your AI compliance testing with our revolutionary J1 reinforcement learning technology. 
              Schedule a personalized demo or start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScheduleMeeting}
                className="px-8 py-4 bg-white text-indigo-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
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
              <Link
                to="/blog"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-indigo-600 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Download Technical Whitepaper
                <Download className="h-5 w-5" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>J1 reinforcement learning</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Self-improving system</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Enterprise ready</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AITestingPromptGeneratorPage;