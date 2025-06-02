// src/App.jsx - Updated with component removals
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Original components
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

// Updated page components - NEW PRODUCT PAGES
import ComplianceTestingFrameworkPage from './pages/ComplianceTestingFrameworkPage';
import LLMDocumentationGeneratorPage from './pages/LLMDocumentationGeneratorPage';
import AITestingPromptGeneratorPage from './pages/AITestingPromptGeneratorPage';
import EnterpriseAIChatbotPage from './pages/EnterpriseAIChatbotPage';
// Blog components
import BlogPage from './blog/pages/BlogPage';
import BlogPostPage from './blog/pages/BlogPostPage';

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

// Home page component with analytics integration
const HomePage = ({ onContactClick, onTeamClick }) => {
  const { trackFeatureInteraction, trackDeploymentInterest, trackIntegrationInterest } = useAnalytics();

  // Set SEO for homepage
  useEffect(() => {
    // Base URL
    const baseUrl = window.location.origin;
    
    // Update meta tags
    updateMetaTags({
      title: 'AI Governance Suite',
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
          "urlTemplate": `${baseUrl}/blog?search={search_term_string}`
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
    onContactClick();
  };

  // Enhanced team click handler with analytics
  const handleTeamClick = (source = 'hero') => {
    trackFeatureInteraction('team_view', 'click', source);
    onTeamClick();
  };

  return (
    <>
      <Header onContactClick={(source) => handleContactClick(source || 'header')} />
      <main>
        <HeroSection 
          onShowTeam={() => handleTeamClick('hero')}
          onContactClick={() => handleContactClick('hero')}
        />
        <ProductsSection onProductClick={(product) => analytics.trackProductView(product, 'homepage')} />
        <FeaturesSection onFeatureClick={(feature) => trackFeatureInteraction('feature_click', 'click', feature)} />
        <IntegrationBenefitsSection />
        <DeploymentSection onDeploymentClick={(type) => trackDeploymentInterest(type)} />
        <CTASection onContactClick={() => handleContactClick('cta')} />
      </main>
      <Footer />
    </>
  );
};

function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isTeamPopupOpen, setIsTeamPopupOpen] = useState(false);

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

  // Handle opening the contact popup
  const handleContactClick = () => {
    setIsContactPopupOpen(true);
  };

  // Handle opening the team popup
  const handleTeamClick = () => {
    setIsTeamPopupOpen(true);
  };

  // Handle popup close with analytics
  const handleContactPopupClose = () => {
    setIsContactPopupOpen(false);
    analytics.trackEvent('popup_close', {
      category: 'user_interaction',
      popup_type: 'contact'
    });
  };

  const handleTeamPopupClose = () => {
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

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onContactClick={handleContactClick} onTeamClick={handleTeamClick} />} 
          />
          
          {/* Updated Product Pages - NEW ROUTES */}
          <Route 
            path="/products/compliance-testing-framework" 
            element={<ComplianceTestingFrameworkPage />} 
          />
          <Route 
            path="/products/llm-documentation-generator" 
            element={<LLMDocumentationGeneratorPage />} 
          />
          <Route 
            path="/products/ai-testing-prompt-generator" 
            element={<AITestingPromptGeneratorPage />} 
          />
          
          <Route 
            path="/products/enterprise-ai-chatbot" 
            element={<EnterpriseAIChatbotPage />} 
          />
                    
          {/* Blog Pages */}
          <Route 
            path="/blog" 
            element={<BlogPage />} 
          />
          <Route 
            path="/blog/:slug" 
            element={<BlogPostPage />} 
          />
          
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

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
    </Router>
  );
}

export default App;