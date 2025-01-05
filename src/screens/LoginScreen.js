import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig"; // Import Firebase configuration

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    visible: false,
    title: "",
    message: "",
  });

  const handleLogin = async () => {
    if (!email || !password) {
      setAlert({
        visible: true,
        title: "Error",
        message: "Please fill in all fields.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        email,
        password
      );
      setAlert({
        visible: true,
        title: "Success",
        message: "Login successful!",
      });
      navigation.replace("Home"); // Redirect to Home Screen
    } catch (error) {
      setAlert({
        visible: true,
        title: "Error",
        message: "Invalid credentials. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>Login</Text>

        <InputField
          label="Email ID"
          icon={<MaterialIcons name="alternate-email" size={20} color="#666" />}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <InputField
          label="Password"
          icon={<MaterialIcons name="lock-outline" size={20} color="#666" />}
          inputType="password"
          value={password}
          onChangeText={setPassword}
          fieldButtonLabel="Forgot?"
          fieldButtonFunction={() =>
            setAlert({
              visible: true,
              title: "Feature Not Available",
              message: "Forgot Password feature is not implemented yet.",
            })
          }
        />

        <CustomButton
          label={isSubmitting ? <ActivityIndicator color="#fff" /> : "Login"}
          onPress={handleLogin}
          disabled={isSubmitting}
        />

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
  heading: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginBottom: 30,
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
