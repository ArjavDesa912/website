import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { X, ChevronDown, ChevronRight } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, onNavClick, onContactClick }) => {
  const [isProductsExpanded, setIsProductsExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      onNavClick(id);
    }
    onClose();
  };

  // Handle contact button click
  const handleContactButtonClick = (e) => {
    e.preventDefault();
    onClose();
    if (onContactClick) {
      onContactClick();
    } else {
      onNavClick('contact');
    }
  };

  return (
    <div 
      className={`fixed inset-0 bg-gray-900 bg-opacity-50 z-50 md:hidden mobile-menu-overlay ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="h-full w-72 bg-white p-6 flex flex-col shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img 
              src="/images/praesidium-logo.png" 
              alt="Praesidium Systems Logo" 
              className="h-6"
            />
            <span className="text-lg font-bold text-gray-900">Praesidium</span>
          </div>
          <button onClick={onClose}>
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          {/* Products Expandable Section - UPDATED WITH NEW ROUTES */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => setIsProductsExpanded(!isProductsExpanded)}
              className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <span>Products</span>
              {isProductsExpanded ? (
                <ChevronDown className="h-5 w-5" />
              ) : (
                <ChevronRight className="h-5 w-5" />
              )}
            </button>
            
            {isProductsExpanded && (
              <div className="pl-4 pb-2 space-y-1">
                <Link 
                  to="/products/compliance-testing-framework"
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-sm">AI Compliance Testing & Framework</div>
                  <div className="text-xs text-gray-500">Complete testing and governance solution</div>
                </Link>
                <Link 
                  to="/products/llm-documentation-generator"
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-sm">LLM Documentation Generator</div>
                  <div className="text-xs text-gray-500">Automated AI documentation with LLM power</div>
                </Link>
                <Link 
                  to="/products/ai-testing-prompt-generator"
                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={onClose}
                >
                  <div className="font-medium text-sm">AI Testing Prompt Generator</div>
                  <div className="text-xs text-gray-500">J1 reinforcement learning powered testing</div>
                </Link>
                <Link 
                  to="/products/enterprise-ai-chatbot"
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <div className="font-medium">Enterprise AI Chatbot</div>
                  <div className="text-sm text-gray-500">Advanced chatbots for Law, Healthcare & Fintech</div>
                </Link>
                <div className="border-t border-gray-100 mt-2 pt-2">
                  <button 
                    onClick={() => handleNavClick('products')}
                    className="block py-2 text-gray-700 hover:text-blue-600 text-sm"
                  >
                    View All Products
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => handleNavClick('features')} 
            className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 border-b border-gray-100"
          >
            Features
          </button>
          <button 
            onClick={() => handleNavClick('how-it-works')} 
            className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 border-b border-gray-100"
          >
            How It Works
          </button>
          <button 
            onClick={() => handleNavClick('deployment')} 
            className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 border-b border-gray-100"
          >
            Deployment
          </button>
          <Link 
            to="/blog"
            className="text-gray-700 hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
            onClick={onClose}
          >
            Blog
          </Link>
          <button 
            onClick={handleContactButtonClick} 
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;