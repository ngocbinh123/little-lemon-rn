import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";
import buttonStyle from "../design_token/ButtonStyle";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Dimensions from "../design_token/Dimensions";

export default function CircleIconButton({
  iconName,
  style,
  iconStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[buttonStyle.primaryIconBtn, style]}
      onPress={onPress}
    >
      <Icon
        name={iconName}
        size={Dimensions.icon}
        style={[buttonStyle.icon, iconStyle]}
      />
    </TouchableOpacity>
  );
}
