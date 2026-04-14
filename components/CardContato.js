import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


export default function CardContato({ contato, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}       
      activeOpacity={0.8}
    >
      <Image source={{ uri: contato.foto }} style={styles.foto} />

      <View style={styles.infoContato}>
        <Text style={styles.nome}>{contato.nome}</Text>
        <Text style={styles.telefone}>{contato.telefone}</Text>
      </View>

      <View style={styles.botaoChamar}>
        <Text style={styles.iconeChamar}>📞</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',     
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
    borderRadius: 28,         
    backgroundColor: '#1a3a5c',
    borderWidth: 2,
    borderColor: '#2d6a9f',
  },
  infoContato: {
    flex: 1,                  
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