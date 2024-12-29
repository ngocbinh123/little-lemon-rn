import spacing from "./Spacing";
import conner from "./Conner";
import colors from "./Color";
import Dimensions from "./Dimensions";

const buttonStyle = {
  primaryIconBtn: {
    width: Dimensions.iconBtn,
    height: Dimensions.iconBtn,
    backgroundColor: colors.primary1,
    borderRadius: conner.circle,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  icon: {
    color: colors.highlight1,
  },
  primary: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.primary1,
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
    fontWeight: "bold",
  },
  disabled: {
    height: Dimensions.btn,
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
  secondary: {
    height: Dimensions.btn,
    borderWidth: 1,
    borderColor: colors.primary2,
    backgroundColor: colors.primary2,
    paddingHorizontal: spacing.spacing16,
    padingVertical: spacing.spacing8,
    borderRadius: conner.button,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  secondaryText: {
    color: colors.highlight2,
    textAlign: "center",
    fontWeight: "bold",
  },
  tertiary: {
    height: Dimensions.btn,
    borderWidth: 1,
    borderColor: colors.primary1,
    backgroundColor: colors.white,
    paddingHorizontal: spacing.spacing16,
    padingVertical: spacing.spacing8,
    borderRadius: conner.button,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  tertiaryText: {
    color: colors.primary1,
    textAlign: "center",
    fontWeight: "bold",
  },
};
export default buttonStyle;
