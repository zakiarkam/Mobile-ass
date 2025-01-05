import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwoSH5sfLKB0pdB9U2aXRaiNXwOyHTsfY",
  authDomain: "e-tution-76d41.firebaseapp.com",
  projectId: "e-tution-76d41",
  storageBucket: "e-tution-76d41.firebasestorage.app",
  messagingSenderId: "785269187157",
  appId: "1:785269187157:web:1e244ac8ffda2638fcaadc",
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = getAuth(FIREBASE_APP);
const FIREBASE_DB = getFirestore(FIREBASE_APP);

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_DB };
