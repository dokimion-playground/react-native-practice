import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { Spacer } from "../Spacer";
import { HeaderIcon } from "./HeaderIcon";
import { HeaderTitle } from "./HeaderTitle";
import { HeaderGroup } from "./HeaderGroup";

const { width } = Dimensions.get("window");

interface HeaderProps {
  children: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => (
        <View style={[styles.container]}>
          <View style={styles.header}>
            <Spacer horizontal space={12} />
            <View style={styles.content}>{children}</View>
            <Spacer horizontal space={12} />
          </View>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  header: {
    width: width,
    flexDirection: "row",
    height: 56,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

Header.Icon = HeaderIcon;
Header.Title = HeaderTitle;
Header.Group = HeaderGroup;
