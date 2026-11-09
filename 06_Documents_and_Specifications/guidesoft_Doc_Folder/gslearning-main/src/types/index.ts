export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  subscriptionStatus: 'free' | 'premium' | 'expired';
  subscriptionExpiry?: Date;
  createdAt: Date;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  category: string;
  isPremium: boolean;
  instructor: string;
  rating: number;
  students: number;
  createdAt: Date;
  lessons?: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  isPremium: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  author: string;
  isPremium: boolean;
  publishedAt: Date;
  readTime: string;
  tags: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  date: Date;
  duration: string;
  price: number;
  maxAttendees: number;
  currentAttendees: number;
  instructor: string;
  type: 'workshop' | 'webinar' | 'masterclass';
}

export interface Payment {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  type: 'subscription' | 'event';
  status: 'pending' | 'completed' | 'failed';
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  userId: string;
  planType: 'monthly' | 'yearly';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate: Date;
  amount: number;
}