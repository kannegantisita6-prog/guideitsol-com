import { 
  type User, type InsertUser, 
  type ContactSubmission, type InsertContactSubmission, 
  type ConsultationBooking, type InsertConsultationBooking, 
  type NewsletterSubscription, type InsertNewsletterSubscription, 
  type Appointment, type InsertAppointment,
  type VisaService, type InsertVisaService,
  type ItService, type InsertItService,
  type BlogPost, type InsertBlogPost,
  type Testimonial, type InsertTestimonial,
  type CareerApplication, type InsertCareerApplication,
  type SupportTicket, type InsertSupportTicket,
  type QuoteRequest, type InsertQuoteRequest,
  type PartnershipRequest, type InsertPartnershipRequest,
  type SiteSetting, type InsertSiteSetting
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User Management
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact & Communication
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  createConsultationBooking(booking: InsertConsultationBooking): Promise<ConsultationBooking>;
  getConsultationBookings(): Promise<ConsultationBooking[]>;
  
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  
  // Services
  createVisaService(service: InsertVisaService): Promise<VisaService>;
  getVisaServices(): Promise<VisaService[]>;
  getVisaService(id: string): Promise<VisaService | undefined>;
  
  createItService(service: InsertItService): Promise<ItService>;
  getItServices(): Promise<ItService[]>;
  getItService(id: string): Promise<ItService | undefined>;
  
  // Content Management
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(): Promise<Testimonial[]>;
  getApprovedTestimonials(): Promise<Testimonial[]>;
  getFeaturedTestimonials(): Promise<Testimonial[]>;
  
  // Career & Support
  createCareerApplication(application: InsertCareerApplication): Promise<CareerApplication>;
  getCareerApplications(): Promise<CareerApplication[]>;
  
  createSupportTicket(ticket: InsertSupportTicket): Promise<SupportTicket>;
  getSupportTickets(): Promise<SupportTicket[]>;
  getSupportTicket(id: string): Promise<SupportTicket | undefined>;
  
  // Business
  createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest>;
  getQuoteRequests(): Promise<QuoteRequest[]>;
  
  createPartnershipRequest(request: InsertPartnershipRequest): Promise<PartnershipRequest>;
  getPartnershipRequests(): Promise<PartnershipRequest[]>;
  
  // Site Settings
  createSiteSetting(setting: InsertSiteSetting): Promise<SiteSetting>;
  getSiteSettings(): Promise<SiteSetting[]>;
  getSiteSetting(key: string): Promise<SiteSetting | undefined>;
  updateSiteSetting(key: string, value: any): Promise<SiteSetting>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactSubmissions: Map<string, ContactSubmission>;
  private consultationBookings: Map<string, ConsultationBooking>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;
  private appointments: Map<string, Appointment>;
  private visaServices: Map<string, VisaService>;
  private itServices: Map<string, ItService>;
  private blogPosts: Map<string, BlogPost>;
  private testimonials: Map<string, Testimonial>;
  private careerApplications: Map<string, CareerApplication>;
  private supportTickets: Map<string, SupportTicket>;
  private quoteRequests: Map<string, QuoteRequest>;
  private partnershipRequests: Map<string, PartnershipRequest>;
  private siteSettings: Map<string, SiteSetting>;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.consultationBookings = new Map();
    this.newsletterSubscriptions = new Map();
    this.appointments = new Map();
    this.visaServices = new Map();
    this.itServices = new Map();
    this.blogPosts = new Map();
    this.testimonials = new Map();
    this.careerApplications = new Map();
    this.supportTickets = new Map();
    this.quoteRequests = new Map();
    this.partnershipRequests = new Map();
    this.siteSettings = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = randomUUID();
    const submission: ContactSubmission = { 
      ...insertSubmission, 
      id, 
      createdAt: new Date() 
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createConsultationBooking(insertBooking: InsertConsultationBooking): Promise<ConsultationBooking> {
    const id = randomUUID();
    const booking: ConsultationBooking = { 
      ...insertBooking, 
      id, 
      createdAt: new Date(),
      message: insertBooking.message || null
    };
    this.consultationBookings.set(id, booking);
    return booking;
  }

  async getConsultationBookings(): Promise<ConsultationBooking[]> {
    return Array.from(this.consultationBookings.values());
  }

  async createNewsletterSubscription(insertSubscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = randomUUID();
    const subscription: NewsletterSubscription = { 
      ...insertSubscription, 
      id, 
      createdAt: new Date() 
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }

  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = { 
      id,
      firstName: insertAppointment.firstName,
      lastName: insertAppointment.lastName,
      email: insertAppointment.email,
      phone: insertAppointment.phone,
      consultationType: insertAppointment.consultationType,
      preferredDate: insertAppointment.preferredDate,
      timeSlot: insertAppointment.timeSlot,
      message: insertAppointment.message || null,
      hrEmail: insertAppointment.hrEmail,
      googleMeet: true,
      status: "pending",
      createdAt: new Date()
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  // Visa Services
  async createVisaService(insertService: InsertVisaService): Promise<VisaService> {
    const id = randomUUID();
    const service: VisaService = {
      ...insertService,
      id,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.visaServices.set(id, service);
    return service;
  }

  async getVisaServices(): Promise<VisaService[]> {
    return Array.from(this.visaServices.values());
  }

  async getVisaService(id: string): Promise<VisaService | undefined> {
    return this.visaServices.get(id);
  }

  // IT Services
  async createItService(insertService: InsertItService): Promise<ItService> {
    const id = randomUUID();
    const service: ItService = {
      ...insertService,
      id,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.itServices.set(id, service);
    return service;
  }

  async getItServices(): Promise<ItService[]> {
    return Array.from(this.itServices.values());
  }

  async getItService(id: string): Promise<ItService | undefined> {
    return this.itServices.get(id);
  }

  // Blog Posts
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = {
      ...insertPost,
      id,
      viewCount: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).filter(post => post.isPublished);
  }

  // Testimonials
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = {
      ...insertTestimonial,
      id,
      createdAt: new Date()
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getApprovedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isApproved);
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.isFeatured);
  }

  // Career Applications
  async createCareerApplication(insertApplication: InsertCareerApplication): Promise<CareerApplication> {
    const id = randomUUID();
    const application: CareerApplication = {
      ...insertApplication,
      id,
      status: "pending",
      createdAt: new Date()
    };
    this.careerApplications.set(id, application);
    return application;
  }

  async getCareerApplications(): Promise<CareerApplication[]> {
    return Array.from(this.careerApplications.values());
  }

  // Support Tickets
  async createSupportTicket(insertTicket: InsertSupportTicket): Promise<SupportTicket> {
    const id = randomUUID();
    const ticketNumber = `TKT-${Date.now()}`;
    const ticket: SupportTicket = {
      ...insertTicket,
      id,
      ticketNumber,
      status: "open",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.supportTickets.set(id, ticket);
    return ticket;
  }

  async getSupportTickets(): Promise<SupportTicket[]> {
    return Array.from(this.supportTickets.values());
  }

  async getSupportTicket(id: string): Promise<SupportTicket | undefined> {
    return this.supportTickets.get(id);
  }

  // Quote Requests
  async createQuoteRequest(insertRequest: InsertQuoteRequest): Promise<QuoteRequest> {
    const id = randomUUID();
    const request: QuoteRequest = {
      ...insertRequest,
      id,
      status: "pending",
      createdAt: new Date()
    };
    this.quoteRequests.set(id, request);
    return request;
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return Array.from(this.quoteRequests.values());
  }

  // Partnership Requests
  async createPartnershipRequest(insertRequest: InsertPartnershipRequest): Promise<PartnershipRequest> {
    const id = randomUUID();
    const request: PartnershipRequest = {
      ...insertRequest,
      id,
      status: "pending",
      createdAt: new Date()
    };
    this.partnershipRequests.set(id, request);
    return request;
  }

  async getPartnershipRequests(): Promise<PartnershipRequest[]> {
    return Array.from(this.partnershipRequests.values());
  }

  // Site Settings
  async createSiteSetting(insertSetting: InsertSiteSetting): Promise<SiteSetting> {
    const id = randomUUID();
    const setting: SiteSetting = {
      ...insertSetting,
      id,
      updatedAt: new Date()
    };
    this.siteSettings.set(insertSetting.key, setting);
    return setting;
  }

  async getSiteSettings(): Promise<SiteSetting[]> {
    return Array.from(this.siteSettings.values());
  }

  async getSiteSetting(key: string): Promise<SiteSetting | undefined> {
    return this.siteSettings.get(key);
  }

  async updateSiteSetting(key: string, value: any): Promise<SiteSetting> {
    const existing = this.siteSettings.get(key);
    if (!existing) {
      throw new Error(`Setting with key ${key} not found`);
    }
    const updated: SiteSetting = {
      ...existing,
      value,
      updatedAt: new Date()
    };
    this.siteSettings.set(key, updated);
    return updated;
  }
}

export const storage = new MemStorage();
