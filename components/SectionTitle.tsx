import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function SectionTitle({ title }: { title: string }) { // Estilização do título da seção VendasScreen
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '400',
    color: '#111',
    textAlign: 'center',
    letterSpacing: 1,
  },
});