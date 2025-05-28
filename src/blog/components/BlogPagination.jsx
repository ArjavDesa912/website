// src/blog/components/BlogPagination.jsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * BlogPagination component provides pagination controls for blog posts
 * 
 * @param {Number} currentPage - Current page number
 * @param {Number} totalPages - Total number of pages
 * @param {Function} onPageChange - Callback when page changes
 * @param {Boolean} showPageNumbers - Whether to show page numbers
 * @param {Number} maxVisiblePages - Maximum number of visible page numbers
 */
const BlogPagination = ({ 
  currentPage = 1, 
  totalPages = 1, 
  onPageChange,
  showPageNumbers = true,
  maxVisiblePages = 5
}) => {
  // Handle page change
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    
    if (onPageChange) {
      onPageChange(newPage);
      
      // Scroll to top smoothly
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  
  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    
    // If we have fewer pages than the max visible, show all
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers;
    }
    
    // Always show first page
    pageNumbers.push(1);
    
    // Calculate start and end of visible pages
    let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 3);
    
    // Adjust if we're near the end
    if (endPage <= startPage) {
      endPage = Math.min(totalPages - 1, startPage + 1);
    }
    
    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pageNumbers.push('...');
    }
    
    // Add visible page numbers
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pageNumbers.push('...');
    }
    
    // Always show last page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  // If only one page, don't show pagination
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="flex justify-center mt-12" aria-label="Pagination">
      <ul className="inline-flex items-center -space-x-px">
        {/* Previous page button */}
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-l-lg border border-gray-300 ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </li>
        
        {/* Page numbers */}
        {showPageNumbers && getPageNumbers().map((page, index) => (
          <li key={`page-${index}`}>
            {page === '...' ? (
              <span className="px-4 py-2 border border-gray-300 bg-white text-gray-700">
                ...
              </span>
            ) : (
              <button
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 border border-gray-300 ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                aria-current={currentPage === page ? 'page' : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            )}
          </li>
        ))}
        
        {/* Next page button */}
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-r-lg border border-gray-300 ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            aria-label="Next page"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default BlogPagination;