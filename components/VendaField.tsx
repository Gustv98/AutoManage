import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface VendaFieldProps {
  label: string;
  editable?: boolean;
  value?: string;
  onChange?: (text: string) => void;
}

export function VendaField({ label,editable=false, value, onChange }: VendaFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} value={value} onChangeText={text=>onChange?.(text)} editable={editable} />
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