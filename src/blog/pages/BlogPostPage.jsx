import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen, User, Mail, Twitter, Linkedin, Facebook, Copy, Check } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

// Import blog data and authors
import blogPosts from '../data/blogData';
import { authors } from '../data/blogData';

// Import blog components
import { BlogAuthor, BlogRelated, BlogShareButtons, BlogNewsletter } from '../components';

// Import SEO helpers
import { 
  updateMetaTags, 
  generateBlogPostSchema, 
  addStructuredData, 
  removeStructuredData 
} from '../../utils/seoHelpers';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [readingProgress, setReadingProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  // Find the current post by slug
  useEffect(() => {
    const currentPost = blogPosts.find(p => p.slug === slug);
    
    if (!currentPost) {
      // Post not found, redirect to blog homepage
      navigate('/blog');
      return;
    }
    
    setPost(currentPost);
    
    // Get related posts (same category, excluding current post)
    const related = blogPosts
      .filter(p => p.slug !== slug && p.category === currentPost.category)
      .slice(0, 3);
    
    // If we don't have enough related posts from same category, fill with other recent posts
    if (related.length < 3) {
      const additionalPosts = blogPosts
        .filter(p => p.slug !== slug && p.category !== currentPost.category)
        .slice(0, 3 - related.length);
      related.push(...additionalPosts);
    }
    
    setRelatedPosts(related);
  }, [slug, navigate]);

  // SEO and schema setup
  useEffect(() => {
    if (!post) return;

    const baseUrl = window.location.origin;
    const canonicalUrl = `${baseUrl}/blog/${post.slug}`;
    
    // Update meta tags
    updateMetaTags({
      title: post.title,
      description: post.excerpt,
      keywords: post.keywords || `${post.category}, AI governance, ${post.author}`,
      canonical: canonicalUrl,
      imageUrl: post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`,
      type: 'article'
    });
    
    // Generate and add blog post schema
    const blogSchema = generateBlogPostSchema({
      ...post,
      id: post.id,
      url: canonicalUrl
    });
    addStructuredData(blogSchema, 'blog-post-schema');
    
    // Cleanup function
    return () => {
      removeStructuredData('blog-post-schema');
    };
  }, [post]);

  // Track scroll progress and header state
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      // Calculate reading progress
      const progress = Math.min(
        Math.round((scrollTop / (documentHeight - windowHeight)) * 100),
        100
      );
      setReadingProgress(progress);
      
      // Update header state
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactClick = () => {
    console.log("Contact button clicked");
  };

  const handleBackToBlog = () => {
    navigate('/blog');
  };

  const handleShare = async (platform) => {
    if (!post) return;
    
    const url = window.location.href;
    const text = `${post.title} - ${post.excerpt}`;
    
    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(url);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 2000);
      } catch (err) {
        console.error('Failed to copy URL');
      }
      return;
    }
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    
    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  // Show loading state or 404 if post not found
  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Header onContactClick={handleContactClick} />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Get author data
  const authorData = authors[post.author] || {
    role: 'Contributor',
    bio: `${post.author} is a contributor to the Praesidium Systems blog, sharing insights on AI governance and compliance.`,
    photo: null
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header onContactClick={handleContactClick} />
      
      {/* Enhanced Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transition-all duration-300 ease-out shadow-sm"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      {/* Floating Header */}
      <div className={`fixed top-4 left-4 z-40 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <button 
          onClick={handleBackToBlog}
          className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium">Back to Blog</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-blue-600 font-medium">{post.category}</span>
          </div>
          
          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <Tag className="h-4 w-4" />
              {post.category}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {post.title}
              </span>
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  {authorData.photo ? (
                    <img 
                      src={authorData.photo} 
                      alt={post.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-5 w-5 text-white" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-sm">{authorData.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">{post.readingTime} min read</span>
                </div>
              </div>
            </div>
            
            {/* Excerpt */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Featured Image */}
        <div className="relative mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
          <img 
            src={post.image}
            alt={post.title}
            className="relative w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/800x400?text=Praesidium+Blog";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
        </div>
        
        {/* Share Buttons - Floating */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
          <BlogShareButtons 
            title={post.title}
            excerpt={post.excerpt}
            layout="vertical"
            showLabel={false}
          />
        </div>
        
        {/* Article Content */}
        <article className="mb-16">
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
        
        {/* Tags */}
        {post.keywords && (
          <div className="mb-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Tag className="h-5 w-5 text-blue-600" />
              Related Topics
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.keywords.split(',').map((keyword, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white text-gray-700 rounded-xl text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer shadow-sm border border-gray-200"
                >
                  {keyword.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Author Bio */}
        <BlogAuthor 
          name={post.author}
          variant="full"
          showEmail={true}
          showBio={true}
        />
        
        {/* Newsletter Signup */}
        <BlogNewsletter 
          variant="card"
          source="blog_post"
        />
        
        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <BlogRelated 
            posts={relatedPosts}
            currentPostId={post.id}
            limit={3}
            layout="grid"
          />
        )}
        
        {/* Mobile Share Buttons */}
        <div className="lg:hidden mt-12 pt-6 border-t border-gray-200">
          <BlogShareButtons 
            title={post.title}
            excerpt={post.excerpt}
            layout="horizontal"
            showLabel={true}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogPostPage;