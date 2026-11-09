import { HomePage, CompanyInfo, BlogPostContent, TeamMemberContent } from '@/lib/cms';

// Enhanced Homepage Content
export const homePageContent: HomePage = {
  hero: {
    title: "Transform Your Business with Digital Innovation",
    subtitle: "Leading the Future of Technology",
    description: "Accelerate your digital transformation journey with our comprehensive technology solutions and expert visa services. From cutting-edge software development to seamless global mobility.",
    ctaPrimary: { text: "Get Started Today", href: "/contact" },
    ctaSecondary: { text: "Explore Services", href: "/services" }
  },
  stats: [
    { label: "Successful Projects", value: "500+", description: "Delivered across various industries" },
    { label: "Happy Clients", value: "200+", description: "Worldwide customer base" },
    { label: "Years of Experience", value: "15+", description: "In technology consulting" },
    { label: "Countries Served", value: "25+", description: "Global reach and presence" },
    { label: "Team Members", value: "50+", description: "Expert professionals" },
    { label: "Technologies Mastered", value: "100+", description: "Cutting-edge tools and platforms" }
  ],
  featuredServices: ["1", "4", "7", "10", "13", "16"], // Service IDs
  testimonials: [
    {
      id: "1",
      content: "Guidesoft transformed our entire digital infrastructure. Their expertise in cloud migration and DevOps helped us reduce costs by 40% while improving performance significantly.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp",
      rating: 5,
      image: "/images/testimonials/sarah-johnson.jpg"
    },
    {
      id: "2",
      content: "The visa consultation service was exceptional. They guided us through the entire process and helped our team get work visas without any complications. Highly professional service.",
      author: "Michael Chen",
      role: "HR Director",
      company: "GlobalTech",
      rating: 5,
      image: "/images/testimonials/michael-chen.jpg"
    },
    {
      id: "3",
      content: "Outstanding UI/UX design work! Our user engagement increased by 60% after the redesign. The team really understood our vision and delivered beyond expectations.",
      author: "Emily Davis",
      role: "Product Manager",
      company: "StartupXYZ",
      rating: 5,
      image: "/images/testimonials/emily-davis.jpg"
    },
    {
      id: "4",
      content: "Their cybersecurity assessment revealed critical vulnerabilities we weren't aware of. The implementation of their security recommendations has made our systems much more robust.",
      author: "David Wilson",
      role: "IT Director",
      company: "FinanceFirst",
      rating: 5,
      image: "/images/testimonials/david-wilson.jpg"
    }
  ],
  features: [
    {
      title: "Expert Team",
      description: "Experienced professionals with deep industry knowledge and cutting-edge skills across all technology domains.",
      icon: "👥"
    },
    {
      title: "Proven Track Record",
      description: "Successfully delivered 500+ projects across various industries with consistent high-quality results.",
      icon: "🏆"
    },
    {
      title: "End-to-End Solutions",
      description: "Complete technology and visa services from initial consultation to final implementation and support.",
      icon: "🔄"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your business operations run smoothly without interruption.",
      icon: "🕐"
    },
    {
      title: "Global Reach",
      description: "Serving clients worldwide with local expertise and global best practices in 25+ countries.",
      icon: "🌍"
    },
    {
      title: "Innovation Focus",
      description: "Leveraging latest technologies and methodologies to drive business success and competitive advantage.",
      icon: "💡"
    }
  ]
};

