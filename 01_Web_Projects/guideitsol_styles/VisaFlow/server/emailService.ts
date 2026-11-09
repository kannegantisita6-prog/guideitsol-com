import nodemailer from 'nodemailer';
import type { ContactSubmission, ConsultationBooking, QuoteRequest, PartnershipRequest, SupportTicket } from '@shared/schema';

// Email configuration
const createTransporter = () => {
  // For development, use a test account or configure with your SMTP settings
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password'
    }
  });
};

const BUSINESS_EMAIL = 'info@guideitsol.com';
const FROM_EMAIL = process.env.EMAIL_USER || 'noreply@guideitsol.com';

export class EmailService {
  private transporter;

  constructor() {
    this.transporter = createTransporter();
  }

  async sendContactSubmissionEmail(submission: ContactSubmission) {
    const formType = (submission as any).formType || 'Contact Form';
    const subject = `New Contact Form Submission - ${formType}`;
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Form Type:</strong> ${formType}</p>
      <p><strong>Name:</strong> ${submission.firstName} ${submission.lastName}</p>
      <p><strong>Email:</strong> ${submission.email}</p>
      <p><strong>Phone:</strong> ${(submission as any).phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${(submission as any).company || 'Not provided'}</p>
      <p><strong>Service:</strong> ${(submission as any).service || 'Not provided'}</p>
      <p><strong>Budget:</strong> ${(submission as any).budget || 'Not provided'}</p>
      <p><strong>Timeline:</strong> ${(submission as any).timeline || 'Not provided'}</p>
      <p><strong>Country:</strong> ${(submission as any).country || 'Not provided'}</p>
      <p><strong>Visa Type:</strong> ${submission.visaType || 'Not provided'}</p>
      <p><strong>Consultation Type:</strong> ${(submission as any).consultationType || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${submission.message || 'No message provided'}</p>
      <p><strong>Submitted At:</strong> ${submission.createdAt}</p>
    `;

    return this.sendEmail(BUSINESS_EMAIL, subject, html);
  }

  async sendConsultationBookingEmail(booking: ConsultationBooking) {
    const subject = `New Consultation Booking - ${booking.consultationType}`;
    const html = `
      <h2>New Consultation Booking</h2>
      <p><strong>Name:</strong> ${booking.firstName} ${booking.lastName}</p>
      <p><strong>Email:</strong> ${booking.email}</p>
      <p><strong>Phone:</strong> ${booking.phone}</p>
      <p><strong>Consultation Type:</strong> ${booking.consultationType}</p>
      <p><strong>Preferred Date:</strong> ${booking.preferredDate}</p>
      <p><strong>Message:</strong></p>
      <p>${booking.message || 'No message provided'}</p>
      <p><strong>Submitted At:</strong> ${booking.createdAt}</p>
    `;

    return this.sendEmail(BUSINESS_EMAIL, subject, html);
  }

  async sendQuoteRequestEmail(request: QuoteRequest) {
    const subject = `New Quote Request - ${request.serviceType}`;
    const html = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${request.firstName} ${request.lastName}</p>
      <p><strong>Email:</strong> ${request.email}</p>
      <p><strong>Phone:</strong> ${request.phone}</p>
      <p><strong>Company:</strong> ${request.company || 'Not provided'}</p>
      <p><strong>Service Type:</strong> ${request.serviceType}</p>
      <p><strong>Budget:</strong> ${request.budget || 'Not provided'}</p>
      <p><strong>Timeline:</strong> ${request.timeline || 'Not provided'}</p>
      <p><strong>Project Description:</strong></p>
      <p>${request.projectDescription}</p>
      <p><strong>Submitted At:</strong> ${request.createdAt}</p>
    `;

    return this.sendEmail(BUSINESS_EMAIL, subject, html);
  }

  async sendPartnershipRequestEmail(request: PartnershipRequest) {
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

  async sendSupportTicketEmail(ticket: SupportTicket) {
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

  private async sendEmail(to: string, subject: string, html: string) {
    try {
      const info = await this.transporter.sendMail({
        from: FROM_EMAIL,
        to,
        subject,
        html
      });
      
      console.log('Email sent successfully:', info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error('Failed to send email:', error as Error);
      return { success: false, error: (error as Error).message };
    }
  }
}

export const emailService = new EmailService();