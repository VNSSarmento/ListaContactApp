import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { contatosIniciais } from '../dados/contatos';


import CardContato from '../components/CardContato';
import CampoBusca from '../components/CampoBusca';
import BotaoFlutuante from '../components/BotaoFlutuante';

export default function ListaContatosScreen({ navigation, route }) {
  const [contatos, setContatos] = useState(contatosIniciais);
  const [busca, setBusca] = useState('');

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


  const contatosFiltrados = contatos.filter((contato) =>
    contato.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>🌌 Agenda Galáctica</Text>
        <Text style={styles.subtitulo}>{contatos.length} tripulantes</Text>
      </View>

      <CampoBusca
        valor={busca}
        aoMudar={setBusca}
      />

      <FlatList
        data={contatosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardContato
            contato={item}
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