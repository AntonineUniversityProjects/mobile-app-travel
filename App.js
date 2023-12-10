import React, { useState } from "react";
// import { AppLoading } from "expo";
// import * as Font from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Flags from "./screens/Flags";
import Android from "./screens/Android";
import TextScreen from "./screens/Text";
import Hero from "./screens/Hero";
import Camera from "./screens/CameraScreen";
import Signup from "./screens/Signup";
import Onboarding1 from "./screens/Onboarding/Onboarding1";
import Onboarding2 from "./screens/Onboarding/Onboarding2";
import Onboarding3 from "./screens/Onboarding/Onboarding3";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import Home from "./screens/Home";
import CameraScreen from "./screens/CameraScreen";
// import Ionicons from "react-native-vector-icons/Ionicons";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     Ionicons: require("@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
//   });
// };

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// {Platform.OS === "ios" ? "Hero" : "Hero"}

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding1" headerMode="none">
      <Stack.Screen
        name="Flags"
        component={Flags}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Text"
        component={TextScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{ headerShown: false }}
      />
      {Platform.OS === "android" && (
        <Stack.Screen name="Android" component={Android} />
      )}
      <Stack.Screen
        name="Hero"
        component={Hero}
        options={{ headerShown: false
         }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name=""
        component={Home}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
      <Stack.Screen name="Onboarding1" component={Onboarding1} />
      <Stack.Screen name="Onboarding2" component={Onboarding2} />
      <Stack.Screen name="Onboarding3" component={Onboarding3} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Onboarding1"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Hero") {
              iconName = focused ? "ios-person" : "ios-person-outline";
            } else if (route.name === "Signup") {
              iconName = focused ? "ios-person-add" : "ios-person-add-outline";
            } else if (route.name === "Flags") {
              iconName = focused ? "ios-flag" : "ios-flag-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#E99265",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Hero"
          component={Hero}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Camera" component={CameraScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
