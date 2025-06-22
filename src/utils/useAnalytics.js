import { useEffect, useCallback, useRef } from 'react';
import * as analytics from './analyticsUtils';

/**
 * Custom hook for Google Analytics 4 integration in React
 * Provides tracking functions and automatic page view tracking for single page app
 */
export const useAnalytics = () => {
  const pageStartTime = useRef(Date.now());
  const scrollThresholds = useRef(new Set());
  const sectionViews = useRef(new Set());

  // Track page views and scroll behavior for single page
  useEffect(() => {
    // Reset tracking for new session
    scrollThresholds.current.clear();
    sectionViews.current.clear();
    pageStartTime.current = Date.now();

    // Track initial page view
    const pagePath = window.location.pathname + window.location.search;
    const pageTitle = document.title;
    
    analytics.trackPageView(pagePath, pageTitle);

    // Set up scroll tracking
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      // Track scroll milestones
      [25, 50, 75, 100].forEach(threshold => {
        if (scrollPercent >= threshold && !scrollThresholds.current.has(threshold)) {
          scrollThresholds.current.add(threshold);
          analytics.trackScrollDepth(threshold, window.location.pathname);
        }
      });

      // Track section visibility
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !sectionViews.current.has(section.id)) {
          sectionViews.current.add(section.id);
          analytics.trackFeatureInteraction('section_view', 'scroll_into_view', section.id);
        }
      });
    };

    // Set up time tracking on page unload
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000);
      if (timeSpent > 5) { // Only track meaningful time
        analytics.trackTimeOnPage(window.location.pathname, timeSpent);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Initial scroll check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload(); // Track time when component unmounts
    };
  }, []);

  // Memoized tracking functions
  const trackContactRequest = useCallback((source, type) => {
    analytics.trackContactRequest(source, type);
  }, []);

  const trackProductView = useCallback((productName, source) => {
    analytics.trackProductView(productName, source);
  }, []);

  const trackFeatureInteraction = useCallback((feature, action, location) => {
    analytics.trackFeatureInteraction(feature, action, location);
  }, []);

  const trackBlogEngagement = useCallback((action, postData) => {
    analytics.trackBlogEngagement(action, postData);
  }, []);

  const trackDeploymentInterest = useCallback((deploymentType) => {
    analytics.trackDeploymentInterest(deploymentType);
  }, []);

  const trackIntegrationInterest = useCallback((provider) => {
    analytics.trackIntegrationInterest(provider);
  }, []);

  const trackNewsletterSignup = useCallback((source) => {
    analytics.trackNewsletterSignup(source);
  }, []);

  const trackSocialShare = useCallback((platform, content) => {
    analytics.trackSocialShare(platform, content);
  }, []);

  const trackCustomEvent = useCallback((eventName, parameters) => {
    analytics.trackEvent(eventName, parameters);
  }, []);

  return {
    // Tracking functions
    trackContactRequest,
    trackProductView,
    trackFeatureInteraction,
    trackBlogEngagement,
    trackDeploymentInterest,
    trackIntegrationInterest,
    trackNewsletterSignup,
    trackSocialShare,
    trackCustomEvent,
    
    // Direct access to analytics utils
    analytics
  };
};

export default useAnalytics;