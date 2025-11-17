import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function profile() {
    const user = {
        name: "Emanuel",
        age: '23',
        bio: 'Estudante de sistemas para internet',
        username: "emanue@"
    }

    const router = useRouter();
    const handlePress = () =>{
      router.push('/')
    }
  return (
    <View style={styles.container}>
       <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.username}>{user.username}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <TouchableOpacity  style={styles.editButton} onPress={handlePress}>
         <Text style={styles.editButtonText}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
 
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  editButton: {
  backgroundColor: '#0067ee',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 8,
  marginTop: 20,
  alignSelf: 'center', 
},

editButtonText: {
  color: '#fff',
  fontWeight: 'bold',
  textAlign: 'center',
},
});