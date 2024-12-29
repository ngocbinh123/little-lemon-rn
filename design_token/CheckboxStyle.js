import { StyleSheet } from "react-native";
import Conner from "../design_token/Conner";
import spacing from "../design_token/Spacing";
import textStyle from "../design_token/TextStyle";
import Colors from "../design_token/Color";
const styles = StyleSheet.create({
  checkbox: {
    marginRight: spacing.spacing8,
  },
  label: {
    textDecorationLine: "none", // this needs to be in textStyle
    color: Colors.highlight2,
  },
  icon: {
    borderRadius: Conner.checkBox,
  },
});
export default styles;
