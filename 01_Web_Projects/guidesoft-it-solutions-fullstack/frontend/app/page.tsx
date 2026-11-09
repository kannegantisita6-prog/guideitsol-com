'use client'

import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Import components
import Header from '../components/Header'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import SolutionsSection from '../components/SolutionsSection'
import TravelSection from '../components/TravelSection'
import HireDevelopersSection from '../components/HireDevelopersSection'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    // Initialize AOS animations with immediate responsiveness
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <main className="relative bg-gray-950 text-white min-h-screen">
      <Header />
      <Hero />
      <ServicesSection />
      <SolutionsSection />
      <TravelSection />
      <HireDevelopersSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
