import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useCallback, useState } from "react";
import SingleLineInput from "@/components/SingleLineInput";
import { Button } from "@/components/Button";
import { Typography } from "@/components/Typography";
import { useNavigation } from "@react-navigation/native";
import { useSetRecoilState } from "recoil";
import { atomLinkList } from "@/states/atomLinkList";

export default function AddLinkScreen() {
  const [url, setUrl] = useState("");
  const updateList = useSetRecoilState(atomLinkList);

  const navigation = useNavigation();

  const onPressClose = useCallback(() => {
    navigation.goBack();
  }, []);

  const onPressSave = useCallback(() => {
    if (url === "") return;

    updateList((prevState) => {
      const newItem = {
        title: "",
        image: "",
        link: url,
        createdAt: new Date().toISOString(),
      };

      return {
        list: [newItem, ...prevState.list],
      };
    });

    setUrl("");
    navigation.goBack();
  }, [url, updateList, navigation]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <View style={{ flex: 1 }}>
        <SingleLineInput value={url} onChangeText={setUrl} />
      </View>

      <Button onPress={onPressSave}>
        <View style={{ backgroundColor: url === "" ? "gray" : "black" }}>
          <View
            style={{
              height: 52,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography color="white">저장하기</Typography>
          </View>
        </View>
      </Button>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({});
