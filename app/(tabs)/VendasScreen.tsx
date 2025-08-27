import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { VendaField } from '../../components/VendaField';

export default function VendasScreen() {
  const [edit, setEdit] = useState(false);
  const router = useRouter();
  const [venda, setVenda] = useState({
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
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      {/* Header customizado */}
      <View style={styles.header}>:
        <Text style={styles.headerTitle}>AutoManage</Text>
        <View style={styles.headerIcons}>
          <View style={styles.headerCircle}>
            <Feather name="plus" size={22} color="#bbb" />
          </View>
          <TouchableOpacity onPress={() => router.push("/index" as any)}>
          <Feather name="arrow-left" size={28} color="#bbb" style={{ marginLeft: 8 }} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Linha separadora */}
      <View style={styles.separator} />

      {/* Título 'VENDAS' centralizado */}
      <View style={styles.vendasContainer}>
        <Text style={styles.vendasTitle}>VENDAS</Text>
      </View>

      {/* Linha separadora */}
      <View style={styles.separator} />

      {/* Conteúdo principal */}
      <View style={{ flex: 1 }}>
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <VendaField onChange={value => setVenda({ ...venda, data: value })} editable={edit} label="Data" value={venda.data} />
          </View>
          <View style={styles.inputContainer}>
            <VendaField onChange={value => setVenda({ ...venda, valor: value })} editable={edit} label="Valor" value={venda.valor} />
          </View>
        </View>
        <VendaField onChange={value => setVenda({ ...venda, comprador: value })} editable={edit} label="Comprador" value={venda.comprador} />
        <VendaField onChange={value => setVenda({ ...venda, modelo: value })} editable={edit} label="Modelo" value={venda.modelo} />
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <VendaField onChange={value => setVenda({ ...venda, placa: value })} editable={edit} label="Placa" value={venda.placa} />
          </View>
          <View style={styles.inputContainer}>
            <VendaField onChange={value => setVenda({ ...venda, pagamento: value })} editable={edit} label="Pagamento" value={venda.pagamento} />
          </View>
        </View>
        <VendaField onChange={value => setVenda({ ...venda, vendedor: value })} editable={edit} label="Vendedor" value={venda.vendedor} />
        <VendaField onChange={value => setVenda({ ...venda, comissao: value })} editable={edit} label="Valor Comissão" value={venda.comissao} />
        <VendaField onChange={value => setVenda({ ...venda, lucro: value })} editable={edit} label="Lucro Total" value={venda.lucro} />

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => setEdit(!edit)} style={styles.iconButton}>
            <Feather name="edit-2" size={28} color="#bbb" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="delete" size={32} color="#bbb" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#d3d3d3',
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    backgroundColor: '#d3d3d3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '400',
    color: '#111',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  separator: {
    width: '100%',
    height: 4,
    backgroundColor: '#fff',
  },
  vendasContainer: {
    width: '100%',
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  vendasTitle: {
    fontSize: 22,
    fontWeight: '400',
    color: '#111',
    textAlign: 'center',
    letterSpacing: 1,
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
  iconButton:  {
    padding: 6,
  },
});