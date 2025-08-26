import { Feather, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { VendaField } from '../../components/VendaField';

export default function VendasScreen() {
  const [venda] = useState({
    data: '25/05/2025',
    valor: '55.500,00',
    comprador: 'JOSÉ AMANCIO SILVA',
    modelo: 'Gol MB 1.6',
    placa: 'QFB-3L59',
    pagamento: 'A vista',
    vendedor: 'Bruno Lins Almeida',
    comissao: '500,00',
    lucro: '8.000,00',
  });

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <VendaField label="Data" value={venda.data} />
        </View>
        <View style={styles.inputContainer}>
          <VendaField label="Valor" value={venda.valor} />
        </View>
      </View>
      <VendaField label="Comprador" value={venda.comprador} />
      <VendaField label="Modelo" value={venda.modelo} />
      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <VendaField label="Placa" value={venda.placa} />
        </View>
        <View style={styles.inputContainer}>
          <VendaField label="Pagamento" value={venda.pagamento} />
        </View>
      </View>
      <VendaField label="Vendedor" value={venda.vendedor} />
      <VendaField label="Valor Comissão" value={venda.comissao} />
      <VendaField label="Lucro Total" value={venda.lucro} />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconButton}>
          <Feather name="edit-2" size={28} color="#bbb" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="delete" size={32} color="#bbb" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    padding: 16,
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flex: 1,
    margin: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    gap: 12,
  },
  iconButton: {
    padding: 6,
  },
});