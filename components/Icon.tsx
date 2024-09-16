import React from "react";
import IonVectorIcons from "@expo/vector-icons/Ionicons";

export type IconName = keyof typeof IonVectorIcons.glyphMap;

interface IconProps {
  iconName: IconName;
  iconSize: number;
  iconColor?: string;
}

export function Icon({ iconName, iconSize, iconColor = "black" }: IconProps) {
  return <IonVectorIcons name={iconName} size={iconSize} color={iconColor} />;
}
