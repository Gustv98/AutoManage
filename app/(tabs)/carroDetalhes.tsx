import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function carroDetalhes () {

    const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AutoManage</Text>
        <View style={styles.icons}>
          <TouchableOpacity style={styles.iconButton} onPress={()=> router.push("/editCarro")}>
            <Text style={styles.iconText}>✏️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.iconText}>🗑️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.model}>ONIX LT2 TURBO</Text>
        <Image 
          source={{ uri: 'https://orca.com.br/uploads/products/versions/branco-summit-novo-onix.png' }} 
          style={styles.carImage}
        />

        <Text style={styles.price}>69.999,00</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>ANO</Text>
          <Text style={styles.infoValue}>2023</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>COR</Text>
          <Text style={styles.infoValue}>PRATA</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>KM</Text>
          <Text style={styles.infoValue}>22000</Text>
        </View>

        <Text style={styles.infoLabel}>PLACA</Text>
        <Text style={styles.infoValue}>XXX-0000</Text>

        <Text style={styles.infoLabel}>CHASSI</Text>
        <Text style={styles.infoValue}>9BWZZZ377VT004251</Text>

        <Text style={styles.infoLabel}>VALOR DA COMPRA</Text>
        <Text style={styles.infoValue}>59.999,00</Text>

        <Text style={styles.sectionTitle}>DESPESAS</Text>
        <View style={styles.expenseRow}>
          <Text style={styles.expenseDate}>17/01/2025</Text>
          <Text style={styles.expenseTitle}>TROCA DE ÓLEO</Text>
          <Text style={styles.expenseValue}>50,00 R$</Text>
        </View>

        <Text style={styles.infoLabel}>VALOR TOTAL VEÍCULO</Text>
        <Text style={styles.infoValue}>60.049,00</Text>

        <Text style={styles.infoLabel}>LUCRO</Text>
        <Text style={styles.infoValue}>9.950,00</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      icons: {
        flexDirection: 'row',
      },
      iconButton: {
        marginHorizontal: 10,
      },
      iconText: {
        fontSize: 24,
      },
      card: {
        backgroundColor: '#ddd',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
      },
      model: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
      carImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
      },
      price: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
      },
      infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      infoLabel: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      infoValue: {
        fontSize: 16,
        textAlign: 'right',
      },
      sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
      },
      expenseRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      expenseDate: {
        fontSize: 14,
      },
      expenseTitle: {
        fontSize: 14,
        fontWeight: 'bold',
      },
      expenseValue: {
        fontSize: 14,
      },
    
  });