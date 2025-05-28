// src/blog/components/BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';

/**
 * BlogCard component displays a preview of a blog post with image, title, excerpt, and metadata
 * 
 * @param {Object} post - Blog post data
 * @param {Function} onCardClick - Optional callback when card is clicked
 * @param {String} variant - Card display variant (default, compact, featured)
 */
const BlogCard = ({ post, onCardClick, variant = 'default' }) => {
  // Handle click and track analytics
  const handleClick = () => {
    if (onCardClick) {
      onCardClick(post);
    }
    
    // Track blog card click in analytics if window.gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'blog_card_click', {
        event_category: 'blog_engagement',
        event_label: post.title,
        post_id: post.id,
        post_category: post.category
      });
    }
  };

  // Different layout based on variant
  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden">
        <Link 
          to={`/blog/${post.slug}`}
          className="flex flex-row h-full"
          onClick={handleClick}
        >
          <div className="w-1/3">
            <img 
              src={post.image} 
              alt={post.title}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/300x200?text=Praesidium+Blog";
              }}
            />
          </div>
          <div className="w-2/3 p-4">
            <div className="flex items-center mb-2">
              <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded-full px-2 py-1 flex items-center">
                <Tag className="h-3 w-3 mr-1" />
                {post.category}
              </span>
              <span className="ml-2 text-xs text-gray-500">{post.readingTime} min read</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2 hover:text-blue-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{post.excerpt}</p>
            <div className="text-xs text-gray-500 flex items-center">
              <User className="h-3 w-3 mr-1" />
              {post.author}
            </div>
          </div>
        </Link>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
        <Link 
          to={`/blog/${post.slug}`}
          className="block"
          onClick={handleClick}
        >
          <div className="relative">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400?text=Praesidium+Blog";
              }}
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white rounded-full px-3 py-1 text-sm font-medium">
                Featured
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Tag className="h-3.5 w-3.5 mr-1" />
                {post.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1" />
                {post.date}
              </span>
              <span className="text-gray-500 text-sm">{post.readingTime} min read</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <span className="flex items-center text-gray-500 text-sm">
                <User className="h-4 w-4 mr-1" />
                {post.author}
              </span>
              <span className="inline-flex items-center text-blue-600 font-medium">
                Read Article
                <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // Default card variant
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row h-full hover:shadow-lg transition-shadow border border-gray-100">
      <div className="md:w-2/5 h-48 md:h-auto">
        <Link to={`/blog/${post.slug}`} onClick={handleClick}>
          <img 
            src={post.image} 
            alt={`${post.title} - Praesidium Systems Blog`}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/400x300?text=Praesidium+Blog";
            }}
          />
        </Link>
      </div>
      <div className="md:w-3/5 p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
            <Tag className="h-3.5 w-3.5 mr-1" />
            {post.category}
          </span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          <Link 
            to={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
            onClick={handleClick}
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <span className="flex items-center mr-4">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </span>
          <span className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <time dateTime={post.date}>{post.date}</time>
          </span>
        </div>
        <Link 
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          aria-label={`Read full article: ${post.title}`}
          onClick={handleClick}
        >
          Read Article
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;