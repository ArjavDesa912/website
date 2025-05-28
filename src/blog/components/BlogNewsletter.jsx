// src/blog/components/BlogNewsletter.jsx
import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { trackNewsletterSignup } from '../../utils/analyticsUtils';

/**
 * BlogNewsletter component provides a newsletter signup form
 * 
 * @param {String} title - Newsletter title
 * @param {String} description - Newsletter description
 * @param {String} source - Source of signup for analytics
 * @param {String} buttonText - Text for the submit button
 * @param {String} variant - Visual variant (default, compact, card)
 */
const BlogNewsletter = ({
  title = "Stay Updated",
  description = "Subscribe to our newsletter for the latest insights on AI governance and compliance",
  source = "blog",
  buttonText = "Subscribe",
  variant = "default"
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }
    
    // Set loading state
    setStatus('loading');
    
    try {
      // In a real implementation, this would call an API endpoint
      // For demo purposes, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Track newsletter signup
      trackNewsletterSignup(source);
      
      // Set success state
      setStatus('success');
      setMessage('Thank you for subscribing!');
      setEmail('');
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 5000);
    } catch (error) {
      // Set error state
      setStatus('error');
      setMessage('An error occurred. Please try again.');
      
      console.error('Newsletter signup error:', error);
    }
  };

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className="flex flex-col items-center">
        <form 
          className="flex w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-2 rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            aria-label="Email address"
            required
          />
          <button 
            type="submit"
            className={`px-4 py-2 rounded-r-lg text-white ${
              status === 'loading' 
                ? 'bg-blue-400' 
                : status === 'success'
                  ? 'bg-green-600'
                  : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors whitespace-nowrap`}
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : buttonText}
          </button>
        </form>
        
        {message && (
          <div className={`mt-2 text-sm ${status === 'error' ? 'text-red-600' : 'text-green-600'} flex items-center`}>
            {status === 'error' ? <AlertCircle className="h-4 w-4 mr-1" /> : <CheckCircle className="h-4 w-4 mr-1" />}
            {message}
          </div>
        )}
      </div>
    );
  }
  
  // Card variant
  if (variant === 'card') {
    return (
      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <Mail className="h-8 w-8 text-blue-600 mx-auto mb-3" />
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-700 mb-6">{description}</p>
        
        <form 
          className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading' || status === 'success'}
            aria-label="Email address"
            required
          />
          <button 
            type="submit"
            className={`px-6 py-3 rounded-lg text-white ${
              status === 'loading' 
                ? 'bg-blue-400' 
                : status === 'success'
                  ? 'bg-green-600'
                  : 'bg-blue-600 hover:bg-blue-700'
            } transition-colors whitespace-nowrap`}
            disabled={status === 'loading' || status === 'success'}
          >
            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : buttonText}
          </button>
        </form>
        
        {message && (
          <div className={`mt-4 text-sm ${status === 'error' ? 'text-red-600' : 'text-green-600'} flex items-center justify-center`}>
            {status === 'error' ? <AlertCircle className="h-4 w-4 mr-1" /> : <CheckCircle className="h-4 w-4 mr-1" />}
            {message}
          </div>
        )}
        
        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to our privacy policy and consent to receive marketing emails.
        </p>
      </div>
    );
  }
  
  // Default variant
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
      
      <form 
        className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          placeholder="Your email address"
          className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading' || status === 'success'}
          aria-label="Email address"
          required
        />
        <button 
          type="submit"
          className={`px-6 py-3 rounded-lg text-white ${
            status === 'loading' 
              ? 'bg-blue-400' 
              : status === 'success'
                ? 'bg-green-600'
                : 'bg-blue-600 hover:bg-blue-700'
          } transition-colors whitespace-nowrap`}
          disabled={status === 'loading' || status === 'success'}
        >
          {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : buttonText}
        </button>
      </form>
      
      {message && (
        <div className={`mt-4 text-sm ${status === 'error' ? 'text-red-600' : 'text-green-600'} flex items-center justify-center`}>
          {status === 'error' ? <AlertCircle className="h-4 w-4 mr-1" /> : <CheckCircle className="h-4 w-4 mr-1" />}
          {message}
        </div>
      )}
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        By subscribing, you agree to our privacy policy and consent to receive marketing emails.
      </p>
    </div>
  );
};

export default BlogNewsletter;