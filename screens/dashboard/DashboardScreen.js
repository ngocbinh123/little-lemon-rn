import { ScrollView } from "react-native";
import ProfileHeader from "../profile/components/ProfileHeader";
import ProfileStyle from "../profile/styles/ProfileStyle";
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
export default function DashboardScreen() {
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
  useEffect(() => {
    loadAvatar();
  }, []);
  useFocusEffect(() => {
    loadAvatar();
  });
  return (
    <ScrollView contentContainerStyle={ProfileStyle.scrollContainer}>
      <ProfileHeader
        imagePath={imageUri}
        showBackButton={false}
        onPress={onProfilePressed}
      />
      <BannerView />
      <SearchView />
      <TagsView tags={tags} onSelectedTags={setSelectedTags} />
      <MenuView />
    </ScrollView>
  );
}
