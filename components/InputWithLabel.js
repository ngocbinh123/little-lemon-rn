import { View, Text, TextInput, StyleSheet } from "react-native";
import textStyle from "../design_token/TextStyle";
import inputStyle from "../design_token/InputStyle";
import spacing from "../design_token/Spacing";
import Space from "./Space";
import { useEffect, useState } from "react";

const style = StyleSheet.create({
  container: {
    width: "100%",
  },
});
export default function InputWithLabel({
  label,
  value,
  placeholder,
  error,
  keyboardType,
  onChangeText,
}) {
  return (
    <View style={style.container}>
      <Text style={[textStyle.h6, { width: "100%" }]}>{label}</Text>
      <Space height={spacing.spacing4} />
      <TextInput
        style={[inputStyle.normal]}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
      {error ? (
        <Text
          style={[
            textStyle.error,
            { paddingLeft: spacing.spacing4, paddingTop: spacing.spacing2 },
          ]}
        >
          {error}
        </Text>
      ) : null}
    </View>
  );
}
