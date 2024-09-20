import { StyleSheet, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import { RouteProp, useRoute } from "@react-navigation/native";
import { LinkStackParamList } from "@/navigations/LinkStackNavigations";

export default function LinkDetailScreen() {
  const routes = useRoute<RouteProp<LinkStackParamList, "LinkDetail">>();
  console.log(" routes.params.item.link ", routes.params.item.link);
  return (
    <View style={{ flex: 1 }}>
      <WebView source={{ uri: routes.params.item.link }} style={{ flex: 1 }} />
    </View>
  );
}

const styles = StyleSheet.create({});
