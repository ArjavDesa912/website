// src/blog/components/BlogSearch.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { trackSearch } from '../../utils/analyticsUtils';

/**
 * BlogSearch component provides search functionality for blog posts
 * 
 * @param {String} initialQuery - Initial search query
 * @param {Function} onSearch - Callback when search is performed
 * @param {String} placeholder - Placeholder text for search input
 * @param {Boolean} showIcon - Whether to show the search icon
 */
const BlogSearch = ({ 
  initialQuery = '', 
  onSearch, 
  placeholder = 'Search articles...', 
  showIcon = true 
}) => {
  const [query, setQuery] = useState(initialQuery);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const searchTimeoutRef = useRef(null);
  
  // Handle input change with debounce
  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    
    // Clear existing timeout
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }
    
    // Set new timeout to debounce search
    searchTimeoutRef.current = setTimeout(() => {
      if (onSearch) {
        onSearch(newQuery);
        
        // Track search query if non-empty
        if (newQuery.trim() !== '') {
          trackSearch(newQuery);
        }
      }
    }, 300);
  };
  
  // Handle clear button click
  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
    inputRef.current?.focus();
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
      
      // Track search query if non-empty
      if (query.trim() !== '') {
        trackSearch(query, true); // explicit search
      }
    }
  };
  
  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, []);

  return (
    <form 
      className={`relative flex-grow transition-all duration-200 ${isFocused ? 'ring-2 ring-blue-300' : ''}`}
      onSubmit={handleSubmit}
      role="search"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        className={`w-full py-3 ${showIcon ? 'pl-12' : 'pl-4'} pr-10 rounded-lg border border-gray-300 focus:outline-none`}
        value={query}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        aria-label="Search articles"
      />
      
      {/* Search icon */}
      {showIcon && (
        <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" aria-hidden="true" />
      )}
      
      {/* Clear button - only show if there's text */}
      {query.length > 0 && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Clear search"
        >
          <X className="h-5 w-5" />
        </button>
      )}
      
      {/* Hidden submit button for accessibility */}
      <button type="submit" className="sr-only">Search</button>
    </form>
  );
};

export default BlogSearch;