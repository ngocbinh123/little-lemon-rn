import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import Dimensions from "../design_token/Dimensions";
import TextStyle from "../design_token/TextStyle";
import Colors from "../design_token/Color";
import Conner from "../design_token/Conner";
import Spacing from "../design_token/Spacing";

const ImagePickerWithPlaceholder = ({
  style,
  name,
  imagePath,
  onImageChange,
  onPress,
}) => {
  const [displayName, setDisplayName] = useState(getInitials(name));

  useEffect(() => {
    setDisplayName(getInitials(name));
  }, [name]);
  const pickImage = async () => {
    // Request permission to access media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access the media library is required!");
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      // setImageUri(uri);
      onImageChange(uri);
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress ?? pickImage}
      style={[styles.placeholderContainer]}
    >
      {imagePath ? (
        <Image source={{ uri: imagePath }} style={[styles.image, style]} />
      ) : (
        <View style={[styles.placeholder, style]}>
          <Text style={[TextStyle.h4, styles.highlightText]}>
            {displayName}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.avatar,
  },
  placeholderContainer: {
    borderRadius: Conner.circle,
    overflow: "hidden",
  },
  placeholder: {
    width: Dimensions.avatar,
    height: Dimensions.avatar,
    backgroundColor: Colors.avatar,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Conner.circle,
  },
  highlightText: {
    color: Colors.highlight1,
  },
  image: {
    width: Dimensions.avatar,
    height: Dimensions.avatar,
    borderRadius: Conner.circle,
  },
});

const getInitials = (name) => {
  if (!name) return ""; // Return empty if no name is passed

  const words = name.trim().split(/\s+/); // Split name by spaces and remove extra spaces
  const firstInitial = words[0] ? words[0][0].toUpperCase() : ""; // First letter of the first word
  const secondInitial = words[1] ? words[1][0].toUpperCase() : ""; // First letter of the second word

  return firstInitial + secondInitial; // Concatenate initials
};

export default ImagePickerWithPlaceholder;
