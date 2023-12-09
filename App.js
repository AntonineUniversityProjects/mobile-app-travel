import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { Platform } from "react-native";
import Flags from "./screens/Flags";
import Android from "./screens/Android";
import TextScreen from "./screens/Text";
// import Home from "./screens/Home";
import Hero from "./screens/Hero";
import Camera from "./screens/Camera";
import Signup from "./screens/Signup";
// import Onboarding from "react-native-onboarding-swiper";
import Onboarding1 from "./screens/Onboarding/Onboarding1";
import Onboarding2 from "./screens/Onboarding/Onboarding2";
import Onboarding3 from "./screens/Onboarding/Onboarding3";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
// {Platform.OS === "ios" ? "Hero" : "Hero"}



const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Onboarding1" headerMode="none">
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
      <Tab.Navigator initialRouteName="Onboarding1">
        <Tab.Screen
          name="Hero"
          component={Hero}
          // options={{ drawerLabel: () => null }}
        />
        <Tab.Screen name="Signup" component={Signup} />
        <Tab.Screen name="Flags" component={Flags} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;
