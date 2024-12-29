import { View, Text } from "react-native";
import Strings from "../res/Strings";
import textStyle from "../../../design_token/TextStyle";
import ProfileStyle from "../styles/ProfileStyle";
import CheckboxWithLabel from "../../../components/CheckboxWithLabel";
import Space from "../../../components/Space";
import spacing from "../../../design_token/Spacing";

export default function PersonalView({
  defaultOrderStatuses,
  orderStatusesChange,
  defaultPassChange,
  passChangeChange,
  defaultSpecialOffers,
  specialOffersChange,
  defaultNewsletters,
  newslettersChange,
}) {
  return (
    <View style={ProfileStyle.subContainer}>
      <Space height={spacing.spacing24} />
      <Text style={textStyle.h3}>{Strings.emailNoti}</Text>
      <Space height={spacing.spacing16} />
      <CheckboxWithLabel
        label={Strings.orderStatuses}
        value={defaultOrderStatuses}
        onChange={orderStatusesChange}
      />
      <Space height={spacing.spacing16} />
      <CheckboxWithLabel
        label={Strings.passChanges}
        value={defaultPassChange}
        onChange={passChangeChange}
      />
      <Space height={spacing.spacing16} />
      <CheckboxWithLabel
        label={Strings.specialOffers}
        value={defaultSpecialOffers}
        onChange={specialOffersChange}
      />
      <Space height={spacing.spacing16} />
      <CheckboxWithLabel
        label={Strings.newsletters}
        value={defaultNewsletters}
        onChange={newslettersChange}
      />
    </View>
  );
}