// Enhanced Company Information
export const companyInfo: CompanyInfo = {
  name: "Guidesoft",
  tagline: "Transforming Businesses Through Innovation & Excellence",
  description: "Leading digital transformation and visa services company helping businesses navigate the complex world of technology while providing seamless global mobility solutions.",
  foundedYear: "2008",
  headquarters: {
    address: "123 Innovation Drive, Suite 500",
    city: "San Francisco",
    state: "California",
    country: "United States",
    postalCode: "94105",
    phone: "+1 (555) 123-0123",
    email: "info@guidesoft.com"
  },
  socialMedia: {
    linkedin: "https://linkedin.com/company/guidesoft",
    twitter: "https://twitter.com/guidesoft",
    facebook: "https://facebook.com/guidesoft",
    youtube: "https://youtube.com/c/guidesoft",
    instagram: "https://instagram.com/guidesoft"
  },
  mission: "To empower businesses worldwide through innovative technology solutions and seamless global mobility services, enabling them to achieve their full potential in an interconnected world.",
  vision: "To be the global leader in digital transformation and visa services, recognized for our innovation, excellence, and unwavering commitment to client success.",
  values: [
    {
      name: "Innovation",
      description: "We constantly explore new technologies and methodologies to deliver cutting-edge solutions that drive business success.",
      icon: "💡"
    },
    {
      name: "Excellence",
      description: "We are committed to delivering the highest quality in everything we do, exceeding client expectations consistently.",
      icon: "⭐"
    },
    {
      name: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices in all our interactions.",
      icon: "🛡️"
    },
    {
      name: "Collaboration",
      description: "We believe in the power of teamwork and partnership to achieve extraordinary results for our clients.",
      icon: "🤝"
    },
    {
      name: "Global Impact",
      description: "We strive to make a positive difference in businesses and communities worldwide through our services.",
      icon: "🌍"
    },
    {
      name: "Customer Success",
      description: "Your success is our success. We are dedicated to helping you achieve your goals and grow your business.",
      icon: "🎯"
    }
  ],
  milestones: [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started as a small technology consulting firm with a vision to transform businesses through innovation and excellence."
    },
    {
      year: "2012",
      title: "International Expansion",
      description: "Expanded our services globally and established partnerships with leading technology providers worldwide."
    },
    {
      year: "2016",
      title: "Visa Services Launch",
      description: "Added comprehensive visa and immigration services to support global business mobility and expansion."
    },
    {
      year: "2020",
      title: "Digital Transformation Leader",
      description: "Became a recognized leader in digital transformation and cloud solutions during the pandemic era."
    },
    {
      year: "2024",
      title: "AI & Innovation Hub",
      description: "Established our AI research division and launched generative AI solutions for enterprise clients."
    }
  ],
  certifications: [
    {
      name: "ISO 27001",
      issuer: "International Organization for Standardization",
      validUntil: "2025-12-31",
      logo: "/images/certifications/iso-27001.png"
    },
    {
      name: "AWS Advanced Consulting Partner",
      issuer: "Amazon Web Services",
      validUntil: "2024-12-31",
      logo: "/images/certifications/aws-partner.png"
    },
    {
      name: "Microsoft Gold Partner",
      issuer: "Microsoft Corporation",
      validUntil: "2024-12-31",
      logo: "/images/certifications/microsoft-gold.png"
    },
    {
      name: "SOC 2 Type II",
      issuer: "AICPA",
      validUntil: "2024-12-31",
      logo: "/images/certifications/soc2.png"
    }
  ]
};

