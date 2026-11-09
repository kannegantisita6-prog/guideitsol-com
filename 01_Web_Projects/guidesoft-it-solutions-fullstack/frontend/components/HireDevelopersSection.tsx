'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { 
  FaCode, 
  FaMobile, 
  FaDatabase, 
  FaServer, 
  FaPalette, 
  FaChartLine,
  FaArrowRight,
  FaLightbulb,
  FaUsers
} from 'react-icons/fa'

const HireDevelopersSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const developerTypes = [
    {
      icon: <FaCode />,
      title: "Frontend Developers",
      description: "Experts in React, Vue, Angular and modern JavaScript frameworks.",
      skills: ["React", "Vue.js", "Angular", "TypeScript", "CSS3"],
      color: "from-blue-500 to-cyan-500",
      href: "/hire/frontend"
    },
    {
      icon: <FaServer />,
      title: "Backend Developers",
      description: "Specialists in Node.js, Python, Java and scalable server architecture.",
      skills: ["Node.js", "Python", "Java", "APIs", "Microservices"],
      color: "from-purple-500 to-indigo-500",
      href: "/hire/backend"
    },
    {
      icon: <FaMobile />,
      title: "Mobile Developers",
      description: "Professionals in React Native, Flutter, iOS and Android development.",
      skills: ["React Native", "Flutter", "iOS", "Android", "Xamarin"],
      color: "from-green-500 to-teal-500",
      href: "/hire/mobile"
    },
    {
      icon: <FaDatabase />,
      title: "Data Engineers",
      description: "Experts in big data, analytics, and database optimization.",
      skills: ["Big Data", "SQL", "NoSQL", "Spark", "Kafka"],
      color: "from-orange-500 to-red-500",
      href: "/hire/data-engineers"
    },
    {
      icon: <FaPalette />,
      title: "UI/UX Designers",
      description: "Creative designers focused on user experience and interface design.",
      skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research"],
      color: "from-pink-500 to-rose-500",
      href: "/hire/ui-ux"
    },
    {
      icon: <FaChartLine />,
      title: "DevOps Engineers",
      description: "Specialists in CI/CD, cloud infrastructure, and deployment automation.",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      color: "from-yellow-500 to-orange-500",
      href: "/hire/devops"
    }
  ]

  const benefits = [
    {
      icon: <FaUsers className="text-cyan-400" />,
      title: "Dedicated Team",
      description: "Get a dedicated team of experts working exclusively on your project"
    },
    {
      icon: <FaLightbulb className="text-blue-400" />,
      title: "Innovation Focus",
      description: "Access to cutting-edge technologies and innovative solutions"
    },
    {
      icon: <FaChartLine className="text-purple-400" />,
      title: "Scalable Resources",
      description: "Scale your team up or down based on project requirements"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-950 to-gray-900" id="hire">
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
            <FaCode className="mr-2" />
            Hire Experts
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-white mb-6"
          >
            Hire <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Top-Tier Developers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-400 max-w-3xl mx-auto"
          >
            Access a global pool of highly skilled developers, designers, and engineers 
            to accelerate your project delivery and drive innovation.
          </motion.p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl p-8 rounded-2xl border border-gray-700/50 text-center">
              <div className="text-3xl mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Developer Types Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {developerTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={type.href}>
                <div className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-6 bg-gradient-to-br ${type.color} text-white shadow-xl`}>
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-400 mb-6">{type.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {type.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-medium">Hire Now</span>
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
          className="text-center"
        >
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-12 border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Team Configuration?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you need a single developer or an entire team, we can customize 
              the perfect solution for your project requirements and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/hire/team"
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-xl hover:from-cyan-700 hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-1"
              >
                Build Your Team
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-cyan-500/50 text-cyan-300 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 font-semibold"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HireDevelopersSection