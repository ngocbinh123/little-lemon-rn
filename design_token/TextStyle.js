import { StyleSheet } from "react-native";
import colors from "./Color";
const textStyle = StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary1,
  },
  h2: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary1,
  },
  h3: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary1,
  },
  h4: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary1,
  },
  h5: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.primary1,
  },
  p1: {
    fontSize: 16,
  },
  p2: {
    fontSize: 14,
  },
  p3: {
    fontSize: 12,
  },
  p4: {
    fontSize: 10,
  },
  label: {
    fontSize: 12,
    color: colors.gray,
  },
  error: {
    fontSize: 12,
    color: "red",
  },
});
export default textStyle;
