import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseconfig.js";
import { CommonActions } from "@react-navigation/native";
import Signup from "./Signup.js";
import TravelLoading from "../components/travelLoading.js"
import Travel from "./travel.js";

const Login = () => {
  const navigation = useNavigation();



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = async () => {
    try {
      if (!email || !password) {
        Alert.alert("Error", "Please fill in all the fields");
        return;
      }
  
      setIsLoading(true); // Start loading
  
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully!");
  
      // Simulate a loading delay (replace with actual loading scenarios)
      setTimeout(() => {
        setIsLoading(false); // Stop loading
  
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Home" },],
          })
        );
      }, 2000); // Replace 2000 with your desired loading time
    } catch (error) {
      setIsLoading(false); // Stop loading in case of an error
      console.error("Error signing in:", error.message);
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
      <Travel/>
      ) : (
      
          
         
          <>
        
          <Text style={styles.title}>Login</Text>
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
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
            
          </TouchableOpacity>
          </>
         
        
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    color: "#333",
    width: "100%",
  },
  loginButton: {
    backgroundColor: "#00BCC9",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
