'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Facebook, Instagram, Twitter, LinkedIn, Youtube } from 'lucide-react'

const socialPlatforms = [
  {
    name: 'Facebook',
    icon: Facebook,
    color: '#1877F2',
    description: 'Facebook covers, posts, and stories',
    examples: [
      { type: 'Cover', text: 'GRAPHIC DESIGN', style: 'bold' },
      { type: 'Post', text: 'Beauty & Lifestyle', style: 'elegant' }
    ]
  },
  {
    name: 'Instagram',
    icon: Instagram,
    color: '#E4405F',
    description: 'Instagram posts, stories, and highlights',
    examples: [
      { type: 'Post', text: 'OPEN AIR MUSIC', style: 'vibrant' },
      { type: 'Story', text: 'SPORTS CAMP', style: 'dynamic' }
    ]
  },
  {
    name: 'Twitter',
    icon: Twitter,
    color: '#1DA1F2',
    description: 'Twitter headers and posts',
    examples: [
      { type: 'Header', text: 'TECH WORLD', style: 'modern' },
      { type: 'Post', text: 'Digital Marketing', style: 'clean' }
    ]
  },
  {
    name: 'LinkedIn',
    icon: LinkedIn,
    color: '#0A66C2',
    description: 'LinkedIn banners and posts',
    examples: [
      { type: 'Banner', text: 'TECH SOLUTIONS', style: 'professional' },
      { type: 'Post', text: 'Business Growth', style: 'corporate' }
    ]
  },
  {
    name: 'YouTube',
    icon: Youtube,
    color: '#FF0000',
    description: 'YouTube banners and thumbnails',
    examples: [
      { type: 'Banner', text: 'CREATIVE CHANNEL', style: 'bold' },
      { type: 'Thumbnail', text: 'Tutorial Series', style: 'eye-catching' }
    ]
  }
]

export default function SocialMedia() {
  return (
    <section className="py-20 bg-gray-50">
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
            Social Media Design
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create stunning social media content that engages your audience and grows your brand presence across all platforms
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Platform Header */}
                <div className="flex items-center space-x-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: platform.color }}
                  >
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {platform.description}
                    </p>
                  </div>
                </div>

                {/* Examples */}
                <div className="space-y-4 mb-6">
                  {platform.examples.map((example, exampleIndex) => (
                    <div
                      key={exampleIndex}
                      className="relative h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-4 flex items-center justify-center"
                    >
                      <div className="text-center">
                        <div className="text-xs text-gray-500 mb-1">
                          {example.type}
                        </div>
                        <div className="text-lg font-bold text-gray-800">
                          {example.text}
                        </div>
                        <div className="text-xs text-gray-600">
                          {example.style} style
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button 
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 group-hover:bg-primary-600 group-hover:text-white"
                  style={{ '--tw-bg-opacity': 0.1 } as any}
                >
                  <span>Create {platform.name} Design</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
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
              Ready to boost your social media presence?
            </h3>
            <p className="text-gray-600 mb-6">
              Create professional social media content in minutes with our easy-to-use design tools
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center space-x-2 mx-auto">
              <span>Start Creating</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
