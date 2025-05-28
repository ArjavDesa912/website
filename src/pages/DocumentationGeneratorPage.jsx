import React from 'react';
import ProductPage from './ProductPage';
import { 
  FileText, 
  FilePlus, 
  GitBranch, 
  Download, 
  Bot, 
  Layers 
} from 'lucide-react';

const DocumentationGeneratorPage = () => {
  const features = [
    {
      icon: FileText,
      title: "Template-Driven Documentation",
      description: "Generate standardized documentation using customizable templates designed for different regulatory frameworks and internal requirements."
    },
    {
      icon: Bot,
      title: "LLM-Powered Synthesis",
      description: "Leverage large language models to automatically transform technical metadata, code, and artifacts into human-readable documentation."
    },
    {
      icon: FilePlus,
      title: "Model Cards Generator",
      description: "Create comprehensive model cards that capture performance characteristics, limitations, ethical considerations, and deployment guidelines."
    },
    {
      icon: GitBranch,
      title: "Version Control Integration",
      description: "Seamlessly integrate with Git and other version control systems to track documentation changes alongside model updates."
    },
    {
      icon: Download,
      title: "Multi-Format Export",
      description: "Export documentation in multiple formats including PDF, HTML, Markdown, and JSON for integration with various systems."
    },
    {
      icon: Layers,
      title: "Metadata Management",
      description: "Automatically extract and organize metadata from models, datasets, and training pipelines to ensure documentation completeness."
    }
  ];
  
  const benefits = [
    {
      title: "Drastically Reduced Documentation Time",
      description: "Automate up to 80% of documentation efforts, allowing data scientists and ML engineers to focus on development rather than paperwork."
    },
    {
      title: "Standardized Knowledge Capture",
      description: "Ensure consistent documentation quality across teams and projects with standardized templates and automated validation."
    },
    {
      title: "Simplified Regulatory Compliance",
      description: "Meet documentation requirements for regulations like the EU AI Act without additional effort from technical teams."
    },
    {
      title: "Improved Model Governance",
      description: "Enhance model governance with detailed, always-up-to-date documentation that accurately reflects the current state of AI systems."
    },
    {
      title: "Knowledge Preservation",
      description: "Prevent knowledge loss when team members change roles by systematically capturing insights and decisions in documentation."
    }
  ];
  
  return (
    <ProductPage 
      title="ML/LLM Documentation Generator"
      subtitle="Automated documentation for AI model governance"
      description="Our Documentation Generator leverages LLMs to automate the creation of comprehensive AI documentation, from model cards to audit reports. It extracts information directly from code, metadata, and existing artifacts to produce high-quality documentation that meets regulatory standards."
      features={features}
      benefits={benefits}
      heroImage="/images/products/documentation-generator.png"
      ctaText="See It In Action"
    />
  );
};

export default DocumentationGeneratorPage;