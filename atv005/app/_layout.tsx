import { Stack } from 'expo-router';

export default function StackLayout() {
  return (
    
    <Stack screenOptions={{
      headerStyle: {backgroundColor:'#0067eeff'},
      headerTitleAlign: 'center',
      headerTintColor: '#fff',
      headerShown: false
      
    }}>

    <Stack.Screen
      name="post/[id]"
      options={({ route }: {route:{params?:{id?:string}}}) => ({
      title: `Post ${route.params?.id || 'Desconhecido'}`,
  })}
/>

      <Stack.Screen
        name = "index"
        options={{
          title: "Home Screen",
        }}
      />

      <Stack.Screen 
        name='screenA'
        options={{
          title: "Tela"
        }}
      />

      <Stack.Screen
        name='screenB'
        options={{
          title: "Tela B"
        }}
      />
      
    </Stack>

 
)
}
