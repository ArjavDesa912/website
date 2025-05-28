/**
 * Google Analytics 4 (GA4) utilities for Praesidium Systems
 * Provides comprehensive tracking for user interactions, page views, and business events
 */

// GA4 Measurement ID (already configured in your HTML)
const GA_MEASUREMENT_ID = 'G-XSRJSNGW8Y';

/**
 * Initialize Google Analytics 4
 * This function sets up GA4 with enhanced ecommerce and custom dimensions
 */
export const initGA4 = () => {
  // Check if gtag is available
  if (typeof window !== 'undefined' && window.gtag) {
    // Configure GA4 with enhanced settings
    window.gtag('config', GA_MEASUREMENT_ID, {
      // Enhanced ecommerce settings
      send_page_view: true,
      
      // Custom dimensions for B2B SaaS tracking
      custom_map: {
        custom_parameter_1: 'user_type',
        custom_parameter_2: 'company_size',
        custom_parameter_3: 'industry'
      },
      
      // Privacy settings
      anonymize_ip: true,
      allow_google_signals: true,
      allow_ad_personalization_signals: false
    });

    console.log('GA4 initialized successfully');
  } else {
    console.warn('Google Analytics not loaded');
  }
};

/**
 * Track page views for SPA navigation
 * @param {string} path - The page path
 * @param {string} title - The page title
 */
export const trackPageView = (path, title = document.title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: title
    });
  }
};

/**
 * Track custom events with enhanced parameters
 * @param {string} eventName - Name of the event
 * @param {Object} parameters - Event parameters
 */
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'engagement',
      event_label: parameters.label,
      value: parameters.value,
      ...parameters
    });
  }
};

// Specific tracking functions for Praesidium Systems business events

/**
 * Track contact/demo requests
 * @param {string} source - Where the request came from (hero, cta, header, etc.)
 * @param {string} type - Type of request (demo, contact, etc.)
 */
export const trackContactRequest = (source, type = 'demo_request') => {
  trackEvent('generate_lead', {
    category: 'conversion',
    label: source,
    event_source: source,
    lead_type: type,
    value: 1
  });
};

/**
 * Track product page visits
 * @param {string} productName - Name of the product
 * @param {string} source - How user got to product page
 */
export const trackProductView = (productName, source = 'navigation') => {
  trackEvent('view_item', {
    category: 'product_engagement',
    item_name: productName,
    item_category: 'AI_Governance_Suite',
    source: source,
    value: 1
  });
};

/**
 * Track blog engagement
 * @param {string} action - Action taken (view_post, share, etc.)
 * @param {Object} postData - Blog post information
 */
export const trackBlogEngagement = (action, postData = {}) => {
  trackEvent(action, {
    category: 'content_engagement',
    label: postData.title || 'Unknown Post',
    post_id: postData.id,
    post_category: postData.category,
    author: postData.author,
    reading_time: postData.readingTime
  });
};

/**
 * Track feature interactions
 * @param {string} feature - Feature name
 * @param {string} action - Action taken
 * @param {string} location - Where on the page
 */
export const trackFeatureInteraction = (feature, action, location) => {
  trackEvent('feature_interaction', {
    category: 'product_engagement',
    feature_name: feature,
    action: action,
    location: location
  });
};

/**
 * Track deployment option interest
 * @param {string} deploymentType - Type of deployment (cloud, on-premises, vpc)
 */
export const trackDeploymentInterest = (deploymentType) => {
  trackEvent('deployment_interest', {
    category: 'product_engagement',
    deployment_type: deploymentType,
    value: 1
  });
};

/**
 * Track integration provider interest
 * @param {string} provider - AI provider name (OpenAI, Claude, etc.)
 */
export const trackIntegrationInterest = (provider) => {
  trackEvent('integration_interest', {
    category: 'product_engagement',
    provider: provider,
    value: 1
  });
};

