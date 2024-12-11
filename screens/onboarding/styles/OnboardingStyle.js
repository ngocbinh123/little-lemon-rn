import { StyleSheet } from "react-native";
import Spacing from "../../../design_token/Spacing";

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "top",
    backgroundColor: "#fff",
    paddingHorizontal: Spacing.spacing16,
    paddingVertical: Spacing.spacing24,
  },
  fullWidth: {
    width: "100%",
    flex: 1,
  },
  text: {
    fontFamily: "MarkaziText-Regular",
    fontSize: 20,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
  },
  error: {
    color: "red",
  },
});
export default style;
