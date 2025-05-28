import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { 
  updateMetaTags, 
  generateOrganizationSchema, 
  addStructuredData, 
  removeStructuredData 
} from '../../utils/seoHelpers';

// Import blog data from the central data file
import blogPosts from '../data/blogData';
// Import categories from the central data file
import { categories } from '../data/blogData';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Display 6 posts per page
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);
  
  // Handle contact button click (would typically open a contact popup)
  const handleContactClick = () => {
    console.log("Contact button clicked");
  };
  
  // SEO optimization
  useEffect(() => {
    // Define meta tags
    const baseUrl = window.location.origin;
    const canonicalUrl = `${baseUrl}/blog${currentPage > 1 ? `?page=${currentPage}` : ''}`;
    
    // Generate title based on selected category and pagination
    let title = "AI Governance Insights";
    if (selectedCategory !== "All") {
      title = `${selectedCategory} Articles - AI Governance Insights`;
    }
    if (currentPage > 1) {
      title = `${title} - Page ${currentPage}`;
    }
    
    // Generate description based on selected category
    let description = "Expert perspectives on AI compliance, regulation, and governance best practices from Praesidium Systems.";
    if (selectedCategory !== "All") {
      description = `Explore our ${selectedCategory} articles on AI governance, compliance, and best practices for enterprise AI systems.`;
    }
    
    // Generate keywords based on selected category
    const baseKeywords = "AI governance, compliance, regulatory frameworks, AI ethics, AI documentation";
    let keywords = baseKeywords;
    if (selectedCategory !== "All") {
      keywords = `${selectedCategory.toLowerCase()}, ${baseKeywords}`;
    }
    
    // Update meta tags
    updateMetaTags({
      title,
      description,
      keywords,
      canonical: canonicalUrl,
      type: 'website'
    });
    
    // Add structured data for website
    const organizationSchema = generateOrganizationSchema();
    addStructuredData(organizationSchema, 'organization-schema');
    
    // Add blog list structured data
    const blogListingSchema = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "headline": "Praesidium Systems AI Governance Blog",
      "description": "Expert perspectives on AI compliance, regulation, and governance best practices",
      "url": canonicalUrl,
      "blogPost": currentPosts.map(post => ({
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "url": `${baseUrl}/blog/${post.slug}`
      }))
    };
    
    addStructuredData(JSON.stringify(blogListingSchema), 'blog-listing-schema');
    
    // Clean up when component unmounts
    return () => {
      removeStructuredData('organization-schema');
      removeStructuredData('blog-listing-schema');
    };
  }, [selectedCategory, currentPosts, currentPage]);
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Governance Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert perspectives on AI compliance, regulation, and governance best practices
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-5xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full py-3 pl-12 pr-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search articles"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Category filters">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="max-w-5xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="space-y-10" role="feed" aria-label="Blog posts">
                {currentPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <Link to={`/blog/${post.slug}`}>
                        <img 
                          src={post.image} 
                          alt={`${post.title} - Praesidium Systems Blog`}
                          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
                          width="400"
                          height="300"
                          // Placeholder for missing images in development
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/400x300?text=Praesidium+Blog";
                          }}
                        />
                      </Link>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          <Tag className="h-3.5 w-3.5 mr-1" />
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
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
                      >
                        Read Article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
            
            {/* Pagination Controls */}
            {filteredPosts.length > postsPerPage && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center -space-x-px" aria-label="Pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 rounded-l-lg border border-gray-300 ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                    aria-label="Previous page"
                  >
                    &laquo; Previous
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePageChange(pageNumber)}
                      className={`px-4 py-2 border border-gray-300 ${
                        currentPage === pageNumber
                          ? 'bg-blue-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                      aria-current={currentPage === pageNumber ? 'page' : undefined}
                      aria-label={`Page ${pageNumber}`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 rounded-r-lg border border-gray-300 ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                    aria-label="Next page"
                  >
                    Next &raquo;
                  </button>
                </nav>
              </div>
            )}
          </div>
          
          {/* Newsletter Signup */}
          <div className="max-w-3xl mx-auto mt-20 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated</h3>
            <p className="text-gray-700 mb-6">
              Subscribe to our newsletter for the latest insights on AI governance and compliance
            </p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                aria-label="Email address"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our privacy policy and consent to receive marketing emails.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;