'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Palette, Wand2, Download, Eye } from 'lucide-react'

const sampleLogos = [
  {
    id: 1,
    name: 'TechBridge',
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'],
    style: 'Modern'
  },
  {
    id: 2,
    name: 'GreenLeaf',
    colors: ['#2ECC71', '#27AE60', '#16A085', '#1ABC9C'],
    style: 'Nature'
  },
  {
    id: 3,
    name: 'OceanWave',
    colors: ['#3498DB', '#2980B9', '#5DADE2', '#85C1E9'],
    style: 'Ocean'
  },
  {
    id: 4,
    name: 'Sunset',
    colors: ['#E74C3C', '#F39C12', '#F1C40F', '#E67E22'],
    style: 'Warm'
  }
]

const features = [
  {
    icon: Palette,
    title: 'Customizable Colors',
    description: 'Choose from millions of colors or use your brand colors'
  },
  {
    icon: Wand2,
    title: 'AI-Powered Design',
    description: 'Get intelligent design suggestions based on your industry'
  },
  {
    icon: Download,
    title: 'High-Quality Export',
    description: 'Download in PNG, SVG, PDF, and other formats'
  },
  {
    icon: Eye,
    title: 'Live Preview',
    description: 'See your logo in real-time across different applications'
  }
]

export default function LogoMaker() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-display mb-6">
              Logo Maker
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Design.com's logo maker blends smart technology with human creativity to deliver stunning, 
              customizable logos in seconds. Whether you're launching a startup or refreshing your brand, 
              it offers intuitive tools to tweak fonts, colors, and layouts, ensuring a design that feels uniquely yours.
            </p>
            
            {/* Features */}
            <div className="space-y-6 mb-8">
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

            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center space-x-2">
              <span>Make a Logo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Right Content - Sample Logos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {sampleLogos.map((logo, index) => (
              <motion.div
                key={logo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Logo Preview */}
                  <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-1">
                        {logo.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {logo.style} Style
                      </div>
                    </div>
                    
                    {/* Color Palette */}
                    <div className="absolute bottom-2 left-2 flex space-x-1">
                      {logo.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-4 h-4 rounded-full border border-white shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Logo Info */}
                  <div className="text-center">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {logo.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {logo.style} • Professional
                    </p>
                    
                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200">
                        Customize
                      </button>
                      <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors duration-200">
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
