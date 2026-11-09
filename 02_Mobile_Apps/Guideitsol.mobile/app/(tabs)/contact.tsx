import * as WebBrowser from 'expo-web-browser';
import { Mail, MapPin, MessageCircle, Phone, Send, AlertCircle } from 'lucide-react-native';
import React, { useState } from 'react';
import { Alert, Linking, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AnimatedServiceIcon, AnimatedActionIcon } from '../../components/AnimatedIcon';

export default function ContactScreen() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};
    
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    const emailBody = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService Interest: ${form.service}\n\nMessage:\n${form.message}`;
    const emailSubject = `Contact Form Submission from ${form.name}`;
    
    try {
      const emailUrl = `mailto:info@guideitsol.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      if (Platform.OS === 'web') {
        await WebBrowser.openBrowserAsync(emailUrl);
      } else {
        await Linking.openURL(emailUrl);
      }
      
      Alert.alert(
        'Thank You!',
        'Your email client has been opened. Please send the email to complete your inquiry.',
        [{ text: 'OK', onPress: () => setForm({ name: '', email: '', phone: '', service: '', message: '' }) }]
      );
    } catch (error) {
      Alert.alert('Error', 'Unable to open email client. Please contact us directly at info@guideitsol.com');
    }
  };

  const handleWhatsApp = async () => {
    const message = "Hello! I'm interested in your services. Can you please provide more information?";
    const whatsappUrl = `https://wa.me/918500647979?text=${encodeURIComponent(message)}`;
    
    try {
      if (Platform.OS === 'web') {
        await WebBrowser.openBrowserAsync(whatsappUrl);
      } else {
        await Linking.openURL(whatsappUrl);
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to open WhatsApp. Please contact us directly at +91 8500 64 7979');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerBanner}>
          <View style={styles.headerOverlay}>
            <Text style={styles.headerTitle}>Contact Us</Text>
            <Text style={styles.headerSubtitle}>
              Get in touch for a free consultation
            </Text>
          </View>
        </View>

        <View style={styles.contactInfo}>
          <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL('tel:+918500647979')}>
            <View style={[styles.contactIcon, { backgroundColor: '#8B5CF6' }]}>
              <AnimatedServiceIcon
                Icon={Phone}
                size={20}
                color="white"
                onPress={() => Linking.openURL('tel:+918500647979')}
              />
            </View>
            <View style={styles.contactDetails}>
              <Text style={styles.contactLabel}>Phone</Text>
              <Text style={styles.contactValue}>+91 8500 64 7979</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={() => Linking.openURL('mailto:info@guideitsol.com')}>
            <View style={[styles.contactIcon, { backgroundColor: '#10B981' }]}>
              <AnimatedServiceIcon
                Icon={Mail}
                size={20}
                color="white"
                onPress={() => Linking.openURL('mailto:info@guideitsol.com')}
              />
            </View>
            <View style={styles.contactDetails}>
              <Text style={styles.contactLabel}>Email</Text>
              <Text style={styles.contactValue}>info@guideitsol.com</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.contactItem} onPress={handleWhatsApp}>
            <View style={[styles.contactIcon, { backgroundColor: '#25D366' }]}>
              <AnimatedServiceIcon
                Icon={MessageCircle}
                size={20}
                color="white"
                onPress={handleWhatsApp}
              />
            </View>
            <View style={styles.contactDetails}>
              <Text style={styles.contactLabel}>WhatsApp</Text>
              <Text style={styles.contactValue}>Send Message</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.contactItem}>
            <View style={[styles.contactIcon, { backgroundColor: '#F59E0B' }]}>
              <AnimatedServiceIcon
                Icon={MapPin}
                size={20}
                color="white"
              />
            </View>
            <View style={styles.contactDetails}>
              <Text style={styles.contactLabel}>Address</Text>
              <Text style={styles.contactValue}>Vijayadigitals, Guntur{'\n'}HSR Layout, Bangalore{'\n'}Hyderabad</Text>
            </View>
          </View>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Send us a Message</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name *</Text>
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              value={form.name}
              onChangeText={(text) => {
                setForm({ ...form, name: text });
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              placeholder="Enter your full name"
              placeholderTextColor="#6B7280"
            />
            {errors.name && (
              <View style={styles.errorContainer}>
                <AnimatedServiceIcon
                  Icon={AlertCircle}
                  size={16}
                  color="#EF4444"
                />
                <Text style={styles.errorText}>{errors.name}</Text>
              </View>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address *</Text>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              value={form.email}
              onChangeText={(text) => {
                setForm({ ...form, email: text });
                if (errors.email) setErrors({ ...errors, email: undefined });
              }}
              placeholder="Enter your email"
              placeholderTextColor="#6B7280"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            {errors.email && (
              <View style={styles.errorContainer}>
                <AnimatedServiceIcon
                  Icon={AlertCircle}
                  size={16}
                  color="#EF4444"
                />
                <Text style={styles.errorText}>{errors.email}</Text>
              </View>
            )}
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Phone Number</Text>
            <TextInput
              style={styles.input}
              value={form.phone}
              onChangeText={(text) => setForm({ ...form, phone: text })}
              placeholder="Enter your phone number"
              placeholderTextColor="#6B7280"
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Service Interest</Text>
            <TextInput
              style={styles.input}
              value={form.service}
              onChangeText={(text) => setForm({ ...form, service: text })}
              placeholder="IT Services, Visa Services, etc."
              placeholderTextColor="#6B7280"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Message *</Text>
            <TextInput
              style={[styles.input, styles.textArea, errors.message && styles.inputError]}
              value={form.message}
              onChangeText={(text) => {
                setForm({ ...form, message: text });
                if (errors.message) setErrors({ ...errors, message: undefined });
              }}
              placeholder="Tell us about your project or requirements"
              placeholderTextColor="#6B7280"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
            {errors.message && (
              <View style={styles.errorContainer}>
                <AnimatedServiceIcon
                  Icon={AlertCircle}
                  size={16}
                  color="#EF4444"
                />
                <Text style={styles.errorText}>{errors.message}</Text>
              </View>
            )}
          </View>

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <View style={styles.submitGradient}>
              <AnimatedActionIcon
                Icon={Send}
                size={20}
                color="white"
                onPress={handleSubmit}
              />
              <Text style={styles.submitText}>Send Message</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.businessHours}>
          <Text style={styles.businessTitle}>Business Hours</Text>
          <View style={styles.hoursContainer}>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Monday - Friday</Text>
              <Text style={styles.timeText}>9:00 AM - 6:00 PM</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Saturday</Text>
              <Text style={styles.timeText}>10:00 AM - 4:00 PM</Text>
            </View>
            <View style={styles.hoursRow}>
              <Text style={styles.dayText}>Sunday</Text>
              <Text style={styles.timeText}>Closed</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111827',
  },
  headerBanner: {
    backgroundColor: '#1F2937',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#374151',
  },
  headerOverlay: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#D1D5DB',
    lineHeight: 22,
    textAlign: 'center',
  },
  contactInfo: {
    padding: 20,
    gap: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    padding: 20,
    borderRadius: 16,
    gap: 15,
    borderWidth: 1,
    borderColor: '#374151',
  },
  contactDetails: {
    flex: 1,
  },
  contactIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F9FAFB',
  },
  formContainer: {
    margin: 20,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 25,
    borderWidth: 1,
    borderColor: '#374151',
  },
  formTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 25,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#F9FAFB',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#F9FAFB',
    backgroundColor: '#111827',
  },
  inputError: {
    borderColor: '#EF4444',
  },
  textArea: {
    height: 100,
    paddingTop: 12,
  },
  submitButton: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  submitGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    gap: 10,
    backgroundColor: '#8B5CF6',
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  businessHours: {
    margin: 20,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 25,
    borderWidth: 1,
    borderColor: '#374151',
  },
  businessTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 20,
    textAlign: 'center',
  },
  hoursContainer: {
    gap: 15,
  },
  hoursRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dayText: {
    fontSize: 16,
    color: '#F9FAFB',
    fontWeight: '500',
  },
  timeText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 5,
  },
  errorText: {
    fontSize: 14,
    color: '#EF4444',
  },
});