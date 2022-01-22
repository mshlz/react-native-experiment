import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  const sumValues = () => {
    const sum = valueA + valueB
    alert("Sum: " + sum)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='black' />

      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Enter the first value"
        placeholderTextColor="black"
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={value => setValueA(+value)}
      />
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Enter the second value"
        placeholderTextColor="black"
        autoCapitalize="none"
        keyboardType="numeric"
        onChangeText={value => setValueB(+value)}
      />

      <TouchableOpacity
        onPress={() => sumValues()}
      >
        <Text>Sum</Text>
      </TouchableOpacity>
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
