import { View, Button, TouchableOpacity, Text } from "react-native";
import buttonStyle from "../design_token/ButtonStyle";
import React from "react";

export default function PrimaryButton({ style, title, disable, onPress }) {
  return (
    <TouchableOpacity
      style={[disable ? buttonStyle.disabled : buttonStyle.teriary, style]}
      onPress={onPress}
      disabled={disable}
    >
      <Text
        style={disable ? buttonStyle.disabledText : buttonStyle.teriaryText}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
