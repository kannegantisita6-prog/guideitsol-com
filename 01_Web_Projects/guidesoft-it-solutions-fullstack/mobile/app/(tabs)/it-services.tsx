import { router } from "expo-router";
import { BarChart3, Building2, Cloud, Code, Palette, Shield } from "lucide-react-native";
import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AnimatedServiceIcon } from "../../components/AnimatedIcon";

const { width } = Dimensions.get("window");

export default function ITServicesScreen() {
  const services = [
    {
      id: "consulting",
      icon: Building2,
      title: "IT Consulting & Strategy",
      description: "Digital transformation, enterprise architecture, and cloud consulting",
      features: ["Digital Transformation", "Enterprise Architecture", "Cloud & DevOps Consulting"],
      color: "#8B5CF6",
    },
    {
      id: "development",
      icon: Code,
      title: "Software Development",
      description: "Custom web and mobile applications built with modern technologies",
      features: ["Web Application Development", "Mobile App Development", "Custom Software Solutions"],
      color: "#10B981",
    },
    {
      id: "design",
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design and branding solutions",
      features: ["User Research & Wireframing", "Prototyping & Testing", "Product Design & Branding"],
      color: "#F59E0B",
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Data & Analytics",
      description: "Transform your data into actionable insights",
      features: ["Data Engineering", "Business Intelligence", "AI/ML & Generative AI"],
      color: "#EF4444",
    },
    {
      id: "security",
      icon: Shield,
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions for your business",
      features: ["Threat Detection & Prevention", "Compliance & Risk Assessment", "Security Operations Center"],
      color: "#3B82F6",
    },
    {
      id: "marketing",
      icon: Cloud,
      title: "Digital Marketing",
      description: "Grow your business with data-driven marketing strategies",
      features: ["SEO & SEM", "Social Media Marketing", "Performance Marketing"],
      color: "#8B5CF6",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with stunning banner */}
        <View style={styles.headerBanner}>
          <View style={styles.headerOverlay}>
            <Text style={styles.headerTitle}>IT Services</Text>
            <Text style={styles.headerSubtitle}>
              Comprehensive technology solutions for your business
            </Text>
          </View>
        </View>

        {/* Services List */}
        <View style={styles.servicesContainer}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={service.id}
              style={styles.serviceCard}
              onPress={() => router.push(`/it-services/${service.id}`)}
            >
              <View style={[styles.serviceHeader, { backgroundColor: service.color }]}>
                <AnimatedServiceIcon
                  Icon={service.icon}
                  size={32}
                  color="white"
                  onPress={() => router.push(`/it-services/${service.id}`)}
                />
                <View style={styles.serviceHeaderText}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  <Text style={styles.serviceDescription}>{service.description}</Text>
                </View>
              </View>
              
              <View style={styles.serviceContent}>
                <Text style={styles.featuresTitle}>Key Services:</Text>
                {service.features.map((feature, idx) => (
                  <View key={idx} style={styles.featureItem}>
                    <View style={styles.featureBullet} />
                    <Text style={styles.featureText}>{feature}</Text>
                  </View>
                ))}
                
                <TouchableOpacity
                  style={styles.learnMoreButton}
                  onPress={() => router.push(`/it-services/${service.id}`)}
                >
                  <Text style={styles.learnMoreText}>Learn More</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Need Custom IT Solutions?</Text>
            <Text style={styles.ctaSubtitle}>
              Let's discuss your project requirements
            </Text>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => router.push("/contact")}
            >
              <Text style={styles.ctaButtonText}>Start Your Project</Text>
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
    backgroundColor: "#111827",
  },
  headerBanner: {
    backgroundColor: "#1F2937",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#374151",
  },
  headerOverlay: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F9FAFB",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#D1D5DB",
    lineHeight: 22,
    textAlign: 'center',
  },
  servicesContainer: {
    padding: 20,
    gap: 20,
  },
  serviceCard: {
    backgroundColor: "#1F2937",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#374151",
    marginBottom: 5,
  },
  serviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    gap: 15,
  },
  serviceHeaderText: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  serviceDescription: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 18,
  },
  serviceContent: {
    padding: 20,
  },
  featuresTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F9FAFB",
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  featureBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#8B5CF6",
  },
  featureText: {
    fontSize: 14,
    color: "#9CA3AF",
    flex: 1,
  },
  learnMoreButton: {
    marginTop: 15,
    alignSelf: "flex-start",
  },
  learnMoreText: {
    fontSize: 14,
    color: "#8B5CF6",
    fontWeight: "600",
  },
  ctaSection: {
    padding: 20,
    paddingBottom: 40,
  },
  ctaCard: {
    backgroundColor: "#1F2937",
    borderRadius: 16,
    padding: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#374151",
  },
  ctaTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#F9FAFB",
    marginBottom: 10,
    textAlign: "center",
  },
  ctaSubtitle: {
    fontSize: 16,
    color: "#D1D5DB",
    marginBottom: 25,
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: "#8B5CF6",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});