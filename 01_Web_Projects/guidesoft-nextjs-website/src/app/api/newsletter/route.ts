import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema for newsletter subscription
const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().min(2, 'Name must be at least 2 characters').max(100).optional(),
  interests: z.array(z.enum([
    'digital-transformation',
    'software-development',
    'cybersecurity',
    'visa-services',
    'immigration-updates',
    'tech-trends'
  ])).optional(),
  source: z.string().optional(), // Track where the subscription came from
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = newsletterSchema.parse(body);
    
    // Check if email already exists (in a real app, you'd check your database)
    const isExistingSubscriber = await checkExistingSubscriber(validatedData.email);
    
    if (isExistingSubscriber) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'You are already subscribed to our newsletter!' 
        },
        { status: 200 }
      );
    }
    
    // Here you would typically:
    // 1. Save to database/mailing list service
    // 2. Send welcome email
    // 3. Integrate with email marketing platform (Mailchimp, SendGrid, etc.)
    
    console.log('Newsletter subscription:', validatedData);
    
    // Simulate saving to mailing list
    await addToMailingList(validatedData);
    
    // Send welcome email
    await sendWelcomeEmail(validatedData);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed! Check your email for confirmation.' 
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid email address',
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Unsubscribe endpoint
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const token = searchParams.get('token');
    
    if (!email || !token) {
      return NextResponse.json(
        { success: false, message: 'Invalid unsubscribe link' },
        { status: 400 }
      );
    }
    
    // Validate unsubscribe token (in a real app, you'd verify the token)
    const isValidToken = await validateUnsubscribeToken(email, token);
    
    if (!isValidToken) {
      return NextResponse.json(
        { success: false, message: 'Invalid or expired unsubscribe link' },
        { status: 400 }
      );
    }
    
    // Remove from mailing list
    await removeFromMailingList(email);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully unsubscribed from our newsletter.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Simulate checking existing subscriber
async function checkExistingSubscriber(email: string): Promise<boolean> {
  // In a real application, you would check your database
  console.log('Checking existing subscriber:', email);
  
  // Simulate database check
  await new Promise(resolve => setTimeout(resolve, 50));
  
  // For demo, randomly return false (new subscriber)
  return Math.random() < 0.1; // 10% chance of existing subscriber
}

// Simulate adding to mailing list
async function addToMailingList(data: z.infer<typeof newsletterSchema>) {
  console.log('Adding to mailing list:', data);
  
  // In a real application, you would:
  // 1. Save to database
  // 2. Add to email marketing platform (Mailchimp, ConvertKit, etc.)
  // 3. Tag with interests for segmentation
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return true;
}

// Simulate removing from mailing list
async function removeFromMailingList(email: string) {
  console.log('Removing from mailing list:', email);
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return true;
}

// Simulate token validation
async function validateUnsubscribeToken(email: string, token: string): Promise<boolean> {
  console.log('Validating unsubscribe token:', email, token);
  
  // In a real application, you would validate the token
  // This could be a JWT token or a hash stored in the database
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 50));
  
  return token.length > 10; // Simple validation for demo
}

// Send welcome email
async function sendWelcomeEmail(data: z.infer<typeof newsletterSchema>) {
  console.log('Sending welcome email:', data);
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
  
  const emailContent = {
    to: data.email,
    from: 'newsletter@guidesoft.com',
    subject: 'Welcome to Guidesoft Newsletter!',
    html: `
      <h2>Welcome to Guidesoft Newsletter!</h2>
      ${data.name ? `<p>Hi ${data.name},</p>` : '<p>Hi there,</p>'}
      
      <p>Thank you for subscribing to our newsletter! You'll now receive:</p>
      <ul>
        <li>🚀 Latest insights on digital transformation</li>
        <li>💡 Technology trends and best practices</li>
        <li>🌍 Visa and immigration updates</li>
        <li>📚 Exclusive guides and resources</li>
        <li>🎯 Industry case studies and success stories</li>
      </ul>
      
      ${data.interests && data.interests.length > 0 ? `
        <p><strong>Your interests:</strong> ${data.interests.map(interest => 
          interest.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())
        ).join(', ')}</p>
      ` : ''}
      
      <p>We typically send updates twice a month with valuable content tailored to help your business grow.</p>
      
      <p>Stay connected with us:</p>
      <p>
        <a href="https://linkedin.com/company/guidesoft">LinkedIn</a> | 
        <a href="https://twitter.com/guidesoft">Twitter</a> | 
        <a href="https://guidesoft.com/blog">Blog</a>
      </p>
      
      <hr>
      <p><small>
        If you no longer wish to receive these emails, you can 
        <a href="https://guidesoft.com/unsubscribe?email=${encodeURIComponent(data.email)}&token=demo_token">unsubscribe here</a>.
      </small></p>
      
      <p>Best regards,<br>The Guidesoft Team</p>
    `,
  };
  
  return true;
}