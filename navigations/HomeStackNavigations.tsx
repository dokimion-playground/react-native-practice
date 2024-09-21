// HomeStackNavigator.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigations from "./BottomTabNavigations";
import ImageDetailScreen from "@/screen/ImageDetailScreen";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigations() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTab" component={BottomTabNavigations} />
      <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
    </Stack.Navigator>
  );
}
