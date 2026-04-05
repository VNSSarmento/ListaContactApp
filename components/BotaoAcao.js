// ============================================================
// components/BotaoAcao.js
// Botão de ação circular usado na tela de ligação
// (Mudo, Alto-falante, Teclado, etc.)
//
// Props recebidas:
//   - emoji: ícone exibido no botão
//   - label: texto abaixo do ícone
// ============================================================

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Adicionamos o 'onPress' aqui nas props
export default function BotaoAcao({ emoji, label, onPress }) {
  return (
    // Trocamos a View pelo TouchableOpacity
    <TouchableOpacity 
      style={styles.botao} 
      onPress={onPress} // Quando tocar, executa a função que veio de fora
      activeOpacity={0.7} // Deixa o botão um pouco transparente ao tocar
    >
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    alignItems: 'center',
    backgroundColor: '#0a1929',
    borderRadius: 20,
    padding: 16,
    width: 90,
    borderWidth: 1,
    borderColor: '#1a3a5c',
  },
  emoji: {
    fontSize: 24,
  },
  label: {
    color: '#4a7fa5',
    fontSize: 11,
    marginTop: 6,
  },
});