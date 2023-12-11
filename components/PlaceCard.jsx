// PlaceCard.jsx

import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

const PlaceCard = ({ image, description }) => {
  const [showText, setShowText] = useState(false);

  const handleLongPress = () => {
    setShowText(true);
  };

  const handlePressOut = () => {
    setShowText(false);
  };

  return (
    <View style={styles.imageContainer}>
      <TouchableOpacity
        activeOpacity={1}
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
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
