// src/blog/components/BlogAuthor.jsx
import React from 'react';
import { Mail } from 'lucide-react'; // Removed unused 'User' import
import { authors } from '../data/blogData';

/**
 * BlogAuthor component displays information about a blog post author
 * 
 * @param {String} name - Author name
 * @param {String} variant - Display variant (compact, full)
 * @param {Boolean} showEmail - Whether to show author email
 * @param {Boolean} showBio - Whether to show author bio
 */
const BlogAuthor = ({ 
  name, 
  variant = 'compact', 
  showEmail = false,
  showBio = true
}) => {
  // Get author data from central registry
  const author = authors[name] || {
    role: 'Contributor',
    bio: '',
    photo: null
  };
  
  // Generate initials for fallback avatar
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();
  
  // Email construction (for demo purposes - in production would come from API)
  const email = name.toLowerCase().replace(' ', '.') + '@praesidiumsystems.ai';
  
  // Handle email click with analytics
  const handleEmailClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Track email click
      window.gtag('event', 'author_email_click', {
        event_category: 'blog_engagement',
        author_name: name
      });
    }
  };

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className="flex items-center">
        {author.photo ? (
          <img 
            src={author.photo} 
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) => {
              // Fallback to initials if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : (
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
            {initials}
          </div>
        )}
        <div className="ml-3">
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">{author.role}</p>
        </div>
      </div>
    );
  }

  // Full author profile
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-t border-gray-200 pt-8 mt-8">
      <div className="flex-shrink-0">
        {author.photo ? (
          <img 
            src={author.photo} 
            alt={name}
            className="w-20 h-20 rounded-full object-cover"
            onError={(e) => {
              // Fallback to initials if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : (
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-xl">
            {initials}
          </div>
        )}
      </div>
      <div className="flex-grow text-center md:text-left">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-blue-600 mb-3 font-medium">{author.role}</p>
        {showBio && author.bio && (
          <p className="text-gray-600 mb-4 max-w-2xl">{author.bio}</p>
        )}
        {showEmail && (
          <a 
            href={`mailto:${email}`}
            className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors"
            onClick={handleEmailClick}
          >
            <Mail className="h-4 w-4 mr-2" />
            {email}
          </a>
        )}
      </div>
    </div>
  );
};

export default BlogAuthor;