<<<<<<< HEAD
import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'
=======
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
>>>>>>> f714cc24c80fb2dac94b67367ac5c43797685fe9

interface PostProps {
    id: string; 
    name: string;
    content: string;
    date: string;
    likes?: number;
}
    
<<<<<<< HEAD
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
=======
export default function Post({ id, name, content, date, likes }: PostProps) {
    const [myLikes, setMyLikes] = useState<number>(likes || 0);

    

    const handleLikes = () => {
        setMyLikes(myLikes + 1);
    }

    return (
        <View style={styles.postContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text>{content}</Text>
            <Text style={styles.date}>{date}</Text>
            {myLikes > 0 && <Text>Likes: {myLikes}</Text>}
            <Button title='Like' onPress={handleLikes} />

            <Link href={`/feed/${id}`} style={{ marginTop: 10 }}>
                 <Text style={{ color: 'blue' }}>Ver detalhes</Text>
            </Link>
        </View>
>>>>>>> f714cc24c80fb2dac94b67367ac5c43797685fe9
    );
}


const styles = StyleSheet.create({
<<<<<<< HEAD
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
=======
    postContainer: {
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 10,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    date: {
        fontSize: 12,
        color: 'gray',
        marginTop: 5,
    }
});
>>>>>>> f714cc24c80fb2dac94b67367ac5c43797685fe9
