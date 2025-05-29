import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Search, Calendar, User, Tag, ArrowRight, TrendingUp, BookOpen, Filter, Grid, List } from 'lucide-react';
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
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const postsPerPage = 6; // Display 6 posts per page
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  // Get featured post (first post)
  const featuredPost = blogPosts[0];
  
  // Get recent posts (excluding featured)
  // const recentPosts = blogPosts.slice(1, 4);
  
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
  
  // Handle contact button click
  const handleContactClick = () => {
    console.log("Contact button clicked");
  };
  
  // SEO optimization
  useEffect(() => {
    const baseUrl = window.location.origin;
    const canonicalUrl = `${baseUrl}/blog${currentPage > 1 ? `?page=${currentPage}` : ''}`;
    
    let title = "AI Governance Insights & Expert Analysis";
    if (selectedCategory !== "All") {
      title = `${selectedCategory} Articles - AI Governance Insights`;
    }
    if (currentPage > 1) {
      title = `${title} - Page ${currentPage}`;
    }
    
    let description = "Expert perspectives on AI compliance, regulation, and governance best practices. Stay informed with the latest insights from Praesidium Systems.";
    if (selectedCategory !== "All") {
      description = `Explore our ${selectedCategory} articles on AI governance, compliance, and best practices for enterprise AI systems.`;
    }
    
    const baseKeywords = "AI governance, AI compliance, regulatory frameworks, AI ethics, AI documentation, machine learning compliance";
    let keywords = baseKeywords;
    if (selectedCategory !== "All") {
      keywords = `${selectedCategory.toLowerCase()}, ${baseKeywords}`;
    }
    
    updateMetaTags({
      title,
      description,
      keywords,
      canonical: canonicalUrl,
      type: 'website'
    });
    
    const organizationSchema = generateOrganizationSchema();
    addStructuredData(organizationSchema, 'organization-schema');
    
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
    
    return () => {
      removeStructuredData('organization-schema');
      removeStructuredData('blog-listing-schema');
    };
  }, [selectedCategory, currentPosts, currentPage]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 font-sans">
      <Header onContactClick={handleContactClick} />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
                <BookOpen className="h-4 w-4 mr-2" />
                Expert AI Governance Insights
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                AI Governance Hub
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Stay ahead of the evolving AI landscape with expert analysis, regulatory updates, and practical guidance for enterprise AI governance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-3 text-blue-100">
                  <TrendingUp className="h-5 w-5" />
                  <span className="font-medium">{blogPosts.length}+ Expert Articles</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-blue-200/50"></div>
                <div className="flex items-center gap-3 text-blue-100">
                  <User className="h-5 w-5" />
                  <span className="font-medium">Industry Leaders</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-blue-200/50"></div>
                <div className="flex items-center gap-3 text-blue-100">
                  <BookOpen className="h-5 w-5" />
                  <span className="font-medium">Weekly Updates</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="py-16 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Featured Article</h2>
                </div>
                
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <Link to={`/blog/${featuredPost.slug}`} className="block">
                        <div className="relative overflow-hidden h-64 md:h-full">
                          <img 
                            src={featuredPost.image} 
                            alt={featuredPost.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/600x400?text=Praesidium+Systems+Blog";
                            }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </Link>
                    </div>
                    <div className="md:w-1/2 p-8 md:p-12">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200">
                          <Tag className="h-3 w-3 mr-1" />
                          {featuredPost.category}
                        </span>
                        <span className="text-sm text-gray-500">{featuredPost.readingTime} min read</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                        <Link 
                          to={`/blog/${featuredPost.slug}`}
                          className="hover:text-blue-600 transition-colors duration-300"
                        >
                          {featuredPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {featuredPost.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                            <p className="text-sm text-gray-500 flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {featuredPost.date}
                            </p>
                          </div>
                        </div>
                        
                        <Link 
                          to={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                          Read Article
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Search and Filters */}
        <section className="py-12 bg-white/60 backdrop-blur-sm border-b border-gray-200/50 sticky top-24 z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search Bar */}
                <div className="relative flex-grow max-w-lg">
                  <input
                    type="text"
                    placeholder="Search articles, authors, topics..."
                    className="w-full py-4 pl-12 pr-6 rounded-2xl border-2 border-gray-200 focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-lg text-lg"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    aria-label="Search articles"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                
                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {categories.slice(0, 6).map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105"
                          : "bg-white/80 text-gray-700 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 shadow-md hover:shadow-lg"
                      }`}
                      aria-pressed={selectedCategory === category}
                    >
                      {category}
                    </button>
                  ))}
                  
                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="lg:hidden p-2 rounded-full bg-white/80 border border-gray-200 hover:bg-blue-50 transition-colors"
                  >
                    <Filter className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                
                {/* View Mode Toggle */}
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-md">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      viewMode === 'grid' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-blue-600'
                    }`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      viewMode === 'list' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-blue-600'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              {/* Results Count */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Showing <span className="font-semibold text-blue-600">{filteredPosts.length}</span> 
                  {selectedCategory !== "All" && (
                    <span> {selectedCategory.toLowerCase()}</span>
                  )} articles
                  {searchTerm && (
                    <span> matching "{searchTerm}"</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredPosts.length > 0 ? (
                <>
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {currentPosts.map(post => (
                        <article key={post.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                          <Link to={`/blog/${post.slug}`} className="block">
                            <div className="relative overflow-hidden h-48">
                              <img 
                                src={post.image} 
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                  e.target.src = "https://via.placeholder.com/400x200?text=Praesidium+Blog";
                                }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                              <div className="absolute top-4 left-4">
                                <span className="inline-flex items-center px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-800">
                                  <Tag className="h-3 w-3 mr-1" />
                                  {post.category}
                                </span>
                              </div>
                            </div>
                          </Link>
                          
                          <div className="p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                              <Link to={`/blog/${post.slug}`}>
                                {post.title}
                              </Link>
                            </h3>
                            
                            <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                                  {post.author.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <p className="text-xs font-medium text-gray-900">{post.author}</p>
                                  <p className="text-xs text-gray-500">{post.date}</p>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {post.readingTime} min
                              </span>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {currentPosts.map(post => (
                        <article key={post.id} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                          <div className="md:flex">
                            <div className="md:w-1/3">
                              <Link to={`/blog/${post.slug}`} className="block">
                                <div className="relative overflow-hidden h-48 md:h-full">
                                  <img 
                                    src={post.image} 
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    onError={(e) => {
                                      e.target.src = "https://via.placeholder.com/400x200?text=Praesidium+Blog";
                                    }}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                              </Link>
                            </div>
                            <div className="md:w-2/3 p-6 md:p-8">
                              <div className="flex items-center gap-3 mb-3">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 border border-blue-200">
                                  <Tag className="h-3 w-3 mr-1" />
                                  {post.category}
                                </span>
                                <span className="text-sm text-gray-500">{post.readingTime} min read</span>
                              </div>
                              
                              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                                <Link 
                                  to={`/blog/${post.slug}`}
                                  className="hover:text-blue-600 transition-colors duration-300"
                                >
                                  {post.title}
                                </Link>
                              </h3>
                              
                              <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {post.author.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div>
                                    <p className="font-semibold text-gray-900">{post.author}</p>
                                    <p className="text-sm text-gray-500 flex items-center gap-1">
                                      <Calendar className="h-3 w-3" />
                                      {post.date}
                                    </p>
                                  </div>
                                </div>
                                
                                <Link 
                                  to={`/blog/${post.slug}`}
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                >
                                  Read More
                                  <ArrowRight className="h-4 w-4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                  
                  {/* Pagination Controls */}
                  {filteredPosts.length > postsPerPage && (
                    <div className="mt-16 flex justify-center">
                      <nav className="flex items-center gap-2" aria-label="Pagination">
                        <button
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                          className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                            currentPage === 1
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
                          }`}
                          aria-label="Previous page"
                        >
                          Previous
                        </button>
                        
                        {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                          let pageNumber;
                          if (totalPages <= 5) {
                            pageNumber = i + 1;
                          } else if (currentPage <= 3) {
                            pageNumber = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNumber = totalPages - 4 + i;
                          } else {
                            pageNumber = currentPage - 2 + i;
                          }
                          
                          return (
                            <button
                              key={pageNumber}
                              onClick={() => handlePageChange(pageNumber)}
                              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                                currentPage === pageNumber
                                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
                              }`}
                              aria-current={currentPage === pageNumber ? 'page' : undefined}
                              aria-label={`Page ${pageNumber}`}
                            >
                              {pageNumber}
                            </button>
                          );
                        })}
                        
                        <button
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                          className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                            currentPage === totalPages
                              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md hover:shadow-lg'
                          }`}
                          aria-label="Next page"
                        >
                          Next
                        </button>
                      </nav>
                    </div>
                  )}
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="h-12 w-12 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No articles found</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategory("All");
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
                <BookOpen className="h-4 w-4 mr-2" />
                Stay Informed
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Never Miss an Update
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
                Get the latest insights on AI governance, regulatory updates, and best practices delivered straight to your inbox.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-6 py-4 rounded-2xl border-2 border-white/20 focus:ring-4 focus:ring-white/20 focus:border-white/40 outline-none transition-all duration-300 bg-white/10 backdrop-blur-sm placeholder-white/70 text-white text-lg"
                  aria-label="Email address"
                  required
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-white text-blue-600 rounded-2xl hover:bg-blue-50 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Weekly AI governance insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Regulatory update alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>No spam, unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;