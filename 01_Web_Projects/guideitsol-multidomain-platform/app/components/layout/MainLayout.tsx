import { ReactNode } from 'react'
import Navbar from '../navigation/Navbar'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">GuideITSol</h3>
              <p className="text-gray-600 dark:text-gray-400">
                The ultimate digital ecosystem bringing together multiple domains in one unified platform.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Domains</h3>
              <ul className="space-y-2">
                <li><a href="/ai-tools" className="text-gray-600 dark:text-gray-400 hover:text-primary">AI Tools</a></li>
                <li><a href="/education" className="text-gray-600 dark:text-gray-400 hover:text-primary">Education</a></li>
                <li><a href="/health" className="text-gray-600 dark:text-gray-400 hover:text-primary">Health</a></li>
                <li><a href="/finance" className="text-gray-600 dark:text-gray-400 hover:text-primary">Finance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">More</h3>
              <ul className="space-y-2">
                <li><a href="/e-commerce" className="text-gray-600 dark:text-gray-400 hover:text-primary">E-Commerce</a></li>
                <li><a href="/travel" className="text-gray-600 dark:text-gray-400 hover:text-primary">Travel</a></li>
                <li><a href="/business" className="text-gray-600 dark:text-gray-400 hover:text-primary">Business</a></li>
                <li><a href="/entertainment" className="text-gray-600 dark:text-gray-400 hover:text-primary">Entertainment</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary">About Us</a></li>
                <li><a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary">Contact</a></li>
                <li><a href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary">Privacy Policy</a></li>
                <li><a href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-gray-500 dark:text-gray-400 text-center">
              &copy; {new Date().getFullYear()} GuideITSol. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}