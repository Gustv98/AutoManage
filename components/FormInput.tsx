import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface FormInputProps extends TextInputProps {
  errorMessage?: string;
}

export default function FormInput({errorMessage, ...props}: FormInputProps) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholderTextColor="#000000ff"
        {...props}  
      />
      {errorMessage && (
        <Text style={styles.error}>{errorMessage}</Text>
      )}
    </View>
    
  );
}

const styles = StyleSheet.create({
  input: {
    width: 328,
    height: 45,
    backgroundColor: '#a09a9aff',
    opacity: 0.55,
    borderRadius: 40,
    paddingHorizontal: 12, // espaço interno pro texto não grudar nas bordas
    fontSize: 16,
    color: '#000', // cor do texto digitado
  },
  error: {
    color: 'red',
  },
});
