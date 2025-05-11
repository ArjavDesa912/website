import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, onNavClick, onContactClick }) => {
  const handleNavClick = (id) => {
    onNavClick(id);
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
      <div className="h-full w-64 bg-white p-6 flex flex-col shadow-lg">
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
          <button 
            onClick={() => handleNavClick('products')} 
            className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 border-b border-gray-100"
          >
            Products
          </button>
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
          <button 
            onClick={() => handleNavClick('docker')} 
            className="text-gray-700 hover:text-blue-600 transition-colors text-left py-2 border-b border-gray-100"
          >
            Docker
          </button>
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