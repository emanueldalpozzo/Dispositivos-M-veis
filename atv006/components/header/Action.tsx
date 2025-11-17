import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import theme from "../../constants/theme";

export default function Actions() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="download" size={24} color="white" />
      </TouchableOpacity>

      <TouchableOpacity>
        <AntDesign name="search" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.dimension.sm,
  },
});
