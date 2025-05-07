import React from 'react';
import { Search, Shield, AlertTriangle, BarChart2, Settings, Code } from 'lucide-react';
import { FeatureCard } from '../UI';

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Hallucination Detection",
      description: "Automatically identify and flag when your models generate inaccurate or fabricated information through advanced verification techniques."
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Continuously track model outputs for alignment with industry regulations like GDPR, HIPAA, and your custom policies."
    },
    {
      icon: AlertTriangle,
      title: "Agency Analysis",
      description: "Detect and prevent situations where AI models overstate their capabilities or make unauthorized commitments."
    },
    {
      icon: BarChart2,
      title: "Performance Tracking",
      description: "Comprehensive dashboards to track model performance, version history, and dataset lineage over time."
    },
    {
      icon: Settings,
      title: "Customizable Frameworks",
      description: "Define and enforce your own policies, regulatory frameworks, and documentation requirements."
    },
    {
      icon: Code,
      title: "Seamless Integration",
      description: "Connects with your existing ML ecosystem and major LLM providers for frictionless adoption."
    }
  ];

  return (
    <section 
      id="features" 
      className="py-20 bg-white section-hidden transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive AI Governance Platform</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From hallucination detection to regulatory compliance, our platform offers end-to-end governance solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;