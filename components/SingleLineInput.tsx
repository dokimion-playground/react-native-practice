import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import React, { useState } from "react";

interface SingleLineInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export default function SingleLineInput({
  value,
  onChangeText,
  placeholder,
  ...props
}: SingleLineInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={{
        alignSelf: "stretch",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: focused ? "blue" : "gray",
      }}
    >
      <TextInput
        {...props}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[{ fontSize: 20 }]}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
