import React from 'react';
import { TestimonialCard } from '../UI';

const TestimonialsSection = () => {
  const testimonials = [
    {
      initials: "FT",
      company: "Financial Tech Inc.",
      role: "Director of AI Governance",
      testimonial: "Praesidium has transformed our AI compliance processes. We're now able to identify potential issues before they affect our customers, saving us time and resources."
    },
    {
      initials: "HC",
      company: "HealthCare Solutions",
      role: "Chief Compliance Officer",
      testimonial: "With stringent HIPAA requirements, we needed a solution that could ensure our AI models maintain compliance. Praesidium delivers this with unprecedented visibility and control."
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 section-hidden transition-opacity duration-1000">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers say about Praesidium Compliance Systems
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              initials={testimonial.initials}
              company={testimonial.company}
              role={testimonial.role}
              testimonial={testimonial.testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;