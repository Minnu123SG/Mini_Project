import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function DetailedView() {
  const [modalVisible, setModalVisible] = useState(false);

  // Sample hostel data
  const hostel = {
    name: 'Vembi',
    namehostel: 'Boys hostel',
    image: 'https://a.hwstatic.com/image/upload/f_auto,q_auto/v1/propertyimages/3/315357/znvqmze3wsuhzkmry5vd',
    description: 'Kottayam, Kerala 691579',
  };

  const handlePlusPress = () => {
    Alert.alert('Add to Favorites', `You added ${hostel.name} to your favorites`);
  };

  const handleUpdate = () => {
    Alert.alert('Update', 'Update option selected');
    setModalVisible(false);
  };

  const handleDelete = () => {
    Alert.alert('Delete', 'Delete option selected');
    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.outerContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuIcon}>
          <Icon name="menu" size={30} color="#0D47A1" />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <Icon name="search" size={24} color="#0D47A1" style={styles.searchIcon} />
          <TextInput style={styles.searchBox} placeholder="Search" placeholderTextColor="#0D47A1" />
        </View>

        <Image source={{ uri: hostel.image }} style={styles.image} />
        <Text style={styles.name}>{hostel.name}</Text>
        <Text style={styles.namehostel}>{hostel.namehostel}</Text>
        <Text style={styles.description}>{hostel.description}</Text>

        <TouchableOpacity style={styles.moreOptions} onPress={() => setModalVisible(true)}>
          <Icon name="more-vert" size={30} color="#0D47A1" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.plusIcon} onPress={handlePlusPress}>
        <Icon name="add" size={40} color="#0D47A1" />
      </TouchableOpacity>

      {/* Modal for More Options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.modalButton} onPress={handleUpdate}>
              <Text style={styles.modalText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={handleDelete}>
              <Text style={styles.modalText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#1C1C5E',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#E0B974',
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
  moreOptions: {
    position: 'absolute',
    top: 200,
    right: 16,
    zIndex: 10,
  },
  plusIcon: {
    position: 'absolute',
    bottom: -90,
    left: '50%',
    transform: [{ translateX: -20 }],
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    zIndex: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  modalButton: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalText: {
    fontSize: 18,
    color: '#0D47A1',
  },
});
