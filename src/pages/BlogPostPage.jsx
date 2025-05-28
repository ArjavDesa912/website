import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Calendar, User, Tag, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import { 
  updateMetaTags, 
  generateBlogPostSchema, 
  addStructuredData, 
  removeStructuredData 
} from '../utils/seoHelpers';
import * as analytics from '../utils/analyticsUtils';
import { useAnalytics } from '../utils/useAnalytics';

// Mock blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Understanding the EU AI Act: Implications for Enterprise AI Governance",
    content: `
      <h2>Introduction to the EU AI Act</h2>
      <p>The European Union's Artificial Intelligence Act represents a watershed moment in AI regulation...</p>
      <!-- Full content here -->
    `,
    author: "Arjav Desai",
    date: "May 20, 2025",
    category: "Regulation",
    image: "/images/blog/eu-ai-act.jpg",
    excerpt: "The EU AI Act represents one of the most comprehensive regulatory frameworks for artificial intelligence to date.",
    keywords: "EU AI Act, AI governance, regulatory compliance, high-risk AI, AI regulation",
    readingTime: 8
  },
  // Other blog posts...
];

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));
  const [readingProgress, setReadingProgress] = useState(0);
  const [hasTrackedRead, setHasTrackedRead] = useState(false);
  const { trackBlogEngagement, trackSocialShare } = useAnalytics();
  
  // Handle contact button click
  const handleContactClick = () => {
    analytics.trackContactRequest('blog_post', 'contact_from_blog');
  };
  
  // Track reading progress
  useEffect(() => {
    if (!post) return;

    const trackReadingProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.round((window.scrollY / totalHeight) * 100);
      setReadingProgress(progress);

      // Track reading milestones
      if (progress >= 25 && !hasTrackedRead) {
        trackBlogEngagement('blog_read_25', {
          title: post.title,
          id: post.id,
          category: post.category,
          author: post.author,
          readingTime: post.readingTime
        });
      }
      
      if (progress >= 50) {
        trackBlogEngagement('blog_read_50', {
          title: post.title,
          id: post.id,
          category: post.category,
          author: post.author,
          readingTime: post.readingTime
        });
      }
      
      if (progress >= 75) {
        trackBlogEngagement('blog_read_75', {
          title: post.title,
          id: post.id,
          category: post.category,
          author: post.author,
          readingTime: post.readingTime
        });
      }
      
      if (progress >= 90 && !hasTrackedRead) {
        trackBlogEngagement('blog_read_complete', {
          title: post.title,
          id: post.id,
          category: post.category,
          author: post.author,
          readingTime: post.readingTime
        });
        setHasTrackedRead(true);
      }
    };

    window.addEventListener('scroll', trackReadingProgress, { passive: true });
    return () => window.removeEventListener('scroll', trackReadingProgress);
  }, [post, hasTrackedRead, trackBlogEngagement]);

  // Track blog post view
  useEffect(() => {
    if (post) {
      trackBlogEngagement('view_post', {
        title: post.title,
        id: post.id,
        category: post.category,
        author: post.author,
        readingTime: post.readingTime
      });
    }
  }, [post, trackBlogEngagement]);
  
  // SEO optimization
  useEffect(() => {
    if (post) {
      const baseUrl = window.location.origin;
      const canonicalUrl = `${baseUrl}/blog/${post.id}`;
      
      updateMetaTags({
        title: post.title,
        description: post.excerpt,
        keywords: post.keywords || `${post.category}, AI governance, AI compliance`,
        canonical: canonicalUrl,
        imageUrl: post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`,
        type: 'article'
      });
      
      const blogPostSchema = generateBlogPostSchema(post);
      addStructuredData(blogPostSchema, 'blog-post-schema');
      
      return () => {
        removeStructuredData('blog-post-schema');
      };
    }
  }, [post]);
  
  // Enhanced share functions with analytics
  const handleTwitterShare = () => {
    const text = encodeURIComponent(`${post.title}`);
    const url = encodeURIComponent(window.location.href);
    const hashtags = encodeURIComponent('AIGovernance,Compliance,AI');
    
    // Track social share
    trackSocialShare('twitter', 'blog_post');
    analytics.trackSocialShare('twitter', post.title);
    
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}&hashtags=${hashtags}&via=PraesidiumSys`, '_blank');
  };
  
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    
    // Track social share
    trackSocialShare('linkedin', 'blog_post');
    analytics.trackSocialShare('linkedin', post.title);
    
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };
  
  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Interesting article: ${post.title}`);
    const body = encodeURIComponent(`I thought you might find this article interesting:\n\n${post.title}\n${window.location.href}\n\n${post.excerpt}`);
    
    // Track social share
    trackSocialShare('email', 'blog_post');
    analytics.trackSocialShare('email', post.title);
    
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  // Track related post clicks
  const handleRelatedPostClick = (relatedPost) => {
    trackBlogEngagement('related_post_click', {
      from_post: post.title,
      to_post: relatedPost.title,
      from_id: post.id,
      to_id: relatedPost.id
    });
  };
  
  // If post not found
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <Header onContactClick={handleContactClick} />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, the blog post you're looking for doesn't exist.
            </p>
            <Link 
              to="/blog"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => analytics.trackEvent('blog_404_return', { category: 'navigation' })}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-blue-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      <main className="pt-28 pb-20">
        <article className="container mx-auto px-4">
          {/* Back to blog link */}
          <div className="mb-8">
            <Link 
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              onClick={() => trackBlogEngagement('back_to_blog', { from_post: post.title })}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all articles
            </Link>
          </div>
          
          {/* Article header */}
          <header className="max-w-4xl mx-auto mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                <Tag className="h-3.5 w-3.5 mr-1" />
                {post.category}
              </span>
              <span className="text-sm text-gray-500">
                {post.readingTime} min read
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            
            <div className="flex items-center text-gray-500 text-sm mb-8">
              <span className="flex items-center mr-6">
                <User className="h-4 w-4 mr-2" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </span>
            </div>
            
            <div className="rounded-lg overflow-hidden mb-10">
              <img 
                src={post.image} 
                alt={`${post.title} - Praesidium Systems Blog`}
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/1200x600?text=Praesidium+Blog";
                }}
              />
            </div>
          </header>
          
          {/* Article content */}
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Share and author info */}
          <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center text-blue-600 font-bold">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <p className="font-bold text-gray-900">{post.author}</p>
                  <p className="text-gray-600 text-sm">Author</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <span className="text-gray-700 mr-3">Share this article:</span>
                <div className="flex space-x-2">
                  <button 
                    onClick={handleTwitterShare}
                    className="p-2 text-gray-500 hover:text-blue-500 transition-colors" 
                    aria-label="Share on Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z" />
                    </svg>
                  </button>
                  <button 
                    onClick={handleLinkedInShare}
                    className="p-2 text-gray-500 hover:text-blue-700 transition-colors" 
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </button>
                  <button 
                    onClick={handleEmailShare}
                    className="p-2 text-gray-500 hover:text-red-500 transition-colors" 
                    aria-label="Share via Email"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter CTA */}
          <div className="max-w-3xl mx-auto mt-16 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated on AI Governance</h3>
            <p className="text-gray-700 mb-6">
              Get the latest insights on AI compliance and governance delivered to your inbox
            </p>
            <form 
              className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                if (email) {
                  analytics.trackNewsletterSignup('blog_post');
                  // Here you would integrate with your email service
                  alert('Thank you for subscribing!');
                  e.target.reset();
                }
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          {/* Related articles */}
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 3)
                .map(relatedPost => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link 
                      to={`/blog/${relatedPost.id}`}
                      onClick={() => handleRelatedPostClick(relatedPost)}
                    >
                      <img 
                        src={relatedPost.image} 
                        alt={`${relatedPost.title} - Praesidium Systems Blog`}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x200?text=Praesidium+Blog";
                        }}
                      />
                    </Link>
                    <div className="p-6">
                      <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded mb-2">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link 
                          to={`/blog/${relatedPost.id}`}
                          className="hover:text-blue-600 transition-colors"
                          onClick={() => handleRelatedPostClick(relatedPost)}
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                        onClick={() => handleRelatedPostClick(relatedPost)}
                      >
                        Read Article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;