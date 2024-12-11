import { View, Text, TextInput, StyleSheet } from "react-native";
import textStyle from "../design_token/TextStyle";
import inputStyle from "../design_token/InputStyle";
import spacing from "../design_token/Spacing";
import Space from "./Space";

const style = StyleSheet.create({
  container: {
    width: "100%",
  },
});
export default function InputWithLabel({
  label,
  value,
  placeholder,
  keyboardType,
  onChangeText,
}) {
  return (
    <View style={style.container}>
      <Text style={[textStyle.h3, { width: "100%" }]}>{label}</Text>
      <Space height={spacing.spacing4} />
      <TextInput
        style={[inputStyle.normal]}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
        placeholder={placeholder}
      />
    </View>
  );
}
