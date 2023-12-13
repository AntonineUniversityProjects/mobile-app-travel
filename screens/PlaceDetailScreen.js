import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PlaceDetailScreen = ({ route , navigation }) => {
  const { description, placeImage, detailedDescription } = route.params;

  // Sample data for recommended users
  const recommendedUsers = [
    {
      id: 1,
      avatar:
        "https://mobilephoto.blob.core.windows.net/mobilrphotod/1413271.jpg",
    },
    // { id: 2, avatar: require("../assets/images/") },
    // Add more users as needed
  ];

  const handleBookNowPress = () => {
    // Handle the "Book Now" action
    // You can add your own logic for booking functionality
    // alert("Booking functionality will be implemented here!");
     navigation.navigate("Booking");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: placeImage }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{description}</Text>
      </View>
      <View style={styles.starsContainer}>
        <Ionicons name="star" size={20} color="gold" />
        <Ionicons name="star" size={20} color="gold" />
        <Ionicons name="star" size={20} color="gold" />
        <Ionicons name="star" size={20} color="gold" />
        <Ionicons name="star-half" size={20} color="gold" />
        <Text> 4.5 </Text>
      </View>
      <View style={styles.recommendedContainer}>
        <Text style={styles.recommendedText}>Recommended by:</Text>
        <View style={styles.avatarContainer}>
          {recommendedUsers.map((user) => (
            <Image
              key={user.id}
              source={{ uri: user.avatar }}
              style={styles.avatar}
            />
          ))}
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>Additional Description:</Text>
        <Text style={styles.additionalDescription}>
          {detailedDescription}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.bookNowButton}
        onPress={handleBookNowPress}
      >
        <Text style={styles.bookNowText}>BOOK NOW</Text>
      </TouchableOpacity>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  imageContainer: {
    flex: 1,
    maxHeight: "55%", // Adjust the height as needed
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
    height: undefined,
    borderRadius: 10,
    borderColor: "grey",
  },
  textContainer: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  starsContainer: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
  },
  recommendedContainer: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "grey",
  },
  recommendedText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    paddingRight: 230,
  },
  avatarContainer: {
    flexDirection: "row",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 60,
    marginRight: 10,
  },
  descriptionContainer: {
    marginTop: 20,
    paddingLeft: 20,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  additionalDescription: {
    fontSize: 14,
  },
  bookNowButton: {
    position: "absolute",
    bottom: 30,
    right: 20,
    backgroundColor: "#E99265",
    padding: 10,
    borderRadius: 15,
    width: 120,
  },
  bookNowText: {
    paddingLeft: 10,
    color: "white",
    fontWeight: "bold",
  },
});

export default PlaceDetailScreen;
