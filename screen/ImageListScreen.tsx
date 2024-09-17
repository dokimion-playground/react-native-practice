import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Typography } from "@/components/Typography";
import { Header } from "@/components/Header/Header";
import { IMAGE_LIST } from "@/app/constants";
import PhotoListItem from "@/components/PhotoListItem";

export default function ImageListScreen() {
  return (
    <View style={styles.container}>
      <Header>
        <Header.Group>
          <Header.Title title="IMAGE LIST" />
        </Header.Group>
      </Header>
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
