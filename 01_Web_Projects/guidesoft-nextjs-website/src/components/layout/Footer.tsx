import Link from 'next/link';
import { Button } from '@/components/ui';

const navigation = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'IT Consulting', href: '/services#it-consulting' },
    { name: 'Software Development', href: '/services#software-development' },
    { name: 'UI/UX Design', href: '/services#ui-ux-design' },
    { name: 'Data & Analytics', href: '/services#data-analytics' },
    { name: 'Cybersecurity', href: '/services#cybersecurity' },
    { name: 'Digital Marketing', href: '/services#digital-marketing' },
  ],
  visaServices: [
    { name: 'Study Abroad Visas', href: '/visa-services/study-abroad' },
    { name: 'Work & Business Visas', href: '/visa-services/work-business' },
    { name: 'Travel & Tourism Visas', href: '/visa-services/travel-tourism' },
    { name: 'Visa Extension & Renewal', href: '/visa-services/visa-extension' },
    { name: 'Document Verification', href: '/visa-services/document-verification' },
    { name: 'Immigration Consultation', href: '/visa-services/immigration-consultation' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/guidesoft',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/guidesoft',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/guidesoft',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/guidesoft',
    icon: (props: any) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.017 0C8.396 0 7.989.013 7.041.072 2.265.272 0 2.69 0 7.041 0 7.989.013 8.396.072 12.017c.2 4.776 2.618 7.041 6.969 7.041.948.059 1.355.072 4.976.072 3.621 0 4.028-.013 4.976-.072 4.351-.2 6.777-2.537 6.969-7.041.059-.948.072-1.355.072-4.976 0-3.621-.013-4.028-.072-4.976C23.762 2.265 21.345 0 17.024 0c-.948-.059-1.355-.072-4.976-.072-.001 0-.001 0-.001 0H12.017zm-.764 1.969c.376-.004 1.156-.007 2.234-.007l.468.001c3.085 0 3.465.014 4.68.071 3.075.2 4.77 1.986 4.97 4.97.057 1.215.07 1.595.07 4.68 0 3.085-.013 3.465-.07 4.68-.198 2.996-1.913 4.77-4.97 4.97-1.215.057-1.595.07-4.68.07-3.085 0-3.465-.013-4.68-.07-3.084-.2-4.77-1.986-4.97-4.97-.057-1.215-.07-1.595-.07-4.68 0-3.085.013-3.465.07-4.68.198-2.996 1.913-4.77 4.97-4.97 1.217-.057 1.595-.07 4.68-.07h.001c.376-.004.764-.007 1.156-.007zm3.233 1.588a.72.72 0 1 0 1.44 0 .72.72 0 0 0-1.44 0zm-2.405 1.813c-3.347 0-6.06 2.713-6.06 6.06s2.713 6.06 6.06 6.06 6.06-2.713 6.06-6.06-2.713-6.06-6.06-6.06zm0 2.489a3.571 3.571 0 1 1 0 7.142 3.571 3.571 0 0 1 0-7.142z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-secondary-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-3xl font-heading font-bold text-white">
                Guide<span className="text-primary-400">soft</span>
              </span>
            </div>
            <p className="text-base leading-6 text-secondary-300 max-w-md">
              Transforming businesses through innovative technology solutions and comprehensive visa services. 
              Your trusted partner for digital transformation and global mobility.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-secondary-400 hover:text-primary-400 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Visa Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.visaServices.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-secondary-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="mt-16 border-t border-secondary-700/40 pt-8 sm:mt-20 lg:mt-24">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="xl:col-span-2">
              <h3 className="text-sm font-semibold leading-6 text-white">Subscribe to our newsletter</h3>
              <p className="mt-2 text-sm leading-6 text-secondary-300">
                Get the latest news, updates, and industry insights delivered to your inbox.
              </p>
            </div>
            <form className="mt-6 xl:mt-0">
              <div className="flex gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="min-w-0 flex-auto rounded-xl border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                  placeholder="Enter your email"
                />
                <Button type="submit" variant="primary">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-secondary-700/40 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <p className="text-xs leading-5 text-secondary-400">
              <Link
                href="/contact"
                className="hover:text-primary-400 transition-colors duration-200"
              >
                info@guidesoft.com
              </Link>
              {' • '}
              <Link
                href="tel:+1234567890"
                className="hover:text-primary-400 transition-colors duration-200"
              >
                +1 (234) 567-8900
              </Link>
            </p>
          </div>
          <p className="mt-8 text-xs leading-5 text-secondary-400 md:order-1 md:mt-0">
            &copy; {new Date().getFullYear()} Guidesoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}