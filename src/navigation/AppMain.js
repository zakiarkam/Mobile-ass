import React, { use, useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "./src/navigation/AuthProvider";
import auth from "@react-native-firebase/auth";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

function AppMain() {
  const [user, setUser] = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {/* <AppStack /> */}
      {/* <AuthStack /> */}
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppMain;
