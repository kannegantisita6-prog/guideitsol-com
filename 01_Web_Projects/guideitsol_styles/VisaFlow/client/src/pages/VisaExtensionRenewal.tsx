import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { Timeline } from "@/components/ui/timeline";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";
import { Clock, RefreshCw, CheckCircle, AlertCircle, FileText, GraduationCap, Briefcase, Plane } from "lucide-react";

const VisaExtensionRenewal = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-3xl glass-card flex items-center justify-center">
        <Clock className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <RefreshCw className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-neon-purple to-gold rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <CheckCircle className="text-white" />
      </div>
    </div>
  );

  const extensionTypes = [
    {
      icon: <GraduationCap className="text-2xl text-white" />,
      title: "Student Visa Extensions",
      description: "Extend your study period to complete your education or pursue additional qualifications without interruption.",
      benefits: ["Academic Continuity", "Course Completion", "Research Extensions"],
      buttonText: "Extend Student Visa",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    {
      icon: <Briefcase className="text-2xl text-white" />,
      title: "Work Visa Renewals",
      description: "Renew your work authorization to continue your professional journey and career advancement.",
      benefits: ["Employment Continuity", "Career Progression", "Skill Development"],
      buttonText: "Renew Work Visa",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Plane className="text-2xl text-white" />,
      title: "Tourist Visa Extensions",
      description: "Extend your stay for additional travel, family visits, or unexpected circumstances.",
      benefits: ["Extended Stay", "Family Time", "Emergency Support"],
      buttonText: "Extend Tourist Visa",
      gradient: "bg-gradient-to-r from-gold to-neon-cyan"
    }
  ];

  const timelineSteps = [
    {
      number: 1,
      title: "Current Visa Check",
      description: "Review your current visa status, expiration date, and eligibility for extension or renewal.",
      gradient: "bg-gradient-to-r from-neon-cyan to-neon-purple"
    },
    {
      number: 2,
      title: "Renewal Application",
      description: "Prepare and submit your extension application with updated documentation and requirements.",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      number: 3,
      title: "Processing & Review",
      description: "Track your application status while immigration authorities review your extension request.",
      gradient: "bg-gradient-to-r from-electric-blue to-gold"
    },
    {
      number: 4,
      title: "Approval & Continuation",
      description: "Receive your extended visa authorization and continue your stay with peace of mind.",
      gradient: "bg-gradient-to-r from-gold to-neon-cyan"
    }
  ];

  const renewalOptions = [
    {
      type: "Student Extensions",
      reasons: ["Course completion", "Additional studies", "Research projects", "Academic delays"],
      duration: "Up to program completion",
      processing: "2-6 weeks"
    },
    {
      type: "Work Renewals",
      reasons: ["Contract extension", "Career advancement", "Skill development", "Employer sponsorship"],
      duration: "1-5 years",
      processing: "4-8 weeks"
    },
    {
      type: "Tourist Extensions",
      reasons: ["Medical treatment", "Family emergency", "Travel delays", "Extended vacation"],
      duration: "Up to 6 months",
      processing: "2-4 weeks"
    },
    {
      type: "Business Extensions",
      reasons: ["Project completion", "Investment opportunities", "Market expansion", "Partnership development"],
      duration: "6 months - 2 years",
      processing: "3-6 weeks"
    }
  ];

  const requiredDocuments = [
    "Current Valid Passport",
    "Existing Visa Copy",
    "Extension Application Form",
    "Recent Passport Photos",
    "Financial Statements",
    "Updated Bank Statements",
    "Employment/Study Confirmation Letter",
    "Medical Insurance (if required)",
    "Reason for Extension Letter",
    "Academic Transcripts (for students)",
    "Employment Contract (for workers)",
    "Travel History Records"
  ];

  const faqItems = [
    {
      question: "How early should I apply for a visa extension?",
      answer: "We recommend applying at least 2-3 months before your current visa expires. This allows sufficient time for processing and avoids any gaps in your legal status. Never wait until the last minute as processing delays can occur."
    },
    {
      question: "Can I travel while my extension application is being processed?",
      answer: "Generally, it's not recommended to travel while your extension is pending as it may affect your application. However, rules vary by country and visa type. We'll advise you on travel restrictions specific to your situation."
    },
    {
      question: "What happens if my extension is denied?",
      answer: "If denied, you'll typically need to leave the country by the expiration date of your current visa. However, you may have options to appeal the decision or reapply with additional documentation. We'll guide you through all available options."
    },
    {
      question: "Are there limits on how many times I can extend my visa?",
      answer: "Extension limits vary by visa type and country. Tourist visas usually have stricter limits, while work and study visas may allow multiple extensions if you meet the requirements. We'll explain the specific limits for your visa category."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Extend Your Stay Without"
        subtitle="Stress or Complications"
        description="Seamlessly extend or renew your visa with our expert guidance. Whether for study, work, or travel, we ensure your extension process is smooth and successful."
        primaryButtonText="Request Extension/Renewal"
        secondaryButtonText="Check Eligibility"
        heroImage={heroImage}
      />

      {/* Extension Types */}
      <section className="py-20 relative" data-testid="extension-types-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Visa Extension Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Professional extension and renewal services for all visa categories with expert guidance throughout the process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {extensionTypes.map((extension, index) => (
              <ServiceCard key={index} {...extension} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 relative" data-testid="process-timeline">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Extension Process Steps</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our systematic approach ensures your visa extension is handled efficiently and professionally.
            </p>
          </div>
          
          <Timeline steps={timelineSteps} />
        </div>
      </section>

      {/* Renewal Options */}
      <section className="py-20 relative" data-testid="renewal-options-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Extension & Renewal Options</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore different extension categories and their specific requirements and processing times.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {renewalOptions.map((option, index) => (
              <div key={index} className="glass-card rounded-2xl p-6" data-testid={`renewal-option-${index}`}>
                <h3 className="text-xl font-bold gradient-text mb-4">{option.type}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold mb-2">Common Reasons:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {option.reasons.map((reason, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-neon-cyan rounded-full mr-2"></div>
                          {reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Duration:</p>
                      <p className="text-muted-foreground">{option.duration}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Processing:</p>
                      <p className="text-muted-foreground">{option.processing}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 relative" data-testid="documents-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Required Documents Checklist</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential documents needed for your visa extension or renewal application.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`document-${index}`}>
                    <div className="w-6 h-6 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-5xl font-bold mb-6 gradient-text">Extension & Renewal FAQ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about visa extensions and renewals answered by our immigration experts.
            </p>
          </div>
          
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Need to Extend Your Stay?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact our extension specialists for personalized guidance on your visa renewal process.
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

export default VisaExtensionRenewal;
