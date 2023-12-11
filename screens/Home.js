// screens/HomeScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Font from "expo-font";
import{ SearchBar} from "../components/SearchBar.jsx"
import  TravelCarousel  from "../components/TravelCarousel.jsx";
Font.loadAsync({
  Japanese: require("../assets/fonts/Dekers_light.ttf"),
  // Add additional weights or styles if needed
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.TopContainer}>
        <Text style={styles.TopContainerText}>
          Have A Plan For{"\n"}A Vacation?
        </Text>
        <View style={styles.notificationContainer}>
          <FontAwesome5
            name="bell"
            size={20}
            color="#FFF"
            style={styles.notificationIcon}
          />
        </View>
      </View>
      <SearchBar />
     
         <TravelCarousel/>
     
     
      
      <View>
        {/* <Text>Your main content goes here</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor : "#FFF",
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  // },
  TopContainer: {
    flexDirection: "row", // Use row to align text and icon horizontally
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
    width: "100%",
    backgroundColor: "#E99265",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  TopContainerText: {
    fontSize: 20,
    fontFamily: "Japanese",
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 30,
    color: "#FFF",
  },
  notificationContainer: {
    marginLeft: "auto", // Aligns the notification icon to the right
    paddingBottom: 10,
  },
  notificationIcon: {
    fontSize: 30,
    paddingRight: 20,
  },

});

export default HomeScreen;



