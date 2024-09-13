import React from "react";
import { View } from "react-native";
import { Badge } from "./Badge";
import { Icon, IconName } from "./Icon";

interface TabIconProps {
  iconName: IconName;
  iconColor: string;
  visibleBadge?: boolean;
}

export function TabIcon({
  iconName,
  iconColor,
  visibleBadge = false,
}: TabIconProps) {
  return (
    <View style={{ padding: 4 }}>
      {visibleBadge ? (
        <Badge>
          <Icon iconName={iconName} iconSize={20} iconColor={iconColor} />
        </Badge>
      ) : (
        <Icon iconName={iconName} iconSize={20} iconColor={iconColor} />
      )}
    </View>
  );
}
