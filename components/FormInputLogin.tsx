import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export default function FormInput(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor="#000000ff"
      {...props}  // permite passar outras props como placeholder, value, onChangeText, etc.
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 256,
    height: 45,
    backgroundColor: '#ada8a8ff',
    opacity: 0.55,
    borderRadius: 40,
    paddingHorizontal: 12, // espaço interno pro texto não grudar nas bordas
    fontSize: 16,
    color: '#000', // cor do texto digitado
  },
});
