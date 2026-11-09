import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
import { teamMembers } from '@/data';
import { 
  CheckCircleIcon, 
  HeartIcon, 
  LightBulbIcon, 
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Guidesoft\'s mission, values, and the expert team driving digital transformation and visa services worldwide.',
};

const values = [
  {
    name: 'Innovation',
    description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions.',
    icon: LightBulbIcon,
  },
  {
    name: 'Excellence',
    description: 'We are committed to delivering the highest quality in everything we do.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Integrity',
    description: 'We build trust through transparency, honesty, and ethical business practices.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Collaboration',
    description: 'We believe in the power of teamwork and partnership to achieve extraordinary results.',
    icon: UserGroupIcon,
  },
  {
    name: 'Global Impact',
    description: 'We strive to make a positive difference in businesses and communities worldwide.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Customer Success',
    description: 'Your success is our success. We are dedicated to helping you achieve your goals.',
    icon: HeartIcon,
  },
];

const milestones = [
  {
    year: '2008',
    title: 'Company Founded',
    description: 'Started as a small technology consulting firm with a vision to transform businesses through innovation.',
  },
  {
    year: '2012',
    title: 'International Expansion',
    description: 'Expanded our services globally and established partnerships with leading technology providers.',
  },
  {
    year: '2016',
    title: 'Visa Services Launch',
    description: 'Added comprehensive visa and immigration services to support global business mobility.',
  },
  {
    year: '2020',
    title: 'Digital Transformation Leader',
    description: 'Became a recognized leader in digital transformation and cloud solutions.',
  },
  {
    year: '2024',
    title: 'AI & Innovation Hub',
    description: 'Established our AI research division and launched generative AI solutions for enterprises.',
  },
];

const stats = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Successful Projects', value: '500+' },
  { label: 'Happy Clients', value: '200+' },
  { label: 'Countries Served', value: '25+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Technologies Mastered', value: '100+' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Transforming Businesses Through
              <span className="block text-gradient">Innovation & Excellence</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              For over 15 years, Guidesoft has been at the forefront of digital transformation, 
              helping businesses navigate the complex world of technology while providing seamless 
              global mobility solutions through our comprehensive visa services.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              These numbers represent the trust our clients place in us and the impact we've made together.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600">{stat.value}</div>
                <div className="mt-2 text-sm text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">Our Story</h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Founded in 2008 with a simple yet powerful vision: to help businesses thrive in an increasingly 
              digital world. What started as a small technology consulting firm has evolved into a comprehensive 
              solution provider, combining cutting-edge technology services with expert global mobility support.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Our Mission</h3>
              <p className="text-secondary-600 mb-6">
                To empower businesses worldwide through innovative technology solutions and seamless global mobility services, 
                enabling them to achieve their full potential in an interconnected world.
              </p>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">Our Vision</h3>
              <p className="text-secondary-600">
                To be the global leader in digital transformation and visa services, recognized for our innovation, 
                excellence, and unwavering commitment to client success.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">What Sets Us Apart</h3>
              <ul className="space-y-3 text-secondary-600">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Deep technical expertise across emerging technologies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Comprehensive visa and immigration services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>End-to-end solutions from strategy to implementation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Global reach with local expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <span>Proven track record of successful transformations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Key milestones that have shaped our growth and success
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold text-secondary-900 mr-4">
                        {milestone.title}
                      </h3>
                      <span className="text-sm text-primary-600 font-medium">
                        {milestone.year}
                      </span>
                    </div>
                    <p className="mt-2 text-secondary-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <Card key={value.name} hover className="text-center group">
                <div className="mx-auto h-12 w-12 text-primary-600 group-hover:text-primary-700 transition-colors duration-200">
                  <value.icon className="h-12 w-12" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                  {value.name}
                </h3>
                <p className="mt-4 text-secondary-600">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Meet Our Leadership Team
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Experienced leaders driving innovation and excellence in everything we do.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.id} hover className="text-center group">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-primary flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mt-1">
                  {member.position}
                </p>
                <p className="mt-4 text-sm text-secondary-600">
                  {member.bio}
                </p>
                {(member.linkedin || member.twitter) && (
                  <div className="mt-6 flex justify-center space-x-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-400 hover:text-primary-600 transition-colors duration-200"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {member.twitter && (
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-400 hover:text-primary-600 transition-colors duration-200"
                      >
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Ready to Start Your Journey?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary-600">
            Let's discuss how our expertise and values can help transform your business and achieve your global ambitions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact">
              <Button size="lg">
                Get in Touch
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}