// src/pages/ProductPage.jsx - Updated with Calendly
import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, CheckCircle, ChevronRight, Calendar } from 'lucide-react';
import { scrollToSection } from '../utils/scrollUtils';
import { 
  updateMetaTags, 
  generateProductSchema, 
  addStructuredData, 
  removeStructuredData 
} from '../utils/seoHelpers';

const ProductPage = ({ 
  title, 
  subtitle, 
  description,
  features,
  benefits,
  heroImage,
  ctaText = "Request Demo",
  keywords
}) => {
  const handleContactClick = () => {
    console.log("Contact button clicked");
    scrollToSection('contact');
  };

  const handleScheduleMeeting = () => {
    window.open('https://calendly.com/arjav-desai-praesidiumsystems/30min', '_blank');
  };
  
  useEffect(() => {
    const baseUrl = window.location.origin;
    const productSlug = title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
    const canonicalUrl = `${baseUrl}/products/${productSlug}`;
    
    updateMetaTags({
      title,
      description: subtitle,
      keywords: keywords || `${title}, AI governance, compliance platform, Praesidium Systems`,
      canonical: canonicalUrl,
      imageUrl: heroImage.startsWith('http') ? heroImage : `${baseUrl}${heroImage}`,
      type: 'product'
    });
    
    const productData = {
      title,
      description,
      image: heroImage,
      features: features.map(f => f.title)
    };
    const productSchema = generateProductSchema(productData);
    addStructuredData(productSchema, 'product-schema');
    
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Praesidium Systems",
      "url": baseUrl,
      "logo": `${baseUrl}/images/praesidium-logo.png`,
      "description": "AI Governance and Compliance Platform for enterprise organizations"
    };
    addStructuredData(JSON.stringify(organizationSchema), 'organization-schema');
    
    return () => {
      removeStructuredData('product-schema');
      removeStructuredData('organization-schema');
    };
  }, [title, subtitle, description, heroImage, features, keywords]);
  
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
                    onClick={handleScheduleMeeting}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    aria-label="Schedule Demo"
                  >
                    <Calendar className="h-5 w-5" />
                    Schedule Demo
                  </button>
                  <button 
                    onClick={handleContactClick}
                    className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                    aria-label="Start Free Trial"
                  >
                    Start Free Trial
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('features')}
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors flex items-center justify-center"
                    aria-label="Explore Features"
                  >
                    Explore Features
                  </button>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={heroImage} 
                  alt={`${title} Dashboard - Praesidium Systems`} 
                  className="rounded-lg shadow-xl border border-gray-200"
                  width="800"
                  height="500"
                  loading="eager"
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
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                  itemScope
                  itemType="https://schema.org/ItemList"
                >
                  <meta itemProp="position" content={index + 1} />
                  <div className="inline-block p-3 bg-blue-100 rounded-lg text-blue-600 mb-4">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3" itemProp="name">{feature.title}</h3>
                  <p className="text-gray-600" itemProp="description">
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
                <div 
                  key={index} 
                  className="flex items-start gap-4 mb-8"
                  itemScope
                  itemType="https://schema.org/ItemList"
                >
                  <meta itemProp="position" content={index + 1} />
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" itemProp="name">{benefit.title}</h3>
                    <p className="text-gray-700" itemProp="description">{benefit.description}</p>
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScheduleMeeting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-100 transition-colors font-medium"
                aria-label="Schedule Demo"
              >
                <Calendar className="h-4 w-4" />
                Schedule Demo
              </button>
              <button 
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium"
                aria-label="Start Free Trial"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;