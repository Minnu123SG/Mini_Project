import React, { useState } from "react";
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();
  const router = useRouter();

  const handleRegister = () => {
    router.push('/screens/ServiceInfo');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <View style={styles.backIconCircle}>
            <Text style={styles.backArrow}>←</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.circleContainer}>
          <Text style={styles.circleText}>Service Provider</Text>
        </View>

        <TextInput style={styles.input} placeholder="Service name" placeholderTextColor="#C4C4C4" />
        <TextInput style={styles.input} placeholder="E-mail ID" placeholderTextColor="#C4C4C4" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#C4C4C4" />
        <View style={styles.passwordContainer}>
          <TextInput style={styles.passwordInput} placeholder="Password" placeholderTextColor="#C4C4C4" secureTextEntry={!passwordVisible} />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Text style={styles.eyeIcon}>{passwordVisible ? "👁️" : "🙈"}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.signupText}>
          Don't have an account? <Text style={styles.signupLink}>Sign Up</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#1C1C5E",
    paddingHorizontal: 20,
    paddingVertical: 40,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  backIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E0B974",
    alignItems: "center",
    justifyContent: "center",
  },
  backArrow: {
    fontSize: 18,
    color: "#ffffff",
  },
  circleContainer: {
    backgroundColor: "#E0B974",
    width: 200,
    height: 200,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  circleText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    width: "100%",
    height: 50,
    marginBottom: 20,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "100%",
    height: 50,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
  },
  eyeIcon: {
    fontSize: 18,
    color: "#C4C4C4",
  },
  registerButton: {
    backgroundColor: "#D9B378",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  registerText: {
    fontSize: 18,
    color: "#ffffff",
    fontWeight: "bold",
  },
  signupText: {
    fontSize: 14,
    color: "#ffffff",
  },
  signupLink: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});