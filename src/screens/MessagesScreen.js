import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessagesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Messages Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", // Optional background color
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});

export default MessagesScreen;
