// OnboardingScreen.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Onboarding1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Onboarding Screens!</Text>
      <Button title="Next" onPress={() => navigation.navigate("Onboarding2")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Onboarding1;
