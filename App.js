import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Home from "./screens/Home";
import Hero from "./screens/Hero";
import CameraScreen from "./screens/CameraScreen";
import Signup from "./screens/Signup";
import Login from "./screens/Login";
import PlaceDetailScreen from "./screens/PlaceDetailScreen";
import Onboarding1 from "./screens/Onboarding/Onboarding1";
import Travel from "./screens/travel";

import BookingScreen from "./screens/BookingScreen";
import FindLocationScreen from "./screens/FindLocationScreen";
import VerificationScreen from "./screens/VerificationScreen";
import NotificationScreen from "./screens/NotificationScreen"
import registerNNPushToken from 'native-notify'; //for push notification
import TripBookingApp from "./screens/TripBookingApp"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarLabel: "Camera",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="camera" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Find Location"
        component={FindLocationScreen}
        options={{
          tabBarLabel: "Find Location",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map-marker-alt" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="trip booking "
        component={TripBookingApp}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  registerNNPushToken(16859, "NcGILlDw1KNE4jrDzXSBjQ");
  registerNNPushToken(16726, "tXj9QBdb7I44T6Oqs5YZQV");
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1" headerMode="none">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding1}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Booking"
          component={BookingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
        />
        <Stack.Screen name="travel" component={Travel} />
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hero"
          component={Hero}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlaceDetail"
          component={PlaceDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
