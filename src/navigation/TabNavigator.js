import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import BooksScreen from "../screens/BooksScreen";
import NotesScreen from "../screens/NotesScreen";
import EduDetailsScreen from "../screens/EduDetailsScreen";

import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EduDetails"
        component={EduDetailsScreen}
        options={({ route }) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#272F7A" },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#95C1E6",
      }}
    >
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "#272F7A",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Books"
        component={BooksScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="library-books" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={NotesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notes" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const getTabBarVisibility = (route) => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  // console.log(routeName);

  if (routeName == "EduDetails") {
    return "none";
  }
  return "flex";
};

export default TabNavigator;
