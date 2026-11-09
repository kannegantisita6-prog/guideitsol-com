import { Link } from "wouter";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import logoImage from "@assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const newsletterMutation = useMutation({
    mutationFn: (email: string) => apiRequest("POST", "/api/newsletter", { email }),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      newsletterMutation.mutate(email);
    }
  };

  return (
    <footer className="py-16 glass-card mt-20" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden shadow-lg hover:scale-105 transition-transform">
                <img src={logoImage} alt="Logo" className="w-full h-full object-contain" />
              </div>
            </div>
            <p className="text-muted-foreground mb-6">
              Making your global dreams a reality through expert visa guidance and seamless application processes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-electric-blue to-stellar-orange rounded-lg flex items-center justify-center neon-glow" data-testid="link-facebook">
                <Facebook className="text-white w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-stellar-orange to-neon-cyan rounded-lg flex items-center justify-center neon-glow" data-testid="link-twitter">
                <Twitter className="text-white w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-r from-neon-cyan to-electric-blue rounded-lg flex items-center justify-center neon-glow" data-testid="link-linkedin">
                <Linkedin className="text-white w-4 h-4" />
              </a>
            </div>
          </div>

          {/* IT Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 gradient-text">IT Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/software-development" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-software-development">Software Development</Link></li>
              <li><Link href="/ui-ux-design" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-ui-ux-design">UI/UX Design</Link></li>
              <li><Link href="/data-analytics" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-data-analytics">Data Analytics</Link></li>
              <li><Link href="/cloud-solutions" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-cloud-solutions">Cloud Solutions</Link></li>
              <li><Link href="/cybersecurity" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-cybersecurity">Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Visa Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 gradient-text">Visa Services</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/study-abroad-visas" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-study-abroad">Study Abroad Visas</Link></li>
              <li><Link href="/work-business-visas" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-work-business">Work & Business Visas</Link></li>
              <li><Link href="/travel-tourism-visas" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-travel-tourism">Travel & Tourism Visas</Link></li>
              <li><Link href="/extension-renewal" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-extension-renewal">Extension & Renewal</Link></li>
              <li><Link href="/immigration-consultation" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-immigration-consultation">Immigration Consultation</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6 gradient-text">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><Link href="/about" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-about">About</Link></li>
              <li><Link href="/career" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-career">Career</Link></li>
              <li><Link href="/blog" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-blog">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-contact">Contact</Link></li>
              <li><Link href="/book-appointment" className="hover:text-neon-cyan transition-colors" data-testid="footer-link-book-appointment">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6 gradient-text">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Stay updated with the latest visa news and opportunities.
            </p>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 focus:border-neon-cyan"
                required
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-stellar-orange to-electric-blue font-semibold hover:scale-105 transition-transform"
                disabled={newsletterMutation.isPending}
                data-testid="button-subscribe"
              >
                {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 GuideIT Solutions. All rights reserved. | <Link href="/privacy-policy" className="hover:text-neon-cyan transition-colors">Privacy Policy</Link> | <Link href="/terms-of-service" className="hover:text-neon-cyan transition-colors">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
