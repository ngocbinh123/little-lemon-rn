import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import colors from "../design_token/Color";
import CheckboxStyle from "../design_token/CheckboxStyle";
import textStyle from "../design_token/TextStyle";
const CheckboxWithLabel = ({ label, value, onChange }) => {
  return (
    <BouncyCheckbox
      isChecked={value}
      onPress={onChange}
      text={label}
      fillColor={colors.primary1}
      textStyle={[textStyle.p2, CheckboxStyle.label]}
      style={CheckboxStyle.checkbox}
      disableBuiltInState
      innerIconStyle={CheckboxStyle.icon}
      iconStyle={CheckboxStyle.icon}
    />
  );
};

export default CheckboxWithLabel;
