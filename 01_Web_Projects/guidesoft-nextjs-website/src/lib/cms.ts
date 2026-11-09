// Content Management System types and utilities
export interface ContentMeta {
  id: string;
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  author: string;
  publishedAt: string;
  updatedAt: string;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  category: string;
  tags: string[];
}

export interface HomePage {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: { text: string; href: string };
    ctaSecondary: { text: string; href: string };
  };
  stats: Array<{
    label: string;
    value: string;
    description?: string;
  }>;
  featuredServices: string[]; // Service IDs
  testimonials: Array<{
    id: string;
    content: string;
    author: string;
    role: string;
    company?: string;
    rating: number;
    image?: string;
  }>;
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export interface ServicePage {
  meta: ContentMeta;
  overview: {
    title: string;
    description: string;
    image?: string;
  };
  features: Array<{
    title: string;
    description: string;
    icon: string;
    benefits: string[];
  }>;
  process: Array<{
    step: number;
    title: string;
    description: string;
    duration?: string;
  }>;
  pricing?: {
    plans: Array<{
      name: string;
      price: string;
      description: string;
      features: string[];
      highlighted?: boolean;
    }>;
  };
  caseStudies?: Array<{
    title: string;
    client: string;
    challenge: string;
    solution: string;
    results: string[];
    image?: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface BlogPostContent extends ContentMeta {
  excerpt: string;
  content: string;
  readingTime: number;
  image?: string;
  relatedPosts?: string[]; // Post IDs
}

export interface VisaServicePage {
  meta: ContentMeta;
  overview: {
    title: string;
    description: string;
    eligibility: string[];
    requirements: string[];
    processingTime: string;
    validityPeriod: string;
  };
  process: Array<{
    step: number;
    title: string;
    description: string;
    documents: string[];
    timeframe: string;
  }>;
  benefits: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedServices: string[]; // Service IDs
}

export interface TeamMemberContent {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  longBio?: string;
  image: string;
  email?: string;
  phone?: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  expertise: string[];
  certifications: Array<{
    name: string;
    issuer: string;
    year: string;
  }>;
  experience: Array<{
    role: string;
    company: string;
    duration: string;
    description: string;
  }>;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: string;
  headquarters: {
    address: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    phone: string;
    email: string;
  };
  socialMedia: {
    linkedin: string;
    twitter: string;
    facebook: string;
    youtube?: string;
    instagram?: string;
  };
  mission: string;
  vision: string;
  values: Array<{
    name: string;
    description: string;
    icon: string;
  }>;
  milestones: Array<{
    year: string;
    title: string;
    description: string;
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    validUntil?: string;
    logo?: string;
  }>;
}

// Content management utilities
export class ContentManager {
  private static instance: ContentManager;
  private content: Map<string, any> = new Map();

  static getInstance(): ContentManager {
    if (!ContentManager.instance) {
      ContentManager.instance = new ContentManager();
    }
    return ContentManager.instance;
  }

  // Generic content methods
  setContent<T>(key: string, content: T): void {
    this.content.set(key, content);
  }

  getContent<T>(key: string): T | null {
    return this.content.get(key) || null;
  }

  getAllContent(): Map<string, any> {
    return new Map(this.content);
  }

  // Specific content type methods
  setHomePage(content: HomePage): void {
    this.setContent('homePage', content);
  }

  getHomePage(): HomePage | null {
    return this.getContent<HomePage>('homePage');
  }

  setCompanyInfo(content: CompanyInfo): void {
    this.setContent('companyInfo', content);
  }

  getCompanyInfo(): CompanyInfo | null {
    return this.getContent<CompanyInfo>('companyInfo');
  }

  setBlogPost(id: string, post: BlogPostContent): void {
    this.setContent(`blogPost:${id}`, post);
  }

  getBlogPost(id: string): BlogPostContent | null {
    return this.getContent<BlogPostContent>(`blogPost:${id}`);
  }

  getAllBlogPosts(): BlogPostContent[] {
    const posts: BlogPostContent[] = [];
    for (const [key, value] of this.content) {
      if (key.startsWith('blogPost:')) {
        posts.push(value as BlogPostContent);
      }
    }
    return posts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  getPublishedBlogPosts(): BlogPostContent[] {
    return this.getAllBlogPosts().filter(post => post.status === 'published');
  }

  getFeaturedBlogPosts(): BlogPostContent[] {
    return this.getPublishedBlogPosts().filter(post => post.featured);
  }

  setTeamMember(id: string, member: TeamMemberContent): void {
    this.setContent(`teamMember:${id}`, member);
  }

  getTeamMember(id: string): TeamMemberContent | null {
    return this.getContent<TeamMemberContent>(`teamMember:${id}`);
  }

  getAllTeamMembers(): TeamMemberContent[] {
    const members: TeamMemberContent[] = [];
    for (const [key, value] of this.content) {
      if (key.startsWith('teamMember:')) {
        members.push(value as TeamMemberContent);
      }
    }
    return members;
  }

  // Search functionality
  searchContent(query: string, contentType?: string): any[] {
    const results: any[] = [];
    const searchTerm = query.toLowerCase();

    for (const [key, value] of this.content) {
      if (contentType && !key.startsWith(contentType)) continue;

      const contentString = JSON.stringify(value).toLowerCase();
      if (contentString.includes(searchTerm)) {
        results.push({ key, content: value });
      }
    }

    return results;
  }

  // Content validation
  validateContent<T>(content: T, schema: any): { valid: boolean; errors: string[] } {
    // Basic validation - in a real app, you'd use a schema validation library
    const errors: string[] = [];
    
    if (!content) {
      errors.push('Content is required');
      return { valid: false, errors };
    }

    // Add more validation logic based on content type
    return { valid: errors.length === 0, errors };
  }

  // Export/Import functionality
  exportContent(): string {
    const exportData = Object.fromEntries(this.content);
    return JSON.stringify(exportData, null, 2);
  }

  importContent(jsonData: string): { success: boolean; message: string } {
    try {
      const data = JSON.parse(jsonData);
      this.content.clear();
      
      for (const [key, value] of Object.entries(data)) {
        this.content.set(key, value);
      }
      
      return { success: true, message: 'Content imported successfully' };
    } catch (error) {
      return { success: false, message: 'Failed to import content: Invalid JSON' };
    }
  }
}

// Export singleton instance
export const contentManager = ContentManager.getInstance();