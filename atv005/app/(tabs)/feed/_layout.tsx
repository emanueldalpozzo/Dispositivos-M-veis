import { Stack } from 'expo-router';

export default function FeedStackLayout() {
  return (
    
    <Stack screenOptions={{
        headerStyle: {backgroundColor:'#0067eeff'},
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
    }}>
      
      <Stack.Screen 
        name="index" 
        options={{ title: "Feed de Notícias" }} 
      />
      
      
      <Stack.Screen 
        name="[id]" 
        options={{ title: "Detalhes do Post" }} 
      />
    </Stack>
  );
}