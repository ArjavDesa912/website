import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen, User, Mail, Twitter, Linkedin, Facebook, Copy, Check } from 'lucide-react';

// Mock data for demonstration
const mockPost = {
  id: 1,
  title: "The Future of AI Governance: Navigating Compliance in an Evolving Landscape",
  slug: "future-ai-governance-compliance",
  excerpt: "Explore the emerging frameworks and best practices for AI governance that will shape the future of technology compliance.",
  content: `
    <p>As artificial intelligence continues to reshape industries and redefine business operations, the need for robust governance frameworks has never been more critical. Organizations worldwide are grappling with the challenge of implementing AI systems that are not only innovative but also compliant with evolving regulations.</p>
    
    <h2>The Current State of AI Governance</h2>
    <p>The regulatory landscape for AI is rapidly evolving, with new frameworks emerging across different jurisdictions. From the EU's AI Act to various state-level initiatives in the United States, organizations must navigate an increasingly complex web of requirements.</p>
    
    <blockquote>
      <p>"The key to successful AI governance lies not in restricting innovation, but in creating frameworks that enable responsible development while maintaining competitive advantage."</p>
    </blockquote>
    
    <h2>Key Principles for Effective AI Governance</h2>
    <p>Successful AI governance frameworks are built on several foundational principles:</p>
    <ul>
      <li><strong>Transparency:</strong> Clear documentation of AI decision-making processes</li>
      <li><strong>Accountability:</strong> Defined ownership and responsibility chains</li>
      <li><strong>Fairness:</strong> Bias detection and mitigation strategies</li>
      <li><strong>Privacy:</strong> Data protection and user consent mechanisms</li>
    </ul>
    
    <h2>Implementation Strategies</h2>
    <p>Organizations looking to implement robust AI governance should consider a phased approach that includes risk assessment, policy development, and continuous monitoring. The integration of automated compliance tools can significantly streamline this process.</p>
    
    <p>Looking ahead, we can expect to see continued evolution in this space, with new technologies and methodologies emerging to address the challenges of AI governance in an increasingly digital world.</p>
  `,
  author: "Dr. Sarah Chen",
  date: "March 15, 2024",
  readingTime: 8,
  category: "AI Governance",
  keywords: "AI governance, compliance, regulation, artificial intelligence, policy",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
};

const relatedPosts = [
  {
    id: 2,
    title: "Building Ethical AI Systems",
    excerpt: "A comprehensive guide to implementing ethical considerations in AI development.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readingTime: 6,
    category: "Ethics"
  },
  {
    id: 3,
    title: "Data Privacy in the Age of AI",
    excerpt: "Understanding privacy implications and protection strategies for AI systems.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readingTime: 7,
    category: "Privacy"
  },
  {
    id: 4,
    title: "Regulatory Compliance Automation",
    excerpt: "How automation tools are transforming compliance management processes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readingTime: 5,
    category: "Automation"
  }
];

