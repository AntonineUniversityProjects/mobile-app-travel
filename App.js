import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import Home from "./screens/Home";
import Hero from "./screens/Hero";
import CameraScreen from "./screens/CameraScreen";
import Signup from "./screens/Signup";
import Onboarding1 from "./screens/Onboarding/Onboarding1";
import Onboarding2 from "./screens/Onboarding/Onboarding2";
import Onboarding3 from "./screens/Onboarding/Onboarding3";

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
        }}
      />
      <Tab.Screen name="Camera" component={CameraScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding1" headerMode="none">
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={HomeTabs} options = {{headerShown: false}} />
        <Stack.Screen name="Hero" component={Hero} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