// Enhanced Blog Posts
export const enhancedBlogPosts: BlogPostContent[] = [
  {
    id: "1",
    title: "The Future of Digital Transformation in 2024: Trends and Strategies",
    slug: "future-digital-transformation-2024",
    description: "Explore the latest trends in digital transformation and discover strategies to stay ahead in the rapidly evolving business landscape.",
    keywords: ["digital transformation", "technology trends", "business strategy", "2024", "innovation"],
    author: "John Smith",
    publishedAt: "2024-01-15T09:00:00Z",
    updatedAt: "2024-01-15T09:00:00Z",
    status: "published",
    featured: true,
    category: "Digital Transformation",
    tags: ["Digital Transformation", "Technology", "Business Strategy", "Innovation"],
    excerpt: "As we navigate through 2024, digital transformation continues to reshape industries worldwide. This comprehensive guide explores the key trends, technologies, and strategies that will define business success in the coming year.",
    content: `
      <p>In today's rapidly evolving digital landscape, businesses must embrace digital transformation to remain competitive and relevant. This comprehensive guide explores the key trends, technologies, and strategies that will define the future of digital transformation in 2024.</p>

      <h2>Understanding Digital Transformation</h2>
      <p>Digital transformation is more than just adopting new technologies—it's about fundamentally changing how your business operates and delivers value to customers...</p>
      
      <!-- Full content would continue here -->
    `,
    readingTime: 8,
    image: "/images/blog/digital-transformation-2024.jpg",
    relatedPosts: ["2", "3"]
  },
  {
    id: "2",
    title: "Cybersecurity Best Practices for Modern Businesses",
    slug: "cybersecurity-best-practices-modern-businesses",
    description: "Essential cybersecurity practices every business should implement to protect against evolving threats in the digital age.",
    keywords: ["cybersecurity", "security", "business protection", "data security", "threat prevention"],
    author: "Sarah Johnson",
    publishedAt: "2024-01-10T14:30:00Z",
    updatedAt: "2024-01-10T14:30:00Z",
    status: "published",
    featured: false,
    category: "Cybersecurity",
    tags: ["Cybersecurity", "Security", "Business Protection"],
    excerpt: "With cyber threats becoming more sophisticated, businesses need robust security measures. Learn the essential cybersecurity practices that can protect your organization from modern threats.",
    content: `
      <p>In an era where cyber threats are becoming increasingly sophisticated and frequent, businesses of all sizes must prioritize cybersecurity...</p>
      
      <!-- Full content would continue here -->
    `,
    readingTime: 6,
    image: "/images/blog/cybersecurity-best-practices.jpg",
    relatedPosts: ["1", "4"]
  },
  {
    id: "3",
    title: "Cloud Migration Strategies: A Complete Guide for Enterprises",
    slug: "cloud-migration-strategies-enterprise-guide",
    description: "Comprehensive guide to cloud migration strategies, best practices, and considerations for enterprise organizations.",
    keywords: ["cloud migration", "enterprise", "cloud strategy", "AWS", "Azure", "cloud computing"],
    author: "Michael Chen",
    publishedAt: "2024-01-05T11:15:00Z",
    updatedAt: "2024-01-05T11:15:00Z",
    status: "published",
    featured: true,
    category: "Cloud Computing",
    tags: ["Cloud Migration", "Enterprise", "Cloud Strategy"],
    excerpt: "Moving to the cloud is a critical decision for enterprises. This guide covers everything you need to know about cloud migration strategies, from planning to execution.",
    content: `
      <p>Cloud migration has become a strategic imperative for enterprises looking to improve scalability, reduce costs, and enhance operational efficiency...</p>
      
      <!-- Full content would continue here -->
    `,
    readingTime: 10,
    image: "/images/blog/cloud-migration-guide.jpg",
    relatedPosts: ["1", "5"]
  },
  {
    id: "4",
    title: "AI and Machine Learning: Transforming Business Operations",
    slug: "ai-machine-learning-transforming-business",
    description: "Discover how AI and machine learning are revolutionizing business operations and creating new opportunities for growth.",
    keywords: ["artificial intelligence", "machine learning", "business transformation", "automation", "AI strategy"],
    author: "Emily Davis",
    publishedAt: "2024-01-01T08:00:00Z",
    updatedAt: "2024-01-01T08:00:00Z",
    status: "published",
    featured: false,
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Business Transformation"],
    excerpt: "Artificial intelligence and machine learning are no longer futuristic concepts—they're transforming how businesses operate today. Learn how to leverage these technologies for competitive advantage.",
    content: `
      <p>Artificial intelligence and machine learning have moved from science fiction to business reality, fundamentally changing how organizations operate...</p>
      
      <!-- Full content would continue here -->
    `,
    readingTime: 7,
    image: "/images/blog/ai-machine-learning-business.jpg",
    relatedPosts: ["1", "2"]
  },
  {
    id: "5",
    title: "Visa Application Process: A Step-by-Step Guide for Professionals",
    slug: "visa-application-process-guide-professionals",
    description: "Complete guide to the visa application process for professionals, including requirements, timelines, and expert tips.",
    keywords: ["visa application", "work visa", "professional visa", "immigration", "visa process"],
    author: "David Wilson",
    publishedAt: "2023-12-28T16:45:00Z",
    updatedAt: "2023-12-28T16:45:00Z",
    status: "published",
    featured: false,
    category: "Visa Services",
    tags: ["Visa Application", "Immigration", "Work Visa"],
    excerpt: "Navigating the visa application process can be complex. This comprehensive guide breaks down everything professionals need to know about applying for work visas.",
    content: `
      <p>The visa application process can seem daunting, but with proper guidance and preparation, it becomes much more manageable...</p>
      
      <!-- Full content would continue here -->
    `,
    readingTime: 9,
    image: "/images/blog/visa-application-guide.jpg",
    relatedPosts: ["3", "4"]
  }
];

