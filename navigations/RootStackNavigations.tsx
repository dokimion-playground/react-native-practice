import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigations from "./BottomTabNavigations";
import ImageDetailScreen from "@/screen/ImageDetailScreen";
import LinkStackNavigations from "./LinkStackNavigations";
import AddLinkScreren from "@/screen/AddLinkScreren";

export type RootStackParamList = {
  BottomTab: undefined;
  ImageDetail: { url: string };
  LinkStack: undefined;
  AddLink: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigations() {
  return (
    <Stack.Navigator
      initialRouteName="LinkStack"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="BottomTab" component={BottomTabNavigations} />
      <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
      <Stack.Screen name="LinkStack" component={LinkStackNavigations} />
      <Stack.Screen name="AddLink" component={AddLinkScreren} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
