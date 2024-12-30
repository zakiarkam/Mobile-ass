// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKp6JqbB3SvStx9pRxMHyGVCvoigHo_Gw",
  authDomain: "mobileapp-1656a.firebaseapp.com",
  projectId: "mobileapp-1656a",
  storageBucket: "mobileapp-1656a.firebasestorage.app",
  messagingSenderId: "803236159083",
  appId: "1:803236159083:web:49f96f574b702532cb5b2e",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
