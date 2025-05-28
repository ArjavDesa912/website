import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { scrollToSection } from '../../utils/scrollUtils';

const Header = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = (isOpen) => {
    setIsMobileMenuOpen(isOpen);
  };

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      scrollToSection(id);
    }
  };

  // Handle contact button click
  const handleContactButtonClick = (e) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    } else {
      handleNavClick('contact');
    }
  };

  return (
    <>
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/images/praesidium-logo.png" 
              alt="Praesidium Systems Logo" 
              className="h-8"
            />
            <span className="text-xl font-bold text-gray-900">Praesidium Systems</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Products Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                Products
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              
              {/* Products Dropdown Menu */}
              {isProductsDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-72 bg-white rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsProductsDropdownOpen(true)}
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                >
                  <Link 
                    to="/products/compliance-framework"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    AI Compliance Framework
                  </Link>
                  <Link 
                    to="/products/documentation-generator"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    ML/LLM Documentation Generator
                  </Link>
                  <Link 
                    to="/products/compliance-testing"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    AI Compliance Testing System
                  </Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <button 
                    onClick={() => {
                      setIsProductsDropdownOpen(false);
                      handleNavClick('products');
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    View All Products
                  </button>
                </div>
              )}
            </div>
            
            <button 
              onClick={() => handleNavClick('features')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => handleNavClick('how-it-works')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              How It Works
            </button>
            <button 
              onClick={() => handleNavClick('deployment')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Deployment
            </button>
            <Link 
              to="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <button 
              onClick={handleContactButtonClick} 
              className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => toggleMobileMenu(true)} 
            className="md:hidden text-gray-700"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => toggleMobileMenu(false)} 
        onNavClick={handleNavClick}
        onContactClick={onContactClick}
      />
    </>
  );
};

export default Header;