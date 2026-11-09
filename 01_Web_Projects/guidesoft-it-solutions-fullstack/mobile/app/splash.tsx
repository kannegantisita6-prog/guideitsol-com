import { useEffect } from "react";
import { View, Image } from "react-native";
import { router } from "expo-router";

export default function SplashScreenRoute() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/landing');
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <Image source={require('../assets/images/splash-icon.png')} style={{ width: 200, height: 200, resizeMode: 'contain' }} />
    </View>
      );
  }
