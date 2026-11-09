import { router } from "expo-router";
import { ArrowRight, Building2, FileText, Globe, LogOut, Shield, Smartphone, Users, Code, Database, Palette, Cloud, Monitor, Cpu } from "lucide-react-native";
import React from "react";
import { Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuth } from "../../components/AuthContext";
import { AnimatedServiceIcon, AnimatedTechIcon, AnimatedActionIcon } from "../../components/AnimatedIcon";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: async () => {
            await logout();
            router.replace('/landing');
          }
        },
      ]
    );
  };

  const itServices = [
    { icon: Building2, title: "IT Consulting", desc: "Digital transformation & strategy", color: "#8B5CF6" },
    { icon: Code, title: "Software Development", desc: "Web & mobile applications", color: "#10B981" },
    { icon: Palette, title: "UI/UX Design", desc: "User experience & branding", color: "#F59E0B" },
    { icon: Shield, title: "Cybersecurity", desc: "Threat detection & prevention", color: "#EF4444" },
  ];

  const visaServices = [
    { icon: FileText, title: "Study Abroad", desc: "Student visa guidance", color: "#3B82F6" },
    { icon: Users, title: "Work Visas", desc: "Professional immigration", color: "#8B5CF6" },
    { icon: Globe, title: "Tourism", desc: "Travel visa support", color: "#10B981" },
    { icon: Monitor, title: "Documentation", desc: "Verification & attestation", color: "#F59E0B" },
  ];

  const techStack = [
    { icon: Code, name: "React", color: "#61DAFB" },
    { icon: Smartphone, name: "React Native", color: "#61DAFB" },
    { icon: Database, name: "Node.js", color: "#339933" },
    { icon: Cloud, name: "AWS", color: "#FF9900" },
    { icon: Cpu, name: "Python", color: "#3776AB" },
    { icon: Globe, name: "TypeScript", color: "#3178C6" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header with stunning banner */}
        <View style={styles.headerBanner}>
          <View style={styles.headerOverlay}>
            <View style={styles.headerTop}>
              <View style={styles.userInfo}>
                <Image
                  source={{ uri: user?.avatar || 'https://ui-avatars.com/api/?name=User&background=8B5CF6&color=fff' }}
                  style={styles.userAvatar}
                />
                <View>
                  <Text style={styles.welcomeText}>Welcome back,</Text>
                  <Text style={styles.userName}>{user?.name || 'User'}</Text>
                </View>
              </View>
              <AnimatedActionIcon
                Icon={LogOut}
                size={20}
                color="#D1D5DB"
                onPress={handleLogout}
              />
            </View>
            <View style={styles.headerContent}>
              <Text style={styles.companyName}>GuideSoft</Text>
              <Text style={styles.headerSubtitle}>
                Your trusted partner for IT solutions and visa services
              </Text>
            </View>
          </View>
        </View>

        {/* Tech Stack Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Our Tech Stack</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.techStackScroll}>
            {techStack.map((tech, index) => (
              <View key={index} style={styles.techItem}>
                <View style={[styles.techIcon, { backgroundColor: tech.color }]}>
                  <AnimatedTechIcon
                    Icon={tech.icon}
                    size={20}
                    color="white"
                    delay={index * 200}
                  />
                </View>
                <Text style={styles.techName}>{tech.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* IT Services Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>IT Services</Text>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => router.push("/it-services")}
            >
              <Text style={styles.viewAllText}>View All</Text>
              <AnimatedActionIcon
                Icon={ArrowRight}
                size={16}
                color="#8B5CF6"
                onPress={() => router.push("/it-services")}
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.servicesGrid}>
            {itServices.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={styles.serviceCard}
                onPress={() => router.push("/it-services")}
              >
                <View style={[styles.serviceIconContainer, { backgroundColor: service.color }]}>
                  <AnimatedServiceIcon
                    Icon={service.icon}
                    size={24}
                    color="white"
                    onPress={() => router.push("/it-services")}
                  />
                </View>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDesc}>{service.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Visa Services Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Visa Services</Text>
            <TouchableOpacity
              style={styles.viewAllButton}
              onPress={() => router.push("/visa-services")}
            >
              <Text style={styles.viewAllText}>View All</Text>
              <AnimatedActionIcon
                Icon={ArrowRight}
                size={16}
                color="#8B5CF6"
                onPress={() => router.push("/visa-services")}
              />
            </TouchableOpacity>
          </View>
          
          <View style={styles.servicesGrid}>
            {visaServices.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={styles.serviceCard}
                onPress={() => router.push("/visa-services")}
              >
                <View style={[styles.serviceIconContainer, { backgroundColor: service.color }]}>
                  <AnimatedServiceIcon
                    Icon={service.icon}
                    size={24}
                    color="white"
                    onPress={() => router.push("/visa-services")}
                  />
                </View>
                <Text style={styles.serviceTitle}>{service.title}</Text>
                <Text style={styles.serviceDesc}>{service.desc}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <View style={styles.ctaCard}>
            <Text style={styles.ctaTitle}>Ready to Get Started?</Text>
            <Text style={styles.ctaSubtitle}>
              Contact us today for a free consultation
            </Text>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => router.push("/contact")}
            >
              <Text style={styles.ctaButtonText}>Get In Touch</Text>
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
    paddingVertical: 30,
    justifyContent: 'space-between',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#8B5CF6',
  },
  welcomeText: {
    fontSize: 14,
    color: "#9CA3AF",
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F9FAFB',
  },
  logoutButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#374151',
  },
  headerContent: {
    alignItems: "center",
  },
  companyName: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F9FAFB",
    marginBottom: 10,
  },
  headerSubtitle: {
    fontSize: 16,
    color: "#D1D5DB",
    textAlign: "center",
    lineHeight: 22,
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F9FAFB",
  },
  viewAllButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  viewAllText: {
    fontSize: 16,
    color: "#8B5CF6",
    fontWeight: "600",
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  serviceCard: {
    width: (width - 55) / 2,
    backgroundColor: "#1F2937",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#374151",
  },
  serviceIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F9FAFB",
    marginBottom: 8,
    textAlign: "center",
  },
  serviceDesc: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
    lineHeight: 18,
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
    fontSize: 24,
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
  techStackScroll: {
    marginTop: 15,
  },
  techItem: {
    alignItems: "center",
    marginRight: 20,
    width: 70,
  },
  techIcon: {
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  techName: {
    fontSize: 12,
    color: "#D1D5DB",
    textAlign: "center",
    fontWeight: "500",
  },
});