'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CreditCard, Palette, Download, Eye } from 'lucide-react'

const sampleCards = [
  {
    id: 1,
    name: 'John Smith',
    title: 'Creative Director',
    company: 'Design Studio',
    colors: ['#2C3E50', '#ECF0F1', '#3498DB'],
    style: 'Modern'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    title: 'Marketing Manager',
    company: 'Tech Solutions',
    colors: ['#E74C3C', '#FFFFFF', '#2C3E50'],
    style: 'Professional'
  },
  {
    id: 3,
    name: 'Mike Wilson',
    title: 'CEO',
    company: 'Startup Inc',
    colors: ['#27AE60', '#FFFFFF', '#2C3E50'],
    style: 'Executive'
  }
]

const features = [
  {
    icon: CreditCard,
    title: 'Professional Templates',
    description: 'Choose from hundreds of professionally designed business card templates'
  },
  {
    icon: Palette,
    title: 'Custom Branding',
    description: 'Add your logo, colors, and fonts to match your brand identity'
  },
  {
    icon: Download,
    title: 'Print Ready',
    description: 'Export high-resolution files ready for professional printing'
  },
  {
    icon: Eye,
    title: 'Digital & Print',
    description: 'Create both digital and print versions of your business cards'
  }
]

export default function BusinessCards() {
  return (
    <section className="py-20 bg-white">
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
              Business Cards
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Craft an impressive business card effortlessly. Explore a vast collection of professionally 
              designed business cards and customize them with ease. Whether you're a tech whiz or a 
              trend-setting hairstylist, discover the ideal business card for you.
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
              <span>Make a Business Card</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Right Content - Sample Business Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Stacked Business Cards Effect */}
            <div className="relative">
              {sampleCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    rotateY: 5,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="absolute"
                  style={{
                    top: `${index * 20}px`,
                    left: `${index * 10}px`,
                    zIndex: sampleCards.length - index,
                    transform: `rotateY(${-15 + index * 5}deg)`
                  }}
                >
                  <div 
                    className="w-80 h-48 rounded-lg shadow-lg p-6 flex flex-col justify-between"
                    style={{
                      background: `linear-gradient(135deg, ${card.colors[0]}, ${card.colors[1]})`,
                      color: card.colors[2]
                    }}
                  >
                    {/* Card Content */}
                    <div className="flex-1">
                      <div className="text-sm opacity-75 mb-2">{card.company}</div>
                      <div className="text-2xl font-bold mb-1">{card.name}</div>
                      <div className="text-lg">{card.title}</div>
                    </div>
                    
                    {/* Contact Info */}
                    <div className="text-sm opacity-75">
                      <div>📧 john@company.com</div>
                      <div>📱 +1 (555) 123-4567</div>
                      <div>🌐 www.company.com</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Color Palette */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 flex justify-center space-x-2"
            >
              {sampleCards[0].colors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border-2 border-white shadow-md"
                  style={{ backgroundColor: color }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
