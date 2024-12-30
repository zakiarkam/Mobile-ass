import React, { createContext, useState, useEffect } from "react";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe; // Cleanup listener
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login: async (email, password) => {
          return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
        },
        register: async (email, password) => {
          return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
        },
        logout: async () => {
          return signOut(FIREBASE_AUTH);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
