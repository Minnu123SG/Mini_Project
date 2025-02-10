import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; // Import the router for navigation

export default function FoodInfo() {
  const router = useRouter(); // Initialize the router

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Top Section with Semicircular Background */}
      <View style={styles.header}>
        <View style={styles.semicircle} />
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        {/* Header Text */}
        <Text style={styles.headerText}>Food info</Text>
      </View>

      {/* Form Section */}
      <Text style={styles.sectionTitle}>Food</Text>

      {/* Input Field */}
      <TextInput style={styles.input} placeholder="Veg/Non-veg" />

      {/* Food Menu Table without Column Names */}
      <Text style={styles.sectionTitle}>Food Menu</Text>
      <View style={styles.table}>
        {/* Table Rows without Column Headers */}
        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
          (day, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{day}</Text>
              <TextInput style={styles.menuInput} placeholder="" />
              <TextInput style={styles.menuInput} placeholder="" />
              <TextInput style={styles.menuInput} placeholder="" />
            </View>
          )
        )}
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => router.push('/screens/RoomInfo')} // Replace '/nextScreen' with your desired route
      >
        <Text style={styles.nextButtonText}>→</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
    paddingHorizontal: 20,
    backgroundColor: '#E0B974',
  },
  header: {
    backgroundColor: '#E0B974',
    paddingBottom: 80,
    position: 'relative',
    overflow: 'visible',
    alignItems: 'center',
  },
  semicircle: {
    width: 400,
    height: 340,
    backgroundColor: '#1C1C5E',
    position: 'absolute',
    top: -100,
    left: '50%',
    transform: [{ translateX: -200 }],
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  backButtonText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 120,
    color: '#FFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    color: '#FFF',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#D9BD8E',
    marginBottom: 20,
  },
  table: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10, // Reduced gap between rows
    width: '100%',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF',
    marginHorizontal: 3, // Reduced horizontal margin
  },
  menuInput: {
    flex: 1,
    height: 40, // Keep the input fields uniform in height
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 10,
    padding: 8, // Reduced padding for a better fit
    fontSize: 14,
    backgroundColor: '#D9BD8E',
    marginHorizontal: 3, // Reduced horizontal margin
  },
  nextButton: {
    position: 'absolute',
    bottom: 5,
    right: 20,
    backgroundColor: '#FFF',
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
