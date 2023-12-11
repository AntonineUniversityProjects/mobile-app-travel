import React, { useState, useEffect } from "react";
import { View, StyleSheet, ImageBackground, Text } from "react-native";
import travelImages from "../assets/places.json";

const TravelCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === travelImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={travelImages[currentIndex].source}
        style={styles.carouselImage}
      >
        <Text style={styles.imageText}>{travelImages[currentIndex].text}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  carouselImage: {
    width: 340,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "flex-end", 
    overflow: "hidden", 
  },
  imageText: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "bold",
    padding: 10, 
    
  },
});

export default TravelCarousel;
