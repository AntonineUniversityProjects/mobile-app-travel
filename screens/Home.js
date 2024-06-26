import React from "react";
import { View, Text, StyleSheet, ScrollView,Button,TouchableOpacity} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Font from "expo-font";
import { SearchBar } from "../components/SearchBar.jsx";
import TravelCarousel from "../components/TravelCarousel.jsx";
import Footer from "../components/Footer.jsx";
import PlaceCard from "../components/PlaceCard.jsx"; 

import NotificationInbox from "./NotificationScreen.js";

Font.loadAsync({
  Japanese: require("../assets/fonts/Dekers_light.ttf"),
});


const HomeScreen = ({ navigation }) => {


  const images = [
    "https://mobilephoto.blob.core.windows.net/mobilrphotod/the-colorful-neighborhood-of-gemmayze-beirut-le-12-22-2017-2-26-53-pm-l.jpg",
    "https://mobilephoto.blob.core.windows.net/mobilrphotod/tyre.jpeg",
    "https://mobilephoto.blob.core.windows.net/mobilrphotod/byblos.jpeg",
    "https://mobilephoto.blob.core.windows.net/mobilrphotod/Cedars-in-Lebanon.jpg",
  ];

  const descriptions = [
    "Beirut",
    "Tyre",
    "Byblos",
    "Cedars of God",
  ];

  const detailedDescription = [
    "detailedbeirut" ,
    "detailedtyre",
    "detailedByblos",
    "de"

  ]

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.TopContainer}>
          <Text style={styles.TopContainerText}>
            Have A Plan For{"\n"}A Vacation?
          </Text>
          <TouchableOpacity style={styles.notificationContainer} onPress={() => navigation.navigate("NotificationScreen")}>
          <View >
    <FontAwesome5
      name="bell"
      size={20}
      color="#FFF"
      style={styles.notificationIcon}
    />
  </View>
</TouchableOpacity>
        
        </View>
        <SearchBar />
        <TravelCarousel />
        <View>
          <View style={styles.placesView}>
            <Text style={styles.placesText}> Top Places To Visit</Text>
          </View>
          <View style={styles.placesImagesContainer}>
            {groupImages(images, descriptions , detailedDescription).map((group, index) => (
              <View key={index} style={styles.row}>
                {group.map(({ image, description , detailedDescription }, i) => (
                  <PlaceCard key={i} image={image} description={description} details = {detailedDescription}/>
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>
      <Footer/>
    </ScrollView>
  );
};

// Function to group images and descriptions into pairs
const groupImages = (images, descriptions) => {
  const result = [];
  for (let i = 0; i < images.length; i += 2) {
    result.push([
      { image: images[i], description: descriptions[i] },
      { image: images[i + 1], description: descriptions[i + 1] },
    ]);
  }
  return result;
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  TopContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 55,
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
    marginLeft: "auto",
    paddingBottom: 10,
  },
  notificationIcon: {
    fontSize: 30,
    paddingRight: 20,
  },
  placesView: {
    paddingTop: 20,
    paddingLeft: 37,
  },
  placesText: {
    fontFamily: "Japanese",
    fontSize: 20,
    fontWeight: "bold",
  },
  placesImagesContainer: {
    flexDirection: "column",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10, 
  },
  imageContainer: {
    width: "50%",
    height: "50%",
    marginRight: 6,
    paddingLeft: 20,
    paddingRight: 26, 
  },
  placeImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
    marginRight: 10, 
    marginLeft: 3, 
    marginBottom: 30,
  },
  placeDescription: {
    fontSize: 16,
  },
});

export default HomeScreen;
