import React from 'react';
import ProductPage from './ProductPage';
import { 
  TestTube, 
  Scale, 
  ShieldAlert, 
  Repeat, 
  GitMerge, 
  BarChart2 
} from 'lucide-react';

const ComplianceTestingPage = () => {
  const features = [
    {
      icon: TestTube,
      title: "Comprehensive Test Suites",
      description: "Pre-built and customizable test suites covering functional testing, compliance validation, and performance evaluation for all types of AI models."
    },
    {
      icon: Scale,
      title: "Bias & Fairness Assessment",
      description: "Sophisticated tools to detect and measure bias across different demographic groups and sensitive attributes."
    },
    {
      icon: ShieldAlert,
      title: "Security Vulnerability Scanning",
      description: "Identify potential security issues including prompt injection vulnerabilities, data leakage risks, and adversarial attack vectors."
    },
    {
      icon: Repeat,
      title: "Continuous Validation",
      description: "Automatically validate models against compliance criteria as they evolve, ensuring ongoing adherence to standards."
    },
    {
      icon: GitMerge,
      title: "CI/CD Integration",
      description: "Seamlessly integrate compliance testing into your existing CI/CD pipelines with native support for GitHub Actions, Jenkins, and more."
    },
    {
      icon: BarChart2,
      title: "Detailed Test Reports",
      description: "Generate comprehensive test reports that document compliance status, identified issues, and recommended remediation steps."
    }
  ];
  
  const benefits = [
    {
      title: "Prevent Compliance Issues Early",
      description: "Identify and address potential compliance problems during development, before they impact production systems or users."
    },
    {
      title: "Accelerate Model Approvals",
      description: "Streamline governance reviews with automated test reports that demonstrate regulatory compliance and ethical considerations."
    },
    {
      title: "Enhance Model Quality",
      description: "Improve overall model quality and reliability through rigorous testing that goes beyond traditional accuracy metrics."
    },
    {
      title: "Reduce Operational Risk",
      description: "Minimize the risk of model failures, biased outputs, or security breaches that could harm users or damage reputation."
    },
    {
      title: "Simplify Audit Processes",
      description: "Facilitate internal and external audits with detailed test documentation and evidence of compliance verification."
    }
  ];
  
  return (
    <ProductPage 
      title="AI Compliance Testing System"
      subtitle="Automated testing for responsible AI deployment"
      description="Our AI Compliance Testing System provides comprehensive validation of AI models against regulatory requirements, ethical guidelines, and performance standards. It enables continuous testing throughout the development lifecycle to ensure models are accurate, fair, secure, and compliant before deployment."
      features={features}
      benefits={benefits}
      heroImage="/images/products/compliance-testing.png"
      ctaText="Schedule Demo"
    />
  );
};

export default ComplianceTestingPage;