import { Feather, MaterialIcons } from '@expo/vector-icons';
import axios from 'axios';
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { VendaField } from '../../components/VendaField';


export default function VendasScreen() {
  const [edit, setEdit] = useState(false);
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [venda, setVenda] = useState({
    dataVenda: '',
    comprador: '',
    endereco: '',
    modelo: '',
    placa: '',
    pagamento: '',
    vendedor: '',
    comissao: '',
    lucro: '',
  });

  useEffect(() => {
    console.log(id);
    axios.get(`/////////////${id}`).
    then((response) => {setVenda(response.data); console.log(response.data)});
  }, [id]);

  const handleEdit = () => {
    axios.put(`/////////////${id}`, venda).then((response) => {
      console.log(response.data);
      router.push("/listVendas" as any);
    })
  };

  const handleDelete = () => {
    axios.delete(`//////////////////${id}`).then((response) => {
      console.log(response.data);
      router.push("/listVendas" as any);
    })
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      {/* Header customizado */}
      <View style={styles.header}>:
        <Text style={styles.headerTitle}>AutoManage</Text>
        <View style={styles.headerIcons}>
          <View style={styles.headerCircle}>
            <Feather onPress={() => router.push("/cadVendas" as any)} name="plus" size={22} color="#bbb" />
          </View>
          <View>
            <Feather onPress={() => router.push("/index" as any)} name="arrow-left" size={28} color="#bbb" style={{ marginLeft: 8 }} />
          </View>
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
            <VendaField onChange={value => setVenda({ ...venda, dataVenda: value })} editable={edit} label="Data" value={venda.dataVenda} />
          </View>
          <View style={styles.inputContainer}>
            <VendaField onChange={value => setVenda({ ...venda, endereco: value })} editable={edit} label="Endereço" value={venda.endereco} />
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

        <View style={styles.footer}>
          <TouchableOpacity onPress={() => setEdit(!edit)} style={styles.iconButton}>
            <Feather name="edit-2" size={28} color="#bbb" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete} style={styles.iconButton}>
            <MaterialIcons name="delete" size={32} color="#bbb" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleEdit} style={styles.iconButton}>
            <MaterialIcons name="save" size={32} color="#bbb" />
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