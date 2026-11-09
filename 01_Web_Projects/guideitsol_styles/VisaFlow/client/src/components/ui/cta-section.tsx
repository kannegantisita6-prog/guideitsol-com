import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Mail, ArrowRight, Sparkles, Phone } from "lucide-react";
import AppointmentModal from "./appointment-modal";
import CTAButton from "./cta-button";

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryAction: {
    text: string;
    onClick?: () => void;
  };
  secondaryAction: {
    text: string;
    onClick?: () => void;
  };
}

const CTASection = ({ title, subtitle, primaryAction, secondaryAction }: CTASectionProps) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/20 via-neon-purple/20 to-stellar-orange/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark-secondary/80" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue/40 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Sparkles Icon */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-stellar-orange to-electric-blue rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">{title}</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{subtitle}</p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton
              variant="appointment"
              className="neon-glow font-semibold text-lg px-8 py-3"
            >
              <Calendar className="mr-2 h-5 w-5" />
              {primaryAction.text}
              <ArrowRight className="ml-2 h-5 w-5" />
            </CTAButton>
            
            <CTAButton
              variant="contact"
              className="glass-card font-semibold text-lg px-8 py-3"
            >
              <Phone className="mr-2 h-5 w-5" />
              {secondaryAction.text}
            </CTAButton>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-electric-blue rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-muted-foreground">info@guideitsol.com</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-gold to-neon-cyan rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Book Consultation</h3>
              <p className="text-muted-foreground">Free 30-min session</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
