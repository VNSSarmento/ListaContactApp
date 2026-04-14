
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ListaContatosScreen from './screens/ListaContatosScreen';
import LigacaoScreen from './screens/LigacaoScreen';
import AdicionarContatoScreen from './screens/AdicionarContatoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ListaContatos"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="ListaContatos" component={ListaContatosScreen} />
        <Stack.Screen name="Ligacao" component={LigacaoScreen} />
        <Stack.Screen name="AdicionarContato" component={AdicionarContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}