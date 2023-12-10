// HomeScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const countries = [
  { id: 1, name: "Country 1" },
  { id: 2, name: "Country 2" },
  { id: 3, name: "Country 3" },
  // Add more countries as needed
];

const Home = () => {
  const navigation = useNavigation();
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountryPress = (country) => {
    setSelectedCountry(country);
    // You can navigate to another screen or perform any other action here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Country</Text>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {countries.map((country) => (
          <TouchableOpacity
            key={country.id}
            style={[
              styles.countryCard,
              selectedCountry === country && styles.selectedCountry,
            ]}
            onPress={() => handleCountryPress(country)}
          >
            <Text style={styles.countryName}>{country.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  scrollViewContent: {
    flexDirection: "row",
  },
  countryCard: {
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    padding: 16,
    marginRight: 16,
    alignItems: "center",
  },
  selectedCountry: {
    backgroundColor: "#64b5f6", 
  },
  countryName: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Home;
