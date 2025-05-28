import React, { useEffect } from 'react';
import { X, Mail, Calendar, Sparkles } from 'lucide-react';

const ContactPopup = ({ isOpen, onClose, showTeam = false }) => {
  // Co-founders data
  const founders = [
    {
      name: "Arjav Desai",
      role: "Co-Founder & CEO",
      email: "arjav.desai@praesidiumsystems.ai",
      photo: "/images/arjav.png"
    },
    {
      name: "Samuel Heidler",
      role: "Co-Founder & CTO",
      email: "sam.heidler@praesidiumsystems.ai",
      photo: "/images/sam.png"
    }
  ];

  // Track popup view when opened
  useEffect(() => {
    if (isOpen && typeof window !== 'undefined' && window.gtag) {
      const popupType = showTeam ? 'team' : 'contact';
      
      // Track popup view
      window.gtag('event', 'popup_view', {
        event_category: 'user_interaction',
        popup_type: popupType,
        value: 1
      });
    }
  }, [isOpen, showTeam]);

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
  const handleScheduleDemoClick = () => {
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

  // If popup is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-effect rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border-gradient">
        <div className="flex justify-between items-center p-8 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-accent-gold" />
            <h3 className="text-2xl font-bold text-white">
              {showTeam ? "Meet Our Leadership Team" : "Contact Us"}
            </h3>
          </div>
          <button 
            onClick={() => handleClose('x_button')}
            className="text-gray-400 hover:text-accent-gold transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
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
                    <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl group-hover:bg-accent-gold/30 transition-all duration-500"></div>
                    <img 
                      src={person.photo} 
                      alt={person.name} 
                      className="relative w-48 h-48 object-cover rounded-full border-2 border-gray-700 group-hover:border-accent-gold transition-all duration-500 cursor-pointer"
                      onClick={() => handleProfileClick(person.name, person.role)}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{person.name}</h4>
                  <p className="text-accent-gold mb-4 font-medium">{person.role}</p>
                  <div className="flex items-center text-gray-300 hover:text-accent-gold transition-colors duration-300 cursor-pointer">
                    <Mail className="h-4 w-4 mr-2" />
                    <a 
                      href={`mailto:${person.email}`} 
                      className="hover:text-accent-gold transition-colors"
                      onClick={() => handleEmailClick(person.email, `team_${person.name.toLowerCase().replace(' ', '_')}`)}
                    >
                      {person.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show only CEO for regular contact popup
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-accent-gold/20 rounded-full blur-xl group-hover:bg-accent-gold/30 transition-all duration-500"></div>
                <img 
                  src={founders[0].photo} 
                  alt={founders[0].name} 
                  className="relative w-40 h-40 object-cover rounded-full border-2 border-gray-700 group-hover:border-accent-gold transition-all duration-500 cursor-pointer"
                  onClick={() => handleProfileClick(founders[0].name, founders[0].role)}
                />
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h4 className="text-2xl font-bold text-white mb-2">{founders[0].name}</h4>
                <p className="text-accent-gold mb-6 text-lg font-medium">{founders[0].role}</p>
                <div className="flex items-center justify-center lg:justify-start text-gray-300 hover:text-accent-gold transition-colors duration-300 mb-6">
                  <Mail className="h-5 w-5 mr-3" />
                  <a 
                    href={`mailto:${founders[0].email}`} 
                    className="hover:text-accent-gold transition-colors text-lg"
                    onClick={() => handleEmailClick(founders[0].email, 'ceo_profile')}
                  >
                    {founders[0].email}
                  </a>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Thank you for your interest in Praesidium Systems. I'm personally committed to ensuring 
                  your AI systems meet all regulatory requirements. Let's discuss how we can help your organization 
                  achieve comprehensive AI governance.
                </p>
              </div>
            </div>
          )}
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h4 className="font-bold mb-6 text-white text-xl text-center">Get in Touch</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
              <a 
                href="mailto:arjav.desai@praesidiumsystems.ai" 
                className="btn-primary px-6 py-3 rounded-full flex items-center justify-center gap-3 group"
                onClick={() => handleEmailClick('arjav.desai@praesidiumsystems.ai', 'cta_button')}
              >
                <Mail className="h-5 w-5" />
                <span className="font-semibold">Send Email</span>
              </a>
              <button 
                onClick={handleScheduleDemoClick}
                className="btn-secondary px-6 py-3 rounded-full flex items-center justify-center gap-3 group"
              >
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Schedule Demo</span>
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-8 mt-8 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                <span>Response within 24h</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
                <span>Enterprise Ready</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-accent-gold rounded-full"></div>
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