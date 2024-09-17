import { useWindowDimensions } from "react-native";
import React, { useCallback } from "react";
import { RemoteImage } from "./RemoteImage";
import { Button } from "./Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigations/RootStackNavigations";

interface PhothoListItemProps {
  url: string;
}

export default function PhotoListItem({ url }: PhothoListItemProps) {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressItem = useCallback(() => {
    navigation.navigate("ImageDetail", { url });
  }, []);

  return (
    <Button onPress={onPressItem} paddingHorizontal={20} paddingVertical={10}>
      <RemoteImage url={url} width={width - 40} height={width * 1.2} />
    </Button>
  );
}
