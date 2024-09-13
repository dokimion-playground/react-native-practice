import React from "react";
import { View, StyleSheet } from "react-native";
import { Typography } from "./Typography";

interface BadgeProps {
  children: React.ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <View>
      <View>
        {children}
        <View style={[styles.badgeContainer, styles.badgePosition]}>
          <Typography fontSize={10} color="white">
            N
          </Typography>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badgeContainer: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  badgePosition: {
    position: "absolute",
    right: -5,
    top: -5,
  },
});
