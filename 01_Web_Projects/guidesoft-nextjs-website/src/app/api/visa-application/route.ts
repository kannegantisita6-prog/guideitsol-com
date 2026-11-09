import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema for visa application form
const visaApplicationSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, 'First name must be at least 2 characters').max(50),
  lastName: z.string().min(2, 'Last name must be at least 2 characters').max(50),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  dateOfBirth: z.string().refine((date) => {
    const parsedDate = new Date(date);
    return parsedDate instanceof Date && !isNaN(parsedDate.getTime());
  }, 'Invalid date of birth'),
  nationality: z.string().min(2, 'Nationality is required'),
  passportNumber: z.string().min(6, 'Passport number must be at least 6 characters'),
  
  // Application Details
  visaType: z.enum(['study-abroad', 'work-business', 'travel-tourism', 'visa-extension', 'document-verification', 'immigration-consultation']),
  destinationCountry: z.string().min(2, 'Destination country is required'),
  purposeOfVisit: z.string().min(10, 'Purpose of visit must be at least 10 characters').max(500),
  intendedStayDuration: z.string().min(1, 'Intended stay duration is required'),
  
  // Additional Information
  previousVisaHistory: z.boolean().optional(),
  hasSponsorship: z.boolean().optional(),
  additionalNotes: z.string().max(1000).optional(),
  
  // Preferred Contact
  preferredContactMethod: z.enum(['email', 'phone', 'both']).default('email'),
  preferredContactTime: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = visaApplicationSchema.parse(body);
    
    // Here you would typically:
    // 1. Save to database
    // 2. Generate application reference number
    // 3. Send confirmation email
    // 4. Notify visa consultants
    
    // For demo purposes, we'll simulate processing
    console.log('Visa application submission:', validatedData);
    
    // Generate a reference number
    const referenceNumber = generateReferenceNumber();
    
    // Simulate email sending
    await sendVisaApplicationEmail(validatedData, referenceNumber);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Your visa application has been submitted successfully!',
        referenceNumber,
        estimatedProcessingTime: getEstimatedProcessingTime(validatedData.visaType)
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please check your application data',
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    console.error('Visa application error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Generate a unique reference number
function generateReferenceNumber(): string {
  const prefix = 'GS';
  const year = new Date().getFullYear();
  const randomNumber = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${prefix}${year}${randomNumber}`;
}

// Get estimated processing time based on visa type
function getEstimatedProcessingTime(visaType: string): string {
  const processingTimes: Record<string, string> = {
    'study-abroad': '2-4 weeks',
    'work-business': '3-6 weeks',
    'travel-tourism': '1-2 weeks',
    'visa-extension': '2-3 weeks',
    'document-verification': '1-2 weeks',
    'immigration-consultation': '1 week',
  };
  
  return processingTimes[visaType] || '2-4 weeks';
}

// Simulate email sending function
async function sendVisaApplicationEmail(
  data: z.infer<typeof visaApplicationSchema>, 
  referenceNumber: string
) {
  console.log('Sending visa application email with data:', data);
  
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 100));
  
  // Email content would be:
  const emailContent = {
    to: 'visa@guidesoft.com',
    from: 'noreply@guidesoft.com',
    subject: `New Visa Application: ${referenceNumber}`,
    html: `
      <h2>New Visa Application Submission</h2>
      <p><strong>Reference Number:</strong> ${referenceNumber}</p>
      
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Date of Birth:</strong> ${data.dateOfBirth}</p>
      <p><strong>Nationality:</strong> ${data.nationality}</p>
      <p><strong>Passport Number:</strong> ${data.passportNumber}</p>
      
      <h3>Application Details</h3>
      <p><strong>Visa Type:</strong> ${data.visaType.replace('-', ' ').toUpperCase()}</p>
      <p><strong>Destination Country:</strong> ${data.destinationCountry}</p>
      <p><strong>Purpose of Visit:</strong> ${data.purposeOfVisit}</p>
      <p><strong>Intended Stay Duration:</strong> ${data.intendedStayDuration}</p>
      
      <h3>Additional Information</h3>
      <p><strong>Previous Visa History:</strong> ${data.previousVisaHistory ? 'Yes' : 'No'}</p>
      <p><strong>Has Sponsorship:</strong> ${data.hasSponsorship ? 'Yes' : 'No'}</p>
      ${data.additionalNotes ? `<p><strong>Additional Notes:</strong> ${data.additionalNotes}</p>` : ''}
      
      <h3>Contact Preferences</h3>
      <p><strong>Preferred Contact Method:</strong> ${data.preferredContactMethod}</p>
      ${data.preferredContactTime ? `<p><strong>Preferred Contact Time:</strong> ${data.preferredContactTime}</p>` : ''}
      
      <hr>
      <p><small>Submitted at: ${new Date().toISOString()}</small></p>
    `,
  };
  
  // Send confirmation email to applicant
  const confirmationEmail = {
    to: data.email,
    from: 'noreply@guidesoft.com',
    subject: `Visa Application Confirmation - ${referenceNumber}`,
    html: `
      <h2>Thank you for your visa application!</h2>
      <p>Dear ${data.firstName} ${data.lastName},</p>
      <p>We have successfully received your visa application with reference number: <strong>${referenceNumber}</strong></p>
      
      <h3>Application Summary</h3>
      <p><strong>Visa Type:</strong> ${data.visaType.replace('-', ' ').toUpperCase()}</p>
      <p><strong>Destination:</strong> ${data.destinationCountry}</p>
      <p><strong>Estimated Processing Time:</strong> ${getEstimatedProcessingTime(data.visaType)}</p>
      
      <h3>What's Next?</h3>
      <ul>
        <li>Our visa consultant will review your application within 24 hours</li>
        <li>You will receive a detailed requirements checklist via email</li>
        <li>We will schedule a consultation call at your preferred time</li>
        <li>Our team will guide you through the entire process</li>
      </ul>
      
      <p>If you have any questions, please don't hesitate to contact us:</p>
      <p>Email: visa@guidesoft.com</p>
      <p>Phone: +1-555-0123</p>
      
      <p>Best regards,<br>Guidesoft Visa Services Team</p>
    `,
  };
  
  return true;
}