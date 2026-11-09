import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  Code, 
  Lightbulb, 
  Building, 
  Cloud, 
  Cpu, 
  Globe, 
  Users, 
  Target, 
  TrendingUp,
  Zap,
  Settings,
  Database
} from "lucide-react";

const ITConsulting = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 rounded-3xl glass-card flex items-center justify-center">
        <Code className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-gold rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <Lightbulb className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-neon-purple to-stellar-orange rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Building className="text-white" />
      </div>
    </div>
  );

  const consultingServices = [
    {
      icon: <Zap className="text-2xl text-white" />,
      title: "Digital Transformation",
      description: "Modernize your business processes and technology infrastructure to stay competitive in the digital age.",
      benefits: ["Process Automation", "Legacy System Modernization", "Digital Strategy Planning", "Change Management"],
      buttonText: "Start Digital Transformation",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      icon: <Building className="text-2xl text-white" />,
      title: "Enterprise Architecture",
      description: "Design scalable and robust enterprise architecture solutions that align with your business objectives.",
      benefits: ["System Architecture Design", "Technology Roadmapping", "Integration Planning", "Scalability Assessment"],
      buttonText: "Design Your Architecture",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Cloud className="text-2xl text-white" />,
      title: "Cloud & DevOps Consulting",
      description: "Accelerate your cloud adoption and implement DevOps practices for faster, more reliable software delivery.",
      benefits: ["Cloud Migration Strategy", "DevOps Implementation", "CI/CD Pipeline Setup", "Infrastructure as Code"],
      buttonText: "Optimize Your Operations",
      gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan"
    }
  ];

  const additionalServices = [
    {
      icon: <Target className="text-2xl text-white" />,
      title: "IT Strategy & Planning",
      description: "Develop comprehensive IT strategies that drive business growth and operational efficiency.",
      benefits: ["Strategic Planning", "Technology Assessment", "Budget Optimization", "Risk Management"],
      buttonText: "Plan Your IT Strategy",
      gradient: "bg-gradient-to-r from-neon-cyan to-gold"
    },
    {
      icon: <Users className="text-2xl text-white" />,
      title: "Technology Leadership",
      description: "Provide interim CTO services and technology leadership to guide your digital initiatives.",
      benefits: ["Interim CTO Services", "Team Leadership", "Technical Mentoring", "Project Management"],
      buttonText: "Get Technology Leadership",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    },
    {
      icon: <Database className="text-2xl text-white" />,
      title: "Data Architecture",
      description: "Design and implement robust data architectures that support analytics and business intelligence.",
      benefits: ["Data Modeling", "Database Design", "Data Governance", "Analytics Infrastructure"],
      buttonText: "Architect Your Data",
      gradient: "bg-gradient-to-r from-neon-purple to-stellar-orange"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="IT Consulting & Strategy"
        subtitle="Transform Your Business with Expert Technology Consulting"
        description="Drive digital transformation and optimize your technology infrastructure with our comprehensive IT consulting services. From enterprise architecture to cloud migration, we help businesses leverage technology for competitive advantage."
        primaryButtonText="Get IT Consultation"
        secondaryButtonText="Schedule Strategy Session"
        heroImage={heroImage}
      />

      {/* Core Consulting Services */}
      <section className="py-20 relative" data-testid="core-consulting-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Core Consulting Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our flagship consulting services designed to transform your business through strategic technology implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative" data-testid="additional-services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Additional IT Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology services to support your digital transformation journey and ongoing IT needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Consulting */}
      <section className="py-20 relative" data-testid="why-choose-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Why Choose Our IT Consulting?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with experienced technology consultants who understand both business strategy and technical implementation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center glass-card p-6 rounded-xl">
              <TrendingUp className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-muted-foreground">Track record of successful digital transformations across industries</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Cpu className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
              <p className="text-muted-foreground">Deep knowledge of modern technologies and best practices</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Globe className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Experience</h3>
              <p className="text-muted-foreground">Experience working with companies of all sizes worldwide</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Settings className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
              <p className="text-muted-foreground">Customized strategies that fit your unique business needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how our IT consulting services can help you achieve your digital transformation goals and drive business growth.
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

export default ITConsulting;