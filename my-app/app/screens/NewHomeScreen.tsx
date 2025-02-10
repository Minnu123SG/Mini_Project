import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Importing router for navigation

export default function FirstPage() {
  const router = useRouter(); // Initializing the router

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you?</Text>

      {/* Student Button */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/screens/Usereg')} // Navigate to Student Registration
      >
        <View style={styles.row}>
          <Image
            source={{ uri: 'https://example.com/student-icon.png' }} // Replace with actual URL or local image path
            style={styles.icon}
          />
          <Text style={styles.text}>I am a Student</Text>
        </View>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>

      {/* Hostel Owner Button */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/screens/Owneregister')} // Navigate to Hostel Owner Registration
      >
        <View style={styles.row}>
          <Image
            source={{ uri: 'https://example.com/hostel-owner-icon.png' }} // Replace with actual URL or local image path
            style={styles.icon}
          />
          <Text style={styles.text}>I am a Hostel Owner</Text>
        </View>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>

      {/* Service Provider Button */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push('/screens/FoodReg')} // Navigate to Food Service Registration
      >
        <View style={styles.row}>
          <Image
            source={{ uri: 'https://example.com/service-provider-icon.png' }} // Replace with actual URL or local image path
            style={styles.icon}
          />
          <Text style={styles.text}>I am a Service-provider</Text>
        </View>
        <Text style={styles.arrow}>➔</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D4B678', // Matches the beige background
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
  },
  card: {
    backgroundColor: '#2E265D',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  arrow: {
    fontSize: 20,
    color: '#fff',
  },
});
