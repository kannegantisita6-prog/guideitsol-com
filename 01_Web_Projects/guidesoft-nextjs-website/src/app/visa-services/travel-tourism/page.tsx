import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, Input, Textarea } from '@/components/ui';
import { ArrowRightIcon, CheckCircleIcon, MapPinIcon, CameraIcon, HeartIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Travel & Tourism Visas',
  description: 'Explore the world with hassle-free tourist visa processing and travel documentation support. Quick approval for multiple destinations.',
};

const popularDestinations = [
  { name: 'Europe (Schengen)', flag: '🇪🇺', duration: '90 days', highlights: ['26 Countries', 'Multiple Entry', 'Cultural Heritage'] },
  { name: 'United States', flag: '🇺🇸', duration: '90 days', highlights: ['ESTA/Tourist Visa', 'Business Tourism', 'National Parks'] },
  { name: 'United Kingdom', flag: '🇬🇧', duration: '6 months', highlights: ['Standard Visitor', 'Historical Sites', 'Cultural Experience'] },
  { name: 'Japan', flag: '🇯🇵', duration: '90 days', highlights: ['Tourist Visa', 'Cultural Immersion', 'Modern & Traditional'] },
  { name: 'South Korea', flag: '🇰🇷', duration: '90 days', highlights: ['K-ETA/Tourist Visa', 'Technology Hub', 'Rich Culture'] },
  { name: 'Thailand', flag: '🇹🇭', duration: '60 days', highlights: ['Tourist Visa', 'Tropical Paradise', 'Amazing Cuisine'] },
];

const visaTypes = [
  {
    title: 'Short-term Tourist Visas',
    description: 'For leisure travel, sightseeing, and family visits.',
    icon: CameraIcon,
    duration: '15-90 days',
    features: ['Single/Multiple Entry', 'Tourism Activities', 'Family Visits', 'Cultural Tours']
  },
  {
    title: 'Family Visit Visas',
    description: 'Visit family members and relatives abroad.',
    icon: HeartIcon,
    duration: '30-180 days',
    features: ['Family Reunions', 'Extended Stays', 'Social Visits', 'Special Occasions']
  },
  {
    title: 'Transit Visas',
    description: 'For travelers transiting through countries.',
    icon: ClockIcon,
    duration: '24-72 hours',
    features: ['Airport Transit', 'Quick Processing', 'Connection Flights', 'Short Layovers']
  }
];

const benefits = [
  'Quick approval process',
  'Multiple destinations available',
  'Family-friendly support',
  'Expert documentation assistance',
  'Travel insurance guidance',
  'Emergency support services'
];

const process = [
  {
    step: '01',
    title: 'Destination Selection',
    description: 'Choose your travel destination and visa requirements.',
    icon: MapPinIcon,
  },
  {
    step: '02',
    title: 'Document Preparation',
    description: 'Gather required documents and travel itinerary.',
    icon: CheckCircleIcon,
  },
  {
    step: '03',
    title: 'Application Submission',
    description: 'Submit visa application with complete documentation.',
    icon: ArrowRightIcon,
  },
  {
    step: '04',
    title: 'Travel Authorization',
    description: 'Receive visa approval and travel documents.',
    icon: CameraIcon,
  }
];

const documents = [
  'Valid Passport (6+ months validity)',
  'Completed Visa Application Form',
  'Passport-sized Photographs',
  'Flight Itinerary/Booking',
  'Hotel Reservations',
  'Bank Statements (3-6 months)',
  'Travel Insurance',
  'Employment Letter/Leave Approval',
  'Invitation Letter (if applicable)',
  'Travel History/Previous Visas'
];

export default function TravelTourismPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <div className="text-6xl mb-8">✈️</div>
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Travel & Tourism Visas
              <span className="block text-gradient">Explore the World</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              Explore the world with hassle-free tourist visa processing and travel documentation support. 
              Quick approval, multiple destinations, and family-friendly support for your dream vacation.
            </p>
            <div className="mt-10">
              <Link href="#application-form">
                <Button size="lg">
                  Apply for Tourist Visa
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Why Choose Our Travel Visa Services?
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Quick approval, multiple destinations, family-friendly support.
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

      {/* Popular Destinations */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Popular Travel Destinations
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Gallery/slider with popular destinations we help you visit.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {popularDestinations.map((destination, index) => (
              <Card key={index} hover className="group text-center">
                <div className="text-6xl mb-4">{destination.flag}</div>
                <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 mb-2">
                  {destination.name}
                </h3>
                <p className="text-primary-600 font-medium mb-4">
                  Valid for {destination.duration}
                </p>
                <div className="space-y-2">
                  {destination.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-secondary-600">
                      <CheckCircleIcon className="h-4 w-4 text-primary-600 mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Types of Tourist Visas
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Different visa options for various travel purposes and durations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {visaTypes.map((type, index) => (
              <Card key={index} className="text-center group h-full">
                <div className="mx-auto h-16 w-16 text-primary-600 mb-6 group-hover:text-primary-700 transition-colors duration-200">
                  <type.icon className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 mb-4">
                  {type.title}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {type.description}
                </p>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    Duration: {type.duration}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-secondary-900 mb-3">Features:</h4>
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

      {/* Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Step-by-Step Guide
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Application → Documents → Travel
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
              Required Documents
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Essential documents needed for tourist visa applications.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-6">
                Document Checklist
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
              <Card className="bg-primary-50 border-primary-200 h-fit">
                <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                  💡 Travel Tips
                </h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start">
                    <span className="mr-2">✈️</span>
                    <span>Book refundable tickets initially for visa applications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">📅</span>
                    <span>Apply 2-4 weeks before travel for best results</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">💰</span>
                    <span>Ensure sufficient funds for entire trip duration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🛡️</span>
                    <span>Get comprehensive travel insurance coverage</span>
                  </li>
                </ul>
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
              Apply for Tourist Visa
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Start your travel adventure with our expert visa assistance.
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
                    Destination Country
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select destination</option>
                    <option>Schengen Europe</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Japan</option>
                    <option>South Korea</option>
                    <option>Thailand</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Travel Purpose
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-secondary-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    <option>Select purpose</option>
                    <option>Tourism/Sightseeing</option>
                    <option>Family Visit</option>
                    <option>Business Tourism</option>
                    <option>Transit</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Input
                  label="Travel Date"
                  type="date"
                  required
                />
                <Input
                  label="Duration (Days)"
                  type="number"
                  placeholder="Number of days"
                  required
                />
              </div>
              <Textarea
                label="Additional Information"
                placeholder="Tell us about your travel plans, special requirements, or any questions..."
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