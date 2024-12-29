import { StyleSheet } from "react-native";
import Spacing from "../../../design_token/Spacing";
import Colors from "../../../design_token/Color";
const style = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: Spacing.spacing64,
    paddingBottom: Spacing.spacing24,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingTop: Spacing.spacing16,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
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
