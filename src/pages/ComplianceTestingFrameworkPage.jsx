// src/pages/ComplianceTestingFrameworkPage.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  Shield, 
  Scale, 
  ShieldAlert, 
  TestTube,
  Code, 
  AlertTriangle, 
  FileCheck, 
  Gauge, 
  Repeat,
  GitMerge,
  BarChart2,
  Star,
  Users,
  Target,
  Clock
} from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { updateMetaTags } from '../utils/seoHelpers';

const ComplianceTestingFrameworkPage = () => {
  const handleContactClick = () => {
    scrollToSection('contact');
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
    },
    {
      icon: Scale,
      title: "Advanced Bias & Fairness Assessment",
      description: "Sophisticated algorithms detect and measure bias across demographic groups with statistical significance testing and fairness metric analysis."
    },
    {
      icon: AlertTriangle,
      title: "Intelligent Risk Detection",
      description: "Advanced risk scoring identifies potential compliance issues before they become problems, with automated alerts sent to relevant stakeholders."
    },
    {
      icon: FileCheck,
      title: "Comprehensive Audit Trails",
      description: "Immutable logging of all AI interactions creates detailed audit trails for regulatory inspections, internal reviews, and compliance reporting."
    },
    {
      icon: Gauge,
      title: "Executive Dashboards",
      description: "Intuitive dashboards provide at-a-glance visibility into compliance status across all AI systems with drill-down capabilities for detailed analysis."
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
    }
  ];

  const testingTypes = [
    {
      title: "Fairness Testing",
      description: "Detect discriminatory patterns and bias across protected attributes with comprehensive fairness metrics",
      icon: Scale,
      metrics: ["Demographic Parity", "Equal Opportunity", "Calibration", "Individual Fairness", "Counterfactual Fairness"]
    },
    {
      title: "Security Testing",
      description: "Identify vulnerabilities and attack vectors in AI systems through comprehensive security validation",
      icon: ShieldAlert,
      metrics: ["Prompt Injection", "Data Leakage", "Adversarial Robustness", "Privacy Attacks", "Model Extraction"]
    },
    {
      title: "Performance Testing",
      description: "Validate accuracy, reliability, and robustness under various conditions and edge cases",
      icon: Target,
      metrics: ["Model Accuracy", "Latency Analysis", "Throughput Testing", "Resource Usage", "Stress Testing"]
    },
    {
      title: "Compliance Testing",
      description: "Ensure adherence to regulatory frameworks and industry standards with automated validation",
      icon: FileCheck,
      metrics: ["GDPR Compliance", "EU AI Act", "NIST Framework", "Industry Standards", "Custom Policies"]
    }
  ];

  const governanceFeatures = [
    {
      title: "Policy Management",
      description: "Centralized policy creation and management with version control and approval workflows",
      benefits: ["Automated Policy Enforcement", "Version Control", "Approval Workflows", "Template Library"]
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk scoring and assessment across all AI systems and use cases",
      benefits: ["Automated Risk Scoring", "Risk Heat Maps", "Mitigation Recommendations", "Trend Analysis"]
    },
    {
      title: "Compliance Reporting",
      description: "Generate detailed compliance reports for stakeholders, auditors, and regulatory bodies",
      benefits: ["Automated Report Generation", "Custom Templates", "Multi-format Export", "Scheduled Delivery"]
    },
    {
      title: "Workflow Automation",
      description: "Configure custom approval workflows and escalation paths for governance processes",
      benefits: ["Custom Workflows", "Automated Escalation", "Stakeholder Notifications", "Process Tracking"]
    }
  ];

  const benefits = [
    "Reduce compliance risk by 90% with automated monitoring and testing",
    "Cut manual oversight time by 75% through intelligent automation",
    "Prevent compliance issues before they reach production environments",
    "Accelerate AI deployment with pre-approved compliance frameworks",
    "Enhance model quality and reliability through comprehensive testing",
    "Demonstrate responsible AI practices to stakeholders and regulators",
    "Simplify audit processes with detailed test documentation and evidence"
  ];

  const testimonials = [
    {
      company: "Global Financial Services",
      role: "Chief Risk Officer",
      quote: "The combined compliance testing and framework has transformed how we manage regulatory risk across our AI portfolio. We've reduced compliance review times by 80% while improving our audit readiness.",
      rating: 5
    },
    {
      company: "Healthcare Technology Leader",
      role: "VP of Compliance",
      quote: "With HIPAA and FDA requirements, we needed comprehensive testing and governance. This platform gives us the confidence to innovate while meeting every regulatory standard.",
      rating: 5
    },
    {
      company: "Fortune 500 Technology Company",
      role: "AI Ethics Lead",
      quote: "The bias detection and fairness testing caught issues we never would have found manually. It's become essential for our responsible AI deployment process.",
      rating: 5
    }
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
                    onClick={handleContactClick}
                    className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
                  >
                    Schedule Demo
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center font-semibold"
                  >
                    Explore Platform
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 pt-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>500+ Enterprise Customers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>99.9% Issue Detection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Deploy in 2 Weeks</span>
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
                  {/* Interactive demo overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                    <div className="bg-white bg-opacity-90 rounded-full p-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
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

        {/* Testing Types Section */}
        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Comprehensive Testing Coverage</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Four critical dimensions of AI testing that ensure complete compliance validation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {testingTypes.map((type, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="inline-block p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
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

        {/* Governance Features */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Advanced Governance Capabilities</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Enterprise-grade governance features that scale with your organization
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {governanceFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-gray-50 p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
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

        {/* Integration Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Seamless DevOps Integration</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Integrate compliance testing and governance into your existing development workflow
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="inline-block p-4 bg-blue-100 rounded-xl text-blue-600 mb-4">
                      <GitMerge className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">CI/CD Integration</h3>
                    <p className="text-gray-600">Automatic testing and governance checks on every commit, merge, and deployment</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-4 bg-green-100 rounded-xl text-green-600 mb-4">
                      <Repeat className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Monitoring</h3>
                    <p className="text-gray-600">Ongoing validation and governance of deployed models in production</p>
                  </div>
                  <div className="text-center">
                    <div className="inline-block p-4 bg-purple-100 rounded-xl text-purple-600 mb-4">
                      <BarChart2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Comprehensive Reporting</h3>
                    <p className="text-gray-600">Detailed reports for stakeholders, auditors, and regulatory compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted by AI Leaders Worldwide</h2>
              <p className="text-xl text-gray-600">
                See how our complete compliance solution is transforming AI governance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 shadow-md"
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
        <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your AI Governance?</h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 opacity-90">
              Join hundreds of organizations that trust our comprehensive compliance testing and governance framework. 
              Get started with a personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleContactClick}
                className="px-8 py-4 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Schedule Demo
                <ArrowRight className="h-5 w-5" />
              </button>
              <Link
                to="/blog"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-colors font-semibold inline-flex items-center gap-2"
              >
                Learn More
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

export default ComplianceTestingFrameworkPage;