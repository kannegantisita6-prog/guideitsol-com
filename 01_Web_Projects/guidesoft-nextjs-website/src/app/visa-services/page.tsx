import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
import { ArrowRightIcon, CheckCircleIcon, GlobeAltIcon, DocumentTextIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Visa Services',
  description: 'Comprehensive visa and immigration services including study abroad visas, work permits, business visas, tourist visas, visa extensions, and immigration consultation.',
};

const visaServices = [
  {
    id: 'study-abroad',
    title: 'Study Abroad Visas',
    description: 'Achieve your academic dreams with expert guidance for student visa applications to top universities worldwide.',
    icon: '🎓',
    features: ['University Applications', 'Visa Documentation', 'Interview Preparation', 'Post-Arrival Support'],
    countries: ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France'],
    href: '/visa-services/study-abroad'
  },
  {
    id: 'work-business',
    title: 'Work & Business Visas',
    description: 'Secure your professional future with work permits and business visas for global opportunities.',
    icon: '💼',
    features: ['Work Permit Applications', 'Business Visa Processing', 'Employer Liaison', 'Fast-Track Services'],
    countries: ['USA', 'Canada', 'UK', 'UAE', 'Singapore', 'Australia'],
    href: '/visa-services/work-business'
  },
  {
    id: 'travel-tourism',
    title: 'Travel & Tourism Visas',
    description: 'Explore the world with hassle-free tourist visa processing and travel documentation support.',
    icon: '✈️',
    features: ['Tourist Visa Applications', 'Multiple Entry Visas', 'Travel Insurance', 'Itinerary Planning'],
    countries: ['Schengen', 'USA', 'UK', 'Japan', 'South Korea', 'Thailand'],
    href: '/visa-services/travel-tourism'
  },
  {
    id: 'visa-extension',
    title: 'Visa Extension & Renewal',
    description: 'Extend your stay without stress with our comprehensive visa renewal and extension services.',
    icon: '🔄',
    features: ['Extension Applications', 'Status Changes', 'Documentation Review', 'Legal Compliance'],
    countries: ['All Major Destinations'],
    href: '/visa-services/visa-extension'
  },
  {
    id: 'document-verification',
    title: 'Document Verification & Attestation',
    description: 'Get your documents officially verified and attested for international use with our trusted services.',
    icon: '📋',
    features: ['Document Authentication', 'Embassy Attestation', 'Apostille Services', 'Translation Support'],
    countries: ['Global Services'],
    href: '/visa-services/document-verification'
  },
  {
    id: 'immigration-consultation',
    title: 'Immigration Consultation',
    description: 'Expert guidance for permanent residency, citizenship, and complex immigration matters.',
    icon: '🏠',
    features: ['PR Applications', 'Citizenship Guidance', 'Family Sponsorship', 'Immigration Strategy'],
    countries: ['Canada', 'Australia', 'USA', 'New Zealand', 'UK'],
    href: '/visa-services/immigration-consultation'
  }
];

const stats = [
  { label: 'Successful Visa Applications', value: '5,000+' },
  { label: 'Countries Served', value: '50+' },
  { label: 'Client Satisfaction Rate', value: '98%' },
  { label: 'Years of Experience', value: '15+' },
];

const whyChooseUs = [
  {
    title: 'Expert Knowledge',
    description: 'Our team of immigration experts stays updated with the latest visa regulations and requirements.',
    icon: UserGroupIcon,
  },
  {
    title: 'Global Reach',
    description: 'We provide visa services for destinations worldwide with local expertise and global standards.',
    icon: GlobeAltIcon,
  },
  {
    title: 'Document Excellence',
    description: 'Meticulous attention to detail ensures your applications are complete and error-free.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Success Guarantee',
    description: 'Our proven track record and personalized approach maximize your chances of visa approval.',
    icon: CheckCircleIcon,
  },
];

export default function VisaServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Your Gateway to
              <span className="block text-gradient">Global Mobility</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              Navigate the complex world of visas and immigration with confidence. Our expert team provides 
              comprehensive visa services for study, work, business, travel, and permanent residency across 50+ countries.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg">
                  Start Your Visa Journey
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Trusted by Thousands Worldwide
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Our success is measured by the dreams we help achieve and the journeys we make possible.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                <div className="mt-2 text-sm text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Comprehensive Visa Services
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              From student visas to permanent residency, we cover all your immigration needs with expert guidance.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {visaServices.map((service) => (
              <Card key={service.id} hover className="group h-full">
                <div className="text-center">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-secondary-900 mb-3">Key Services:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm text-secondary-600">
                        <CheckCircleIcon className="h-4 w-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-secondary-900 mb-3">Popular Destinations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.countries.map((country, index) => (
                      <span key={index} className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full">
                        {country}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-secondary-200">
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full group-hover:bg-primary-600 group-hover:text-white transition-colors duration-200">
                      Learn More
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Why Choose Our Visa Services?
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              We combine expertise, technology, and personalized service to make your visa journey smooth and successful.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto h-12 w-12 text-primary-600 mb-4">
                  <item.icon className="h-12 w-12" />
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-secondary-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary-600">
            Take the first step towards your global dreams. Our expert team is ready to guide you through 
            every step of the visa application process.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact">
              <Button size="lg">
                Get Free Consultation
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}