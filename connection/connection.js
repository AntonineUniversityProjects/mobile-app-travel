import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCh4_vxsl8QoWF-KNMAd9nHngvMYe6wRDc",
  authDomain: "travel-mobile-app-f2687.firebaseapp.com",
  projectId: "travel-mobile-app-f2687",
  storageBucket: "travel-mobile-app-f2687.appspot.com",
  messagingSenderId: "1007492362048",
  appId: "1:1007492362048:web:3b78306dab5d3c1e44d4a5",
  measurementId: "G-SF63TVK801",
};

const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase with AsyncStorage for persistence
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
