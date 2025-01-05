import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
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
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FIREBASE_AUTH } from "../../FirebaseConfig";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async () => {
    // if (!email || !password || !confirmPassword) {
    //   Alert.alert("Please fill all fields");
    //   return;
    // }

    // if (password !== confirmPassword) {
    //   Alert.alert("Passwords do not match");
    //   return;
    // }

    setIsSubmitting(true);

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        email.trim().toLowerCase(),
        password
      );
      const user = userCredential.user;

      // Set display name (optional)
      await updateProfile(user, { displayName: email.split("@")[0] });

      Alert.alert("Success", "Registration successful!");
      navigation.navigate("Login"); // Navigate to login page
    } catch (error) {
      Alert.alert("Registration Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.imageContainer}>
          {/* Add SVG or image here if needed */}
        </View>

        <Text style={styles.title}>Register</Text>

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

        <Text style={styles.orText}>OR</Text>

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
        />

        <InputField
          label="Confirm Password"
          icon={<MaterialIcons name="lock-outline" size={20} color="#666" />}
          inputType="password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <CustomButton
          label="Register"
          onPress={handleRegister}
          isLoading={isSubmitting}
        />

        <View style={styles.loginTextContainer}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  scrollView: {
    paddingHorizontal: 25,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginVertical: 50,
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
  orText: {
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
    fontSize: 20,
  },
  loginTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 30,
  },
  loginText: {
    color: "#272F7A",
    fontWeight: "700",
  },
});

export default RegisterScreen;
