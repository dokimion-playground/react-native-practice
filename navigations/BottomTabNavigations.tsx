import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ImageListScreen from "@/screen/ImageListScreen";
import FavoriteImageListScreen from "@/screen/FavoriteImageListScreen";
import { TabIcon } from "@/components/TabIcon";
import { IconName } from "@/components/Icon";

const Tabs = createBottomTabNavigator();

export default function BottomTabNavigations() {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: IconName = "image";
          if (route.name === "ImageList") {
            iconName = focused ? "image" : "image-outline";
          } else if (route.name === "FavoriteImageList") {
            iconName = focused ? "heart" : "heart-outline";
          }

          return (
            <TabIcon
              iconName={iconName}
              iconColor={color}
              visibleBadge={focused}
            />
          );
        },
      })}
    >
      <Tabs.Screen name="ImageList" component={ImageListScreen}></Tabs.Screen>
      <Tabs.Screen
        name="FavoriteImageList"
        component={FavoriteImageListScreen}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({});
