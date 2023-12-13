// OnboardingScreen2.js
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Onboarding2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Second Onboarding Screen</Text>
      <Button title="Next" onPress={() => navigation.navigate("Onboarding3")} />
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

export default Onboarding2;
