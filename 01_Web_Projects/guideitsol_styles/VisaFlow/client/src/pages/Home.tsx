import EnhancedHeroSection from "@/components/ui/enhanced-hero-section";
import FeaturedCardsSection from "@/components/ui/featured-cards-section";
import TestimonialsSection from "@/components/ui/testimonials-section";
import CTASection from "@/components/ui/cta-section";
import { ServiceCard } from "@/components/ui/service-card";
import { Timeline } from "@/components/ui/timeline";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  GraduationCap, 
  Briefcase, 
  Plane, 
  Clock, 
  FileText, 
  Home as HomeIcon, 
  IdCard, 
  Rocket, 
  Play, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  TrendingUp,
  Users,
  Award,
  Shield,
  Globe,
  Code,
  Smartphone,
  Palette,
  BarChart3,
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  // Hero Section Slides
  const heroSlides = [
    {
      id: 1,
      title: "Your Gateway to",
      subtitle: "Global Dreams",
      description: "Navigate the complex world of visas with our expert guidance. From study abroad to business ventures, we make your international dreams a reality.",
      image: "/hero-1.jpg",
      gradient: "bg-gradient-to-r from-stellar-orange to-electric-blue",
      icon: <Globe className="h-8 w-8 text-white" />,
      stats: [
        { label: "Countries", value: "50+" },
        { label: "Success Rate", value: "95%" },
        { label: "Happy Clients", value: "10K+" }
      ]
    },
    {
      id: 2,
      title: "Expert IT Solutions",
      subtitle: "Digital Transformation",
      description: "Transform your business with cutting-edge technology solutions. From software development to cybersecurity, we drive your digital success.",
      image: "/hero-2.jpg",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue",
      icon: <Code className="h-8 w-8 text-white" />,
      stats: [
        { label: "Projects", value: "500+" },
        { label: "Technologies", value: "25+" },
        { label: "Team Size", value: "50+" }
      ]
    },
    {
      id: 3,
      title: "Study Abroad",
      subtitle: "Academic Excellence",
      description: "Achieve your academic dreams with expert study visa guidance and university application support from top global institutions.",
      image: "/hero-3.jpg",
      gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan",
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      stats: [
        { label: "Universities", value: "200+" },
        { label: "Students", value: "5K+" },
        { label: "Countries", value: "30+" }
      ]
    },
    {
      id: 4,
      title: "Business Growth",
      subtitle: "Global Expansion",
      description: "Expand your business globally with our comprehensive work and business visa services, investment guidance, and market entry strategies.",
      image: "/hero-4.jpg",
      gradient: "bg-gradient-to-r from-neon-cyan to-neon-purple",
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      stats: [
        { label: "Businesses", value: "1K+" },
        { label: "Markets", value: "40+" },
        { label: "Growth Rate", value: "200%" }
      ]
    }
  ];

  // Visa Services
  const visaServices = [
    {
      icon: <GraduationCap className="text-2xl text-white" />,
      title: "Study Abroad",
      description: "Achieve your academic dreams with expert study visa guidance and university application support.",
      benefits: ["University Selection", "Application Support", "Visa Processing"],
      buttonText: "Apply for Study Visa",
      gradient: "bg-gradient-to-r from-stellar-orange to-electric-blue"
    },
    {
      icon: <Briefcase className="text-2xl text-white" />,
      title: "Work & Business",
      description: "Professional opportunities await with our skilled worker and business investor visa services.",
      benefits: ["Work Permits", "Business Visas", "Investment Guidance"],
      buttonText: "Start Work Application",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Plane className="text-2xl text-white" />,
      title: "Travel & Tourism",
      description: "Explore the world with quick approval tourist visas for multiple destinations and family visits.",
      benefits: ["Tourist Visas", "Family Visits", "Multiple Destinations"],
      buttonText: "Apply for Tourist Visa",
      gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan"
    },
    {
      icon: <Clock className="text-2xl text-white" />,
      title: "Extensions",
      description: "Extend your stay without stress with our comprehensive renewal services for all visa types.",
      benefits: ["Visa Extensions", "Renewals", "Status Changes"],
      buttonText: "Request Extension",
      gradient: "bg-gradient-to-r from-neon-cyan to-neon-purple"
    },
    {
      icon: <FileText className="text-2xl text-white" />,
      title: "Documents",
      description: "Secure document authentication, embassy attestation, and translation support services.",
      benefits: ["Document Verification", "Embassy Attestation", "Translation Services"],
      buttonText: "Verify Documents",
      gradient: "bg-gradient-to-r from-electric-blue to-stellar-orange"
    },
    {
      icon: <HomeIcon className="text-2xl text-white" />,
      title: "Immigration",
      description: "Expert guidance for permanent residency, green card support, and citizenship applications.",
      benefits: ["Permanent Residency", "Green Card Support", "Citizenship Guidance"],
      buttonText: "Book Consultation",
      gradient: "bg-gradient-to-r from-neon-purple to-stellar-orange"
    }
  ];

  // IT Services
  const itServices = [
    {
      icon: <Code className="text-2xl text-white" />,
      title: "Software Development",
      description: "Custom software solutions including web applications, mobile apps, and enterprise software development.",
      benefits: ["Web Development", "Mobile Apps", "Enterprise Software"],
      buttonText: "Start Project",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      icon: <Smartphone className="text-2xl text-white" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS, Android, and React Native platforms.",
      benefits: ["iOS Development", "Android Development", "Cross-Platform"],
      buttonText: "Get Quote",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Palette className="text-2xl text-white" />,
      title: "UI/UX Design",
      description: "Create exceptional user experiences with our comprehensive design and user research services.",
      benefits: ["User Research", "Wireframing", "Prototyping"],
      buttonText: "Design Now",
      gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan"
    },
    {
      icon: <BarChart3 className="text-2xl text-white" />,
      title: "Data Analytics",
      description: "Unlock the power of your data with advanced analytics, business intelligence, and AI/ML solutions.",
      benefits: ["Data Engineering", "Business Intelligence", "AI/ML"],
      buttonText: "Analyze Data",
      gradient: "bg-gradient-to-r from-neon-cyan to-gold"
    },
    {
      icon: <ShieldIcon className="text-2xl text-white" />,
      title: "Cybersecurity",
      description: "Protect your business with comprehensive cybersecurity solutions and threat prevention services.",
      benefits: ["Threat Detection", "Compliance", "Security Operations"],
      buttonText: "Secure Now",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    },
    {
      icon: <TrendingUpIcon className="text-2xl text-white" />,
      title: "Digital Marketing",
      description: "Grow your online presence with strategic digital marketing, SEO, and performance marketing campaigns.",
      benefits: ["SEO & SEM", "Social Media", "Performance Marketing"],
      buttonText: "Boost Growth",
      gradient: "bg-gradient-to-r from-neon-purple to-stellar-orange"
    }
  ];

  // Featured Cards
  const featuredCards = [
    {
      id: 1,
      title: "Global Network",
      description: "Connect with our extensive network of partners across 50+ countries for seamless visa processing.",
      icon: <Globe className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan",
      badge: "Premium",
      features: ["50+ Countries", "Local Partners", "24/7 Support", "Fast Processing"],
      stats: [
        { label: "Countries", value: "50+" },
        { label: "Partners", value: "200+" }
      ]
    },
    {
      id: 2,
      title: "Expert Team",
      description: "Our certified immigration consultants and IT experts ensure your success with personalized guidance.",
      icon: <Users className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue",
      badge: "Certified",
      features: ["Certified Consultants", "10+ Years Experience", "Personalized Service", "Success Guarantee"],
      stats: [
        { label: "Experts", value: "25+" },
        { label: "Experience", value: "10+" }
      ]
    },
    {
      id: 3,
      title: "Technology Excellence",
      description: "Leverage cutting-edge technology solutions to transform your business and streamline operations.",
      icon: <Rocket className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan",
      badge: "Innovation",
      features: ["Latest Technologies", "Scalable Solutions", "Cloud Infrastructure", "AI Integration"],
      stats: [
        { label: "Technologies", value: "25+" },
        { label: "Projects", value: "500+" }
      ]
    }
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Student",
      company: "University of Toronto",
      avatar: "/avatars/sarah.jpg",
      content: "GuideItSol helped me secure my study visa in just 3 weeks! Their expert guidance made the entire process smooth and stress-free.",
      rating: 5,
      service: "Study Abroad Visa"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Engineer",
      company: "TechCorp Inc.",
      avatar: "/avatars/michael.jpg",
      content: "The IT consulting team delivered an exceptional software solution that transformed our business operations completely.",
      rating: 5,
      service: "Software Development"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Business Owner",
      company: "Global Ventures",
      avatar: "/avatars/emily.jpg",
      content: "Thanks to their business visa expertise, I successfully expanded my company to three new countries within a year.",
      rating: 5,
      service: "Business Visa"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Marketing Director",
      company: "Digital Solutions",
      avatar: "/avatars/david.jpg",
      content: "Their digital marketing strategies increased our online presence by 300% and generated significant ROI.",
      rating: 5,
      service: "Digital Marketing"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "HR Manager",
      company: "International Corp",
      avatar: "/avatars/lisa.jpg",
      content: "The team's expertise in work visas and immigration helped us hire top talent from around the world efficiently.",
      rating: 5,
      service: "Work Visa"
    },
    {
      id: 6,
      name: "Robert Wilson",
      role: "CEO",
      company: "StartupXYZ",
      avatar: "/avatars/robert.jpg",
      content: "GuideItSol's cybersecurity solutions protected our startup from potential threats and ensured compliance.",
      rating: 5,
      service: "Cybersecurity"
    }
  ];

  // Process Timeline
  const timelineSteps = [
    {
      number: 1,
      title: "Consultation",
      description: "Free initial consultation to understand your needs and create a personalized strategy.",
      gradient: "bg-gradient-to-r from-stellar-orange to-electric-blue"
    },
    {
      number: 2,
      title: "Documentation",
      description: "We help you prepare and verify all required documents for your specific requirements.",
      gradient: "bg-gradient-to-r from-neon-cyan to-neon-purple"
    },
    {
      number: 3,
      title: "Processing",
      description: "Track your application in real-time while we handle the complex processing details.",
      gradient: "bg-gradient-to-r from-neon-purple to-gold"
    },
    {
      number: 4,
      title: "Success",
      description: "Receive your approved application and begin your journey with confidence.",
      gradient: "bg-gradient-to-r from-stellar-orange to-electric-blue"
    }
  ];

  // FAQ Items
  const faqItems = [
    {
      question: "How long does the visa application process take?",
      answer: "Processing times vary by visa type and country. Study visas typically take 2-4 weeks, work visas 4-8 weeks, and tourist visas 1-2 weeks. We provide real-time tracking so you'll always know your application status."
    },
    {
      question: "What documents do I need for my application?",
      answer: "Required documents depend on your visa type. Generally, you'll need a valid passport, photos, financial proof, and specific documents like admission letters for study visas or job offers for work visas. We provide a personalized checklist for your application."
    },
    {
      question: "Do you guarantee visa approval?",
      answer: "While we cannot guarantee approval (as the final decision rests with embassy officials), our expert guidance and thorough preparation significantly increase your chances of success. We have a 95% approval rate across all visa types."
    },
    {
      question: "Can you help with visa extensions?",
      answer: "Yes! We offer comprehensive visa extension and renewal services for all visa types. Our team will assess your eligibility, prepare the necessary documentation, and guide you through the extension process."
    },
    {
      question: "What IT services do you offer?",
      answer: "We provide comprehensive IT solutions including software development, mobile app development, UI/UX design, data analytics, cybersecurity, and digital marketing. Our team uses cutting-edge technologies to deliver scalable and innovative solutions."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Absolutely! We offer comprehensive post-launch support including maintenance, updates, training, and 24/7 technical support to ensure your project continues to perform optimally."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Section 1: Enhanced Hero Section with 4 Sliders */}
      <EnhancedHeroSection
        slides={heroSlides}
        onPrimaryClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        onSecondaryClick={() => window.open('https://youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
      />

      {/* Section 2: Featured Cards */}
      <FeaturedCardsSection
        title="Why Choose GuideItSol"
        subtitle="Discover what makes us the preferred choice for visa services and IT solutions worldwide"
        cards={featuredCards}
      />

      {/* Section 3: Visa Services */}
      <section id="visa-services" className="py-20 relative bg-gradient-to-br from-dark-secondary/50 to-dark-tertiary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Visa Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive visa solutions for all your international travel and immigration needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaServices.map((service, index) => (
              <ServiceCard key={index} {...service} serviceType="visa" />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: IT Services */}
      <section id="it-services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">IT Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology solutions to transform your business and drive digital innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <ServiceCard key={index} {...service} serviceType="it" />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Process Timeline */}
      <section id="process" className="py-20 relative bg-gradient-to-br from-dark-secondary/50 to-dark-tertiary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow our streamlined 4-step process to turn your dreams into reality.
            </p>
          </div>
          
          <Timeline steps={timelineSteps} />
        </div>
      </section>

      {/* Section 6: Testimonials */}
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Real stories from satisfied clients who achieved their goals with GuideItSol"
        testimonials={testimonials}
      />

      {/* Section 7: FAQ */}
      <section className="py-20 relative bg-gradient-to-br from-dark-secondary/50 to-dark-tertiary/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to the most common questions about our services and processes.
            </p>
          </div>
          
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* Section 8: CTA Section */}
      <CTASection
        title="Ready to Start Your Journey?"
        subtitle="Join thousands of satisfied clients who have achieved their international dreams with GuideItSol"
        primaryAction={{
          text: "Book Free Consultation",
          onClick: () => {}
        }}
        secondaryAction={{
          text: "Get Started",
          onClick: () => {}
        }}
      />

      {/* Section 9: Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to make your international dreams come true? Get in touch with our expert team for a personalized consultation.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ContactForm />
            
            <div className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-lg flex items-center justify-center">
                      <Mail className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@guideitsol.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-electric-blue rounded-lg flex items-center justify-center">
                      <Mail className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-muted-foreground">info@guideitsol.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold to-neon-cyan rounded-lg flex items-center justify-center">
                      <MapPin className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">123 Innovation Drive, Tech District, NY 10001</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4 gradient-text">Office Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
