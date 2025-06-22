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
    ],
    company: [
      {
        name: 'About Us',
        description: 'Learn about our mission and team',
        sectionId: 'team',
        icon: Users
      },
      {
        name: 'Contact',
        description: 'Get in touch with our team',
        action: 'contact',
        icon: Phone
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
        <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-4 px-2">
          <span>Products</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Invisible bridge to prevent gap issues */}
        <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
        
        {activeDropdown === 'products' && (
          <div 
            className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="space-y-1">
              {navigation.products.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigationClick(item)}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group w-full text-left"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors duration-200">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                    <div className="text-xs text-gray-600 mt-0.5">{item.description}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-4 pt-3 border-t border-gray-100">
              <button
                onClick={() => {
                  setActiveDropdown(null);
                  const productsSection = document.getElementById('products');
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="flex items-center justify-between text-blue-600 hover:text-blue-700 font-medium text-sm w-full"
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Company Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => handleMouseEnter('company')}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-4 px-2">
          <span>Company</span>
          <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
        </button>
        
        {/* Invisible bridge to prevent gap issues */}
        <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
        
        {activeDropdown === 'company' && (
          <div 
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="space-y-1">
              {navigation.company.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigationClick(item)}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 w-full text-left"
                >
                  <item.icon className="h-4 w-4 text-gray-600" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                    <div className="text-xs text-gray-600 mt-0.5">{item.description}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Blog Link - COMMENTED OUT */}
      {/* <Link
        to="/blog"
        className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2 ${
          location.pathname === '/blog' ? 'text-blue-600' : ''
        }`}
      >
        Blog
      </Link> */}

      {/* Contact Button */}
      <button
        onClick={onContactClick}
        className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md"
      >
        <span>Contact</span>
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
      { name: 'AI Compliance Testing', sectionId: 'features', icon: TestTube },
      { name: 'LLM Documentation Generator', sectionId: 'features', icon: FileText }
    ],
    company: [
      { name: 'About Us', sectionId: 'team', icon: Users },
      { name: 'Contact', action: 'contact', icon: Phone }
    ]
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
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
        className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-blue-600 rounded-lg">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-900">Praesidium</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
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
                    className="flex items-center justify-between w-full p-3 text-left font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
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
                          className="flex items-center space-x-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="text-sm">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Company Section */}
                <div>
                  <button
                    onClick={() => toggleSection('company')}
                    className="flex items-center justify-between w-full p-3 text-left font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>Company</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${expandedSection === 'company' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedSection === 'company' && (
                    <div className="mt-2 space-y-1 pl-3">
                      {navigation.company.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavigationClick(item)}
                          className="flex items-center space-x-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        >
                          <item.icon className="h-4 w-4" />
                          <span className="text-sm">{item.name}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Blog Link - COMMENTED OUT */}
                {/* <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className={`block p-3 font-semibold transition-colors rounded-lg ${
                    location.pathname === '/blog'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Blog
                </Link> */}
              </div>

              {/* Contact Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onContactClick();
                  }}
                  className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors duration-200"
                >
                  <span>Contact Us</span>
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
        ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-100' 
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-3 group">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors duration-200">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Praesidium Systems</span>
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