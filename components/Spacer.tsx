import React from "react";
import { View } from "react-native";

interface SpacerProps {
  horizontal?: boolean;
  space: number;
}

export function Spacer({ horizontal = false, space }: SpacerProps) {
  if (horizontal) {
    return <View style={{ marginLeft: space }} />;
  }

  return <View style={{ marginTop: space }} />;
}
