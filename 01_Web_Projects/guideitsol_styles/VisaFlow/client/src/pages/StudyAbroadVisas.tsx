import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { Timeline } from "@/components/ui/timeline";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";
import { GraduationCap, BookOpen, Globe, Award, FileText, Users, CheckCircle } from "lucide-react";

const StudyAbroadVisas = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/20 to-neon-purple/20 rounded-3xl glass-card flex items-center justify-center">
        <div className="flex items-center justify-center space-x-8">
          <GraduationCap className="text-8xl gradient-text" />
          <img src="/src/assets/praveen.png" alt="Praveen" className="w-24 h-24" />
        </div>
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <BookOpen className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-neon-purple to-gold rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Globe className="text-white" />
      </div>
    </div>
  );

  const benefits = [
    {
      icon: <Award className="text-2xl text-white" />,
      title: "Top Universities Access",
      description: "Get admission to prestigious universities worldwide with our expert guidance and proven track record.",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      icon: <CheckCircle className="text-2xl text-white" />,
      title: "Smooth Process",
      description: "Navigate the complex application process with ease using our streamlined approach and expert support.",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Users className="text-2xl text-white" />,
      title: "Visa Approval Support",
      description: "Maximize your chances of visa approval with our comprehensive preparation and documentation assistance.",
      gradient: "bg-gradient-to-r from-gold to-neon-cyan"
    }
  ];

  const timelineSteps = [
    {
      number: 1,
      title: "Application",
      description: "Submit your study abroad application with our comprehensive guidance and support.",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      number: 2,
      title: "Admission",
      description: "Secure admission to your desired university with our proven strategies and expert assistance.",
      gradient: "bg-gradient-to-r from-neon-cyan to-neon-purple"
    },
    {
      number: 3,
      title: "Visa",
      description: "Complete the visa application process with our step-by-step guidance and documentation support.",
      gradient: "bg-gradient-to-r from-neon-purple to-gold"
    },
    {
      number: 4,
      title: "Travel",
      description: "Begin your educational journey abroad with confidence and comprehensive pre-departure support.",
      gradient: "bg-gradient-to-r from-gold to-electric-blue"
    }
  ];

  const requiredDocuments = [
    "Valid Passport",
    "Academic Transcripts",
    "English Proficiency Test Scores (IELTS/TOEFL)",
    "Statement of Purpose",
    "Letters of Recommendation",
    "Financial Proof",
    "University Admission Letter",
    "Passport-sized Photographs",
    "Medical Certificate",
    "Police Clearance Certificate"
  ];

  const faqItems = [
    {
      question: "What are the minimum requirements for a study abroad visa?",
      answer: "Requirements vary by country, but generally include a valid passport, admission letter from a recognized institution, proof of financial support, English proficiency scores, and medical clearance. We'll provide you with a complete checklist based on your destination."
    },
    {
      question: "How long does the study visa process take?",
      answer: "The process typically takes 4-8 weeks from application submission to visa approval, depending on the country and time of year. We recommend starting the process at least 3-4 months before your intended start date."
    },
    {
      question: "Can I work while studying abroad?",
      answer: "Most countries allow international students to work part-time (usually 20 hours per week) during studies and full-time during breaks. Work regulations vary by country, and we'll provide detailed information for your destination."
    },
    {
      question: "What if my visa application is rejected?",
      answer: "While our success rate is over 95%, if a visa is rejected, we'll analyze the reasons and help you reapply. We provide comprehensive support throughout the appeal or reapplication process at no additional cost."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Achieve Your Dreams with"
        subtitle="Study Abroad Visas"
        description="Open doors to world-class education with our expert study visa guidance. Access top universities, smooth application processes, and comprehensive visa approval support."
        primaryButtonText="Apply for Study Visa"
        secondaryButtonText="Download Guide"
        heroImage={heroImage}
      />

      {/* Key Benefits */}
      <section className="py-20 relative" data-testid="benefits-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Why Choose Our Study Visa Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the advantages of working with education visa specialists who understand the intricacies of international admissions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ServiceCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                benefits={[]}
                buttonText="Learn More"
                gradient={benefit.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 relative" data-testid="process-timeline">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Study Visa Process Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow our proven 4-step process to secure your study visa and begin your educational journey abroad.
            </p>
          </div>
          
          <Timeline steps={timelineSteps} />
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 relative" data-testid="documents-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Required Documents Checklist</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ensure you have all necessary documents for a successful study visa application.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`document-${index}`}>
                    <div className="w-6 h-6 bg-gradient-to-r from-electric-blue to-neon-cyan rounded-full flex items-center justify-center flex-shrink-0">
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
              Get answers to common questions about study abroad visas and the application process.
            </p>
          </div>
          
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Start Your Educational Journey?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact our study visa experts today for personalized guidance and support.
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

export default StudyAbroadVisas;
