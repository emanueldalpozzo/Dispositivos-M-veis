import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

interface PostProps {
    id: string; 
    name: string;
    content: string;
    date: string;
    likes?: number;
}
    
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
    );
}


const styles = StyleSheet.create({
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