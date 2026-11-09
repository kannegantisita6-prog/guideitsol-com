import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb, boolean, integer, decimal, date } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  firstName: text("first_name"),
  lastName: text("last_name"),
  phone: text("phone"),
  role: text("role").default("user"), // admin, user, staff
  isActive: boolean("is_active").default(true),
  lastLogin: timestamp("last_login"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  visaType: text("visa_type").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const consultationBookings = pgTable("consultation_bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  consultationType: text("consultation_type").notNull(),
  preferredDate: timestamp("preferred_date").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const appointments = pgTable("appointments", {
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
  createdAt: timestamp("created_at").defaultNow(),
});

// Visa Services
export const visaServices = pgTable("visa_services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // study, work, business, tourism, etc.
  price: decimal("price", { precision: 10, scale: 2 }),
  duration: text("duration"), // processing time
  requirements: jsonb("requirements"), // JSON array of requirements
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// IT Services
export const itServices = pgTable("it_services", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // development, consulting, design, etc.
  price: decimal("price", { precision: 10, scale: 2 }),
  duration: text("duration"),
  technologies: jsonb("technologies"), // JSON array of technologies
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Blog Posts
export const blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  author: text("author").notNull(),
  category: text("category").notNull(),
  tags: jsonb("tags"), // JSON array of tags
  featuredImage: text("featured_image"),
  isPublished: boolean("is_published").default(false),
  publishedAt: timestamp("published_at"),
  viewCount: integer("view_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Testimonials
export const testimonials = pgTable("testimonials", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  clientName: text("client_name").notNull(),
  clientEmail: text("client_email"),
  clientCompany: text("client_company"),
  service: text("service").notNull(),
  rating: integer("rating").notNull(), // 1-5 stars
  testimonial: text("testimonial").notNull(),
  isApproved: boolean("is_approved").default(false),
  isFeatured: boolean("is_featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

// Career Applications
export const careerApplications = pgTable("career_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  position: text("position").notNull(),
  experience: text("experience").notNull(),
  resume: text("resume"), // file path or URL
  coverLetter: text("cover_letter"),
  status: text("status").default("pending"), // pending, reviewed, accepted, rejected
  notes: text("notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Support Tickets
export const supportTickets = pgTable("support_tickets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  ticketNumber: text("ticket_number").notNull().unique(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  priority: text("priority").default("medium"), // low, medium, high, urgent
  status: text("status").default("open"), // open, in_progress, resolved, closed
  assignedTo: text("assigned_to"),
  resolution: text("resolution"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Quote Requests
export const quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company"),
  serviceType: text("service_type").notNull(), // visa, it, both
  projectDescription: text("project_description").notNull(),
  budget: text("budget"),
  timeline: text("timeline"),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Partnership Requests
export const partnershipRequests = pgTable("partnership_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  partnershipType: text("partnership_type").notNull(),
  description: text("description").notNull(),
  status: text("status").default("pending"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Site Settings
export const siteSettings = pgTable("site_settings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  key: text("key").notNull().unique(),
  value: jsonb("value").notNull(),
  description: text("description"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Insert Schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  firstName: true,
  lastName: true,
  phone: true,
  role: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  firstName: true,
  lastName: true,
  email: true,
  visaType: true,
  message: true,
});

export const insertConsultationBookingSchema = createInsertSchema(consultationBookings).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  consultationType: true,
  preferredDate: true,
  message: true,
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).pick({
  email: true,
});

export const insertAppointmentSchema = createInsertSchema(appointments).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  consultationType: true,
  preferredDate: true,
  timeSlot: true,
  message: true,
  hrEmail: true,
});

export const insertVisaServiceSchema = createInsertSchema(visaServices).pick({
  name: true,
  description: true,
  category: true,
  price: true,
  duration: true,
  requirements: true,
});

export const insertItServiceSchema = createInsertSchema(itServices).pick({
  name: true,
  description: true,
  category: true,
  price: true,
  duration: true,
  technologies: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  slug: true,
  content: true,
  excerpt: true,
  author: true,
  category: true,
  tags: true,
  featuredImage: true,
  isPublished: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).pick({
  clientName: true,
  clientEmail: true,
  clientCompany: true,
  service: true,
  rating: true,
  testimonial: true,
  isApproved: true,
  isFeatured: true,
});

export const insertCareerApplicationSchema = createInsertSchema(careerApplications).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  position: true,
  experience: true,
  resume: true,
  coverLetter: true,
});

export const insertSupportTicketSchema = createInsertSchema(supportTickets).pick({
  firstName: true,
  lastName: true,
  email: true,
  subject: true,
  message: true,
  priority: true,
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
  company: true,
  serviceType: true,
  projectDescription: true,
  budget: true,
  timeline: true,
});

export const insertPartnershipRequestSchema = createInsertSchema(partnershipRequests).pick({
  companyName: true,
  contactName: true,
  email: true,
  phone: true,
  partnershipType: true,
  description: true,
});

export const insertSiteSettingSchema = createInsertSchema(siteSettings).pick({
  key: true,
  value: true,
  description: true,
});

// Type Exports
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ConsultationBooking = typeof consultationBookings.$inferSelect;
export type InsertConsultationBooking = z.infer<typeof insertConsultationBookingSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;
export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type Appointment = typeof appointments.$inferSelect;
export type InsertAppointment = z.infer<typeof insertAppointmentSchema>;
export type VisaService = typeof visaServices.$inferSelect;
export type InsertVisaService = z.infer<typeof insertVisaServiceSchema>;
export type ItService = typeof itServices.$inferSelect;
export type InsertItService = z.infer<typeof insertItServiceSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type CareerApplication = typeof careerApplications.$inferSelect;
export type InsertCareerApplication = z.infer<typeof insertCareerApplicationSchema>;
export type SupportTicket = typeof supportTickets.$inferSelect;
export type InsertSupportTicket = z.infer<typeof insertSupportTicketSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;
export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;
export type PartnershipRequest = typeof partnershipRequests.$inferSelect;
export type InsertPartnershipRequest = z.infer<typeof insertPartnershipRequestSchema>;
export type SiteSetting = typeof siteSettings.$inferSelect;
export type InsertSiteSetting = z.infer<typeof insertSiteSettingSchema>;
