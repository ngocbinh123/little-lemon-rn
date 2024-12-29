import { View } from "react-native";
import buttonStyle from "../design_token/ButtonStyle";
import Colors from "../design_token/Color";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import CircleIconButton from "./CircleIconButton";

export default function BackButton({ onPress }) {
  return <CircleIconButton iconName="arrow-back" onPress={onPress} />;
}
