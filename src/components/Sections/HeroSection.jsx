import React from 'react';
import { ChevronRight, Users } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';

const HeroSection = ({ onShowTeam }) => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              AI Governance Suite
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive governance for ML and LLM models
            </p>
            <p className="text-lg text-gray-700 max-w-lg">
              Praesidium Systems simplifies enterprise AI oversight by providing end-to-end monitoring, auditing, and compliance assurance for machine learning (ML) and large language models (LLMs). It helps align your AI models with global regulations and ethical standards, ensuring safety, fairness, and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Request Demo
                <ChevronRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Explore Products
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="/images/dashboard-demo.png" 
              alt="AI Compliance Dashboard" 
              className="rounded-lg shadow-xl border border-gray-200"
            />
          </div>
        </div>
        
        {/* Team Section integrated into Hero */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Backed by Industry Experts</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our team brings a lot of experience in AI, compliance, and regulatory frameworks
          </p>
          <button 
            onClick={onShowTeam}
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <Users className="h-5 w-5" />
            Meet Our Leadership Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;