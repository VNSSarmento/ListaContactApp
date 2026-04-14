import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function BotaoFlutuante({ onPress, icone = '＋' }) {
  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text style={styles.icone}>{icone}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    position: 'absolute',     
    bottom: 30,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1e88e5',
    justifyContent: 'center',
    alignItems: 'center',
    // Sombra Android
    elevation: 8,
    // Sombra iOS
    shadowColor: '#1e88e5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  icone: {
    fontSize: 30,
    color: '#fff',
    lineHeight: 34,
  },
});