import { Image, StyleSheet } from "react-native";
import Conner from "./Conner";
import Dimensions from "./Dimensions";
import CommonUtils from "../utils/CommonUtils";
export default function CornerImage({ style, uri }) {
  const source = CommonUtils.isString(uri) ? { uri } : uri;
  return <Image style={[style, styles.image]} source={source} />;
}

const styles = StyleSheet.create({
  image: {
    width: Dimensions.menuImg,
    height: Dimensions.menuImg,
    borderRadius: Conner.img,
  },
});
