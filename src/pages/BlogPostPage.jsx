import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Calendar, User, Tag, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import { 
  updateMetaTags, 
  generateBlogPostSchema, 
  addStructuredData, 
  removeStructuredData 
} from '../../utils/seoHelpers';

// Mock blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Understanding the EU AI Act: Implications for Enterprise AI Governance",
    content: `
      <h2>Introduction to the EU AI Act</h2>
      <p>The European Union's Artificial Intelligence Act represents a watershed moment in AI regulation. Passed in 2024, this comprehensive legal framework establishes clear guidelines for the development, deployment, and use of AI systems within the EU, with implications for organizations worldwide.</p>
      
      <h2>Risk-Based Classification System</h2>
      <p>At the heart of the EU AI Act is a tiered, risk-based approach that categorizes AI systems based on their potential impact:</p>
      
      <ul>
        <li><strong>Unacceptable Risk:</strong> AI systems deemed to pose an unacceptable risk to safety, livelihoods, or fundamental rights are prohibited. Examples include social scoring systems used by governments and certain forms of biometric identification in public spaces.</li>
        <li><strong>High Risk:</strong> AI systems used in critical infrastructure, education, employment, essential services, law enforcement, and similar domains face stringent requirements including risk assessments, data governance, and human oversight.</li>
        <li><strong>Limited Risk:</strong> Systems like chatbots must meet transparency requirements, primarily ensuring users know they are interacting with an AI.</li>
        <li><strong>Minimal Risk:</strong> All other AI applications face minimal regulation, though voluntary compliance with AI codes of conduct is encouraged.</li>
      </ul>
      
      <h2>Key Requirements for High-Risk AI Systems</h2>
      <p>For AI systems classified as high-risk, organizations must implement:</p>
      
      <ul>
        <li>Risk assessment and mitigation systems</li>
        <li>High quality data governance</li>
        <li>Detailed documentation and audit trails</li>
        <li>Clear and adequate information to users</li>
        <li>Appropriate human oversight measures</li>
        <li>Robust security and accuracy standards</li>
      </ul>
      
      <h2>General Purpose AI and Foundation Models</h2>
      <p>The Act includes specific provisions for general-purpose AI systems and foundation models like large language models (LLMs). Providers of these models must conduct model evaluations, assess and mitigate risks, report serious incidents, ensure cybersecurity, and report on their energy efficiency.</p>
      
      <h2>Enforcement and Penalties</h2>
      <p>Non-compliance with the EU AI Act can result in significant penalties:</p>
      
      <ul>
        <li>Up to €35 million or 7% of global annual revenue (whichever is higher) for violations related to prohibited AI practices</li>
        <li>Up to €15 million or 3% of global annual revenue for most other violations</li>
        <li>Up to €7.5 million or 1.5% of global annual revenue for providing incorrect information</li>
      </ul>
      
      <h2>Implications for Enterprise AI Governance</h2>
      <p>The EU AI Act necessitates a structured approach to AI governance within organizations:</p>
      
      <ol>
        <li><strong>Comprehensive AI Inventory:</strong> Organizations must catalog all AI systems to determine which fall under high-risk categories.</li>
        <li><strong>Documentation Systems:</strong> Robust documentation processes are essential for demonstrating compliance, particularly for high-risk systems.</li>
        <li><strong>Risk Management Framework:</strong> A systematic approach to assessing and mitigating risks throughout the AI lifecycle is required.</li>
        <li><strong>Testing and Validation Protocols:</strong> Regular testing for accuracy, bias, and other potential issues becomes mandatory for high-risk systems.</li>
        <li><strong>Transparency Mechanisms:</strong> Organizations must implement ways to explain AI decision-making to end users.</li>
        <li><strong>Human Oversight Procedures:</strong> Clear protocols for human intervention in AI systems must be established.</li>
      </ol>
      
      <h2>Timeline for Implementation</h2>
      <p>The EU AI Act follows a staggered implementation timeline:</p>
      
      <ul>
        <li><strong>2024:</strong> Prohibition on unacceptable risk AI systems takes effect</li>
        <li><strong>2025:</strong> Requirements for general-purpose AI models come into force</li>
        <li><strong>2026:</strong> Full requirements for high-risk AI systems become applicable</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The EU AI Act establishes a new global standard for AI regulation that organizations worldwide cannot ignore. Even companies outside the EU will need to comply if their AI systems affect EU citizens or are deployed within the EU. Implementing comprehensive AI governance frameworks, robust documentation practices, and effective risk management systems is no longer optional—it's a regulatory necessity with significant business implications.</p>
      
      <p>At Praesidium Systems, our AI Governance Suite provides the tools organizations need to meet these regulatory requirements efficiently while maintaining innovation velocity. Through automated compliance monitoring, documentation generation, and risk assessment, we help bridge the gap between regulatory compliance and practical AI deployment.</p>
    `,
    author: "Arjav Desai",
    date: "May 20, 2025",
    category: "Regulation",
    image: "/images/blog/eu-ai-act.jpg",
    excerpt: "The EU AI Act represents one of the most comprehensive regulatory frameworks for artificial intelligence to date. In this article, we break down the key requirements and what they mean for your organization.",
    keywords: "EU AI Act, AI governance, regulatory compliance, high-risk AI, AI regulation, Praesidium Systems"
  },
  {
    id: 2,
    title: "Hallucination Detection in Large Language Models: Best Practices",
    content: `
      <h2>Understanding LLM Hallucinations</h2>
      <p>Hallucinations in Large Language Models (LLMs) refer to instances where these models generate information that appears plausible but is factually incorrect or entirely fabricated. As organizations increasingly deploy LLMs in critical applications, detecting and mitigating hallucinations has become essential for maintaining trust, ensuring accuracy, and meeting regulatory requirements.</p>
      
      <h2>The Business Impact of Hallucinations</h2>
      <p>Undetected hallucinations in enterprise AI applications can lead to:</p>
      
      <ul>
        <li>Misinformation propagation within and outside the organization</li>
        <li>Erosion of user trust when incorrect information is provided</li>
        <li>Potential legal liability when AI systems provide false information</li>
        <li>Compliance violations with emerging AI regulations</li>
        <li>Operational inefficiencies when decisions are based on fabricated information</li>
      </ul>
      
      <h2>Technical Approaches to Hallucination Detection</h2>
      
      <h3>1. Retrieval-Augmented Generation (RAG)</h3>
      <p>RAG combines retrieval mechanisms with generation capabilities to ground LLM outputs in verifiable sources:</p>
      <ul>
        <li>Implement vector databases to store and retrieve relevant information</li>
        <li>Use similarity search to find supporting evidence for model claims</li>
        <li>Grade responses based on retrieval confidence scores</li>
        <li>Implement citation mechanisms that link generated content to source documents</li>
      </ul>
      
      <h3>2. Ensemble Methods</h3>
      <p>Leveraging multiple models can provide more reliable hallucination detection:</p>
      <ul>
        <li>Deploy specialized fact-checking models alongside primary generation models</li>
        <li>Compare outputs across different model architectures and versions</li>
        <li>Implement voting systems where multiple models must agree on factual assertions</li>
        <li>Use smaller, specialized models to verify specific claims in particular domains</li>
      </ul>
      
      <h3>3. Statistical Confidence Scoring</h3>
      <p>Quantifying uncertainty in model outputs helps identify potential hallucinations:</p>
      <ul>
        <li>Analyze token-level probability distributions to detect uncertain predictions</li>
        <li>Implement perplexity thresholds that flag potentially hallucinated content</li>
        <li>Utilize temperature sampling to assess consistency across multiple generations</li>
        <li>Deploy calibration techniques to improve probability estimates</li>
      </ul>
      
      <h2>Operational Best Practices</h2>
      
      <h3>1. Implement Multi-layered Verification</h3>
      <p>Build defense-in-depth approaches to hallucination detection:</p>
      <ul>
        <li>Deploy automated pre-checks before content generation</li>
        <li>Implement post-generation verification systems</li>
        <li>Establish clear human review protocols for high-stakes content</li>
        <li>Create "hallucination circuit breakers" that limit AI autonomy when confidence is low</li>
      </ul>
      
      <h3>2. Develop Domain-Specific Knowledge Bases</h3>
      <p>Customize verification approaches to your specific business domain:</p>
      <ul>
        <li>Build specialized knowledge graphs for core business areas</li>
        <li>Implement domain-specific fact-checking rules</li>
        <li>Maintain curated "golden datasets" of verified information</li>
        <li>Create domain-specific red-teaming protocols to probe for common hallucinations</li>
      </ul>
      
      <h3>3. Continuous Monitoring and Feedback Loops</h3>
      <p>Establish systems for ongoing hallucination detection and mitigation:</p>
      <ul>
        <li>Implement user feedback mechanisms to report suspected hallucinations</li>
        <li>Deploy automated monitoring for known hallucination patterns</li>
        <li>Establish regular auditing procedures for AI-generated content</li>
        <li>Create hallucination registers to track and learn from past incidents</li>
      </ul>
      
      <h2>Governance Considerations</h2>
      
      <h3>1. Documentation Requirements</h3>
      <p>Maintain comprehensive records of hallucination detection efforts:</p>
      <ul>
        <li>Document detection methodologies and their limitations</li>
        <li>Maintain logs of detected hallucinations for compliance purposes</li>
        <li>Create clear incident response procedures for significant hallucinations</li>
        <li>Establish internal reporting mechanisms for hallucination trends</li>
      </ul>
      
      <h3>2. Risk-Based Approaches</h3>
      <p>Calibrate hallucination detection efforts based on use case criticality:</p>
      <ul>
        <li>Implement stricter verification for high-risk applications</li>
        <li>Create tiered response protocols based on hallucination severity</li>
        <li>Adjust confidence thresholds based on domain sensitivity</li>
        <li>Develop fallback mechanisms for situations where verification fails</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Effective hallucination detection is no longer optional for organizations deploying LLMs in production environments. By implementing robust technical approaches, operational best practices, and appropriate governance frameworks, organizations can significantly reduce the risks associated with AI hallucinations while maintaining the benefits of generative AI technologies.</p>
      
      <p>Praesidium Systems' AI Compliance Testing System provides comprehensive hallucination detection capabilities, allowing organizations to identify potential issues before they impact users or business operations. Our platform combines multiple detection methodologies with governance workflows to create a complete solution for this critical aspect of AI safety and compliance.</p>
    `,
    author: "Samuel Heidler",
    date: "May 15, 2025",
    category: "Technical",
    image: "/images/blog/hallucination-detection.jpg",
    excerpt: "As LLMs become more prevalent in enterprise applications, detecting and preventing hallucinations is critical. Learn about the latest techniques for ensuring factual accuracy in your AI systems.",
    keywords: "LLM hallucinations, hallucination detection, RAG, AI verification, large language models, AI compliance, Praesidium Systems"
  },
  // Other blog posts...
];

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));
  
  // Handle contact button click (would typically open a contact popup)
  const handleContactClick = () => {
    console.log("Contact button clicked");
  };
  
  // SEO optimization
  useEffect(() => {
    if (post) {
      // Define canonical URL
      const baseUrl = window.location.origin;
      const canonicalUrl = `${baseUrl}/blog/${post.id}`;
      
      // Update meta tags
      updateMetaTags({
        title: post.title,
        description: post.excerpt,
        keywords: post.keywords || `${post.category}, AI governance, AI compliance, Praesidium Systems`,
        canonical: canonicalUrl,
        imageUrl: post.image.startsWith('http') ? post.image : `${baseUrl}${post.image}`,
        type: 'article'
      });
      
      // Add structured data
      const blogPostSchema = generateBlogPostSchema(post);
      addStructuredData(blogPostSchema, 'blog-post-schema');
      
      // Clean up when component unmounts
      return () => {
        removeStructuredData('blog-post-schema');
      };
    } else {
      // Update meta tags for 404 page
      updateMetaTags({
        title: 'Blog Post Not Found',
        description: 'The requested blog post could not be found.',
        canonical: window.location.href
      });
    }
  }, [post]);
  
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
  
  // Content extraction for social sharing
  const firstParagraph = post.content.split('</p>')[0].replace(/<[^>]*>/g, '');
  const socialDescription = firstParagraph.length > 160 
    ? firstParagraph.substring(0, 157) + '...' 
    : firstParagraph;
  
  // Share functions
  const handleTwitterShare = () => {
    const text = encodeURIComponent(`${post.title} - ${socialDescription}`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}&via=PraesidiumSys`, '_blank');
  };
  
  const handleLinkedInShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };
  
  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Interesting article: ${post.title}`);
    const body = encodeURIComponent(`I thought you might find this article interesting:\n\n${post.title}\n${window.location.href}\n\n${socialDescription}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main className="pt-28 pb-20">
        <article className="container mx-auto px-4">
          {/* Back to blog link */}
          <div className="mb-8">
            <Link 
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
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
            
            {/* Featured image with proper alt text for SEO */}
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
          
          {/* Article tags for SEO */}
          <div className="max-w-4xl mx-auto mt-8">
            <div className="flex flex-wrap gap-2">
              {post.keywords?.split(',').map((keyword, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {keyword.trim()}
                </span>
              ))}
            </div>
          </div>
          
          {/* Related articles section */}
          <div className="max-w-5xl mx-auto mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Articles You May Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(relatedPost => relatedPost.id !== post.id)
                .slice(0, 3)
                .map(relatedPost => (
                  <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <Link to={`/blog/${relatedPost.id}`}>
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
                        >
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{relatedPost.excerpt}</p>
                      <Link 
                        to={`/blog/${relatedPost.id}`}
                        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
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