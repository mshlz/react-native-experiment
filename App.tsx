import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Input } from './Input';

export default function App() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  const sumValues = () => {
    const result = valueA + valueB
    alert(`${valueA} + ${valueB} = ${result}`)
  }  
  const subtractValues = () => {
    const result = valueA - valueB
    alert(`${valueA} - ${valueB} = ${result}`)
  }  
  const multiplyValues = () => {
    const result = valueA * valueB
    alert(`${valueA} * ${valueB} = ${result}`)
  }  
  const divideValues = () => {
    const result = valueA / valueB
    alert(`${valueA} / ${valueB} = ${result}`)
  }
  

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='black' />

      <Input
        label="Value A"
        placeholder="Enter the first value"
        onChange={value => setValueA(+value)}
      />
      <Input
        label="Value B"
        placeholder="Enter the second value"
        onChange={value => setValueB(+value)}
      />


      <Button
        title="Sum"
        onPress={() => sumValues()}
      />
      <Button
        title="Subtract"
        onPress={() => subtractValues()}
      />
      <Button
        title="Multiply"
        onPress={() => multiplyValues()}
      />
      <Button
        title="Divide"
        onPress={() => divideValues()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
