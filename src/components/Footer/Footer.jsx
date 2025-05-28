import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollUtils';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/images/praesidium-logo.png" 
                alt="Praesidium Systems Logo" 
                className="h-6"
              />
              <span className="text-lg font-bold text-white">Praesidium Systems</span>
            </Link>
            <p className="text-gray-400">
              AI Governance, simplified.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/products/compliance-framework" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI Compliance Framework
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/documentation-generator" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Documentation Generator
                </Link>
              </li>
              <li>
                <Link 
                  to="/products/compliance-testing" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Compliance Testing
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('features')} 
                  className="text-gray-400 hover:text-white transition-colors"
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
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/docs" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/api" className="text-gray-400 hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
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