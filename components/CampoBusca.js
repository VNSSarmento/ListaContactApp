import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

export default function CampoBusca({ valor, aoMudar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icone}>🔍</Text>
      <TextInput
        style={styles.campo}
        placeholder="Buscar tripulante..."
        placeholderTextColor="#8899aa"
        value={valor}
        onChangeText={aoMudar}   
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0d1f35',
    marginHorizontal: 16,
    marginVertical: 14,
    borderRadius: 14,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#1a3a5c',
  },
  icone: {
    fontSize: 16,
    marginRight: 8,
  },
  campo: {
    flex: 1,
    height: 46,
    color: '#e0f0ff',
    fontSize: 15,
  },
});