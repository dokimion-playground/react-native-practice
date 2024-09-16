import React from "react";
import { Pressable, Insets } from "react-native";

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  hitSlop?: Insets;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

export function Button({
  onPress,
  children,
  hitSlop = { left: 0, right: 0, top: 0, bottom: 0 },
  paddingHorizontal,
  paddingVertical,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      hitSlop={hitSlop}
      style={{
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
      }}
    >
      {children}
    </Pressable>
  );
}
