import React, { use, useContext } from "react";
import AuthProvider from "./src/navigation/AuthProvider";
import AppMain from "./src/navigation/AppMain";
import { CountProvider } from "./src/context/CountContext";

function App() {
  return (
    <AuthProvider>
      <CountProvider>
        <AppMain />
      </CountProvider>
    </AuthProvider>
  );
}

export default App;
