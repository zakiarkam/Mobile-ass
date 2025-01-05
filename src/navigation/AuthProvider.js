// import React, { createContext, useState, useEffect } from "react";
// import { FIREBASE_AUTH } from "../../FirebaseConfig";
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const login = async (email, password) => {
//     try {
//       const response = await signInWithEmailAndPassword(
//         FIREBASE_AUTH,
//         email,
//         password
//       );
//       setUser(response.user);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const register = async (email, password) => {
//     try {
//       const response = await createUserWithEmailAndPassword(
//         FIREBASE_AUTH,
//         email,
//         password
//       );
//       setUser(response.user);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   };

//   useEffect(() => {
//     const subscriber = onAuthStateChanged(FIREBASE_AUTH, (currentUser) => {
//       setUser(currentUser);
//     });
//     return subscriber;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, register }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
