import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FavoriteImageListScreen() {
  return (
    <View style={styles.container}>
      <Text>FavoritImageListScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
