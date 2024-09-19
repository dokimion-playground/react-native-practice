import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Typography } from "@/components/Typography";
import { Header } from "@/components/Header/Header";
import PhotoListItem from "@/components/PhotoListItem";
import { IMAGE_LIST } from "@/constants";

export default function ImageListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={IMAGE_LIST}
        style={{ flex: 1 }}
        renderItem={({ item }) => {
          return <PhotoListItem url={item} />;
        }}
      />
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
