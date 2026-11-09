import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, Input, Textarea } from '@/components/ui';
import { ArrowRightIcon, CheckCircleIcon, DocumentTextIcon, ShieldCheckIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Document Verification & Attestation',
  description: 'Get your documents officially verified and attested for international use with our trusted services. Secure, government-recognized attestation.',
};

const services = [
  {
    title: 'Document Authentication',
    description: 'Official verification of document authenticity.',
    icon: ShieldCheckIcon,
    features: ['Notarization', 'Authentication', 'Verification', 'Certification'],
    timeframe: '3-7 days'
  },
  {
    title: 'Embassy Attestation',
    description: 'Legalization by relevant embassies and consulates.',
    icon: DocumentTextIcon,
    features: ['Embassy Legalization', 'Consular Services', 'Official Stamps', 'Diplomatic Authentication'],
    timeframe: '7-14 days'
  },
  {
    title: 'Translation Support',
    description: 'Professional translation and certification services.',
    icon: ClockIcon,
    features: ['Certified Translation', 'Multiple Languages', 'Legal Translation', 'Official Formatting'],
    timeframe: '2-5 days'
  }
];

const documentTypes = [
  {
    category: 'Educational Documents',
    icon: '🎓',
    documents: ['Degree Certificates', 'Transcripts', 'Diplomas', 'Academic Records', 'Course Certificates']
  },
  {
    category: 'Business Documents',
    icon: '💼',
    documents: ['Commercial Certificates', 'Company Registration', 'Trade Licenses', 'Financial Statements', 'Contracts']
  },
  {
    category: 'Legal Documents',
    icon: '⚖️',
    documents: ['Marriage Certificates', 'Birth Certificates', 'Death Certificates', 'Divorce Decrees', 'Power of Attorney']
  },
  {
    category: 'Identity Documents',
    icon: '🆔',
    documents: ['Passport Copies', 'National ID Cards', 'Driver Licenses', 'Professional Licenses', 'Employment Records']
  }
];

const process = [
  {
    step: '01',
    title: 'Document Submission',
    description: 'Submit your documents with attestation requirements.',
    icon: DocumentTextIcon,
  },
  {
    step: '02',
    title: 'Verification Process',
    description: 'Initial verification and authentication procedures.',
    icon: ShieldCheckIcon,
  },
  {
    step: '03',
    title: 'Official Attestation',
    description: 'Embassy attestation and government recognition.',
    icon: CheckCircleIcon,
  },
  {
    step: '04',
    title: 'Secure Delivery',
    description: 'Safe return of attested documents to you.',
    icon: TruckIcon,
  }
];

const trustBadges = [
  { name: 'Government Recognized', icon: '🏛️' },
  { name: 'Secure Processing', icon: '🔒' },
  { name: 'Fast Turnaround', icon: '⚡' },
  { name: 'Global Acceptance', icon: '🌍' }
];

export default function DocumentVerificationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="text-6xl mb-8">📋</div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Document Verification
              <span className="block text-gradient">& Attestation</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              Get your documents officially verified and attested for international use with our trusted services. 
              Document Authentication, Embassy Attestation, and Translation Support with government recognition.
            </p>
            <div className="mt-10">
              <Link href="#application-form">
                <Button size="lg">
                  Get Your Documents Verified
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{badge.icon}</div>
                <div className="text-sm font-medium text-secondary-900">{badge.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Attestation Services
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Comprehensive document verification and attestation solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="text-center group h-full">
                <div className="mx-auto h-16 w-16 text-primary-600 mb-6 group-hover:text-primary-700 transition-colors duration-200">
                  <service.icon className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 mb-4">
                  {service.title}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {service.description}
                </p>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {service.timeframe}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-900 mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-secondary-600">
                        <CheckCircleIcon className="h-4 w-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Supported Documents
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Educational, Business, Legal, Identity - we handle all types of documents.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {documentTypes.map((type, index) => (
              <Card key={index} className="text-center group">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 mb-4">
                  {type.category}
                </h3>
                <ul className="space-y-2">
                  {type.documents.map((doc, idx) => (
                    <li key={idx} className="text-sm text-secondary-600">
                      {doc}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Attestation Process
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Submission → Verification → Attestation → Delivery
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.step}
                </div>
                <div className="mx-auto h-12 w-12 text-primary-600 mb-4">
                  <step.icon className="h-12 w-12" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-secondary-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Timeline */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Service Timeline & Pricing
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Transparent pricing and clear timelines for all attestation services.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="text-center">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Standard Service</h3>
              <div className="text-3xl font-bold text-primary-600 mb-2">7-14 Days</div>
              <p className="text-secondary-600 mb-6">Regular processing for most documents</p>
              <ul className="text-sm text-secondary-600 text-left space-y-2">
                <li>✓ Document Verification</li>
                <li>✓ Embassy Attestation</li>
                <li>✓ Secure Delivery</li>
                <li>✓ Status Updates</li>
              </ul>
            </Card>
            <Card className="text-center bg-primary-50 border-primary-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Express Service</h3>
              <div className="text-3xl font-bold text-primary-600 mb-2">3-7 Days</div>
              <p className="text-secondary-600 mb-6">Expedited processing for urgent needs</p>
              <ul className="text-sm text-secondary-600 text-left space-y-2">
                <li>✓ Priority Processing</li>
                <li>✓ Express Embassy Service</li>
                <li>✓ Courier Delivery</li>
                <li>✓ 24/7 Support</li>
              </ul>
            </Card>
            <Card className="text-center">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Premium Service</h3>
              <div className="text-3xl font-bold text-primary-600 mb-2">1-3 Days</div>
              <p className="text-secondary-600 mb-6">Ultra-fast processing for emergencies</p>
              <ul className="text-sm text-secondary-600 text-left space-y-2">
                <li>✓ Emergency Processing</li>
                <li>✓ VIP Embassy Service</li>
                <li>✓ Same-Day Pickup</li>
                <li>✓ Dedicated Manager</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Get Your Documents Verified
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Start your document attestation process with our expert team.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Document Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select document type</option>
                    <option>Educational Documents</option>
                    <option>Business Documents</option>
                    <option>Legal Documents</option>
                    <option>Identity Documents</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Service Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select service</option>
                    <option>Standard (7-14 days)</option>
                    <option>Express (3-7 days)</option>
                    <option>Premium (1-3 days)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Destination Country
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select destination</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>UAE</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <Textarea
                label="Document Details"
                placeholder="Please specify the documents you need attested and any special requirements..."
                rows={4}
              />
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Submit Attestation Request
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}