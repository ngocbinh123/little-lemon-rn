import { View, Text, ActivityIndicator } from "react-native";
import style from "./styles/SplashStyle";
import colors from "../../design_token/Color";
import Strings from "../dashboard/res/Strings";
import textStyle from "../../design_token/TextStyle";
import Space from "../../components/Space";
import spacing from "../../design_token/Spacing";
export default function SplashScreen() {
  return (
    <View style={style.container}>
      <Text style={[textStyle.h2, style.title]}>{Strings.bannerTitle}</Text>
      <Space height={spacing.spacing24} />
      <ActivityIndicator size="large" color={colors.highlight1} />
    </View>
  );
}
