import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function BannerSlider({ data }) {
  return (
    <View style={styles.container}>
      <Image source={data.image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15, // Optional: add spacing between banners if needed
  },
  image: {
    height: 150,
    width: 300,
    borderRadius: 10,
  },
});
