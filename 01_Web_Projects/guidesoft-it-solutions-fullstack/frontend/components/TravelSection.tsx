'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { 
  FaPlane, 
  FaHotel, 
  FaCar, 
  FaSuitcase, 
  FaGlobe, 
  FaChartLine,
  FaArrowRight,
  FaLightbulb
} from 'react-icons/fa'

const TravelSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const travelSolutions = [
    {
      icon: <FaPlane />,
      title: "Flight Booking Engine",
      description: "Advanced flight search and booking system with real-time availability and pricing.",
      features: ["Multi-Airline Search", "Flexible Dates", "Baggage Options", "Seat Selection"],
      color: "from-blue-500 to-cyan-500",
      href: "/travel/flight-booking"
    },
    {
      icon: <FaHotel />,
      title: "Hotel Booking System",
      description: "Comprehensive hotel reservation platform with dynamic pricing and inventory management.",
      features: ["Real-time Availability", "Rate Shopping", "Channel Management", "Revenue Optimization"],
      color: "from-purple-500 to-indigo-500",
      href: "/travel/hotel-booking"
    },
    {
      icon: <FaCar />,
      title: "Car Rental Platform",
      description: "End-to-end car rental solution with fleet management and booking optimization.",
      features: ["Fleet Management", "Dynamic Pricing", "GPS Tracking", "Damage Assessment"],
      color: "from-green-500 to-teal-500",
      href: "/travel/car-rental"
    },
    {
      icon: <FaSuitcase />,
      title: "Travel Package Builder",
      description: "Customizable travel packages with itinerary planning and group booking capabilities.",
      features: ["Itinerary Builder", "Group Bookings", "Customization Engine", "Payment Plans"],
      color: "from-orange-500 to-red-500",
      href: "/travel/package-builder"
    }
  ]

  const stats = [
    { number: "500K+", label: "Bookings Processed" },
    { number: "150+", label: "Airlines Integrated" },
    { number: "50K+", label: "Hotels Connected" },
    { number: "25+", label: "Countries Served" }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-900 to-gray-950" id="travel">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-4"
          >
            <FaGlobe className="mr-2" />
            Travel Technology
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6"
          >
            Revolutionizing <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Travel Experiences</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Cutting-edge travel technology solutions that empower businesses to deliver 
            exceptional experiences and maximize revenue in the competitive travel industry.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-700/50">
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Travel Solutions Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {travelSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={solution.href}>
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-xl mb-4 bg-gradient-to-br ${solution.color} text-white shadow-lg`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-xs text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 text-sm font-medium">Explore Solution</span>
                    <FaArrowRight className="text-cyan-400 group-hover:translate-x-1 transition-transform duration-300 text-sm" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 max-w-3xl mx-auto">
            <FaChartLine className="text-4xl text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Transform Your Travel Business
            </h3>
            <p className="text-gray-400 mb-6">
              Discover how our travel technology solutions can help you increase bookings, 
              improve customer satisfaction, and boost revenue.
            </p>
            <Link
              href="/travel"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-lg hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1"
            >
              <span>Explore Travel Solutions</span>
              <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TravelSection