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
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import "../backend/firebaseConfig.js";

import { firebaseConfig } from '../backend/firebaseConfig.js';


const firebaseApp = initializeApp(firebaseConfig);

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const handleSignup = async () => {
    try {
      const auth = getAuth(firebaseApp);
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
         />
         <TextInput
           style={styles.input}
           placeholder="Email"
           placeholderTextColor="#666"
           keyboardType="email-address"
         />
         <TextInput
           style={styles.input}
           placeholder="Password"
           placeholderTextColor="#666"
           secureTextEntry
           onFocus={togglePasswordModal}
         />

         {/* Signup Button */}
         <TouchableOpacity
           style={styles.signupButton}
           onPress={{handleSignup}}
         >
           <Text style={styles.buttonText}>Sign Up</Text>
         </TouchableOpacity>
       </View>
     </ScrollView>

     {/* this model here is to reshow the password so i can write it clearly */}

     {/* <Modal
        animationType="slide"
        transparent={true}
        visible={isPasswordModalVisible}
        onRequestClose={togglePasswordModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Enter Password Clearly:</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry={false} // Show the entered characters
              value={clearPassword}
              onChangeText={(text) => setClearPassword(text)}
              onSubmitEditing={handleClearPasswordSubmit} // Handle Enter key press
            />
            <Button title="Close" onPress={togglePasswordModal} />
          </View>
        </View>
      </Modal> */}
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
