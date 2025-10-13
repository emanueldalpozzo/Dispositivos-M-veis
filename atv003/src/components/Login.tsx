import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'


export default function Login() {
    const [userName, setuserName] = useState('Digite o seu nome')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassWord] = useState(true)
  return (
    <View>
      <TextInput 
        style= {styles.input}
        onChangeText={setuserName}
        value={userName}
      />
      <Button 
        title='Mostrar Nome'
        onPress={() => console.log(userName)}
      />

      <TextInput 
        style = {styles.input}
        onChangeText={setPassword}
        secureTextEntry = {showPassword}
      />

      <Button 
        title='Mostrar Senha'
        onPress={() => {setShowPassWord(!showPassword); console.log(password)}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});