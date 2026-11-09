import { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  heroImage?: ReactNode;
}

export const HeroSection = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  heroImage
}: HeroSectionProps) => {
  return (
    <section className="parallax-bg relative min-h-screen flex items-center justify-center overflow-hidden pt-20" data-testid="hero-section">
      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {title}
              <span className="gradient-text block">{subtitle}</span>
            </h1>
            <p className="text-xl mb-8 text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onPrimaryClick}
                className="bg-gradient-to-r from-stellar-orange to-electric-blue neon-glow font-semibold text-lg"
                data-testid="button-primary-hero"
              >
                {primaryButtonText}
              </Button>
              {secondaryButtonText && (
                <Button 
                  onClick={onSecondaryClick}
                  variant="outline"
                  className="glass-card font-semibold text-lg hover:bg-white hover:bg-opacity-10 transition-all"
                  data-testid="button-secondary-hero"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
          
          {heroImage && (
            <div className="relative animate-slide-in-right">
              {heroImage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
