import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card } from '@/components/ui';
import { services } from '@/data';
import { ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive technology and digital transformation services including IT consulting, software development, UI/UX design, data analytics, cybersecurity, and digital marketing.',
};

const serviceCategories = [
  {
    id: 'it-consulting',
    name: 'IT Consulting & Strategy',
    description: 'Strategic technology guidance to drive digital transformation and business growth.',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 'software-development',
    name: 'Software Development',
    description: 'Custom software solutions built with modern technologies and best practices.',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    description: 'User-centered design solutions that create exceptional digital experiences.',
    color: 'from-purple-500 to-purple-700',
  },
  {
    id: 'data-analytics',
    name: 'Data & Analytics',
    description: 'Transform raw data into actionable insights with AI/ML and analytics solutions.',
    color: 'from-orange-500 to-orange-700',
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Services',
    description: 'Comprehensive security solutions to protect your business from cyber threats.',
    color: 'from-red-500 to-red-700',
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    description: 'Data-driven marketing strategies to grow your online presence and drive results.',
    color: 'from-pink-500 to-pink-700',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description: 'We start by understanding your business goals, challenges, and current technology landscape.',
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    description: 'Our experts develop a comprehensive strategy tailored to your specific needs and objectives.',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'We execute the plan with precision, keeping you informed throughout the entire process.',
  },
  {
    step: '04',
    title: 'Testing & Optimization',
    description: 'Rigorous testing and optimization ensure the solution meets our high standards.',
  },
  {
    step: '05',
    title: 'Launch & Support',
    description: 'We ensure a smooth launch and provide ongoing support to maximize your success.',
  },
];

export default function ServicesPage() {
  const getServicesByCategory = (categoryId: string) => {
    return services.filter(service => service.category === categoryId);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-24 lg:px-8">
        <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl">
              Comprehensive Technology
              <span className="block text-gradient">Solutions & Services</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              From strategic IT consulting to cutting-edge software development, we provide end-to-end technology 
              solutions that drive business transformation and growth. Our expert team delivers innovation at every step.
            </p>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg">
                  Start Your Project
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-24 sm:py-32 bg-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Service Categories
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Explore our comprehensive range of technology services designed to accelerate your digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {serviceCategories.map((category) => (
              <Card key={category.id} hover className="group">
                <div className={`h-2 bg-gradient-to-r ${category.color} rounded-t-2xl -mt-6 -mx-6 mb-6`} />
                <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                  {category.name}
                </h3>
                <p className="mt-3 text-secondary-600">
                  {category.description}
                </p>
                <div className="mt-6">
                  <a
                    href={`#${category.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    View Services
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Our Proven Process
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              A systematic approach that ensures successful project delivery and exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                  {step.step}
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

      {/* Detailed Services by Category */}
      {serviceCategories.map((category) => {
        const categoryServices = getServicesByCategory(category.id);
        
        return (
          <section
            key={category.id}
            id={category.id}
            className="py-24 sm:py-32 bg-secondary-50"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                  {category.name}
                </h2>
                <p className="mt-4 text-lg text-secondary-600">
                  {category.description}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {categoryServices.map((service) => (
                  <Card key={service.id} hover className="group h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-sm font-medium text-primary-600 capitalize">
                        {service.category.replace('-', ' ')}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-secondary-600 mb-6">
                      {service.description}
                    </p>
                    <div>
                      <h4 className="font-medium text-secondary-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-secondary-600">
                            <CheckCircleIcon className="h-4 w-4 text-primary-600 mt-0.5 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6 pt-6 border-t border-secondary-200">
                      <Link href="/contact">
                        <Button variant="outline" className="w-full">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-secondary-600">
            Let's discuss your specific needs and create a customized solution that drives real results for your organization.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact">
              <Button size="lg">
                Start Your Project
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