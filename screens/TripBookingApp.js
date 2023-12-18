import React, { useState } from 'react';
import { View, Text, Button, FlatList, TextInput, StyleSheet, ImageBackground } from 'react-native';

const TripBookingApp = () => {
  const [trips, setTrips] = useState([]);
  const [newTrip, setNewTrip] = useState('');

  const addTrip = () => {
    if (newTrip !== '') {
      setTrips([...trips, newTrip]);
      setNewTrip('');
    }
  };

  const deleteTrip = (index) => {
    const updatedTrips = [...trips];
    updatedTrips.splice(index, 1);
    setTrips(updatedTrips);
  };

  const editTrip = (index, updatedTrip) => {
    const updatedTrips = [...trips];
    updatedTrips[index] = updatedTrip;
    setTrips(updatedTrips);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.tripItem}>
      <TextInput
        style={styles.tripTextInput}
        onChangeText={(text) => editTrip(index, text)}
        value={item}
      />
      <Button title="Delete" onPress={() => deleteTrip(index)} />
    </View>
  );

  return (
    <ImageBackground source={require('../assets/images/travel2.jpeg')} style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.heading}>Trip Bookings</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNewTrip(text)}
          value={newTrip}
          placeholder="Enter trip details"
        />
        <Button title="Add Trip" onPress={addTrip} />
        <FlatList
          data={trips}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding an overlay for better readability of text
    padding: 20,
  },
  heading: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  tripItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  tripTextInput: {
    flex: 1,
    borderWidth: 1,
    padding: 5,
    marginRight: 5,
    borderRadius: 5,
    borderColor: '#ccc',
  },
});

export default TripBookingApp;
