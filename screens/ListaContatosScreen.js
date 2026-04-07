// ============================================================
// screens/ListaContatosScreen.js — Tela Principal
// Exibe a lista de todos os contatos
//
// Agora muito mais limpa! Os detalhes visuais foram movidos
// para componentes próprios na pasta /components
// ============================================================

import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { contatosIniciais } from '../dados/contatos';

// Importando os componentes da pasta /components
// O caminho '../components/X' significa: "sobe uma pasta, entra em components"
import CardContato from '../components/CardContato';
import CampoBusca from '../components/CampoBusca';
import BotaoFlutuante from '../components/BotaoFlutuante';

export default function ListaContatosScreen({ navigation, route }) {
  // ---- ESTADO ----
  const [contatos, setContatos] = useState(contatosIniciais);
  const [busca, setBusca] = useState('');

  // ---- LÓGICA ----
  const adicionarContato = (novoContato) => {
    setContatos((listaAtual) => {
      const telefoneJaExiste = listaAtual.some(
        (c) => c.telefone === novoContato.telefone
      );

      if (telefoneJaExiste) {
        alert('📡 Esse telefone já existe!');
        return listaAtual;
      }

      return [novoContato, ...listaAtual];
    });
  };


  // Filtra a lista conforme o texto da busca
  const contatosFiltrados = contatos.filter((contato) =>
    contato.nome.toLowerCase().includes(busca.toLowerCase())
  );

  // ---- INTERFACE ----
  return (
    <SafeAreaView style={styles.container}>

      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>🌌 Agenda Galáctica</Text>
        <Text style={styles.subtitulo}>{contatos.length} tripulantes</Text>
      </View>

      {/* Campo de busca — componente reutilizável */}
      <CampoBusca
        valor={busca}
        aoMudar={setBusca}
      />

      {/* Lista de contatos */}
      <FlatList
        data={contatosFiltrados}
        keyExtractor={(item) => item.id}
        // Renderiza o componente CardContato para cada item
        renderItem={({ item }) => (
          <CardContato
            contato={item}
            // Passa a função de navegação como prop para o card
            onPress={() => navigation.navigate('Ligacao', { contato: item })}
          />
        )}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.listaVazia}>
            <Text style={styles.listaVaziaTexto}>🛸 Nenhum tripulante encontrado</Text>
          </View>
        }
      />

      {/* Botão flutuante — componente reutilizável */}
      <BotaoFlutuante
        onPress={() =>
          navigation.navigate('AdicionarContato', {
            adicionarContato,
          })
        }
      />

    </SafeAreaView>
  );
}

// ---- ESTILOS ----
// Perceba que agora há muito menos estilos aqui,
// porque cada componente cuida dos próprios estilos!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050d1a',
  },
  cabecalho: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#0d2240',
  },
  titulo: {
    fontSize: 26,
    fontWeight: '800',
    color: '#e0f0ff',
    letterSpacing: 1,
  },
  subtitulo: {
    fontSize: 13,
    color: '#4a7fa5',
    marginTop: 2,
  },
  lista: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  listaVazia: {
    alignItems: 'center',
    marginTop: 60,
  },
  listaVaziaTexto: {
    color: '#4a7fa5',
    fontSize: 16,
  },
});