import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,       
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const FOTO_PADRAO_URL = 'https://api.dicebear.com/7.x/adventurer/png?seed=';

export default function AdicionarContatoScreen({ navigation, route }) {
  
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');


 
  const formatarTelefone = (texto) => {
    const apenasNumeros = texto.replace(/\D/g, '');

    if (apenasNumeros.length <= 2) {
      return `(${apenasNumeros}`;
    } else if (apenasNumeros.length <= 7) {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
    } else {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7, 11)}`;
    }
  };

  const salvarContato = () => {
    if (!nome.trim()) {
      Alert.alert('🚀 Atenção!', 'Por favor, informe o nome do tripulante.');
      return;
    }
    if (!telefone.trim() || telefone.length < 14) {
      Alert.alert('📡 Atenção!', 'Por favor, informe um telefone válido.');
      return;
    }

    const novoContato = {
     
      id: String(Date.now()),
      nome: nome.trim(),
      telefone: telefone,
      foto: `${FOTO_PADRAO_URL}${encodeURIComponent(nome)}&backgroundColor=b6e3f4`,
      emoji: '⭐',
    };

   
    route.params.adicionarContato(novoContato);
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

          <View style={styles.cabecalho}>
            <TouchableOpacity
              style={styles.botaoVoltar}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.botaoVoltarTexto}>← Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.titulo}>Novo Tripulante</Text>
            <Text style={styles.subtitulo}>Cadastre um novo membro da frota</Text>
          </View>

          <View style={styles.areaIlustracao}>
            <Text style={styles.ilustracaoEmoji}>👨‍🚀</Text>
            <View style={styles.onda} />
          </View>

          <View style={styles.formulario}>

            <View style={styles.grupoCampo}>
              <Text style={styles.labelCampo}>🪐 Nome do Tripulante</Text>
              <TextInput
                style={styles.campo}
                placeholder="Ex: Comandante Luna"
                placeholderTextColor="#4a7fa5"
                value={nome}
                onChangeText={setNome}     
                maxLength={50}
                autoCapitalize="words"     
              />
            </View>

            <View style={styles.grupoCampo}>
              <Text style={styles.labelCampo}>📡 Frequência de Contato</Text>
              <TextInput
                style={styles.campo}
                placeholder="(00) 00000-0000"
                placeholderTextColor="#4a7fa5"
                value={telefone}
                onChangeText={(texto) => setTelefone(formatarTelefone(texto))}
                keyboardType="numeric"    
                maxLength={15}
              />
            </View>

            {nome.length > 0 && (
              <View style={styles.preview}>
                <Text style={styles.previewTexto}>
                  🌟 Avatar baseado no nome será gerado automaticamente
                </Text>
              </View>
            )}

            <TouchableOpacity
              style={styles.botaoSalvar}
              onPress={salvarContato}
              activeOpacity={0.85}
            >
              <Text style={styles.botaoSalvarTexto}>🚀 Cadastrar Tripulante</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoCancelar}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.botaoCancelarTexto}>Cancelar</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050d1a',
  },

  // --- Cabeçalho ---
  cabecalho: {
    padding: 24,
    paddingBottom: 0,
  },
  botaoVoltar: {
    marginBottom: 16,
  },
  botaoVoltarTexto: {
    color: '#4a9fff',
    fontSize: 16,
    fontWeight: '600',
  },
  titulo: {
    fontSize: 28,
    fontWeight: '800',
    color: '#e0f0ff',
  },
  subtitulo: {
    fontSize: 14,
    color: '#4a7fa5',
    marginTop: 4,
  },

  // --- Ilustração ---
  areaIlustracao: {
    alignItems: 'center',
    paddingVertical: 30,
    position: 'relative',
  },
  ilustracaoEmoji: {
    fontSize: 70,
  },
  onda: {
    position: 'absolute',
    bottom: 10,
    width: 120,
    height: 20,
    borderRadius: 60,
    backgroundColor: '#0d2240',
    opacity: 0.8,
  },

  // --- Formulário ---
  formulario: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  grupoCampo: {
    marginBottom: 20,
  },
  labelCampo: {
    color: '#4a9fff',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  campo: {
    backgroundColor: '#0a1929',
    borderWidth: 1,
    borderColor: '#1a3a5c',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    color: '#e0f0ff',
    fontSize: 16,
  },

  // --- Preview ---
  preview: {
    backgroundColor: '#0d2240',
    borderRadius: 12,
    padding: 14,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#1e4a7a',
  },
  previewTexto: {
    color: '#4a9fff',
    fontSize: 13,
    textAlign: 'center',
  },

  // --- Botões ---
  botaoSalvar: {
    backgroundColor: '#1e88e5',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 12,
    elevation: 6,
    shadowColor: '#1e88e5',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
  },
  botaoSalvarTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },
  botaoCancelar: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  botaoCancelarTexto: {
    color: '#4a7fa5',
    fontSize: 15,
  },
});