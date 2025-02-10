import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

export default function DetailedView() {
  // Sample hostel data
  const hostel = {
    name: 'Green Hostel',
    location: 'New York',
    rent: '$500/month',
    image: 'https://th.bing.com/th/id/R.5640eaeb49aabf310d3aa3ef35113ac3',
    description: `Green Hostel offers a comfortable stay with excellent facilities and a welcoming atmosphere. 
                  It's located in the heart of New York, making it convenient for travelers and students alike.`,
  };

  // Handle booking button press
  const handleBooking = () => {
    Alert.alert('Booking Confirmation', `You are booking ${hostel.name}`);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: hostel.image }} style={styles.image} />
      <Text style={styles.name}>{hostel.name}</Text>
      <Text style={styles.details}>📍 Location: {hostel.location}</Text>
      <Text style={styles.details}>💵 Rent: {hostel.rent}</Text>
      <Text style={styles.description}>{hostel.description}</Text>
      <TouchableOpacity style={styles.button} onPress={handleBooking}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E3F2FD',
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 8,
  },
  details: {
    fontSize: 18,
    color: '#1565C0',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginTop: 12,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#0D47A1',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
