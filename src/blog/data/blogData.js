// src/blog/data/blogData.js
// Import all blog posts
import post1 from './posts/eu-ai-act-compliance';
import post2 from './posts/hallucination-detection';
import post3 from './posts/ai-governance-framework';
import post4 from './posts/documentation-best-practices';
import post5 from './posts/testing-beyond-accuracy';
import post6 from './posts/llm-regulations-comparison';
import post7 from './posts/model-cards-guide';
import post8 from './posts/financial-ai-governance';
import post9 from './posts/ai-risk-management';
import post10 from './posts/ethical-ai-principles';

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
    photo: "/images/team/arjav.png"
  },
  "Samuel Heidler": {
    role: "Co-Founder & CTO",
    bio: "Machine learning engineer specializing in AI safety and testing methodologies for enterprise systems.",
    photo: "/images/team/sam.png"
  }
};

export default blogPosts;