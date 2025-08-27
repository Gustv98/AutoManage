import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Header() { // Estilização do Header customizado para a tela de vendas
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>AutoManage</Text>
      <View style={styles.headerIcons}>
        <View style={styles.headerCircle}>
          <Feather name="plus" size={22} color="#bbb" />
        </View>
        <Feather name="arrow-left" size={28} color="#bbb" style={{ marginLeft: 8 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#d3d3d3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '400',
    color: '#111',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});