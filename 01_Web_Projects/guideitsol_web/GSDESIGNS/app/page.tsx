'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from '@/components/Header'
import SplashScreen from '@/components/SplashScreen'
import HeroSection from '@/components/HeroSection'
import DesignCategories from '@/components/DesignCategories'
import LogoMaker from '@/components/LogoMaker'
import BusinessCards from '@/components/BusinessCards'
import SocialMedia from '@/components/SocialMedia'
import InstagramStories from '@/components/InstagramStories'
import DomainNames from '@/components/DomainNames'
import Footer from '@/components/Footer'
import AuthModal from '@/components/AuthModal'

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin')

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleAuth = (mode: 'signin' | 'signup') => {
    setAuthMode(mode)
    setShowAuthModal(true)
  }

  const handleAuthSuccess = () => {
    setIsAuthenticated(true)
    setShowAuthModal(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <AnimatePresence>
        {showSplash && (
          <SplashScreen key="splash" />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Animated Background Elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Floating Design Elements */}
            <motion.div
              className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
              animate={{
                y: [0, -30, 0],
                x: [0, 20, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-blue-400 to-teal-400 rounded-lg opacity-20"
              animate={{
                y: [0, 40, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-40 left-1/4 w-20 h-20 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20"
              animate={{
                y: [0, -20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-1/3 w-14 h-14 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg opacity-20"
              animate={{
                y: [0, 30, 0],
                x: [0, -15, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Zigzag Elements */}
            <motion.div
              className="absolute top-1/3 left-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"
              animate={{
                x: [0, 50, -50, 0],
                y: [0, -30, 30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-30"
              animate={{
                x: [0, -40, 40, 0],
                y: [0, 25, -25, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            <Header 
              isAuthenticated={isAuthenticated}
              onSignIn={() => handleAuth('signin')}
              onSignUp={() => handleAuth('signup')}
            />
            
            <main>
              <HeroSection 
                onGetStarted={() => handleAuth('signup')}
                onCreateLogo={() => handleAuth('signup')}
              />
              
              <DesignCategories />
              
              <LogoMaker />
              
              <BusinessCards />
              
              <SocialMedia />
              
              <InstagramStories />
              
              <DomainNames />
            </main>
            
            <Footer />
          </div>

          {/* Auth Modal */}
          <AuthModal
            isOpen={showAuthModal}
            mode={authMode}
            onClose={() => setShowAuthModal(false)}
            onSuccess={handleAuthSuccess}
            onSwitchMode={(mode) => setAuthMode(mode)}
          />
        </motion.div>
      )}
    </div>
  )
}
