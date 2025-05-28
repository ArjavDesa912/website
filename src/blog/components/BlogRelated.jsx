// src/blog/components/BlogRelated.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { trackBlogEngagement } from '../../utils/analyticsUtils';

/**
 * BlogRelated component displays related blog posts
 * 
 * @param {Array} posts - List of related blog posts
 * @param {Number} currentPostId - ID of current post to exclude from related
 * @param {Number} limit - Maximum number of posts to display
 * @param {String} layout - Layout style (grid, list)
 */
const BlogRelated = ({ 
  posts = [], 
  currentPostId,
  limit = 3,
  layout = 'grid'
}) => {
  // Filter out current post and limit results
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, limit);
  
  // Handle related post click
  const handlePostClick = (post) => {
    trackBlogEngagement('related_post_click', {
      from_post_id: currentPostId,
      to_post_id: post.id,
      post_category: post.category
    });
  };
  
  // If no related posts, don't render anything
  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
      
      {layout === 'grid' ? (
        // Grid layout
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link 
                to={`/blog/${post.slug}`}
                onClick={() => handlePostClick(post)}
              >
                <img 
                  src={post.image} 
                  alt={`${post.title} - Praesidium Systems Blog`}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x200?text=Praesidium+Blog";
                  }}
                />
              </Link>
              <div className="p-6">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mb-2">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                    onClick={() => handlePostClick(post)}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  onClick={() => handlePostClick(post)}
                >
                  Read Article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List layout
        <div className="space-y-6">
          {relatedPosts.map(post => (
            <div key={post.id} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Link 
                to={`/blog/${post.slug}`}
                className="flex-shrink-0"
                onClick={() => handlePostClick(post)}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-20 h-20 object-cover rounded"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/80x80?text=Praesidium";
                  }}
                />
              </Link>
              <div>
                <span className="text-xs font-medium bg-blue-100 text-blue-800 rounded px-2 py-1">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mt-1 mb-1">
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="hover:text-blue-600 transition-colors"
                    onClick={() => handlePostClick(post)}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogRelated;