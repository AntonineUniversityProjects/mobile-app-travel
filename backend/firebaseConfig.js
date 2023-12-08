import {API_KEY , AUTH_DOMAIN , PROJECT_ID , STORAGE_BUCKET , MEASUREMENT_ID , MESSAGING_SENDER_ID , APP_ID} from "@env";
// import { initializeApp } from "firebase/app";
// import * as firebase from "firebase";
// import "firebase/auth";
// import "firebase/firestore";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";


// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTH_DOMAIN,
//   projectId: PROJECT_ID,
//   storageBucket: STORAGE_BUCKET,
//   messagingSenderId: MESSAGING_SENDER_ID,
//   appId: APP_ID,
//   measurementId: MEASUREMENT_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCh4_vxsl8QoWF-KNMAd9nHngvMYe6wRDc",
  authDomain: "travel-mobile-app-f2687.firebaseapp.com",
  projectId: "travel-mobile-app-f2687",
  storageBucket: "travel-mobile-app-f2687.appspot.com",
  messagingSenderId: "1007492362048",
  appId: "1:1007492362048:web:3b78306dab5d3c1e44d4a5",
  measurementId: "G-SF63TVK801",
};



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

