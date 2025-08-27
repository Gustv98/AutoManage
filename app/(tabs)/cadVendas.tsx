import { Label } from '@react-navigation/elements';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ConfirmButton from '../../components/ConfirmButton';
import FormInput from '../../components/FormInput';

export default function VendaForm() {
  const [venda, setVenda] = useState(null);
  

  const handleSubmit = () => {
    fetch('', { //aqui vai o link da api
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(venda),
    }).then(response => response.json()).catch(data => console.log(data));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Label style={styles.title}>Cadastrar Venda</Label>
      <FormInput placeholder="Comprador:" value={venda?.comprador} onChangeText={text=>setVenda({...venda, comprador: text})} />
      <FormInput placeholder="Vendedor:" value={venda?.vendedor} onChangeText={text=>setVenda({...venda, vendedor: text})} />
      <FormInput placeholder="Endereço:" value={venda?.endereco} onChangeText={text=>setVenda({...venda, endereco: text})} />
      <FormInput placeholder="Data da Venda:" value={venda?.dataVenda} onChangeText={text=>setVenda({...venda, dataVenda: text})}/>
      <FormInput placeholder="Placa do Veículo:" value={venda?.placa} onChangeText={text=>setVenda({...venda, placa: text})} />
      <FormInput placeholder="Modelo:" value={venda?.modelo} onChangeText={text=>setVenda({...venda, modelo: text})} />
      <FormInput placeholder="Pagamento:" value={venda?.pagamento} onChangeText={text=> setVenda({...venda, pagamento: text})} />
      <FormInput placeholder="Valor da Comissão:" value={venda?.comissao} onChangeText={text=> setVenda({...venda, comissao: text})} />

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
