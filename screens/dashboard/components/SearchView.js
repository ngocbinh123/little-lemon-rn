import React from "react";
import {
  View,
  TextInput,
  Animated,
  Keyboard,
  Dimensions,
  StyleSheet,
} from "react-native";
import { useState, useRef } from "react";
import Colors from "../../../design_token/Color";
import Spacing from "../../../design_token/Spacing";
import Conner from "../../../design_token/Conner";
import Dimens from "../../../design_token/Dimensions";
import CircleIconButton from "../../../components/CircleIconButton";
import DashboardConst from "../DashboardConst";
import Icon from "react-native-vector-icons/MaterialIcons";
const SearchView = ({ searchText, onChange }) => {
  const { width: SCREEN_WIDTH } = Dimensions.get("window");
  const [isExpanded, setIsExpanded] = useState(false);
  const inputWidth = useRef(new Animated.Value(36)).current; // Initial width for the circle icon
  const textInputRef = useRef(null);
  const iconPressed = () => {
    expandSearchBar(false);
  };
  const expandSearchBar = () => {
    if (!isExpanded) {
      // Expand animation
      Animated.timing(inputWidth, {
        toValue: SCREEN_WIDTH - Dimens.iconBtn, // Final width for expanded search bar
        duration: DashboardConst.searchAnimationDuration,
        useNativeDriver: false,
      }).start(() => {
        setIsExpanded(true);
        textInputRef.current?.focus(); // Focus the input field
      });
    } else if (searchText === "") {
      // Collapse animation
      Keyboard.dismiss();
      Animated.timing(inputWidth, {
        toValue: Dimens.iconBtn, // Reset width to initial size
        duration: DashboardConst.searchAnimationDuration,
        useNativeDriver: false,
      }).start(() => {
        setIsExpanded(false);
      });
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.searchBar, { width: inputWidth }]}>
        {isExpanded ? (
          <View style={styles.expandContainer}>
            <TextInput
              ref={textInputRef}
              style={styles.input}
              placeholder="Search..."
              placeholderTextColor={Colors.highlight1}
              onChangeText={onChange}
              value={searchText}
              onBlur={() => {
                expandSearchBar(); // Collapse when the input loses focus
              }}
            />
            <Icon
              name="search"
              size={24}
              color={Colors.white}
              style={styles.icon}
              onPress={iconPressed}
            />
          </View>
        ) : (
          <CircleIconButton
            iconName="search"
            style={styles.searchButton}
            iconStyle={styles.searchIcon}
            onPress={expandSearchBar}
          />
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  expandContainer: {
    flex: 1,
    height: Dimens.iconBtn,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    backgroundColor: Colors.primary1,
    padding: Spacing.spacing16,
    justifyContent: "center",
    width: "100%",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primary1,
    // borderRadius: Conner.circle,
    overflow: "hidden",
  },
  searchButton: {
    backgroundColor: Colors.highlight1,
  },
  searchIcon: {
    color: Colors.primary1,
  },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 16,
    color: Colors.white,
    borderWidth: 1, // Add white border
    borderColor: Colors.white, // White border color
    paddingHorizontal: Spacing.spacing16,
    paddingVertical: Spacing.spacing8,
    borderRadius: Conner.input, // Rounded corners for input
  },
  icon: {
    position: "absolute",
    right: Spacing.spacing8,
    top: 6,
    zIndex: 1,
  },
});

export default SearchView;
