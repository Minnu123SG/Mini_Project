import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Correct import

export default function UserSecond() {
  const router = useRouter(); // Initialize router

  const navigateToVembilamattom = () => {
    router.push("/screens/UserHostel"); // Adjust the route as needed
  };
  
  const navigateToFood = () => {
    router.push("/screens/UserFoodBook"); // Adjust the route as needed
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <FontAwesome name="bars" size={24} color="white" />
          <Text style={styles.greeting}>Hi User !</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#999"
          />
          <FontAwesome name="search" size={20} color="#666" style={styles.searchIcon} />
        </View>

        {/* Square Promotional Banner */}
        <View style={styles.bannerContainer}>
          <Text style={styles.bannerText}>FIND YOUR</Text>
          <Text style={styles.bannerText}>PERFECT</Text>
          <Text style={styles.bannerText}>STAY</Text>
          <Text style={styles.bannerText}>ANYWHERE</Text>
          <Text style={styles.bannerText}>ANYTIME</Text>
        </View>

        {/* Nearby Hostels */}
        <Text style={styles.sectionTitle}>Nearby Hostels</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {/* Hostel 1 */}
          <TouchableOpacity style={styles.blueCard} onPress={navigateToVembilamattom}>
            <Image
              source={{ uri: "https://th.bing.com/th/id/OIP.V1ljCQA3G53qdxCHoJYylwHaE8?w=5197&h=3465&rs=1&pid=ImgDetMain" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Vembilamattom</Text>
            <Text style={styles.cardAddress}>123 Main St, Kochi, Kerala 682001</Text>
          </TouchableOpacity>

          {/* Hostel 2 */}
          <TouchableOpacity style={styles.blueCard} >
            <Image
              source={{ uri: "https://th.bing.com/th/id/OIP.VQDZmNqb2JnJdGxudo8zpQHaFj?w=569&h=427&rs=1&pid=ImgDetMain" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>SSV Girls Hostel</Text>
            <Text style={styles.cardAddress}>456 North Ave, Kottayam, Kerala 686001</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Recommended Food Services */}
        <Text style={styles.sectionTitle}>Recommended Food Services</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {/* Food Service 1 */}
          <TouchableOpacity style={styles.blueCard} onPress={navigateToFood}>
            <Image
              source={{ uri: "https://th.bing.com/th/id/OIP.LzpEXNp6LQ_IgpF9_tXk_QHaE5?w=3696&h=2448&rs=1&pid=ImgDetMain" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Matha Caters</Text>
            <Text style={styles.cardAddress}>789 South Rd, Ernakulam, Kerala 682016</Text>
          </TouchableOpacity>

          {/* Food Service 2 */}
          <TouchableOpacity style={styles.blueCard}>
            <Image
              source={{ uri: "https://th.bing.com/th/id/OIP.3DvnXWx8oUxQSsaoVfdybwHaEK?w=2560&h=1440&rs=1&pid=ImgDetMain" }}
              style={styles.cardImage}
            />
            <Text style={styles.cardTitle}>Philip's</Text>
            <Text style={styles.cardAddress}>101 West St, Alappuzha, Kerala 688013</Text>
          </TouchableOpacity>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0B974",
  },
  header: {
    backgroundColor: "#1C1C5E",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  greeting: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  searchContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  searchIcon: {
    marginLeft: 10,
  },
  bannerContainer: {
    backgroundColor: "white",
    width: "90%",
    height: 200,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginVertical: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  bannerText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#1C1C5E",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  horizontalScroll: {
    paddingHorizontal: 10,
  },
  blueCard: {
    backgroundColor: "#1C1C5E",
    borderRadius: 15,
    padding: 10,
    marginRight: 10,
    width: 160,
    alignItems: "center",
  },
  cardImage: {
    width: 140,
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginTop: 5,
    textAlign: "center",
  },
  cardAddress: {
    fontSize: 12,
    color: "#E0E0E0",
    textAlign: "center",
    marginTop: 3,
  },
});
