import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EduDetailsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edu Details Screen</Text>
      <Text style={styles.title}>{route.params?.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
});

export default EduDetailsScreen;
