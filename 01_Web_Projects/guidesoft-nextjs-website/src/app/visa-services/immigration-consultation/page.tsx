import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, Input, Textarea } from '@/components/ui';
import { ArrowRightIcon, CheckCircleIcon, HomeIcon, UserGroupIcon, GlobeAltIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Immigration Consultation',
  description: 'Expert guidance for permanent residency, citizenship, and complex immigration matters. Professional immigration consultation for your global mobility needs.',
};

const immigrationServices = [
  {
    title: 'Permanent Residency Applications',
    description: 'Comprehensive support for PR applications worldwide.',
    icon: HomeIcon,
    countries: ['Canada', 'Australia', 'USA', 'New Zealand'],
    features: ['Express Entry', 'Provincial Programs', 'EB-5 Investor', 'Skilled Migration']
  },
  {
    title: 'Citizenship Guidance',
    description: 'Navigate the path to citizenship with expert advice.',
    icon: GlobeAltIcon,
    countries: ['Multiple Countries'],
    features: ['Naturalization Process', 'Citizenship Tests', 'Document Preparation', 'Interview Support']
  },
  {
    title: 'Family Sponsorship',
    description: 'Reunite with family through sponsorship programs.',
    icon: UserGroupIcon,
    countries: ['Canada', 'Australia', 'USA', 'UK'],
    features: ['Spouse Sponsorship', 'Parent Sponsorship', 'Child Sponsorship', 'Family Reunification']
  }
];

const consultationProcess = [
  {
    step: '01',
    title: 'Assessment',
    description: 'Comprehensive evaluation of your immigration profile and goals.',
    icon: ClipboardDocumentListIcon,
  },
  {
    step: '02',
    title: 'Strategy Development',
    description: 'Create a personalized immigration strategy and timeline.',
    icon: GlobeAltIcon,
  },
  {
    step: '03',
    title: 'Application Process',
    description: 'Guide you through applications with ongoing support.',
    icon: CheckCircleIcon,
  },
  {
    step: '04',
    title: 'Settlement Support',
    description: 'Assistance with settlement and integration services.',
    icon: HomeIcon,
  }
];

const successStories = [
  {
    name: 'The Johnson Family',
    program: 'Canada Express Entry',
    timeline: '8 months',
    story: 'Successfully obtained permanent residency through Express Entry. Comprehensive support made the complex process manageable.',
    destination: '🇨🇦 Canada'
  },
  {
    name: 'Maria Rodriguez',
    program: 'Australia Skilled Migration',
    timeline: '12 months',
    story: 'Achieved Australian PR through skilled migration. Expert guidance helped optimize my application and achieve quick approval.',
    destination: '🇦🇺 Australia'
  },
  {
    name: 'David Kim',
    program: 'US EB-5 Investor',
    timeline: '18 months',
    story: 'Invested in a successful EB-5 project and obtained US green card. Professional support throughout the investment process.',
    destination: '🇺🇸 United States'
  }
];

const immigrationCountries = [
  {
    country: 'Canada',
    flag: '🇨🇦',
    programs: ['Express Entry', 'Provincial Nominee Program', 'Quebec Immigration', 'Family Class'],
    points: 'Points-based system',
    timeline: '6-12 months'
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    programs: ['SkillSelect', 'State Nomination', 'Business Innovation', 'Family Stream'],
    points: 'Points-based system',
    timeline: '8-16 months'
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    programs: ['EB-1 Extraordinary', 'EB-2 Advanced Degree', 'EB-5 Investor', 'Family-based'],
    points: 'Preference categories',
    timeline: '12-36 months'
  },
  {
    country: 'New Zealand',
    flag: '🇳🇿',
    programs: ['Skilled Migrant', 'Investor Category', 'Work to Residence', 'Family Category'],
    points: 'Points-based system',
    timeline: '6-18 months'
  }
];

export default function ImmigrationConsultationPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="text-6xl mb-8">🏠</div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Immigration Consultation
              <span className="block text-gradient">Your Path to Citizenship</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              Expert guidance for permanent residency & immigration success. Professional consultation for 
              PR Applications, Green Card Support, Citizenship Guidance, and comprehensive settlement services.
            </p>
            <div className="mt-10">
              <Link href="#consultation-form">
                <Button size="lg">
                  Book a Free Consultation
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Immigration Services */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Immigration Services Offered
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Comprehensive immigration solutions for your permanent residency and citizenship goals.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {immigrationServices.map((service, index) => (
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
                  <h4 className="font-medium text-secondary-900 mb-3">Available Programs:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-secondary-600">
                        <CheckCircleIcon className="h-4 w-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-900 mb-3">Countries:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.countries.map((country, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-100 text-primary-700 text-xs rounded-full">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Immigration Destinations */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Popular Immigration Destinations
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Explore immigration opportunities in top destinations worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {immigrationCountries.map((country, index) => (
              <Card key={index} hover className="group">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{country.flag}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                      {country.country}
                    </h3>
                    <p className="text-sm text-secondary-600">{country.points} • {country.timeline}</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-900 mb-3">Immigration Programs:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {country.programs.map((program, idx) => (
                      <div key={idx} className="text-sm text-secondary-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                        {program}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Consultation Process
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Assessment → Strategy → Application → Settlement
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {consultationProcess.map((step, index) => (
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
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Immigration Success Stories
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Real success stories from families and individuals who achieved their immigration dreams.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-white">
                <div className="text-center mb-6">
                  <div className="text-2xl mb-2">{story.destination}</div>
                  <h3 className="text-lg font-semibold text-secondary-900">{story.name}</h3>
                  <p className="text-primary-600 font-medium">{story.program}</p>
                  <p className="text-sm text-secondary-600">Completed in {story.timeline}</p>
                </div>
                <blockquote className="text-secondary-600 italic">
                  "{story.story}"
                </blockquote>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Immigration Services */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Why Choose Our Immigration Consultation?
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">Our Expertise</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-900">Regulated Immigration Consultants (RCIC)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-900">15+ years of immigration experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-900">1000+ successful applications</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-900">Multiple country expertise</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">Our Service Guarantee</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-900">Personalized immigration strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-900">Complete application support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-900">Regular progress updates</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-secondary-900">Post-landing settlement support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Form */}
      <section id="consultation-form" className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Book a Free Consultation
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Get expert immigration advice tailored to your specific situation and goals.
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
                  label="Current Country"
                  type="text"
                  placeholder="Your current location"
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
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>United States</option>
                    <option>New Zealand</option>
                    <option>United Kingdom</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Immigration Goal
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select goal</option>
                    <option>Permanent Residency</option>
                    <option>Citizenship</option>
                    <option>Family Sponsorship</option>
                    <option>Investment Immigration</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <Textarea
                label="Tell us about your situation"
                placeholder="Describe your background, qualifications, family situation, and immigration goals..."
                rows={4}
              />
              <div className="text-center">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Book Free Consultation
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