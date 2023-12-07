import Flags from "./screens/Flags.js";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Android from "./screens/Android.js";
import Text from "./screens/Text.js";
import Home from "./screens/Home.js";
import Camera from "./screens/Camera.js";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Platform } from "expo-modules-core";
// import { ScrollView } from "react-navigation";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer
        initialRouteName={Platform.OS === "ios" ? "Home" : "Android"}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Flags"
            component={Flags}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Text"
            component={Text}
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
        </Stack.Navigator>
      </NavigationContainer>

      <Drawer.Navigator>
        <Drawer.Screen name="Feed" element = {Android} />
        <Drawer.Screen name="Article" component = {Flags} />
      </Drawer.Navigator>
    </>
  );
}
