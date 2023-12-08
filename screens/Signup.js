import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
// import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Alert } from "react-native";
import auth from "../connection/connection.js"


const Signup = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      // Validate the input fields
      if (!fullName || !email || !password) {
        Alert.alert("Error", "Please fill in all the fields");
        return;
      }

      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully!");

      // You can navigate to the next screen or perform other actions here
    } catch (error) {
      console.error("Error signing up:", error.message);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView>
        <Image
          source={{
            uri: "https://mobilephoto.blob.core.windows.net/mobilrphotod/hikingOnTrail.jpg",
          }}
          style={styles.travelImage}
          resizeMode="cover"
        />

        <View style={styles.contentContainer}>
          {/* Your input fields go here */}
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#666"
            value={fullName}
            onChangeText={(text) => setFullName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#666"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          {/* Signup Button */}
          <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  travelImage: {
    height: 350,
    width: "100%",
  },
  contentContainer: {
    padding: 15,
  },
  input: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    color: "#333",
  },
  signupButton: {
    backgroundColor: "#00BCC9",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    width: "80%",
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalInput: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    color: "#333",
  },
});

export default Signup;
