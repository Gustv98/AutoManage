import { Label } from '@react-navigation/elements';
import axios from 'axios';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import ConfirmButton from '../../components/ConfirmButton';
import FormInput from '../../components/FormInput';

const vendaSchema = Yup.object().shape({
  comprador: Yup.string().required('Comprador é obrigatório'),
  vendedor: Yup.string().required('Vendedor é obrigatório'),
  endereco: Yup.string().required('Endereço é obrigatório'),
  dataVenda: Yup.string().required('Data da Venda é obrigatória').matches(/^\d{2}\/\d{2}\/\d{4}$/, 'Data inválida'),
  placa: Yup.string().required('Placa do Veículo é obrigatória').matches(/^[A-Z]{3}-\d{4]$/, 'Placa inválida'),
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

  const [loading, setLoading] = useState(false); // Estado de carregamento

const handleSubmit = async () => {
  setLoading(true); // Inicia o carregamento
  try {
    await vendaSchema.validate(venda, { abortEarly: false });
    
    // Se a validação for bem-sucedida, envie os dados para o servidor
    const response = await axios.post('', venda, {
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

    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={50} style={styles.container}>
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

      <ConfirmButton 
      title={loading ? "Enviando..." : "Confirmar"} 
      onPress={handleSubmit}
      disabled={loading}
      />
      
    </KeyboardAvoidingView>
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
