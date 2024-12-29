import { View, Image } from "react-native";
import React from "react";

export default function PrimaryLogo() {
  return (
    <View>
      <Image source={require("../assets/Logo.png")} style={style.logo} />
    </View>
  );
}