// Enhanced Team Members
export const enhancedTeamMembers: TeamMemberContent[] = [
  {
    id: "1",
    name: "John Smith",
    position: "CEO & Founder",
    department: "Executive",
    bio: "Visionary leader with 15+ years in technology consulting and digital transformation.",
    longBio: "John Smith is the founder and CEO of Guidesoft, bringing over 15 years of experience in technology consulting and digital transformation. Before founding Guidesoft, John held senior positions at leading consulting firms where he helped Fortune 500 companies navigate complex digital transformations. He holds an MBA from Stanford and a Computer Science degree from MIT. John is passionate about leveraging technology to solve real-world business challenges and has been recognized as a thought leader in the digital transformation space.",
    image: "/images/team/john-smith.jpg",
    email: "john.smith@guidesoft.com",
    social: {
      linkedin: "https://linkedin.com/in/johnsmith-guidesoft",
      twitter: "https://twitter.com/johnsmith_gs"
    },
    expertise: ["Digital Transformation", "Strategic Planning", "Technology Leadership", "Business Strategy"],
    certifications: [
      { name: "Certified Management Consultant", issuer: "CMC Institute", year: "2015" },
      { name: "AWS Solutions Architect", issuer: "Amazon Web Services", year: "2020" }
    ],
    experience: [
      {
        role: "CEO & Founder",
        company: "Guidesoft",
        duration: "2008 - Present",
        description: "Founded and led Guidesoft from startup to industry leader, growing the company to 50+ employees and serving 200+ clients worldwide."
      },
      {
        role: "Senior Principal Consultant",
        company: "Tech Consulting Group",
        duration: "2005 - 2008",
        description: "Led digital transformation initiatives for Fortune 500 companies, specializing in enterprise architecture and cloud migrations."
      }
    ]
  },
  {
    id: "2",
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
    department: "Technology",
    bio: "Technology expert specializing in cloud architecture and enterprise solutions.",
    longBio: "Sarah Johnson serves as the Chief Technology Officer at Guidesoft, where she leads the technology strategy and oversees all technical operations. With over 12 years of experience in enterprise architecture and cloud computing, Sarah has been instrumental in developing Guidesoft's technology capabilities. She holds a Master's degree in Computer Science from Carnegie Mellon and is a certified AWS Solutions Architect. Sarah is passionate about emerging technologies and their practical applications in business environments.",
    image: "/images/team/sarah-johnson.jpg",
    email: "sarah.johnson@guidesoft.com",
    social: {
      linkedin: "https://linkedin.com/in/sarahjohnson-cto"
    },
    expertise: ["Cloud Architecture", "Enterprise Solutions", "DevOps", "System Design"],
    certifications: [
      { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", year: "2021" },
      { name: "Microsoft Azure Architect Expert", issuer: "Microsoft", year: "2022" },
      { name: "Kubernetes Certified Administrator", issuer: "CNCF", year: "2023" }
    ],
    experience: [
      {
        role: "Chief Technology Officer",
        company: "Guidesoft",
        duration: "2018 - Present",
        description: "Leading technology strategy and overseeing technical operations for all client projects and internal systems."
      },
      {
        role: "Senior Cloud Architect",
        company: "CloudTech Solutions",
        duration: "2015 - 2018",
        description: "Designed and implemented cloud infrastructure solutions for enterprise clients across various industries."
      }
    ]
  }
];

// Initialize content in the CMS
export function initializeContent() {
  const { contentManager } = require('@/lib/cms');
  
  // Set homepage content
  contentManager.setHomePage(homePageContent);
  
  // Set company info
  contentManager.setCompanyInfo(companyInfo);
  
  // Set blog posts
  enhancedBlogPosts.forEach(post => {
    contentManager.setBlogPost(post.id, post);
  });
  
  // Set team members
  enhancedTeamMembers.forEach(member => {
    contentManager.setTeamMember(member.id, member);
  });
}