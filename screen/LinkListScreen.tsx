import { StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { useNavigation } from "expo-router";
import { LinkStackParamList } from "@/navigations/LinkStackNavigations";
import { NavigationProp } from "@react-navigation/native";
import { Spacer } from "@/components/Spacer";

export default function LinkListScreen() {
  const navigation = useNavigation<NavigationProp<LinkStackParamList>>();
  const onPressButton = useCallback(() => {
    navigation.navigate("LinkDetail");
  }, []);

  const onPressAddButton = useCallback(() => {
    navigation.navigate("LinkDetail");
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text>LinkListScreen</Text>

      <View style={{ flex: 1 }}>
        <Button onPress={onPressButton}>
          <Typography>LINK DETAIL 이동</Typography>
        </Button>
        <Spacer space={12} />
        <Button onPress={onPressAddButton}>
          <Typography>링크등록 이동</Typography>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
