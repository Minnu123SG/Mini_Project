import { View, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';

export default function Wishlist() {
  // Default wishlisted hostels
  const wishlistedHostels = [
    { id: 1, name: 'Green Hostel', location: 'New York', rent: '$500/month' },
    { id: 2, name: 'Blue Sky Hostel', location: 'Los Angeles', rent: '$450/month' },
    { id: 3, name: 'Sunrise Hostel', location: 'Miami', rent: '$400/month' },
  ];

  const renderHostel = ({ item }) => (
    <View style={styles.hostelCard}>
      <Text style={styles.hostelName}>{item.name}</Text>
      <Text style={styles.hostelDetails}>📍 Location: {item.location}</Text>
      <Text style={styles.hostelDetails}>💵 Rent: {item.rent}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🌟 Wishlisted Hostels</Text>
      <FlatList
        data={wishlistedHostels}
        renderItem={renderHostel}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
    padding: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 16,
    textAlign: 'center',
  },
  hostelCard: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  hostelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 4,
  },
  hostelDetails: {
    fontSize: 16,
    color: '#1565C0',
  },
});
