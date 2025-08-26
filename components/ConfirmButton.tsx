import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function ConfirmButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00C400", // verde
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 40, // deixa bem arredondado
    alignItems: "center",
    justifyContent: "center",
    width: 256,
    height: 45,
  },
  text: {
    color: "#000",
    fontSize: 14,
    fontWeight: "500",
  },
});


/* Botão */

