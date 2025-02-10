import { useRouter } from 'expo-router'; 
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HostelRegistrationForm() {
  const router = useRouter(); 

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Top Section with Semicircular Background */}
      <View style={styles.header}>
        <View style={styles.semicircle} />
        {/* Back Button with Icon */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        {/* Header Text */}
        <Text style={styles.headerText}>Fill out the details to register your hostel</Text>
      </View>

      {/* Form Section */}
      <Text style={styles.sectionTitle}>Hostel Info</Text>

      {/* Image Placeholder */}
      <View style={styles.imagePlaceholderRight}>
        <Text style={styles.imagePlaceholderText}>+</Text>
      </View>

      {/* Input Fields with Labels */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hostel Name</Text>
        <TextInput style={styles.input} placeholder="" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hostel Owner Name</Text>
        <TextInput style={styles.input} placeholder="" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Hostel Location</Text>
        <TextInput style={styles.input} placeholder="" keyboardType="default" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rent Amount</Text>
        <TextInput style={styles.input} placeholder="" keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Distance From College</Text>
        <TextInput style={styles.input} placeholder="" keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Total No Of Seat</Text>
        <TextInput style={styles.input} placeholder="" keyboardType="numeric" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Vacancy</Text>
        <TextInput style={styles.input} placeholder="" keyboardType="numeric" />
      </View>
      {/* Bottom Right Button (Creative Next) */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity 
          style={styles.stylishNextButton} 
          onPress={() => router.push('/screens/OwnerInfo')}
          activeOpacity={0.7} // Smooth press effect
        >
          <Ionicons name="arrow-forward" size={28} color="#000" />
        </TouchableOpacity>
      </View>
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
    paddingBottom: 100,
    position: 'relative',
    overflow: 'visible',
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
    top: 20,
    left: 15,
    backgroundColor: '#FFF',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 120,
    marginLeft: 20,
    color: '#FFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    marginLeft: 20,
    color: '#FFF',
  },
  imagePlaceholderRight: {
    width: 100,
    height: 100,
    backgroundColor: '#D9BD8E',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
    borderRadius: 10,
  },
  imagePlaceholderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#888',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFF',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#D9BD8E',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  stylishNextButton: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF', // Dark blue button
    borderRadius: 30, // Makes it circular
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Adds a shadow for a 3D effect
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Android shadow effect
  },
});

