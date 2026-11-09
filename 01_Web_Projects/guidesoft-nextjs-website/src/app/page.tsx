import { Metadata } from 'next';
import Link from 'next/link';
import { Button, Card, AnimatedSection } from '@/components/ui';
import { StructuredData } from '@/components/seo';
import { services } from '@/data';
import { generateMetadata as generateSEOMetadata, generateBreadcrumbSchema } from '@/lib/seo';
import { ArrowRightIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Digital Transformation & Visa Services - Transform Your Business',
  description: 'Transform your business with cutting-edge technology solutions and comprehensive visa services. Expert IT consulting, software development, and immigration guidance worldwide.',
  keywords: ['digital transformation', 'software development', 'visa services', 'IT consulting', 'web development', 'immigration', 'technology solutions', 'business transformation'],
  url: 'https://guidesoft.com',
  type: 'website',
});

const stats = [
  { id: 1, name: 'Successful Projects', value: '500+' },
  { id: 2, name: 'Happy Clients', value: '200+' },
  { id: 3, name: 'Years of Experience', value: '15+' },
  { id: 4, name: 'Countries Served', value: '25+' },
];

const testimonials = [
  {
    id: 1,
    content: "Guidesoft transformed our entire digital infrastructure. Their expertise in cloud migration and DevOps helped us reduce costs by 40% while improving performance.",
    author: "Sarah Johnson",
    role: "CTO, TechCorp",
    rating: 5,
  },
  {
    id: 2,
    content: "The visa consultation service was exceptional. They guided us through the entire process and helped our team get work visas without any complications.",
    author: "Michael Chen",
    role: "HR Director, GlobalTech",
    rating: 5,
  },
  {
    id: 3,
    content: "Outstanding UI/UX design work! Our user engagement increased by 60% after the redesign. The team really understood our vision and delivered beyond expectations.",
    author: "Emily Davis",
    role: "Product Manager, StartupXYZ",
    rating: 5,
  },
];

const features = [
  {
    name: 'Expert Team',
    description: 'Experienced professionals with deep industry knowledge and cutting-edge skills.',
  },
  {
    name: 'Proven Track Record',
    description: 'Successfully delivered 500+ projects across various industries and technologies.',
  },
  {
    name: 'End-to-End Solutions',
    description: 'Complete technology and visa services from consultation to implementation.',
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock support to ensure your business operations run smoothly.',
  },
  {
    name: 'Global Reach',
    description: 'Serving clients worldwide with local expertise and global best practices.',
  },
  {
    name: 'Innovation Focus',
    description: 'Leveraging latest technologies and methodologies to drive business success.',
  },
];

export default function HomePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://guidesoft.com' },
  ]);

  return (
    <div className="bg-white">
      <StructuredData data={breadcrumbSchema} />
      {/* Hero Section */}
      <section className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-600 to-accent-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-56">
          <AnimatedSection className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-secondary-900 sm:text-6xl lg:text-7xl">
              Transform Your Business with
              <span className="block text-gradient animate-pulse-glow">Digital Innovation</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-secondary-600 max-w-3xl mx-auto">
              Accelerate your digital transformation journey with our comprehensive technology solutions and expert visa services. 
              From cutting-edge software development to seamless global mobility.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact">
                <Button size="lg" variant="gradient" rounded="full" shadow="lg">
                  Get Started Today
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="glass" size="lg" rounded="full">
                  Explore Services
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-600 to-accent-600 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <AnimatedSection className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
                Trusted by businesses worldwide
              </h2>
              <p className="mt-4 text-lg leading-8 text-secondary-600">
                Our track record speaks for itself
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                  <AnimatedSection 
                    key={stat.id} 
                    delay={300 + (index * 100)}
                    className="flex flex-col bg-gradient-to-br from-primary-50 to-accent-50 p-8 hover:from-primary-100 hover:to-accent-100 transition-all duration-300"
                  >
                    <dt className="text-sm font-semibold leading-6 text-secondary-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-bold tracking-tight text-transparent bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text">{stat.value}</dd>
                  </AnimatedSection>
                ))}
              </dl>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Comprehensive Technology & Visa Solutions
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              From digital transformation to global mobility, we provide end-to-end solutions 
              that drive business success and enable international growth.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {services.slice(0, 6).map((service, index) => (
                <AnimatedSection 
                  key={service.id} 
                  delay={400 + (index * 100)}
                  animation="fadeInScale"
                >
                  <Card hover variant="glass" glow className="group h-full">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl mb-4 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>{service.icon}</div>
                      <div className="text-sm font-medium text-primary-600 capitalize px-3 py-1 bg-primary-100 rounded-full">
                        {service.category.replace('-', ' ')}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-secondary-600">
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={`/services#${service.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                      >
                        Learn more
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay={800} className="mt-16 text-center">
            <Link href="/services">
              <Button variant="gradient" size="lg" rounded="full">
                View All Services
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              Why Choose Guidesoft?
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-secondary-900">
                    <CheckCircleIcon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-secondary-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 sm:text-4xl">
              What Our Clients Say
            </h2>
            <p className="mt-6 text-lg leading-8 text-secondary-600">
              Don't just take our word for it – hear from the businesses we've helped transform.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={300}>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <AnimatedSection 
                  key={testimonial.id} 
                  delay={400 + (index * 150)}
                  animation="slideInLeft"
                >
                  <Card variant="glass" className="bg-white/90 backdrop-blur-xl h-full">
                    <div className="flex items-center gap-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-secondary-900">
                      <p>"{testimonial.content}"</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-400 to-accent-400 flex items-center justify-center text-white font-bold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-secondary-900">{testimonial.author}</div>
                        <div className="text-sm text-secondary-600">{testimonial.role}</div>
                      </div>
                    </figcaption>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="absolute inset-0 bg-black/20" />
        <AnimatedSection className="relative mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-shadow-lg">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
            Let's discuss how our technology solutions and visa services can help you achieve your goals. 
            Get started with a free consultation today.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact">
              <Button size="lg" variant="glass" rounded="full" className="text-white border-white/30 hover:bg-white/20">
                Start Your Project
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/visa-services">
              <Button variant="outline" size="lg" rounded="full" className="border-white text-white hover:bg-white hover:text-primary-600">
                Explore Visa Services
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
