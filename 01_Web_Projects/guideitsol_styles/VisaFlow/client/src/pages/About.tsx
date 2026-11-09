import React from 'react';
import { Button } from '../components/ui/button';
import { ContactForm } from '../components/ui/contact-form';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-neon-cyan" />,
      title: "Our Mission",
      description: "To empower businesses and individuals with innovative IT solutions and seamless visa services that open doors to global opportunities."
    },
    {
      icon: <Users className="w-8 h-8 text-stellar-orange" />,
      title: "Our Team",
      description: "A diverse group of experts in technology and immigration law, dedicated to providing personalized solutions for every client."
    },
    {
      icon: <Award className="w-8 h-8 text-electric-blue" />,
      title: "Our Values",
      description: "Excellence, integrity, and innovation drive everything we do. We believe in building lasting relationships through trust and results."
    },
    {
      icon: <Globe className="w-8 h-8 text-neon-cyan" />,
      title: "Global Reach",
      description: "Serving clients worldwide with local expertise and global perspective, bridging technology and immigration services."
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Projects" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Countries Served" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmic-purple to-stellar-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-electric-blue to-stellar-orange bg-clip-text text-transparent">
            About GuideIT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Your trusted partner in digital transformation and global mobility solutions
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neon-cyan">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded with a vision to bridge the gap between technology and global opportunities, 
                GuideIT Solutions has grown from a small startup to a trusted partner for businesses 
                and individuals worldwide.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We recognized that in today's interconnected world, success requires both cutting-edge 
                technology solutions and seamless navigation of international processes. That's why we 
                combined our expertise in IT services with comprehensive visa and immigration support.
              </p>
              <p className="text-lg text-gray-300">
                Today, we're proud to serve clients across the globe, helping them achieve their 
                digital transformation goals while opening doors to new markets and opportunities.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-neon-cyan/20 to-electric-blue/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-stellar-orange mb-2">
                        {stat.number}
                      </div>
                      <div className="text-gray-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-electric-blue">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-cosmic-purple/30 to-deep-space/30 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-neon-cyan/50 transition-all duration-300">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-stellar-orange">
            Leadership Team
          </h2>
          <div className="bg-gradient-to-r from-neon-cyan/10 to-electric-blue/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <p className="text-lg text-gray-300 mb-6">
              Our leadership team brings together decades of experience in technology, 
              business strategy, and immigration law. We're committed to innovation, 
              excellence, and creating value for our clients.
            </p>
            <Button className="bg-gradient-to-r from-stellar-orange to-electric-blue neon-glow font-semibold">
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neon-cyan">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default About;