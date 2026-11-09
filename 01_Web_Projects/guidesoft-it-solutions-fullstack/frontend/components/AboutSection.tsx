'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaLightbulb, FaRocket, FaUsers, FaChartLine, FaGlobe, FaAward } from 'react-icons/fa'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState('mission')

  const tabs = [
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <FaRocket />,
      content: 'To empower businesses with cutting-edge technology solutions that drive growth, innovation, and success in the digital era. We believe in creating value through technology that transforms ideas into reality.'
    },
    {
      id: 'vision',
      title: 'Our Vision',
      icon: <FaLightbulb />,
      content: 'To be the leading technology partner for businesses worldwide, recognized for our innovation, expertise, and commitment to excellence. We envision a future where technology seamlessly integrates with business goals to create unprecedented value.'
    },
    {
      id: 'values',
      title: 'Our Values',
      icon: <FaAward />,
      content: 'Innovation, Integrity, Excellence, Collaboration, and Customer-Centricity form the core of our values. We strive to deliver solutions that not only meet but exceed expectations while maintaining the highest ethical standards.'
    }
  ]

  const stats = [
    { number: '10+', years: 'Years of Excellence' },
    { number: '500+', projects: 'Projects Delivered' },
    { number: '100+', clients: 'Happy Clients' },
    { number: '50+', developers: 'Expert Team' }
  ]

  const features = [
    {
      icon: <FaUsers className="text-cyan-400" />,
      title: 'Expert Team',
      description: 'Highly skilled professionals with deep expertise in modern technologies'
    },
    {
      icon: <FaChartLine className="text-blue-400" />,
      title: 'Proven Results',
      description: 'Track record of delivering successful projects across various industries'
    },
    {
      icon: <FaGlobe className="text-purple-400" />,
      title: 'Global Reach',
      description: 'Serving clients worldwide with tailored solutions for diverse markets'
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-950 to-gray-900" id="about">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-4"
              >
                <FaLightbulb className="mr-2" />
                About Us
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold font-heading text-white mb-6"
              >
                Transforming Businesses Through <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Innovation</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg text-gray-400 mb-8 leading-relaxed"
              >
                IT & AI Consultant is a premier technology company dedicated to delivering 
                exceptional software development services. With over a decade of experience, 
                we've helped businesses worldwide transform their digital presence and achieve 
                unprecedented growth through innovative technology solutions.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">
                    {stat.years || stat.projects || stat.clients || stat.developers}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid sm:grid-cols-3 gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl mb-4 border border-gray-700/50">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
          >
            <div className="flex space-x-2 mb-8 border-b border-gray-700/50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-b-2 border-cyan-500'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
                >
                  <span>{tab.icon}</span>
                  <span className="font-medium">{tab.title}</span>
                </button>
              ))}
            </div>

            <div className="min-h-[200px]">
              {tabs.map((tab) => (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeTab === tab.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="mt-1 text-cyan-400">
                      {tab.icon}
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      {tab.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-gray-300">Cutting-edge technology stack</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Agile development methodology</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">24/7 dedicated support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300">Transparent communication</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection