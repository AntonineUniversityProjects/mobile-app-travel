import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PlaceCard = ({ image, description , detailedDescription }) => {
  const [showText, setShowText] = useState(false);
  const navigation = useNavigation();

  const handleLongPress = () => {
    setShowText(true);
  };

  const handlePressOut = () => {
    setShowText(false);
  };

 const handleImagePress = () => {
   // Navigate to the PlaceDetail screen with the place name as a parameter
   navigation.navigate("PlaceDetail", {
     description: description,
     placeImage: image,
     detailedDescription: detailedDescription,
   });
 };
  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
        onPress={handleImagePress}
      >
        <Image
          source={{
            uri: image,
          }}
          style={styles.placeImage}
        />
        {showText && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.placeDescription}>{description}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "50%",
    height: "50%",
    marginRight: 2,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  placeImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
  descriptionContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent black background
    borderRadius: 10,
  },
  placeDescription: {
    fontSize: 20,
    color: "#fff",
  },
});

export default PlaceCard;
