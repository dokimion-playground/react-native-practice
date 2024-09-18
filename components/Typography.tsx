import React from "react";
import { Text as RNText } from "react-native";

interface TypographyProps {
  color?: string;
  fontSize?: number;
  children: React.ReactNode;
}

export function Typography({
  color = "black",
  fontSize = 16,
  children,
}: TypographyProps) {
  return (
    <RNText
      style={{
        color: color,
        fontSize: fontSize,
      }}
    >
      {children}
    </RNText>
  );
}
