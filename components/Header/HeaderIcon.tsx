import React from "react";
import { Button } from "../Button";
import { Icon, IconName } from "../Icon";

interface HeaderIconProps {
  onPress: () => void;
  iconName: IconName;
}

export function HeaderIcon({ onPress, iconName }: HeaderIconProps) {
  return (
    <Button onPress={onPress}>
      <Icon iconName={iconName} iconSize={28} />
    </Button>
  );
}
