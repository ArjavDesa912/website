import React from 'react';
import ProductPage from './ProductPage';
import { 
  Code, 
  Shield, 
  AlertTriangle, 
  FileCheck, 
  Gauge, 
  Workflow
} from 'lucide-react';

const ComplianceFrameworkPage = () => {
  const features = [
    {
      icon: Code,
      title: "Automated Policy Controls",
      description: "Automatically enforce regulatory requirements from GDPR, EU AI Act, NIST AI RMF, and other frameworks with customizable policy controls."
    },
    {
      icon: Shield,
      title: "Real-time Monitoring",
      description: "Track model outputs in real-time to ensure they comply with regulatory requirements and corporate ethical guidelines."
    },
    {
      icon: AlertTriangle,
      title: "Risk Detection & Alerts",
      description: "Intelligent risk scoring system identifies potential compliance issues and sends automated alerts to stakeholders."
    },
    {
      icon: FileCheck,
      title: "Audit Trails",
      description: "Comprehensive logging of all AI interactions creates immutable audit trails for regulatory inspections and internal reviews."
    },
    {
      icon: Gauge,
      title: "Compliance Dashboards",
      description: "Intuitive dashboards provide at-a-glance visibility into compliance status across all AI systems in your organization."
    },
    {
      icon: Workflow,
      title: "Adaptive Workflows",
      description: "Configure approval workflows and escalation paths tailored to your organization's governance structure."
    }
  ];
  
  const benefits = [
    {
      title: "Regulatory Confidence",
      description: "Proactively address compliance requirements across multiple jurisdictions, reducing regulatory uncertainty and risk."
    },
    {
      title: "Reduced Manual Oversight",
      description: "Automation of compliance monitoring reduces the need for constant human supervision, freeing up resources."
    },
    {
      title: "Faster Time-to-Market",
      description: "Streamlined compliance processes allow AI projects to move from development to production more quickly."
    },
    {
      title: "Enhanced Stakeholder Trust",
      description: "Demonstrate responsible AI use to customers, investors, and other stakeholders through verifiable compliance controls."
    },
    {
      title: "Lower Compliance Costs",
      description: "Avoid costly remediation efforts and potential fines by identifying and addressing compliance issues early."
    }
  ];
  
  return (
    <ProductPage 
      title="AI Compliance Framework"
      subtitle="Automated governance for AI regulatory requirements"
      description="Our AI Compliance Framework transforms complex regulatory requirements into automated policy controls, providing continuous monitoring and verification of AI systems against global standards and your organization's ethical guidelines."
      features={features}
      benefits={benefits}
      heroImage="/images/products/compliance-framework.png"
      ctaText="Request Demo"
    />
  );
};

export default ComplianceFrameworkPage;