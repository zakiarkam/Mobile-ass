import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useGlobalContext } from "../context/GlobalProvider";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const AppMain = () => {
  const { user, loading } = useGlobalContext();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    if (!loading) {
      setInitializing(false);
    }
  }, [loading]);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {user ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default AppMain;
