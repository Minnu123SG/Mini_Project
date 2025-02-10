import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Import the useRouter hook for navigation

export default function Owneregister() {
  const router = useRouter(); // Initialize the router

  // Handle Register button press
  const handleRegister = () => {
    Alert.alert('Registration', 'You have successfully registered!');
    // Navigate to the new home screen
    router.push('/screens/Demo'); // Adjust the route as per your setup
  };

  return (
    <View style={styles.container}>
      {/* Circle with Color E0B974 */}
      <View style={styles.circle} />

      {/* Form for hostel registration */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Hostel Name"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder="Email ID"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#fff"
          secureTextEntry
        />

        {/* Register Button */}
        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C5E', // Background color set to #1C1C5E
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  circle: {
    width: 100,
    height: 100,
    backgroundColor: '#E0B974', // Circle color set to #E0B974
    borderRadius: 50,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#2E3A59',
    color: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#E0B974', // Register button color set to #E0B974
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#1C1C5E',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
