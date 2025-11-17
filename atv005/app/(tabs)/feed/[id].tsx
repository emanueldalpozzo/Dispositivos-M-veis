import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function FeedDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18 }}>Detalhes do Post:</Text>
      <Text style={{ marginTop: 10, fontWeight: "bold" }}>ID: {id}</Text>
    </View>
  );
}
