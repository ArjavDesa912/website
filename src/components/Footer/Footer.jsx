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
    <footer className="relative bg-slate-950/80 text-slate-300 backdrop-blur-xl border-t border-white/10 py-12">
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
            <p className="text-slate-400">
              AI Governance, simplified.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white/90 tracking-wide">Products</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('features')} 
                  className="text-slate-400 hover:text-white/90 transition-colors hover:translate-x-0.5 text-left"
                >
                  AI Compliance Testing & Framework
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('features')} 
                  className="text-slate-400 hover:text-white/90 transition-colors hover:translate-x-0.5 text-left"
                >
                  LLM Documentation Generator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('features')} 
                  className="text-slate-400 hover:text-white/90 transition-colors hover:translate-x-0.5 text-left"
                >
                  Features
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white/90 tracking-wide">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-slate-400 hover:text-white/90 transition-colors hover:translate-x-0.5 text-left"
                >
                  Documentation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-slate-400 hover:text-white/90 transition-colors hover:translate-x-0.5 text-left"
                >
                  API Reference
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-slate-400 hover:text-white/90 transition-colors hover:translate-x-0.5 text-left"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white/90 tracking-wide">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('team')} 
                  className="text-slate-400 hover:text-white/90 transition-colors hover:translate-x-0.5 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-slate-400 hover:text-white/90 transition-colors hover:translate-x-0.5 text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-slate-400 hover:text-white/90 transition-colors hover:translate-x-0.5 text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleContactClick()} 
                  className="text-slate-400 hover:text-white/90 transition-colors hover:translate-x-0.5 text-left"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 text-center text-slate-500 text-sm">
          &copy; {currentYear} Praesidium Compliance Systems Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;