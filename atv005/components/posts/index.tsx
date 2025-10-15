import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

interface PostProps{
        name: string,
        content: string,
        date: string,
        likes?: number

    }
    
export default function Post({name, content, date, likes}: PostProps) {
    const [myLikes, setMyLikes] = useState<number>(likes || 0)
    const handleLikes = () =>{
        setMyLikes(myLikes + 1);
    }
  return (
    <View>
      <Text>Nome: {name}</Text>
      <Text>Conteúdo: {content}</Text>
      <Text>Data: {date}</Text>
      {myLikes!=0 && <Text>Likes: {myLikes}</Text>}
      <Button title='Like' onPress={handleLikes} />
    </View>
  )
}