import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "@/screen/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ScreenB from "@/screen/ScreenB";
import { StatusBar } from "expo-status-bar";
import ImageListScreen from "@/screen/ImageListScreen";

export type StackParamList = {
  HomeScreen: undefined;
  ImageListScreen: undefined;
  ScreenB: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="ImageListScreen" component={ImageListScreen} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
