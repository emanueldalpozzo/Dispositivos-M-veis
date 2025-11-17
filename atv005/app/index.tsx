import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router';

export default function index() {
  const randomId = Math.floor(Math.random() * 1000).toString();
  const router = useRouter();
  const handlePress = () => {
    router.push('/screenB');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Inicial</Text>

      <View style={styles.linksContainer}>
        <Link href='/screenA' style={styles.link}>Tela A.</Link>
        <Link href='/screenB' style={styles.link}>Tela B.</Link>
        <Button title='Ir para Tela B' onPress={handlePress} />
        <Link href='/(tabs)/profile' style={styles.link}>Tela de Usuário</Link>
        <Link href='/(tabs)/feed' style={styles.link}>Post</Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6fa',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#1e1e1e',
  },
  linksContainer: {
    gap: 15,
    width: '80%',
    alignItems: 'center',
  },
  link: {
    fontSize: 18,
    color: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    backgroundColor: '#e9f2ff',
    textAlign: 'center',
    width: '100%',
  },
});
