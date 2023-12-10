import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      {/* You can customize the search bar UI as needed */}
      <FontAwesome5
        name="search"
        size={20}
        color="#666"
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        placeholderTextColor="#666"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 5,
    marginTop: -12,
    borderRadius: 10,
    width: "85%",
    alignSelf: "center",
  },
  searchInput: {
    flex: 1,
    height: 20,
    borderColor: "#DDD",
    borderRadius: 40,
    paddingLeft: 10,
    marginLeft: 10,
    
  },
  searchIcon: {
    fontSize: 20,
  },
});
