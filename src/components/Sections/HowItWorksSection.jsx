import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Connect Your Models",
      description: "Integrate with APIs from OpenAI, Claude, Gemini, or use lightweight local LLMs for cost efficiency. Our platform offers flexible connection options for all major providers."
    },
    {
      number: 2,
      title: "Define Your Governance Framework",
      description: "Customize compliance requirements, regulatory frameworks, and policy documentation specific to your organization and industry needs."
    },
    {
      number: 3,
      title: "Monitor & Evaluate",
      description: "Continuously track model performance, detect hallucinations, and identify compliance gaps in real-time through our advanced monitoring dashboard."
    },
    {
      number: 4,
      title: "Report & Improve",
      description: "Generate comprehensive reports for stakeholders and use insights to improve model performance and compliance over time."
    }
  ];
  
  const providers = [
    { name: "OpenAI", logo: "/images/openai.svg" },
    { name: "Anthropic", logo: "/images/anthropic.svg" },
    { name: "Google", logo: "/images/google.svg" },
    { name: "AWS", logo: "/images/aws.svg" },
    { name: "Azure", logo: "/images/azure.svg" }
  ];
  
  return (
    <section
      id="how-it-works"
      className="py-20 bg-blue-50 section-hidden transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform integrates seamlessly with your AI workflow in four simple steps
          </p>
        </div>
       
        <div className="max-w-4xl mx-auto space-y-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
       
        {/* Integrations */}
        <div className="mt-20">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">Works with all major AI providers</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {providers.map((provider, index) => (
              <div key={index} className="text-center opacity-70 hover:opacity-100 transition-opacity">
                <img 
                  src={provider.logo} 
                  alt={provider.name} 
                  className="mx-auto h-10 w-24 object-contain" 
                  style={{ width: "100px", height: "40px" }}
                />
                <span className="text-sm text-gray-600 mt-2 block">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;