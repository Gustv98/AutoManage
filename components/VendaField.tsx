import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface VendaFieldProps extends TextInputProps {
  label: string;
}

export function VendaField({ label, ...props }: VendaFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} editable={false} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 4,
  },
  label: {
    fontSize: 16,
    color: '#222',
    textAlign: 'center',
    marginBottom: 2,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 4,
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    color: '#000',
  },
});