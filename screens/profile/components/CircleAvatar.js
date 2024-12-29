import { View, Image, StyleSheet } from "react-native";
import ImagePickerWithPlaceholder from "../../../components/ImagePickerWithPlaceholder";
import AsyncStorageManager from "../../../local_storage/AsyncStorageManager";
import StorageKeys from "../../../local_storage/StorageKeys";
import React, { useEffect, useState } from "react";

export default function CircleAvatar({ style, imagePath, onImageChange }) {
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
    <ImagePickerWithPlaceholder
      style={style}
      name={firstName}
      imagePath={imagePath}
      onImageChange={onImageChange}
    />
  );
}
