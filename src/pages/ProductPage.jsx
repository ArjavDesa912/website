import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';

const ProductPage = ({ 
  title, 
  subtitle, 
  description,
  features,
  benefits,
  heroImage,
  ctaText = "Request Demo"
}) => {
  // Contact popup state would typically be managed in App.js
  // and passed down, but we'll simulate the behavior here
  const handleContactClick = () => {
    // In a real implementation, this would open the contact popup
    console.log("Contact button clicked");
    // For now, let's just scroll to contact section
    scrollToSection('contact');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  {title}
                </h1>
                <p className="text-xl text-gray-600">
                  {subtitle}
                </p>
                <p className="text-lg text-gray-700 max-w-lg">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleContactClick}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    {ctaText}
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center"
                  >
                    Explore Features
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={heroImage} 
                  alt={`${title} Dashboard`} 
                  className="rounded-lg shadow-xl border border-gray-200"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how {title} can transform your AI governance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="inline-block p-3 bg-blue-100 rounded-lg text-blue-600 mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How {title} delivers value to your organization
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 mb-8">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section id="product-cta" className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to get started with {title}?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Contact our team today for a personalized demo and discover how our platform can help your organization.
            </p>
            <button 
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-medium"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;