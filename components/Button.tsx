import React from "react";
import { Pressable, Insets } from "react-native";

interface ButtonProps {
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  children: React.ReactNode;
  hitSlop?: Insets;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

export function Button({
  onPress,
  onPressIn,
  onPressOut,
  children,
  hitSlop = { left: 0, right: 0, top: 0, bottom: 0 },
  paddingHorizontal = 0,
  paddingVertical = 0,
}: ButtonProps) {
  return (
    <Pressable
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={onPress}
      hitSlop={hitSlop}
      style={({ pressed }) => [
        {
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          opacity: pressed ? 0.8 : 1,
        },
      ]}
    >
      {children}
    </Pressable>
  );
}
