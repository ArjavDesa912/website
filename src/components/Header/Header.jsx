// src/components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import { Menu, ChevronDown, Construction, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { scrollToSection } from '../../utils/scrollUtils';

// Animated logo component
const AnimatedLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-3 group">
      <div className="relative">
        {/* Glowing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
        
        {/* Logo container */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20">
          <img 
            src="/images/praesidium-logo.png" 
            alt="Praesidium Systems Logo" 
            className="h-8 transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      
      <span className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
        Praesidium Systems
      </span>
    </Link>
  );
};

// Enhanced dropdown menu component
const EnhancedDropdown = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  const products = [
    {
      title: "AI Compliance Testing & Framework",
      description: "Complete testing and governance solution",
      link: "/products/compliance-testing-framework",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "LLM Documentation Generator", 
      description: "Automated AI documentation with LLM power",
      link: "/products/llm-documentation-generator",
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "AI Testing Prompt Generator",
      description: "J1 reinforcement learning powered testing", 
      link: "/products/ai-testing-prompt-generator",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      title: "Enterprise AI Chatbot",
      description: "Advanced chatbots for Law, Healthcare & Fintech",
      link: "/products/enterprise-ai-chatbot", 
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 mt-2 w-96 opacity-0 animate-fadeIn"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        animation: 'fadeIn 0.3s ease-out forwards'
      }}
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-2 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-2xl" />
        
        <div className="relative z-10">
          {products.map((product, index) => (
            <Link
              key={index}
              to={product.link}
              className="group block p-4 rounded-xl hover:bg-white/60 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className={`w-10 h-10 bg-gradient-to-r ${product.gradient} rounded-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <div className="w-6 h-6 bg-white/20 rounded-sm" />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors text-sm">
                    {product.title}
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    {product.description}
                  </div>
                </div>
                
                {/* Arrow */}
                <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-all transform group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
          
          <div className="border-t border-slate-200/50 mt-2 pt-2">
            <button 
              onClick={() => scrollToSection('products')}
              className="w-full text-left p-3 rounded-lg hover:bg-blue-50/50 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              View All Products →
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

// Enhanced mobile menu
const EnhancedMobileMenu = ({ isOpen, onClose, onNavClick, onContactClick }) => {
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

  const handleContactButtonClick = (e) => {
    e.preventDefault();
    onClose();
    if (onContactClick) {
      onContactClick();
    } else {
      onNavClick('contact');
    }
  };

  const products = [
    {
      title: "AI Compliance Testing & Framework",
      description: "Complete testing and governance solution", 
      link: "/products/compliance-testing-framework"
    },
    {
      title: "LLM Documentation Generator",
      description: "Automated AI documentation with LLM power",
      link: "/products/llm-documentation-generator"
    },
    {
      title: "AI Testing Prompt Generator", 
      description: "J1 reinforcement learning powered testing",
      link: "/products/ai-testing-prompt-generator"
    },
    {
      title: "Enterprise AI Chatbot",
      description: "Advanced chatbots for Law, Healthcare & Fintech",
      link: "/products/enterprise-ai-chatbot"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Menu panel */}
      <div className="relative h-full w-80 bg-white/90 backdrop-blur-xl shadow-2xl border-r border-white/20 transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200/50">
          <AnimatedLogo />
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <X className="h-6 w-6 text-slate-600" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-col p-6 space-y-2">
          {/* Products section */}
          <div className="border-b border-slate-200/50 pb-4 mb-4">
            <button 
              onClick={() => setIsProductsExpanded(!isProductsExpanded)}
              className="flex items-center justify-between w-full text-left py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              <span>Products</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isProductsExpanded ? 'rotate-180' : ''}`} />
            </button>
            
            {isProductsExpanded && (
              <div className="pl-4 space-y-2 mt-2">
                {products.map((product, index) => (
                  <Link 
                    key={index}
                    to={product.link}
                    className="block py-2 text-sm hover:text-blue-600 transition-colors"
                    onClick={onClose}
                  >
                    <div className="font-medium">{product.title}</div>
                    <div className="text-xs text-slate-500">{product.description}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Other nav items */}
          {[
            { label: 'Features', id: 'features' },
            { label: 'How It Works', id: 'how-it-works' },
            { label: 'Deployment', id: 'deployment' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNavClick(item.id)} 
              className="text-left py-3 text-slate-700 hover:text-blue-600 transition-colors font-medium border-b border-slate-200/30"
            >
              {item.label}
            </button>
          ))}
          
          <Link 
            to="/blog"
            className="text-slate-700 hover:text-blue-600 transition-colors py-3 font-medium border-b border-slate-200/30"
            onClick={onClose}
          >
            Blog
          </Link>
          
          {/* Contact button */}
          <button 
            onClick={handleContactButtonClick} 
            className="mt-6 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </div>
  );
};

// Main enhanced header component
const Header = ({ onContactClick }) => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
    } else {
      scrollToSection(id);
    }
  };

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
      {/* Construction Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 py-2 px-4 text-center text-sm font-medium relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative flex items-center justify-center gap-2">
          <Construction className="h-4 w-4" />
          <span>Website Under Construction - Some features may not be fully functional</span>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`fixed w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20' 
            : 'bg-white/60 backdrop-blur-sm'
        }`}
        style={{ top: '36px' }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <AnimatedLogo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
                className="flex items-center text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                Products
                <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <EnhancedDropdown 
                isOpen={isProductsDropdownOpen}
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                onMouseLeave={() => setIsProductsDropdownOpen(false)}
              />
            </div>
            
            {/* Other nav items */}
            {[
              { label: 'Features', id: 'features' },
              { label: 'How It Works', id: 'how-it-works' },
              { label: 'Deployment', id: 'deployment' }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)} 
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
            
            <Link 
              to="/blog"
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              Blog
            </Link>
            
            {/* Contact button */}
            <button 
              onClick={handleContactButtonClick} 
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Contact Us
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="md:hidden p-2 text-slate-700 hover:text-blue-600 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <EnhancedMobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        onNavClick={handleNavClick}
        onContactClick={onContactClick}
      />
    </>
  );
};

export default Header;