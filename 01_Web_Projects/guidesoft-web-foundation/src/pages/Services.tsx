import Layout from '@/components/Layout';
import { ArrowRight, Code, Globe, Smartphone, Database, Cloud, Shield, Users, Cog, Target, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
const serviceCategories = [{
  title: 'Backend Development',
  icon: Database,
  description: 'Robust server-side solutions and APIs',
  services: ['Web App Development', '.Net Development', 'NodeJS Development', 'Python Development', 'NestJS Development', 'ExpressJS Development', 'Laravel Development', 'Shopify Development', 'WordPress Development', 'Website Development', 'Hapi.js Development', 'Fastify Development', 'Golang Development'],
  color: 'primary'
}, {
  title: 'Frontend Development',
  icon: Globe,
  description: 'Modern, responsive user interfaces',
  services: ['ReactJS Development', 'Angular Development', 'HTML Development', 'NextJS Development', 'GatsbyJS Development', 'Magento Development', 'ExtJS Development Company'],
  color: 'secondary'
}, {
  title: 'Mobile App Development',
  icon: Smartphone,
  description: 'Native and cross-platform mobile solutions',
  services: ['Android App Development', 'iOS App Development', 'IoT App Development', 'Native App Development', 'Flutter App Development', 'Ionic App Development', 'Enterprise App Development', 'Progressive Web Apps', 'Wearable App Development', 'VOIP App Development', 'React Native Development', 'Cross Platform Development'],
  color: 'accent'
}, {
  title: 'Advanced Essential Services',
  icon: Cog,
  description: 'Specialized technology solutions',
  services: ['Travel Technology', 'n8n Automation Experts', 'UI/UX Design & Development', 'eCommerce Web Design', 'eCommerce Web Development', 'Healthcare Website Design', 'mCommerce Development', 'Digital Marketing', 'Software Testing', 'DevOps Services', 'Agile Software Development', 'Custom Software Development', 'CRM Software Development', 'Software Development', 'Blockchain Development', 'Full Stack Development', 'Payload CMS Development'],
  color: 'primary'
}];
const Services = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="hero-section py-20">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="heading-1 text-primary-foreground">
              Comprehensive IT Services for
              <span className="block text-secondary">Modern Businesses</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              From custom software development to cloud solutions, we provide end-to-end 
              IT services that drive innovation and accelerate business growth across all industries.
            </p>
            <Button className="btn-secondary">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => <div key={index} className="space-y-8">
                {/* Category Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className={`w-16 h-16 bg-${category.color}/10 rounded-2xl flex items-center justify-center`}>
                      <category.icon className={`w-8 h-8 text-${category.color}`} />
                    </div>
                    <h2 className="heading-2 text-card-foreground">{category.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground">{category.description}</p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => <Card key={serviceIndex} className="card-elevated bg-card border-0 group cursor-pointer">
                      <CardContent className="p-6 space-y-4">
                        <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors">
                          {service}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                          <span className="text-sm">Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>)}
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="heading-2">
              Why Choose GuideSoft Solutions?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We combine technical expertise with industry knowledge to deliver 
              exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: Users,
            title: 'Expert Team',
            description: '200+ certified developers with deep industry expertise'
          }, {
            icon: Target,
            title: 'Proven Track Record',
            description: '500+ successful projects delivered across 50+ countries'
          }, {
            icon: Shield,
            title: 'Quality Assurance',
            description: 'ISO 9001:2015 certified processes and rigorous testing'
          }, {
            icon: Clock,
            title: 'Timely Delivery',
            description: '98% on-time delivery rate with agile development methodology'
          }, {
            icon: Cloud,
            title: 'Cutting-edge Technology',
            description: 'Latest frameworks and tools for optimal performance'
          }, {
            icon: Cog,
            title: '24/7 Support',
            description: 'Round-the-clock technical support and maintenance'
          }].map((benefit, index) => <Card key={index} className="card-elevated bg-background border-0 text-center">
                <CardContent className="p-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-section">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="heading-2 text-primary-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Let's discuss how we can help transform your business with our comprehensive IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-secondary">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-white/20 text-primary-foreground bg-zinc-950 hover:bg-zinc-800">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Services;