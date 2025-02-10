import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function FoodServiceDetails() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top Image Section */}
      <Image
        source={{
          uri: 'https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/3/315357/znvqmze3wsuhzkmry5vd', // Replace with your image URL
        }}
        style={styles.image}
      />

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>MATHA CATERS</Text>
        <Text style={styles.details}>
          HJHF+6H4, Kottayam, Kerala 686516
          Joseph Kurian
          40 m from college
          8775433091
        </Text>
        <Text style={styles.menuDetails}>Food menu details</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E0B974', // Set background to match detailsContainer color
  },
  image: {
    width: '100%',
    height: 250, // Adjust the height as necessary
    resizeMode: 'cover',
  },
  detailsContainer: {
    backgroundColor: '#E0B974',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: -20, // To overlap with the image
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: '#FFF',
    lineHeight: 22,
    marginBottom: 40,
  },
  menuDetails: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    textAlign: 'center',
  },
});