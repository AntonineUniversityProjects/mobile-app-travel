import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import * as Font from "expo-font";
import { SearchBar } from "../components/SearchBar.jsx";
import TravelCarousel from "../components/TravelCarousel.jsx";
import PlaceCard from "../components/PlaceCard.jsx"; // Import the PlaceCard component

Font.loadAsync({
  Japanese: require("../assets/fonts/Dekers_light.ttf"),
  // Add additional weights or styles if needed
});

const HomeScreen = () => {
  const images = [
    "https://mobilephoto.blob.core.windows.net/mobilrphotod/1413271.jpg",
    "https://mobilephoto.blob.core.windows.net/mobilrphotod/tyre.jpeg",
    "https://mobilephoto.blob.core.windows.net/mobilrphotod/byblos.jpeg",
    "https://mobilephoto.blob.core.windows.net/mobilrphotod/Cedars-in-Lebanon.jpg",
  ];

  const descriptions = [
    "Beirut",
    "Description for Image 2",
    "Description for Image 3",
    "Description for Image 4",
  ];

  return (
    <ScrollView style={styles.scrollView}>
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
        <TravelCarousel />
        <View>
          <View style={styles.placesView}>
            <Text style={styles.placesText}> Top Places To Visit</Text>
          </View>
          <View style={styles.placesImagesContainer}>
            {groupImages(images, descriptions).map((group, index) => (
              <View key={index} style={styles.row}>
                {group.map(({ image, description }, i) => (
                  <PlaceCard key={i} image={image} description={description} />
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>
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
    marginBottom: 10, // Reduce the space between rows
  },
  imageContainer: {
    width: "50%",
    height: "50%",
    marginRight: 6,
    paddingLeft: 20,
    paddingRight: 26, // Adjust the left padding to reduce space between images
  },
  placeImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
    marginRight: 10, // Adjusted to create equal spacing on the right
    marginLeft: 3, // Adjusted to create equal spacing on the left
    marginBottom: 30,
  },
  placeDescription: {
    fontSize: 16,
  },
});

export default HomeScreen;
