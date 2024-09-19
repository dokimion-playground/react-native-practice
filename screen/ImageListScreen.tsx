import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "@/app";
import { Typography } from "@/components/Typography";

type ScreenANavigationProp = NativeStackNavigationProp<
  StackParamList,
  "ImageListScreen"
>;

export default function ImageListScreen() {
  const navigation = useNavigation<ScreenANavigationProp>();

  return (
    <View style={styles.container}>
      <Text>Screen A</Text>
      <Button
        title="Go to Screen B"
        onPress={() => navigation.navigate("ScreenB")}
      />
      <Typography fontSize={20}>IMAGE LIST</Typography>
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
