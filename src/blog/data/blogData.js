// src/blog/data/blogData.js
// Import all blog posts
import post1 from './posts/post1.js';
import post2 from './posts/post2.js';
import post3 from './posts/post3.js';
import post4 from './posts/post4.js';
import post5 from './posts/post5.js';
import post6 from './posts/post6.js';
import post7 from './posts/post7.js';
import post8 from './posts/post8.js';
import post9 from './posts/post9.js';
import post10 from './posts/post10.js';

// Consolidated blog data array
const blogPosts = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7, 
  post8,
  post9,
  post10
];

// Sort posts by date (newest first)
blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

// Categories for filtering
export const categories = [
  "All", 
  "Regulation", 
  "Technical", 
  "Industry", 
  "Best Practices", 
  "Documentation", 
  "Risk Management", 
  "Ethics"
];

// Authors with details
export const authors = {
  "Arjav Desai": {
    role: "Co-Founder & CEO",
    bio: "AI governance expert with 10+ years of experience in regulatory compliance and risk management.",
    photo: "/images/arjav.png"
  },
  "Samuel Heidler": {
    role: "Co-Founder & CTO",
    bio: "Machine learning engineer specializing in AI safety and testing methodologies for enterprise systems.",
    photo: "/images/sam.png"
  }
};

export default blogPosts;