import { View, StyleSheet } from "react-native";
import Colors from "./Color";
export default function SeparatorView() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.gray,
  },
});
