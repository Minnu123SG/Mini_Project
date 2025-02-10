import { View, StyleSheet } from 'react-native';
import React from 'react';
import SigninPage from '../screens/SigninPage';

export default function Index() {
  return (
    <View style={styles.container}>
      <SigninPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the view takes up the full screen
    backgroundColor: '#E3F2FD', // Optional background color
  },
});
