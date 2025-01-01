import { View, Text, StyleSheet } from "react-native";
import Space from "../../../components/Space";
import DashboardStyle from "../styles/DashboardStyle";
export default function MenuView() {
  return (
    <View style={DashboardStyle.container}>
      <Text>Menu</Text>
      <View weight="1" />
    </View>
  );
}
