import { View, Image, StyleSheet } from "react-native";
import BackButton from "../../../components/BackButton";
import AsyncStorageManager from "../../../local_storage/AsyncStorageManager";
import StorageKeys from "../../../local_storage/StorageKeys";
import React, { useEffect, useState } from "react";
import Colors from "../../../design_token/Color";
import Spacing from "../../../design_token/Spacing";
import Dimensions from "../../../design_token/Dimensions";
import CircleAvatar from "./CircleAvatar";

export default function ProfileHeader({
  imagePath,
  onImageChange,
  onBackPress,
  showBackButton = true,
}) {
  const [firstName, setFirstName] = useState("");
  useEffect(() => {
    const fetchFirstName = async () => {
      const name = await AsyncStorageManager.getData(StorageKeys.firstName);
      setFirstName(name);
    };
    fetchFirstName();
  }, []);

  useEffect(() => {}, [firstName]);

  return (
    <View style={style.container}>
      {showBackButton ? (
        <BackButton onPress={onBackPress} />
      ) : (
        <View style={style.backButtonPlaceholder} />
      )}
      <Image source={require("../../../assets/Logo.png")} style={style.logo} />
      <CircleAvatar imagePath={imagePath} onImageChange={onImageChange} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.white,
    flexDirection: "row",
    paddingHorizontal: Spacing.spacing16,
    paddingTop: Spacing.spacing48,
    paddingBottom: Spacing.spacing8,
  },
  logo: {
    width: Dimensions.logo,
    resizeMode: "contain",
  },
});
