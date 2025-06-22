import React, { useEffect, useState } from 'react';
import { scrollToSection } from '../../utils/scrollUtils';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
  };

  const handleContactClick = () => {
    // Trigger contact popup by dispatching a custom event
    window.dispatchEvent(new CustomEvent('openContactPopup'));
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/images/praesidium-logo.png" 
                alt="Praesidium Systems Logo" 
                className="h-6"
              />
              <span className="text-lg font-bold text-white">Praesidium Systems</span>
            </button>
            <p className="text-gray-400">
              AI Governance, simplified.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('features')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  AI Compliance Testing & Framework
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('features')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  LLM Documentation Generator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('features')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Features
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  API Reference
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('team')} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          &copy; {currentYear} Praesidium Compliance Systems Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;