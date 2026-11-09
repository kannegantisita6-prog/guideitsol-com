import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { ContactForm } from "@/components/ui/contact-form";
import { 
  TrendingUp, 
  Search, 
  Share2, 
  Target, 
  BarChart3, 
  Megaphone, 
  Users, 
  Globe, 
  Zap,
  CheckCircle,
  Eye,
  MousePointer
} from "lucide-react";

const DigitalMarketing = () => {
  const heroImage = (
    <div className="relative w-full h-96 animate-float">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-neon-purple/20 rounded-3xl glass-card flex items-center justify-center">
        <TrendingUp className="text-8xl gradient-text" />
      </div>
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-neon-purple to-electric-blue rounded-full flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
        <Target className="text-white text-xl" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-stellar-orange to-neon-cyan rounded-full flex items-center justify-center animate-float" style={{animationDelay: "2s"}}>
        <Share2 className="text-white" />
      </div>
    </div>
  );

  const marketingServices = [
    {
      icon: <Search className="text-2xl text-white" />,
      title: "SEO & SEM",
      description: "Search Engine Optimization and Marketing to improve your online visibility and drive qualified traffic to your website.",
      benefits: ["Keyword Research & Strategy", "On-Page & Technical SEO", "Google Ads Management", "Local SEO Optimization"],
      buttonText: "Boost Search Rankings",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    },
    {
      icon: <Share2 className="text-2xl text-white" />,
      title: "Social Media Marketing",
      description: "Comprehensive social media strategies to build brand awareness, engage audiences, and drive conversions across platforms.",
      benefits: ["Content Strategy & Creation", "Community Management", "Social Media Advertising", "Influencer Partnerships"],
      buttonText: "Grow Social Presence",
      gradient: "bg-gradient-to-r from-neon-purple to-electric-blue"
    },
    {
      icon: <Target className="text-2xl text-white" />,
      title: "Performance Marketing & Campaigns",
      description: "Data-driven marketing campaigns focused on measurable results and ROI optimization across multiple channels.",
      benefits: ["PPC Campaign Management", "Conversion Rate Optimization", "A/B Testing & Analytics", "Multi-Channel Attribution"],
      buttonText: "Optimize Performance",
      gradient: "bg-gradient-to-r from-electric-blue to-neon-cyan"
    }
  ];

  const additionalServices = [
    {
      icon: <BarChart3 className="text-2xl text-white" />,
      title: "Marketing Analytics & Insights",
      description: "Advanced analytics and reporting to measure campaign performance and optimize marketing strategies.",
      benefits: ["Google Analytics Setup", "Custom Dashboard Creation", "Performance Reporting", "Marketing Attribution"],
      buttonText: "Get Marketing Insights",
      gradient: "bg-gradient-to-r from-neon-cyan to-stellar-orange"
    },
    {
      icon: <Megaphone className="text-2xl text-white" />,
      title: "Content Marketing",
      description: "Strategic content creation and distribution to attract, engage, and convert your target audience.",
      benefits: ["Content Strategy Development", "Blog & Article Writing", "Video Content Creation", "Email Marketing Campaigns"],
      buttonText: "Create Compelling Content",
      gradient: "bg-gradient-to-r from-stellar-orange to-gold"
    },
    {
      icon: <Users className="text-2xl text-white" />,
      title: "Brand Strategy & Development",
      description: "Comprehensive brand development and positioning strategies to differentiate your business in the market.",
      benefits: ["Brand Identity Development", "Market Positioning", "Competitive Analysis", "Brand Guidelines Creation"],
      buttonText: "Build Your Brand",
      gradient: "bg-gradient-to-r from-gold to-neon-purple"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection
        title="Digital Marketing Services"
        subtitle="Grow Your Business with Data-Driven Marketing"
        description="Comprehensive digital marketing solutions to increase your online presence, drive qualified traffic, and convert visitors into customers. Our expert team delivers measurable results across all digital channels."
        primaryButtonText="Start Marketing Campaign"
        secondaryButtonText="Get Marketing Audit"
        heroImage={heroImage}
      />

      {/* Core Marketing Services */}
      <section className="py-20 relative" data-testid="core-marketing-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Core Marketing Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Essential digital marketing services to drive growth and maximize your return on investment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 relative" data-testid="additional-services-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Complete Marketing Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Advanced marketing services to build your brand, create compelling content, and gain valuable insights.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-20 relative" data-testid="marketing-channels-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Marketing Channels We Master</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the most effective digital marketing channels to reach your target audience and drive results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center glass-card p-6 rounded-xl">
              <Search className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Search Engines</h3>
              <p className="text-muted-foreground">Google, Bing, and other search platforms for maximum visibility</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Share2 className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Media</h3>
              <p className="text-muted-foreground">Facebook, Instagram, LinkedIn, Twitter, and emerging platforms</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Megaphone className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Content Platforms</h3>
              <p className="text-muted-foreground">YouTube, TikTok, podcasts, and content distribution networks</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Target className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Programmatic</h3>
              <p className="text-muted-foreground">Display advertising and retargeting across the web</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="py-20 relative" data-testid="marketing-process-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Our Marketing Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to digital marketing that ensures consistent results and continuous improvement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center glass-card p-6 rounded-xl">
              <Eye className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Research & Analysis</h3>
              <p className="text-muted-foreground">Market research, competitor analysis, and audience insights</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Target className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
              <p className="text-muted-foreground">Custom marketing strategies aligned with business goals</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <Zap className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Campaign Execution</h3>
              <p className="text-muted-foreground">Multi-channel campaign implementation and management</p>
            </div>
            <div className="text-center glass-card p-6 rounded-xl">
              <BarChart3 className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Optimize & Scale</h3>
              <p className="text-muted-foreground">Continuous optimization and scaling of successful campaigns</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Tools */}
      <section className="py-20 relative" data-testid="marketing-tools-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Marketing Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We use industry-leading tools and platforms to deliver exceptional marketing results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Analytics & Tracking</h3>
              <p className="text-muted-foreground">Google Analytics, Adobe Analytics, Mixpanel, Hotjar</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advertising Platforms</h3>
              <p className="text-muted-foreground">Google Ads, Facebook Ads, LinkedIn Ads, Microsoft Advertising</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">SEO Tools</h3>
              <p className="text-muted-foreground">SEMrush, Ahrefs, Moz, Screaming Frog, Google Search Console</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Media Management</h3>
              <p className="text-muted-foreground">Hootsuite, Buffer, Sprout Social, Later</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email Marketing</h3>
              <p className="text-muted-foreground">Mailchimp, HubSpot, Klaviyo, SendGrid</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <CheckCircle className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Marketing Automation</h3>
              <p className="text-muted-foreground">HubSpot, Marketo, Pardot, ActiveCampaign</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 relative" data-testid="success-metrics-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Key Performance Indicators</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We track and optimize the metrics that matter most to your business success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 rounded-xl text-center">
              <TrendingUp className="text-4xl text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Traffic Growth</h3>
              <p className="text-muted-foreground">Organic and paid traffic increases</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <MousePointer className="text-4xl text-electric-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conversion Rate</h3>
              <p className="text-muted-foreground">Visitor to customer conversion optimization</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <Target className="text-4xl text-stellar-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cost Per Acquisition</h3>
              <p className="text-muted-foreground">Efficient customer acquisition costs</p>
            </div>
            <div className="glass-card p-6 rounded-xl text-center">
              <BarChart3 className="text-4xl text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Return on Ad Spend</h3>
              <p className="text-muted-foreground">Maximizing ROI across all channels</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative" data-testid="contact-section">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Ready to Accelerate Your Growth?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's create a custom digital marketing strategy that drives real results for your business. Contact us today for a free consultation.
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

export default DigitalMarketing;