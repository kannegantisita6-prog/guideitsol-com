// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  contactSubmissions;
  consultationBookings;
  newsletterSubscriptions;
  appointments;
  visaServices;
  itServices;
  blogPosts;
  testimonials;
  careerApplications;
  supportTickets;
  quoteRequests;
  partnershipRequests;
  siteSettings;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.contactSubmissions = /* @__PURE__ */ new Map();
    this.consultationBookings = /* @__PURE__ */ new Map();
    this.newsletterSubscriptions = /* @__PURE__ */ new Map();
    this.appointments = /* @__PURE__ */ new Map();
    this.visaServices = /* @__PURE__ */ new Map();
    this.itServices = /* @__PURE__ */ new Map();
    this.blogPosts = /* @__PURE__ */ new Map();
    this.testimonials = /* @__PURE__ */ new Map();
    this.careerApplications = /* @__PURE__ */ new Map();
    this.supportTickets = /* @__PURE__ */ new Map();
    this.quoteRequests = /* @__PURE__ */ new Map();
    this.partnershipRequests = /* @__PURE__ */ new Map();
    this.siteSettings = /* @__PURE__ */ new Map();
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  async createContactSubmission(insertSubmission) {
    const id = randomUUID();
    const submission = {
      ...insertSubmission,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  async getContactSubmissions() {
    return Array.from(this.contactSubmissions.values());
  }
  async createConsultationBooking(insertBooking) {
    const id = randomUUID();
    const booking = {
      ...insertBooking,
      id,
      createdAt: /* @__PURE__ */ new Date(),
      message: insertBooking.message || null
    };
    this.consultationBookings.set(id, booking);
    return booking;
  }
  async getConsultationBookings() {
    return Array.from(this.consultationBookings.values());
  }
  async createNewsletterSubscription(insertSubscription) {
    const id = randomUUID();
    const subscription = {
      ...insertSubscription,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.newsletterSubscriptions.set(id, subscription);
    return subscription;
  }
  async getNewsletterSubscriptions() {
    return Array.from(this.newsletterSubscriptions.values());
  }
  async createAppointment(insertAppointment) {
    const id = randomUUID();
    const appointment = {
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
      createdAt: /* @__PURE__ */ new Date()
    };
    this.appointments.set(id, appointment);
    return appointment;
  }
  async getAppointments() {
    return Array.from(this.appointments.values());
  }
  // Visa Services
  async createVisaService(insertService) {
    const id = randomUUID();
    const service = {
      ...insertService,
      id,
      isActive: true,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.visaServices.set(id, service);
    return service;
  }
  async getVisaServices() {
    return Array.from(this.visaServices.values());
  }
  async getVisaService(id) {
    return this.visaServices.get(id);
  }
  // IT Services
  async createItService(insertService) {
    const id = randomUUID();
    const service = {
      ...insertService,
      id,
      isActive: true,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.itServices.set(id, service);
    return service;
  }
  async getItServices() {
    return Array.from(this.itServices.values());
  }
  async getItService(id) {
    return this.itServices.get(id);
  }
  // Blog Posts
  async createBlogPost(insertPost) {
    const id = randomUUID();
    const post = {
      ...insertPost,
      id,
      viewCount: 0,
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.blogPosts.set(id, post);
    return post;
  }
  async getBlogPosts() {
    return Array.from(this.blogPosts.values());
  }
  async getBlogPost(id) {
    return this.blogPosts.get(id);
  }
  async getPublishedBlogPosts() {
    return Array.from(this.blogPosts.values()).filter((post) => post.isPublished);
  }
  // Testimonials
  async createTestimonial(insertTestimonial) {
    const id = randomUUID();
    const testimonial = {
      ...insertTestimonial,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  async getTestimonials() {
    return Array.from(this.testimonials.values());
  }
  async getApprovedTestimonials() {
    return Array.from(this.testimonials.values()).filter((t) => t.isApproved);
  }
  async getFeaturedTestimonials() {
    return Array.from(this.testimonials.values()).filter((t) => t.isFeatured);
  }
  // Career Applications
  async createCareerApplication(insertApplication) {
    const id = randomUUID();
    const application = {
      ...insertApplication,
      id,
      status: "pending",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.careerApplications.set(id, application);
    return application;
  }
  async getCareerApplications() {
    return Array.from(this.careerApplications.values());
  }
  // Support Tickets
  async createSupportTicket(insertTicket) {
    const id = randomUUID();
    const ticketNumber = `TKT-${Date.now()}`;
    const ticket = {
      ...insertTicket,
      id,
      ticketNumber,
      status: "open",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.supportTickets.set(id, ticket);
    return ticket;
  }
  async getSupportTickets() {
    return Array.from(this.supportTickets.values());
  }
  async getSupportTicket(id) {
    return this.supportTickets.get(id);
  }
  // Quote Requests
  async createQuoteRequest(insertRequest) {
    const id = randomUUID();
    const request = {
      ...insertRequest,
      id,
      status: "pending",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.quoteRequests.set(id, request);
    return request;
  }
  async getQuoteRequests() {
    return Array.from(this.quoteRequests.values());
  }
  // Partnership Requests
  async createPartnershipRequest(insertRequest) {
    const id = randomUUID();
    const request = {
      ...insertRequest,
      id,
      status: "pending",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.partnershipRequests.set(id, request);
    return request;
  }
  async getPartnershipRequests() {
    return Array.from(this.partnershipRequests.values());
  }
  // Site Settings
  async createSiteSetting(insertSetting) {
    const id = randomUUID();
    const setting = {
      ...insertSetting,
      id,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.siteSettings.set(insertSetting.key, setting);
    return setting;
  }
  async getSiteSettings() {
    return Array.from(this.siteSettings.values());
  }
  async getSiteSetting(key) {
    return this.siteSettings.get(key);
  }
  async updateSiteSetting(key, value) {
    const existing = this.siteSettings.get(key);
    if (!existing) {
      throw new Error(`Setting with key ${key} not found`);
    }
    const updated = {
      ...existing,
      value,
      updatedAt: /* @__PURE__ */ new Date()
    };
    this.siteSettings.set(key, updated);
    return updated;
  }
};
var storage = new MemStorage();

// server/emailService.ts
import nodemailer from "nodemailer";
var createTransporter = () => {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || "your-email@gmail.com",
      pass: process.env.EMAIL_PASS || "your-app-password"
    }
  });
};
var BUSINESS_EMAIL = "business@guideitsol.com";
var FROM_EMAIL = process.env.EMAIL_USER || "noreply@guideitsol.com";
var EmailService = class {
  transporter;
  constructor() {
    this.transporter = createTransporter();
  }
  async sendContactSubmissionEmail(submission) {
    const subject = `New Contact Form Submission - ${submission.formType}`;
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Form Type:</strong> ${submission.formType}</p>
      <p><strong>Name:</strong> ${submission.firstName} ${submission.lastName}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Phone:</strong> ${submission.phone || "Not provided"}</p>
      <p><strong>Company:</strong> ${submission.company || "Not provided"}</p>
      <p><strong>Service:</strong> ${submission.service || "Not provided"}</p>
      <p><strong>Budget:</strong> ${submission.budget || "Not provided"}</p>
      <p><strong>Timeline:</strong> ${submission.timeline || "Not provided"}</p>
      <p><strong>Country:</strong> ${submission.country || "Not provided"}</p>
      <p><strong>Visa Type:</strong> ${submission.visaType || "Not provided"}</p>
      <p><strong>Consultation Type:</strong> ${submission.consultationType || "Not provided"}</p>
      <p><strong>Message:</strong></p>
      <p>${submission.message || "No message provided"}</p>
      <p><strong>Submitted At:</strong> ${submission.createdAt}</p>
    `;
    return this.sendEmail(BUSINESS_EMAIL, subject, html);
  }
  async sendConsultationBookingEmail(booking) {
    const subject = `New Consultation Booking - ${booking.consultationType}`;
    const html = `
      <h2>New Consultation Booking</h2>
      <p><strong>Name:</strong> ${booking.firstName} ${booking.lastName}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Phone:</strong> ${booking.phone}</p>
      <p><strong>Consultation Type:</strong> ${booking.consultationType}</p>
      <p><strong>Preferred Date:</strong> ${booking.preferredDate}</p>
      <p><strong>Message:</strong></p>
      <p>${booking.message || "No message provided"}</p>
      <p><strong>Submitted At:</strong> ${booking.createdAt}</p>
    `;
    return this.sendEmail(BUSINESS_EMAIL, subject, html);
  }
  async sendQuoteRequestEmail(request) {
    const subject = `New Quote Request - ${request.serviceType}`;
    const html = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${request.firstName} ${request.lastName}</p>
      <p><strong>Email:</strong> ${request.email}</p>
      <p><strong>Phone:</strong> ${request.phone}</p>
      <p><strong>Company:</strong> ${request.company || "Not provided"}</p>
      <p><strong>Service Type:</strong> ${request.serviceType}</p>
      <p><strong>Budget:</strong> ${request.budget || "Not provided"}</p>
      <p><strong>Timeline:</strong> ${request.timeline || "Not provided"}</p>
      <p><strong>Project Description:</strong></p>
      <p>${request.projectDescription}</p>
      <p><strong>Submitted At:</strong> ${request.createdAt}</p>
    `;
    return this.sendEmail(BUSINESS_EMAIL, subject, html);
  }
  async sendPartnershipRequestEmail(request) {
    const subject = `New Partnership Request - ${request.partnershipType}`;
    const html = `
      <h2>New Partnership Request</h2>
      <p><strong>Company:</strong> ${request.companyName}</p>
      <p><strong>Contact Name:</strong> ${request.contactName}</p>
      <p><strong>Email:</strong> ${request.email}</p>
      <p><strong>Phone:</strong> ${request.phone}</p>
      <p><strong>Partnership Type:</strong> ${request.partnershipType}</p>
      <p><strong>Description:</strong></p>
      <p>${request.description}</p>
      <p><strong>Submitted At:</strong> ${request.createdAt}</p>
    `;
    return this.sendEmail(BUSINESS_EMAIL, subject, html);
  }
  async sendSupportTicketEmail(ticket) {
    const subject = `New Support Ticket - ${ticket.subject} [Priority: ${ticket.priority}]`;
    const html = `
      <h2>New Support Ticket</h2>
      <p><strong>Name:</strong> ${ticket.firstName} ${ticket.lastName}</p>
      <p><strong>Email:</strong> ${ticket.email}</p>
      <p><strong>Subject:</strong> ${ticket.subject}</p>
      <p><strong>Priority:</strong> ${ticket.priority}</p>
      <p><strong>Message:</strong></p>
      <p>${ticket.message}</p>
      <p><strong>Submitted At:</strong> ${ticket.createdAt}</p>
    `;
    return this.sendEmail(BUSINESS_EMAIL, subject, html);
  }
  async sendEmail(to, subject, html) {
    try {
      const info = await this.transporter.sendMail({
        from: FROM_EMAIL,
        to,
        subject,
        html
      });
      console.log("Email sent successfully:", info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error("Failed to send email:", error);
      return { success: false, error: error.message };
    }
  }
};
var emailService = new EmailService();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, boolean, integer, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  phone: text("phone"),
  role: text("role").default("user"),
  // admin, user, staff
  isActive: boolean("is_active").default(true),
  lastLogin: timestamp("last_login"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  visaType: text("visa_type").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var consultationBookings = pgTable("consultation_bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  consultationType: text("consultation_type").notNull(),
  preferredDate: timestamp("preferred_date").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow()
});
var newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow()
});
var appointments = pgTable("appointments", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  consultationType: text("consultation_type").notNull(),
  preferredDate: timestamp("preferred_date").notNull(),
  timeSlot: text("time_slot").notNull(),
  message: text("message"),
  hrEmail: text("hr_email").notNull(),
  googleMeet: boolean("google_meet").default(true),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow()
});
var visaServices = pgTable("visa_services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  // study, work, business, tourism, etc.
  price: decimal("price", { precision: 10, scale: 2 }),
  duration: text("duration"),
  // processing time
  requirements: jsonb("requirements"),
  // JSON array of requirements
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var itServices = pgTable("it_services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(),
  // development, consulting, design, etc.
  price: decimal("price", { precision: 10, scale: 2 }),
  duration: text("duration"),
  technologies: jsonb("technologies"),
  // JSON array of technologies
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  author: text("author").notNull(),
  category: text("category").notNull(),
  tags: jsonb("tags"),
  // JSON array of tags
  featuredImage: text("featured_image"),
  isPublished: boolean("is_published").default(false),
  publishedAt: timestamp("published_at"),
  viewCount: integer("view_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientName: text("client_name").notNull(),
  clientEmail: text("client_email"),
  clientCompany: text("client_company"),
  service: text("service").notNull(),
  rating: integer("rating").notNull(),
  // 1-5 stars
  testimonial: text("testimonial").notNull(),
  isApproved: boolean("is_approved").default(false),
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow()
});
var careerApplications = pgTable("career_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  position: text("position").notNull(),
  experience: text("experience").notNull(),
  resume: text("resume"),
  // file path or URL
  coverLetter: text("cover_letter"),
  status: text("status").default("pending"),
  // pending, reviewed, accepted, rejected
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow()
});
var supportTickets = pgTable("support_tickets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  ticketNumber: text("ticket_number").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  priority: text("priority").default("medium"),
  // low, medium, high, urgent
  status: text("status").default("open"),
  // open, in_progress, resolved, closed
  assignedTo: text("assigned_to"),
  resolution: text("resolution"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow()
});
var quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company"),
  serviceType: text("service_type").notNull(),
  // visa, it, both
  projectDescription: text("project_description").notNull(),
  budget: text("budget"),
  timeline: text("timeline"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow()
});
var partnershipRequests = pgTable("partnership_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  partnershipType: text("partnership_type").notNull(),
  description: text("description").notNull(),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow()
});
var siteSettings = pgTable("site_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  key: text("key").notNull().unique(),
  value: jsonb("value").notNull(),
  description: text("description"),
  updatedAt: timestamp("updated_at").defaultNow()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  firstName: true,
  lastName: true,
  phone: true,
  role: true
});
var insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  firstName: true,
  lastName: true,
  email: true,
  visaType: true,
  message: true
});
var insertConsultationBookingSchema = createInsertSchema(consultationBookings).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  consultationType: true,
  preferredDate: true,
  message: true
});
var insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).pick({
  email: true
});
var insertAppointmentSchema = createInsertSchema(appointments).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  consultationType: true,
  preferredDate: true,
  timeSlot: true,
  message: true,
  hrEmail: true
});
var insertVisaServiceSchema = createInsertSchema(visaServices).pick({
  name: true,
  description: true,
  category: true,
  price: true,
  duration: true,
  requirements: true
});
var insertItServiceSchema = createInsertSchema(itServices).pick({
  name: true,
  description: true,
  category: true,
  price: true,
  duration: true,
  technologies: true
});
var insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  slug: true,
  content: true,
  excerpt: true,
  author: true,
  category: true,
  tags: true,
  featuredImage: true,
  isPublished: true
});
var insertTestimonialSchema = createInsertSchema(testimonials).pick({
  clientName: true,
  clientEmail: true,
  clientCompany: true,
  service: true,
  rating: true,
  testimonial: true,
  isApproved: true,
  isFeatured: true
});
var insertCareerApplicationSchema = createInsertSchema(careerApplications).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  position: true,
  experience: true,
  resume: true,
  coverLetter: true
});
var insertSupportTicketSchema = createInsertSchema(supportTickets).pick({
  firstName: true,
  lastName: true,
  email: true,
  subject: true,
  message: true,
  priority: true
});
var insertQuoteRequestSchema = createInsertSchema(quoteRequests).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  company: true,
  serviceType: true,
  projectDescription: true,
  budget: true,
  timeline: true
});
var insertPartnershipRequestSchema = createInsertSchema(partnershipRequests).pick({
  companyName: true,
  contactName: true,
  email: true,
  phone: true,
  partnershipType: true,
  description: true
});
var insertSiteSettingSchema = createInsertSchema(siteSettings).pick({
  key: true,
  value: true,
  description: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      await emailService.sendContactSubmissionEmail(submission);
      res.json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/contact", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/consultation", async (req, res) => {
    try {
      const validatedData = insertConsultationBookingSchema.parse(req.body);
      const booking = await storage.createConsultationBooking(validatedData);
      await emailService.sendConsultationBookingEmail(booking);
      res.json({ success: true, id: booking.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/consultation", async (req, res) => {
    try {
      const bookings = await storage.getConsultationBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.json({ success: true, id: subscription.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/newsletter", async (req, res) => {
    try {
      const subscriptions = await storage.getNewsletterSubscriptions();
      res.json(subscriptions);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      const appointment = await storage.createAppointment(validatedData);
      res.json({
        success: true,
        id: appointment.id,
        message: "Appointment booked successfully. Google Meet invite will be sent to hr@guideitsol.com"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/appointments", async (req, res) => {
    try {
      const appointments2 = await storage.getAppointments();
      res.json(appointments2);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/visa-services", async (req, res) => {
    try {
      const validatedData = insertVisaServiceSchema.parse(req.body);
      const service = await storage.createVisaService(validatedData);
      res.json({ success: true, id: service.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/visa-services", async (req, res) => {
    try {
      const services = await storage.getVisaServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/visa-services/:id", async (req, res) => {
    try {
      const service = await storage.getVisaService(req.params.id);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/it-services", async (req, res) => {
    try {
      const validatedData = insertItServiceSchema.parse(req.body);
      const service = await storage.createItService(validatedData);
      res.json({ success: true, id: service.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/it-services", async (req, res) => {
    try {
      const services = await storage.getItServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/it-services/:id", async (req, res) => {
    try {
      const service = await storage.getItService(req.params.id);
      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }
      res.json(service);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/blog-posts", async (req, res) => {
    try {
      const validatedData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(validatedData);
      res.json({ success: true, id: post.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/blog-posts/published", async (req, res) => {
    try {
      const posts = await storage.getPublishedBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/blog-posts/:id", async (req, res) => {
    try {
      const post = await storage.getBlogPost(req.params.id);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/testimonials", async (req, res) => {
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const testimonial = await storage.createTestimonial(validatedData);
      res.json({ success: true, id: testimonial.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials2 = await storage.getTestimonials();
      res.json(testimonials2);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/testimonials/approved", async (req, res) => {
    try {
      const testimonials2 = await storage.getApprovedTestimonials();
      res.json(testimonials2);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/testimonials/featured", async (req, res) => {
    try {
      const testimonials2 = await storage.getFeaturedTestimonials();
      res.json(testimonials2);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/career-applications", async (req, res) => {
    try {
      const validatedData = insertCareerApplicationSchema.parse(req.body);
      const application = await storage.createCareerApplication(validatedData);
      res.json({ success: true, id: application.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/career-applications", async (req, res) => {
    try {
      const applications = await storage.getCareerApplications();
      res.json(applications);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/support-tickets", async (req, res) => {
    try {
      const validatedData = insertSupportTicketSchema.parse(req.body);
      const ticket = await storage.createSupportTicket(validatedData);
      await emailService.sendSupportTicketEmail(ticket);
      res.json({ success: true, id: ticket.id, ticketNumber: ticket.ticketNumber });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/support-tickets", async (req, res) => {
    try {
      const tickets = await storage.getSupportTickets();
      res.json(tickets);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/support-tickets/:id", async (req, res) => {
    try {
      const ticket = await storage.getSupportTicket(req.params.id);
      if (!ticket) {
        return res.status(404).json({ error: "Ticket not found" });
      }
      res.json(ticket);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/quote-requests", async (req, res) => {
    try {
      const validatedData = insertQuoteRequestSchema.parse(req.body);
      const request = await storage.createQuoteRequest(validatedData);
      await emailService.sendQuoteRequestEmail(request);
      res.json({ success: true, id: request.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/quote-requests", async (req, res) => {
    try {
      const requests = await storage.getQuoteRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/partnership-requests", async (req, res) => {
    try {
      const validatedData = insertPartnershipRequestSchema.parse(req.body);
      const request = await storage.createPartnershipRequest(validatedData);
      await emailService.sendPartnershipRequestEmail(request);
      res.json({ success: true, id: request.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/partnership-requests", async (req, res) => {
    try {
      const requests = await storage.getPartnershipRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.post("/api/site-settings", async (req, res) => {
    try {
      const validatedData = insertSiteSettingSchema.parse(req.body);
      const setting = await storage.createSiteSetting(validatedData);
      res.json({ success: true, id: setting.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid data", details: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });
  app2.get("/api/site-settings", async (req, res) => {
    try {
      const settings = await storage.getSiteSettings();
      res.json(settings);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.get("/api/site-settings/:key", async (req, res) => {
    try {
      const setting = await storage.getSiteSetting(req.params.key);
      if (!setting) {
        return res.status(404).json({ error: "Setting not found" });
      }
      res.json(setting);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app2.put("/api/site-settings/:key", async (req, res) => {
    try {
      const setting = await storage.updateSiteSetting(req.params.key, req.body.value);
      res.json({ success: true, setting });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
var vite_config_default = defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen(port, "localhost", () => {
    log(`serving on port ${port}`);
  });
})();
