import { View, Text, StyleSheet } from "react-native";
import Strings from "../res/Strings";
import InputWithLabel from "../../../components/InputWithLabel";
import ProfileStyle from "../styles/ProfileStyle";
import CircleAvatar from "./CircleAvatar";
import PrimaryButton from "../../../components/PrimaryButton";
import TeriaryButton from "../../../components/TertiaryButton";
import Spacing from "../../../design_token/Spacing";
import Spacer from "../../../components/Space";
import Dimensions from "../../../design_token/Dimensions";
import textStyle from "../../../design_token/TextStyle";

export default function PersonalView({
  firstNameError,
  lastNameError,
  emailError,
  phoneError,
  defaultEmail,
  defaultFirstName,
  defaultLastName,
  defaultPhone,
  imagePath,
  onImageChange,
  onChangeFirstName,
  onChangeLastName,
  onChangeEmail,
  onChangePhone,
  onChangePressed,
  onRemovePressed,
}) {
  return (
    <View style={ProfileStyle.subContainer}>
      <Text style={textStyle.h3}>{Strings.personHeader}</Text>
      <Text style={textStyle.label}>{Strings.avatar}</Text>
      <View style={ProfileStyle.rowContainer}>
        <CircleAvatar
          style={style.avatar}
          imagePath={imagePath}
          onImageChange={onImageChange}
        />
        <Spacer width={Spacing.spacing16} />
        <PrimaryButton title={Strings.changeBtn} onPress={onChangePressed} />
        <Spacer width={Spacing.spacing16} />
        <TeriaryButton title={Strings.removeBtn} onPress={onRemovePressed} />
      </View>
      <InputWithLabel
        label={Strings.firstName}
        placeholder={Strings.firstName}
        keyboardType="default"
        error={firstNameError}
        value={defaultFirstName}
        onChangeText={onChangeFirstName}
      />
      <Spacer height={Spacing.spacing16} />
      <InputWithLabel
        label={Strings.lastName}
        placeholder={Strings.lastName}
        keyboardType="default"
        error={lastNameError}
        value={defaultLastName}
        onChangeText={onChangeLastName}
      />
      <Spacer height={Spacing.spacing16} />
      <InputWithLabel
        label={Strings.email}
        placeholder={Strings.email}
        keyboardType="email-address"
        error={emailError}
        value={defaultEmail}
        onChangeText={onChangeEmail}
      />
      <Spacer height={Spacing.spacing16} />
      <InputWithLabel
        label={Strings.phone}
        placeholder={Strings.phone}
        keyboardType="phone-pad"
        error={phoneError}
        value={defaultPhone}
        onChangeText={onChangePhone}
      />
    </View>
  );
}

const style = StyleSheet.create({
  avatar: {
    width: Dimensions.avatar64,
    height: Dimensions.avatar64,
  },
});
