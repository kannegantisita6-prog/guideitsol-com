import { Metadata } from 'next';
import { Button, Card, Input, Textarea } from '@/components/ui';
import { ArrowRightIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Guidesoft for technology solutions and visa services. Multiple ways to reach our expert team for your business needs.',
};

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    details: ['+1 (234) 567-8900', '+1 (234) 567-8901'],
    description: 'Mon-Fri 9AM-6PM EST'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    details: ['info@guidesoft.com', 'support@guidesoft.com'],
    description: '24/7 Email Support'
  },
  {
    icon: MapPinIcon,
    title: 'Office',
    details: ['123 Business Avenue', 'Suite 456, Tech City, TC 12345'],
    description: 'Visit us in person'
  },
  {
    icon: ClockIcon,
    title: 'Business Hours',
    details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM'],
    description: 'Eastern Standard Time'
  }
];

const offices = [
  {
    city: 'New York',
    address: '123 Business Avenue, Suite 456',
    country: 'United States',
    phone: '+1 (234) 567-8900',
    email: 'ny@guidesoft.com'
  },
  {
    city: 'Toronto',
    address: '789 Tech Street, Floor 12',
    country: 'Canada',
    phone: '+1 (416) 555-0123',
    email: 'toronto@guidesoft.com'
  },
  {
    city: 'London',
    address: '456 Innovation Lane, Level 8',
    country: 'United Kingdom',
    phone: '+44 20 7123 4567',
    email: 'london@guidesoft.com'
  }
];

const serviceTypes = [
  'IT Consulting & Strategy',
  'Software Development',
  'UI/UX Design',
  'Data & Analytics',
  'Cybersecurity Services',
  'Digital Marketing',
  'Study Abroad Visas',
  'Work & Business Visas',
  'Travel & Tourism Visas',
  'Visa Extension & Renewal',
  'Document Verification',
  'Immigration Consultation',
  'General Inquiry'
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Get in Touch
              <span className="block text-gradient">We're Here to Help</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              Ready to transform your business or start your global journey? Our expert team is here to 
              provide personalized solutions for your technology and visa service needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Multiple Ways to Reach Us
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Choose the most convenient way to get in touch with our team.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <Card key={index} hover className="text-center group">
                <div className="mx-auto h-12 w-12 text-primary-600 mb-6 group-hover:text-primary-700 transition-colors duration-200">
                  <info.icon className="h-12 w-12" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-secondary-700 font-medium">
                      {detail}
                    </p>
                  ))}
                </div>
                <p className="text-sm text-secondary-600">
                  {info.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                  Send us a Message
                </h2>
                <p className="mt-4 text-lg text-secondary-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </div>
              <Card>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Input
                      label="First Name"
                      type="text"
                      placeholder="Enter your first name"
                      required
                    />
                    <Input
                      label="Last Name"
                      type="text"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Input
                      label="Email Address"
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                    <Input
                      label="Phone Number"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Input
                      label="Company"
                      type="text"
                      placeholder="Your company name"
                    />
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Service of Interest
                      </label>
                      <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        <option>Select a service</option>
                        {serviceTypes.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Textarea
                    label="Message"
                    placeholder="Tell us about your project, requirements, or any questions you have..."
                    rows={6}
                    required
                  />
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="newsletter"
                        name="newsletter"
                        type="checkbox"
                        className="focus:ring-blue-500 h-4 w-4 text-primary-600 border-secondary-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="newsletter" className="text-secondary-700">
                        Subscribe to our newsletter for updates and insights
                      </label>
                    </div>
                  </div>
                  <div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </Card>
            </div>

            {/* Office Locations */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                  Our Global Offices
                </h2>
                <p className="mt-4 text-lg text-secondary-600">
                  Visit us at any of our offices worldwide for in-person consultations.
                </p>
              </div>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} hover className="group">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 mb-2">
                          {office.city}, {office.country}
                        </h3>
                        <p className="text-secondary-600 mb-3">
                          {office.address}
                        </p>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm text-secondary-600">
                            <PhoneIcon className="h-4 w-4 mr-2" />
                            {office.phone}
                          </div>
                          <div className="flex items-center text-sm text-secondary-600">
                            <EnvelopeIcon className="h-4 w-4 mr-2" />
                            {office.email}
                          </div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-200">
                          <MapPinIcon className="h-8 w-8 text-primary-600" />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Quick Contact Options */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                  Need Immediate Assistance?
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Button variant="outline" className="justify-start">
                    <PhoneIcon className="h-5 w-5 mr-3" />
                    Call Now
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <EnvelopeIcon className="h-5 w-5 mr-3" />
                    Email Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Quick answers to common questions about our services.
            </p>
          </div>
          <div className="space-y-6">
            <Card>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                How quickly can you start a project?
              </h3>
              <p className="text-secondary-600">
                We can typically start new projects within 1-2 weeks of initial consultation, 
                depending on project scope and team availability. Emergency projects can be 
                accommodated with shorter notice.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                Do you provide free consultations?
              </h3>
              <p className="text-secondary-600">
                Yes, we offer free initial consultations for all our services. This allows us 
                to understand your needs and provide accurate project estimates without any commitment.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                What is your typical project timeline?
              </h3>
              <p className="text-secondary-600">
                Project timelines vary based on complexity. Simple websites take 4-6 weeks, 
                complex applications 3-6 months, and visa processing 2-12 weeks depending on the type.
              </p>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                Do you provide ongoing support after project completion?
              </h3>
              <p className="text-secondary-600">
                Absolutely! We provide comprehensive ongoing support, maintenance, and updates for all 
                our technology solutions. Visa services include post-approval support and guidance.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-primary-600">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Emergency Visa Services Available 24/7
          </h2>
          <p className="text-primary-100 mb-6">
            Need urgent visa assistance? Our emergency team is available for critical situations.
          </p>
          <Button variant="secondary" size="lg">
            <PhoneIcon className="h-5 w-5 mr-2" />
            Emergency Hotline: +1 (234) 567-8999
          </Button>
        </div>
      </section>
    </div>
  );
}