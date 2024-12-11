import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import Validation from "../../utils/Validation";
import AsynncStorageManager from "../../local_storage/AsyncStorageManager";
import StorageKeys from "../../local_storage/StorageKeys";
import style from "./styles/OnboardingStyle";
import textStyle from "../../design_token/TextStyle";
import inputStyle from "../../design_token/InputStyle";
import spacing from "../../design_token/Spacing";
import String from "./res/String";
import OnboardingHeader from "./components/OnboardingHeader";
import Space from "../../components/Space";
import InputWithLabel from "../../components/InputWithLabel";
import PrimaryButton from "../../components/PrimaryButton";
export default function OnboardingScreen({ dispatch }) {
  const [nameFirst, setNameFirst] = useState("");
  const [email, setEmail] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const validateForm = (name, email) => {
    const nameIsValid = Validation.name(name);
    const emailIsValid = Validation.email(email);
    setIsButtonDisabled(!(nameIsValid && emailIsValid)); // Disable button if any field is invalid
  };
  const handleNextPress = async function saveData() {
    await AsynncStorageManager.saveData(StorageKeys.fistName, nameFirst);
    await AsynncStorageManager.saveData(StorageKeys.email, email);

    const localFirstName = await AsynncStorageManager.getData(
      StorageKeys.fistName,
    );
    const localEmail = await AsynncStorageManager.getData(StorageKeys.email);
    console.log("First Name:", localFirstName);
    console.log("Email:", localEmail);

    dispatch({ type: "SET_ONBOARDING_COMPLETED", payload: true });
  };
  const handleInputEmail = (text) => {
    setEmail(text);
    validateForm(nameFirst, text);
  };
  const handleInputFirstName = (text) => {
    setNameFirst(text);
    validateForm(text, email);
  };
  return (
    <View style={style.container}>
      <Space height={spacing.spacing48} />
      <OnboardingHeader />
      <Text style={textStyle.h2}>{String.onboardingIntro}</Text>
      <Space height={spacing.spacing48} />

      <InputWithLabel
        label={String.firstName}
        value={nameFirst}
        placeholder={String.firstNamePlaceholder}
        keyboardType="default"
        onChangeText={handleInputFirstName}
      />
      <Space height={spacing.spacing12} />
      <InputWithLabel
        label={String.email}
        value={email}
        placeholder={String.emailPlaceholder}
        keyboardType="email-address"
        onChangeText={handleInputEmail}
      />

      <Space height={spacing.spacing24} />
      <PrimaryButton
        title={String.next}
        disable={isButtonDisabled}
        onPress={handleNextPress}
        style={{ width: "100%" }}
      />
    </View>
  );
}
