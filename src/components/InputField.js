import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        style={styles.inputField}
        secureTextEntry={inputType === "password"}
      />
      {fieldButtonLabel && (
        <TouchableOpacity onPress={fieldButtonFunction}>
          <Text style={styles.buttonText}>{fieldButtonLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  inputField: {
    flex: 1,
    paddingVertical: 0,
  },
  buttonText: {
    color: "#458CCC",
    fontWeight: "700",
  },
});
