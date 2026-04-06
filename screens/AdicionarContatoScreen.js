// ============================================================
// screens/AdicionarContatoScreen.js — Tela de Adicionar Contato
// Formulário para cadastrar um novo tripulante
// ============================================================

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,        // Para exibir alertas/confirmações
  KeyboardAvoidingView, // Evita o teclado cobrir os campos
  Platform,
} from 'react-native';

// Foto padrão para novos contatos (usando API de avatares gratuita)
const FOTO_PADRAO_URL = 'https://api.dicebear.com/7.x/adventurer/png?seed=';

export default function AdicionarContatoScreen({ navigation, route }) {
  // ---- ESTADO DOS CAMPOS ----
  // Cada campo do formulário tem seu próprio estado
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  // ---- FUNÇÕES ----

  // Formata o telefone enquanto o usuário digita
  // Transforma "85999990001" em "(85) 99999-0001"
  const formatarTelefone = (texto) => {
    // Remove tudo que não for número
    const apenasNumeros = texto.replace(/\D/g, '');

    // Aplica a máscara conforme a quantidade de dígitos
    if (apenasNumeros.length <= 2) {
      return `(${apenasNumeros}`;
    } else if (apenasNumeros.length <= 7) {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2)}`;
    } else {
      return `(${apenasNumeros.slice(0, 2)}) ${apenasNumeros.slice(2, 7)}-${apenasNumeros.slice(7, 11)}`;
    }
  };

  // Salva o novo contato e volta para a lista
  const salvarContato = () => {
    // Validação: verifica se os campos foram preenchidos
    if (!nome.trim()) {
      Alert.alert('🚀 Atenção!', 'Por favor, informe o nome do tripulante.');
      return;
    }
    if (!telefone.trim() || telefone.length < 14) {
      Alert.alert('📡 Atenção!', 'Por favor, informe um telefone válido.');
      return;
    }

    // Cria o objeto do novo contato
    const novoContato = {
      // Date.now() gera um número único baseado no tempo atual
      // Usamos como ID único para o novo contato
      id: String(Date.now()),
      nome: nome.trim(),
      telefone: telefone,
      // Gera um avatar baseado no nome do contato
      foto: `${FOTO_PADRAO_URL}${encodeURIComponent(nome)}&backgroundColor=b6e3f4`,
      emoji: '⭐',
    };

    // Navega de volta para a lista, enviando o novo contato como parâmetro
    // A tela de lista irá capturar esse parâmetro e adicionar à lista
    route.params.adicionarContato(novoContato);
    navigation.goBack();
  };

  // ---- INTERFACE ----
  return (
    // KeyboardAvoidingView empurra o conteúdo para cima quando o teclado abre
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Cabeçalho com botão de voltar */}
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

          {/* Ilustração decorativa */}
          <View style={styles.areaIlustracao}>
            <Text style={styles.ilustracaoEmoji}>👨‍🚀</Text>
            <View style={styles.onda} />
          </View>

          {/* Formulário */}
          <View style={styles.formulario}>

            {/* Campo Nome */}
            <View style={styles.grupoCampo}>
              <Text style={styles.labelCampo}>🪐 Nome do Tripulante</Text>
              <TextInput
                style={styles.campo}
                placeholder="Ex: Comandante Luna"
                placeholderTextColor="#4a7fa5"
                value={nome}
                onChangeText={setNome}     // Atualiza estado a cada tecla
                maxLength={50}
                autoCapitalize="words"     // Capitaliza cada palavra
              />
            </View>

            {/* Campo Telefone */}
            <View style={styles.grupoCampo}>
              <Text style={styles.labelCampo}>📡 Frequência de Contato</Text>
              <TextInput
                style={styles.campo}
                placeholder="(00) 00000-0000"
                placeholderTextColor="#4a7fa5"
                value={telefone}
                // Ao mudar, aplica a formatação automática
                onChangeText={(texto) => setTelefone(formatarTelefone(texto))}
                keyboardType="numeric"     // Teclado numérico
                maxLength={15}
              />
            </View>

            {/* Preview do avatar que será gerado */}
            {nome.length > 0 && (
              <View style={styles.preview}>
                <Text style={styles.previewTexto}>
                  🌟 Avatar baseado no nome será gerado automaticamente
                </Text>
              </View>
            )}

            {/* Botão de salvar */}
            <TouchableOpacity
              style={styles.botaoSalvar}
              onPress={salvarContato}
              activeOpacity={0.85}
            >
              <Text style={styles.botaoSalvarTexto}>🚀 Cadastrar Tripulante</Text>
            </TouchableOpacity>

            {/* Botão cancelar */}
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

// ---- ESTILOS ----
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