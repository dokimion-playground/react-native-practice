import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import MainDrawerNavigations from "@/navigations/MainDrawerNavigations";

export default function App() {
  return (
    <>
      <MainDrawerNavigations />
    </>
  );
}

const styles = StyleSheet.create({});
