'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Globe, Search, Sparkles, Shield, Zap } from 'lucide-react'

const domainSuggestions = [
  {
    name: 'guidesoftdesigns.com',
    status: 'Available',
    price: '$12.99/year',
    category: 'Premium'
  },
  {
    name: 'guidesoftstudio.com',
    status: 'Available',
    price: '$11.99/year',
    category: 'Standard'
  },
  {
    name: 'guidesoftcreative.com',
    status: 'Available',
    price: '$13.99/year',
    category: 'Premium'
  },
  {
    name: 'guidesoftbrand.com',
    status: 'Available',
    price: '$12.99/year',
    category: 'Standard'
  },
  {
    name: 'guidesoftagency.com',
    status: 'Available',
    price: '$14.99/year',
    category: 'Premium'
  },
  {
    name: 'guidesoftweb.com',
    status: 'Available',
    price: '$10.99/year',
    category: 'Standard'
  }
]

const features = [
  {
    icon: Search,
    title: 'Domain Search',
    description: 'Find the perfect domain name for your business'
  },
  {
    icon: Sparkles,
    title: 'AI Suggestions',
    description: 'Get intelligent domain name suggestions based on your brand'
  },
  {
    icon: Shield,
    title: 'Privacy Protection',
    description: 'Keep your personal information safe with WHOIS privacy'
  },
  {
    icon: Zap,
    title: 'Instant Setup',
    description: 'Get your domain up and running in minutes'
  }
]

export default function DomainNames() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-6">
            Domain Names
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find the perfect domain name for your business and establish your online presence with our 
            easy-to-use domain search and registration service
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Domain Search */}
            <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Find Your Domain
                  </h3>
                  <p className="text-gray-600">
                    Search for available domain names
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Enter your business name..."
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
                  />
                </div>
                
                <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Search Domains</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Domain Suggestions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Suggested Domains for "Guidesoft"
              </h3>
              
              <div className="space-y-4">
                {domainSuggestions.map((domain, index) => (
                  <motion.div
                    key={domain.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                    className="group"
                  >
                    <div className="border border-gray-200 rounded-lg p-4 hover:border-primary-300 hover:shadow-md transition-all duration-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="font-semibold text-gray-900">
                            {domain.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {domain.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-primary-600">
                            {domain.price}
                          </span>
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                            {domain.category}
                          </span>
                        </div>
                        
                        <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 opacity-0 group-hover:opacity-100">
                          Register
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* View All Button */}
              <div className="mt-6 text-center">
                <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
                  View all suggestions →
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute top-20 right-20 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
              animate={{
                y: [0, 15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to claim your domain?
            </h3>
            <p className="text-gray-600 mb-6">
              Secure your online presence with a professional domain name
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center space-x-2 mx-auto">
              <span>Search Domains Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
