import React from 'react';
import { ChevronRight } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              AI Compliance <span className="text-blue-600">Simplified</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Monitor, audit, and ensure regulatory compliance for your AI models with our comprehensive governance platform.
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
                onClick={() => scrollToSection('features')}
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center"
              >
                Explore Features
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
      </div>
    </section>
  );
};

export default HeroSection;