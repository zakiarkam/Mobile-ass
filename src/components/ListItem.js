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
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>
          {isFree === "Yes" ? "Play" : price}
        </Text>
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
    fontSize: 14,
  },
  title: {
    color: "#333",
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: "#0aada8",
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
