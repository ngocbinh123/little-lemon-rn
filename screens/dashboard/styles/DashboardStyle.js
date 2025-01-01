import { StyleSheet } from "react-native";
import Spacing from "../../../design_token/Spacing";
import Colors from "../../../design_token/Color";
const style = StyleSheet.create({
  scrollWrapContainer: {
    // flexGrow: 1,
    // alignItems: "center",
    // justifyContent: "flex-start",
    // flexWrap: "wrap",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingTop: Spacing.spacing64,
    paddingBottom: Spacing.spacing24,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    paddingTop: Spacing.spacing16,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  subContainer: {
    width: "100%",
    justifyContent: "flex-start",
    paddingHorizontal: Spacing.spacing16,
  },
  rowContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default style;
