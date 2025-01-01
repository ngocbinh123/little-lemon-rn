import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Strings from "../res/Strings";
import colors from "../../../design_token/Color";
import conner from "../../../design_token/Conner";
import spacing from "../../../design_token/Spacing";
import textStyle from "../../../design_token/TextStyle";
import { useEffect, useState } from "react";
import CommonUtils from "../../../utils/CommonUtils";
export default function TagsView({ tags, onSelectedTags }) {
  const [selectedTags, setSelectedTags] = useState([]);

  const tagItemPressed = (tag) => {
    setSelectedTags(
      (prevSelectedTags) =>
        prevSelectedTags.includes(tag)
          ? prevSelectedTags.filter((item) => item !== tag) // Deselect tag if already selected
          : [...prevSelectedTags, tag], // Add tag if not already selected
    );
  };

  useEffect(() => {
    if (CommonUtils.isFunction(onSelectedTags)) {
      onSelectedTags(selectedTags);
    }
  }, [selectedTags]);

  return (
    <View style={styles.container}>
      <Text style={[textStyle.h3, styles.title]}>{Strings.tagTitle}</Text>

      {Array.isArray(tags) && tags.length > 0 ? (
        <FlatList
          data={tags}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TagViewItem
              tag={item}
              onPressed={tagItemPressed}
              isSelected={selectedTags.includes(item)}
            />
          )}
        />
      ) : (
        <Text>{Strings.noTags}</Text>
      )}
    </View>
  );
}

const TagViewItem = ({ tag, onPressed, isSelected }) => {
  const onTagPressed = () => {
    onPressed(tag);
  };
  return (
    <TouchableOpacity onPress={onTagPressed}>
      <Text
        style={[textStyle.h4, styles.tag, isSelected && styles.tagSelected]}
      >
        {tag}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.highlight2,
    paddingHorizontal: spacing.spacing16,
    paddingVertical: spacing.spacing8,
  },
  container: {
    width: "100%",
    alignItems: "flex-start",
    paddingVertical: spacing.spacing16,
  },
  tag: {
    paddingHorizontal: spacing.spacing16,
    paddingVertical: spacing.spacing8,
    marginStart: spacing.spacing16,
    marginEnd: spacing.spacing4,
    borderRadius: conner.tag,
    backgroundColor: colors.highlight1,
    color: colors.primary1,
  },
  tagSelected: {
    backgroundColor: colors.primary1,
    color: colors.highlight1,
  },
});
