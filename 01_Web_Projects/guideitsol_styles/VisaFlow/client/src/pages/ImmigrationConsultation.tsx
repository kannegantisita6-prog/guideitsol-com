import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { Timeline } from "@/components/ui/timeline";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";
import { Users, Home, Flag, Calendar, FileText, Star, UserCheck, Globe } from "lucide-react";

const ImmigrationConsultation = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-gold/20 rounded-3xl glass-card flex items-center justify-center">
        <Users className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <Home className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-neon-purple to-gold rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Flag className="text-white" />
      </div>
    </div>
  );

  const consultationServices = [
    {
      icon: <Home className="text-2xl text-white" />,
      title: "PR Applications",
      description: "Expert guidance for permanent residency applications with comprehensive assessment and strategy development.",
      benefits: ["Eligibility Assessment", "Application Strategy", "Document Preparation"],
      buttonText: "Start PR Application",
      gradient: "bg-gradient-to-r from-neon-purple to-gold"
    },
    {
      icon: <Flag className="text-2xl text-white" />,
      title: "Green Card Support",
      description: "Complete support for US Green Card applications through family, employment, or investment pathways.",
      benefits: ["Pathway Analysis", "Priority Date Tracking", "Interview Preparation"],
      buttonText: "Apply for Green Card",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      icon: <UserCheck className="text-2xl text-white" />,
      title: "Citizenship Guidance",
      description: "Navigate the path to citizenship with expert guidance on naturalization and dual citizenship options.",
      benefits: ["Naturalization Process", "Citizenship Test Prep", "Dual Citizenship"],
      buttonText: "Pursue Citizenship",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    }
  ];

  const consultationProcess = [
    {
      number: 1,
      title: "Assessment",
      description: "Comprehensive evaluation of your immigration goals, background, and eligibility for various programs.",
      gradient: "bg-gradient-to-r from-neon-purple to-gold"
    },
    {
      number: 2,
      title: "Strategy",
      description: "Develop a personalized immigration strategy with timeline, requirements, and step-by-step plan.",
      gradient: "bg-gradient-to-r from-gold to-electric-blue"
    },
    {
      number: 3,
      title: "Application",
      description: "Execute your immigration plan with expert guidance, document preparation, and application submission.",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      number: 4,
      title: "Settlement",
      description: "Ongoing support for settlement, integration, and achieving your long-term immigration goals.",
      gradient: "bg-gradient-to-r from-neon-cyan to-neon-purple"
    }
  ];

  const immigrationPrograms = [
    {
      country: "Canada",
      programs: ["Express Entry", "Provincial Nominee Program", "Quebec Immigration", "Family Sponsorship"],
      processing: "6-12 months",
      points: "Comprehensive Ranking System"
    },
    {
      country: "Australia",
      programs: ["SkillSelect", "Regional Sponsored Migration", "Business Innovation", "Partner Visa"],
      processing: "8-15 months",
      points: "Points-based Assessment"
    },
    {
      country: "United States",
      programs: ["EB-1 to EB-5", "Family-based Immigration", "Diversity Lottery", "Asylum"],
      processing: "1-5+ years",
      points: "Priority Date System"
    },
    {
      country: "United Kingdom",
      programs: ["Skilled Worker", "Global Talent", "Innovator Founder", "Family Visa"],
      processing: "3-8 months",
      points: "Points-based System"
    }
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      country: "Brazil → Canada",
      program: "Express Entry",
      quote: "The expert guidance made my Canadian PR application seamless. I received my invitation in just 6 months!",
      rating: 5
    },
    {
      name: "David Kim",
      country: "South Korea → Australia",
      program: "Skilled Migration",
      quote: "Professional advice helped me navigate the complex points system and secure my Australian PR successfully.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      country: "Egypt → United States",
      program: "Green Card",
      quote: "From initial consultation to Green Card approval, the support was exceptional throughout the entire process.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How do I know which immigration program is right for me?",
      answer: "Our comprehensive assessment evaluates your education, work experience, language skills, age, and personal circumstances to recommend the best immigration pathways. We consider processing times, success rates, and your long-term goals."
    },
    {
      question: "What is included in the immigration consultation?",
      answer: "Our consultation includes eligibility assessment, program recommendations, timeline planning, document checklist, cost breakdown, and a personalized immigration strategy. We also provide ongoing support throughout the application process."
    },
    {
      question: "How long does the immigration process typically take?",
      answer: "Immigration timelines vary significantly by country and program, ranging from 6 months to several years. We provide realistic timelines based on current processing times and help you plan accordingly."
    },
    {
      question: "Can you help with both temporary and permanent immigration?",
      answer: "Yes, we assist with both temporary visas (work, study, business) and permanent immigration (PR, Green Card, citizenship). We often develop strategies that use temporary visas as stepping stones to permanent residency."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Expert Guidance for"
        subtitle="Permanent Residency & Immigration Success"
        description="Navigate complex immigration pathways with confidence. Our expert consultants provide personalized guidance for permanent residency, Green Cards, and citizenship applications worldwide."
        primaryButtonText="Book a Free Consultation"
        secondaryButtonText="View Success Stories"
        heroImage={heroImage}
      />

      {/* Consultation Services */}
      <section className="py-20 relative" data-testid="services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Immigration Consultation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive immigration services to help you achieve your permanent residency and citizenship goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {consultationServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 relative" data-testid="process-timeline">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Consultation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to help you achieve your immigration goals with expert guidance at every step.
            </p>
          </div>
          
          <Timeline steps={consultationProcess} />
        </div>
      </section>

      {/* Immigration Programs */}
      <section className="py-20 relative" data-testid="programs-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Popular Immigration Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore immigration opportunities in top destination countries with our expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {immigrationPrograms.map((program, index) => (
              <div key={index} className="glass-card rounded-2xl p-6" data-testid={`program-${index}`}>
                <h3 className="text-xl font-bold gradient-text mb-4">{program.country}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Available Programs:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {program.programs.map((prog, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-2"></div>
                          {prog}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Processing:</p>
                      <p className="text-muted-foreground">{program.processing}</p>
                    </div>
                    <div>
                      <p className="font-semibold">System:</p>
                      <p className="text-muted-foreground">{program.points}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 relative" data-testid="testimonials-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Read about successful immigrants who achieved their dreams with our expert consultation services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card rounded-2xl p-6" data-testid={`testimonial-${index}`}>
                <div className="mb-4">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <h3 className="text-lg font-bold gradient-text">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.country} • {testimonial.program}</p>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative" data-testid="faq-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Immigration Consultation FAQ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about immigration consultation and permanent residency applications.
            </p>
          </div>
          
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Start Your Immigration Journey?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Book your free consultation today and take the first step toward your permanent residency goals.
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

export default ImmigrationConsultation;
