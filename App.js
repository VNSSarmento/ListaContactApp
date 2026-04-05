// ============================================================
// App.js — Ponto de entrada do aplicativo
// Aqui configuramos a navegação entre as telas
// ============================================================

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando as telas do app
import ListaContatosScreen from './screens/ListaContatosScreen';
import LigacaoScreen from './screens/LigacaoScreen';
import AdicionarContatoScreen from './screens/AdicionarContatoScreen';

// createNativeStackNavigator cria o "gerenciador de telas" do app
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer é o "container" que envolve toda a navegação
    <NavigationContainer>
      <Stack.Navigator
        // Tela inicial do app
        initialRouteName="ListaContatos"
        screenOptions={{
          // Remove o cabeçalho padrão (vamos criar o nosso próprio)
          headerShown: false,
        }}
      >
        {/* Cada Stack.Screen representa uma tela do app */}
        <Stack.Screen name="ListaContatos" component={ListaContatosScreen} />
        <Stack.Screen name="Ligacao" component={LigacaoScreen} />
        <Stack.Screen name="AdicionarContato" component={AdicionarContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}