import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { useRouter } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function UserHostelDetails() {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);
  const [isBookingModalVisible, setBookingModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <FontAwesome name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Hostel Image */}
        <Image
          source={{
            uri: "https://images.herzindagi.info/image/2021/Sep/chaii-samosa.jpg",
          }}
          style={styles.hostelImage}
        />

        {/* Hostel Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Matha Caters</Text>
          <Text style={styles.description}>
            Our hostel offers well-furnished rooms, equipped with cozy beds, study desks, and ample storage, ensuring you feel right at home.
            We take pride in our food facilities, serving hygienic and nutritious meals daily, with options for both vegetarian and non-vegetarian preferences.
          </Text>
          
        </View>
      </ScrollView>

      {/* Fixed Bottom Buttons */}
     

    

      </View> 
  );
}

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E0B974" },
  backButton: { position: "absolute", top: 40, left: 20, zIndex: 1 },
  hostelImage: { width: "100%", height: 250 },
  content: { paddingBottom: 80 },
  detailsContainer: { padding: 20, backgroundColor: "#E0B974", borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -30 },
  title: { fontSize: 22, fontWeight: "bold", color: "#FFF" },
  subtitle: { fontSize: 16, color: "#FFF", marginBottom: 10 },
  description: { fontSize: 14, color: "#FFF", marginBottom: 10 },
  info: { fontSize: 14, color: "#FFF", marginBottom: 5 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#1C1C5E",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  button: { paddingVertical: 12, paddingHorizontal: 30, backgroundColor: "#1C1C5E", borderRadius: 8 },
  buttonText: { fontSize: 18, color: "#FFF", fontWeight: "bold" },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#000",
  },
});

