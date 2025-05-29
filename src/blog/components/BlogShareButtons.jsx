// src/blog/components/BlogShareButtons.jsx
import React from 'react';
import { Share2, Twitter, Linkedin, Facebook, Mail, Link } from 'lucide-react'; // Removed unused 'Copy' import
import { trackSocialShare } from '../../utils/analyticsUtils';

/**
 * BlogShareButtons component provides social sharing functionality for blog posts
 * 
 * @param {String} title - Blog post title
 * @param {String} url - URL to share (defaults to current URL)
 * @param {String} excerpt - Blog post excerpt for email sharing
 * @param {Array} platforms - Platforms to show share buttons for
 * @param {String} layout - Button layout (horizontal, vertical)
 * @param {Boolean} showLabel - Whether to show text labels on buttons
 */
const BlogShareButtons = ({
  title,
  url = typeof window !== 'undefined' ? window.location.href : '',
  excerpt = '',
  platforms = ['twitter', 'linkedin', 'facebook', 'email', 'copy'],
  layout = 'horizontal',
  showLabel = true
}) => {
  // Check if navigator.share is available (for native sharing)
  const canUseNativeShare = typeof navigator !== 'undefined' && navigator.share;
  
  // Handle native share
  const handleNativeShare = async () => {
    try {
      await navigator.share({
        title: title,
        text: excerpt,
        url: url
      });
      
      // Track share
      trackSocialShare('native', 'blog_post');
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };
  
  // Handle Twitter share
  const handleTwitterShare = () => {
    const text = encodeURIComponent(`${title}`);
    const shareUrl = encodeURIComponent(url);
    const hashtags = encodeURIComponent('AIGovernance,Compliance,AI');
    
    // Track share
    trackSocialShare('twitter', 'blog_post');
    
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}&hashtags=${hashtags}&via=PraesidiumSys`, '_blank');
  };
  
  // Handle LinkedIn share
  const handleLinkedInShare = () => {
    const shareUrl = encodeURIComponent(url);
    
    // Track share
    trackSocialShare('linkedin', 'blog_post');
    
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank');
  };
  
  // Handle Facebook share
  const handleFacebookShare = () => {
    const shareUrl = encodeURIComponent(url);
    
    // Track share
    trackSocialShare('facebook', 'blog_post');
    
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
  };
  
  // Handle Email share
  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Interesting article: ${title}`);
    const body = encodeURIComponent(`I thought you might find this article interesting:\n\n${title}\n${url}\n\n${excerpt}`);
    
    // Track share
    trackSocialShare('email', 'blog_post');
    
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };
  
  // Handle copy link
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      
      // Show temporary success message
      const button = document.getElementById('copy-button');
      const originalText = button.innerText;
      
      button.innerText = 'Copied!';
      
      setTimeout(() => {
        button.innerText = originalText;
      }, 2000);
      
      // Track share
      trackSocialShare('copy_link', 'blog_post');
    } catch (error) {
      console.error('Error copying link:', error);
    }
  };
  
  // Button configurations
  const shareButtons = {
    twitter: {
      icon: Twitter,
      label: 'Twitter',
      handler: handleTwitterShare,
      ariaLabel: 'Share on Twitter',
      className: 'hover:text-blue-400'
    },
    linkedin: {
      icon: Linkedin,
      label: 'LinkedIn',
      handler: handleLinkedInShare,
      ariaLabel: 'Share on LinkedIn',
      className: 'hover:text-blue-700'
    },
    facebook: {
      icon: Facebook,
      label: 'Facebook',
      handler: handleFacebookShare,
      ariaLabel: 'Share on Facebook',
      className: 'hover:text-blue-600'
    },
    email: {
      icon: Mail,
      label: 'Email',
      handler: handleEmailShare,
      ariaLabel: 'Share via Email',
      className: 'hover:text-red-500'
    },
    copy: {
      icon: Link,
      label: 'Copy Link',
      handler: handleCopyLink,
      ariaLabel: 'Copy link to clipboard',
      className: 'hover:text-purple-500',
      id: 'copy-button'
    }
  };
  
  // Filter platforms that we have configurations for
  const enabledPlatforms = platforms.filter(platform => shareButtons[platform]);

  return (
    <div className={`${layout === 'vertical' ? 'flex flex-col space-y-3' : 'flex space-x-4'} items-center`}>
      {/* Title */}
      <span className="text-gray-700 mr-3 font-medium">Share:</span>
      
      {/* Native share button (if available) */}
      {canUseNativeShare && (
        <button 
          onClick={handleNativeShare}
          className="p-2 text-gray-500 hover:text-blue-500 transition-colors" 
          aria-label="Share"
        >
          <Share2 className="h-5 w-5" />
        </button>
      )}
      
      {/* Platform-specific buttons */}
      <div className={`flex ${layout === 'vertical' ? 'flex-col space-y-3' : 'space-x-2'}`}>
        {enabledPlatforms.map(platform => {
          const button = shareButtons[platform];
          const Icon = button.icon;
          
          return (
            <button 
              key={platform}
              onClick={button.handler}
              className={`p-2 text-gray-500 transition-colors flex items-center ${button.className}`}
              aria-label={button.ariaLabel}
              id={button.id}
            >
              <Icon className="h-5 w-5" />
              {showLabel && <span className="ml-1">{button.label}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BlogShareButtons;