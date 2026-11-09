'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Brain, 
  BookOpen, 
  Heart, 
  DollarSign, 
  ShoppingBag, 
  Plane, 
  Briefcase, 
  Film, 
  Briefcase as Job
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Define the navigation items with their respective icons
const navigationItems = [
  { name: 'AI Tools', href: '/ai-tools', icon: Brain },
  { name: 'Education', href: '/education', icon: BookOpen },
  { name: 'Health', href: '/health', icon: Heart },
  { name: 'Finance', href: '/finance', icon: DollarSign },
  { name: 'E-Commerce', href: '/e-commerce', icon: ShoppingBag },
  { name: 'Travel', href: '/travel', icon: Plane },
  { name: 'Business', href: '/business', icon: Briefcase },
  { name: 'Entertainment', href: '/entertainment', icon: Film },
  { name: 'Jobs', href: '/jobs', icon: Job },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="font-serif text-2xl font-bold text-primary">
                GuideITSol
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      isActive 
                        ? 'border-b-2 border-primary text-primary dark:text-primary-light' 
                        : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                  >
                    <Icon className="mr-1 h-4 w-4" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link 
                href="/auth/signin" 
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Sign in
              </Link>
              <Link 
                href="/auth/signup" 
                className="ml-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md"
              >
                Sign up
              </Link>
            </div>
            
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="sm:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-3 py-2 text-base font-medium ${
                      isActive 
                        ? 'bg-primary-light/10 text-primary dark:text-primary-light' 
                        : 'text-gray-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                )
              })}
              
              <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center px-4">
                  <Link 
                    href="/auth/signin" 
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link 
                    href="/auth/signup" 
                    className="ml-2 block px-4 py-2 text-base font-medium text-white bg-primary hover:bg-primary-dark rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}