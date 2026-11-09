import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, Input, Textarea } from '@/components/ui';
import { ArrowRightIcon, CheckCircleIcon, BriefcaseIcon, BuildingOfficeIcon, CurrencyDollarIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Work & Business Visas',
  description: 'Secure your professional future with work permits and business visas for global opportunities. Expert guidance for skilled worker and investor visas.',
};

const visaTypes = [
  {
    title: 'Skilled Worker Visas',
    description: 'For professionals with job offers from international employers.',
    icon: BriefcaseIcon,
    features: ['H-1B Visa (USA)', 'Skilled Worker Visa (UK)', 'Express Entry (Canada)', 'Temporary Skill Shortage (Australia)'],
    requirements: ['Job Offer', 'Skills Assessment', 'English Proficiency', 'Health & Character Checks']
  },
  {
    title: 'Business/Investor Visas',
    description: 'For entrepreneurs and investors looking to establish or invest in businesses.',
    icon: BuildingOfficeIcon,
    features: ['EB-5 Investor Visa (USA)', 'Investor Visa (UK)', 'Start-up Visa (Canada)', 'Business Innovation Visa (Australia)'],
    requirements: ['Business Plan', 'Investment Capital', 'Business Experience', 'Financial Proof']
  }
];

const successStories = [
  {
    name: 'John Smith',
    position: 'Software Engineer',
    country: 'USA',
    story: 'Successfully obtained H-1B visa and relocated to Silicon Valley. The process was smooth and professional.',
    company: 'Tech Giant Inc.'
  },
  {
    name: 'Sarah Johnson',
    position: 'Business Owner',
    country: 'Canada',
    story: 'Established my consulting business in Toronto through the Start-up Visa Program. Excellent guidance throughout.',
    company: 'Johnson Consulting'
  },
  {
    name: 'Michael Chen',
    position: 'Investment Manager',
    country: 'UK',
    story: 'Investor visa application was handled expertly. Now managing investments in London financial district.',
    company: 'Chen Capital'
  }
];

const process = [
  {
    step: '01',
    title: 'Job Offer/Business Plan',
    description: 'Secure employment offer or develop comprehensive business plan.',
    icon: DocumentTextIcon,
  },
  {
    step: '02',
    title: 'Documentation',
    description: 'Gather required documents including contracts and financial proof.',
    icon: CurrencyDollarIcon,
  },
  {
    step: '03',
    title: 'Application Processing',
    description: 'Submit visa application with complete documentation package.',
    icon: CheckCircleIcon,
  },
  {
    step: '04',
    title: 'Visa Approval',
    description: 'Receive visa approval and prepare for relocation.',
    icon: BriefcaseIcon,
  }
];

const documents = {
  work: [
    'Valid Passport',
    'Job Offer Letter',
    'Labor Market Test (if required)',
    'Educational Certificates',
    'Work Experience Letters',
    'English Language Test Results',
    'Medical Examination',
    'Police Clearance Certificate',
    'Passport-sized Photographs',
    'Financial Proof'
  ],
  business: [
    'Valid Passport',
    'Business Plan',
    'Investment Proof',
    'Financial Statements',
    'Business Registration Documents',
    'Bank Statements',
    'Source of Funds Documentation',
    'Market Research Reports',
    'Letters of Support',
    'Insurance Documentation'
  ]
};

const faqs = [
  {
    question: 'What is the minimum investment required for business visas?',
    answer: 'Investment requirements vary by country. For example, the US EB-5 requires $800,000-$1,050,000, while the UK Investor Visa requires £2 million. We can provide specific requirements based on your target destination.'
  },
  {
    question: 'How long does the work visa process take?',
    answer: 'Processing times vary by visa type and country. Skilled worker visas typically take 2-6 months, while business visas can take 6-18 months depending on complexity.'
  },
  {
    question: 'Can my family accompany me on a work or business visa?',
    answer: 'Most work and business visas allow you to bring your spouse and dependent children. Specific rules vary by country and visa type.'
  },
  {
    question: 'Do I need a job offer before applying for a work visa?',
    answer: 'For most skilled worker visas, yes. However, some countries have points-based systems that allow applications without a job offer. We can advise on the best route for your situation.'
  }
];

export default function WorkBusinessPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="text-6xl mb-8">💼</div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Work & Business Visas
              <span className="block text-gradient">Advance Your Career</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              Secure your professional future with work permits and business visas for global opportunities. 
              Expert guidance for skilled workers, entrepreneurs, and investors seeking international success.
            </p>
            <div className="mt-10">
              <Link href="#application-form">
                <Button size="lg">
                  Start Your Work Visa Application
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Visa Categories We Handle
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Specialized services for both skilled workers and business investors.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {visaTypes.map((type, index) => (
              <Card key={index} className="h-full">
                <div className="text-center mb-6">
                  <div className="mx-auto h-16 w-16 text-primary-600 mb-4">
                    <type.icon className="h-16 w-16" />
                  </div>
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                    {type.title}
                  </h3>
                  <p className="text-secondary-600">
                    {type.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-secondary-900 mb-3">Popular Visa Types:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-secondary-600">
                        <CheckCircleIcon className="h-4 w-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-secondary-900 mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {type.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-sm text-secondary-600">
                        <CheckCircleIcon className="h-4 w-4 text-accent-600 mt-0.5 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
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
              Our Process
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Job offer / Business plan → Documentation → Visa Approval
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

      {/* Success Stories */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Success Stories from Professionals
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Real stories from professionals who achieved their career goals with our help.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-white">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900">{story.name}</h3>
                  <p className="text-primary-600 font-medium">{story.position}</p>
                  <p className="text-sm text-secondary-600">{story.company} • {story.country}</p>
                </div>
                <blockquote className="text-secondary-600 italic">
                  "{story.story}"
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Required Documents
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Comprehensive documentation requirements for work and business visas.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
                Work Visa Documents
              </h3>
              <div className="space-y-4">
                {documents.work.map((document, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-secondary-900">{document}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
                Business Visa Documents
              </h3>
              <div className="space-y-4">
                {documents.business.map((document, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-secondary-900">{document}</span>
                  </div>
                ))}
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
              Get answers to common questions about work and business visas.
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
              Start Your Work Visa Application
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Take the first step towards your professional future abroad.
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
                    Visa Type
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select visa type</option>
                    <option>Skilled Worker Visa</option>
                    <option>Business/Investor Visa</option>
                    <option>Intra-company Transfer</option>
                    <option>Other</option>
                  </select>
                </div>
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
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <Textarea
                label="Message"
                placeholder="Tell us about your professional background, job offer details, or business plans..."
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