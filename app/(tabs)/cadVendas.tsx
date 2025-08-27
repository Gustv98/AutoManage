import { Label } from '@react-navigation/elements';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import ConfirmButton from '../../components/ConfirmButton';
import FormInput from '../../components/FormInput';

const vendaSchema = Yup.object().shape({
  comprador: Yup.string().required('Comprador é obrigatório'),
  vendedor: Yup.string().required('Vendedor é obrigatório'),
  endereco: Yup.string().required('Endereço é obrigatório'),
  dataVenda: Yup.string().required('Data da Venda é obrigatória'),
  placa: Yup.string().required('Placa do Veículo é obrigatória'),
  modelo: Yup.string().required('Modelo é obrigatório'),
  pagamento: Yup.string().required('Pagamento é obrigatório'),
  comissao: Yup.string().required('Valor da Comissão é obrigatório'),
});

export default function VendaForm() {
  const [venda, setVenda] = useState({
    comprador: '',
    vendedor: '',
    endereco: '',
    dataVenda: '',
    placa: '',
    modelo: '',
    pagamento: '',
    comissao: '',
  });
  const [errors, setErrors] = useState(null);

  const handleSubmit = async () => {
  try {
    await vendaSchema.validate(venda, { abortEarly: false });
    // Se a validação for bem-sucedida, envie os dados para o servidor
    const response = await axios.post('', venda, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
  } catch (error) {
    if (error.response) {
      // Erro do servidor
      console.log(error.response.data);
    } else if (error.request) {
      // Erro de rede
      console.log(error.request);
    } else {
      // Erro de validação
      const errors = {};
      error.inner.forEach(error => {
        errors[error.path] = error.message;
      });
      setErrors(errors);
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
    }
  }
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Label style={styles.title}>Cadastrar Venda</Label>
      <FormInput placeholder="Comprador:" value={venda?.comprador} onChangeText={text => setVenda({ ...venda, comprador: text })} 
      errorMessage={errors?.comprador}/>
      <FormInput placeholder="Vendedor:" value={venda?.vendedor} onChangeText={text=>setVenda({...venda, vendedor: text})}
      errorMessage={errors?.vendedor}/>
      <FormInput placeholder="Endereço:" value={venda?.endereco} onChangeText={text=>setVenda({...venda, endereco: text})}
      errorMessage={errors?.endereco}/>
      <FormInput placeholder="Data da Venda:" value={venda?.dataVenda} onChangeText={text=>setVenda({...venda, dataVenda: text})}
      errorMessage={errors?.dataVenda}/>
      <FormInput placeholder="Placa do Veículo:" value={venda?.placa} onChangeText={text=>setVenda({...venda, placa: text})}
      errorMessage={errors?.placa}/>
      <FormInput placeholder="Modelo:" value={venda?.modelo} onChangeText={text=>setVenda({...venda, modelo: text})}
      errorMessage={errors?.modelo}/>
      <FormInput placeholder="Pagamento:" value={venda?.pagamento} onChangeText={text=> setVenda({...venda, pagamento: text})}
      errorMessage={errors?.pagamento}/>
      <FormInput placeholder="Valor da Comissão:" value={venda?.comissao} onChangeText={text=> setVenda({...venda, comissao: text})}
      errorMessage={errors?.comissao}/>

      <ConfirmButton title="Confirmar" onPress={handleSubmit} />
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    gap: 12, // espaçamento entre os inputs
  },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
        fontSize: 24,
    },
});
