import { View, Button, TouchableOpacity, Text } from "react-native";
import buttonStyle from "../design_token/ButtonStyle";
import React from "react";

export default function TeriaryButton({ style, title, disable, onPress }) {
  return (
    <TouchableOpacity
      style={[disable ? buttonStyle.disabled : buttonStyle.tertiary, style]}
      onPress={onPress}
      disabled={disable}
    >
      <Text
        style={disable ? buttonStyle.disabledText : buttonStyle.tertiaryText}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
