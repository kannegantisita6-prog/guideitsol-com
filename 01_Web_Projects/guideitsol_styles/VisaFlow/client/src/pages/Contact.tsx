import React from 'react';
import { ContactForm } from '../components/ui/contact-form';
import { MapPin, Phone, Mail, Clock, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-neon-cyan" />,
      title: "Headquarters",
      details: [
        "123 Innovation Drive",
        "Tech District, NY 10001",
        "United States"
      ]
    },

    {
      icon: <Mail className="w-6 h-6 text-electric-blue" />,
      title: "Email",
      details: [
            "info@guideitsol.com",
    "support@guideitsol.com",
    "careers@guideitsol.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-neon-cyan" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM EST",
        "Saturday: 10:00 AM - 4:00 PM EST",
        "Sunday: Closed"
      ]
    }
  ];

  const offices = [
    {
      city: "New York",
      country: "United States",
      address: "123 Innovation Drive, Tech District, NY 10001",
      email: "ny@guideitsol.com"
    },
    {
      city: "Toronto",
      country: "Canada",
      address: "456 Bay Street, Financial District, ON M5H 2Y4",
      email: "toronto@guideitsol.com"
    },
    {
      city: "London",
      country: "United Kingdom",
      address: "789 Canary Wharf, London E14 5AB",
      email: "london@guideitsol.com"
    },
    {
      city: "Sydney",
      country: "Australia",
      address: "321 George Street, Sydney NSW 2000",
      email: "sydney@guideitsol.com"
    }
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We provide comprehensive IT solutions including software development, UI/UX design, data analytics, cybersecurity, and digital marketing. We also offer complete visa and immigration services for study abroad, work visas, tourism, and document verification."
    },
    {
      question: "How long does the visa application process take?",
      answer: "Processing times vary by visa type and country. Student visas typically take 2-8 weeks, work visas can take 3-12 weeks, and tourist visas usually process within 1-4 weeks. We provide detailed timelines during consultation."
    },
    {
      question: "Do you offer remote IT services?",
      answer: "Yes, we provide remote IT services globally. Our team can work with clients anywhere in the world, offering the same high-quality solutions and support as our on-site services."
    },
    {
      question: "What are your consultation fees?",
      answer: "We offer free initial consultations for both IT and visa services. Detailed project quotes are provided after understanding your specific requirements. Our pricing is transparent with no hidden fees."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-space via-cosmic-purple to-stellar-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-electric-blue to-stellar-orange bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to start your journey? Get in touch with our experts today
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neon-cyan">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-br from-cosmic-purple/30 to-deep-space/30 rounded-xl p-6 backdrop-blur-sm border border-white/10 text-center">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-electric-blue">
                Send us a Message
              </h2>
              <p className="text-gray-300 mb-8">
                Have a question or ready to get started? Fill out the form below and our team will get back to you within 24 hours.
              </p>
              <ContactForm />
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-stellar-orange">
                Find Us
              </h2>
              <div className="bg-gradient-to-r from-neon-cyan/20 to-electric-blue/20 rounded-2xl h-96 flex items-center justify-center backdrop-blur-sm border border-white/10">
                <div className="text-center">
                  <Globe className="w-16 h-16 text-white/40 mx-auto mb-4" />
                  <p className="text-white/60 text-lg">Interactive Map</p>
                  <p className="text-white/40">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neon-cyan">
            Our Global Offices
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-gradient-to-br from-cosmic-purple/20 to-deep-space/20 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-neon-cyan/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{office.city}</h3>
                <p className="text-stellar-orange font-medium mb-4">{office.country}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{office.address}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-electric-blue" />
                    <p className="text-gray-300">{office.email}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-electric-blue">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-cosmic-purple/20 to-deep-space/20 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-6 h-6 text-neon-cyan mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;