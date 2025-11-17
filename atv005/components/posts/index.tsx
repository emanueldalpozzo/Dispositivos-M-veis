import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

interface PostProps{
        name: string,
        content: string,
        date: string,
        likes?: number

    }
    
export default function Post({name, content, date, likes=0}: PostProps) {
    const [myLikes, setMyLikes] = useState<number>(likes || 0)
    const handleLikes = () =>{
        setMyLikes(myLikes + 1);
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
  
        <Text style={styles.content}>{content}</Text>
  
        <View style={styles.footer}>
          {myLikes > 0 && <Text style={styles.likes}>❤️ {myLikes} curtidas</Text>}
          <Button title="Curtir" onPress={handleLikes} />
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    color: "#888",
    fontSize: 12,
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  likes: {
    color: "red",
    fontWeight: "500",
  },
});
