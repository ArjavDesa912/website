import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Original components
import { Header } from './components/Header';
import { 
  HeroSection,
  ProductsSection,
  FeaturesSection,
  HowItWorksSection,
  IntegrationBenefitsSection,
  DeploymentSection,
  DockerSection,
  CTASection 
} from './components/Sections';
import { Footer } from './components/Footer';
import ContactPopup from './components/ContactPopup';

// Page components
import ComplianceFrameworkPage from './pages/ComplianceFrameworkPage';
import DocumentationGeneratorPage from './pages/DocumentationGeneratorPage';
import ComplianceTestingPage from './pages/ComplianceTestingPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

// SEO helpers
import { 
  updateMetaTags, 
  generateOrganizationSchema, 
  addStructuredData,
  removeStructuredData
} from './utils/seoHelpers';

// Home page component
const HomePage = ({ onContactClick, onTeamClick }) => {
  // Set SEO for homepage
  useEffect(() => {
    // Base URL
    const baseUrl = window.location.origin;
    
    // Update meta tags
    updateMetaTags({
      title: 'AI Governance Suite',
      description: 'Praesidium Systems provides comprehensive governance for ML and LLM models. Our platform helps organizations monitor, audit, and ensure regulatory compliance for AI models.',
      keywords: 'AI governance, compliance platform, ML monitoring, LLM compliance, AI risk management, AI documentation, regulatory compliance',
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

  // Intersection Observer for animations
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
  }, []);

  return (
    <>
      <Header onContactClick={onContactClick} />
      <main>
        <HeroSection onShowTeam={onTeamClick} />
        <ProductsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <IntegrationBenefitsSection />
        <DeploymentSection />
        <DockerSection />
        <CTASection onContactClick={onContactClick} />
      </main>
      <Footer />
    </>
  );
};

function App() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [isTeamPopupOpen, setIsTeamPopupOpen] = useState(false);

  // Handle opening the contact popup
  const handleContactClick = () => {
    setIsContactPopupOpen(true);
  };

  // Handle opening the team popup
  const handleTeamClick = () => {
    setIsTeamPopupOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Routes>
          <Route 
            path="/" 
            element={<HomePage onContactClick={handleContactClick} onTeamClick={handleTeamClick} />} 
          />
          <Route 
            path="/products/compliance-framework" 
            element={<ComplianceFrameworkPage />} 
          />
          <Route 
            path="/products/documentation-generator" 
            element={<DocumentationGeneratorPage />} 
          />
          <Route 
            path="/products/compliance-testing" 
            element={<ComplianceTestingPage />} 
          />
          <Route 
            path="/blog" 
            element={<BlogPage />} 
          />
          <Route 
            path="/blog/:id" 
            element={<BlogPostPage />} 
          />
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Contact Popup - Single CEO */}
        <ContactPopup 
          isOpen={isContactPopupOpen} 
          onClose={() => setIsContactPopupOpen(false)} 
          showTeam={false}
        />
        
        {/* Team Popup - Both Founders */}
        <ContactPopup 
          isOpen={isTeamPopupOpen} 
          onClose={() => setIsTeamPopupOpen(false)} 
          showTeam={true}
        />
      </div>
    </Router>
  );
}

export default App;