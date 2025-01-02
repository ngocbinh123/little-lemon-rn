import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import Space from "../../../components/Space";
import textStyle from "../../../design_token/TextStyle";
import spacing from "../../../design_token/Spacing";
import CornerImage from "../../../design_token/CornerImage";
import Colors from "../../../design_token/Color";
import SeparatorView from "../../../design_token/SeparatorView";
export default function MenuView({ menu }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={menu}
        contentContainerStyle={{ paddingBottom: spacing.spacing24 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        ItemSeparatorComponent={() => <SeparatorView />}
        renderItem={({ item }) => <MenuItemView item={item} />}
      />
    </SafeAreaView>
  );
}

const imageMap = {
  "greekSalad.jpg": require("../../../assets/greekSalad.png"),
  "bruschetta.jpg": require("../../../assets/bruschetta.png"),
  "grilledFish.jpg": require("../../../assets/grilledFish.png"),
  "pasta.jpg": require("../../../assets/pasta.png"),
  "lemonDessert.jpg": require("../../../assets/lemonDessert.png"),
};

const MenuItemView = ({ item }) => {
  const imgPath = `../../../assets/${item.image}`;
  return (
    <View style={styles.menuItemContainer}>
      <View style={styles.leftContainer}>
        <Text style={[textStyle.h3, styles.menuName]}>{item.name}</Text>
        <Space height={spacing.spacing16} />

        <Text style={[textStyle.p2, styles.menuDesc]}>{item.description}</Text>
        <Text style={[textStyle.h4, styles.menuPrice]}>${item.price}</Text>
      </View>
      <View style={styles.rightContainer}>
        <CornerImage uri={imageMap[item.image]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: spacing.spacing16,
    paddingHorizontal: spacing.spacing16,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: spacing.spacing8,
  },
  menuName: {
    color: Colors.black,
  },
  menuDesc: {
    color: Colors.primary1,
  },
  menuPrice: {
    color: Colors.primary1,
    marginTop: spacing.spacing8,
  },
  leftContainer: {
    flex: 2,
  },
  rightContainer: {
    alignItems: "flex-end",
    marginLeft: spacing.spacing16,
  },
});
