import React from "react";
import { View, Text } from "react-native";

const PlaceDetailScreen = ({ route }) => {
  const { place } = route.params;

  return (
    <View>
      <Text>{place}</Text>
      {/* Add more details about the place as needed */}
    </View>
  );
};

export default PlaceDetailScreen;
