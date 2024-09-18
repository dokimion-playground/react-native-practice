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
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { Icon } from "@/components/Icon";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

export default function ImageDetailScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, "ImageDetail">>();
  const onPressBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressDownload = useCallback(async () => {
    const downloadResumable = FileSystem.createDownloadResumable(
      route.params.url,
      `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
    );
    try {
      const res = await downloadResumable.downloadAsync();
      if (res && res.uri) {
        console.log("Finished downloading to ", res.uri);

        const premissonResult = await MediaLibrary.getPermissionsAsync(true);
        if (premissonResult.status === "denied") {
          return;
        }
        if (premissonResult.status === "undetermined") {
          const requestResult = await MediaLibrary.requestPermissionsAsync();
          if (requestResult.status === "denied") {
            return;
          }
        }
        const asset = await MediaLibrary.createAssetAsync(res.uri);
        console.log("asset", asset);

        const album = MediaLibrary.createAlbumAsync("TestFolder", asset, false);
        console.log("album", album);
      }
    } catch (e) {
      console.error(e);
    }
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

      <Button onPress={onPressDownload}>
        <View style={{ paddingBottom: 24, backgroundColor: "black" }}>
          <View
            style={{
              height: 52,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white">DOWNLOAD</Typography>
            <Icon iconName="download" iconSize={24} iconColor="white" />
          </View>
        </View>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
