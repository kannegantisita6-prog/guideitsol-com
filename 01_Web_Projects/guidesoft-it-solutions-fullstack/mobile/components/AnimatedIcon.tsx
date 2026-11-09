import React, { useRef, useEffect } from 'react';
import { Animated, TouchableOpacity, ViewStyle } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

interface AnimatedIconProps {
  Icon: LucideIcon;
  size?: number;
  color?: string;
  onPress?: () => void;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  animationType?: 'bounce' | 'scale' | 'dock' | 'pulse';
  autoAnimate?: boolean;
  delay?: number;
}

export default function AnimatedIcon({
  Icon,
  size = 24,
  color = '#8B5CF6',
  onPress,
  style,
  containerStyle,
  animationType = 'dock',
  autoAnimate = true,
  delay = 0,
}: AnimatedIconProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const startAnimation = React.useCallback(() => {
    switch (animationType) {
      case 'bounce':
        Animated.sequence([
          Animated.timing(bounceAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.spring(scaleAnim, {
            toValue: 1.2,
            friction: 3,
            tension: 100,
            useNativeDriver: true,
          }),
          Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 3,
            tension: 100,
            useNativeDriver: true,
          }),
        ]).start();
        break;

      case 'scale':
        Animated.sequence([
          Animated.spring(scaleAnim, {
            toValue: 1.15,
            friction: 4,
            tension: 120,
            useNativeDriver: true,
          }),
          Animated.spring(scaleAnim, {
            toValue: 1,
            friction: 4,
            tension: 120,
            useNativeDriver: true,
          }),
        ]).start();
        break;

      case 'dock':
        // iOS dock-style animation with bounce and scale
        Animated.sequence([
          Animated.parallel([
            Animated.spring(scaleAnim, {
              toValue: 1.3,
              friction: 3,
              tension: 150,
              useNativeDriver: true,
            }),
            Animated.timing(rotateAnim, {
              toValue: 1,
              duration: 200,
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.spring(scaleAnim, {
              toValue: 1,
              friction: 4,
              tension: 100,
              useNativeDriver: true,
            }),
            Animated.timing(rotateAnim, {
              toValue: 0,
              duration: 200,
              useNativeDriver: true,
            }),
          ]),
        ]).start();
        break;

      case 'pulse':
        Animated.loop(
          Animated.sequence([
            Animated.timing(pulseAnim, {
              toValue: 1.1,
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(pulseAnim, {
              toValue: 1,
              duration: 800,
              useNativeDriver: true,
            }),
          ]),
          { iterations: 2 }
        ).start();
        break;
    }
  }, [animationType, bounceAnim, scaleAnim, rotateAnim, pulseAnim]);

  useEffect(() => {
    if (autoAnimate) {
      const timer = setTimeout(() => {
        startAnimation();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [autoAnimate, delay, startAnimation]);



  const handlePress = () => {
    // Trigger press animation
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 0.9,
        friction: 4,
        tension: 200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1.1,
        friction: 3,
        tension: 150,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 4,
        tension: 100,
        useNativeDriver: true,
      }),
    ]).start();

    if (onPress) {
      setTimeout(onPress, 100);
    }
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '5deg'],
  });

  const animatedStyle = {
    transform: [
      { scale: animationType === 'pulse' ? pulseAnim : scaleAnim },
      { rotate: animationType === 'dock' ? rotation : '0deg' },
    ],
  };

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={handlePress}
        style={containerStyle}
        activeOpacity={0.8}
      >
        <Animated.View style={[style, animatedStyle]}>
          <Icon size={size} color={color} />
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <Animated.View style={[style, animatedStyle]}>
      <Icon size={size} color={color} />
    </Animated.View>
  );
}

// Specialized components for different use cases
export function AnimatedTabIcon({ Icon, color, size }: { Icon: LucideIcon; color: string; size: number }) {
  return (
    <AnimatedIcon
      Icon={Icon}
      color={color}
      size={size}
      animationType="dock"
      autoAnimate={false}
    />
  );
}

export function AnimatedServiceIcon({ Icon, color, size, onPress }: { Icon: LucideIcon; color: string; size: number; onPress?: () => void }) {
  return (
    <AnimatedIcon
      Icon={Icon}
      color={color}
      size={size}
      onPress={onPress}
      animationType="bounce"
      autoAnimate={true}
      delay={Math.random() * 1000}
    />
  );
}

export function AnimatedTechIcon({ Icon, color, size, delay }: { Icon: LucideIcon; color: string; size: number; delay?: number }) {
  return (
    <AnimatedIcon
      Icon={Icon}
      color={color}
      size={size}
      animationType="scale"
      autoAnimate={true}
      delay={delay || 0}
    />
  );
}

export function AnimatedActionIcon({ Icon, color, size, onPress }: { Icon: LucideIcon; color: string; size: number; onPress: () => void }) {
  return (
    <AnimatedIcon
      Icon={Icon}
      color={color}
      size={size}
      onPress={onPress}
      animationType="dock"
      autoAnimate={false}
    />
  );
}