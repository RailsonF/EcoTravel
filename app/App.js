import { StatusBar } from 'expo-status-bar';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import Destinos from './Destinos';
import Home from './Home';

export default function App() {
  const [exibirComponente, setExibirComponente] = useState('A');

  return (
    <View style={styles.container}>
      {exibirComponente === 'A' ? <Home /> : <Destinos />}
      <Button
        title={exibirComponente === 'A' ? "Ir para Pontos Turísticos" : "Voltar para Home"}
        onPress={() => setExibirComponente(exibirComponente === 'A' ? 'B' : 'A')}
        color="#5ab334"
        style={styles.buttonContainer}
      />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf6ec',
    paddingTop: 40,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    width: '80%',
  },
});
