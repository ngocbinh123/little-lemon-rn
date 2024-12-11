import spacing from "./Spacing";
import conner from "./Conner";
import colors from "./Color";
const buttonStyle = {
  primary: {
    height: 40,
    borderWidth: 1,
    backgroundColor: colors.primary1,
    paddingHorizontal: spacing.spacing16,
    padingVertical: spacing.spacing8,
    borderRadius: conner.button,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  primaryText: {
    color: colors.highlight1,
    textAlign: "center",
  },
  disabled: {
    height: 40,
    borderWidth: 1,
    backgroundColor: "#cccccc",
    borderColor: "transparent",
    paddingHorizontal: spacing.spacing16,
    padingVertical: spacing.spacing8,
    borderRadius: conner.button,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  disabledText: {
    color: "#aaaaaa", // Text color for disabled button
    textAlign: "center",
  },
};
export default buttonStyle;
