'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { 
    name: 'About Us', 
    href: '/about'
  },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'IT Consulting & Strategy', href: '/services#it-consulting' },
      { name: 'Software Development', href: '/services#software-development' },
      { name: 'UI/UX Design', href: '/services#ui-ux-design' },
      { name: 'Data & Analytics', href: '/services#data-analytics' },
      { name: 'Cybersecurity Services', href: '/services#cybersecurity' },
      { name: 'Digital Marketing', href: '/services#digital-marketing' }
    ]
  },
  {
    name: 'Visa Services',
    href: '/visa-services',
    dropdown: [
      { name: 'Study Abroad Visas', href: '/visa-services/study-abroad' },
      { name: 'Work & Business Visas', href: '/visa-services/work-business' },
      { name: 'Travel & Tourism Visas', href: '/visa-services/travel-tourism' },
      { name: 'Visa Extension & Renewal', href: '/visa-services/visa-extension' },
      { name: 'Document Verification', href: '/visa-services/document-verification' },
      { name: 'Immigration Consultation', href: '/visa-services/immigration-consultation' }
    ]
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-soft">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Guidesoft</span>
              <div className="flex items-center space-x-2">
                <div className="h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <span className="text-2xl font-heading font-bold text-secondary-900">
                  Guide<span className="text-gradient">soft</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-secondary-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center gap-x-1 text-base font-medium leading-6 text-secondary-900 hover:text-primary-600 transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
                    </button>
                    
                    {activeDropdown === item.name && (
                      <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
                        <div className="w-screen max-w-sm flex-auto overflow-hidden rounded-2xl bg-white py-4 text-sm leading-6 shadow-large ring-1 ring-secondary-900/5">
                          <div className="p-4">
                            {item.dropdown.map((subItem) => (
                              <div key={subItem.name} className="group relative flex gap-x-6 rounded-lg p-3 hover:bg-secondary-50">
                                <div>
                                  <Link
                                    href={subItem.href}
                                    className="font-medium text-secondary-900 hover:text-primary-600 transition-colors duration-200"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    {subItem.name}
                                    <span className="absolute inset-0" />
                                  </Link>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-base font-medium leading-6 text-secondary-900 hover:text-primary-600 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/contact">
              <Button variant="gradient" rounded="full" size="md">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-secondary-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Guidesoft</span>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <span className="text-white font-bold">G</span>
                  </div>
                  <span className="text-xl font-heading font-bold text-secondary-900">
                    Guide<span className="text-gradient">soft</span>
                  </span>
                </div>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-secondary-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-secondary-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-medium leading-7 text-secondary-900 hover:bg-secondary-50"
                          >
                            {item.name}
                            <ChevronDownIcon className="h-5 w-5 flex-none" aria-hidden="true" />
                          </button>
                          {activeDropdown === item.name && (
                            <div className="mt-2 space-y-2">
                              {item.dropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium leading-7 text-secondary-700 hover:bg-secondary-50"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium leading-7 text-secondary-900 hover:bg-secondary-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link href="/contact" className="w-full">
                    <Button className="w-full" variant="gradient" rounded="full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}