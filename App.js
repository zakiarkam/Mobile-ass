import React, { use, useContext } from "react";
import GlobalProvider from "./src/context/GlobalProvider";
import AppMain from "./src/navigation/AppMain";
import { CountProvider } from "./src/context/CountContext";

function App() {
  return (
    <GlobalProvider>
      <CountProvider>
        <AppMain />
      </CountProvider>
    </GlobalProvider>
  );
}

export default App;
