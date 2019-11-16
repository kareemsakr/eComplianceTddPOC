import React from "react";
import { ListItem } from "react-native-elements";

export default ({ item: { name, createdAt, avatar }, handlePress }) => {
  return (
    <ListItem
      title={name}
      subtitle={createdAt}
      leftAvatar={{ source: { uri: avatar } }}
      bottomDivider
      chevron
      onPress={handlePress}
    />
  );
};
