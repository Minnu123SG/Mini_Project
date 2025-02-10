import React, { useState } from "react";
import { 
  View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet 
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useRouter } from "expo-router";

const Tab = createBottomTabNavigator();

const hostels = [
  {
    id: "1",
    name: "VEMBILAMATTOM",
    address: "123 Main Street, Kottayam, Kerala 686034",
    rent: "INR 6500",
    image: "https://th.bing.com/th/id/OIP.NrCJWLlaYUGFhzqdb7wkpAHaEt?w=1280&h=814&rs=1&pid=ImgDetMain",
  },
  {
    id: "2",
    name: "SSV GIRLS HOSTEL",
    address: "HSB-134, Kottayam, Kerala 686052",
    rent: "INR 6300",
    image: "https://thesavvybackpacker.com/wp-content/uploads/2019/03/best-hostels-krakow-720x432.jpg",
  },
];

function HostelList() {
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
      pathname: "/screens/UserHostelDEs",
      params: { id: hostel.id, name: hostel.name, address: hostel.address, rent: hostel.rent },
    });
  };

  const renderHostel = ({ item }) => (
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
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <Text style={styles.header}> Available Hostels</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="🔍 Search Hostels..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredHostels}
        keyExtractor={(item) => item.id}
        renderItem={renderHostel}
        numColumns={2}
        contentContainerStyle={styles.gridContainer}
        ListEmptyComponent={<Text style={styles.emptyText}>No hostels found</Text>}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.centeredContainer}>
      <Text style={{ color: "#FFF", fontSize: 20 }}>👤 Profile Screen</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.centeredContainer}>
      <Text style={{ color: "#FFF", fontSize: 20 }}>⚙️ Settings</Text>
    </View>
  );
}

// Redirect to UserFood page
function FoodScreen({ navigation }) {
  const router = useRouter();
  
  React.useEffect(() => {
    router.push("/screens/UserFoodBook");
  }, []);

  return (
    <View style={styles.centeredContainer}>
      <Text style={{ color: "#FFF", fontSize: 20 }}>Redirecting to Food Page...</Text>
    </View>
  );
}

export default function UserHostel() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#4E3F97", height: 60 },
        tabBarActiveTintColor: "#FFD700",
        tabBarInactiveTintColor: "#DDD",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Hostels"
        component={HostelList}
        options={{
          tabBarLabel: "🏠",
        }}
      />
      <Tab.Screen
        name="Food"
        component={FoodScreen} // Redirects to UserFood page
        options={{
          tabBarLabel: "🍴",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarLabel: "⚙️",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "👤",
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E0B974", padding: 10 },
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
  centeredContainer: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#2C2461" },
  backButton: {
    position: "absolute", top: 8, left: 10, backgroundColor: "#E0B974", borderRadius: 20, width: 40, height: 40, justifyContent: "center", alignItems: "center", zIndex: 100, elevation: 5
  },
  backButtonText: { color: "#000", fontSize: 30, fontWeight: "bold" },
});
