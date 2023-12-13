// BookingScreen.jsx
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { firestore ,collection, addDoc} from "../config/firebaseconfig";
import axios from "axios";

const BookingScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");



const handleBooking = async () => {
  // Add a document to the "bookings" collection
  try {
    const docRef = await addDoc(collection(firestore, "bookings"), {
      name,
      email,
      phone,
    });
    console.log("Booking added successfully with ID:", docRef.id);

    // Make a POST request to your Vercel function
    const vercelEndpoint =
      "https://apis-j251oi2f1-roy-gebrayels-projects.vercel.app"; 
    const vercelResponse = await axios.post(vercelEndpoint, {
      name,
      email,
      phone,
    });

    console.log("Vercel Response:", vercelResponse.data);
  } catch (error) {
    console.error("Error:", error);
  }
};




  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Booking Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={(text) => setPhone(text)}
        keyboardType="phone-pad"
      />
      <Button title="Book Now" onPress={handleBooking} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: "100%",
  },
});

export default BookingScreen;
