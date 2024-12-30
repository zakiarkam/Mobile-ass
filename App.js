import React, { use, useContext } from "react";
import AuthProvider from "./src/navigation/AuthProvider";
import AppMain from "./src/navigation/AppMain";

function App() {
  return (
    <AuthProvider>
      <AppMain />
    </AuthProvider>
  );
}

export default App;
