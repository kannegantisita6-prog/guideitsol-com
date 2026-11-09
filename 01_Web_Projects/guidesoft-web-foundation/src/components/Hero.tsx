import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section className="hero-section py-24 lg:py-32">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium">
                <CheckCircle className="w-4 h-4 mr-2" />
                Trusted by 500+ Companies Worldwide
              </div>
              <h1 className="heading-1 text-primary-foreground">
                Transform Your Business with 
                <span className="block text-accent"> Innovative IT Solutions</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Leading software development company delivering custom web applications, 
                mobile apps, and digital transformation solutions that drive business growth 
                and operational excellence.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>99% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>24/7 Technical Support</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span>Agile Development Process</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-secondary flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-primary-foreground flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">15+</div>
                <div className="text-primary-foreground/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">200+</div>
                <div className="text-primary-foreground/80 text-sm">Expert Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">50+</div>
                <div className="text-primary-foreground/80 text-sm">Countries Served</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-float">
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" alt="Professional Development Team" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-card p-4 rounded-xl shadow-xl card-elevated">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">99.9% Uptime</div>
                    <div className="text-sm text-muted-foreground">Guaranteed</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-xl card-elevated">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold">24/7 Support</div>
                    <div className="text-sm text-muted-foreground">Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
    </section>;
};
export default Hero;