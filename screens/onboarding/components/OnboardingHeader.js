import { StyleSheet, View, Image, Text } from "react-native";

export default function OnboardingHeader() {
  return (
    <View style={style.container}>
      <Image source={require("../../../assets/Logo.png")} style={style.logo} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
