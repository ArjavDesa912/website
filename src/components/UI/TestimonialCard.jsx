import React from 'react';

const TestimonialCard = ({ initials, company, role, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
          {initials}
        </div>
        <div className="ml-4">
          <h4 className="font-bold">{company}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">
        {testimonial}
      </p>
    </div>
  );
};

export default TestimonialCard;