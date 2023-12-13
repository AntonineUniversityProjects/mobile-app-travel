

import React from "react";
import { View, Image, StyleSheet,Text } from "react-native";
import TravelLoadingGif from "../assets/images/traveloading.gif";
const Travel = () => {
  return (
    <View style={styles.container}>
      <Image
      source={require("../assets/images/traveloading.gif")} 
       
        style={styles.loadingGif}
      />
      <Text></Text>
      
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

export default Travel;
