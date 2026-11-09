import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  Code, 
  Smartphone, 
  Globe, 
  Layers, 
  Zap, 
  Shield, 
  Users, 
  Target, 
  Database,
  Cpu,
  Settings,
  CheckCircle
} from "lucide-react";

const SoftwareDevelopment = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 rounded-3xl glass-card flex items-center justify-center">
        <Code className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <Smartphone className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-stellar-orange to-gold rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Globe className="text-white" />
      </div>
    </div>
  );

  const developmentServices = [
    {
      icon: <Globe className="text-2xl text-white" />,
      title: "Web Application Development",
      description: "Build modern, scalable web applications using cutting-edge technologies and frameworks.",
      benefits: ["React/Next.js Development", "Node.js Backend Services", "Progressive Web Apps", "E-commerce Solutions"],
      buttonText: "Start Web Project",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Smartphone className="text-2xl text-white" />,
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications for iOS, Android, Flutter, and React Native.",
      benefits: ["iOS Native Development", "Android Native Development", "Flutter Cross-Platform", "React Native Apps"],
      buttonText: "Build Mobile App",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      icon: <Layers className="text-2xl text-white" />,
      title: "Custom Software Solutions",
      description: "Develop tailored software solutions that perfectly match your unique business requirements.",
      benefits: ["Enterprise Software", "API Development", "System Integration", "Legacy Modernization"],
      buttonText: "Get Custom Solution",
      gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan"
    }
  ];

  const additionalServices = [
    {
      icon: <Database className="text-2xl text-white" />,
      title: "Backend Development",
      description: "Robust server-side solutions with scalable architecture and secure data management.",
      benefits: ["RESTful APIs", "GraphQL Services", "Microservices Architecture", "Database Design"],
      buttonText: "Build Backend",
      gradient: "bg-gradient-to-r from-neon-cyan to-gold"
    },
    {
      icon: <Zap className="text-2xl text-white" />,
      title: "Full-Stack Development",
      description: "End-to-end development services covering both frontend and backend technologies.",
      benefits: ["MEAN/MERN Stack", "Full-Stack Architecture", "DevOps Integration", "Performance Optimization"],
      buttonText: "Go Full-Stack",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    },
    {
      icon: <Shield className="text-2xl text-white" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality assurance to ensure reliable, bug-free software.",
      benefits: ["Automated Testing", "Manual QA Testing", "Performance Testing", "Security Testing"],
      buttonText: "Ensure Quality",
      gradient: "bg-gradient-to-r from-neon-purple to-stellar-orange"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="Software Development"
        subtitle="Custom Software Solutions for Modern Businesses"
        description="Transform your ideas into powerful software applications with our expert development team. From web and mobile apps to enterprise solutions, we deliver high-quality, scalable software that drives business growth."
        primaryButtonText="Start Development Project"
        secondaryButtonText="View Our Portfolio"
        heroImage={heroImage}
      />

      {/* Core Development Services */}
      <section className="py-20 relative" data-testid="core-development-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Development Specializations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core development services cover the full spectrum of modern software development needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative" data-testid="additional-services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Complete Development Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive development services to support your entire software development lifecycle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative" data-testid="technology-stack-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with the latest technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center glass-card p-6 rounded-xl">
              <Code className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground">React, Next.js, Vue.js, Angular, TypeScript</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Database className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-muted-foreground">Node.js, Python, Java, .NET, PHP</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Smartphone className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile</h3>
              <p className="text-muted-foreground">React Native, Flutter, iOS, Android</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Settings className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">DevOps</h3>
              <p className="text-muted-foreground">AWS, Docker, Kubernetes, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 relative" data-testid="development-process-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Development Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center glass-card p-6 rounded-xl">
              <Target className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-muted-foreground">Understanding requirements and defining project scope</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Layers className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-muted-foreground">Creating architecture and user experience designs</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Cpu className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground">Agile development with regular progress updates</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <CheckCircle className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Delivery</h3>
              <p className="text-muted-foreground">Testing, deployment, and ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Build Your Software?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss your software development needs and create a solution that drives your business forward.
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

export default SoftwareDevelopment;