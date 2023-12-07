import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "react-native";
import Flags from "./screens/Flags";
import Android from "./screens/Android";
import TextScreen from "./screens/Text";
// import Home from "./screens/Home";
import Hero from "./screens/Hero";
import Camera from "./screens/Camera";
import Signup from "./screens/Signup";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={Platform.OS === "ios" ? "Hero" : "Hero"}
    >
      {/* <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      /> */}
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
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Hero">
        <Drawer.Screen name="Hero" component={Hero} />
        <Drawer.Screen name="Signup" component={Signup} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
