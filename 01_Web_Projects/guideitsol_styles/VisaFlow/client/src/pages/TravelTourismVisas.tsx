import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { Timeline } from "@/components/ui/timeline";
import { FAQSection } from "@/components/ui/faq-section";
import { ContactForm } from "@/components/ui/contact-form";
import { Plane, MapPin, Heart, Clock, FileText, Camera, Users, Globe } from "lucide-react";

const TravelTourismVisas = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-neon-cyan/20 rounded-3xl glass-card flex items-center justify-center">
        <Plane className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <Camera className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-neon-purple to-gold rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Globe className="text-white" />
      </div>
    </div>
  );

  const visaTypes = [
    {
      icon: <MapPin className="text-2xl text-white" />,
      title: "Tourist Visas",
      description: "Explore amazing destinations worldwide with our quick and efficient tourist visa services.",
      benefits: ["Quick Processing", "Multiple Entry Options", "Destination Guidance"],
      buttonText: "Apply for Tourist Visa",
      gradient: "bg-gradient-to-r from-gold to-neon-cyan"
    },
    {
      icon: <Heart className="text-2xl text-white" />,
      title: "Family Visit Visas",
      description: "Reunite with loved ones abroad with our specialized family visit visa assistance.",
      benefits: ["Family Documentation", "Invitation Support", "Relationship Proof"],
      buttonText: "Apply for Family Visa",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Clock className="text-2xl text-white" />,
      title: "Transit Visas",
      description: "Seamless transit through international airports with our transit visa services.",
      benefits: ["Quick Approval", "Airport Transit", "Connection Support"],
      buttonText: "Apply for Transit Visa",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    }
  ];

  const timelineSteps = [
    {
      number: 1,
      title: "Application",
      description: "Submit your travel visa application with our user-friendly online platform.",
      gradient: "bg-gradient-to-r from-gold to-neon-cyan"
    },
    {
      number: 2,
      title: "Documents",
      description: "Prepare and verify all required travel documents with our expert guidance.",
      gradient: "bg-gradient-to-r from-neon-cyan to-electric-blue"
    },
    {
      number: 3,
      title: "Processing",
      description: "Track your application status while we handle the processing with embassy officials.",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-purple"
    },
    {
      number: 4,
      title: "Travel",
      description: "Receive your approved visa and begin your amazing travel adventure.",
      gradient: "bg-gradient-to-r from-neon-purple to-gold"
    }
  ];

  const popularDestinations = [
    {
      country: "United States",
      highlights: ["New York City", "Grand Canyon", "Disney World"],
      processingTime: "2-4 weeks",
      validity: "Up to 10 years"
    },
    {
      country: "United Kingdom",
      highlights: ["London", "Edinburgh", "Stonehenge"],
      processingTime: "3-4 weeks",
      validity: "6 months to 2 years"
    },
    {
      country: "Schengen Europe",
      highlights: ["Paris", "Rome", "Amsterdam"],
      processingTime: "2-3 weeks",
      validity: "Up to 5 years"
    },
    {
      country: "Canada",
      highlights: ["Toronto", "Vancouver", "Niagara Falls"],
      processingTime: "2-3 weeks",
      validity: "Up to 10 years"
    },
    {
      country: "Australia",
      highlights: ["Sydney", "Melbourne", "Great Barrier Reef"],
      processingTime: "2-4 weeks",
      validity: "Up to 3 years"
    },
    {
      country: "Japan",
      highlights: ["Tokyo", "Kyoto", "Mount Fuji"],
      processingTime: "1-2 weeks",
      validity: "3 months to 5 years"
    }
  ];

  const requiredDocuments = [
    "Valid Passport (6+ months validity)",
    "Completed Visa Application Form",
    "Recent Passport Photos",
    "Travel Itinerary",
    "Hotel Reservations",
    "Flight Bookings",
    "Financial Statements",
    "Bank Statements (3-6 months)",
    "Employment Letter",
    "Travel Insurance",
    "Invitation Letter (if visiting family/friends)",
    "Previous Travel History"
  ];

  const faqItems = [
    {
      question: "How long does it take to get a tourist visa?",
      answer: "Processing times vary by country but typically range from 1-4 weeks. Popular destinations like the US and Europe usually take 2-3 weeks. We recommend applying at least 6 weeks before your travel date to allow for any delays."
    },
    {
      question: "Can I apply for a multiple-entry tourist visa?",
      answer: "Yes, many countries offer multiple-entry tourist visas that allow you to visit multiple times within the validity period. These are ideal for frequent travelers and often provide better value than single-entry visas."
    },
    {
      question: "What if I need to travel urgently?",
      answer: "We offer expedited processing services for urgent travel needs. Depending on the destination, we can often secure visas within 24-72 hours for an additional fee. Contact us immediately for emergency travel assistance."
    },
    {
      question: "Do I need travel insurance for my visa application?",
      answer: "Many countries require travel insurance as part of the visa application. We recommend comprehensive travel insurance that covers medical emergencies, trip cancellation, and other unforeseen circumstances for all international travel."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Explore the World with"
        subtitle="Travel & Tourism Visas"
        description="Discover amazing destinations with our quick approval tourist visas. Whether it's a family visit, holiday adventure, or transit journey, we make travel dreams come true."
        primaryButtonText="Apply for Tourist Visa"
        secondaryButtonText="View Destinations"
        heroImage={heroImage}
      />

      {/* Visa Types */}
      <section className="py-20 relative" data-testid="visa-types-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Travel Visa Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the right visa type for your travel needs and destination requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {visaTypes.map((visa, index) => (
              <ServiceCard key={index} {...visa} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 relative" data-testid="process-timeline">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Simple Travel Visa Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process makes getting your travel visa quick and hassle-free.
            </p>
          </div>
          
          <Timeline steps={timelineSteps} />
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20 relative" data-testid="destinations-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Popular Travel Destinations</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our most requested destinations with detailed visa information and processing times.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="glass-card rounded-2xl p-6" data-testid={`destination-${index}`}>
                <h3 className="text-xl font-bold gradient-text mb-4">{destination.country}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold mb-1">Top Attractions:</p>
                    <p className="text-sm text-muted-foreground">{destination.highlights.join(', ')}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Processing:</p>
                      <p className="text-muted-foreground">{destination.processingTime}</p>
                    </div>
                    <div>
                      <p className="font-semibold">Validity:</p>
                      <p className="text-muted-foreground">{destination.validity}</p>
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
            <h2 className="text-5xl font-bold mb-6 gradient-text">Travel Visa Documents</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential documents needed for your travel visa application.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {requiredDocuments.map((document, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`document-${index}`}>
                    <div className="w-6 h-6 bg-gradient-to-r from-gold to-neon-cyan rounded-full flex items-center justify-center flex-shrink-0">
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
            <h2 className="text-5xl font-bold mb-6 gradient-text">Travel Visa FAQ</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about tourist and travel visas answered by our experts.
            </p>
          </div>
          
          <FAQSection items={faqItems} />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Start Your Adventure?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Contact our travel visa experts to begin planning your next international journey.
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

export default TravelTourismVisas;
