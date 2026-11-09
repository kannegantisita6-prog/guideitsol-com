import { router, useLocalSearchParams } from "expo-router";
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp,
  GraduationCap,
  Briefcase,
  MapPin,
  RotateCcw,
  Shield,
  Globe2,
  Star,
  Award
} from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VisaServiceDetailScreen() {
  const { service } = useLocalSearchParams();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const serviceDetails: Record<string, any> = {
    "study-abroad": {
      title: "Study Abroad Visas",
      description: "Achieve your dreams with the right study visa guidance and support for top universities worldwide.",
      benefits: [
        "Access to top universities globally",
        "Smooth application process",
        "Visa approval support and guidance",
        "Document preparation assistance",
        "Interview preparation coaching",
        "Post-arrival support services"
      ],
      process: [
        "University application and admission",
        "Document collection and verification",
        "Visa application submission",
        "Interview preparation and scheduling",
        "Visa approval and travel arrangements",
        "Pre-departure orientation"
      ],
      documents: [
        "Valid passport",
        "University admission letter",
        "Financial proof and bank statements",
        "Academic transcripts and certificates",
        "English proficiency test scores",
        "Statement of purpose",
        "Passport-sized photographs"
      ],
      faqs: [
        {
          question: "How long does the student visa process take?",
          answer: "The processing time varies by country, typically ranging from 2-8 weeks. We recommend applying at least 3 months before your intended travel date."
        },
        {
          question: "What are the financial requirements?",
          answer: "You need to demonstrate sufficient funds to cover tuition fees and living expenses. The exact amount varies by country and institution."
        },
        {
          question: "Can I work while studying?",
          answer: "Most countries allow part-time work for international students, typically 20 hours per week during studies and full-time during breaks."
        }
      ],
      color: "#8B5CF6",
      icon: GraduationCap,
      bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop",
    },
    "work-business": {
      title: "Work & Business Visas",
      description: "Professional immigration solutions for skilled workers and business investors seeking opportunities abroad.",
      benefits: [
        "Skilled worker visa processing",
        "Business and investor visa support",
        "Job offer verification assistance",
        "Success stories and testimonials",
        "Legal compliance guidance",
        "Family visa coordination"
      ],
      process: [
        "Job offer or business plan verification",
        "Eligibility assessment and documentation",
        "Visa application preparation",
        "Supporting document compilation",
        "Application submission and tracking",
        "Visa approval and work authorization"
      ],
      documents: [
        "Valid passport",
        "Job offer letter or business plan",
        "Educational qualifications",
        "Work experience certificates",
        "Financial statements",
        "Medical examination reports",
        "Police clearance certificates"
      ],
      faqs: [
        {
          question: "Do I need a job offer before applying?",
          answer: "For most work visas, yes. However, some countries offer points-based systems where you can apply without a specific job offer."
        },
        {
          question: "Can my family accompany me?",
          answer: "Most work visas allow you to include your spouse and dependent children in your application."
        },
        {
          question: "What is the minimum investment for business visas?",
          answer: "Investment requirements vary by country, typically ranging from $100,000 to $1,000,000 depending on the visa category."
        }
      ],
      color: "#7C3AED",
      icon: Briefcase,
      bgImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop",
    },
    "travel-tourism": {
      title: "Travel & Tourism Visas",
      description: "Quick approval for tourist visas, family visits, and transit visas to your favorite destinations.",
      benefits: [
        "Quick visa approval process",
        "Multiple destination support",
        "Family-friendly visa services",
        "Transit visa assistance",
        "Travel insurance guidance",
        "Itinerary planning support"
      ],
      process: [
        "Destination and visa type selection",
        "Document preparation and review",
        "Application form completion",
        "Appointment scheduling",
        "Visa submission and processing",
        "Travel document collection"
      ],
      documents: [
        "Valid passport (6+ months validity)",
        "Completed visa application form",
        "Passport-sized photographs",
        "Travel itinerary and bookings",
        "Financial proof and bank statements",
        "Travel insurance policy",
        "Invitation letter (if applicable)"
      ],
      faqs: [
        {
          question: "How early should I apply for a tourist visa?",
          answer: "We recommend applying 4-6 weeks before your planned travel date to allow sufficient processing time."
        },
        {
          question: "What if my visa application is rejected?",
          answer: "We provide guidance on reapplication and help address the reasons for rejection to improve your chances."
        },
        {
          question: "Can I extend my tourist visa?",
          answer: "Extension policies vary by country. Some allow extensions while others require you to leave and reapply."
        }
      ],
      color: "#6366F1",
      icon: MapPin,
      bgImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=600&fit=crop",
    },
    "extension-renewal": {
      title: "Visa Extension & Renewal",
      description: "Extend your stay without stress with our comprehensive visa extension and renewal services.",
      benefits: [
        "Student visa extensions",
        "Work visa renewals",
        "Tourist visa extensions",
        "Status change assistance",
        "Legal compliance support",
        "Emergency extension services"
      ],
      process: [
        "Current visa status verification",
        "Extension eligibility assessment",
        "Required documentation gathering",
        "Application preparation and submission",
        "Processing status monitoring",
        "New visa document collection"
      ],
      documents: [
        "Current valid passport",
        "Existing visa documentation",
        "Extension application form",
        "Updated financial statements",
        "Continued enrollment/employment proof",
        "Medical examination (if required)",
        "Passport-sized photographs"
      ],
      faqs: [
        {
          question: "When should I apply for an extension?",
          answer: "Apply at least 45-60 days before your current visa expires to avoid any gaps in legal status."
        },
        {
          question: "What happens if I overstay my visa?",
          answer: "Overstaying can result in penalties, deportation, or future visa restrictions. Contact us immediately for assistance."
        },
        {
          question: "Can I travel while my extension is being processed?",
          answer: "Travel policies during processing vary by country and visa type. We'll advise you based on your specific situation."
        }
      ],
      color: "#8B5CF6",
      icon: RotateCcw,
      bgImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=600&fit=crop",
    },
    "document-verification": {
      title: "Document Verification & Attestation",
      description: "Professional document authentication, embassy attestation, and translation services.",
      benefits: [
        "Document authentication services",
        "Embassy and consulate attestation",
        "Certified translation support",
        "Apostille services",
        "Government-recognized verification",
        "Secure document handling"
      ],
      process: [
        "Document submission and review",
        "Verification and authentication",
        "Embassy/consulate attestation",
        "Translation services (if needed)",
        "Quality check and certification",
        "Secure document delivery"
      ],
      documents: [
        "Educational certificates and transcripts",
        "Birth and marriage certificates",
        "Employment and experience letters",
        "Medical certificates",
        "Police clearance certificates",
        "Power of attorney documents",
        "Commercial and business documents"
      ],
      faqs: [
        {
          question: "What is document attestation?",
          answer: "Attestation is the process of verifying the authenticity of documents by authorized government officials or agencies."
        },
        {
          question: "How long does the attestation process take?",
          answer: "Processing time varies from 5-15 working days depending on the document type and country requirements."
        },
        {
          question: "Do you provide translation services?",
          answer: "Yes, we offer certified translation services in multiple languages by qualified translators."
        }
      ],
      color: "#7C3AED",
      icon: Shield,
      bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop",
    },
    "immigration-consultation": {
      title: "Immigration Consultation",
      description: "Expert guidance for permanent residency, green card applications, and citizenship processes.",
      benefits: [
        "Permanent residency applications",
        "Green card support and guidance",
        "Citizenship application assistance",
        "Immigration law consultation",
        "Family reunification services",
        "Settlement support services"
      ],
      process: [
        "Immigration assessment and evaluation",
        "Strategy development and planning",
        "Application preparation and filing",
        "Interview preparation and coaching",
        "Application tracking and follow-up",
        "Settlement and integration support"
      ],
      documents: [
        "Valid passport and travel history",
        "Educational qualifications",
        "Work experience certificates",
        "Language proficiency test results",
        "Medical examination reports",
        "Police clearance certificates",
        "Financial proof and tax returns"
      ],
      faqs: [
        {
          question: "What are the requirements for permanent residency?",
          answer: "Requirements vary by country but typically include education, work experience, language proficiency, and financial stability."
        },
        {
          question: "How long does the immigration process take?",
          answer: "Processing times range from 6 months to several years depending on the country and immigration program."
        },
        {
          question: "Can I include my family in my application?",
          answer: "Most immigration programs allow you to include your spouse and dependent children in your application."
        }
      ],
      color: "#6366F1",
      icon: Globe2,
      bgImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop",
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
        <View style={styles.header}>
          <Image 
            source={{ uri: currentService.bgImage }}
            style={styles.headerBgImage}
          />
          <View style={styles.headerOverlay}>
            <View style={[styles.headerIconContainer, { backgroundColor: currentService.color }]}>
              <currentService.icon size={32} color="white" />
            </View>
            <Text style={styles.headerTitle}>{currentService.title}</Text>
            <Text style={styles.headerDescription}>{currentService.description}</Text>
            <View style={styles.headerStats}>
              <View style={styles.headerStatItem}>
                <Star size={16} color="#F59E0B" />
                <Text style={styles.headerStatText}>Expert Service</Text>
              </View>
              <View style={styles.headerStatItem}>
                <Award size={16} color="#10B981" />
                <Text style={styles.headerStatText}>Trusted Process</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Benefits Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Benefits</Text>
          <View style={styles.benefitsList}>
            {currentService.benefits.map((benefit: string, index: number) => (
              <View key={index} style={styles.benefitItem}>
                <CheckCircle2 size={20} color={currentService.color} />
                <Text style={styles.benefitText}>{benefit}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Process Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Step-by-Step Process</Text>
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

        {/* Required Documents */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Required Documents</Text>
          <View style={styles.documentsList}>
            {currentService.documents.map((document: string, index: number) => (
              <View key={index} style={styles.documentItem}>
                <View style={styles.documentBullet} />
                <Text style={styles.documentText}>{document}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* FAQ Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
          <View style={styles.faqList}>
            {currentService.faqs.map((faq: any, index: number) => (
              <View key={index} style={styles.faqItem}>
                <TouchableOpacity
                  style={styles.faqQuestion}
                  onPress={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <Text style={styles.faqQuestionText}>{faq.question}</Text>
                  {expandedFaq === index ? (
                    <ChevronUp size={20} color="#666" />
                  ) : (
                    <ChevronDown size={20} color="#666" />
                  )}
                </TouchableOpacity>
                {expandedFaq === index && (
                  <View style={styles.faqAnswer}>
                    <Text style={styles.faqAnswerText}>{faq.answer}</Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <View style={styles.ctaCard}>
            <View style={[styles.ctaIconContainer, { backgroundColor: currentService.color }]}>
              <currentService.icon size={28} color="white" />
            </View>
            <Text style={styles.ctaTitle}>Ready to Start Your Application?</Text>
            <Text style={styles.ctaSubtitle}>
              Book a free consultation with our visa experts and get personalized guidance for your application.
            </Text>
            <TouchableOpacity
              style={[styles.ctaButton, { backgroundColor: currentService.color }]}
              onPress={() => router.push("/contact")}
            >
              <Text style={styles.ctaButtonText}>Book Free Consultation</Text>
              <ArrowRight size={20} color="white" />
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
  header: {
    height: 300,
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
    backgroundColor: 'rgba(15, 15, 35, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerIconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 12,
    textAlign: 'center',
  },
  headerDescription: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  headerStats: {
    flexDirection: 'row',
    gap: 24,
  },
  headerStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headerStatText: {
    fontSize: 14,
    color: '#E5E7EB',
    fontWeight: '500',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  benefitsList: {
    gap: 15,
  },
  benefitItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A2E",
    padding: 16,
    borderRadius: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: "#2D2D44",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  benefitText: {
    fontSize: 16,
    color: "#E5E7EB",
    flex: 1,
  },
  processList: {
    gap: 15,
  },
  processItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A2E",
    padding: 20,
    borderRadius: 16,
    gap: 15,
    borderWidth: 1,
    borderColor: "#2D2D44",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  processNumber: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#8B5CF6",
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
    color: "#E5E7EB",
    flex: 1,
    lineHeight: 22,
  },
  documentsList: {
    backgroundColor: "#1A1A2E",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#2D2D44",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  documentItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 12,
  },
  documentBullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#8B5CF6",
  },
  documentText: {
    fontSize: 16,
    color: "#E5E7EB",
    flex: 1,
  },
  faqList: {
    gap: 10,
  },
  faqItem: {
    backgroundColor: "#1A1A2E",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#2D2D44",
    shadowColor: "#8B5CF6",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  faqQuestion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  faqQuestionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    flex: 1,
    marginRight: 10,
  },
  faqAnswer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: "#2D2D44",
  },
  faqAnswerText: {
    fontSize: 15,
    color: "#9CA3AF",
    lineHeight: 22,
    marginTop: 15,
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
  ctaIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
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
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 16,
    gap: 10,
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
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#8B5CF6",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 16,
  },
  backButtonText: {
    color: "white",
    fontWeight: "600",
  },
});