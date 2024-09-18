import { Animated, useWindowDimensions } from "react-native";
import React, { useCallback, useState } from "react";
import { RemoteImage } from "./RemoteImage";
import { Button } from "./Button";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "@/navigations/RootStackNavigations";

interface PhothoListItemProps {
  url: string;
}

export default function PhotoListItem({ url }: PhothoListItemProps) {
  const [animValue] = useState(new Animated.Value(0));
  const { width } = useWindowDimensions();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressItem = useCallback(() => {
    navigation.navigate("ImageDetail", { url });
  }, []);

  const scale = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.95],
  });

  const onPressIn = useCallback(() => {
    Animated.timing(animValue, {
      duration: 200,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }, []);
  const onPressOut = useCallback(() => {
    Animated.timing(animValue, {
      duration: 200,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Button
      onPress={onPressItem}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      paddingHorizontal={20}
      paddingVertical={10}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        <RemoteImage url={url} width={width - 40} height={width * 1.2} />
      </Animated.View>
    </Button>
  );
}
