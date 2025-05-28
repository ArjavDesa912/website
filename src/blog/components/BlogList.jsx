// src/blog/components/BlogList.jsx
import React, { useEffect } from 'react';
import BlogCard from './BlogCard';
import BlogPagination from './BlogPagination';
import { trackBlogEngagement } from '../../utils/analyticsUtils';

/**
 * BlogList component to display a list of blog posts with pagination
 * 
 * @param {Array} posts - List of blog posts to display
 * @param {Number} currentPage - Current page number
 * @param {Number} postsPerPage - Number of posts to display per page
 * @param {Function} onPageChange - Callback when page changes
 * @param {Function} onPostClick - Callback when a post is clicked
 * @param {String} layout - Layout style (grid, list)
 * @param {Boolean} showFeatured - Whether to show a featured post
 */
const BlogList = ({ 
  posts, 
  currentPage = 1, 
  postsPerPage = 6, 
  onPageChange, 
  onPostClick,
  layout = 'grid',
  showFeatured = false
}) => {
  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  
  // Adjust for featured post if needed
  let currentPosts = posts;
  let featuredPost = null;
  
  if (showFeatured && posts.length > 0 && currentPage === 1) {
    featuredPost = posts[0];
    currentPosts = posts.slice(1);
  }
  
  currentPosts = currentPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  // Track impressions
  useEffect(() => {
    if (currentPosts.length > 0) {
      trackBlogEngagement('blog_list_view', {
        posts_shown: currentPosts.length,
        page: currentPage,
        layout: layout
      });
      
      // Track individual post impressions
      currentPosts.forEach(post => {
        trackBlogEngagement('post_impression', {
          post_id: post.id,
          post_title: post.title,
          post_category: post.category
        });
      });
    }
  }, [currentPosts, currentPage, layout]);

  // Handle post click
  const handlePostClick = (post) => {
    if (onPostClick) {
      onPostClick(post);
    }
    
    trackBlogEngagement('post_click', {
      post_id: post.id,
      post_title: post.title,
      post_category: post.category,
      position: currentPosts.indexOf(post),
      page: currentPage
    });
  };

  // If no posts, show message
  if (posts.length === 0) {
    return (
      <div className="text-center py-12" role="status" aria-live="polite">
        <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
        <p className="text-gray-500">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="space-y-10" role="feed" aria-label="Blog posts">
      {/* Featured Post - Only on first page if enabled */}
      {showFeatured && featuredPost && currentPage === 1 && (
        <div className="mb-12">
          <BlogCard 
            post={featuredPost} 
            onCardClick={handlePostClick}
            variant="featured"
          />
        </div>
      )}
      
      {/* Blog Post Grid or List */}
      {layout === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map(post => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onCardClick={handlePostClick}
              variant="compact"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {currentPosts.map(post => (
            <BlogCard 
              key={post.id} 
              post={post} 
              onCardClick={handlePostClick}
            />
          ))}
        </div>
      )}
      
      {/* Pagination - Only show if we have more posts than the limit */}
      {posts.length > postsPerPage && (
        <BlogPagination 
          currentPage={currentPage}
          totalPages={Math.ceil(posts.length / postsPerPage)}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default BlogList;