const BlogPostPage = () => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

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

  const handleShare = async (platform) => {
    const url = window.location.href;
    const text = `${mockPost.title} - ${mockPost.excerpt}`;
    
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Enhanced Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 transition-all duration-300 ease-out shadow-sm"
          style={{ width: `${readingProgress}%` }}
        />
      </div>
      
      {/* Floating Header */}
      <div className={`fixed top-4 left-4 z-40 transition-all duration-300 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
        <button className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/20 text-gray-700 hover:text-blue-600 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span className="font-medium">Back to Blog</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 pt-20 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <span>Blog</span>
            <span>/</span>
            <span className="text-blue-600 font-medium">{mockPost.category}</span>
          </div>
          
          <div className="max-w-4xl">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold mb-6 shadow-sm">
              <Tag className="h-4 w-4" />
              {mockPost.category}
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                {mockPost.title}
              </span>
            </h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{mockPost.author}</p>
                  <p className="text-sm">Lead AI Researcher</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="font-medium">{mockPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-purple-600" />
                  <span className="font-medium">{mockPost.readingTime} min read</span>
                </div>
              </div>
            </div>
            
            {/* Excerpt */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl">
              {mockPost.excerpt}
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
            src={mockPost.image}
            alt={mockPost.title}
            className="relative w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
        </div>
        
        {/* Share Buttons - Floating */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block">
          <div className="flex flex-col gap-3 p-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <p className="text-xs font-semibold text-gray-600 text-center mb-2">SHARE</p>
            
            <button 
              onClick={() => handleShare('twitter')}
              className="w-10 h-10 bg-blue-500 hover:bg-blue-600 text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Twitter className="h-4 w-4" />
            </button>
            
            <button 
              onClick={() => handleShare('linkedin')}
              className="w-10 h-10 bg-blue-700 hover:bg-blue-800 text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Linkedin className="h-4 w-4" />
            </button>
            
            <button 
              onClick={() => handleShare('facebook')}
              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <Facebook className="h-4 w-4" />
            </button>
            
            <button 
              onClick={() => handleShare('copy')}
              className="w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              {copiedToClipboard ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>
        
        {/* Article Content */}
        <article className="mb-16">
          <div className="max-w-none">
            {/* Opening Paragraph */}
            <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500">
              <p className="text-xl text-gray-800 leading-relaxed font-medium">
                As artificial intelligence continues to reshape industries and redefine business operations, the need for robust governance frameworks has never been more critical. Organizations worldwide are grappling with the challenge of implementing AI systems that are not only innovative but also compliant with evolving regulations.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gradient-to-r from-blue-200 to-purple-200">
                The Current State of AI Governance
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The regulatory landscape for AI is rapidly evolving, with new frameworks emerging across different jurisdictions. From the EU's AI Act to various state-level initiatives in the United States, organizations must navigate an increasingly complex web of requirements.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="mb-12">
              <blockquote className="relative p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-l-4 border-blue-500 shadow-sm">
                <div className="absolute top-4 left-4 text-6xl text-blue-200 font-serif">"</div>
                <p className="text-xl text-blue-900 font-medium italic leading-relaxed pl-8">
                  The key to successful AI governance lies not in restricting innovation, but in creating frameworks that enable responsible development while maintaining competitive advantage.
                </p>
                <div className="flex items-center gap-3 mt-6 pl-8">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Industry Expert</p>
                    <p className="text-sm text-gray-600">AI Governance Council</p>
                  </div>
                </div>
              </blockquote>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gradient-to-r from-blue-200 to-purple-200">
                Key Principles for Effective AI Governance
              </h2>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Successful AI governance frameworks are built on several foundational principles:
                </p>
              </div>
              
              {/* Principles Grid */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
                      <p className="text-gray-700 leading-relaxed">Clear documentation of AI decision-making processes and algorithmic accountability.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">A</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Accountability</h3>
                      <p className="text-gray-700 leading-relaxed">Defined ownership and responsibility chains throughout the AI lifecycle.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">F</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Fairness</h3>
                      <p className="text-gray-700 leading-relaxed">Bias detection and mitigation strategies to ensure equitable outcomes.</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">P</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Privacy</h3>
                      <p className="text-gray-700 leading-relaxed">Data protection and user consent mechanisms built into system design.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gradient-to-r from-blue-200 to-purple-200">
                Implementation Strategies
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Organizations looking to implement robust AI governance should consider a phased approach that includes risk assessment, policy development, and continuous monitoring. The integration of automated compliance tools can significantly streamline this process.
                  </p>
                </div>
                
                {/* Implementation Steps */}
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Recommended Implementation Phases</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Risk Assessment & Policy Framework</h4>
                        <p className="text-gray-700">Establish baseline governance policies and identify potential risk vectors.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Technology Integration</h4>
                        <p className="text-gray-700">Deploy automated monitoring and compliance tracking systems.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Continuous Monitoring</h4>
                        <p className="text-gray-700">Implement ongoing assessment and iterative improvement processes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Looking ahead, we can expect to see continued evolution in this space, with new technologies and methodologies emerging to address the challenges of AI governance in an increasingly digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Tags */}
        <div className="mb-12 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Tag className="h-5 w-5 text-blue-600" />
            Related Topics
          </h3>
          <div className="flex flex-wrap gap-3">
            {mockPost.keywords.split(',').map((keyword, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white text-gray-700 rounded-xl text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer shadow-sm border border-gray-200"
              >
                {keyword.trim()}
              </span>
            ))}
          </div>
        </div>
        
        {/* Author Bio */}
        <div className="mb-16 p-8 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg border border-white/50">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <User className="h-10 w-10 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{mockPost.author}</h3>
              <p className="text-blue-600 font-semibold mb-4">Lead AI Researcher & Policy Expert</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Sarah Chen is a leading expert in AI governance and compliance with over 10 years of experience 
                in developing ethical AI frameworks. She holds a Ph.D. in Computer Science from MIT and has published 
                extensively on AI policy and regulation.
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  <Mail className="h-4 w-4" />
                  Contact Author
                </button>
                <div className="flex gap-2">
                  <button className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mb-16 p-8 bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-700/90" />
          <div className="relative z-10">
            <div className="max-w-2xl">
              <h3 className="text-3xl font-bold mb-4">Stay Informed</h3>
              <p className="text-blue-100 mb-6 text-lg leading-relaxed">
                Get the latest insights on AI governance, compliance trends, and industry best practices 
                delivered directly to your inbox every week.
              </p>
              <div className="flex gap-4">
                <input 
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Posts */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-blue-600" />
            Related Articles
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="relative mb-4 overflow-hidden rounded-xl">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-semibold text-gray-800">
                    {post.category}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h4>
                <p className="text-gray-600 mb-3 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;