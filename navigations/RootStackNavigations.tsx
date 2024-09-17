import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigations from "./BottomTabNavigations";
import ImageDetailScreen from "@/screen/ImageDetailScreen";

export type RootStackParamList = {
  BottomTab: undefined;
  ImageDetail: { url: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigations() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTab" component={BottomTabNavigations} />
      <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
