import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { useRouter } from 'expo-router';

export default function index() {
    const randomId = Math.floor(Math.random() * 1000).toString();
    const router = useRouter();
    const handlePress = () =>{
      router.push('/screenB');
    }

  return (
    <View style={styles.container}>
      <Text>index</Text>

      <Link href='/screenA'> Tela A </Link>
      <Link href='/screenB'> Tela B </Link>
      <Button title='Tela B' onPress={handlePress}/>
      <Link href={{pathname: '/post/[id]', params:{id: randomId}}}> Tela Dinamica. Ir para o post {randomId} </Link>
      <Link href='/tabs/profile'>Tela de Usuário</Link>
      <Link href='/tabs/feed'>Post</Link>
    </View>

    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})