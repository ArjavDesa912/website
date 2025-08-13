// src/components/ContactPopup.jsx - Added Calendly links
import React, { useEffect, useState } from 'react';
import { X, Mail, Calendar } from 'lucide-react';

// Add Sparkles icon if needed, for now create a simple version
const Sparkles = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z"/>
    <path d="M19 5l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/>
  </svg>
);

const ContactPopup = ({ isOpen, onClose, showTeam = false }) => {
  const [scrollY, setScrollY] = useState(0);
  const [, setViewportHeight] = useState(0); // Removed unused variable name

  // Co-founders data
  const founders = [
    {
      name: "Arjav Desai",
      role: "Co-Founder & CEO",
      email: "sales@contact.praesidiumsystems.ai",
      photo: "/images/arjav.png",
      calendly: "https://calendly.com/arjav-desai-praesidiumsystems/30min"
    },
    {
      name: "Samuel Heidler",
      role: "Co-Founder & CTO",
      email: "sam.heidler@praesidiumsystems.ai",
      photo: "/images/sam.png",
      calendly: "https://calendly.com/arjav-desai-praesidiumsystems/30min" // Using same Calendly for now
    }
  ];

  // Capture scroll position and viewport height when popup opens
  useEffect(() => {
    if (isOpen) {
      const currentScrollY = window.scrollY;
      const currentViewportHeight = window.innerHeight;
      setScrollY(currentScrollY);
      setViewportHeight(currentViewportHeight);
      
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = '100%';
      
      // Track popup view
      if (typeof window !== 'undefined' && window.gtag) {
        const popupType = showTeam ? 'team' : 'contact';
        
        window.gtag('event', 'popup_view', {
          event_category: 'user_interaction',
          popup_type: popupType,
          value: 1
        });
      }
    } else {
      // Restore body scroll when popup closes
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position
      if (scrollY > 0) {
        window.scrollTo(0, scrollY);
      }
    }

    // Cleanup function to restore scroll
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isOpen, scrollY, showTeam]); // Fixed: Added all dependencies

  // Handle email click with analytics
  const handleEmailClick = (email, source = 'popup') => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Track contact request
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        lead_type: 'email_click',
        source: source,
        value: 1
      });

      // Track specific email interaction
      window.gtag('event', 'email_click', {
        event_category: 'contact',
        email: email,
        source: source
      });
    }
  };

  // Handle schedule demo click with analytics
  const handleScheduleDemoClick = (calendlyUrl = "https://calendly.com/arjav-desai-praesidiumsystems/30min") => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Track demo request
      window.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        lead_type: 'schedule_demo',
        source: 'popup',
        value: 1
      });

      // Track schedule demo interaction
      window.gtag('event', 'schedule_demo_click', {
        event_category: 'conversion',
        source: 'popup'
      });
    }
    
    // Open Calendly in new tab
    window.open(calendlyUrl, '_blank');
    
    // Close popup after tracking
    onClose();
  };

  // Handle profile image click
  const handleProfileClick = (personName, role) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'profile_click', {
        event_category: showTeam ? 'team_engagement' : 'contact_engagement',
        person: personName,
        role: role
      });
    }
  };

  // Handle popup close with analytics
  const handleClose = (method = 'x_button') => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'popup_close', {
        event_category: 'user_interaction',
        popup_type: showTeam ? 'team' : 'contact',
        close_method: method
      });
    }
    onClose();
  };

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose('backdrop_click');
    }
  };

  // If popup is not open, don't render anything
  if (!isOpen) return null;

  // Calculate positioning to center popup in current viewport
  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
    maxHeight: '90vh',
    overflowY: 'auto'
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      style={{ zIndex: 9998 }}
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl border border-gray-200 relative max-h-[90vh] overflow-y-auto"
        style={popupStyle}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <div className="flex justify-between items-center p-8 border-b border-gray-200 sticky top-0 bg-white rounded-t-2xl">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-gray-900">
              {showTeam ? "Meet Our Leadership Team" : "Contact Us"}
            </h3>
          </div>
          <button 
            onClick={() => handleClose('x_button')}
            className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-8">
          {showTeam ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {founders.map((person, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
                    <img 
                      src={person.photo} 
                      alt={person.name} 
                      className="relative w-48 h-48 object-cover rounded-full border-2 border-gray-200 group-hover:border-blue-500 transition-all duration-500 cursor-pointer shadow-lg"
                      onClick={() => handleProfileClick(person.name, person.role)}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h4>
                  <p className="text-blue-600 font-medium mb-4">{person.role}</p>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                      <Mail className="h-4 w-4 mr-2" />
                      <a 
                        href={`mailto:${person.email}`} 
                        className="hover:text-blue-600 transition-colors"
                        onClick={() => handleEmailClick(person.email, `team_${person.name.toLowerCase().replace(' ', '_')}`)}
                      >
                        {person.email}
                      </a>
                    </div>
                    <button
                      onClick={() => handleScheduleDemoClick(person.calendly)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                      <Calendar className="h-4 w-4" />
                      Schedule Meeting
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show only CEO for regular contact popup
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-500"></div>
                <img 
                  src={founders[0].photo} 
                  alt={founders[0].name} 
                  className="relative w-40 h-40 object-cover rounded-full border-2 border-gray-200 group-hover:border-blue-500 transition-all duration-500 cursor-pointer shadow-lg"
                  onClick={() => handleProfileClick(founders[0].name, founders[0].role)}
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{founders[0].name}</h4>
                <p className="text-lg text-blue-600 font-medium mb-6">{founders[0].role}</p>
                <div className="flex flex-col items-center lg:items-start gap-4 mb-6">
                  <div className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                    <Mail className="h-5 w-5 mr-3" />
                    <a 
                      href={`mailto:${founders[0].email}`} 
                      className="hover:text-blue-600 transition-colors text-lg"
                      onClick={() => handleEmailClick(founders[0].email, 'ceo_profile')}
                    >
                      {founders[0].email}
                    </a>
                  </div>
                  <button
                    onClick={() => handleScheduleDemoClick(founders[0].calendly)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule Meeting
                  </button>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Thank you for your interest in Praesidium Systems. I'm personally committed to ensuring 
                  your AI systems meet all regulatory requirements. Let's discuss how we can help your organization 
                  achieve comprehensive AI governance.
                </p>
              </div>
            </div>
          )}
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="font-bold mb-6 text-gray-900 text-xl text-center">Get in Touch</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
              <a 
                href="mailto:sales@contact.praesidiumsystems.ai" 
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center gap-3 group hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
                onClick={() => handleEmailClick('sales@contact.praesidiumsystems.ai', 'cta_button')}
              >
                <Mail className="h-5 w-5" />
                <span>Send Email</span>
              </a>
              <button 
                onClick={() => handleScheduleDemoClick()}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center gap-3 group hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
              >
                <Calendar className="h-5 w-5" />
                <span>Schedule Demo</span>
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Response within 24h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span>SOC 2 Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;