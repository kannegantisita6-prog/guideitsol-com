// Form submission utilities and types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  services?: string[];
}

export interface VisaApplicationData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  passportNumber: string;
  
  // Application Details
  visaType: 'study-abroad' | 'work-business' | 'travel-tourism' | 'visa-extension' | 'document-verification' | 'immigration-consultation';
  destinationCountry: string;
  purposeOfVisit: string;
  intendedStayDuration: string;
  
  // Additional Information
  previousVisaHistory?: boolean;
  hasSponsorship?: boolean;
  additionalNotes?: string;
  
  // Preferred Contact
  preferredContactMethod: 'email' | 'phone' | 'both';
  preferredContactTime?: string;
}

export interface NewsletterData {
  email: string;
  name?: string;
  interests?: string[];
  source?: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  referenceNumber?: string;
  estimatedProcessingTime?: string;
  errors?: any[];
}

// Form submission functions
export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Network error. Please try again later.',
    };
  }
}

export async function submitVisaApplication(data: VisaApplicationData): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/visa-application', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Visa application submission error:', error);
    return {
      success: false,
      message: 'Network error. Please try again later.',
    };
  }
}

export async function subscribeToNewsletter(data: NewsletterData): Promise<ApiResponse> {
  try {
    const response = await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: 'Network error. Please try again later.',
    };
  }
}

export async function unsubscribeFromNewsletter(email: string, token: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`/api/newsletter?email=${encodeURIComponent(email)}&token=${encodeURIComponent(token)}`, {
      method: 'DELETE',
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Newsletter unsubscribe error:', error);
    return {
      success: false,
      message: 'Network error. Please try again later.',
    };
  }
}

// Form validation helpers
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

export function validateRequired(value: string | undefined | null): boolean {
  return value !== undefined && value !== null && value.trim().length > 0;
}