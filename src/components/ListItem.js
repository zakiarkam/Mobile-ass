import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { windowWidth } from "../utils/Dimensions";

export default function ListItem({
  photo,
  title,
  subTitle,
  isFree,
  price,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.itemInfo}>
        <Image source={photo} style={styles.image} />
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Read</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  itemInfo: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 8,
  },
  textContainer: {
    width: windowWidth - 220,
  },
  subTitle: {
    color: "#333",
    fontFamily: "Roboto-Medium",
    fontSize: 12,
  },
  title: {
    color: "#333",
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ADD8E6", // light blue color code
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 14,
  },
});
