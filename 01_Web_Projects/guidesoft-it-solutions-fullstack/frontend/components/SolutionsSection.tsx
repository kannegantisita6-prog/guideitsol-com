'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { 
  FaRocket, 
  FaMobile, 
  FaCloud, 
  FaChartLine, 
  FaShieldAlt, 
  FaSync,
  FaArrowRight,
  FaLightbulb
} from 'react-icons/fa'

const SolutionsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const solutions = [
    {
      icon: <FaRocket />,
      title: "On-Demand Solutions",
      description: "Custom on-demand platforms for food delivery, ride-sharing, and more with real-time tracking.",
      features: ["Real-time Tracking", "Payment Integration", "User Ratings", "Admin Dashboard"],
      color: "from-orange-500 to-red-500",
      href: "/solutions/on-demand"
    },
    {
      icon: <FaMobile />,
      title: "Mobile First",
      description: "Progressive web apps and native mobile solutions for seamless user experiences.",
      features: ["Cross-Platform", "Offline Support", "Push Notifications", "Biometric Auth"],
      color: "from-blue-500 to-cyan-500",
      href: "/solutions/mobile-first"
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ["Auto Scaling", "Disaster Recovery", "Multi-Region", "Cost Optimization"],
      color: "from-purple-500 to-indigo-500",
      href: "/solutions/cloud"
    },
    {
      icon: <FaChartLine />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our advanced analytics platform.",
      features: ["Real-time Dashboards", "Predictive Analytics", "Data Visualization", "Custom Reports"],
      color: "from-green-500 to-teal-500",
      href: "/solutions/analytics"
    },
    {
      icon: <FaShieldAlt />,
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your digital assets and customer data.",
      features: ["Threat Monitoring", "Vulnerability Assessment", "Compliance", "Incident Response"],
      color: "from-red-500 to-pink-500",
      href: "/solutions/security"
    },
    {
      icon: <FaSync />,
      title: "DevOps Automation",
      description: "Streamline your development workflow with CI/CD pipelines and automation.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Auto Deployment"],
      color: "from-yellow-500 to-orange-500",
      href: "/solutions/devops"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-950 to-gray-900" id="solutions">
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
            <FaLightbulb className="mr-2" />
            Innovative Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6"
          >
            Future-Ready <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Discover our cutting-edge solutions designed to accelerate your business growth 
            and keep you ahead in the digital transformation race.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={solution.href}>
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-gradient-to-br ${solution.color} text-white shadow-xl`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">Learn More</span>
                    <FaArrowRight className="text-cyan-400 group-hover:translate-x-2 transition-transform duration-300" />
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-12 border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your business goals 
              and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-xl hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1"
              >
                Get Started Today
              </Link>
              <Link
                href="/solutions"
                className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-300 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 font-semibold"
              >
                View All Solutions
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SolutionsSection