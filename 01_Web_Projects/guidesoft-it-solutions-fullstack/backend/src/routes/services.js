const express = require('express');
const router = express.Router();

const servicesData = [
  {
    id: 'web-development',
    title: 'Enterprise Web Development',
    category: 'IT Services',
    description: 'High-performance Next.js, React, and fullstack cloud-native web application engineering.',
    features: ['Next.js & React SPA/SSR', 'Microservices & REST/GraphQL APIs', 'Scalable Cloud Hosting', 'SEO & Performance Optimization'],
    icon: 'code'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Engineering',
    category: 'IT Services',
    description: 'Cross-platform native experiences for iOS & Android built with React Native and Expo.',
    features: ['Cross-platform Codebase', 'Offline First Architecture', 'Push Notifications', 'App Store & Play Store Deployment'],
    icon: 'smartphone'
  },
  {
    id: 'ai-platform-solutions',
    title: 'Generative AI & Semantic Search',
    category: 'AI & Data',
    description: 'Custom AI agent integrations, vector databases, and Elasticsearch ELSER semantic pipelines.',
    features: ['Custom LLM Workflows', 'Vector Embeddings & RAG', 'Automated Agent Orchestration', 'Enterprise Data Protection'],
    icon: 'cpu'
  },
  {
    id: 'immigration-visa-flow',
    title: 'Global Immigration & Visa Processing',
    category: 'Visa Consulting',
    description: 'End-to-end documentation, visa tracking, study abroad, and work permit processing platform.',
    features: ['Document Verification', 'Automated Status Tracking', 'Appointment Scheduling', 'Compliance Audits'],
    icon: 'globe'
  },
  {
    id: 'cloud-devops',
    title: 'Cloud Infrastructure & DevOps',
    category: 'Cloud Services',
    description: 'Containerized deployment pipelines, Docker, Kubernetes, and reliable cPanel / VPS hosting management.',
    features: ['CI/CD Automation', 'Zero Downtime Deployments', 'SSL & DNS Hardening', '24/7 Server Monitoring'],
    icon: 'cloud'
  },
  {
    id: 'domain-dns-management',
    title: 'Domain Registration & Managed DNS',
    category: 'Cloud & Domain Services',
    description: 'Global TLD registration (.com, .in, .org, .io, .ai), Anycast DNS routing, automated SSL provisioning, and Cloudflare DDoS shield.',
    features: ['Instant Domain Registration & Transfer', 'Anycast Ultra-Fast DNS Routing', 'Automated Wildcard SSL Certificates', 'DNSSEC & Whois Privacy Protection'],
    icon: 'globe'
  },
  {
    id: 'cloud-vps-hosting',
    title: 'High-Performance Cloud VPS Hosting',
    category: 'Cloud & Server Hosting',
    description: 'Enterprise NVMe SSD Cloud VPS instances, managed Linux/Ubuntu environments, high-bandwidth burst, and automated snapshot backups.',
    features: ['High-Speed NVMe Storage', 'Dedicated vCPU & RAM Allocation', 'Automated Daily Backups & Snapshots', 'Root Access & Instant Horizontal Scaling'],
    icon: 'server'
  },
  {
    id: 'dedicated-backend-servers',
    title: 'Dedicated Backend Servers & High-Load APIs',
    category: 'Backend & Infrastructure',
    description: 'Mission-critical enterprise backend architecture, load balancers, bare-metal server provisioning, clustered PostgreSQL/MongoDB, and secure REST/gRPC endpoints.',
    features: ['Bare-Metal & Clustered Servers', 'High-Concurrency Node.js / Go APIs', 'Database Replication & Sharding', '99.99% Guaranteed SLA Uptime'],
    icon: 'hard-drive'
  },
  {
    id: 'multi-cloud-devops-skills',
    title: 'Multi-Cloud Architecture & DevOps Skills',
    category: 'Cloud & DevOps',
    description: 'AWS, Google Cloud (GCP), Azure, and Hybrid Cloud provisioning with Terraform, Docker containers, Kubernetes orchestration, and CI/CD pipelines.',
    features: ['AWS / GCP / Azure Infrastructure', 'Kubernetes & Docker Swarm Clusters', 'Terraform Infrastructure as Code (IaC)', '24/7 Monitoring with Prometheus & Grafana'],
    icon: 'cloud-lightning'
  }
];

// @route   GET /api/services
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    count: servicesData.length,
    data: servicesData
  });
});

// @route   GET /api/services/:id
router.get('/:id', (req, res) => {
  const service = servicesData.find(s => s.id === req.params.id);
  if (!service) {
    return res.status(404).json({
      success: false,
      error: `Service with ID '${req.params.id}' not found`
    });
  }
  res.status(200).json({
    success: true,
    data: service
  });
});

module.exports = router;
