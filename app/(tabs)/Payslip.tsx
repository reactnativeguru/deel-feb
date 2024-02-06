import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import invoiceData from '../../assets/data/mock.json'


interface Payslip {
  id: string;
  fromDate: string;
  toDate: string;
  file: {
    fileName: string;
    fileType: string;
    fileUrl: string;
  };
}

const PayslipItem = (item: Payslip, router: any) => {
  return (
    <TouchableOpacity onPress={() => router.push('/invoiceNumber')}>
      <View style={styles.payslipContainer}>
        <Text style={styles.payslipId}>{item.id}</Text>
        <Text>{`From: ${item.fromDate} To: ${item.toDate}`}</Text>
        <Text style={styles.fileName}>{item.file.fileName}</Text>
      </View>
    </TouchableOpacity>
  );
}


export default function PayslipScreen() {
  const router = useRouter();
  const payslips: Payslip[] = invoiceData.data;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payslips</Text>
      <FlatList
        data={payslips}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => PayslipItem(item, router)}
      />
    </View>
  );
}

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
  payslipContainer: {
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  payslipId: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  fileName: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});