import React from "react";
import { Image, ImageStyle, StyleProp } from "react-native";

interface RemoteImageProps {
  url: string;
  width?: number;
  height?: number;
  style?: StyleProp<ImageStyle>;
}

export function RemoteImage({ url, width, height, style }: RemoteImageProps) {
  return (
    <Image
      source={{ uri: url }}
      style={[style, { width: width, height: height }]}
    />
  );
}
