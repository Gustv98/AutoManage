import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ConfirmButton from "../../components/ConfirmButton";
import FormInputLogin from "../../components/FormInputLogin";

export default function Login({navigation}:any){

const [inputValue, setInputValue] = useState('');

const handleChange = (text:string) =>{
    setInputValue(text)
}
    function onPress(): void {
        throw new Error("Function not implemented.");
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>AutoManage</Text>
            <Text style={styles.title}>Cadastro</Text>
            <FormInputLogin placeholder="Nome Completo:" />
            <FormInputLogin placeholder="Email:" />
            <FormInputLogin placeholder="Senha:" />

            
            
            <ConfirmButton title="Cadastrar" onPress={onPress}/>
            <TouchableOpacity onPress={onPress}>
                <Text>Esqueceu a senha?</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        gap: 15,
    },
    title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  } 
);