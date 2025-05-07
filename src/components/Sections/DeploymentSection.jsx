import React from 'react';
import { Server, Database, Lock } from 'lucide-react';
import { DeploymentCard } from '../UI';

const DeploymentSection = () => {
  const deploymentOptions = [
    {
      icon: Server,
      title: "Cloud Deployment",
      description: "Deploy on AWS, Azure, or Google Cloud with our managed service for maximum convenience and scalability."
    },
    {
      icon: Database,
      title: "On-Premises",
      description: "Install on your own hardware for complete control and compliance with data residency requirements."
    },
    {
      icon: Lock,
      title: "VPC Deployment",
      description: "Deploy within your Virtual Private Cloud for enhanced security and privacy while maintaining flexibility."
    }
  ];

  return (
    <section 
      id="deployment" 
      className="py-20 bg-white section-hidden transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Flexible Deployment Options</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deploy our platform wherever it makes the most sense for your organization
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {deploymentOptions.map((option, index) => (
            <DeploymentCard 
              key={index}
              icon={option.icon}
              title={option.title}
              description={option.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;