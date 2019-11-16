import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Text } from "react-native-elements";

export default DetailScreen = ({ navigation: { getParam } }) => {
  const { name, avatar, createdAt } = getParam("item", {});
  return (
    <View style={styles.container}>
      <Avatar
        rounded
        source={{
          uri: avatar
        }}
        containerStyle={styles.marginTop}
        size="xlarge"
      />
      <Text h2 style={[styles.marginTop, styles.header]}>
        {name}
      </Text>
      <Text style={styles.marginTop}>{createdAt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },
  marginTop: {
    marginTop: 15
  },
  header: {
    textAlign: "center"
  }
});
