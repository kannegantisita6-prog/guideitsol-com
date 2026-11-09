import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { Timeline } from "@/components/ui/timeline";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";
import { Tag, Shield, Globe, FileCheck, Stamp, Languages, Award, Building } from "lucide-react";

const DocumentVerification = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-gold/20 rounded-3xl glass-card flex items-center justify-center">
        <Tag className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <Stamp className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-neon-purple to-gold rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Shield className="text-white" />
      </div>
    </div>
  );

  const verificationServices = [
    {
      icon: <FileCheck className="text-2xl text-white" />,
      title: "Document Authentication",
      description: "Authenticate your official documents with proper notarization and legal verification for international use.",
      benefits: ["Legal Notarization", "Official Verification", "International Recognition"],
      buttonText: "Authenticate Documents",
      gradient: "bg-gradient-to-r from-electric-blue to-gold"
    },
    {
      icon: <Stamp className="text-2xl text-white" />,
      title: "Embassy Attestation",
      description: "Complete embassy attestation services for educational, commercial, and personal documents.",
      benefits: ["Embassy Processing", "Apostille Services", "Government Recognition"],
      buttonText: "Get Embassy Attestation",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Languages className="text-2xl text-white" />,
      title: "Translation Support",
      description: "Professional translation services by certified translators for all your official documents.",
      benefits: ["Certified Translations", "Multiple Languages", "Official Acceptance"],
      buttonText: "Get Translation Services",
      gradient: "bg-gradient-to-r from-gold to-neon-cyan"
    }
  ];

  const timelineSteps = [
    {
      number: 1,
      title: "Submission",
      description: "Submit your documents for verification through our secure online portal or visit our office.",
      gradient: "bg-gradient-to-r from-electric-blue to-gold"
    },
    {
      number: 2,
      title: "Verification",
      description: "Our experts verify document authenticity and prepare them for attestation processes.",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    },
    {
      number: 3,
      title: "Attestation",
      description: "Process documents through relevant authorities, embassies, and government offices.",
      gradient: "bg-gradient-to-r from-neon-purple to-neon-cyan"
    },
    {
      number: 4,
      title: "Delivery",
      description: "Receive your verified and attested documents ready for international use.",
      gradient: "bg-gradient-to-r from-neon-cyan to-electric-blue"
    }
  ];

  const documentTypes = [
    {
      category: "Educational Documents",
      documents: ["Degree Certificates", "Transcripts", "Diplomas", "Academic Records", "Professional Certificates"],
      uses: ["Study Abroad", "Work Visas", "Professional Recognition"]
    },
    {
      category: "Business Documents",
      documents: ["Commercial Certificates", "Company Registration", "Financial Statements", "Trade Licenses", "MOUs"],
      uses: ["Business Expansion", "Investment Visas", "International Trade"]
    },
    {
      category: "Legal Documents",
      documents: ["Birth Certificates", "Marriage Certificates", "Police Clearance", "Court Orders", "Power of Attorney"],
      uses: ["Immigration", "Family Visas", "Legal Proceedings"]
    },
    {
      category: "Identity Documents",
      documents: ["Passport Copies", "National ID", "Driving License", "Voter ID", "Military Records"],
      uses: ["Visa Applications", "Work Authorization", "Identity Verification"]
    }
  ];

  const trustBadges = [
    {
      icon: <Shield className="text-2xl text-white" />,
      title: "Secure Processing",
      description: "Bank-level security for all document handling",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      icon: <Building className="text-2xl text-white" />,
      title: "Government Recognized",
      description: "Officially recognized by government authorities",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Award className="text-2xl text-white" />,
      title: "Certified Process",
      description: "ISO certified verification and attestation process",
      gradient: "bg-gradient-to-r from-gold to-neon-cyan"
    }
  ];

  const faqItems = [
    {
      question: "What is document attestation and why is it required?",
      answer: "Document attestation is the process of verifying the authenticity of documents by authorized government officials. It's required for international use to ensure documents are genuine and legally valid in foreign countries."
    },
    {
      question: "How long does the attestation process take?",
      answer: "Processing times vary by document type and destination country, typically ranging from 7-21 working days. Educational documents usually take longer than personal documents. We provide realistic timelines for each case."
    },
    {
      question: "Do you provide translation services for attested documents?",
      answer: "Yes, we offer certified translation services by qualified translators. Documents can be translated before or after attestation, depending on the requirements of the destination country."
    },
    {
      question: "Can I track the status of my document verification?",
      answer: "Absolutely! We provide a unique tracking number for each application. You can monitor your document's progress through our online portal and receive updates at each stage of the process."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Secure Document Verification &"
        subtitle="Professional Attestation"
        description="Authenticate your documents with confidence. Our government-recognized verification services ensure your documents are ready for international use with complete legal validity."
        primaryButtonText="Get Your Documents Verified"
        secondaryButtonText="Check Requirements"
        heroImage={heroImage}
      />

      {/* Verification Services */}
      <section className="py-20 relative" data-testid="services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Professional Verification Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive document verification and attestation services for all your international needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {verificationServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 relative" data-testid="process-timeline">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Verification Process Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process ensures quick and secure document verification and attestation.
            </p>
          </div>
          
          <Timeline steps={timelineSteps} />
        </div>
      </section>

      {/* Document Types */}
      <section className="py-20 relative" data-testid="document-types-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Supported Document Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We handle verification and attestation for all major document categories and types.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {documentTypes.map((type, index) => (
              <div key={index} className="glass-card rounded-2xl p-6" data-testid={`document-type-${index}`}>
                <h3 className="text-xl font-bold gradient-text mb-4">{type.category}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Document Types:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {type.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-2"></div>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Common Uses:</p>
                    <div className="flex flex-wrap gap-2">
                      {type.uses.map((use, idx) => (
                        <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded-lg">
                          {use}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 relative" data-testid="trust-badges-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Why Trust Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our verification services are backed by security, recognition, and certification.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center" data-testid={`trust-badge-${index}`}>
                <div className={`w-16 h-16 ${badge.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 neon-glow`}>
                  {badge.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 gradient-text">{badge.title}</h3>
                <p className="text-muted-foreground">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative" data-testid="faq-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Document Verification FAQ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about document verification and attestation services.
            </p>
          </div>
          
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Verify Your Documents?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact our document verification experts for secure and professional attestation services.
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

export default DocumentVerification;
