import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight,
  Shield,
  Brain,
  FileText,
  MessageCircle,
  TestTube,
  BookOpen,
  Users,
  Phone
} from 'lucide-react';

// Floating Navigation Component (Aceternity UI style)
const FloatingNav = ({ navItems, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 50);
      
      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <nav className={`px-6 py-3 backdrop-blur-lg border border-white/20 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/10 shadow-xl rounded-full' 
          : 'bg-white/5 shadow-lg rounded-2xl'
      }`}>
        <div className="flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                location.pathname === item.link
                  ? 'bg-white/20 text-white shadow-lg'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          ))}
          <button
            onClick={onContactClick}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-1"
          >
            <span>Contact</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </nav>
    </div>
  );
};

// Enhanced Desktop Navigation
const DesktopNavigation = ({ isScrolled, onContactClick }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navigation = {
    products: [
      {
        name: 'AI Compliance Testing',
        description: 'Comprehensive testing framework for AI systems',
        href: '/compliance-testing',
        icon: TestTube,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        name: 'LLM Documentation Generator',
        description: 'Automated documentation for ML models',
        href: '/documentation-generator',
        icon: FileText,
        color: 'from-purple-500 to-pink-500'
      },
      {
        name: 'Enterprise AI Chatbot',
        description: 'Industry-specific AI solutions',
        href: '/enterprise-chatbot',
        icon: MessageCircle,
        color: 'from-green-500 to-emerald-500'
      },
      {
        name: 'AI Testing Prompt Generator',
        description: 'J1-powered testing automation',
        href: '/prompt-generator',
        icon: Brain,
        color: 'from-orange-500 to-red-500'
      }
    ],
    company: [
      {
        name: 'About Us',
        description: 'Learn about our mission and team',
        href: '/about',
        icon: Users
      },
      {
        name: 'Blog',
        description: 'Latest insights on AI governance',
        href: '/blog',
        icon: BookOpen
      },
      {
        name: 'Contact',
        description: 'Get in touch with our team',
        href: '/contact',
        icon: Phone
      }
    ]
  };

  return (
    <div className="hidden md:flex items-center space-x-8">
      {/* Products Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown('products')}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
          <span>Products</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        
        {activeDropdown === 'products' && (
          <div className="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-1 gap-4">
              {navigation.products.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-start space-x-4 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 group"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <Link
                to="/products"
                className="flex items-center justify-between text-blue-600 hover:text-blue-700 font-medium"
              >
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Company Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveDropdown('company')}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button className="flex items-center space-x-1 text-white/90 hover:text-white transition-colors">
          <span>Company</span>
          <ChevronDown className="h-4 w-4" />
        </button>
        
        {activeDropdown === 'company' && (
          <div className="absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-6 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              {navigation.company.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-300 group"
                >
                  <item.icon className="h-5 w-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  <div>
                    <div className="font-semibold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-600">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Direct Links */}
      <Link
        to="/blog"
        className={`text-white/90 hover:text-white transition-colors ${
          location.pathname === '/blog' ? 'text-white' : ''
        }`}
      >
        Blog
      </Link>

      {/* Contact Button */}
      <button
        onClick={onContactClick}
        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
      >
        <span>Contact</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
};

// Enhanced Mobile Navigation
const MobileNavigation = ({ isOpen, setIsOpen, onContactClick }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const location = useLocation();

  const navigation = {
    products: [
      { name: 'AI Compliance Testing', href: '/compliance-testing', icon: TestTube },
      { name: 'LLM Documentation Generator', href: '/documentation-generator', icon: FileText },
      { name: 'Enterprise AI Chatbot', href: '/enterprise-chatbot', icon: MessageCircle },
      { name: 'AI Testing Prompt Generator', href: '/prompt-generator', icon: Brain }
    ],
    company: [
      { name: 'About Us', href: '/about', icon: Users },
      { name: 'Blog', href: '/blog', icon: BookOpen },
      { name: 'Contact', href: '/contact', icon: Phone }
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

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-white hover:text-blue-300 transition-colors"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl transform transition-transform duration-300 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2">
                  <Shield className="h-8 w-8 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">Praesidium</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-6">
                {/* Products Section */}
                <div>
                  <button
                    onClick={() => setExpandedSection(expandedSection === 'products' ? null : 'products')}
                    className="flex items-center justify-between w-full p-3 text-left font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>Products</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'products' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedSection === 'products' && (
                    <div className="mt-2 space-y-2 pl-4">
                      {navigation.products.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Company Section */}
                <div>
                  <button
                    onClick={() => setExpandedSection(expandedSection === 'company' ? null : 'company')}
                    className="flex items-center justify-between w-full p-3 text-left font-semibold text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <span>Company</span>
                    <ChevronDown className={`h-5 w-5 transition-transform ${expandedSection === 'company' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedSection === 'company' && (
                    <div className="mt-2 space-y-2 pl-4">
                      {navigation.company.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-center space-x-3 p-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Direct Links */}
                <Link
                  to="/blog"
                  onClick={() => setIsOpen(false)}
                  className={`block p-3 font-semibold transition-colors rounded-lg ${
                    location.pathname === '/blog'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  Blog
                </Link>
              </div>

              {/* Contact Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    onContactClick();
                    setIsOpen(false);
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Main Enhanced Header Component
const Header = ({ onContactClick, useFloatingNav = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Shield className="h-4 w-4" />,
    },
    {
      name: "Products",
      link: "/products",
      icon: <Brain className="h-4 w-4" />,
    },
    {
      name: "Blog",
      link: "/blog",
      icon: <BookOpen className="h-4 w-4" />,
    },
  ];

  // Use floating navigation for specific pages or when requested
  if (useFloatingNav) {
    return <FloatingNav navItems={navItems} onContactClick={onContactClick} />;
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/10 backdrop-blur-xl shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Praesidium Systems</span>
          </Link>

          {/* Desktop Navigation */}
          <DesktopNavigation 
            isScrolled={isScrolled} 
            onContactClick={onContactClick} 
          />

          {/* Mobile Navigation */}
          <MobileNavigation 
            isOpen={mobileMenuOpen}
            setIsOpen={setMobileMenuOpen}
            onContactClick={onContactClick}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;