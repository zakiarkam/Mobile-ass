import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#272F7A",
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
    color: "#fff",
  },
});
