import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Star, Globe, Users, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import praveenImage from "@/assets/praveen-new.png";

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  gradient: string;
  icon: React.ReactNode;
  stats?: { label: string; value: string }[];
}

interface EnhancedHeroSectionProps {
  slides: HeroSlide[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const EnhancedHeroSection = ({ slides, onPrimaryClick, onSecondaryClick }: EnhancedHeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className={`relative min-h-screen overflow-hidden theme-hero ${resolvedTheme === 'light' ? 'light' : 'dark'}`}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-neon-purple/10 to-stellar-orange/10 animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-electric-blue/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-xl ${slides[currentSlide].gradient}`}>
                      {slides[currentSlide].icon}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground bg-background/50 px-3 py-1 rounded-full">
                      {currentSlide + 1} of {slides.length}
                    </span>
                  </div>

                  <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                    <span className="text-foreground">{slides[currentSlide].title}</span>
                    <br />
                    <span className={resolvedTheme === 'light' ? 'gradient-text-light' : 'gradient-text'}>{slides[currentSlide].subtitle}</span>
                  </h1>

                  <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    {slides[currentSlide].description}
                  </p>

                  {/* Stats */}
                  {slides[currentSlide].stats && (
                    <div className="grid grid-cols-3 gap-4 pt-4">
                      {slides[currentSlide].stats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-center"
                        >
                          <div className={`text-2xl font-bold ${resolvedTheme === 'light' ? 'gradient-text-light' : 'gradient-text'}`}>{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      onClick={onPrimaryClick}
                      className={`bg-gradient-to-r from-stellar-orange to-electric-blue hover:from-stellar-orange/90 hover:to-electric-blue/90 font-semibold text-lg px-8 py-3 ${resolvedTheme === 'dark' ? 'neon-glow' : ''}`}
                    >
                      Start Your Journey
                    </Button>
                    <Button
                      onClick={onSecondaryClick}
                      variant="outline"
                      className={`theme-button font-semibold text-lg px-8 py-3 transition-all ${resolvedTheme === 'dark' ? 'glass-card hover:bg-white hover:bg-opacity-10' : 'hover:bg-accent'}`}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Watch Demo
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Image/Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-96"
                >
                  <div className={`absolute inset-0 ${slides[currentSlide].gradient} rounded-3xl glass-card overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    
                    {/* Background Praveen Image */}
                    <div 
                      className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${praveenImage})`,
                        backgroundSize: '200px 200px',
                        backgroundPosition: 'bottom left',
                      }}
                    />
                    
                    {/* Praveen Image for all slides - More prominent */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="absolute top-2 right-2 w-40 h-40 z-30"
                    >
                      <img
                        src={praveenImage}
                        alt="Praveen Logo"
                        className="w-full h-full object-contain drop-shadow-lg"
                        style={{
                          filter: 'brightness(1.2) contrast(1.1)',
                        }}
                      />
                    </motion.div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-8xl text-white/80">
                        {slides[currentSlide].icon}
                      </div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <Star className="text-white" />
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                      className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                    >
                      <Globe className="text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-electric-blue scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default EnhancedHeroSection;
