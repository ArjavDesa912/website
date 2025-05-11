import React from 'react';
import { Server, Shield, Zap, Scale } from 'lucide-react';

const IntegrationBenefitsSection = () => {
  const benefits = [
    {
      icon: Server,
      title: "Centralized Governance",
      description: "Unifies AI compliance and risk data in a single platform, eliminating duplicated workflows and manual tracking."
    },
    {
      icon: Shield,
      title: "Enhanced Trust & Transparency",
      description: "Clear audit trails and explainability features help build stakeholder trust and reduce bias, as issues are detected and addressed early."
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Automates routine compliance tasks (reporting, alerts, audits), freeing teams to focus on strategic AI initiatives."
    },
    {
      icon: Scale,
      title: "Scalable Adaptation",
      description: "A modular design allows easy scaling as AI usage grows and policies evolve, ensuring the governance framework stays up-to-date."
    }
  ];

  return (
    <section 
      id="integration-benefits" 
      className="py-20 bg-white section-hidden transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Integration Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deploying the AI Governance Suite unlocks enterprise-wide benefits for organizations relying on AI
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full text-blue-600 mb-4">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            By centralizing compliance data and automating oversight, our platform reduces manual effort and improves transparency. This unified approach enhances trust and efficiency, while enabling faster adaptation to new regulations and business needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntegrationBenefitsSection;