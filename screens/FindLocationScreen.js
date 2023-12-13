import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FindLocation from "../components/FindLocation.jsx"; // Adjust the path as needed

const FindLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Screen</Text>
      <FindLocation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default FindLocationScreen;
