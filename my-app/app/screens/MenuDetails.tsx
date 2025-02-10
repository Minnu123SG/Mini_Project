import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';

export default function MenuDetails() {
  const weeklyMenu = {
    Sunday: {
      Breakfast: 'Pancakes, Coffee, Fruit Salad',
      Lunch: 'Grilled Chicken, Rice, Salad',
      Dinner: 'Pasta, Garlic Bread, Soup',
    },
    Monday: {
      Breakfast: 'Omelette, Toast, Juice',
      Lunch: 'Burger, Fries, Soft Drink',
      Dinner: 'Fried Rice, Chicken Curry, Dessert',
    },
    Tuesday: {
      Breakfast: 'Cereal, Milk, Banana',
      Lunch: 'Fish Curry, Rice, Vegetables',
      Dinner: 'Pizza, Salad, Ice Cream',
    },
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedMeals, setSelectedMeals] = useState({});
  const [status, setStatus] = useState('Not Accepted');

  const openDatePicker = () => setIsModalVisible(true);
  const closeDatePicker = () => setIsModalVisible(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    closeDatePicker();
  };

  const handleCheckboxToggle = (day, mealType) => {
    setSelectedMeals((prev) => ({
      ...prev,
      [`${day}-${mealType}`]: !prev[`${day}-${mealType}`],
    }));
  };

  const handleBooking = (day, mealType) => {
    Alert.alert(
      'Booking Confirmation',
      `You have booked ${mealType} for ${day} on ${selectedDate.toDateString()}.`
    );
    setStatus('Accepted');
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    ).getDay();

    const dates = [];
    for (let i = 0; i < firstDay; i++) {
      dates.push(null); // Empty slots for days before the first day
    }
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(i);
    }

    return (
      <View style={styles.calendarGrid}>
        {dates.map((date, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.calendarCell,
              date === selectedDate.getDate() &&
              selectedDate.getMonth() === new Date().getMonth() &&
              selectedDate.getFullYear() === new Date().getFullYear()
                ? styles.calendarCellSelected
                : null,
            ]}
            disabled={!date}
            onPress={() =>
              handleDateChange(
                new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date)
              )
            }
          >
            <Text style={styles.calendarCellText}>{date || ''}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.statusText}>{status}</Text>

      <Text style={styles.selectedDate}>
        Selected Date: {selectedDate.toDateString()}
      </Text>
      <TouchableOpacity style={styles.calendarButton} onPress={openDatePicker}>
        <Text style={styles.calendarButtonText}>Open Calendar</Text>
      </TouchableOpacity>

      {Object.keys(weeklyMenu).map((day) => (
        <View key={day} style={styles.dayContainer}>
          <Text style={styles.dayTitle}>{day}</Text>

          {['Breakfast', 'Lunch', 'Dinner'].map((meal) => (
            <View key={meal} style={styles.mealContainer}>
              <Text style={styles.mealTitle}>{meal}</Text>
              <Text style={styles.mealDetails}>{weeklyMenu[day][meal]}</Text>

              <TouchableOpacity
                style={styles.row}
                onPress={() => handleCheckboxToggle(day, meal)}
              >
                <View
                  style={[
                    styles.checkbox,
                    selectedMeals[`${day}-${meal}`] && styles.checkboxSelected,
                  ]}
                />
                <Text style={styles.checkboxLabel}>Select</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.button}
                onPress={() => handleBooking(day, meal)}
              >
                <Text style={styles.buttonText}>Book {meal}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      ))}

      {/* Modal for Date Picker */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Select a Date ({selectedDate.toLocaleString('default', {
                month: 'long',
                year: 'numeric',
              })})
            </Text>
            {renderCalendar()}
            <TouchableOpacity style={styles.closeButton} onPress={closeDatePicker}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    textAlign: 'center',
    marginBottom: 16,
  },
  selectedDate: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 12,
  },
  dayContainer: {
    backgroundColor: '#E3F2FD',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  dayTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 8,
  },
  mealContainer: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  mealTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1565C0',
    marginBottom: 4,
  },
  mealDetails: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 4,
    marginRight: 8,
  },
  checkboxSelected: {
    backgroundColor: '#0D47A1',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#0D47A1',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calendarButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 8,
  },
  calendarButtonText: {
    color: '#000',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  calendarCell: {
    width: '14%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  calendarCellSelected: {
    backgroundColor: '#0D47A1',
  },
  calendarCellText: {
    color: '#000',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#0D47A1',
    borderRadius: 6,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
