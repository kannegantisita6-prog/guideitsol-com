'use client'

import { motion } from 'framer-motion'

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* GS Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative w-32 h-32 mx-auto">
            {/* Outer ring with segmented colors */}
            <div className="absolute inset-0 rounded-full border-8 border-transparent">
              <div className="absolute inset-0 rounded-full border-8 border-accent-orange" style={{ clipPath: 'polygon(0 0, 50% 0, 50% 50%, 0 50%)' }} />
              <div className="absolute inset-0 rounded-full border-8 border-accent-teal" style={{ clipPath: 'polygon(50% 0, 100% 0, 100% 50%, 50% 50%)' }} />
              <div className="absolute inset-0 rounded-full border-8 border-accent-purple" style={{ clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)' }} />
              <div className="absolute inset-0 rounded-full border-8 border-accent-pink" style={{ clipPath: 'polygon(0 50%, 50% 50%, 50% 100%, 0 100%)' }} />
            </div>
            
            {/* Inner white circle */}
            <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-black font-display">GS</span>
            </div>
          </div>
        </motion.div>

        {/* Company Name */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-3xl font-bold text-white font-display mb-2"
        >
          Guidesoft Designs
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg text-primary-100 mb-8"
        >
          Design & Branding Made Easy
        </motion.p>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-sm text-primary-200 mt-4"
        >
          Loading amazing designs...
        </motion.p>
      </div>
    </motion.div>
  )
}
