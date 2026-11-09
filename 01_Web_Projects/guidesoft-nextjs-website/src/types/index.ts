// Common types for Guidesoft website

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: ServiceCategory;
  slug: string;
  features: string[];
}

export type ServiceCategory = 
  | 'it-consulting'
  | 'software-development'
  | 'ui-ux-design'
  | 'data-analytics'
  | 'cybersecurity'
  | 'digital-marketing';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  tags: string[];
  slug: string;
  featuredImage?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  service?: string;
}

export interface VisaApplication {
  name: string;
  email: string;
  phone: string;
  visaType: string;
  nationality: string;
  message: string;
  documents?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}