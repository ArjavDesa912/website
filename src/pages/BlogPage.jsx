import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Understanding the EU AI Act: Implications for Enterprise AI Governance",
    excerpt: "The EU AI Act represents one of the most comprehensive regulatory frameworks for artificial intelligence to date. In this article, we break down the key requirements and what they mean for your organization.",
    author: "Arjav Desai",
    date: "May 20, 2025",
    category: "Regulation",
    image: "/images/blog/eu-ai-act.jpg"
  },
  {
    id: 2,
    title: "Hallucination Detection in Large Language Models: Best Practices",
    excerpt: "As LLMs become more prevalent in enterprise applications, detecting and preventing hallucinations is critical. Learn about the latest techniques for ensuring factual accuracy in your AI systems.",
    author: "Samuel Heidler",
    date: "May 15, 2025",
    category: "Technical",
    image: "/images/blog/hallucination-detection.jpg"
  },
  {
    id: 3,
    title: "Building a Robust AI Governance Framework for Financial Services",
    excerpt: "Financial institutions face unique challenges when implementing AI systems. This guide outlines a step-by-step approach to establishing governance controls that satisfy regulatory requirements.",
    author: "Arjav Desai",
    date: "May 10, 2025",
    category: "Industry",
    image: "/images/blog/financial-governance.jpg"
  },
  {
    id: 4,
    title: "The Role of Documentation in Responsible AI Development",
    excerpt: "Comprehensive documentation is a cornerstone of responsible AI. Discover how automated documentation can streamline compliance while improving transparency and accountability.",
    author: "Samuel Heidler",
    date: "May 5, 2025",
    category: "Best Practices",
    image: "/images/blog/ai-documentation.jpg"
  },
  {
    id: 5,
    title: "AI Compliance Testing: Moving Beyond Accuracy Metrics",
    excerpt: "Traditional ML evaluation focuses heavily on accuracy, but compliance requires a broader approach. Learn how to implement testing protocols that address fairness, transparency, and explainability.",
    author: "Arjav Desai",
    date: "April 30, 2025",
    category: "Technical",
    image: "/images/blog/testing-metrics.jpg"
  }
];

// Categories for filtering
const categories = ["All", "Regulation", "Technical", "Industry", "Best Practices"];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Handle contact button click (would typically open a contact popup)
  const handleContactClick = () => {
    console.log("Contact button clicked");
  };
  
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
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog Posts */}
          <div className="max-w-5xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className="space-y-10">
                {filteredPosts.map(post => (
                  <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="h-full w-full object-cover" 
                        // Placeholder for missing images in development
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/400x300?text=Praesidium+Blog";
                        }}
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                          <Tag className="h-3.5 w-3.5 mr-1" />
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <span className="flex items-center mr-4">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                      </div>
                      <button className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                        Read Article
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </button>
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
          </div>
          
          {/* Newsletter Signup */}
          <div className="max-w-3xl mx-auto mt-20 bg-blue-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated</h3>
            <p className="text-gray-700 mb-6">
              Subscribe to our newsletter for the latest insights on AI governance and compliance
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;