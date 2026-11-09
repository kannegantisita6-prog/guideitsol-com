import { ArrowRight, Code, Smartphone, Globe, Database, Cloud, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.',
    features: ['Enterprise Applications', 'API Development', 'System Integration', 'Legacy Modernization'],
    link: '/custom-software-development'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Responsive, fast, and secure web applications using modern frameworks and best practices.',
    features: ['React/Angular Apps', 'E-commerce Platforms', 'CMS Development', 'Progressive Web Apps'],
    link: '/web-development'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android with exceptional user experience.',
    features: ['Native iOS/Android', 'React Native', 'Flutter Apps', 'IoT Integration'],
    link: '/mobile-app-development'
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to optimize performance and reduce costs.',
    features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps Setup', 'Serverless Architecture'],
    link: '/cloud-solutions'
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Transform raw data into actionable insights with our comprehensive data engineering services.',
    features: ['Data Analytics', 'Big Data Processing', 'Data Warehousing', 'BI Solutions'],
    link: '/data-engineering'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance Setup', 'Threat Monitoring'],
    link: '/cybersecurity'
  }
];

const ServicesOverview = () => {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Our Expertise
          </div>
          <h2 className="heading-2">
            Comprehensive IT Services for 
            <span className="text-primary"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From custom software development to cloud solutions, we provide end-to-end 
            IT services that drive innovation and accelerate business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="card-elevated bg-card border-0 h-full group cursor-pointer">
              <CardContent className="p-8 space-y-6">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button className="btn-primary">
            View All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;