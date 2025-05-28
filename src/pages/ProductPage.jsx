import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';
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
  // Contact popup state would typically be managed in App.js
  // and passed down, but we'll simulate the behavior here
  const handleContactClick = () => {
    // In a real implementation, this would open the contact popup
    console.log("Contact button clicked");
    // For now, let's just scroll to contact section
    scrollToSection('contact');
  };
  
  // SEO optimization
  useEffect(() => {
    // Define meta tags
    const baseUrl = window.location.origin;
    const productSlug = title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
    const canonicalUrl = `${baseUrl}/products/${productSlug}`;
    
    // Update meta tags
    updateMetaTags({
      title,
      description: subtitle,
      keywords: keywords || `${title}, AI governance, compliance platform, Praesidium Systems`,
      canonical: canonicalUrl,
      imageUrl: heroImage.startsWith('http') ? heroImage : `${baseUrl}${heroImage}`,
      type: 'product'
    });
    
    // Generate product schema
    const productData = {
      title,
      description,
      image: heroImage,
      features: features.map(f => f.title)
    };
    const productSchema = generateProductSchema(productData);
    addStructuredData(productSchema, 'product-schema');
    
    // Add organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Praesidium Systems",
      "url": baseUrl,
      "logo": `${baseUrl}/images/praesidium-logo.png`,
      "description": "AI Governance and Compliance Platform for enterprise organizations"
    };
    addStructuredData(JSON.stringify(organizationSchema), 'organization-schema');
    
    // Clean up when component unmounts
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
                    onClick={handleContactClick}
                    className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    aria-label={ctaText}
                  >
                    {ctaText}
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
        
        {/* FAQ Section for SEO */}
        <section id="faq" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Common questions about {title}
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div 
                className="divide-y divide-gray-200"
                itemScope
                itemType="https://schema.org/FAQPage"
              >
                <div 
                  className="py-6"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" itemProp="name">
                    How does {title} integrate with existing AI systems?
                  </h3>
                  <div
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      <p className="text-gray-700">
                        {title} offers flexible integration options through APIs, SDKs, and direct connectors with all major AI providers including OpenAI, Anthropic, Google, AWS, and Azure. Our platform can be deployed as a lightweight monitoring layer without requiring changes to your existing AI infrastructure.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="py-6"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" itemProp="name">
                    What regulatory frameworks does {title} support?
                  </h3>
                  <div
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      <p className="text-gray-700">
                        Our platform includes built-in support for major regulatory frameworks including the EU AI Act, NIST AI Risk Management Framework, ISO 42001, and industry-specific regulations such as those for financial services, healthcare, and government use cases. The platform is regularly updated as new regulations emerge.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="py-6"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" itemProp="name">
                    How quickly can we deploy {title} in our organization?
                  </h3>
                  <div
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      <p className="text-gray-700">
                        Most organizations can deploy {title} within 2-4 weeks. Our platform offers rapid deployment options including cloud-hosted SaaS, on-premises installation, and VPC deployment. Our implementation team provides comprehensive onboarding support to ensure a smooth rollout tailored to your specific organizational needs.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div 
                  className="py-6"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2" itemProp="name">
                    Is {title} suitable for both small teams and enterprise organizations?
                  </h3>
                  <div
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <div itemProp="text">
                      <p className="text-gray-700">
                        Yes, {title} is designed to scale from small AI teams to enterprise-wide deployments. We offer flexible pricing tiers based on usage volume and feature requirements. The platform's modular architecture allows organizations to start with core compliance needs and expand functionality as their AI governance requirements mature.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
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
              aria-label="Request Demo"
            >
              Request Demo
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>
        
        {/* Testimonials Section for Social Proof */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Organizations across industries trust {title} for their AI governance needs
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    FT
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold" itemProp="author">Financial Tech Inc.</h4>
                    <p className="text-gray-600 text-sm">Director of AI Governance</p>
                  </div>
                </div>
                <div itemProp="reviewBody">
                  <p className="text-gray-700">
                    "{title} has transformed our AI compliance processes. We're now able to identify potential issues before they affect our customers, saving us time and resources while maintaining the highest standards of regulatory compliance."
                  </p>
                </div>
                <div className="mt-4 flex">
                  <span className="text-yellow-500">★★★★★</span>
                  <meta itemProp="reviewRating" content="5" />
                </div>
              </div>
              
              <div 
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                itemScope
                itemType="https://schema.org/Review"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                    HC
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold" itemProp="author">HealthCare Solutions</h4>
                    <p className="text-gray-600 text-sm">Chief Compliance Officer</p>
                  </div>
                </div>
                <div itemProp="reviewBody">
                  <p className="text-gray-700">
                    "With stringent HIPAA requirements, we needed a solution that could ensure our AI models maintain compliance. {title} delivers this with unprecedented visibility and control over our AI systems, helping us maintain patient trust and regulatory compliance."
                  </p>
                </div>
                <div className="mt-4 flex">
                  <span className="text-yellow-500">★★★★★</span>
                  <meta itemProp="reviewRating" content="5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductPage;