import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import React, { useCallback } from "react";
import { Header } from "@/components/Header/Header";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { RemoteImage } from "@/components/RemoteImage";
import { RootStackParamList } from "@/navigations/RootStackNavigations";

export default function ImageDetailScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "ImageDetail">>();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Header>
        <Header.Group>
          <Header.Icon iconName={"arrow-back"} onPress={onPressBack} />
          <Header.Title title="IMAGE DETAIL" />
        </Header.Group>
      </Header>
      <View style={styles.container}>
        <RemoteImage
          url={route.params.url}
          width={width}
          height={width * 1.4}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
