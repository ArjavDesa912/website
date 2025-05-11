import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import MobileMenu from './MobileMenu';
import { scrollToSection } from '../../utils/scrollUtils';

const Header = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (isOpen) => {
    setIsMobileMenuOpen(isOpen);
  };

  const handleNavClick = (id) => {
    scrollToSection(id);
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
          <div className="flex items-center gap-2">
            <img 
              src="/images/praesidium-logo.png" 
              alt="Praesidium Systems Logo" 
              className="h-8"
            />
            <span className="text-xl font-bold text-gray-900">Praesidium Systems</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => handleNavClick('products')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Products
            </button>
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
            <button 
              onClick={() => handleNavClick('docker')} 
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Docker
            </button>
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