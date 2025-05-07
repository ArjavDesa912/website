import React from 'react';
import { Users } from 'lucide-react';

const TeamSection = ({ onShowTeam }) => {
  return (
    <section 
      id="team" 
      className="py-16 bg-white section-hidden transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Backed by Industry Experts</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Our team brings decades of experience in AI, compliance, and regulatory frameworks
        </p>
        <button 
          onClick={onShowTeam}
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 mx-auto"
        >
          <Users className="h-5 w-5" />
          Meet Our Leadership Team
        </button>
      </div>
    </section>
  );
};

export default TeamSection;