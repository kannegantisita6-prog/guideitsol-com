import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import { ArrowRight, CheckCircle } from "lucide-react-native";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ITServiceDetailScreen() {
  const { service } = useLocalSearchParams();

  const serviceDetails: Record<string, any> = {
    consulting: {
      title: "IT Consulting & Strategy",
      description: "Transform your business with strategic technology consulting and digital transformation services.",
      benefits: [
        "Digital transformation roadmap",
        "Enterprise architecture design",
        "Cloud migration strategy",
        "DevOps implementation",
        "Technology assessment",
        "Cost optimization"
      ],
      process: [
        "Initial consultation and assessment",
        "Strategy development and planning",
        "Implementation roadmap creation",
        "Execution and monitoring",
        "Continuous optimization"
      ],
      gradient: ["#667eea", "#764ba2"],
    },
    development: {
      title: "Software Development",
      description: "Custom software solutions built with cutting-edge technologies and best practices.",
      benefits: [
        "Custom web applications",
        "Mobile app development (iOS/Android)",
        "React Native cross-platform apps",
        "API development and integration",
        "Database design and optimization",
        "Quality assurance and testing"
      ],
      process: [
        "Requirements gathering and analysis",
        "UI/UX design and prototyping",
        "Development and coding",
        "Testing and quality assurance",
        "Deployment and launch",
        "Maintenance and support"
      ],
      gradient: ["#f093fb", "#f5576c"],
    },
    design: {
      title: "UI/UX Design",
      description: "User-centered design solutions that create exceptional digital experiences.",
      benefits: [
        "User research and personas",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design system creation",
        "Accessibility compliance"
      ],
      process: [
        "Discovery and research phase",
        "Information architecture",
        "Wireframing and prototyping",
        "Visual design creation",
        "User testing and iteration",
        "Design handoff and support"
      ],
      gradient: ["#4facfe", "#00f2fe"],
    },
    analytics: {
      title: "Data & Analytics",
      description: "Transform your data into actionable insights with advanced analytics and AI solutions.",
      benefits: [
        "Data pipeline development",
        "Business intelligence dashboards",
        "Machine learning models",
        "Predictive analytics",
        "Data visualization",
        "AI/ML consulting"
      ],
      process: [
        "Data assessment and strategy",
        "Infrastructure setup",
        "Data pipeline development",
        "Analytics implementation",
        "Model training and deployment",
        "Monitoring and optimization"
      ],
      gradient: ["#43e97b", "#38f9d7"],
    },
    security: {
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your business from cyber threats.",
      benefits: [
        "Security assessment and auditing",
        "Threat detection and prevention",
        "Compliance and risk management",
        "Security operations center (SOC)",
        "Incident response planning",
        "Employee security training"
      ],
      process: [
        "Security assessment and gap analysis",
        "Risk evaluation and prioritization",
        "Security solution implementation",
        "Monitoring and threat detection",
        "Incident response and recovery",
        "Continuous security improvement"
      ],
      gradient: ["#fa709a", "#fee140"],
    },
    marketing: {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to grow your business and reach your target audience.",
      benefits: [
        "Search engine optimization (SEO)",
        "Pay-per-click advertising (PPC)",
        "Social media marketing",
        "Content marketing strategy",
        "Email marketing campaigns",
        "Analytics and reporting"
      ],
      process: [
        "Market research and analysis",
        "Strategy development",
        "Campaign creation and launch",
        "Performance monitoring",
        "Optimization and refinement",
        "Reporting and insights"
      ],
      gradient: ["#a8edea", "#fed6e3"],
    },
  };

  const currentService = serviceDetails[service as string];

  if (!currentService) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Service not found</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={currentService.gradient}
          style={styles.header}
        >
          <Text style={styles.headerTitle}>{currentService.title}</Text>
          <Text style={styles.headerDescription}>{currentService.description}</Text>
        </LinearGradient>

        {/* Benefits Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What We Offer</Text>
          <View style={styles.benefitsList}>
            {currentService.benefits.map((benefit: string, index: number) => (
              <View key={index} style={styles.benefitItem}>
                <CheckCircle size={20} color="#4CAF50" />
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Process Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Process</Text>
          <View style={styles.processList}>
            {currentService.process.map((step: string, index: number) => (
              <View key={index} style={styles.processItem}>
                <View style={styles.processNumber}>
                  <Text style={styles.processNumberText}>{index + 1}</Text>
                </View>
                <Text style={styles.processText}>{step}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <LinearGradient
            colors={currentService.gradient}
            style={styles.ctaCard}
          >
            <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
            <Text style={styles.ctaSubtitle}>
              Let's discuss your project requirements and create a custom solution for your business.
            </Text>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => router.push("/contact")}
            >
              <Text style={styles.ctaButtonText}>Start Your Project</Text>
              <ArrowRight size={20} color={currentService.gradient[0]} />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
  },
  headerDescription: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 24,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  benefitsList: {
    gap: 15,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    gap: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  benefitText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
  },
  processList: {
    gap: 15,
  },
  processItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    gap: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  processNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#667eea",
    justifyContent: "center",
    alignItems: "center",
  },
  processNumberText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  processText: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    lineHeight: 22,
  },
  ctaSection: {
    padding: 20,
    paddingBottom: 40,
  },
  ctaCard: {
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
  ctaSubtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 25,
    textAlign: "center",
    lineHeight: 24,
  },
  ctaButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderRadius: 25,
    gap: 10,
  },
  ctaButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#667eea",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#667eea",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  backButtonText: {
    color: "white",
    fontWeight: "600",
  },
});