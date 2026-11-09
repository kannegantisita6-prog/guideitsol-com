import { router } from 'expo-router';
import { Eye, EyeOff, LogIn, Mail, User, UserPlus, AlertCircle } from 'lucide-react-native';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from './auth/AuthContext';

export default function LandingScreen() {
  const { login, register, isLoading } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    password?: string;
  }>({});
  
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password: string): boolean => {
    return password.length >= 6;
  };
  
  const validateForm = (): boolean => {
    const newErrors: typeof errors = {};
    
    if (!isLoginMode && !form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(form.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (!validatePassword(form.password)) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      let success = false;
      if (isLoginMode) {
        success = await login(form.email, form.password);
      } else {
        success = await register(form.name, form.email, form.password);
      }

      if (success) {
        router.replace('/(tabs)');
      } else {
        Alert.alert(
          'Error',
          isLoginMode 
            ? 'Invalid credentials. Please try again.' 
            : 'Registration failed. Please try again.'
        );
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setForm({ name: '', email: '', password: '' });
    setErrors({});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Header with Logo */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center' }}
              style={styles.logo}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.companyName}>GuideSoft</Text>
          <Text style={styles.tagline}>Your Gateway to IT Solutions & Visa Services</Text>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <View style={styles.heroCard}>
            <Text style={styles.heroTitle}>
              {isLoginMode ? 'Welcome Back!' : 'Join GuideSoft'}
            </Text>
            <Text style={styles.heroSubtitle}>
              {isLoginMode 
                ? 'Sign in to access your personalized dashboard'
                : 'Create your account to get started with our services'
              }
            </Text>
          </View>
        </View>

        {/* Auth Form */}
        <View style={styles.formContainer}>
          <View style={styles.formHeader}>
            <Text style={styles.formTitle}>
              {isLoginMode ? 'Sign In' : 'Create Account'}
            </Text>
          </View>

          {!isLoginMode && (
            <View style={styles.inputContainer}>
              <View style={[styles.inputWrapper, errors.name && styles.inputError]}>
                <User size={20} color={errors.name ? "#EF4444" : "#8B5CF6"} style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Full Name"
                  placeholderTextColor="#6B7280"
                  value={form.name}
                  onChangeText={(text) => {
                    setForm({ ...form, name: text });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  autoCapitalize="words"
                />
              </View>
              {errors.name && (
                <View style={styles.errorContainer}>
                  <AlertCircle size={16} color="#EF4444" />
                  <Text style={styles.errorText}>{errors.name}</Text>
                </View>
              )}
            </View>
          )}

          <View style={styles.inputContainer}>
            <View style={[styles.inputWrapper, errors.email && styles.inputError]}>
              <Mail size={20} color={errors.email ? "#EF4444" : "#8B5CF6"} style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#6B7280"
                value={form.email}
                onChangeText={(text) => {
                  setForm({ ...form, email: text });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                keyboardType="email-address"
                autoCapitalize="none"
                autoComplete="email"
              />
            </View>
            {errors.email && (
              <View style={styles.errorContainer}>
                <AlertCircle size={16} color="#EF4444" />
                <Text style={styles.errorText}>{errors.email}</Text>
              </View>
            )}
          </View>

          <View style={styles.inputContainer}>
            <View style={[styles.inputWrapper, errors.password && styles.inputError]}>
              <TouchableOpacity
                style={styles.inputIcon}
                onPress={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={20} color={errors.password ? "#EF4444" : "#8B5CF6"} />
                ) : (
                  <Eye size={20} color={errors.password ? "#EF4444" : "#8B5CF6"} />
                )}
              </TouchableOpacity>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#6B7280"
                value={form.password}
                onChangeText={(text) => {
                  setForm({ ...form, password: text });
                  if (errors.password) setErrors({ ...errors, password: undefined });
                }}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
            </View>
            {errors.password && (
              <View style={styles.errorContainer}>
                <AlertCircle size={16} color="#EF4444" />
                <Text style={styles.errorText}>{errors.password}</Text>
              </View>
            )}
          </View>

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            disabled={isLoading}
          >
            <View style={styles.submitGradient}>
              {isLoading ? (
                <ActivityIndicator color="white" size="small" />
              ) : (
                <>
                  {isLoginMode ? (
                    <LogIn size={20} color="white" />
                  ) : (
                    <UserPlus size={20} color="white" />
                  )}
                  <Text style={styles.submitText}>
                    {isLoginMode ? 'Sign In' : 'Create Account'}
                  </Text>
                </>
              )}
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.toggleButton} onPress={toggleMode}>
            <Text style={styles.toggleText}>
              {isLoginMode 
                ? "Don't have an account? " 
                : "Already have an account? "
              }
              <Text style={styles.toggleLink}>
                {isLoginMode ? 'Sign Up' : 'Sign In'}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>

        {/* Features Preview */}
        <View style={styles.featuresSection}>
          <Text style={styles.featuresTitle}>Why Choose GuideSoft?</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <View style={[styles.featureIcon, { backgroundColor: '#8B5CF6' }]}>
                <Text style={styles.featureEmoji}>💻</Text>
              </View>
              <Text style={styles.featureTitle}>IT Solutions</Text>
              <Text style={styles.featureDesc}>Complete software development & consulting</Text>
            </View>
            
            <View style={styles.featureCard}>
              <View style={[styles.featureIcon, { backgroundColor: '#10B981' }]}>
                <Text style={styles.featureEmoji}>🌍</Text>
              </View>
              <Text style={styles.featureTitle}>Visa Services</Text>
              <Text style={styles.featureDesc}>Expert guidance for all visa types</Text>
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
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 30,
  },
  logoContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#8B5CF6',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  companyName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 8,
  },
  tagline: {
    fontSize: 16,
    color: '#D1D5DB',
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 22,
  },
  heroSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  heroCard: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#374151',
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#D1D5DB',
    textAlign: 'center',
    lineHeight: 22,
  },
  formContainer: {
    marginHorizontal: 20,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 30,
    borderWidth: 1,
    borderColor: '#374151',
    marginBottom: 30,
  },
  formHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F9FAFB',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#374151',
    borderRadius: 8,
    backgroundColor: '#111827',
    paddingHorizontal: 15,
    height: 55,
  },
  inputError: {
    borderColor: '#EF4444',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#F9FAFB',
    height: '100%',
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
    paddingVertical: 18,
    gap: 10,
    backgroundColor: '#8B5CF6',
  },
  submitText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  toggleButton: {
    marginTop: 25,
    alignItems: 'center',
  },
  toggleText: {
    fontSize: 16,
    color: '#9CA3AF',
  },
  toggleLink: {
    color: '#8B5CF6',
    fontWeight: 'bold',
  },
  featuresSection: {
    paddingHorizontal: 20,
  },
  featuresTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F9FAFB',
    textAlign: 'center',
    marginBottom: 25,
  },
  featuresGrid: {
    flexDirection: 'row',
    gap: 15,
  },
  featureCard: {
    flex: 1,
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#374151',
  },
  featureIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  featureEmoji: {
    fontSize: 24,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F9FAFB',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDesc: {
    fontSize: 14,
    color: '#9CA3AF',
    textAlign: 'center',
    lineHeight: 18,
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