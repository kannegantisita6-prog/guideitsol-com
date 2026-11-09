import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  Palette, 
  Users, 
  Eye, 
  Layers, 
  Zap, 
  Target, 
  Lightbulb, 
  Heart, 
  Smartphone,
  Monitor,
  Figma,
  Brush
} from "lucide-react";

const UIUXDesign = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-stellar-orange/20 to-neon-cyan/20 rounded-3xl glass-card flex items-center justify-center">
        <Palette className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <Eye className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-neon-purple to-gold rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Heart className="text-white" />
      </div>
    </div>
  );

  const designServices = [
    {
      icon: <Users className="text-2xl text-white" />,
      title: "User Research & Wireframing",
      description: "Deep dive into user behavior and create detailed wireframes that form the foundation of great design.",
      benefits: ["User Interviews & Surveys", "Persona Development", "Journey Mapping", "Information Architecture"],
      buttonText: "Start User Research",
      gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan"
    },
    {
      icon: <Zap className="text-2xl text-white" />,
      title: "Prototyping & Usability Testing",
      description: "Build interactive prototypes and validate designs through comprehensive usability testing.",
      benefits: ["Interactive Prototypes", "Usability Testing", "A/B Testing", "Design Validation"],
      buttonText: "Create Prototype",
      gradient: "bg-gradient-to-r from-neon-cyan to-electric-blue"
    },
    {
      icon: <Brush className="text-2xl text-white" />,
      title: "Product Design & Branding",
      description: "Complete product design solutions with cohesive branding that resonates with your target audience.",
      benefits: ["Visual Identity Design", "Brand Guidelines", "Product Design Systems", "Marketing Materials"],
      buttonText: "Design Your Brand",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-purple"
    }
  ];

  const additionalServices = [
    {
      icon: <Smartphone className="text-2xl text-white" />,
      title: "Mobile UI Design",
      description: "Intuitive mobile interfaces optimized for touch interactions and various screen sizes.",
      benefits: ["iOS Design Guidelines", "Android Material Design", "Responsive Mobile UI", "Touch Optimization"],
      buttonText: "Design Mobile UI",
      gradient: "bg-gradient-to-r from-neon-purple to-stellar-orange"
    },
    {
      icon: <Monitor className="text-2xl text-white" />,
      title: "Web UI Design",
      description: "Modern web interfaces that provide exceptional user experiences across all devices.",
      benefits: ["Responsive Web Design", "Progressive Web Apps", "Dashboard Design", "E-commerce UI"],
      buttonText: "Design Web Interface",
      gradient: "bg-gradient-to-r from-stellar-orange to-gold"
    },
    {
      icon: <Layers className="text-2xl text-white" />,
      title: "Design Systems",
      description: "Scalable design systems that ensure consistency and efficiency across all products.",
      benefits: ["Component Libraries", "Style Guides", "Design Tokens", "Documentation"],
      buttonText: "Build Design System",
      gradient: "bg-gradient-to-r from-gold to-neon-cyan"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="UI/UX Design"
        subtitle="Create Exceptional User Experiences"
        description="Transform your digital products with user-centered design that delights customers and drives business results. Our comprehensive design services cover everything from user research to final implementation."
        primaryButtonText="Start Design Project"
        secondaryButtonText="View Design Portfolio"
        heroImage={heroImage}
      />

      {/* Core Design Services */}
      <section className="py-20 relative" data-testid="core-design-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Design Process Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive design process ensures every product we create is both beautiful and functional.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative" data-testid="additional-services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Specialized Design Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored design solutions for specific platforms and use cases to maximize user engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 relative" data-testid="design-philosophy-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Design Philosophy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe great design is the perfect balance of aesthetics, functionality, and user needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center glass-card p-6 rounded-xl">
              <Users className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">User-Centered</h3>
              <p className="text-muted-foreground">Every design decision is based on user research and feedback</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Eye className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visual Excellence</h3>
              <p className="text-muted-foreground">Beautiful interfaces that create emotional connections</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Zap className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground">Fast, responsive designs optimized for all devices</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Target className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Goal-Oriented</h3>
              <p className="text-muted-foreground">Designs that drive conversions and business objectives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Tools & Process */}
      <section className="py-20 relative" data-testid="tools-process-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Tools & Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use industry-leading tools and follow proven methodologies to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Design Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Figma className="text-neon-cyan" />
                  <span>Figma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="text-electric-blue" />
                  <span>Adobe Creative Suite</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Layers className="text-stellar-orange" />
                  <span>Sketch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="text-neon-purple" />
                  <span>Principle</span>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 gradient-text">Design Process</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full flex items-center justify-center text-white font-semibold">1</div>
                  <span>Research & Discovery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-electric-blue to-neon-purple rounded-full flex items-center justify-center text-white font-semibold">2</div>
                  <span>Ideation & Wireframing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-stellar-orange rounded-full flex items-center justify-center text-white font-semibold">3</div>
                  <span>Visual Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-stellar-orange to-neon-cyan rounded-full flex items-center justify-center text-white font-semibold">4</div>
                  <span>Prototyping & Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Create Amazing Designs?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's collaborate to create user experiences that your customers will love and that drive your business success.
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

export default UIUXDesign;