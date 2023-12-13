// OnboardingScreen3.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Hero from "../Hero";

const Onboarding3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Third Onboarding Screen</Text>
      <Button
        title="Finish Onboarding"
        onPress={() => navigation.navigate("Hero")}
      />
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

export default Onboarding3;
