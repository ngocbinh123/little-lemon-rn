import { View, Button, TouchableOpacity, Text } from "react-native";
import buttonStyle from "../design_token/ButtonStyle";
import React from "react";

export default function PrimaryButton({ style, title, disable, onPress }) {
  return (
    <TouchableOpacity
      style={[disable ? buttonStyle.disabled : buttonStyle.primary, style]}
      onPress={onPress}
      disabled={disable}
    >
      <Text
        style={disable ? buttonStyle.disabledText : buttonStyle.primaryText}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
