import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CustomSwitch({
  selectionMode,
  option1,
  option2,
  onSelectSwitch,
}) {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(1)}
        style={[
          styles.option,
          getSelectionMode === 1 ? styles.selectedOption : null,
        ]}
      >
        <Text
          style={[
            styles.optionText,
            getSelectionMode === 1 ? styles.selectedText : null,
          ]}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => updateSwitchData(2)}
        style={[
          styles.option,
          getSelectionMode === 2 ? styles.selectedOption : null,
        ]}
      >
        <Text
          style={[
            styles.optionText,
            getSelectionMode === 2 ? styles.selectedText : null,
          ]}
        >
          {option2}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: "100%",
    backgroundColor: "#95C1E6",
    borderRadius: 10,
    borderColor: "#272F7A",
    flexDirection: "row",
    justifyContent: "center",
  },
  option: {
    flex: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedOption: {
    backgroundColor: "#272F7A",
  },
  optionText: {
    color: "#272F7A",
    fontSize: 14,
    fontFamily: "Roboto-Medium",
  },
  selectedText: {
    color: "white",
  },
});
