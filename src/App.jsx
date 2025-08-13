// src/App.jsx - Single Page Website
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import { Header } from './components/Header';
import { 
  HeroSection,
  ProductsSection,
  FeaturesSection,
  IntegrationBenefitsSection,
  DeploymentSection,
  CTASection 
} from './components/Sections';
import { Footer } from './components/Footer';
import ContactPopup from './components/ContactPopup';

// Additional sections for single page
import FeatureBenefitsSection from './components/Sections/FeatureBenefitsSection';
import HowItWorksSection from './components/Sections/HowItWorksSection';
import TeamSection from './components/Sections/TeamSection';
import ScreenshotShowcase from './components/ScreenshotShowcase';

// SEO helpers
import { 
  updateMetaTags, 
  generateOrganizationSchema, 
  addStructuredData,
  removeStructuredData
} from './utils/seoHelpers';

// Analytics utilities
import * as analytics from './utils/analyticsUtils';
import { useAnalytics } from './utils/useAnalytics';

function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isTeamPopupOpen, setIsTeamPopupOpen] = useState(false);
  const { trackFeatureInteraction, trackDeploymentInterest } = useAnalytics();

  // Dashboard screenshots data
  const dashboardScreenshots = [
    {
      src: "/images/dashboard-demo.png",
      alt: "AI Governance Dashboard Overview",
      title: "Dashboard Overview",
      description: "Get a comprehensive view of your AI systems' compliance status, performance metrics, and risk assessments all in one place.",
      features: ["Real-time Monitoring", "Risk Assessment", "Compliance Score"]
    },
    {
      src: "/images/documentation-demo.png",
      alt: "Documentation Generator",
      title: "Documentation Generator",
      description: "Generate comprehensive documentation for your ML/LLM models with our AI-powered documentation system.",
      features: ["AI-Powered", "Template Library", "Version Control"]
    },
    {
      src: "/images/enterprise-chatbot-demo.png",
      alt: "Enterprise Chatbot Demo",
      title: "Enterprise Chatbot",
      description: "Monitor and manage your enterprise chatbot deployments with advanced analytics and compliance tracking.",
      features: ["Conversation Analytics", "Compliance Tracking", "Performance Monitoring"]
    }
  ];

  // Initialize Google Analytics on app start
  useEffect(() => {
    analytics.initGA4();
    
    // Set initial user properties based on URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const userProperties = {
      utmSource: urlParams.get('utm_source'),
      utmMedium: urlParams.get('utm_medium'),
      utmCampaign: urlParams.get('utm_campaign')
    };
    
    // Only set properties if they exist
    if (Object.values(userProperties).some(value => value !== null)) {
      analytics.setUserProperties(userProperties);
    }
  }, []);

  // Set SEO for single page
  useEffect(() => {
    // Base URL
    const baseUrl = window.location.origin;
    
    // Update meta tags
    updateMetaTags({
      title: 'AI Governance Suite - Praesidium Systems',
      description: 'Praesidium Systems provides comprehensive AI governance, compliance testing, and documentation generation for ML and LLM models. Ensure regulatory compliance with automated monitoring and testing.',
      keywords: 'AI governance, compliance platform, ML monitoring, LLM compliance, AI risk management, AI documentation, regulatory compliance, AI testing',
      canonical: baseUrl,
      type: 'website'
    });
    
    // Add organization schema
    const organizationSchema = generateOrganizationSchema();
    addStructuredData(organizationSchema, 'organization-schema');
    
    // Add website schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Praesidium Systems",
      "url": baseUrl,
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
        },
        "query-input": "required name=search_term_string"
      }
    };
    addStructuredData(JSON.stringify(websiteSchema), 'website-schema');
    
    // Clean up
    return () => {
      removeStructuredData('organization-schema');
      removeStructuredData('website-schema');
    };
  }, []);

  // Intersection Observer for animations with analytics
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('section-hidden');
          entry.target.classList.add('section-visible');
          
          // Track section views
          const sectionId = entry.target.id;
          if (sectionId) {
            trackFeatureInteraction('section_view', 'scroll_into_view', sectionId);
          }
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
      if (section.id) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [trackFeatureInteraction]);

  // Enhanced contact click handler with analytics
  const handleContactClick = (source = 'unknown') => {
    analytics.trackContactRequest(source, 'demo_request');
    setIsContactPopupOpen(true);
  };

  // Enhanced team click handler with analytics
  const handleTeamClick = (source = 'hero') => {
    console.log('Team button clicked from:', source); // Debug log
    trackFeatureInteraction('team_view', 'click', source);
    setIsTeamPopupOpen(true);
    console.log('Team popup state set to true'); // Debug log
  };

  // Handle popup close with analytics
  const handleContactPopupClose = () => {
    console.log('Contact popup closing...'); // Debug log
    setIsContactPopupOpen(false);
    analytics.trackEvent('popup_close', {
      category: 'user_interaction',
      popup_type: 'contact'
    });
  };

  const handleTeamPopupClose = () => {
    console.log('Team popup closing...'); // Debug log
    setIsTeamPopupOpen(false);
    analytics.trackEvent('popup_close', {
      category: 'user_interaction',
      popup_type: 'team'
    });
  };

  // Global error boundary for analytics
  useEffect(() => {
    const handleError = (event) => {
      analytics.trackError(event.error, window.location.pathname);
    };

    const handleUnhandledRejection = (event) => {
      analytics.trackError(new Error(event.reason), window.location.pathname);
    };

    // Listen for custom event from Footer to open contact popup
    const handleOpenContactPopup = () => {
      setIsContactPopupOpen(true);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);
    window.addEventListener('openContactPopup', handleOpenContactPopup);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      window.removeEventListener('openContactPopup', handleOpenContactPopup);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={(source) => handleContactClick(source || 'header')} />
      
      <main>
        <HeroSection 
          onShowTeam={() => handleTeamClick('hero')}
          onContactClick={() => handleContactClick('hero')}
        />
        <ProductsSection onProductClick={(product) => analytics.trackProductView(product, 'homepage')} />
        <ScreenshotShowcase screenshots={dashboardScreenshots} title="Experience Our Powerful Platform" description="Dive deep into our comprehensive AI governance solution" />
        <FeaturesSection onFeatureClick={(feature) => trackFeatureInteraction('feature_click', 'click', feature)} />
        <FeatureBenefitsSection />
        <HowItWorksSection />
        <IntegrationBenefitsSection />
        <DeploymentSection onDeploymentClick={(type) => trackDeploymentInterest(type)} />
        <TeamSection onShowTeam={() => handleTeamClick('team_section')} />
        <CTASection onContactClick={() => handleContactClick('cta')} />
      </main>
      
      <Footer />

      {/* Contact Popup - Single CEO */}
      <ContactPopup 
        isOpen={isContactPopupOpen} 
        onClose={handleContactPopupClose}
        showTeam={false}
      />
      
      {/* Team Popup - Both Founders */}
      <ContactPopup 
        isOpen={isTeamPopupOpen} 
        onClose={handleTeamPopupClose}
        showTeam={true}
      />
    </div>
  );
}

export default App;