import { View, ActivityIndicator } from "react-native";
import ProfileHeader from "../profile/components/ProfileHeader";
import DashboardStyle from "./styles/DashboardStyle";
import Router from "../../utils/router/Router";
import BannerView from "./components/BannerView";
import SearchView from "./components/SearchView";
import TagsView from "./components/TagsView";
import MenuView from "./components/MenuView";
import AsyncStorageManager from "../../local_storage/AsyncStorageManager";
import StorageKeys from "../../local_storage/StorageKeys";
import { useEffect, useState } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Strings from "./res/Strings";
import axios from "axios";
export default function DashboardScreen() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const tags = [
    Strings.starters,
    Strings.mains,
    Strings.desserts,
    Strings.drinks,
  ];
  const [selectedTags, setSelectedTags] = useState([]);
  const [imageUri, setImageUri] = useState("");
  const navigation = useNavigation();
  const onProfilePressed = () => {
    navigation.navigate(Router.profile);
  };

  const loadAvatar = async () => {
    const image = await AsyncStorageManager.getData(StorageKeys.imageUri);
    setImageUri(image);
  };

  const loadMenu = async () => {
    try {
      const response = await axios.get(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/capstone.json",
      );
      setMenu(response.data.menu); // Assuming the API response is JSON
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    loadAvatar();
    loadMenu();
  }, []);
  useFocusEffect(() => {
    loadAvatar();
  });
  return (
    <View style={DashboardStyle.container}>
      <ProfileHeader
        imagePath={imageUri}
        showBackButton={false}
        onPress={onProfilePressed}
      />
      <BannerView />
      <SearchView />
      <TagsView tags={tags} onSelectedTags={setSelectedTags} />
      {loading ? (
        <View style={DashboardStyle.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <MenuView menu={menu} />
      )}
    </View>
  );
}
