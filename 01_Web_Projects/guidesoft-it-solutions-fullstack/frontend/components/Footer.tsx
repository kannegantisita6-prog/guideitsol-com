'use client'

import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaDribbble } from 'react-icons/fa'

const Footer = () => {
  const menuItems = [
    {
      title: 'Services',
      items: [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Software Development', href: '/services/software-development' },
        { name: 'UI/UX Design', href: '/services/ui-ux-design' },
        { name: 'eCommerce Development', href: '/services/ecommerce-development' },
      ]
    },
    {
      title: 'Solutions',
      items: [
        { name: 'On Demand Solutions', href: '/solutions/on-demand' },
        { name: 'Travel Solutions', href: '/solutions/travel' },
        { name: 'Enterprise Software', href: '/solutions/enterprise' },
        { name: 'Cloud Services', href: '/solutions/cloud' },
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '/careers' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
      ]
    }
  ]

  const socialLinks = [
    { icon: <FaFacebookF />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
    { icon: <FaGithub />, href: '#' },
    { icon: <FaDribbble />, href: '#' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-gray-900 border-t border-gray-800/50">
      <div className="container mx-auto px-4 lg:px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-2xl font-bold text-white">IT & AI Consultant</span>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming businesses through innovative technology solutions and exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 transition-all duration-200"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          {menuItems.map((menu, index) => (
            <div key={index} className="lg:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-6">{menu.title}</h3>
              <ul className="space-y-4">
                {menu.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} IT & AI Consultant. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-gray-400 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-gray-400 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer