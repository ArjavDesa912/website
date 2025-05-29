// src/pages/ComplianceTestingPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  TestTube, 
  Scale, 
  ShieldAlert, 
  Repeat, 
  GitMerge, 
  BarChart2,
  Star,
  Users,
  Target
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const ComplianceTestingPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
  };

  useEffect(() => {
    updateMetaTags({
      title: 'AI Compliance Testing System - Automated AI Validation',
      description: 'Comprehensive AI compliance testing with bias detection, security scanning, and continuous validation for responsible AI deployment.',
      keywords: 'AI testing, compliance testing, bias detection, AI validation, security testing, fairness testing'
    });
  }, []);

  const features = [
    {
      icon: TestTube,
      title: "Comprehensive Test Suites",
      description: "Pre-built and customizable test suites covering functional testing, compliance validation, and performance evaluation for all types of AI models and use cases."
    },
    {
      icon: Scale,
      title: "Advanced Bias & Fairness Assessment",
      description: "Sophisticated algorithms detect and measure bias across different demographic groups and sensitive attributes with statistical significance testing."
    },
    {
      icon: ShieldAlert,
      title: "Security Vulnerability Scanning",
      description: "Identify potential security issues including prompt injection vulnerabilities, data leakage risks, adversarial attack vectors, and privacy violations."
    },
    {
      icon: Repeat,
      title: "Continuous Validation Pipeline",
      description: "Automatically validate models against compliance criteria as they evolve, ensuring ongoing adherence to standards throughout the AI lifecycle."
    },
    {
      icon: GitMerge,
      title: "DevOps Integration",
      description: "Seamlessly integrate compliance testing into existing CI/CD pipelines with native support for GitHub Actions, Jenkins, GitLab, and Azure DevOps."
    },
    {
      icon: BarChart2,
      title: "Detailed Analytics & Reports",
      description: "Generate comprehensive test reports with actionable insights, compliance scores, identified issues, and recommended remediation steps."
    }
  ];

  const testingTypes = [
    {
      title: "Fairness Testing",
      description: "Detect discriminatory patterns and bias across protected attributes",
      icon: Scale,
      metrics: ["Demographic Parity", "Equal Opportunity", "Calibration", "Individual Fairness"]
    },
    {
      title: "Security Testing",
      description: "Identify vulnerabilities and attack vectors in AI systems",
      icon: ShieldAlert,
      metrics: ["Prompt Injection", "Data Leakage", "Adversarial Robustness", "Privacy Attacks"]
    },
    {
      title: "Performance Testing",
      description: "Validate accuracy, reliability, and robustness under various conditions",
      icon: Target,
      metrics: ["Model Accuracy", "Latency", "Throughput", "Resource Usage"]
    },
    {
      title: "Compliance Testing",
      description: "Ensure adherence to regulatory frameworks and industry standards",
      icon: CheckCircle,
      metrics: ["GDPR Compliance", "EU AI Act", "NIST Framework", "Industry Standards"]
    }
  ];

  const benefits = [
    "Prevent compliance issues before they reach production environments",
    "Accelerate model approval processes with automated compliance validation",
    "Enhance model quality and reliability through comprehensive testing",
    "Reduce operational risk from biased outputs or security breaches",
    "Simplify audit processes with detailed test documentation and evidence"
  ];

  const testimonials = [
    {
      company: "Global Technology Corporation",
      role: "AI Ethics Lead",
      quote: "The Compliance Testing System caught bias issues we never would have found manually. It's become an essential part of our responsible AI deployment process.",
      rating: 5
    },
    {
      company: "Financial Services Leader",
      role: "Model Risk Manager",
      quote: "Finally, testing that goes beyond accuracy metrics. We can now confidently deploy AI knowing it meets all our risk and compliance requirements.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main>
        {/* Hero Section with Demo */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
                  <TestTube className="h-4 w-4 mr-2" />
                  Advanced AI Testing
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  AI Compliance
                  <span className="text-purple-600"> Testing System</span>
                </h1>
                
                <p className="text-xl text-gray-600 mb-6">
                  Automated testing for responsible AI deployment
                </p>
                
                <p className="text-lg text-gray-700 max-w-lg leading-relaxed">
                  Go beyond traditional accuracy metrics with comprehensive validation that covers fairness, security, and regulatory compliance. Our testing system ensures your AI models are safe, fair, and ready for production deployment.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    Schedule Demo
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors flex items-center justify-center font-semibold"
                  >
                    Explore Testing
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>99.9% Issue Detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>50+ Test Categories</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>4.8/5 Accuracy Rating</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <img 
                    src="/images/products/compliance-testing-demo.png" 
                    alt="AI Compliance Testing System Dashboard Demo" 
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

        {/* Testing Types Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Testing Coverage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Four critical dimensions of AI testing that go far beyond traditional performance metrics
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testingTypes.map((type, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-block p-3 bg-purple-100 rounded-xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                      <type.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Key Metrics</p>
                    <div className="flex flex-wrap gap-2">
                      {type.metrics.map((metric, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Testing Infrastructure</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade testing capabilities that integrate seamlessly into your AI development workflow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-purple-200 transition-all duration-300 group"
                >
                  <div className="inline-block p-4 bg-purple-100 rounded-xl text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Prevent Issues Before They Impact Users</h2>
                <p className="text-xl text-gray-600">
                  Proactive testing that catches problems in development, not production
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

        {/* Integration Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Seamless DevOps Integration</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Integrate compliance testing into your existing development workflow without disruption
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-blue-100 rounded-xl text-blue-600 mb-4">
                      <GitMerge className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">CI/CD Integration</h3>
                    <p className="text-gray-600">Automatic testing on every commit, merge, and deployment</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-4 bg-green-100 rounded-xl text-green-600 mb-4">
                      <Repeat className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Monitoring</h3>
                    <p className="text-gray-600">Ongoing validation of deployed models in production</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-4 bg-purple-100 rounded-xl text-purple-600 mb-4">
                      <BarChart2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Detailed Reporting</h3>
                    <p className="text-gray-600">Comprehensive reports for stakeholders and auditors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by AI Teams Worldwide</h2>
              <p className="text-xl text-gray-600">
                See how compliance testing is transforming AI development and deployment
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
        <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Test Your AI Systems Properly?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Stop deploying AI systems based on accuracy alone. Start comprehensive testing that covers fairness, security, and compliance. 
              See the difference proper testing makes with a personalized demo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Start Testing Today
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/blog"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-purple-600 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Learn Best Practices
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

export default ComplianceTestingPage;