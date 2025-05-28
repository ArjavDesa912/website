import { useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import * as analytics from './analyticsUtils';

/**
 * Custom hook for Google Analytics 4 integration in React
 * Provides tracking functions and automatic page view tracking
 */
export const useAnalytics = () => {
  const location = useLocation();
  const pageStartTime = useRef(Date.now());
  const scrollThresholds = useRef(new Set());

  // Track page views automatically on route changes
  useEffect(() => {
    // Reset scroll tracking for new page
    scrollThresholds.current.clear();
    pageStartTime.current = Date.now();

    // Track page view
    const pagePath = location.pathname + location.search;
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
          analytics.trackScrollDepth(threshold, location.pathname);
        }
      });
    };

    // Set up time tracking on page unload
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - pageStartTime.current) / 1000);
      if (timeSpent > 5) { // Only track meaningful time
        analytics.trackTimeOnPage(location.pathname, timeSpent);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      handleBeforeUnload(); // Track time when component unmounts
    };
  }, [location]);

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