import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import { useRouter } from 'expo-router'; // Importing useRouter for navigation
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DetailedView() {
  const router = useRouter(); // Initialize the router for navigation

  // Sample hostel data
  const hostel = {
    name: 'Matha Hotel',
    namehostel: 'Food Service',
    image: 'https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/3/315357/znvqmze3wsuhzkmry5vd',
    description: 'Kottayam, Kerala 691579',
  };

  // Handle Plus Icon press
  const handlePlusPress = () => {
    Alert.alert('Add to Favorites', `You added ${hostel.name} to your favorites`);
  };

  // Handle press on the hostel container to navigate to /screens/FoodSerDescp
  const handleContainerPress = () => {
    router.push('/screens/FoodSerDescp'); // Navigate to the FoodSerDescp screen
  };

  return (
    <ScrollView style={styles.outerContainer}>
      {/* Main Content Container */}
      <TouchableOpacity style={styles.container} onPress={handleContainerPress}>
        {/* Hamburger Menu Icon */}
        <TouchableOpacity style={styles.menuIcon}>
          <Icon name="menu" size={30} color="#0D47A1" />
        </TouchableOpacity>

        {/* Search Box with Icon */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={24} color="#0D47A1" style={styles.searchIcon} />
          <TextInput
            style={styles.searchBox}
            placeholder="Search"
            placeholderTextColor="#0D47A1"
          />
        </View>

        {/* Hostel Info */}
        <Image source={{ uri: hostel.image }} style={styles.image} />
        <Text style={styles.name}>{hostel.name}</Text>
        <Text style={styles.namehostel}>{hostel.namehostel}</Text>
        <Text style={styles.description}>{hostel.description}</Text>

        {/* More Options Icon (Below the Image, Right of "Vembi") */}
        <View style={styles.moreOptions}>
          <Icon name="more-vert" size={30} color="#0D47A1" />
        </View>
      </TouchableOpacity>

      {/* Plus Icon Centered Below the Content */}
      <TouchableOpacity style={styles.plusIcon} onPress={handlePlusPress}>
        <Icon name="add" size={40} color="#0D47A1" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // Outer container background color (1C1C5E)
  outerContainer: {
    flex: 1,
    backgroundColor: '#1C1C5E', // Updated to the specified color
  },
  
  // Main content container with color code E0B974
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E0B974', // Content container with color code E0B974
    borderRadius: 12,
    margin: 8,
    position: 'relative',
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
  namehostel: {
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

  // Styles for search and menu icons
  menuIcon: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 10,
  },
  searchContainer: {
    position: 'absolute',
    top: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '50%',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBox: {
    width: '80%',
    fontSize: 16,
    color: '#0D47A1',
    paddingVertical: 4,
  },

  // More Options Icon Positioned Below the Image, Right of "Vembi"
  moreOptions: {
    position: 'absolute',
    top: 200, // Aligns with the bottom of the "Vembi" text
    right: 16,
    zIndex: 10,
  },

  // Plus Icon Centered Below the Content
  plusIcon: {
    position: 'absolute',
    bottom: -90, // Adjusted to be centered below the content
    left: '50%', // Centering horizontally
    transform: [{ translateX: -20 }], // Offset the icon to center it correctly
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    zIndex: 10, // Ensure it's on top of other elements
  },
});
