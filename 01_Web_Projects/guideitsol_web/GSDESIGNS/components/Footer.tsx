'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Globe } from 'lucide-react'

const footerLinks = {
  designers: [
    { name: 'Logo Maker', href: '/logo-maker' },
    { name: 'Website Builder', href: '/website-builder' },
    { name: 'Business Card Maker', href: '/business-cards' },
    { name: 'Social Media Templates', href: '/social-media' },
    { name: 'AI Design Tools', href: '/ai-design' },
    { name: 'Print Design', href: '/print-design' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' }
  ],
  create: [
    { name: 'Create a Logo', href: '/logo-maker' },
    { name: 'Create a Website', href: '/website-builder' },
    { name: 'Create a Business Card', href: '/business-cards' },
    { name: 'Create Social Media Content', href: '/social-media' },
    { name: 'Create Print Materials', href: '/print-design' },
    { name: 'Create Videos', href: '/video-maker' }
  ],
  logos: [
    { name: 'Abstract Logos', href: '/logos/abstract' },
    { name: 'Animal Logos', href: '/logos/animal' },
    { name: 'Art Logos', href: '/logos/art' },
    { name: 'Business Logos', href: '/logos/business' },
    { name: 'Car Logos', href: '/logos/car' },
    { name: 'Crown Logos', href: '/logos/crown' },
    { name: 'Food Logos', href: '/logos/food' },
    { name: 'Gaming Logos', href: '/logos/gaming' },
    { name: 'Music Logos', href: '/logos/music' },
    { name: 'Sports Logos', href: '/logos/sports' }
  ]
}

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: '#1877F2' },
  { name: 'Twitter', icon: Twitter, href: '#', color: '#1DA1F2' },
  { name: 'Instagram', icon: Instagram, href: '#', color: '#E4405F' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: '#0A66C2' },
  { name: 'YouTube', icon: Youtube, href: '#', color: '#FF0000' }
]

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-full border-2 border-transparent">
                  <div className="absolute inset-0 rounded-full border-2 border-accent-orange" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }} />
                  <div className="absolute inset-0 rounded-full border-2 border-accent-teal" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)' }} />
                  <div className="absolute inset-0 rounded-full border-2 border-accent-purple" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }} />
                  <div className="absolute inset-0 rounded-full border-2 border-accent-pink" style={{ clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)' }} />
                </div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-black">GS</span>
                </div>
              </div>
              <span className="text-2xl font-bold font-display">Guidesoft Designs</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Design & Branding Made Easy. Create stunning logos, business cards, social media content, 
              and more with our easy-to-use design tools.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-200"
                  style={{ '--hover-color': social.color } as any}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Designers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Designers</h3>
            <ul className="space-y-2">
              {footerLinks.designers.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Create Designs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Create Designs</h3>
            <ul className="space-y-2">
              {footerLinks.create.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Logos</h3>
            <ul className="space-y-2">
              {footerLinks.logos.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">© 2025 Guidesoft Designs. All rights reserved.</span>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
            </div>
            
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-400" />
              <select className="bg-transparent text-gray-400 border-none focus:ring-0">
                <option>English</option>
                <option>Español</option>
                <option>Français</option>
                <option>Deutsch</option>
                <option>Português</option>
              </select>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
