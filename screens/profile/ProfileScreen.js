import {
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import ProfileHeader from "./components/ProfileHeader";
import PersonalView from "./components/PersonalView";
import EmailNotiView from "./components/EmailNotiView";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import TeriaryButton from "../../components/TertiaryButton";
import Space from "../../components/Space";
import Strings from "../profile/res/Strings";
import Spacing from "../../design_token/Spacing";
import ProfileStyle from "./styles/ProfileStyle";
import { useEffect, useState } from "react";
import Validation from "../../utils/Validation";
import StorageKeys from "../../local_storage/StorageKeys";
import AsyncStorageManager from "../../local_storage/AsyncStorageManager";
import { useNavigation } from "@react-navigation/native";
import Router from "../../utils/router/Router";

export default function profileScreen() {
  const [imageUri, setImageUri] = useState(null);
  const navigation = useNavigation();
  const [nameFirst, setNameFirst] = useState("");
  const [nameLast, setNameLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [orderStatuses, setOrderStatuses] = useState(false);
  const [passwordChange, setPasswordChange] = useState(false);
  const [specialOffers, setSpecialOffers] = useState(false);
  const [newLetter, setNewLetter] = useState(false);

  const [nameFirstError, setNameFirstError] = useState("");
  const [nameLastError, setNameLastError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const loadAvatar = async () => {
    const image = await AsyncStorageManager.getData(StorageKeys.imageUri);
    setImageUri(image);
  };

  const loadNotificationStatus = async () => {
    console.log("loadNotificationStatus");
    const orderStatuses = await AsyncStorageManager.getData(
      StorageKeys.orderStatuses,
    );
    const passwordChange = await AsyncStorageManager.getData(
      StorageKeys.passwordChange,
    );
    const specialOffers = await AsyncStorageManager.getData(
      StorageKeys.specialOffers,
    );
    const newLetter = await AsyncStorageManager.getData(StorageKeys.newLetter);

    console.log("orderStatuses load", orderStatuses);
    setOrderStatuses(orderStatuses);
    setPasswordChange(passwordChange);
    setSpecialOffers(specialOffers);
    setNewLetter(newLetter);
  };
  const loadUserInfo = async () => {
    const firstName = await AsyncStorageManager.getData(StorageKeys.firstName);
    const lastName = await AsyncStorageManager.getData(StorageKeys.lastName);
    const email = await AsyncStorageManager.getData(StorageKeys.email);
    const phone = await AsyncStorageManager.getData(StorageKeys.phone);
    setNameFirst(firstName);
    setNameLast(lastName);
    setEmail(email);
    setPhone(phone);
    loadAvatar();
  };
  useEffect(() => {
    loadUserInfo();
    loadAvatar();
    loadNotificationStatus();
  }, []);
  const discardPressed = () => {
    loadAvatar();
    loadUserInfo();
    loadNotificationStatus();
  };

  const onSaveNotificationStatus = async () => {
    await AsyncStorageManager.saveData(
      StorageKeys.orderStatuses,
      orderStatuses,
    );
    await AsyncStorageManager.saveData(
      StorageKeys.passwordChange,
      passwordChange,
    );
    await AsyncStorageManager.saveData(
      StorageKeys.specialOffers,
      specialOffers,
    );
    await AsyncStorageManager.saveData(StorageKeys.newLetter, newLetter);

    console.log("orderStatuses save", orderStatuses);
  };
  const onSaveImage = async () => {
    if (imageUri !== null) {
      await AsyncStorageManager.saveData(StorageKeys.imageUri, imageUri);
    }
  };

  const onRemoveImage = () => {
    loadAvatar();
  };

  const savePressed = () => {
    const firstNameIsValid = Validation.name(nameFirst);
    const lastNameIsValid = Validation.name(nameLast);
    const emailIsValid = Validation.email(email);
    const phoneIsValid = Validation.phone(phone);

    if (firstNameIsValid) {
      setNameFirstError("");
      AsyncStorageManager.saveData(StorageKeys.firstName, nameFirst);
    } else {
      setNameFirstError(Strings.firstNameInvalid);
    }
    if (lastNameIsValid) {
      setNameLastError("");
      AsyncStorageManager.saveData(StorageKeys.lastName, nameLast);
    } else {
      setNameLastError(Strings.lastNameInvalid);
    }
    if (emailIsValid) {
      setEmailError("");
      AsyncStorageManager.saveData(StorageKeys.email, email);
    } else {
      setEmailError(Strings.emailInvalid);
    }
    if (phoneIsValid) {
      setPhoneError("");
      AsyncStorageManager.saveData(StorageKeys.phone, phone);
    } else {
      setPhoneError(Strings.phoneInvalid);
    }

    onSaveImage();
    onSaveNotificationStatus();
  };
  const signOutPressed = async () => {
    Alert.alert(Strings.logoutTitle, Strings.logoutMessage, [
      {
        text: Strings.cancel,
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: Strings.ok,
        onPress: async () => {
          await AsyncStorageManager.clearAll();
          navigation.replace(Router.onboarding);
        },
      },
    ]);
  };
  return (
    <ScrollView contentContainerStyle={ProfileStyle.scrollContainer}>
      <ProfileHeader imagePath={imageUri} onImageChange={setImageUri} />
      <PersonalView
        firstNameError={nameFirstError}
        lastNameError={nameLastError}
        emailError={emailError}
        phoneError={phoneError}
        defaultEmail={email}
        defaultFirstName={nameFirst}
        defaultLastName={nameLast}
        defaultPhone={phone}
        imagePath={imageUri}
        onImageChange={setImageUri}
        onChangeEmail={setEmail}
        onChangeFirstName={setNameFirst}
        onChangeLastName={setNameLast}
        onChangePhone={setPhone}
        onChangePressed={onSaveImage}
        onRemovePressed={onRemoveImage}
      />
      <EmailNotiView
        defaultOrderStatuses={orderStatuses}
        defaultPassChange={passwordChange}
        defaultSpecialOffers={specialOffers}
        defaultNewsletters={newLetter}
        orderStatusesChange={setOrderStatuses}
        passChangeChange={setPasswordChange}
        specialOffersChange={setSpecialOffers}
        newslettersChange={setNewLetter}
      />
      <Space height={Spacing.spacing16} />
      <View style={ProfileStyle.container} />
      <View style={style.logoutContainer}>
        <SecondaryButton title={Strings.logout} onPress={signOutPressed} />
      </View>
      <View style={style.btnRowContainer}>
        <TeriaryButton
          style={style.halfView}
          title={Strings.discardBtn}
          onPress={discardPressed}
        />
        <View width={Spacing.spacing16} />
        <PrimaryButton
          style={style.halfView}
          title={Strings.saveChange}
          onPress={savePressed}
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.spacing16,
  },
  marginHorizonal: {
    marginHorizontal: Spacing.spacing16,
  },

  logoutContainer: {
    width: "100%",
    marginHorizontal: Spacing.spacing16,
    paddingHorizontal: Spacing.spacing16,
  },
  rowContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: Spacing.spacing16,
    paddingHorizontal: Spacing.spacing16,
  },
  btnRowContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: Spacing.spacing24,
    paddingHorizontal: Spacing.spacing36,
  },
  halfView: {
    flex: 1,
  },
});
