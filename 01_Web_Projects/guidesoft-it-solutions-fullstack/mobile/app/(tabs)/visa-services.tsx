import { router } from "expo-router";
import { 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  RotateCcw, 
  Shield, 
  Users,
  ArrowRight,
  Star,
  CheckCircle2,
  Globe2
} from "lucide-react-native";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedServiceIcon, AnimatedActionIcon } from "../../components/AnimatedIcon";

const { width } = Dimensions.get("window");

export default function VisaServicesScreen() {
  const services = [
    {
      id: "study-abroad",
      icon: GraduationCap,
      title: "Study Abroad Visas",
      description: "Achieve your dreams with the right study visa guidance",
      features: ["Top Universities Access", "Smooth Process", "Visa Approval Support"],
      color: "#8B5CF6",
      bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=400&fit=crop",
      stats: "500+ Students Placed"
    },
    {
      id: "work-business",
      icon: Briefcase,
      title: "Work & Business Visas",
      description: "Professional immigration and business visa solutions",
      features: ["Skilled Worker Visas", "Business/Investor Visas", "Success Stories"],
      color: "#7C3AED",
      bgImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop",
      stats: "300+ Professionals Migrated"
    },
    {
      id: "travel-tourism",
      icon: MapPin,
      title: "Travel & Tourism Visas",
      description: "Quick approval for tourist and family visit visas",
      features: ["Tourist Visas", "Family Visit Visas", "Transit Visas"],
      color: "#6366F1",
      bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=400&fit=crop",
      stats: "1000+ Happy Travelers"
    },
    {
      id: "extension-renewal",
      icon: RotateCcw,
      title: "Visa Extension & Renewal",
      description: "Extend your stay without stress",
      features: ["Student Extensions", "Work Renewals", "Tourist Extensions"],
      color: "#8B5CF6",
      bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=400&fit=crop",
      stats: "95% Success Rate"
    },
    {
      id: "document-verification",
      icon: Shield,
      title: "Document Verification",
      description: "Professional document attestation services",
      features: ["Document Authentication", "Embassy Attestation", "Translation Support"],
      color: "#7C3AED",
      bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
      stats: "Secure & Certified"
    },
    {
      id: "immigration-consultation",
      icon: Globe2,
      title: "Immigration Consultation",
      description: "Expert guidance for permanent residency success",
      features: ["PR Applications", "Green Card Support", "Citizenship Guidance"],
      color: "#6366F1",
      bgImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop",
      stats: "Expert Immigration Lawyers"
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with stunning banner */}
        <View style={styles.headerBanner}>
          <Image 
            source={{ uri: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop" }}
            style={styles.headerBgImage}
          />
          <View style={styles.headerOverlay}>
            <View style={styles.headerContent}>
              <AnimatedServiceIcon
                Icon={Globe2}
                size={48}
                color="#8B5CF6"
              />
              <Text style={styles.headerTitle}>Visa & Immigration Services</Text>
              <Text style={styles.headerSubtitle}>
                Professional visa and immigration services worldwide with expert guidance
              </Text>
              <View style={styles.headerStats}>
                <View style={styles.statItem}>
                  <Star size={16} color="#F59E0B" />
                  <Text style={styles.statText}>4.9/5 Rating</Text>
                </View>
                <View style={styles.statItem}>
                  <CheckCircle2 size={16} color="#10B981" />
                  <Text style={styles.statText}>2000+ Visas Approved</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Services List */}
        <View style={styles.servicesContainer}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceCard}
              onPress={() => router.push(`/visa-services/${service.id}`)}
            >
              <View style={styles.serviceImageContainer}>
                <Image 
                  source={{ uri: service.bgImage }}
                  style={styles.serviceBgImage}
                />
                <View style={styles.serviceImageOverlay}>
                  <View style={[styles.serviceIconContainer, { backgroundColor: service.color }]}>
                    <AnimatedServiceIcon
                      Icon={service.icon}
                      size={28}
                      color="white"
                      onPress={() => router.push(`/visa-services/${service.id}`)}
                    />
                  </View>
                  <Text style={styles.serviceStats}>{service.stats}</Text>
                </View>
              </View>
              
              <View style={styles.serviceContent}>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDescription}>{service.description}</Text>
                
                <View style={styles.featuresContainer}>
                  {service.features.map((feature, idx) => (
                    <View key={idx} style={styles.featureItem}>
                      <AnimatedServiceIcon
                        Icon={CheckCircle2}
                        size={16}
                        color={service.color}
                      />
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
                
                <TouchableOpacity
                  style={[styles.learnMoreButton, { backgroundColor: service.color }]}
                  onPress={() => router.push(`/visa-services/${service.id}`)}
                >
                  <Text style={styles.learnMoreText}>Get Started</Text>
                  <AnimatedActionIcon
                    Icon={ArrowRight}
                    size={16}
                    color="white"
                    onPress={() => router.push(`/visa-services/${service.id}`)}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Ready to Start Your Journey?</Text>
            <Text style={styles.ctaSubtitle}>
              Book a free consultation with our visa experts
            </Text>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => router.push("/contact")}
            >
              <Text style={styles.ctaButtonText}>Book Consultation</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F23",
  },
  headerBanner: {
    height: 280,
    position: 'relative',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },
  headerBgImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 15, 35, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#D1D5DB",
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
  },
  headerStats: {
    flexDirection: 'row',
    gap: 24,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 14,
    color: '#E5E7EB',
    fontWeight: '500',
  },
  servicesContainer: {
    padding: 20,
    gap: 24,
  },
  serviceCard: {
    backgroundColor: "#1A1A2E",
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#2D2D44",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 8,
  },
  serviceImageContainer: {
    height: 160,
    position: 'relative',
  },
  serviceBgImage: {
    width: '100%',
    height: '100%',
  },
  serviceImageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'space-between',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  serviceIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  serviceStats: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    overflow: 'hidden',
  },
  serviceContent: {
    padding: 20,
  },
  serviceTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  serviceDescription: {
    fontSize: 15,
    color: "#9CA3AF",
    lineHeight: 22,
    marginBottom: 16,
  },
  featuresContainer: {
    marginBottom: 20,
    gap: 8,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  featureText: {
    fontSize: 14,
    color: "#D1D5DB",
    flex: 1,
  },
  learnMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
  },
  learnMoreText: {
    fontSize: 15,
    color: "white",
    fontWeight: "600",
  },
  ctaSection: {
    padding: 20,
    paddingBottom: 40,
  },
  ctaCard: {
    backgroundColor: "#1A1A2E",
    borderRadius: 20,
    padding: 32,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2D2D44",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 8,
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
    textAlign: "center",
  },
  ctaSubtitle: {
    fontSize: 16,
    color: "#9CA3AF",
    marginBottom: 28,
    textAlign: "center",
    lineHeight: 24,
  },
  ctaButton: {
    backgroundColor: "#8B5CF6",
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 16,
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});