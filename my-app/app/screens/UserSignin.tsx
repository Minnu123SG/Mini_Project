import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { useRouter } from "expo-router"; // Only if using Expo Router

export default function SigninPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const router = useRouter(); // Ensure this is correct for navigation

  return (
    <View style={styles.container}>
      {/* Top Illustration */}
      <View style={styles.topSection}>
        <Image
          source={{ uri: "https://example.com/your-image-url.png" }} // Replace with actual image URL
          style={styles.image}
        />
      </View>

      {/* Sign In Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Please Sign In to continue</Text>

        {/* Username Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter username"
          placeholderTextColor="#8E8E8E"
        />

        {/* Password Input */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter password"
            placeholderTextColor="#8E8E8E"
            secureTextEntry={!passwordVisible} // Fix secureTextEntry
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.eyeIcon}
          >
            <Text>{passwordVisible ? "🙈" : "👁️"}</Text>
          </TouchableOpacity>
        </View>

        {/* Sign In Button */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => router.push("/screens/UserSecond")}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Sign Up Link - Fixed Invalid JSX Nesting */}
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2156",
  },
  topSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E2156",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  formContainer: {
    flex: 3,
    backgroundColor: "#E3BA7F",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  subtitle: {
    fontSize: 16,
    color: "#FFF",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    fontSize: 16,
    color: "#1E2156",
  },
  passwordContainer: {
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 10,
    fontSize: 16,
    color: "#1E2156",
    flexDirection: "row", // Ensures row layout
    alignItems: "center",
  },
  passwordInput: {
    flex: 1, // Allows it to take available space
    fontSize: 16,
    color: "#1E2156",
  },
  eyeIcon: {
    padding: 5,
  },
  signInButton: {
    width: "100%",
    backgroundColor: "#1E2156",
    padding: 15,
    borderRadius: 8,
    marginVertical: 20,
    alignItems: "center",
  },
  signInButtonText: {
    color: "#E3BA7F", // Fix color
    fontSize: 18,
    fontWeight: "bold",
  },
  signupContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#1E2156",
  },
  signUpText: {
    fontWeight: "bold",
    color: "#1E2156",
    textDecorationLine: "underline",
  },
});

