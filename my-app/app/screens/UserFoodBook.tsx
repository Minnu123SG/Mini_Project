import React, { useState } from "react";
import { 
  View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet 
} from "react-native";
import { useRouter } from "expo-router";

const hostels = [
  {
    id: "1",
    name: "MATHA CATERS",
    address: "123 Main Street, Kottayam, Kerala 686034",
    rent: "INR 6500",
    image: "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2023/1/31/south-indian-cuisine.jpg",
  },
  {
    id: "2",
    name: "PHILIP'S ",
    address: "HSB-134, Kottayam, Kerala 686052",
    rent: "INR 5500",
    image: "https://th.bing.com/th/id/OIP.ZakHF5HPxcUaJ51l0YINbQHaEK?w=780&h=438&rs=1&pid=ImgDetMain",
  },
];

export default function UserHostel() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredHostels, setFilteredHostels] = useState(hostels);
  const router = useRouter();

  const handleSearch = (query) => {
    setSearchQuery(query);
    setFilteredHostels(
      query.trim() === ""
        ? hostels
        : hostels.filter((hostel) => hostel.name.toLowerCase().includes(query.toLowerCase()))
    );
  };

  const navigateToDetails = (hostel) => {
    router.push({
      pathname: "/screens/UserFoodes",
      params: { id: hostel.id, name: hostel.name, address: hostel.address, rent: hostel.rent },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>⬅ </Text>
      </TouchableOpacity>
      <Text style={styles.header}>Available Hostels</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="🔍 Search Hostels..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredHostels}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigateToDetails(item)}>
            <Image 
              source={{ uri: item.image }} 
              style={styles.image} 
              onError={(e) => console.log("Image Load Error:", e.nativeEvent.error)}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.hostelName}>{item.name}</Text>
              <Text style={styles.address}>{item.address}</Text>
              <Text style={styles.rent}>{item.rent}</Text>
            </View>
          </TouchableOpacity>
        )}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>No hostels found</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E0B974", padding: 10 },
  backButton: { padding: 10, backgroundColor: "#4E3F97", borderRadius: 10, alignSelf: "flex-start", marginBottom: 10 },
  backButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  header: { color: "#4E3F97", fontSize: 22, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  searchBar: { 
    backgroundColor: "#FFF", padding: 12, borderRadius: 12, fontSize: 16, marginBottom: 12, 
    textAlign: "center", elevation: 3 
  },
  gridContainer: { alignItems: "center", paddingBottom: 20 },
  card: { 
    backgroundColor: "#4E3F97", borderRadius: 15, margin: 10, width: "45%", 
    elevation: 5, overflow: "hidden", paddingBottom: 10 
  },
  image: { width: "100%", height: 120, borderTopLeftRadius: 15, borderTopRightRadius: 15 },
  infoContainer: { padding: 10, alignItems: "center" },
  hostelName: { color: "#FFF", fontSize: 16, fontWeight: "bold", textAlign: "center" },
  address: { color: "#DDD", fontSize: 12, textAlign: "center" },
  rent: { color: "#FFD700", fontSize: 14, fontWeight: "bold", marginTop: 5 },
  emptyText: { color: "#FFF", fontSize: 16, textAlign: "center", marginTop: 20 },
});
