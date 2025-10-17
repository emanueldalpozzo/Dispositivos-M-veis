import { View, FlatList, StyleSheet } from 'react-native';
import Post from '../../../components/posts'; 
import * as Crypto from 'expo-crypto';
import React from 'react'; 

export default function FeedScreen() {
 
  const MOCK_POSTS = [
    { 
      id: Crypto.randomUUID(),
      name: "Emanuel", 
      content: "Estudante de Sistemas para Internet",
      date: "17 de Out, 2025",
      likes: 10
    },
    { 
      id: Crypto.randomUUID(),
      name: "Irineu", 
      content: "sla",
      date: "16 de Out, 2025",
      likes: 99
    },
    { 
      id: Crypto.randomUUID(),
      name: "chico", 
      content: "sla",
      date: "15 de Out, 2025",
      likes: 5
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_POSTS}
        renderItem={({ item }) => (
          <Post
            id={item.id} 
            name={item.name}
            content={item.content}
            date={item.date}
            likes={item.likes}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});