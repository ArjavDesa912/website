import React from 'react';
import { Code, FileText, TestTube, Shield, RefreshCw, Settings, Bot, Plug } from 'lucide-react';
// import { FeatureCard } from '../UI';

const ProductsSection = () => {
  const products = [
    {
      icon: Code,
      title: "AI Compliance Framework",
      description: "Codifies regulatory requirements (GDPR, EU AI Act, etc.) into automated policy controls. Features customizable compliance templates, real-time monitoring of model outputs, audit trails, risk scoring, and automated alerts for policy violations."
    },
    {
      icon: FileText,
      title: "ML/LLM Documentation Generator",
      description: "Automatically generates detailed documentation (e.g. model cards, audit reports) for AI/ML projects using LLMs. Includes template-driven document synthesis from code and metadata, version control integration, and multi-format export (PDF, HTML)."
    },
    {
      icon: TestTube,
      title: "AI Compliance Testing System",
      description: "Automates comprehensive testing of AI models to ensure accuracy, fairness, and security. Features functional testing, bias and fairness assessment, security vulnerability scans, and CI/CD integration for continuous validation."
    }
  ];

  return (
    <section 
      id="products" 
      className="py-20 bg-gray-50 section-hidden transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Governance Suite</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three powerful products that work together to provide comprehensive oversight and accountability for your AI systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="inline-block p-3 bg-blue-100 rounded-lg text-blue-600 mb-4">
                <product.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h3>
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Differentiators Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Key Differentiators</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Shield className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Holistic AI Oversight</h4>
              <p className="text-gray-600 text-sm">Comprehensive governance across the entire AI lifecycle (design, training, deployment) to ensure safety, fairness, and ethical alignment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Settings className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Regulatory Expertise</h4>
              <p className="text-gray-600 text-sm">Built-in frameworks for major standards (EU AI Act, NIST AI RMF, ISO 42001, etc.) allow rapid adaptation to policy changes and new regulations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Bot className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Automated Documentation</h4>
              <p className="text-gray-600 text-sm">AI-driven generation of model documentation and audit reports reduces manual overhead while maintaining accuracy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <RefreshCw className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Continuous Monitoring</h4>
              <p className="text-gray-600 text-sm">Real-time compliance checks and alerts ensure AI behavior remains within approved bounds as models evolve.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <TestTube className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Advanced Testing & Validation</h4>
              <p className="text-gray-600 text-sm">Integrated testing tools for bias, security, and performance catch issues early, enhancing reliability and minimizing errors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <Plug className="h-8 w-8 text-blue-600 mb-3" />
              <h4 className="font-bold text-gray-900 mb-2">Seamless Integration</h4>
              <p className="text-gray-600 text-sm">Designed to plug into existing data and ML pipelines, the suite accelerates deployment and cross-team collaboration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;