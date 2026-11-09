import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, Input, Textarea } from '@/components/ui';
import { ArrowRightIcon, CheckCircleIcon, AcademicCapIcon, DocumentTextIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Study Abroad Visas',
  description: 'Expert guidance for student visa applications to top universities worldwide. Achieve your academic dreams with our comprehensive study abroad visa services.',
};

const universities = [
  { name: 'Harvard University', country: 'USA', logo: '🏛️' },
  { name: 'University of Cambridge', country: 'UK', logo: '🎓' },
  { name: 'University of Toronto', country: 'Canada', logo: '🍁' },
  { name: 'University of Melbourne', country: 'Australia', logo: '🦘' },
  { name: 'ETH Zurich', country: 'Switzerland', logo: '🏔️' },
  { name: 'Sorbonne University', country: 'France', logo: '🗼' },
];

const process = [
  {
    step: '01',
    title: 'Initial Consultation',
    description: 'Discuss your academic goals, preferred destinations, and course options.',
    icon: UserGroupIcon,
  },
  {
    step: '02',
    title: 'University Application',
    description: 'Assistance with university applications and admission requirements.',
    icon: AcademicCapIcon,
  },
  {
    step: '03',
    title: 'Document Preparation',
    description: 'Comprehensive documentation support for visa applications.',
    icon: DocumentTextIcon,
  },
  {
    step: '04',
    title: 'Visa Application',
    description: 'Complete visa application processing and submission.',
    icon: CheckCircleIcon,
  },
  {
    step: '05',
    title: 'Interview Preparation',
    description: 'Mock interviews and preparation for visa interview success.',
    icon: ClockIcon,
  },
];

const documents = [
  'Valid Passport',
  'University Acceptance Letter',
  'Financial Proof/Bank Statements',
  'Academic Transcripts',
  'English Language Test Results (IELTS/TOEFL)',
  'Statement of Purpose',
  'Letters of Recommendation',
  'Medical Examination Certificate',
  'Passport-sized Photographs',
  'Visa Application Form'
];

const benefits = [
  'Access to world-class education',
  'International exposure and networking',
  'Career advancement opportunities',
  'Cultural immersion experience',
  'Research and innovation opportunities',
  'Pathway to permanent residency'
];

const faqs = [
  {
    question: 'How long does the student visa process take?',
    answer: 'The processing time varies by country but typically ranges from 2-8 weeks. We recommend starting the process 3-4 months before your intended travel date.'
  },
  {
    question: 'Can I work while studying on a student visa?',
    answer: 'Most countries allow part-time work (usually 20 hours per week) for international students. Specific regulations vary by destination country.'
  },
  {
    question: 'What if my visa application is rejected?',
    answer: 'We provide comprehensive support including appeals process guidance and reapplication assistance. Our high success rate minimizes this risk.'
  },
  {
    question: 'Do you help with university applications?',
    answer: 'Yes, we provide end-to-end support including university selection, application assistance, and admission guidance.'
  }
];

export default function StudyAbroadPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div 
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 197, 253, 0.1) 100%)',
          }}
        />
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="text-6xl mb-8">🎓</div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Study Abroad Visas
              <span className="block text-gradient">Achieve Your Dreams</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              Achieve your dreams with the right study visa guidance. Get expert assistance for university applications, 
              visa processing, and complete support for your international education journey.
            </p>
            <div className="mt-10">
              <Link href="#application-form">
                <Button size="lg">
                  Apply for Study Visa
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Why Study Abroad?
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Top universities, smooth process, and visa approval support for your international education.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-white rounded-xl shadow-soft">
                <CheckCircleIcon className="h-6 w-6 text-primary-600 mr-4 flex-shrink-0" />
                <span className="text-secondary-900 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Top University Partners
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              We have partnerships with leading universities worldwide to facilitate your admission process.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
            {universities.map((university, index) => (
              <Card key={index} hover className="text-center group">
                <div className="text-4xl mb-4">{university.logo}</div>
                <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                  {university.name}
                </h3>
                <p className="text-primary-600 font-medium mt-2">{university.country}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Step-by-Step Process
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Application → Admission → Visa → Travel
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
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
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl mb-8">
                Required Documents Checklist
              </h2>
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
              <Card className="bg-primary-50 border-primary-200">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  💡 Pro Tip
                </h3>
                <p className="text-secondary-700 mb-4">
                  Start gathering your documents early! Some documents like transcripts and language test scores 
                  can take time to obtain. We provide a detailed checklist customized for your destination country.
                </p>
                <Link href="/contact">
                  <Button variant="outline">
                    Get Personalized Checklist
                  </Button>
                </Link>
              </Card>
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
              Get answers to common questions about study abroad visas.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white">
                <h3 className="text-lg font-semibold text-secondary-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-secondary-600">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Apply for Study Visa
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Take the first step towards your international education journey.
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
                  label="Nationality"
                  type="text"
                  placeholder="Your nationality"
                  required
                />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Preferred Destination
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select destination</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>Australia</option>
                    <option>Germany</option>
                    <option>France</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Study Level
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select level</option>
                    <option>Bachelor's Degree</option>
                    <option>Master's Degree</option>
                    <option>PhD</option>
                    <option>Diploma/Certificate</option>
                    <option>Language Course</option>
                  </select>
                </div>
              </div>
              <Textarea
                label="Message"
                placeholder="Tell us about your study plans, preferred courses, or any specific requirements..."
                rows={4}
              />
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Submit Application
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