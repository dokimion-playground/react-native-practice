import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { useNavigation } from "expo-router";
import { LinkStackParamList } from "@/navigations/LinkStackNavigations";
import { NavigationProp } from "@react-navigation/native";
import { Spacer } from "@/components/Spacer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "@/components/Icon";
import { useRecoilValue } from "recoil";
import { atomLinkList, LinkItem } from "@/states/atomLinkList";

export default function LinkListScreen() {
  const navigation = useNavigation<NavigationProp<LinkStackParamList>>();
  const safeAreaInset = useSafeAreaInsets();
  const data = useRecoilValue(atomLinkList);

  const onPressListItem = useCallback((item: LinkItem) => {
    navigation.navigate("LinkDetail", { item });
  }, []);

  const onPressAddButton = useCallback(() => {
    navigation.navigate("AddLink");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        data={data.list}
        renderItem={({ item }) => {
          return (
            <Button
              onPress={() => onPressListItem(item)}
              paddingHorizontal={24}
              paddingVertical={12}
            >
              <View>
                <Typography fontSize={20}>{item.link}</Typography>
                <Spacer space={4} />
                <Typography fontSize={16} color="gray">
                  {item.title !== "" ? item.title.slice(0, 20) : ""}
                  {new Date(item.createdAt).toLocaleString()}
                </Typography>
              </View>
            </Button>
          );
        }}
      />

      <View
        style={{
          position: "absolute",
          right: 24,
          bottom: 24 + safeAreaInset.bottom,
        }}
      >
        <Button onPress={onPressAddButton}>
          <View
            style={{
              width: 52,
              height: 52,
              borderRadius: 26,
              backgroundColor: "black",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon iconName="add" iconColor="white" iconSize={32} />
          </View>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
