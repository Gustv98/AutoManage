import React, { useState } from 'react';
import { Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ConfirmButton from '../../components/ConfirmButton';
import ExpenseCard from '../../components/ExpenseCard';
import FormInputLogin from '../../components/FormInputLogin';

export default function EditCarro() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const expenses = [
    { id: "1", date: "2025-08-25", title: "Troca de Pneu", value: "150" },
    { id: "2", date: "2025-08-26", title: "Gasolina", value: "200" },
  ];

  const handleEditExpense = (item: any) => {
    setIsEditing(true);
    setModalVisible(true);
  };

  const handleAddExpense = () => {
    setIsEditing(false);
    setModalVisible(true);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.title}>Editar Veículo</Text>
        </View>

        <FormInputLogin placeholder='Modelo'/>
        <FormInputLogin placeholder='Ano'/>
        <FormInputLogin placeholder='Cor'/>
        <FormInputLogin placeholder='Quilometragem'/>
        <FormInputLogin placeholder='Placa'/>
        <FormInputLogin placeholder='Chassi'/>
        <FormInputLogin placeholder='Valor de Compra'/>

        <SafeAreaView style={styles.container}>
          <ExpenseCard
            expenses={expenses}
            onAdd={handleAddExpense}
            onEdit={handleEditExpense}
          />
        </SafeAreaView>

        <FormInputLogin placeholder='Valor Total do Veículo:'/>
        <FormInputLogin placeholder='Valor de Venda:'/>

        <ConfirmButton title="Confirmar" onPress={() => {}} />
      </ScrollView>

      {/* Modal para adicionar/editar despesa */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 12 }}>
              {isEditing ? 'Editar Despesa' : 'Adicionar Despesa'}
            </Text>
            {/* Coloque aqui os campos do formulário de despesa */}
            <FormInputLogin placeholder='Título da Despesa'/>
            <FormInputLogin placeholder='Valor'/>
            <FormInputLogin placeholder='Data'/>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 16 }}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'blue', marginRight: 16 }}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={{ color: 'green' }}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    gap: 5,
  },
});

