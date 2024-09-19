import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";

import RootStackNavigations from "@/navigations/RootStackNavigations";

export default function App() {
  return (
    <>
      <RootStackNavigations />
    </>
  );
}

const styles = StyleSheet.create({});
