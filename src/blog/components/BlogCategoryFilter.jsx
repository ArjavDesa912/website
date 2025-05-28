// src/blog/components/BlogCategoryFilter.jsx
import React from 'react';
import { trackFeatureInteraction } from '../../utils/analyticsUtils';

/**
 * BlogCategoryFilter component provides category filtering for blog posts
 * 
 * @param {Array} categories - List of available categories
 * @param {String} selectedCategory - Currently selected category
 * @param {Function} onCategoryChange - Callback when category changes
 * @param {String} layout - Layout style (horizontal, vertical, pills, dropdown)
 */
const BlogCategoryFilter = ({ 
  categories = [], 
  selectedCategory = 'All', 
  onCategoryChange,
  layout = 'pills'
}) => {
  // Handle category selection
  const handleCategorySelect = (category) => {
    if (onCategoryChange) {
      onCategoryChange(category);
    }
    
    // Track category selection
    trackFeatureInteraction('category_filter', 'select', category);
  };
  
  // Dropdown layout
  if (layout === 'dropdown') {
    return (
      <div className="relative" role="group" aria-label="Category filters">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategorySelect(e.target.value)}
          className="block w-full px-4 py-2 pr-8 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white"
          aria-label="Filter by category"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    );
  }
  
  // Vertical layout
  if (layout === 'vertical') {
    return (
      <div className="space-y-2" role="group" aria-label="Category filters">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
  
  // Pills layout (default)
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Category filters">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => handleCategorySelect(category)}
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
  );
};

export default BlogCategoryFilter;