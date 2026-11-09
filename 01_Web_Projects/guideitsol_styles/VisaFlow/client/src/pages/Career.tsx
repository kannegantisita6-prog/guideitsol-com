import React from 'react';
import { Button } from '../components/ui/button';
import { ContactForm } from '../components/ui/contact-form';
import { Users, MapPin, Clock, DollarSign, Briefcase, Heart, Target, Zap } from 'lucide-react';

const Career = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-neon-cyan" />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs for you and your family."
    },
    {
      icon: <Clock className="w-8 h-8 text-stellar-orange" />,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous paid time off to maintain a healthy balance."
    },
    {
      icon: <Target className="w-8 h-8 text-electric-blue" />,
      title: "Professional Growth",
      description: "Continuous learning opportunities, skill development programs, and clear career advancement paths."
    },
    {
      icon: <Zap className="w-8 h-8 text-neon-cyan" />,
      title: "Innovation Culture",
      description: "Work with cutting-edge technologies and contribute to innovative solutions that make a real impact."
    }
  ];

  const openPositions = [
    {
      title: "Senior Software Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      description: "Join our engineering team to build scalable web applications and innovative IT solutions."
    },
    {
      title: "Immigration Consultant",
      department: "Visa Services",
      location: "Toronto / Remote",
      type: "Full-time",
      description: "Help clients navigate complex immigration processes and achieve their global mobility goals."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Create beautiful, user-centered designs that enhance our digital products and services."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "London / Remote",
      type: "Full-time",
      description: "Drive our digital marketing initiatives and help expand our global reach."
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      description: "Transform data into actionable insights that drive business decisions and client success."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Sydney / Remote",
      type: "Full-time",
      description: "Ensure client satisfaction and success throughout their journey with our services."
    }
  ];

  const values = [
    "Innovation and continuous learning",
    "Diversity, equity, and inclusion",
    "Client-first mindset",
    "Collaborative teamwork",
    "Integrity and transparency",
    "Global perspective with local expertise"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmic-purple to-stellar-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-electric-blue to-stellar-orange bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Build your career with a company that's shaping the future of technology and global mobility
          </p>
          <Button className="bg-gradient-to-r from-stellar-orange to-electric-blue neon-glow font-semibold text-lg px-8 py-3">
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neon-cyan">
            Why Choose GuideIT Solutions?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-cosmic-purple/30 to-deep-space/30 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-neon-cyan/50 transition-all duration-300">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-electric-blue">
                Our Values
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We believe that great companies are built by great people who share common values. 
                Our culture is founded on these principles that guide everything we do.
              </p>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-stellar-orange rounded-full mr-4"></div>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-neon-cyan/20 to-electric-blue/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <Users className="w-16 h-16 text-stellar-orange mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Join 200+ Team Members</h3>
                  <p className="text-gray-300">
                    Be part of a diverse, global team that's passionate about technology, 
                    innovation, and helping people achieve their dreams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-stellar-orange">
            Open Positions
          </h2>
          <div className="grid gap-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-gradient-to-r from-cosmic-purple/20 to-deep-space/20 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-neon-cyan/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center text-neon-cyan">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.department}
                      </div>
                      <div className="flex items-center text-stellar-orange">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </div>
                      <div className="flex items-center text-electric-blue">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button className="bg-gradient-to-r from-neon-cyan to-electric-blue neon-glow font-semibold">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-neon-cyan">
            Our Hiring Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-stellar-orange to-neon-cyan rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold text-white mb-2">Application</h3>
              <p className="text-gray-300">Submit your application and resume through our careers portal</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold text-white mb-2">Screening</h3>
              <p className="text-gray-300">Initial phone or video call to discuss your background and interests</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-stellar-orange rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold text-white mb-2">Interview</h3>
              <p className="text-gray-300">Technical and cultural fit interviews with team members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-stellar-orange to-neon-cyan rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold text-white mb-2">Offer</h3>
              <p className="text-gray-300">Reference checks and job offer with competitive compensation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-electric-blue">
            Ready to Join Us?
          </h2>
          <div className="text-center mb-8">
            <p className="text-lg text-gray-300 mb-6">
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and tell us how you'd like to contribute to our mission.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Career;