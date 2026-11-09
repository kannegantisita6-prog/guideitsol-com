import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const CallToAction = () => {
  return <section className="py-20 hero-section">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main CTA Content */}
          <div className="space-y-6">
            <h2 className="heading-2 text-primary-foreground">
              Ready to Transform Your Business?
              <span className="block text-secondary">Let's Build Something Amazing Together</span>
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
              Partner with GuideSoft Solutions to accelerate your digital transformation. 
              Our expert team is ready to turn your vision into reality with cutting-edge 
              technology and proven methodologies.
            </p>
          </div>

          {/* Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">Schedule a Call</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Speak directly with our experts to discuss your project requirements.
                  </p>
                  <Button variant="outline" className="border-white/20 text-primary-foreground w-full bg-zinc-950 hover:bg-zinc-800">
                    Book Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">Get Free Quote</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Receive a detailed proposal and cost estimate for your project.
                  </p>
                  <Button variant="outline" className="border-white/20 text-primary-foreground w-full bg-zinc-950 hover:bg-zinc-800">
                    Request Quote
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary-foreground mb-2">Live Chat</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    Get instant answers to your questions from our support team.
                  </p>
                  <Button variant="outline" className="border-white/20 text-primary-foreground w-full bg-zinc-950 hover:bg-zinc-800">
                    Start Chat
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button className="btn-secondary text-lg px-8 py-4">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-white/20 text-primary-foreground text-lg px-8 py-4 bg-black">
              View Our Portfolio
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 border-t border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-primary-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-primary-foreground/80">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">100%</div>
                <div className="text-primary-foreground/80">Satisfaction Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">15+</div>
                <div className="text-primary-foreground/80">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>
    </section>;
};
export default CallToAction;