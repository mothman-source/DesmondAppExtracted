
import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, TextInput, Alert, StyleSheet } from 'react-native';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [text, setText] = useState('');
  const [savedPrayers, setSavedPrayers] = useState([]);

  const handleSpeak = () => {
    if (text.trim()) {
      setSavedPrayers([...savedPrayers, { text: text.trim(), date: new Date().toISOString() }]);
      Alert.alert('Saved', 'Your prayer has been saved.');
      setText('');
    } else {
      Alert.alert('Empty', 'Write something first.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'home' ? (
        <>
          <Text style={styles.title}>Desmond</Text>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('speak')}>
            <Text style={styles.buttonText}>Speak</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.innerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Speak your heart..."
            placeholderTextColor="#888"
            value={text}
            onChangeText={setText}
            multiline
          />
          <TouchableOpacity style={styles.button} onPress={handleSpeak}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('home')}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0c10', padding: 20, justifyContent: 'center' },
  innerContainer: { flex: 1, padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', color: '#fca311', textAlign: 'center', marginBottom: 20 },
  button: { padding: 15, backgroundColor: '#1f2833', borderRadius: 8, marginTop: 10, alignItems: 'center' },
  buttonText: { color: '#66fcf1', fontSize: 16, fontWeight: 'bold' },
  input: { backgroundColor: '#1f2833', color: '#fff', padding: 10, borderRadius: 10, minHeight: 100, textAlignVertical: 'top' }
});
