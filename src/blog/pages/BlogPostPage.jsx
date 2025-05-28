// src/blog/pages/BlogPostPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, CalendarIcon, Clock, Tag } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { 
  BlogAuthor,
  BlogShareButtons,
  BlogRelated,
  BlogNewsletter
} from '../components';
import blogPosts from '../data/blogData';
import { trackPageView, trackBlogEngagement } from '../../utils/analyticsUtils';

/**
 * BlogPostPage component displays an individual blog post
 */
const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [readingProgress, setReadingProgress] = useState(0);
  
  // Find post by slug
  useEffect(() => {
    setIsLoading(true);
    
    const foundPost = blogPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Track page view
      trackPageView('blog_post_view', {
        post_id: foundPost.id,
        post_title: foundPost.title,
        post_category: foundPost.category,
        post_author: foundPost.author
      });
      
      // Track engagement start
      trackBlogEngagement('post_reading_started', {
        post_id: foundPost.id
      });
    } else {
      // Redirect to blog listing if post not found
      navigate('/blog', { replace: true });
    }
    
    setIsLoading(false);
  }, [slug, navigate]);
  
  // Track scroll depth and reading progress
  useEffect(() => {
    if (!post) return;
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate reading progress as percentage
      const progress = Math.min(
        Math.round((scrollTop / (documentHeight - windowHeight)) * 100),
        100
      );
      
      setReadingProgress(progress);
      
      // Track reading progress at specific milestones
      const milestones = [25, 50, 75, 100];
      const currentMilestone = milestones.find(
        milestone => progress >= milestone && progress < milestone + 5
      );
      
      if (currentMilestone) {
        trackBlogEngagement('post_scroll_depth', {
          post_id: post.id,
          depth_percentage: currentMilestone
        });
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Track time spent reading
    const startTime = Date.now();
    let timeSpentTracked = false;
    
    const trackTimeSpent = () => {
      if (timeSpentTracked) return;
      
      const timeSpentMs = Date.now() - startTime;
      const timeSpentMinutes = Math.round(timeSpentMs / 1000 / 60);
      
      if (timeSpentMinutes >= 1) {
        trackBlogEngagement('post_time_spent', {
          post_id: post.id,
          time_minutes: timeSpentMinutes
        });
        
        timeSpentTracked = true;
      }
    };
    
    // Track time when leaving the page
    window.addEventListener('beforeunload', trackTimeSpent);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', trackTimeSpent);
      trackTimeSpent(); // Track time when component unmounts
    };
  }, [post]);
  
  // Handle back to blog click
  const handleBackClick = () => {
    trackBlogEngagement('back_to_blog_click', {
      post_id: post?.id
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
        <p className="text-gray-600 mb-8">The article you're looking for does not exist or has been removed.</p>
        <Link 
          to="/blog"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
        >
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | Praesidium Systems Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={`https://praesidiumsystems.ai/blog/${post.slug}`} />
        
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={`https://praesidiumsystems.ai/blog/${post.slug}`} />
        <meta property="og:image" content={post.image.startsWith('http') ? post.image : `https://praesidiumsystems.ai${post.image}`} />
        <meta property="article:published_time" content={new Date(post.date).toISOString()} />
        <meta property="article:author" content={post.author} />
        <meta property="article:section" content={post.category} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image.startsWith('http') ? post.image : `https://praesidiumsystems.ai${post.image}`} />
      </Helmet>
      
      <Header />
      
      {/* Reading Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-50 transition-all duration-300 ease-out"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={readingProgress}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="Reading progress"
      ></div>
      
      <main className="bg-white">
        {/* Back to Blog Link */}
        <div className="container mx-auto px-4 pt-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-8"
            onClick={handleBackClick}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
        
        {/* Blog Header */}
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Category Tag */}
          <div className="mb-4">
            <Link 
              to={`/blog?category=${encodeURIComponent(post.category)}`}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
            >
              <Tag className="h-3.5 w-3.5 mr-1" />
              {post.category}
            </Link>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
          
          {/* Post Meta */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8">
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-2" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="mb-10">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-auto rounded-xl object-cover"
              style={{ maxHeight: '500px' }}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/1200x600?text=Praesidium+Systems+Blog";
              }}
            />
          </div>
          
          {/* Author Info (Compact) */}
          <div className="mb-8">
            <BlogAuthor name={post.author} variant="compact" />
          </div>
          
          {/* Share Buttons */}
          <div className="mb-10">
            <BlogShareButtons 
              title={post.title}
              excerpt={post.excerpt}
              showLabel={true}
            />
          </div>
          
          {/* Blog Content */}
          <div 
            className="prose prose-lg max-w-none mb-16"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.keywords.split(',').map((keyword, index) => (
                <Link 
                  key={index}
                  to={`/blog?q=${encodeURIComponent(keyword.trim())}`}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  {keyword.trim()}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Author Bio (Full) */}
          <BlogAuthor 
            name={post.author} 
            variant="full" 
            showEmail={true}
            showBio={true}
          />
          
          {/* Newsletter Signup */}
          <div className="my-16">
            <BlogNewsletter 
              title="Enjoyed this article?"
              description="Subscribe to our newsletter to get more insights on AI governance and compliance delivered to your inbox."
              source="blog_post"
            />
          </div>
          
          {/* Related Posts */}
          <BlogRelated 
            posts={blogPosts}
            currentPostId={post.id}
            limit={3}
            layout="grid"
          />
        </article>
      </main>
      
      <Footer />
    </>
  );
};

export default BlogPostPage;