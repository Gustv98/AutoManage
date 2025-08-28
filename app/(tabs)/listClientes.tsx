import { FontAwesome5 } from "@expo/vector-icons";
import axios from "axios";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';



interface Cliente {
    id: number;
    dataCadastro: string;
    sexo: string;
    nome: string;
}



const ListClientes = () => {
const router = useRouter();
const [clientes, setClientes] = useState<Cliente[]>([]);
useEffect(() => {
    axios.get('')
        .then((response) => {
            setClientes(response.data);
    })
}, [clientes]);
    function editarCliente(cliente: Cliente) {
        router.push({
            pathname: '//',
            params: { id: cliente.id },
        });
    }


    return (
        <ScrollView style={styles.container}>
           <TouchableOpacity onPress={() => { router.push("/cadClientes") }}>
            <FontAwesome5  name="users" size={24} color="black" />
           </TouchableOpacity>
            <Text style={styles.title}>Lista de Clientes</Text>
            {clientes.map((cliente) => (
                <TouchableOpacity onPress={() => { editarCliente(cliente) }} key={cliente.id} style={styles.item}>
                    <Text style={styles.itemText}>Data: {cliente.dataCadastro}</Text>
                    <Text style={styles.itemText}>Nome: {cliente.nome}</Text>
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

export default ListClientes;