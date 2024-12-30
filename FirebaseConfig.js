import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKp6JqbB3SvStx9pRxMHyGVCvoigHo_Gw",
  authDomain: "mobileapp-1656a.firebaseapp.com",
  projectId: "mobileapp-1656a",
  storageBucket: "mobileapp-1656a.appspot.com",
  messagingSenderId: "803236159083",
  appId: "1:803236159083:web:49f96f574b702532cb5b2e",
};

// Initialize Firebase (only if not already initialized)
const FIREBASE_APP = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB };
