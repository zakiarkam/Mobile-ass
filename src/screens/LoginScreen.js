import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { AuthContext } from "../../src/navigation/AuthProvider";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // if (!email || !password) {
    //   Alert.alert("Error", "Please enter both email and password.");
    //   return;
    // }

    login(email, password)
      .then(() => {
        Alert.alert("Success", "You are logged in!");
      })
      .then(() => {
        navigation.navigate("Register");
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          {/* Add SVG or image here if needed */}
        </View>

        <Text style={styles.heading}>Login</Text>

        <InputField
          label="Email ID"
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={styles.icon}
            />
          }
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          label="Password"
          icon={
            <MaterialIcons
              name="lock-outline"
              size={20}
              color="#666"
              style={styles.icon}
            />
          }
          inputType="password"
          value={password}
          onChangeText={setPassword}
          fieldButtonLabel="Forgot?"
          fieldButtonFunction={() =>
            Alert.alert("Forgot Password", "Feature not implemented yet!")
          }
        />

        <CustomButton label="Login" onPress={handleLogin} />

        <Text style={styles.orText}>OR</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <SimpleLineIcons name="social-google" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <SimpleLineIcons name="social-facebook" size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <SimpleLineIcons name="social-github" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={styles.registerText}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    paddingHorizontal: 25,
  },
  svgContainer: {
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginBottom: 30,
  },
  icon: {
    marginRight: 5,
  },
  orText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
    fontSize: 20,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  socialButton: {
    borderColor: "#272F7A",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  registerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  registerText: {
    color: "#272F7A",
    fontWeight: "700",
  },
});

export default LoginScreen;
