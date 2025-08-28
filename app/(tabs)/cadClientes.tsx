import { Label } from '@react-navigation/elements';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import ConfirmButton from '../../components/ConfirmButton';
import FormInput from '../../components/FormInput';

const vendaSchema = Yup.object().shape({
  nome: Yup.string().required('nome do cliente é obrigatório'),
  cpf: Yup.string().required('CPF é obrigatório').matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido'),
  endereco: Yup.string().required('Endereço é obrigatório'),
  dataCadastro: Yup.string().required('Data de Cadastro é obrigatória').matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Data inválida')
});

export default function ClienteForm() {
  const [cliente, setCliente] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    dataCadastro: '',
  });
  const [errors, setErrors] = useState(null);

  const [loading, setLoading] = useState(false); // Estado de carregamento

const handleSubmit = async () => {
  setLoading(true); // Inicia o carregamento
  try {
    await vendaSchema.validate(cliente, { abortEarly: false });
    
    // Se a validação for bem-sucedida, envie os dados para o servidor
    const response = await axios.post('', cliente, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log(response.data);
    
    // Mensagem de sucesso
    Alert.alert(
      'Sucesso!', 
      'Venda cadastrada com sucesso!',
      [
        {
          text: 'OK',
          onPress: () => {
            // Opcional: limpar o formulário ou navegar para outra tela
          }
        }
      ]
    );
    
  } catch (error) {
    if (error.response) {
      // Erro do servidor
      console.log(error.response.data);
      Alert.alert('Erro', 'O servidor retornou um erro: ' + error.response.data.message);
    } else if (error.request) {
      // Erro de rede
      console.log(error.request);
      Alert.alert('Erro de Conexão', 'Não foi possível conectar ao servidor. Verifique sua internet.');
    } else if (error.name === 'ValidationError') {
      // Erro de validação do Yup
      const errors = {};
      error.inner.forEach(err => {
        errors[err.path] = err.message;
      });
      setErrors(errors);
      Alert.alert('Erro de Validação', 'Por favor, preencha todos os campos obrigatórios corretamente.');
    } else {
      // Outros erros
      console.log('Error', error.message);
      Alert.alert('Erro', 'Ocorreu um erro inesperado: ' + error.message);
    }
  } finally {
    setLoading(false); // Finaliza o carregamento
  }
};
  return (

    <ScrollView contentContainerStyle={styles.container}>
      <Label style={styles.title}>Cadastrar Venda</Label>
      <FormInput placeholder="Nome:" value={cliente?.nome} onChangeText={text => setCliente({ ...cliente, nome: text })} 
      errorMessage={errors?.comprador}/>
      <FormInput placeholder="CPF:" value={cliente?.cpf} onChangeText={text=>setCliente({...cliente, cpf: text})}
      errorMessage={errors?.vendedor}/>
      <FormInput placeholder="Endereço:" value={cliente?.endereco} onChangeText={text=>setCliente({...cliente, endereco: text})}
      errorMessage={errors?.endereco}/>
      
      <FormInput placeholder="Data da Cadastro:" value={cliente?.dataCadastro} 
      onChangeText={text=>setCliente({...cliente, dataCadastro: text})}
      errorMessage={errors?.dataCadastro}/>
      
      <ConfirmButton 
      title={loading ? "Enviando..." : "Confirmar"} 
      onPress={handleSubmit}
      disabled={loading}
      />
      
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
