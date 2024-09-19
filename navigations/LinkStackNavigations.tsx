// LinkStackNavigations.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LinkListScreen from "@/screen/LinkListScreen";
import LinkDetailScreen from "@/screen/LinkDetailScreen";
import { Button } from "react-native";
import AddLinkScreren from "@/screen/AddLinkScreren";

export type LinkStackParamList = {
  LinkList: undefined;
  LinkDetail: undefined;
  AddLink: undefined;
};

const Stack = createNativeStackNavigator<LinkStackParamList>();

export default function LinkStackNavigations() {
  return (
    <Stack.Navigator initialRouteName="LinkList">
      <Stack.Screen
        name="LinkList"
        component={LinkListScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <Button title="Menu" onPress={() => navigation.toggleDrawer()} />
          ),
          title: "Link List",
        })}
      />
      <Stack.Screen
        name="LinkDetail"
        component={LinkDetailScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <Button title="Back" onPress={() => navigation.goBack()} />
          ),
          title: "Link Detail",
        })}
      />
      <Stack.Screen
        name="AddLink"
        component={AddLinkScreren}
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <Button title="Back" onPress={() => navigation.goBack()} />
          ),
          title: "Add Link",
        })}
      />
    </Stack.Navigator>
  );
}
