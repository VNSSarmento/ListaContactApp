import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

import FotoAnimada from '../components/FotoAnimada';
import BotaoAcao from '../components/BotaoAcao';

export default function LigacaoScreen({ navigation, route }) {
  const { contato } = route.params;

 
  const [tempoLigacao, setTempoLigacao] = useState(0);

  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoLigacao((tempo) => tempo + 1);
    }, 1000);
    // Cleanup: para o cronômetro ao sair da tela
    return () => clearInterval(intervalo);
  }, []);

 
  const formatarTempo = (segundos) => {
    const minutos = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${String(minutos).padStart(2, '0')}:${String(segs).padStart(2, '0')}`;
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.estrelas}>
        {['✦', '✧', '✦', '✧', '✦', '✧', '✦'].map((e, i) => (
          <Text key={i} style={[styles.estrela, { opacity: 0.1 + (i % 3) * 0.1 }]}>
            {e}
          </Text>
        ))}
      </View>

      <View style={styles.areaInfo}>
        <Text style={styles.statusLigacao}>🛸 Ligação em Andamento</Text>
        <Text style={styles.nomeChamada}>{contato.nome}</Text>
        <Text style={styles.telefoneChamada}>{contato.telefone}</Text>
      </View>

      <FotoAnimada uri={contato.foto} emoji={contato.emoji} />

      <View style={styles.areaTempo}>
        <Text style={styles.tempoTexto}>{formatarTempo(tempoLigacao)}</Text>
        <Text style={styles.tempoLabel}>tempo de comunicação</Text>
      </View>

      <View style={styles.areaBotoes}>
        <View style={styles.linhaBotoes}>

          <BotaoAcao
            emoji="🔇"
            label="Mudo"
            onPress={() => Alert.alert('Microfone', 'Você mutou seu microfone!')}
          />

          <BotaoAcao
            emoji="🔊"
            label="Alto-fal."
            onPress={() => Alert.alert('Áudio', 'Alto-falante ativado!')}
          />

          <BotaoAcao
            emoji="⌨️"
            label="Teclado"
            onPress={() => Alert.alert('Teclado', 'Abrindo teclado espacial...')}
          />

        </View>
      </View>

      <TouchableOpacity
        style={styles.botaoEncerrar}
        onPress={() => navigation.goBack()}
        activeOpacity={0.85}
      >
{/*         <Text style={styles.botaoEncerrarIcone}>📵</Text> */}
        <Text style={styles.botaoEncerrarTexto}>Encerrar</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050d1a',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    paddingHorizontal: 24,
  },
  estrelas: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
  },
  estrela: {
    color: '#4a9fff',
    fontSize: 24,
    margin: 20,
  },
  areaInfo: {
    alignItems: 'center',
    zIndex: 1,
  },
  statusLigacao: {
    fontSize: 14,
    color: '#4a9fff',
    letterSpacing: 1,
    marginBottom: 8,
  },
  nomeChamada: {
    fontSize: 30,
    fontWeight: '800',
    color: '#e0f0ff',
    textAlign: 'center',
  },
  telefoneChamada: {
    fontSize: 16,
    color: '#4a7fa5',
    marginTop: 6,
  },
  areaTempo: {
    alignItems: 'center',
    zIndex: 1,
  },
  tempoTexto: {
    fontSize: 48,
    fontWeight: '300',
    color: '#e0f0ff',
    letterSpacing: 4,
  },
  tempoLabel: {
    fontSize: 12,
    color: '#4a7fa5',
    letterSpacing: 2,
    marginTop: 4,
    textTransform: 'uppercase',
  },
  areaBotoes: {
    width: '100%',
    zIndex: 1,
  },
  linhaBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  botaoEncerrar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#c0392b',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 40,
    zIndex: 1,
    elevation: 8,
    shadowColor: '#c0392b',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  botaoEncerrarIcone: {
    fontSize: 22,
    marginRight: 10,
  },
  botaoEncerrarTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});