import React from 'react';
import { X, Mail } from 'lucide-react';

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

  // If popup is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-bold text-gray-900">
            {showTeam ? "Meet Our Leadership Team" : "Contact Us"}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          {showTeam ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {founders.map((person, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img 
                    src={person.photo} 
                    alt={person.name} 
                    className="w-40 h-40 object-cover rounded-full mb-4"
                  />
                  <h4 className="text-lg font-bold">{person.name}</h4>
                  <p className="text-blue-600 mb-2">{person.role}</p>
                  <div className="flex items-center text-gray-700">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${person.email}`} className="hover:text-blue-600">
                      {person.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Show only CEO for regular contact popup
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <img 
                src={founders[0].photo} 
                alt={founders[0].name} 
                className="w-32 h-32 object-cover rounded-full"
              />
              <div>
                <h4 className="text-lg font-bold">{founders[0].name}</h4>
                <p className="text-blue-600 mb-4">{founders[0].role}</p>
                <div className="flex items-center text-gray-700 mb-4">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href={`mailto:${founders[0].email}`} className="hover:text-blue-600">
                    {founders[0].email}
                  </a>
                </div>
                <p className="text-gray-600">
                  Thank you for your interest in Praesidium Systems. I'm personally committed to ensuring your AI systems meet all regulatory requirements. Let's discuss how we can help your organization.
                </p>
              </div>
            </div>
          )}
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h4 className="font-bold mb-3">Get in Touch</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="mailto:arjav.desai@praesidiumsystems.ai" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
              <button 
                onClick={onClose}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;