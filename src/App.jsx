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

// New Page components
import ComplianceFrameworkPage from './pages/ComplianceFrameworkPage';
import DocumentationGeneratorPage from './pages/DocumentationGeneratorPage';
import ComplianceTestingPage from './pages/ComplianceTestingPage';
import BlogPage from './pages/BlogPage';

// Home page component
const HomePage = ({ onContactClick, onTeamClick }) => {
  useEffect(() => {
    // Intersection Observer for animations
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