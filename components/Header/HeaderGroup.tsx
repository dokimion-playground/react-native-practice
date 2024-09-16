import React from "react";
import { View, StyleSheet } from "react-native";

interface HeaderGroupProps {
  children: React.ReactNode;
}

export function HeaderGroup({ children }: HeaderGroupProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
