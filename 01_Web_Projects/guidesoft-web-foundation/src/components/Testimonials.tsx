import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO, TechFlow Inc.',
    company: 'TechFlow Inc.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b632?auto=format&fit=crop&w=200&q=80',
    content: 'GuideSoft Solutions transformed our legacy system into a modern, scalable platform. Their expertise in cloud migration and custom development exceeded our expectations. The team delivered on time and within budget.',
    rating: 5,
    project: 'Cloud Migration & Custom CRM'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder & CEO',
    company: 'HealthTech Innovations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    content: 'The mobile app they developed for our healthcare platform has been a game-changer. User engagement increased by 300% and we\'ve received outstanding feedback from both patients and healthcare providers.',
    rating: 5,
    project: 'Healthcare Mobile App'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Head of Digital',
    company: 'RetailMax Global',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    content: 'Our e-commerce platform built by GuideSoft handles millions of transactions seamlessly. Their attention to performance optimization and user experience is remarkable. Highly recommended!',
    rating: 5,
    project: 'E-commerce Platform'
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'VP of Technology',
    company: 'FinanceFirst Bank',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
    content: 'Security and compliance were critical for our financial application. GuideSoft delivered a robust solution that exceeded all regulatory requirements while maintaining excellent user experience.',
    rating: 5,
    project: 'Financial Management System'
  },
  {
    id: 5,
    name: 'Lisa Wang',
    position: 'Product Manager',
    company: 'EduTech Solutions',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    content: 'The eLearning platform they created revolutionized our educational delivery. Student engagement improved dramatically, and the admin tools make content management effortless.',
    rating: 5,
    project: 'eLearning Platform'
  },
  {
    id: 6,
    name: 'Robert Garcia',
    position: 'Operations Director',
    company: 'LogiFlow Enterprises',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content: 'Their supply chain management solution optimized our operations completely. Real-time tracking and analytics have reduced costs by 25% and improved delivery times significantly.',
    rating: 5,
    project: 'Supply Chain Management'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
            Client Success Stories
          </div>
          <h2 className="heading-2">
            What Our Clients Say About
            <span className="text-primary"> Our Work</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover how we've helped businesses across industries achieve their 
            digital transformation goals and drive exceptional results.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <Card className="mx-4 card-elevated bg-card border-0">
                    <CardContent className="p-8 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {/* Client Info */}
                        <div className="text-center lg:text-left space-y-6">
                          <div className="relative inline-block">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-24 h-24 rounded-full mx-auto lg:mx-0 object-cover"
                            />
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                              <Quote className="w-4 h-4 text-primary-foreground" />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold text-card-foreground">
                              {testimonial.name}
                            </h3>
                            <p className="text-muted-foreground">
                              {testimonial.position}
                            </p>
                            <p className="text-primary font-medium">
                              {testimonial.company}
                            </p>
                          </div>

                          {/* Rating */}
                          <div className="flex justify-center lg:justify-start gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                            ))}
                          </div>

                          <div className="text-sm text-muted-foreground bg-muted px-3 py-2 rounded-lg inline-block">
                            Project: {testimonial.project}
                          </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="lg:col-span-2 space-y-6">
                          <blockquote className="text-xl lg:text-2xl leading-relaxed text-card-foreground italic">
                            "{testimonial.content}"
                          </blockquote>
                          
                          <div className="flex items-center justify-between">
                            <div className="text-sm text-muted-foreground">
                              Verified Client Review
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                ))}
                              </div>
                              <span>5.0</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-card hover:bg-primary hover:text-primary-foreground"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-card hover:bg-primary hover:text-primary-foreground"
            onClick={nextTestimonial}
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Retention Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99%</div>
              <div className="text-sm text-muted-foreground">Project Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;