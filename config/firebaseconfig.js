import { initializeApp } from "firebase/app";
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

// Check if the Firebase app has already been initialized
let firebaseApp;

if (!firebaseApp) {
  // If not, initialize Firebase
  firebaseApp = initializeApp(firebaseConfig);
}

// Export the authentication service
export const auth = initializeAuth(firebaseApp, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// const firebaseConfig = {
//   apiKey: Constants.expoConfig.extra.API_URL,
//   authDomain: Constants.expoConfig.extra.AUTH_DOMAIN,
//   projectId: Constants.expoConfig.extra.PROJECT_ID,
//   storageBucket: Constants.expoConfig.extra.STORAGE_BUCKET,
//   messagingSenderId: Constants.expoConfig.extra.MESSAGING_SENDER_ID,
//   appId: Constants.expoConfig.extra.APP_ID,
//   measurementId: Constants.expoConfig.extra.MEASUREMENT_ID,
// };
