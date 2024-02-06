import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Info = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payslip App</Text>
      <Text style={styles.version}>Version 1.0.0</Text>
      <Text style={styles.description}>
        This app helps you manage and view your payslips conveniently or pass a test hopefully
      </Text>
      <Text style={styles.contact}>Contact: john@reactnative.guru</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  version: {
    fontSize: 18,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  contact: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default Info;
