import { Service, BlogPost, TeamMember } from '@/types';

export const services: Service[] = [
  // IT Consulting & Strategy
  {
    id: '1',
    title: 'Digital Transformation',
    description: 'Transform your business with cutting-edge digital solutions and strategic guidance.',
    icon: '🚀',
    category: 'it-consulting',
    slug: 'digital-transformation',
    features: ['Strategic Planning', 'Technology Assessment', 'Implementation Roadmap', 'Change Management']
  },
  {
    id: '2',
    title: 'Enterprise Architecture',
    description: 'Design scalable and robust enterprise systems architecture for your organization.',
    icon: '🏗️',
    category: 'it-consulting',
    slug: 'enterprise-architecture',
    features: ['System Design', 'Technology Stack Selection', 'Scalability Planning', 'Integration Strategy']
  },
  {
    id: '3',
    title: 'Cloud & DevOps Consulting',
    description: 'Optimize your infrastructure with cloud solutions and DevOps best practices.',
    icon: '☁️',
    category: 'it-consulting',
    slug: 'cloud-devops-consulting',
    features: ['Cloud Migration', 'DevOps Implementation', 'Infrastructure Automation', 'Performance Optimization']
  },

  // Software Development
  {
    id: '4',
    title: 'Web Application Development',
    description: 'Create powerful, responsive web applications tailored to your business needs.',
    icon: '💻',
    category: 'software-development',
    slug: 'web-application-development',
    features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'API Development']
  },
  {
    id: '5',
    title: 'Mobile App Development',
    description: 'Build native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    category: 'software-development',
    slug: 'mobile-app-development',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
  },
  {
    id: '6',
    title: 'Custom Software Solutions',
    description: 'Develop bespoke software solutions to address your unique business challenges.',
    icon: '⚙️',
    category: 'software-development',
    slug: 'custom-software-solutions',
    features: ['Requirements Analysis', 'Custom Development', 'System Integration', 'Maintenance & Support']
  },

  // UI/UX Design
  {
    id: '7',
    title: 'User Research & Wireframing',
    description: 'Understand your users and create intuitive wireframes for optimal user experience.',
    icon: '🔍',
    category: 'ui-ux-design',
    slug: 'user-research-wireframing',
    features: ['User Interviews', 'Persona Development', 'Wireframing', 'User Journey Mapping']
  },
  {
    id: '8',
    title: 'Prototyping & Usability Testing',
    description: 'Create interactive prototypes and validate designs through comprehensive testing.',
    icon: '🎨',
    category: 'ui-ux-design',
    slug: 'prototyping-usability-testing',
    features: ['Interactive Prototypes', 'Usability Testing', 'A/B Testing', 'Design Validation']
  },
  {
    id: '9',
    title: 'Product Design & Branding',
    description: 'Design compelling products and build strong brand identity for your business.',
    icon: '🎯',
    category: 'ui-ux-design',
    slug: 'product-design-branding',
    features: ['Brand Strategy', 'Visual Identity', 'Product Design', 'Brand Guidelines']
  },

  // Data & Analytics
  {
    id: '10',
    title: 'Data Engineering',
    description: 'Build robust data pipelines and infrastructure for your analytics needs.',
    icon: '📊',
    category: 'data-analytics',
    slug: 'data-engineering',
    features: ['Data Pipeline Design', 'ETL Processes', 'Data Warehousing', 'Real-time Processing']
  },
  {
    id: '11',
    title: 'Business Intelligence & Reporting',
    description: 'Transform raw data into actionable insights with comprehensive BI solutions.',
    icon: '📈',
    category: 'data-analytics',
    slug: 'business-intelligence-reporting',
    features: ['Dashboard Creation', 'Report Automation', 'KPI Tracking', 'Data Visualization']
  },
  {
    id: '12',
    title: 'AI/ML & Generative AI Solutions',
    description: 'Leverage artificial intelligence and machine learning to drive innovation.',
    icon: '🤖',
    category: 'data-analytics',
    slug: 'ai-ml-generative-ai',
    features: ['Machine Learning Models', 'Generative AI Integration', 'Predictive Analytics', 'Natural Language Processing']
  },

  // Cybersecurity Services
  {
    id: '13',
    title: 'Threat Detection & Prevention',
    description: 'Protect your organization with advanced threat detection and prevention systems.',
    icon: '🛡️',
    category: 'cybersecurity',
    slug: 'threat-detection-prevention',
    features: ['Security Monitoring', 'Threat Intelligence', 'Incident Response', 'Vulnerability Assessment']
  },
  {
    id: '14',
    title: 'Compliance & Risk Assessment',
    description: 'Ensure regulatory compliance and minimize security risks across your organization.',
    icon: '📋',
    category: 'cybersecurity',
    slug: 'compliance-risk-assessment',
    features: ['Compliance Audits', 'Risk Analysis', 'Policy Development', 'Security Training']
  },
  {
    id: '15',
    title: 'Security Operations Center (SOC)',
    description: 'Comprehensive security monitoring and incident response capabilities.',
    icon: '🏢',
    category: 'cybersecurity',
    slug: 'security-operations-center',
    features: ['24/7 Monitoring', 'Incident Management', 'Forensic Analysis', 'Security Orchestration']
  },

  // Digital Marketing
  {
    id: '16',
    title: 'SEO & SEM',
    description: 'Improve your online visibility with strategic search engine optimization and marketing.',
    icon: '🔎',
    category: 'digital-marketing',
    slug: 'seo-sem',
    features: ['Keyword Research', 'On-page Optimization', 'Link Building', 'Paid Search Campaigns']
  },
  {
    id: '17',
    title: 'Social Media Marketing',
    description: 'Build your brand presence and engage customers across social media platforms.',
    icon: '📲',
    category: 'digital-marketing',
    slug: 'social-media-marketing',
    features: ['Content Strategy', 'Community Management', 'Influencer Marketing', 'Social Advertising']
  },
  {
    id: '18',
    title: 'Performance Marketing & Campaigns',
    description: 'Drive measurable results with data-driven performance marketing campaigns.',
    icon: '🎯',
    category: 'digital-marketing',
    slug: 'performance-marketing-campaigns',
    features: ['Campaign Strategy', 'Performance Tracking', 'Conversion Optimization', 'ROI Analysis']
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'John Smith',
    position: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in technology consulting and digital transformation.',
    image: '/images/team/john-smith.jpg',
    linkedin: 'https://linkedin.com/in/johnsmith',
    twitter: 'https://twitter.com/johnsmith'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    position: 'CTO',
    bio: 'Technology expert specializing in cloud architecture and enterprise solutions.',
    image: '/images/team/sarah-johnson.jpg',
    linkedin: 'https://linkedin.com/in/sarahjohnson'
  },
  {
    id: '3',
    name: 'Michael Chen',
    position: 'Head of Development',
    bio: 'Full-stack developer with expertise in modern web technologies and mobile development.',
    image: '/images/team/michael-chen.jpg',
    linkedin: 'https://linkedin.com/in/michaelchen'
  },
  {
    id: '4',
    name: 'Emily Davis',
    position: 'UX/UI Design Lead',
    bio: 'Creative designer focused on user-centered design and digital experiences.',
    image: '/images/team/emily-davis.jpg',
    linkedin: 'https://linkedin.com/in/emilydavis'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Digital Transformation in 2024',
    excerpt: 'Explore the latest trends and technologies shaping digital transformation strategies.',
    content: 'Full blog post content here...',
    author: 'John Smith',
    publishedAt: '2024-01-15',
    tags: ['Digital Transformation', 'Technology', 'Strategy'],
    slug: 'future-digital-transformation-2024',
    featuredImage: '/images/blog/digital-transformation.jpg'
  },
  {
    id: '2',
    title: 'Building Scalable Web Applications with Next.js',
    excerpt: 'Learn best practices for creating high-performance, scalable web applications.',
    content: 'Full blog post content here...',
    author: 'Michael Chen',
    publishedAt: '2024-01-10',
    tags: ['Web Development', 'Next.js', 'React'],
    slug: 'building-scalable-web-applications-nextjs',
    featuredImage: '/images/blog/nextjs-development.jpg'
  },
  {
    id: '3',
    title: 'Cybersecurity Best Practices for Small Businesses',
    excerpt: 'Essential security measures every small business should implement.',
    content: 'Full blog post content here...',
    author: 'Sarah Johnson',
    publishedAt: '2024-01-05',
    tags: ['Cybersecurity', 'Small Business', 'Security'],
    slug: 'cybersecurity-best-practices-small-businesses',
    featuredImage: '/images/blog/cybersecurity.jpg'
  }
];