import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Text, View } from '@/components/Themed';
import { Payslip } from '@/interfaces/Payslip';
import payslipData from '../../assets/data/mock.json'

const PayslipItem = (item: Payslip, router: any) => {
  return (
    <TouchableOpacity onPress={() => router.push({ pathname: "/PayslipDetail", params: { id: item.id, payslip: item } })}>
    {/* <TouchableOpacity onPress={() => router.push({ pathname: "/PayslipDetail", params: item })}> */}
      <View style={styles.payslipContainer}>
        <Text style={styles.payslipId}>{item.id}</Text>
        <Text>{`From: ${item.fromDate} To: ${item.toDate}`}</Text>
        <Text style={styles.fileName}>{item.file.fileName}</Text>
      </View>
    </TouchableOpacity>
  );
}

const PayslipScreen = () =>  {
  const router = useRouter();
  const payslips: Payslip[] = payslipData.data;

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

export default PayslipScreen;