import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  Code, 
  Smartphone, 
  Palette, 
  BarChart3, 
  Shield, 
  TrendingUp,
  Cloud,
  Cpu,
  Globe,
  Users,
  Search,
  Target,
  GraduationCap,
  Briefcase,
  Plane,
  Clock,
  FileText,
  Home
} from "lucide-react";

const Services = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 rounded-3xl glass-card flex items-center justify-center">
        <Code className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-gold rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <Smartphone className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-neon-purple to-stellar-orange rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Shield className="text-white" />
      </div>
    </div>
  );

  const itServices = [
    {
      icon: <Code className="text-2xl text-white" />,
      title: "IT Consulting & Strategy",
      description: "Transform your business with expert IT consulting, digital transformation, and enterprise architecture solutions.",
      benefits: ["Digital Transformation", "Enterprise Architecture", "Cloud & DevOps Consulting"],
      buttonText: "Get IT Consultation",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      icon: <Smartphone className="text-2xl text-white" />,
      title: "Software Development",
      description: "Custom software solutions including web applications, mobile apps, and enterprise software development.",
      benefits: ["Web Application Development", "Mobile App Development (iOS, Android, Flutter, React Native)", "Custom Software Solutions"],
      buttonText: "Start Development Project",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Palette className="text-2xl text-white" />,
      title: "UI/UX Design",
      description: "Create exceptional user experiences with our comprehensive design and user research services.",
      benefits: ["User Research & Wireframing", "Prototyping & Usability Testing", "Product Design & Branding"],
      buttonText: "Design Your Product",
      gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan"
    },
    {
      icon: <BarChart3 className="text-2xl text-white" />,
      title: "Data & Analytics",
      description: "Unlock the power of your data with advanced analytics, business intelligence, and AI/ML solutions.",
      benefits: ["Data Engineering", "Business Intelligence & Reporting", "AI/ML & Generative AI Solutions"],
      buttonText: "Analyze Your Data",
      gradient: "bg-gradient-to-r from-neon-cyan to-gold"
    },
    {
      icon: <Shield className="text-2xl text-white" />,
      title: "Cybersecurity Services",
      description: "Protect your business with comprehensive cybersecurity solutions and threat prevention services.",
      benefits: ["Threat Detection & Prevention", "Compliance & Risk Assessment", "Security Operations Center (SOC)"],
      buttonText: "Secure Your Business",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    },
    {
      icon: <TrendingUp className="text-2xl text-white" />,
      title: "Digital Marketing",
      description: "Grow your online presence with strategic digital marketing, SEO, and performance marketing campaigns.",
      benefits: ["SEO & SEM", "Social Media Marketing", "Performance Marketing & Campaigns"],
      buttonText: "Boost Your Marketing",
      gradient: "bg-gradient-to-r from-neon-purple to-stellar-orange"
    }
  ];

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
      icon: <Home className="text-2xl text-white" />,
      title: "Immigration",
      description: "Expert guidance for permanent residency, green card support, and citizenship applications.",
      benefits: ["Permanent Residency", "Green Card Support", "Citizenship Guidance"],
      buttonText: "Book Consultation",
      gradient: "bg-gradient-to-r from-neon-purple to-stellar-orange"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Comprehensive Solutions for"
        subtitle="Technology & Immigration Services"
        description="From cutting-edge IT consulting and software development to expert visa and immigration services, we provide end-to-end solutions for your business and personal journey."
        primaryButtonText="Explore Our Services"
        secondaryButtonText="Get Free Consultation"
        heroImage={heroImage}
      />

      {/* IT Services Section */}
      <section className="py-20 relative" data-testid="it-services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">IT Consulting & Technology Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your business with our comprehensive IT consulting, software development, and digital transformation services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Visa Services Section */}
      <section className="py-20 relative" data-testid="visa-services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Visa & Immigration Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Navigate your international journey with our expert visa and immigration services for study, work, travel, and permanent residency.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visaServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact us today to discuss your technology or immigration needs. Our expert team is ready to help you achieve your goals.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;