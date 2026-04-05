// ============================================================
// components/CardContato.js
// Card que representa um contato na lista principal
//
// CONCEITO: Componente reutilizável
// Em vez de colocar todo o código dentro da tela, separamos
// partes visuais em arquivos próprios. Isso deixa o código
// mais organizado e fácil de manter.
//
// Props recebidas:
//   - contato: objeto com id, nome, telefone, foto, emoji
//   - onPress: função chamada ao tocar no card
// ============================================================

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// "Props" são os dados que o componente recebe de fora
// É como passar argumentos para uma função
export default function CardContato({ contato, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}       // Executa a função recebida via prop
      activeOpacity={0.8}
    >
      {/* Foto do contato */}
      <Image source={{ uri: contato.foto }} style={styles.foto} />

      {/* Informações: nome e telefone */}
      <View style={styles.infoContato}>
        <Text style={styles.nome}>{contato.nome}</Text>
        <Text style={styles.telefone}>{contato.telefone}</Text>
      </View>

      {/* Botão de chamada (apenas visual) */}
      <View style={styles.botaoChamar}>
        <Text style={styles.iconeChamar}>📞</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',     // Itens lado a lado (horizontal)
    alignItems: 'center',
    backgroundColor: '#0a1929',
    borderRadius: 16,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1a3a5c',
  },
  foto: {
    width: 56,
    height: 56,
    borderRadius: 28,         // Metade da largura/altura = círculo perfeito
    backgroundColor: '#1a3a5c',
    borderWidth: 2,
    borderColor: '#2d6a9f',
  },
  infoContato: {
    flex: 1,                  // Ocupa todo o espaço horizontal disponível
    marginLeft: 14,
  },
  nome: {
    fontSize: 16,
    fontWeight: '700',
    color: '#e0f0ff',
  },
  telefone: {
    fontSize: 13,
    color: '#4a7fa5',
    marginTop: 3,
  },
  botaoChamar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0d2e4e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconeChamar: {
    fontSize: 18,
  },
});