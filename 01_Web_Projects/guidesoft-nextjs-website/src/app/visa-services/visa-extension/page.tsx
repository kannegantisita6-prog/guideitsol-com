import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, Input, Textarea } from '@/components/ui';
import { ArrowRightIcon, CheckCircleIcon, ClockIcon, DocumentTextIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Visa Extension & Renewal',
  description: 'Extend your stay without stress with our comprehensive visa renewal and extension services. Expert guidance for all visa types.',
};

const extensionTypes = [
  {
    title: 'Student Visa Extension',
    description: 'Extend your study period or change programs.',
    icon: '🎓',
    features: ['Program Extension', 'Course Changes', 'OPT Applications', 'Continued Studies'],
    processing: '2-4 weeks'
  },
  {
    title: 'Work Visa Extension',
    description: 'Continue your employment with visa extensions.',
    icon: '💼',
    features: ['Employment Extension', 'Job Changes', 'Status Maintenance', 'Family Inclusions'],
    processing: '3-6 weeks'
  },
  {
    title: 'Tourist Visa Extension',
    description: 'Extend your vacation or family visit.',
    icon: '✈️',
    features: ['Tourism Extension', 'Family Visits', 'Medical Extensions', 'Emergency Cases'],
    processing: '1-3 weeks'
  }
];

const process = [
  {
    step: '01',
    title: 'Current Visa Check',
    description: 'Review your current visa status and extension eligibility.',
    icon: DocumentTextIcon,
  },
  {
    step: '02',
    title: 'Renewal Application',
    description: 'Prepare and submit extension/renewal application.',
    icon: ClockIcon,
  },
  {
    step: '03',
    title: 'Processing & Follow-up',
    description: 'Track application and handle any additional requirements.',
    icon: CheckCircleIcon,
  },
  {
    step: '04',
    title: 'Approval & Update',
    description: 'Receive extended visa and updated documentation.',
    icon: ArrowRightIcon,
  }
];

const documents = [
  'Current Valid Visa/Passport',
  'Extension Application Form',
  'Passport-sized Photographs',
  'Proof of Continued Purpose',
  'Financial Documentation',
  'Supporting Documents (specific to visa type)',
  'Medical Insurance (if required)',
  'Application Fee Payment',
  'Previous Immigration History',
  'Sponsor/Employer Letter (if applicable)'
];

export default function VisaExtensionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="text-6xl mb-8">🔄</div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Visa Extension & Renewal
              <span className="block text-gradient">Extend Your Stay</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              Extend your stay without stress with our comprehensive visa renewal and extension services. 
              Expert guidance for all visa types with legal compliance assurance.
            </p>
            <div className="mt-10">
              <Link href="#application-form">
                <Button size="lg">
                  Request Extension/Renewal
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Extension Types */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Extension & Renewal Options
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Student, Work, Tourist - we handle all types of visa extensions.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {extensionTypes.map((type, index) => (
              <Card key={index} className="text-center group h-full">
                <div className="text-6xl mb-6">{type.icon}</div>
                <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 mb-4">
                  {type.title}
                </h3>
                <p className="text-secondary-600 mb-6">
                  {type.description}
                </p>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Processing: {type.processing}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-900 mb-3">Services Include:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
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

      {/* Important Notice */}
      <section className="py-16 bg-yellow-50 border-y border-yellow-200">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-8 w-8 text-yellow-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                Important: Apply Before Expiry
              </h3>
              <p className="text-yellow-800">
                It's crucial to apply for visa extensions before your current visa expires. Late applications 
                may result in overstay penalties, deportation, or future visa restrictions. We recommend 
                starting the process at least 30-45 days before your visa expiry date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Extension Process
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Current visa check → Renewal application → Approval
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

      {/* Required Documents */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Required Documents Checklist
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Essential documents for visa extension and renewal applications.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                General Requirements
              </h3>
              <div className="space-y-4">
                {documents.map((document, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-secondary-900">{document}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Card className="bg-blue-50 border-blue-200 h-fit">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  📋 Additional Requirements
                </h3>
                <div className="space-y-4 text-secondary-700 text-sm">
                  <div>
                    <strong>Student Extensions:</strong>
                    <p>Letter from institution, transcript, enrollment verification</p>
                  </div>
                  <div>
                    <strong>Work Extensions:</strong>
                    <p>Employment letter, labor certification, salary proof</p>
                  </div>
                  <div>
                    <strong>Tourist Extensions:</strong>
                    <p>Return ticket, hotel bookings, financial proof</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Request Extension/Renewal
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Get expert assistance for your visa extension needs.
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
                <Input
                  label="Current Visa Expiry Date"
                  type="date"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Current Visa Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select current visa type</option>
                    <option>Student Visa</option>
                    <option>Work Visa</option>
                    <option>Tourist Visa</option>
                    <option>Business Visa</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Extension Reason
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select reason</option>
                    <option>Continue Studies</option>
                    <option>Continue Employment</option>
                    <option>Extend Tourism</option>
                    <option>Medical Treatment</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <Input
                label="Desired Extension Duration"
                type="text"
                placeholder="e.g., 6 months, 1 year"
                required
              />
              <Textarea
                label="Additional Details"
                placeholder="Provide details about your extension request, current status, and any special circumstances..."
                rows={4}
              />
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Submit Extension Request
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