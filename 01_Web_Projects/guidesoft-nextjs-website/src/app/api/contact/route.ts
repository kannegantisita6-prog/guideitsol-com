import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
  services: z.array(z.string()).optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body);
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM
    
    // For demo purposes, we'll simulate processing
    console.log('Contact form submission:', validatedData);
    
    // Simulate email sending
    await sendContactEmail(validatedData);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your inquiry! We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please check your form data',
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

import nodemailer from 'nodemailer';

// Email sending function with Nodemailer and fallback
async function sendContactEmail(data: z.infer<typeof contactFormSchema>) {
  const host = process.env.SMTP_HOST || 'mail.guideitsol.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const user = process.env.SMTP_USER || 'business@guideitsol.com';
  const pass = process.env.SMTP_PASS || '';
  const to = process.env.CONTACT_EMAIL_RECEIVER || 'business@guideitsol.com';

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    await transporter.sendMail({
      from: `"GuideITSol Contact System" <${user}>`,
      to,
      replyTo: data.email,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0284c7;">New Contact Form Submission - GuideITSol</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #cbd5e1;">${data.message.replace(/\n/g, '<br>')}</p>
          ${data.services && data.services.length > 0 ? 
            `<p><strong>Interested Services:</strong> ${data.services.join(', ')}</p>` : 
            ''
          }
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          <p><small style="color: #64748b;">Submitted at: ${new Date().toISOString()}</small></p>
        </div>
      `,
    });
    return true;
  } catch (err: any) {
    console.warn('SMTP delivery attempt logged:', err.message);
    return false;
  }
}