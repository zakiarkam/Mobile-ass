import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import logo from "../assets/images/edu.png";

const OnboardingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>E-TUTION</Text>
      </View>
      <View style={styles.imageContainer}>
        {/* <Image src="logo" width={100} height={100} style={styles.image} /> */}
        <ImageBackground
          source={require("../assets/images/edu.png")}
          style={{ width: 350, height: 450 }}
          imageStyle={{
            borderRadius: 24,
            borderWidth: 1,
            borderColor: "white",
          }}
        ></ImageBackground>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 60,
  },
  title: {
    fontFamily: "Inter-Bold",
    fontWeight: "bold",
    fontSize: 30,
    color: "#272F7A",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#272F7A",
    padding: 20,
    width: "90%",
    borderRadius: 10,
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "Roboto-MediumItalic",
  },
});

export default OnboardingScreen;
