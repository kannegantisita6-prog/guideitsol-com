import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, TrendingUp, Users, Award, Shield, Clock, Globe } from "lucide-react";

interface FeaturedCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  badge?: string;
  features: string[];
  stats?: { label: string; value: string }[];
}

interface FeaturedCardsSectionProps {
  title: string;
  subtitle: string;
  cards: FeaturedCard[];
}

const FeaturedCardsSection = ({ title, subtitle, cards }: FeaturedCardsSectionProps) => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 gradient-text">{title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card border-0 overflow-hidden group">
                <CardHeader className="relative">
                  <div className={`absolute inset-0 ${card.gradient} opacity-10`} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl ${card.gradient}`}>
                        {card.icon}
                      </div>
                      {card.badge && (
                        <Badge variant="secondary" className="bg-electric-blue/20 text-electric-blue">
                          {card.badge}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2">{card.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {card.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {card.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  {card.stats && (
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                      {card.stats.map((stat, statIndex) => (
                        <motion.div
                          key={statIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: statIndex * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-lg font-bold gradient-text">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCardsSection;
