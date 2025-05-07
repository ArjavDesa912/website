import React from 'react';

const CTASection = () => {
  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white section-hidden transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Ensure AI Compliance?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
          Get in touch with our team for a personalized demo and discover how our platform can help your organization maintain regulatory integrity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-medium">
            Request Demo
          </button>
          <button className="px-8 py-3 bg-transparent border border-white text-white rounded-full hover:bg-white/10 transition-colors font-medium">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;