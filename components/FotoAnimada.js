import React, { useEffect } from 'react';
import { View, Image, Text, Animated, StyleSheet } from 'react-native';

export default function FotoAnimada({ uri, emoji }) {
  const pulseAnim = new Animated.Value(1);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.08,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.anelPulse,
          { transform: [{ scale: pulseAnim }] },
        ]}
      />
      <Image source={{ uri }} style={styles.foto} />
      <Text style={styles.emoji}>{emoji || '👤'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  anelPulse: {
    position: 'absolute',
    width: 160,
    height: 160,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#1e88e5',
    opacity: 0.4,
  },
  foto: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#1e88e5',
    backgroundColor: '#0d2240',
  },
  emoji: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    fontSize: 28,
    backgroundColor: '#050d1a',
    borderRadius: 20,
    padding: 4,
  },
});