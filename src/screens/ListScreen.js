import React from "react";
import { StyleSheet, ActivityIndicator, View, FlatList } from "react-native";
import ListItem from "../components/ListItem";
import { useFetch } from "../hooks/useFetch";

export default function ListScreen({ navigation: { navigate } }) {
  let { data, loading } = useFetch(
    "https://5ca369c58bae720014a9623e.mockapi.io/data"
  );

  //making the date look pretty (Optional)
  data = data.map(item => {
    return {
      ...item,
      createdAt: new Date(item.createdAt).toLocaleString()
    };
  });

  if (loading)
    return <ActivityIndicator style={styles.activityIndicator} size="large" />;

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={data}
        renderItem={({ item }) => (
          <ListItem
            item={item}
            handlePress={() => navigate("Detail", { item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
