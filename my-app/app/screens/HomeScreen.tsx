import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  // Sample data of hostels
  const hostels = [
    { id: 1, name: 'Green Hostel', location: 'New York', rent: '$500/month' },
    { id: 2, name: 'Blue Sky Hostel', location: 'Los Angeles', rent: '$450/month' },
    { id: 3, name: 'Sunrise Hostel', location: 'Miami', rent: '$400/month' },
    { id: 4, name: 'Ocean View Hostel', location: 'San Francisco', rent: '$550/month' },
    { id: 5, name: 'Hilltop Hostel', location: 'Denver', rent: '$480/month' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Available Hostels</Text>
      {hostels.map((hostel) => (
        <View key={hostel.id} style={styles.hostelCard}>
          <Text style={styles.hostelName}>{hostel.name}</Text>
          <Text style={styles.hostelDetails}>Location: {hostel.location}</Text>
          <Text style={styles.hostelDetails}>Rent: {hostel.rent}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  hostelCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  hostelName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  hostelDetails: {
    fontSize: 16,
    color: '#666',
  },
});
