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
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseconfig.js";
import { CommonActions } from "@react-navigation/native";
import TravelLoading from "../components/travelLoading.jsx";
const Signup = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async () => {
    try {
      // Validate the input fields
      if (!fullName || !email || !password) {
        Alert.alert("Error", "Please fill in all the fields");
        return;
      }

      setIsLoading(true); // Start loading

      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User signed up successfully!");

      // Simulate a loading delay (you can replace this with a real loading scenario)
      setTimeout(() => {
        setIsLoading(false); // Stop loading

        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: "Home", 
              },
            ],
          })
        );
      }, 2000); 
    } catch (error) {
      setIsLoading(false); // Stop loading in case of an error
      console.error("Error signing up:", error.message);
      Alert.alert("Error", error.message);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={"padding"}
      keyboardVerticalOffset={100}
    >
      {isLoading ? (
        <TravelLoading/>
      ) : (
        <ScrollView>
          {/* Existing code */}
          <Image
            source={{
              uri: "https://mobilephoto.blob.core.windows.net/mobilrphotod/hikingOnTrail.jpg",
            }}
            style={styles.travelImage}
            resizeMode="cover"
          />
          <View style={styles.contentContainer}>
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
            <TouchableOpacity
              style={styles.signupButton}
              onPress={handleSignup}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
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

});

export default Signup;
