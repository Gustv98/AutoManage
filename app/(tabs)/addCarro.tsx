import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { Alert, Image, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ConfirmButton from '../../components/ConfirmButton';
import ExpenseCard from '../../components/ExpenseCard';
import FormInputLogin from '../../components/FormInputLogin';

export default function AddCarro() {
  const [modalVisible, setModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Inputs do veículo
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [cor, setCor] = useState('');
  const [quilometragem, setQuilometragem] = useState('');
  const [placa, setPlaca] = useState('');
  const [chassi, setChassi] = useState('');
  const [valorCompra, setValorCompra] = useState('');
  const [valorTotal, setValorTotal] = useState('');
  const [valorVenda, setValorVenda] = useState('');

  // Imagem
  const [image, setImage] = useState<string | null>(null);

  // Despesas (exemplo)
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

  // Selecionar imagem
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.7,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // Enviar formulário
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("modelo", modelo);
    formData.append("ano", ano);
    formData.append("cor", cor);
    formData.append("quilometragem", quilometragem);
    formData.append("placa", placa);
    formData.append("chassi", chassi);
    formData.append("valorCompra", valorCompra);
    formData.append("valorTotal", valorTotal);
    formData.append("valorVenda", valorVenda);

    if (image) {
      formData.append("imagem", {
        uri: image,
        type: "image/jpeg",
        name: `carro-${Date.now()}.jpg`,
      } as any);
    }

    try {
      const response = await fetch("", {
        method: "POST",
        body: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });

      const data = await response.json();
      Alert.alert("Sucesso", "Veículo cadastrado!");
      console.log("Carro salvo:", data);
    } catch (error) {
      console.error("Erro ao salvar carro:", error);
      Alert.alert("Erro", "Não foi possível cadastrar o veículo.");
    }
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Cadastrar Veículo</Text>

        <FormInputLogin placeholder='Modelo' value={modelo} onChangeText={setModelo} />
        <FormInputLogin placeholder='Ano' value={ano} onChangeText={setAno} />
        <FormInputLogin placeholder='Cor' value={cor} onChangeText={setCor} />
        <FormInputLogin placeholder='Quilometragem' value={quilometragem} onChangeText={setQuilometragem} />
        <FormInputLogin placeholder='Placa' value={placa} onChangeText={setPlaca} />
        <FormInputLogin placeholder='Chassi' value={chassi} onChangeText={setChassi} />
        <FormInputLogin placeholder='Valor de Compra' value={valorCompra} onChangeText={setValorCompra} />

        <SafeAreaView style={styles.container}>
          <ExpenseCard
            expenses={expenses}
            onAdd={handleAddExpense}
            onEdit={handleEditExpense}
          />
        </SafeAreaView>

        <FormInputLogin placeholder='Valor Total do Veículo:' value={valorTotal} onChangeText={setValorTotal} />
        <FormInputLogin placeholder='Valor de Venda:' value={valorVenda} onChangeText={setValorVenda} />

        <TouchableOpacity
          onPress={pickImage}
          style={styles.imagePicker}
        >
          <Text>Selecionar Foto do Carro</Text>
        </TouchableOpacity>

        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 200, height: 120, borderRadius: 8, marginBottom: 10 }}
          />
        )}

        <ConfirmButton title="Confirmar" onPress={handleSubmit} />
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
}

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
  imagePicker: {
    backgroundColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
});
