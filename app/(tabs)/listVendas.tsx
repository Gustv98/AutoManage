import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';



interface Venda {
    id: number;
    dataVenda: string;
    valor: string;
    comprador: string;
}



const ListVendas = () => {
const router = useRouter();
const [vendas, setVendas] = useState<Venda[]>([]);
useEffect(() => {
    axios.get('https://us-central1-automanage-2db06.cloudfunctions.net/api/vendas')
        .then((response) => {
            setVendas(response.data);
    })
}, [vendas]);
    function editarVenda(venda: Venda) {
        router.push({
            pathname: '/VendasScreen',
            params: { id: venda.id },
        });
    }


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Lista de Vendas</Text>
            {/*<FlatList>
        data={vendas}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>Data: {item.data}</Text>
            <Text style={styles.itemText}>Valor: {item.valor}</Text>
            <Text style={styles.itemText}>Comprador: {item.comprador}</Text>
          </View>
        )}
        keyExtractor={(item) => String(item.id)}
      />*/}

            {vendas.map((venda) => (
                <TouchableOpacity onPress={() => { editarVenda(venda) }} key={venda.id} style={styles.item}>
                    <Text style={styles.itemText}>Data: {venda.dataVenda}</Text>
                    <Text style={styles.itemText}>Comprador: {venda.comprador}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    item: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 8,
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },
});

export default ListVendas;