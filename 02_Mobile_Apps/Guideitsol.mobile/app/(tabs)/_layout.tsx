import { Tabs } from "expo-router";
import { Building2, FileText, Home, MessageSquare } from "lucide-react-native";
import React from "react";
import { Platform } from "react-native";
import { AnimatedTabIcon } from "../../components/AnimatedIcon";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#8B5CF6",
        tabBarInactiveTintColor: "#6B7280",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1F2937",
          borderTopWidth: 1,
          borderTopColor: "#374151",
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10,
          height: Platform.OS === 'ios' ? 85 : 65,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <AnimatedTabIcon Icon={Home} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="it-services"
        options={{
          title: "IT Services",
          tabBarIcon: ({ color, size }) => <AnimatedTabIcon Icon={Building2} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="visa-services"
        options={{
          title: "Visa Services",
          tabBarIcon: ({ color, size }) => <AnimatedTabIcon Icon={FileText} color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, size }) => <AnimatedTabIcon Icon={MessageSquare} color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}