import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import textStyle from "../../../design_token/TextStyle";
import Colors from "../../../design_token/Color";
import Spacing from "../../../design_token/Spacing";
import Strings from "../res/Strings";
import Conner from "../../../design_token/Conner";
import Dimensions from "../../../design_token/Dimensions";

const BannerView = () => {
  return (
    <View style={styles.container}>
      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={[textStyle.h2, styles.title]}>{Strings.bannerTitle}</Text>
        <Text style={[textStyle.h3, styles.subtitle]}>
          {Strings.bannerSubTitle}
        </Text>
        <Text style={[textStyle.p2, styles.description]}>
          {Strings.bannerDescription}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/banner.png")} // Replace with your image URL or asset
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary1, // Background color similar to the banner
    paddingTop: Spacing.spacing24,
    paddingBottom: Spacing.spacing8,
    paddingHorizontal: Spacing.spacing16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 2,
    marginRight: Spacing.spacing16,
  },
  title: {
    color: Colors.primary2,
  },
  subtitle: {
    color: Colors.primary2,
    marginVertical: Spacing.spacing4,
  },
  description: {
    paddingTop: Spacing.spacing8,
    color: Colors.white,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: Dimensions.bannerImg,
    height: Dimensions.bannerImg,
    borderRadius: Conner.img,
    alignSelf: "flex-end",
  },
  searchButton: {
    position: "absolute",
    bottom: 16,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  searchIcon: {
    fontSize: 18,
    color: "#4A585A", // Icon color matching the background
  },
});

export default BannerView;
