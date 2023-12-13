

import React from "react";
import { View, Image, StyleSheet } from "react-native";

const TravelLoading = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/traveloading.gif")} 
        style={styles.loadingGif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingGif: {
    width: "100%", 
    height: "100%", 
  },
});

export default TravelLoading;
