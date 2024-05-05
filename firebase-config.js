// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOKxUI49UMlT7UJhCY_stsHOz_ynnoUco",
  authDomain: "silverstar-369708.firebaseapp.com",
  projectId: "silverstar-369708",
  storageBucket: "silverstar-369708.appspot.com",
  messagingSenderId: "948772005937",
  appId: "1:948772005937:web:9671a2582fad64049ccd10",
  measurementId: "G-JWN4KLR72B",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
