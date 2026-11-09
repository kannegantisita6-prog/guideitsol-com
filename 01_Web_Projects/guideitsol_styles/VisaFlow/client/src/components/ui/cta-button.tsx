import { useState } from "react";
import { Button } from "@/components/ui/button";
import LightboxForm from "./lightbox-form";
import { 
  MessageSquare, 
  Calendar, 
  Phone, 
  Mail, 
  Quote, 
  HeadphonesIcon,
  Handshake,
  GraduationCap,
  Briefcase,
  Plane,
  Clock,
  FileText,
  Home,
  Code,
  Smartphone,
  Palette,
  BarChart3,
  Shield,
  TrendingUp
} from "lucide-react";

interface CTAButtonProps {
  variant: "contact" | "consultation" | "appointment" | "quote" | "support" | "partnership";
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  icon?: React.ReactNode;
}

const CTAButton = ({ variant, children, className = "", size = "default", icon }: CTAButtonProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const formConfig = {
    contact: {
      title: "Contact Us",
      description: "Get in touch with our team for any inquiries or support.",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    consultation: {
      title: "Book Consultation",
      description: "Schedule a free consultation with our visa experts.",
      icon: <Calendar className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-stellar-orange to-electric-blue"
    },
    appointment: {
      title: "Schedule Appointment",
      description: "Book an appointment for personalized visa guidance.",
      icon: <Calendar className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    quote: {
      title: "Get Quote",
      description: "Request a quote for your IT project or development needs.",
      icon: <Quote className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    },
    support: {
      title: "Get Support",
      description: "Get technical support or assistance with your application.",
      icon: <HeadphonesIcon className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-neon-cyan to-neon-purple"
    },
    partnership: {
      title: "Partnership Inquiry",
      description: "Explore partnership opportunities with GuideItSol.",
      icon: <Handshake className="h-6 w-6 text-white" />,
      gradient: "bg-gradient-to-r from-gold to-stellar-orange"
    }
  };

  const config = formConfig[variant];

  return (
    <>
      <Button
        onClick={() => setIsFormOpen(true)}
        className={`${config.gradient} hover:opacity-90 ${className}`}
        size={size}
      >
        {icon || config.icon}
        {children}
      </Button>

      <LightboxForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType={variant}
        title={config.title}
        description={config.description}
        icon={config.icon}
        gradient={config.gradient}
      />
    </>
  );
};

// Specialized CTA buttons for different services
export const VisaCTAButton = ({ service, children, className = "" }: { service: string, children: React.ReactNode, className?: string }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const getServiceConfig = (service: string) => {
    switch (service.toLowerCase()) {
      case "study abroad":
        return {
          title: "Study Abroad Consultation",
          description: "Get expert guidance for your study abroad visa application.",
          icon: <GraduationCap className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-stellar-orange to-electric-blue"
        };
      case "work & business":
        return {
          title: "Work & Business Visa",
          description: "Professional visa services for work and business opportunities.",
          icon: <Briefcase className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
        };
      case "travel & tourism":
        return {
          title: "Travel & Tourism Visa",
          description: "Quick and easy tourist visa services for your travel needs.",
          icon: <Plane className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan"
        };
      case "extensions":
        return {
          title: "Visa Extension Services",
          description: "Extend your stay with our comprehensive renewal services.",
          icon: <Clock className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-neon-cyan to-neon-purple"
        };
      case "documents":
        return {
          title: "Document Verification",
          description: "Secure document authentication and verification services.",
          icon: <FileText className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-electric-blue to-stellar-orange"
        };
      case "immigration":
        return {
          title: "Immigration Consultation",
          description: "Expert guidance for permanent residency and citizenship.",
          icon: <Home className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-neon-purple to-stellar-orange"
        };
      default:
        return {
          title: "Visa Consultation",
          description: "Get expert guidance for your visa application.",
          icon: <Calendar className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-stellar-orange to-electric-blue"
        };
    }
  };

  const config = getServiceConfig(service);

  return (
    <>
      <Button
        onClick={() => setIsFormOpen(true)}
        className={`${config.gradient} hover:opacity-90 ${className}`}
      >
        {config.icon}
        {children}
      </Button>

      <LightboxForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType="consultation"
        title={config.title}
        description={config.description}
        icon={config.icon}
        gradient={config.gradient}
      />
    </>
  );
};

export const ITCTAButton = ({ service, children, className = "" }: { service: string, children: React.ReactNode, className?: string }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const getServiceConfig = (service: string) => {
    switch (service.toLowerCase()) {
      case "software development":
        return {
          title: "Software Development Quote",
          description: "Get a quote for custom software development services.",
          icon: <Code className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
        };
      case "mobile development":
        return {
          title: "Mobile App Development",
          description: "Native and cross-platform mobile application development.",
          icon: <Smartphone className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
        };
      case "ui/ux design":
        return {
          title: "UI/UX Design Services",
          description: "Create exceptional user experiences with our design team.",
          icon: <Palette className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-stellar-orange to-neon-cyan"
        };
      case "data analytics":
        return {
          title: "Data Analytics Solutions",
          description: "Unlock the power of your data with advanced analytics.",
          icon: <BarChart3 className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-neon-cyan to-gold"
        };
      case "cybersecurity":
        return {
          title: "Cybersecurity Services",
          description: "Protect your business with comprehensive security solutions.",
          icon: <Shield className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-gold to-neon-purple"
        };
      case "digital marketing":
        return {
          title: "Digital Marketing Services",
          description: "Grow your online presence with strategic marketing campaigns.",
          icon: <TrendingUp className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-neon-purple to-stellar-orange"
        };
      default:
        return {
          title: "IT Services Quote",
          description: "Get a quote for our IT services.",
          icon: <Code className="h-6 w-6 text-white" />,
          gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
        };
    }
  };

  const config = getServiceConfig(service);

  return (
    <>
      <Button
        onClick={() => setIsFormOpen(true)}
        className={`${config.gradient} hover:opacity-90 ${className}`}
      >
        {config.icon}
        {children}
      </Button>

      <LightboxForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        formType="quote"
        title={config.title}
        description={config.description}
        icon={config.icon}
        gradient={config.gradient}
      />
    </>
  );
};

export default CTAButton;
