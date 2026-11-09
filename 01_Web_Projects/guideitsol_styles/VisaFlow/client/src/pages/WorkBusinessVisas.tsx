import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { Timeline } from "@/components/ui/timeline";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";
import { Briefcase, TrendingUp, HandHeart, Award, FileText, Building, UserCheck, DollarSign } from "lucide-react";

const WorkBusinessVisas = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-electric-blue/20 rounded-3xl glass-card flex items-center justify-center">
        <Briefcase className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <TrendingUp className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-neon-purple to-gold rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Building className="text-white" />
      </div>
    </div>
  );

  const services = [
    {
      icon: <UserCheck className="text-2xl text-white" />,
      title: "Skilled Worker Visas",
      description: "Navigate the skilled worker visa process with expert guidance for in-demand professions and specialized skills.",
      benefits: ["Skills Assessment", "Job Matching", "Application Support"],
      buttonText: "Apply for Skilled Visa",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <DollarSign className="text-2xl text-white" />,
      title: "Business/Investor Visas",
      description: "Establish your business or invest internationally with our comprehensive business visa services.",
      benefits: ["Investment Planning", "Business Setup", "Legal Compliance"],
      buttonText: "Start Business Application",
      gradient: "bg-gradient-to-r from-electric-blue to-gold"
    }
  ];

  const timelineSteps = [
    {
      number: 1,
      title: "Job Offer / Business Plan",
      description: "Secure a job offer from a sponsoring employer or develop a comprehensive business plan.",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      number: 2,
      title: "Documentation",
      description: "Prepare all required documents including work contracts, financial proof, and credentials.",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      number: 3,
      title: "Visa Application",
      description: "Submit your visa application with our expert guidance and comprehensive support.",
      gradient: "bg-gradient-to-r from-neon-cyan to-gold"
    },
    {
      number: 4,
      title: "Approval & Relocation",
      description: "Receive visa approval and begin your professional journey with our relocation support.",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    }
  ];

  const requiredDocuments = [
    "Valid Passport",
    "Job Offer Letter / Business Plan",
    "Educational Certificates",
    "Professional Certifications",
    "Work Experience Letters",
    "Financial Statements",
    "Medical Examination",
    "Police Clearance Certificate",
    "Invitation Letter (if applicable)",
    "Bank Statements",
    "Tax Returns",
    "Business Registration Documents"
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      profession: "Software Engineer",
      country: "Canada",
      story: "Successfully obtained a skilled worker visa and now leads a development team at a top tech company in Toronto."
    },
    {
      name: "Marcus Rodriguez",
      profession: "Business Investor",
      country: "Australia",
      story: "Established a successful restaurant chain across Melbourne with our business investor visa guidance."
    },
    {
      name: "Dr. Priya Patel",
      profession: "Medical Professional",
      country: "United Kingdom",
      story: "Secured a medical visa and now practices as a consultant physician in London's leading hospital."
    }
  ];

  const faqItems = [
    {
      question: "What are the requirements for a skilled worker visa?",
      answer: "Requirements typically include a job offer from an approved sponsor, meeting English language requirements, having the necessary skills and qualifications for the role, and meeting salary thresholds. Each country has specific criteria we'll help you understand."
    },
    {
      question: "How much investment is required for a business visa?",
      answer: "Investment requirements vary significantly by country and visa type, ranging from $50,000 to $500,000 or more. We'll help you determine the best investment route based on your budget and business goals."
    },
    {
      question: "Can my family accompany me on a work visa?",
      answer: "Most work visas allow you to include spouse and dependent children in your application. Family members may also be eligible for work or study rights depending on the visa category and country."
    },
    {
      question: "How long does the work visa process take?",
      answer: "Processing times vary from 3-12 months depending on the visa type, country, and individual circumstances. We provide realistic timelines and keep you updated throughout the process."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Advance Your Career with"
        subtitle="Work & Business Visas"
        description="Unlock professional opportunities worldwide with our expert work and business visa services. From skilled worker visas to business investor programs, we guide you to success."
        primaryButtonText="Start Your Application"
        secondaryButtonText="View Success Stories"
        heroImage={heroImage}
      />

      {/* Services */}
      <section className="py-20 relative" data-testid="services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Professional Visa Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the visa category that best fits your professional goals and business objectives.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 relative" data-testid="process-timeline">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow our structured approach to secure your work or business visa efficiently.
            </p>
          </div>
          
          <Timeline steps={timelineSteps} />
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 relative" data-testid="success-stories">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Read about professionals who achieved their career goals with our visa services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="glass-card rounded-2xl p-6" data-testid={`success-story-${index}`}>
                <div className="mb-4">
                  <h3 className="text-xl font-bold gradient-text">{story.name}</h3>
                  <p className="text-sm text-muted-foreground">{story.profession} • {story.country}</p>
                </div>
                <p className="text-muted-foreground">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 relative" data-testid="documents-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Required Documents</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive list of documents needed for work and business visa applications.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`document-${index}`}>
                    <div className="w-6 h-6 bg-gradient-to-r from-neon-purple to-electric-blue rounded-full flex items-center justify-center flex-shrink-0">
                      <FileText className="text-white w-3 h-3" />
                    </div>
                    <span className="text-foreground">{document}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative" data-testid="faq-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about work and business visas.
            </p>
          </div>
          
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Advance Your Career?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact our work visa specialists for personalized guidance on your professional journey.
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

export default WorkBusinessVisas;
