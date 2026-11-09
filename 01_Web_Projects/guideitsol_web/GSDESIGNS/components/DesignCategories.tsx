'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Globe, 
  Sparkles, 
  Facebook, 
  Instagram, 
  Share2, 
  Printer, 
  Video,
  ArrowRight
} from 'lucide-react'

const categories = [
  {
    name: 'Logo Designs & Brand Identity',
    icon: Palette,
    description: 'Create stunning logos and brand materials',
    color: 'from-purple-500 to-pink-500',
    href: '/logo-maker'
  },
  {
    name: 'Website',
    icon: Globe,
    description: 'Build beautiful websites and landing pages',
    color: 'from-blue-500 to-cyan-500',
    href: '/website-builder'
  },
  {
    name: 'AI Design',
    icon: Sparkles,
    description: 'AI-powered design tools and generators',
    color: 'from-orange-500 to-red-500',
    href: '/ai-design'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    description: 'Facebook covers, posts, and stories',
    color: 'from-blue-600 to-blue-700',
    href: '/facebook'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    description: 'Instagram posts, stories, and highlights',
    color: 'from-pink-500 to-purple-500',
    href: '/instagram'
  },
  {
    name: 'Social Media',
    icon: Share2,
    description: 'All social media design templates',
    color: 'from-green-500 to-teal-500',
    href: '/social-media'
  },
  {
    name: 'Print',
    icon: Printer,
    description: 'Business cards, flyers, and print materials',
    color: 'from-gray-600 to-gray-700',
    href: '/print'
  },
  {
    name: 'Video',
    icon: Video,
    description: 'Video templates and animations',
    color: 'from-red-500 to-pink-500',
    href: '/video'
  }
]

export default function DesignCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-display mb-4">
            Make a design...
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of design categories and create stunning visuals for your business
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <a
                href={category.href}
                className="block p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className="text-center">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                    {category.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  {/* Arrow */}
                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 mx-auto">
            <span>View All Categories</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
