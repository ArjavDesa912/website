/**
 * SEO Helpers for Praesidium Systems Web Application
 * 
 * This utility provides functions to generate meta tags and structured data
 * for better search engine optimization across the application.
 */

/**
 * Updates document title and meta tags for a page
 * @param {Object} options - Configuration options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} [options.keywords] - Keywords for meta tag
 * @param {string} [options.canonical] - Canonical URL
 * @param {string} [options.imageUrl] - Social sharing image URL
 * @param {string} [options.type='website'] - Open Graph type (website, article, etc.)
 */
export const updateMetaTags = ({
  title,
  description,
  keywords,
  canonical,
  imageUrl = '/images/praesidium-social.png',
  type = 'website'
}) => {
  // Update document title
  document.title = `${title} | Praesidium Systems - AI Compliance Simplified`;
  
  // Find or create meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', description);
  
  // Update or create keywords meta tag
  if (keywords) {
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);
  }
  
  // Update or create canonical link
  if (canonical) {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
  }
  
  // Open Graph meta tags
  updateOpenGraphTags({
    title,
    description,
    imageUrl,
    url: canonical,
    type
  });
  
  // Twitter Card meta tags
  updateTwitterCardTags({
    title,
    description,
    imageUrl
  });
};

/**
 * Updates Open Graph meta tags for social sharing
 * @param {Object} options - Open Graph properties
 */
export const updateOpenGraphTags = ({
  title,
  description,
  imageUrl,
  url,
  type = 'website'
}) => {
  // Helper function to set Open Graph tags
  const setOgTag = (property, content) => {
    if (!content) return;
    
    let tag = document.querySelector(`meta[property="og:${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', `og:${property}`);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };
  
  // Set Open Graph tags
  setOgTag('title', title);
  setOgTag('description', description);
  setOgTag('image', imageUrl);
  setOgTag('url', url);
  setOgTag('type', type);
  setOgTag('site_name', 'Praesidium Systems');
};

/**
 * Updates Twitter Card meta tags for Twitter sharing
 * @param {Object} options - Twitter Card properties
 */
export const updateTwitterCardTags = ({
  title,
  description,
  imageUrl
}) => {
  // Helper function to set Twitter Card tags
  const setTwitterTag = (name, content) => {
    if (!content) return;
    
    let tag = document.querySelector(`meta[name="twitter:${name}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', `twitter:${name}`);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };
  
  // Set Twitter Card tags
  setTwitterTag('card', 'summary_large_image');
  setTwitterTag('title', title);
  setTwitterTag('description', description);
  setTwitterTag('image', imageUrl);
  setTwitterTag('site', '@PraesidiumSys');
};

/**
 * Generates JSON-LD structured data for a blog post
 * @param {Object} post - Blog post data
 * @returns {string} JSON-LD script tag content as a string
 */
export const generateBlogPostSchema = (post) => {
  const baseUrl = window.location.origin;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`,
    "datePublished": post.date,
    "dateModified": post.date, // Assuming last modified is same as published date
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Praesidium Systems",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/praesidium-logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.id}`
    },
    "keywords": post.category
  };
  
  return JSON.stringify(schema);
};

/**
 * Generates JSON-LD structured data for a product page
 * @param {Object} product - Product data
 * @returns {string} JSON-LD script tag content as a string
 */
export const generateProductSchema = (product) => {
  const baseUrl = window.location.origin;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": product.title,
    "description": product.description,
    "image": product.image.startsWith('http') ? product.image : `${baseUrl}${product.image}`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": window.location.href
    },
    "publisher": {
      "@type": "Organization",
      "name": "Praesidium Systems",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/images/praesidium-logo.png`
      }
    }
  };
  
  return JSON.stringify(schema);
};

/**
 * Generates JSON-LD structured data for the organization
 * @returns {string} JSON-LD script tag content as a string
 */
export const generateOrganizationSchema = () => {
  const baseUrl = window.location.origin;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Praesidium Systems",
    "url": baseUrl,
    "logo": `${baseUrl}/images/praesidium-logo.png`,
    "description": "AI Governance and Compliance Platform for enterprise organizations",
    "sameAs": [
      "https://twitter.com/PraesidiumSys",
      "https://www.linkedin.com/company/praesidium-systems",
      "https://github.com/praesidium-systems"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-PRAESIDIUM",
      "contactType": "customer service",
      "email": "info@praesidiumsystems.ai"
    }
  };
  
  return JSON.stringify(schema);
};

/**
 * Adds JSON-LD structured data to the page
 * @param {string} jsonLdString - Stringified JSON-LD object
 * @param {string} id - Unique ID for the script tag
 */
export const addStructuredData = (jsonLdString, id) => {
  // Remove existing schema with the same ID if it exists
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }
  
  // Create and append the new script tag
  const script = document.createElement('script');
  script.setAttribute('type', 'application/ld+json');
  script.setAttribute('id', id);
  script.textContent = jsonLdString;
  document.head.appendChild(script);
};

/**
 * Removes structured data from the page
 * @param {string} id - ID of the script tag to remove
 */
export const removeStructuredData = (id) => {
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }
};

export default {
  updateMetaTags,
  updateOpenGraphTags,
  updateTwitterCardTags,
  generateBlogPostSchema,
  generateProductSchema,
  generateOrganizationSchema,
  addStructuredData,
  removeStructuredData
};