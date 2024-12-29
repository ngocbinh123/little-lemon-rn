import { View, Button, TouchableOpacity, Text, StyleSheet } from "react-native";
import buttonStyle from "../design_token/ButtonStyle";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Dimensions from "../design_token/Dimensions";

export default function CircleIconButton({ iconName, style, onPress }) {
  return (
    <TouchableOpacity
      style={[style, buttonStyle.primaryIconBtn]}
      onPress={onPress}
    >
      <Icon name={iconName} size={Dimensions.icon} style={buttonStyle.icon} />
    </TouchableOpacity>
  );
}
