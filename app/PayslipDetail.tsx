import React from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { Payslip } from '@/interfaces/Payslip';
import payslipData from '../assets/data/mock.json'
import DownloadMedia from '@/components/DownloadMedia';

const PayslipDetailScreen = () => {
  const { id }: { id: string } = useLocalSearchParams();
  
  const payslips: Payslip[] = payslipData.data;
  const payslip = payslips.find(item => item.id === id) as Payslip;

  const openFile = () => {
    Linking.openURL(payslip.file.fileUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payslip Details</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>ID:</Text>
        <Text style={styles.value}>{payslip.id}</Text>

        <Text style={styles.label}>From Date:</Text>
        <Text style={styles.value}>{payslip.fromDate}</Text>

        <Text style={styles.label}>To Date:</Text>
        <Text style={styles.value}>{payslip.toDate}</Text>

        <Text style={styles.label}>File Name:</Text>
        <Text style={[styles.value, styles.fileName]} onPress={openFile}>
          {payslip.file.fileName}
        </Text>
      </View>
      <DownloadMedia url={payslip.file.fileUrl} fileName={payslip.file.fileName} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    marginBottom: 12,
  },
  fileName: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default PayslipDetailScreen;
