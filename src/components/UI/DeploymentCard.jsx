import React from 'react';
import { ChevronRight } from 'lucide-react';
import { scrollToSection } from '../../utils/scrollUtils';

const DeploymentCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all">
      <div className="mb-4 text-blue-600">
        <Icon className="h-10 w-10" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">
        {description}
      </p>
      <button 
        onClick={() => scrollToSection('contact')} 
        className="text-blue-600 font-medium flex items-center gap-1 hover:gap-2 transition-all"
      >
        Learn more
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default DeploymentCard;