import { StyleSheet } from "react-native";
import colors from "../../../design_token/Color";
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary1,
  },
  title: {
    color: colors.highlight1,
  },
});
export default style;