/**
 * Track newsletter signups
 * @param {string} source - Where signup happened
 */
export const trackNewsletterSignup = (source) => {
  trackEvent('sign_up', {
    category: 'conversion',
    method: 'newsletter',
    source: source,
    value: 1
  });
};

/**
 * Track file downloads (if you add whitepapers, case studies, etc.)
 * @param {string} fileName - Name of downloaded file
 * @param {string} fileType - Type of file (pdf, doc, etc.)
 */
export const trackFileDownload = (fileName, fileType) => {
  trackEvent('file_download', {
    category: 'content_engagement',
    file_name: fileName,
    file_type: fileType,
    value: 1
  });
};

/**
 * Track social media shares
 * @param {string} platform - Social platform (twitter, linkedin, email)
 * @param {string} content - What was shared
 */
export const trackSocialShare = (platform, content) => {
  trackEvent('share', {
    category: 'social_engagement',
    method: platform,
    content_type: content,
    value: 1
  });
};

/**
 * Track user scroll depth on important pages
 * @param {number} percentage - Scroll percentage (25, 50, 75, 100)
 * @param {string} page - Page identifier
 */
export const trackScrollDepth = (percentage, page) => {
  trackEvent('scroll', {
    category: 'user_engagement',
    scroll_depth: percentage,
    page: page
  });
};

/**
 * Track time spent on page
 * @param {string} page - Page identifier
 * @param {number} timeSeconds - Time spent in seconds
 */
export const trackTimeOnPage = (page, timeSeconds) => {
  trackEvent('timing_complete', {
    category: 'user_engagement',
    name: 'time_on_page',
    value: Math.round(timeSeconds),
    page: page
  });
};

/**
 * Track search actions (if you add search functionality)
 * @param {string} searchTerm - What user searched for
 * @param {number} resultCount - Number of results
 */
export const trackSearch = (searchTerm, resultCount = 0) => {
  trackEvent('search', {
    category: 'site_search',
    search_term: searchTerm,
    result_count: resultCount
  });
};

/**
 * Track video interactions (if you add demo videos)
 * @param {string} action - play, pause, complete
 * @param {string} videoTitle - Title of the video
 * @param {number} progress - Progress percentage
 */
export const trackVideoInteraction = (action, videoTitle, progress = 0) => {
  trackEvent(`video_${action}`, {
    category: 'video_engagement',
    video_title: videoTitle,
    video_progress: progress,
    value: progress
  });
};

/**
 * Set user properties for enhanced analytics
 * @param {Object} properties - User properties to set
 */
export const setUserProperties = (properties) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('set', 'user_properties', {
      user_type: properties.userType || 'visitor',
      company_size: properties.companySize,
      industry: properties.industry,
      utm_source: properties.utmSource,
      utm_medium: properties.utmMedium,
      utm_campaign: properties.utmCampaign
    });
  }
};

/**
 * Track conversion goals
 * @param {string} goalName - Name of the conversion goal
 * @param {number} value - Value of the conversion
 */
export const trackConversion = (goalName, value = 1) => {
  trackEvent('conversion', {
    category: 'conversion',
    action: goalName,
    value: value
  });
};

/**
 * Enhanced error tracking
 * @param {Error} error - Error object
 * @param {string} location - Where error occurred
 */
export const trackError = (error, location) => {
  trackEvent('exception', {
    category: 'error',
    description: error.message,
    location: location,
    fatal: false
  });
};

// Export all functions
export default {
  initGA4,
  trackPageView,
  trackEvent,
  trackContactRequest,
  trackProductView,
  trackBlogEngagement,
  trackFeatureInteraction,
  trackDeploymentInterest,
  trackIntegrationInterest,
  trackNewsletterSignup,
  trackFileDownload,
  trackSocialShare,
  trackScrollDepth,
  trackTimeOnPage,
  trackSearch,
  trackVideoInteraction,
  setUserProperties,
  trackConversion,
  trackError
};