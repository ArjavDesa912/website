// src/components/Header/Header.jsx - Clean, Modern Header
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Shield,
  FileText,
  TestTube,
  BookOpen,
  Users,
  Phone
} from 'lucide-react';

// Enhanced Desktop Navigation with stable dropdowns
const DesktopNavigation = ({ onContactClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);

  const navigation = {
    products: [
      {
        name: 'AI Compliance Testing',
        description: 'Comprehensive testing framework for AI systems',
        sectionId: 'features',
        icon: TestTube,
      },
      {
        name: 'LLM Documentation Generator',
        description: 'Automated documentation for ML models',
        sectionId: 'features',
        icon: FileText,
      }
    ]
  };

  const handleMouseEnter = (dropdown) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleNavigationClick = (item) => {
    setActiveDropdown(null);
    
    if (item.action === 'contact') {
      onContactClick();
    } else if (item.sectionId) {
      const section = document.getElementById(item.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="hidden lg:flex items-center space-x-8">
      {/* Products Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter('products')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors duration-200 font-medium py-4 px-2">
          <span>Products</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Invisible bridge to prevent gap issues */}
        <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
        
        {activeDropdown === 'products' && (
          <div 
            className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 text-slate-100 rounded-xl shadow-2xl border border-white/10 p-4 z-50 backdrop-blur-xl"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="space-y-1">
              {navigation.products.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigationClick(item)}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group w-full text-left"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-200">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-100 text-sm">{item.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.description}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setActiveDropdown(null);
                  const productsSection = document.getElementById('products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center justify-between text-blue-400 hover:text-blue-300 font-medium text-sm w-full"
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Pricing Link */}
      <button
        onClick={() => {
          const features = document.getElementById('features');
          if (features) {
            features.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="text-slate-300 hover:text-white transition-colors duration-200 font-medium py-4 px-2"
      >
        Pricing
      </button>

      {/* About Us Link */}
      <button
        onClick={() => {
          const teamSection = document.getElementById('team');
          if (teamSection) {
            teamSection.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className="text-slate-300 hover:text-white transition-colors duration-200 font-medium py-4 px-2"
      >
        About Us
      </button>

      {/* Get started Button */}
      <button
        onClick={onContactClick}
        className="px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-blue-500/40 bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700"
      >
        <span>Get started</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

// Clean Mobile Navigation
const MobileNavigation = ({ isOpen, setIsOpen, onContactClick }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const navigation = {
    products: [
      {
        name: 'AI Compliance Testing',
        description: 'Comprehensive testing framework for AI systems',
        sectionId: 'features',
        icon: TestTube,
      },
      {
        name: 'LLM Documentation Generator',
        description: 'Automated documentation for ML models',
        sectionId: 'features',
        icon: FileText,
      }
    ]
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleNavigationClick = (item) => {
    setIsOpen(false);
    setExpandedSection(null);
    
    if (item.action === 'contact') {
      onContactClick();
    } else if (item.sectionId) {
      const section = document.getElementById(item.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-slate-950 text-slate-100 shadow-2xl overflow-y-auto border-l border-white/10">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-blue-500/20 rounded-lg">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                  <span className="text-lg font-bold text-white">Praesidium</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-4">
                {/* Products Section */}
                <div>
                  <button
                    onClick={() => toggleSection('products')}
                    className="flex items-center justify-between w-full p-3 text-left font-semibold text-slate-100 hover:bg-white/5 rounded-lg transition-colors"
                  >
                    <span>Products</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedSection === 'products' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedSection === 'products' && (
                    <div className="mt-2 space-y-1 pl-3">
                      {navigation.products.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavigationClick(item)}
                          className="flex items-center space-x-3 p-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="text-sm">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* About Us Link */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    const teamSection = document.getElementById('team');
                    if (teamSection) {
                      teamSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="flex items-center space-x-3 p-3 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 w-full text-left"
                >
                  <Users className="h-4 w-4" />
                  <span className="text-sm font-semibold">About Us</span>
                </button>
              </div>

              {/* Contact Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                  }}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-indigo-700 transition-colors duration-200 shadow-lg hover:shadow-blue-500/40"
                >
                  <span>Get started</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Main Header Component - Clean and Simple
const Header = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-950/80 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] border-b border-white/10' 
        : 'bg-slate-950/40 backdrop-blur-lg border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-3 group">
            <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors duration-200">
              <Shield className="h-5 w-5 text-blue-400" />
            </div>
            <span className="text-xl font-bold text-white">Praesidium Compliance Systems</span>
          </button>

          {/* Desktop Navigation */}
          <DesktopNavigation onContactClick={onContactClick} />

          {/* Mobile Navigation */}
          <MobileNavigation 
            isOpen={mobileMenuOpen}
            setIsOpen={setMobileMenuOpen}
            onContactClick={onContactClick}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;