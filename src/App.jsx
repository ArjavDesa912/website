import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { 
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  DeploymentSection,
  DockerSection,
  CTASection 
} from './components/Sections';
import { Footer } from './components/Footer';
import ContactPopup from './components/ContactPopup';

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

  // Pass contact handler to Header component
  const headerProps = {
    onContactClick: handleContactClick
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header {...headerProps} />
      <main>
        <HeroSection onShowTeam={handleTeamClick} />
        <FeaturesSection />
        <HowItWorksSection />
        <DeploymentSection />
        <DockerSection />
        <CTASection onContactClick={handleContactClick} />
      </main>
      <Footer />

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
  );
}

export default App;