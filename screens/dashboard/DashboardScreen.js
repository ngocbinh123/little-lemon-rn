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
import { useEffect, useState, useRef } from "react";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import Strings from "./res/Strings";
import axios from "axios";
import DashboardConst from "./DashboardConst";
import DatabaseManager from "../../local_storage/database/DatabaseManager";
import colors from "../../design_token/Color";
export default function DashboardScreen() {
  const [menu, setMenu] = useState([]);
  const [searchtext, setSearchtext] = useState("");
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
  const typingTimeoutRef = useRef(null);
  const onProfilePressed = () => {
    navigation.navigate(Router.profile);
  };

  const loadAvatar = async () => {
    const image = await AsyncStorageManager.getData(StorageKeys.imageUri);
    setImageUri(image);
  };

  const onSeaching = (text) => {
    console.log("onSeaching", text);
    setSearchtext(text);

    // Clear the previous timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set a new timeout to delay the query execution
    typingTimeoutRef.current = setTimeout(() => {
      DatabaseManager.getMenuItemsWithFilter(text, selectedTags)
        .then((result) => {
          setMenu(result);
        })
        .catch((error) => {
          console.error("Error search menu items:", error);
        });
    }, DashboardConst.typingTimeoutInMs);
  };
  const onFilterByTags = (tags) => {
    setSelectedTags(tags);
    DatabaseManager.getMenuItemsWithFilter(searchtext, tags)
      .then((result) => {
        setMenu(result);
      })
      .catch((error) => {
        console.error("Error filtering menu items:", error);
      });
  };
  const loadMenu = async () => {
    try {
      const response = await axios.get(DashboardConst.menuApiUrl);
      DatabaseManager.insertAllMenuItems(response.data.menu);
      setMenu(response.data.menu);
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
      <SearchView searchText={searchtext} onChange={onSeaching} />
      <TagsView tags={tags} onSelectedTags={onFilterByTags} />
      {loading ? (
        <View style={DashboardStyle.container}>
          <ActivityIndicator size="large" color={colors.primary1} />
        </View>
      ) : (
        <MenuView menu={menu} />
      )}
    </View>
  );
}
