// MainDrawerNavigator.tsx
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import LinkStackNavigations from "./LinkStackNavigations";
import HomeStackNavigations from "./HomeStackNavigations";

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigations() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStackNavigations} />
      <Drawer.Screen
        name="Link"
        component={LinkStackNavigations}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
