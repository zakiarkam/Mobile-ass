import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "./AuthProvider";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

function AppMain() {
  const { user } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    setInitializing(user === undefined);
  }, [user]);

  if (initializing) return null; // Add a spinner if needed

  return (
    <NavigationContainer>
      {user ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}

export default AppMain;
