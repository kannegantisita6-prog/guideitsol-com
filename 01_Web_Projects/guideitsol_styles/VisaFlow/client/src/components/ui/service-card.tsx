import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { VisaCTAButton, ITCTAButton } from "./cta-button";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  buttonText: string;
  gradient: string;
  onButtonClick?: () => void;
  serviceType?: "visa" | "it";
}

export const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  benefits, 
  buttonText, 
  gradient,
  onButtonClick,
  serviceType 
}: ServiceCardProps) => {
  return (
    <div className="service-card glass-card rounded-2xl p-8 group" data-testid={`service-card-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="mb-6">
        <div className={`w-16 h-16 ${gradient} rounded-2xl flex items-center justify-center mb-4 neon-glow`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-3 gradient-text">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      <div className="space-y-3 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center text-sm">
            <Check className="text-neon-cyan mr-2 w-4 h-4" />
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      {serviceType === "visa" ? (
        <VisaCTAButton 
          service={title}
          className={`w-full font-semibold hover:scale-105 transition-transform`}
        >
          {buttonText}
        </VisaCTAButton>
      ) : serviceType === "it" ? (
        <ITCTAButton 
          service={title}
          className={`w-full font-semibold hover:scale-105 transition-transform`}
        >
          {buttonText}
        </ITCTAButton>
      ) : (
        <Button 
          onClick={onButtonClick}
          className={`w-full ${gradient} font-semibold hover:scale-105 transition-transform`}
          data-testid={`button-${title.toLowerCase().replace(/\s+/g, '-')}`}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};
