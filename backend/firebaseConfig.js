import {API_KEY , AUTH_DOMAIN , PROJECT_ID , STORAGE_BUCKET , MEASUREMENT_ID , MESSAGING_SENDER_ID , APP_ID} from "@env";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);