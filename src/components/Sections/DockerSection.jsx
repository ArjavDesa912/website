import React from 'react';
import { Anchor, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';

const DockerSection = () => {
  return (
    <section 
      id="docker" 
      className="py-20 bg-gradient-to-r from-blue-100 to-indigo-100 section-hidden transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/api/placeholder/600/400" 
              alt="Docker Integration" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Streamlined Docker Integration
            </h2>
            <p className="text-xl text-gray-700">
              Deploy our platform effortlessly with our Docker containers. Get up and running in minutes with pre-configured environments that ensure consistent performance across all deployments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">One-click deployment on any environment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Pre-configured compliance settings</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Automatic updates and version control</span>
              </li>
            </ul>
            <div className="pt-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              >
                <Anchor className="h-5 w-5" />
                Get Docker Images
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DockerSection;