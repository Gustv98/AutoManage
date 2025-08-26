import { useRouter } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ConfirmButton from "../../components/ConfirmButton";
import FormInputLogin from "../../components/FormInputLogin";

export default function Login() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleChange = (text: string) => {
    setInputValue(text);
  };

  function onPress(): void {
    // Implemente a lógica de login aqui
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AutoManage</Text>
      <Text style={styles.title}>Login</Text>
      <FormInputLogin placeholder="Email:" />
      <FormInputLogin placeholder="Senha:" />

      <ConfirmButton title="Entrar" onPress={onPress} />
      <TouchableOpacity onPress={onPress}>
        <Text>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/cadastro")}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
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
});